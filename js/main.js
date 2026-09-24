import * as THREE from 'three';
import { buildWorld, drawKeypad, drawSevenSeg } from './world.js';
import { LabSim, PH, PH_COLORS, C, setPalette } from './labsim.js';
import { Terminal } from './terminal.js';
import { GridGame, CFG as GRID } from './gridgame.js';
import { SyncSim, drawSyncScope } from './sync.js';
import { makePuzzle, evalCircuit, RES_HEX, RES_COLORS, RES_MULT } from './puzzle.js';
import { memos, checklistText, whiteboardLines, INTRO, RANKS } from './story.js';
import { Sound } from './audio.js';
import { loadSettings, settingsHtml, bindSettings } from './settings.js';
import { TouchControls, isTouchDevice } from './touch.js';
import { redraw, FONT } from './textures.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { PostFX } from './postfx.js';
import { poolLights, mergeStatic, referencedObjects } from './perf.js';

// ============================================================ boot
const params = new URLSearchParams(location.search);
const BEST_KEY = 'ple-best-v2', TIME_LIMIT = 60 * 60;
const saveKey = (s) => `ple-save-v2-${s}`;   // one save slot per room (classic = 0, daily = yyyymmdd)
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* ignore */ } },
};
const todaySeed = () => { const d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); };
const seed = Number(params.get('seed')) || 0;
const SAVE_KEY = saveKey(seed);
{ const old = store.get('ple-save-v2'); if (old) { store.set(saveKey(old.seed || 0), old); store.del('ple-save-v2'); } }   // migrate single-slot saves
const P = makePuzzle(seed);
const settings = loadSettings();
setPalette(settings.palette);
const $ = (id) => document.getElementById(id);

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: settings.quality === 'low', powerPreference: 'high-performance' });
} catch {
  document.body.insertAdjacentHTML('beforeend', '<div class="overlay"><div class="card"><h2>WebGL unavailable</h2><p>This game needs a browser with WebGL enabled.</p></div></div>');
  throw new Error('WebGL unavailable');
}
const pixelRatio = () => Math.min(devicePixelRatio || 1, { low: 1, auto: 1.5, high: 2 }[settings.quality] ?? 1.5);
const perf = { ema: 16.7, t: 0, scale: 1, good: 0 };                      // resolution scale, driven by governor()
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
// a single shadow-casting light (through the control-room window: lightning, then the evening sun); its map is drawn once
renderer.shadowMap.enabled = !isTouchDevice(); renderer.shadowMap.type = THREE.PCFShadowMap;
$('app').appendChild(renderer.domElement);
const canvas = renderer.domElement;
canvas.setAttribute('aria-label', '3D view of the laboratory');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05080c);
const camera = new THREE.PerspectiveCamera(settings.fov, innerWidth / innerHeight, 0.05, 100);
camera.rotation.order = 'YXZ';
// image-based lighting: gives metals, paint and floors believable reflections (intensity follows the room lights)
{ const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture; pmrem.dispose(); }
scene.environmentIntensity = 0.08;
const postfx = new PostFX(renderer, scene, camera);
let postQuality = null;
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  postfx.setSize(innerWidth, innerHeight);
});

const { colliders, refs } = buildWorld(scene, P);
// upload the large outdoor layers and compile every shader now, not at the first look out of the window
for (const t of Object.values(refs.outside.night)) renderer.initTexture(t);
// only surfaces the window light can reach (control room, corridor, front of the booth) sample its shadow map
const bb = new THREE.Box3();
scene.traverse((o) => {
  if (!o.isMesh || o.material.transparent || o.material.isShaderMaterial) return;
  bb.setFromObject(o); o.castShadow = true; o.receiveShadow = bb.min.z < -1 && bb.min.y < 3.3;
});
const lightPool = poolLights(scene, { points: 4, spots: 4 });        // 14 lights → 8 (+ the window light) per pixel
mergeStatic(scene, referencedObjects(refs));                            // fewer draw calls for the static set dressing
refs.cat.eyeOpen.visible = true;                          // compile the cat's open eye too, not on the 4th pet
renderer.compile(scene, camera);
refs.cat.eyeOpen.visible = false;
// the last shot of the game: the outdoor view rendered full-screen from a camera that has stepped out onto the terrace
const outroView = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), refs.outside.material(refs.doorFrame, { trees: false }));   // (a tree would stand right beside the camera)
Object.assign(outroView.material, { depthTest: false, depthWrite: false });
outroView.raycast = () => {};                            // invisible most of the time, but it sits right in front of the camera
outroView.renderOrder = 1000; outroView.frustumCulled = false; outroView.position.z = -0.2; outroView.visible = false;
camera.add(outroView); scene.add(camera);
const fadeEl = document.createElement('div'); fadeEl.id = 'fade'; document.body.appendChild(fadeEl);
const captionEl = document.createElement('div'); captionEl.id = 'caption'; document.body.appendChild(captionEl);
function caption(text, sec = 4) { captionEl.textContent = text; captionEl.classList.add('show'); clearTimeout(caption.t); caption.t = setTimeout(() => captionEl.classList.remove('show'), sec * 1000); }
const sim = new LabSim(P);
const sync = new SyncSim(P);
const sound = new Sound(); sound.setVolume(settings.volume);
const MEMOS = memos(P);

// highlight for the targeted object: an outline in post-processing; this box is the fallback on 'low' quality
const highlight = new THREE.Box3Helper(new THREE.Box3(), 0xffd24a);
highlight.material.depthTest = false; highlight.material.transparent = true; highlight.material.opacity = 0.7; highlight.renderOrder = 10;
highlight.visible = false; scene.add(highlight);
const rayTargets = [];
scene.traverse((o) => { if (o.isMesh) rayTargets.push(o); });

// ============================================================ DOM
const ui = {
  hud: $('hud'), start: $('start'), resume: $('resume'), menu: $('menu'), panel: $('panel'), panelTitle: $('panelTitle'), panelBody: $('panelBody'),
  prompt: $('prompt'), cross: $('crosshair'), objective: $('objective'), busHud: $('busHud'), toast: $('toast'), end: $('end'),
  timer: $('timer'), inv: $('inv'), hint: $('hintBox'), journal: $('journal'),
};
/** vertical FOV from the setting — widened in portrait so phones don't get tunnel vision (≥ 62° horizontal) */
function viewFov() {
  const a = camera.aspect;
  return a >= 1 ? settings.fov : Math.max(settings.fov, Math.min(100, 2 * Math.atan(Math.tan((62 * Math.PI) / 360) / a) * 180 / Math.PI));
}
function applySettings() {
  camera.fov = viewFov(); camera.updateProjectionMatrix();
  renderer.toneMappingExposure = 1.15 * settings.brightness;
  sound.setVolume(settings.volume);
  document.documentElement.style.setProperty('--ui', settings.uiScale);
  setPalette(settings.palette);
  if (settings.quality !== 'auto') perf.scale = 1;
  renderer.setPixelRatio(pixelRatio() * perf.scale);
  if (postQuality !== settings.quality) { postQuality = settings.quality; postfx.configure(settings.quality, { touch: isTouchDevice() }); }
  postfx.setSize(innerWidth, innerHeight);
  sim.version++;
}
applySettings();

// ============================================================ game state
const G = {
  mode: 'start',        // start | play | paused | menu | panel | terminal | grid | hint | journal | end
  stage: 'lab',         // lab | control | root | permit | synced | won
  panelId: null, panelVersion: -1, pver: 0, target: null,
  inventory: [], journal: {}, heard: {},
  hints: { used: 0, revealed: {} },
  time: { elapsed: 0, penalty: 0, splits: {} },
  drawer: { code: [0, 0, 0, 0], open: false, taken: false },
  board: { bits: [0, 0, 0, 0], solved: false, fails: 0 },
  diag: false, f2seen: false, exitOpen: false, catPets: 0, termOpened: false, busSeen: false,
  shake: 0, shakeDir: new THREE.Vector3(0, 1, 0),
};
/** a damped camera kick in one direction (not white-noise jitter) */
function kick(sec) { if (settings.reducedMotion) return; G.shake = sec; G.shakeDir.set(Math.random() - 0.5, 1, Math.random() - 0.5).normalize(); }
const player = { x: 0, z: 2.6, yaw: 0, pitch: -0.05, eye: 1.65, r: 0.3, vx: 0, vz: 0, bob: 0, stepAcc: 0 };
const keys = {};
let sprintTouch = false;
let touch = null;
const clearKeys = () => { for (const k in keys) keys[k] = false; touch?.reset(); sprintTouch = false; };

const mmss = (s) => { const a = Math.abs(Math.round(s)); return `${s < 0 ? '+' : ''}${String(Math.floor(a / 60)).padStart(2, '0')}:${String(a % 60).padStart(2, '0')}`; };
const totalTime = () => G.time.elapsed + G.time.penalty;

// ------------------------------------------------------------ toasts (queued)
const toasts = [];
let toastTimer = 0;
function toast(msg, kind = 'info') {
  if (toasts.length && toasts[toasts.length - 1].msg === msg) return;
  toasts.push({ msg, kind });
  if (toastTimer <= 0) nextToast();
}
function nextToast() {
  const t = toasts.shift();
  if (!t) { ui.toast.classList.remove('show'); return; }
  ui.toast.textContent = t.msg;
  ui.toast.className = 'show ' + (t.kind === 'bad' ? 'bad' : t.kind === 'good' ? 'good' : '');
  toastTimer = Math.min(6, 2.2 + t.msg.length / 30);
}
function penalty(sec, why) {
  G.time.penalty += sec;
  toast(`⏱ +${mmss(sec)} — ${why}`, 'bad');
  ui.timer.classList.remove('pen'); void ui.timer.offsetWidth; ui.timer.classList.add('pen');
}

// ------------------------------------------------------------ inventory & journal
const ITEMS = { handwheel: '🔴 Valve handwheel', permit: '🪪 Reconnection permit card' };
function addItem(id) { if (!G.inventory.includes(id)) { G.inventory.push(id); sound.pickup(); toast(`Picked up: ${ITEMS[id]}`, 'good'); renderInv(); } }
function useItem(id) { G.inventory = G.inventory.filter((i) => i !== id); renderInv(); }
function renderInv() { ui.inv.innerHTML = G.inventory.map((i) => `<span class="chip">${ITEMS[i]}</span>`).join(''); }
function note(id, title, text) {
  if (G.journal[id]) return;
  G.journal[id] = { title, text, t: totalTime() };
  $('jBadge')?.classList.add('new');
}

// ------------------------------------------------------------ stages
const SPLIT = { control: 'Booth door', root: 'Root access', permit: 'Reconnection permit', synced: 'Grid synchronised', won: 'Escaped' };
function setStage(st) {
  if (G.stage === st) return;
  G.stage = st;
  G.time.splits[st] = totalTime();
  if (st === 'control') { G.boltIn = 0.6; refs.windowLight.shadow.needsUpdate = true; }   // a strike right as the door reveals the window
  if (st === 'permit') {
    addItem('permit');
    // the grid operator re-energises the city: it is live again at our incomer — only this building is still dark.
    // Draw + upload the evening now as well (hidden by the console closing), not at the sync moment.
    for (const m of ['restored', 'evening']) for (const tex of refs.outside.prepare(m)) renderer.initTexture(tex);
    refs.outside.setMode('restored');
    setTimeout(() => caption('Across the river the city lights come back on. The grid is live again — only this building is still dark.', 6), 1200);
  }
  if (st === 'synced') {
    refs.outside.setMode('evening');                                         // the storm front passes; the sun sets behind the old town
    G.exitOpen = true; G.syncT = 0;
    sim.s.grid = true;
    refs.windowLight.shadow.needsUpdate = true;
  }
  save();
}

function objective() {
  if (G.stage === 'lab') return sim.objective() || 'The door is open. Go through.';
  return {
    control: 'Get the building back on the grid. The <b>control PC</b> is on the desk.',
    root: 'You are root. Get the <b>reconnection permit</b>: run <b>gridctl</b>.',
    permit: 'Permit granted. <b>Synchronise</b> the lab with the grid at the tie panel (Q0) next to the exit.',
    synced: 'The exit is open. <b>Get out!</b>',
    won: 'You escaped. Feel free to look around.',
  }[G.stage];
}

function hintTopic() {
  if (G.stage === 'lab') return sim.hintTopic();
  if (G.stage === 'control') {
    if (!G.termOpened) return { id: 'pc', tiers: ['There is a computer in this room.', 'The PC on the desk runs on the UPS.', 'Walk to the desk and use the PC.'] };
    return terminal.hintTopic({ f2seen: G.f2seen, f3: G.board.solved }) || { id: 'root', tiers: ['You have everything.', 'Combine the fragments.', `su root → ${P.rootPw}`] };
  }
  if (G.stage === 'root') return { id: 'gridctl', tiers: [
    'Marco\'s mail (mail) and /root/README describe the reconnection procedure.',
    `Run gridctl as root and validate a 24-h dispatch: reach ≥ ${GRID.WIN_RATIO * 100} % of the benchmark's extra profit.`,
    'At negative prices: curtail, charge, electrolyze. At the evening peak: discharge (fuel cell above its break-even). The 💡 advisor gives per-hour advice.'] };
  if (G.stage === 'permit') return { id: 'sync', tiers: [
    'The tie panel (Q0) is on the east wall next to the exit. Marco pinned a checklist nearby, and the grid operator\'s e-mail lists their values.',
    'Insert the permit card. Match the voltage, run the island slightly FASTER than the grid, and watch the three lamps: if they chase each other instead of going dark together, the incoming phases are swapped. Close on the synchroscope at 12 o\'clock.',
    `Insert the permit card. Island ${P.gridV} V, ${(P.gridF + 0.04).toFixed(2)} Hz. ${P.swapped ? 'In this room the lamps chase → press "Swap L2 ↔ L3" once.' : 'In this room the lamps already go dark together → leave the jumper as found.'} Press CLOSE (or Space) when the needle is in the green sector.`] };
  return { id: 'exit', tiers: ['Walk out!', 'The exit door is in the east wall of the control room.', 'Go through the open exit door and down the corridor.'] };
}

// ============================================================ subsystems
const terminal = new Terminal(P, {
  onGridctl: () => { terminal.close(); openGrid(); },
  onDiag: (on) => { G.diag = on; note('diag', 'SCADA diag', 'scada diag latched a pattern on the rack\'s DIAG LED row.'); },
  onKey: () => sound.keyType(),
  onEscape: () => closeOverlay(),
  onHint: () => openHint(),
  onRoot: () => setStage('root'),
  getState: () => ({ permit: grid.permit, synced: G.stage === 'synced' || G.stage === 'won', labOn: sim.f.live.some(Boolean) }),
});
const grid = new GridGame((res) => {
  G.gridResult = res;
  grid.close();
  setStage('permit');
  closeOverlay();
  toast('🪪 Reconnection permit card issued. Take it to the tie panel (Q0) next to the exit and synchronise.', 'good');
}, seed);
grid.onClose = () => closeOverlay();
grid.onHint = (firstToday) => { if (firstToday) G.hints.used++; penalty(15, 'advisor consulted'); };

const touchMode = isTouchDevice();
document.body.classList.toggle('touch', touchMode);
touch = new TouchControls(canvas, {
  look: (dx, dy) => { if (G.mode === 'play') look(dx * 1.6, dy * 1.6); },
  tap: (x, y) => { if (G.mode === 'play') tapInteract(x, y); },
  use: () => { if (G.mode === 'play') interact(G.target); },
  menu: () => openMenu(),
  hint: () => openHint(),
  journal: () => openJournal(),
  sprint: (on) => { sprintTouch = on; },
});

// ============================================================ pointer lock / modes
let lockedAt = 0;
function lockPointer() {
  if (touchMode) { enterPlay(); return; }
  const fail = () => { if (G.mode === 'paused') ui.resume.classList.remove('hidden'); };
  try {
    const p = canvas.requestPointerLock({ unadjustedMovement: true });
    if (p && p.catch) p.catch(() => { try { const p2 = canvas.requestPointerLock(); if (p2 && p2.catch) p2.catch(fail); } catch { fail(); } });
  } catch { try { canvas.requestPointerLock(); } catch { fail(); } }
}
function enterPlay() {
  G.mode = 'play';
  if (G.coldPending) { G.coldPending = false; G.cold = 0; }
  ui.resume.classList.add('hidden');
  lockedAt = performance.now();
}
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) enterPlay();
  else { clearKeys(); if (G.mode === 'play') openMenu(); }
});
document.addEventListener('pointerlockerror', () => { if (G.mode === 'paused') ui.resume.classList.remove('hidden'); });
ui.resume.addEventListener('click', () => { sound.init(); if (touchMode) enterPlay(); else lockPointer(); });
canvas.addEventListener('click', () => { if (G.mode === 'paused' && !touchMode) { sound.init(); lockPointer(); } });
addEventListener('blur', () => { clearKeys(); if (G.mode === 'play' && touchMode) openMenu(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) { clearKeys(); save(); if (G.mode === 'play' && touchMode) openMenu(); } });

const OVERLAYS = ['panel', 'terminal', 'grid', 'hint', 'journal', 'menu'];
function openOverlay(mode) {
  G.mode = mode;
  clearKeys();
  if (document.pointerLockElement) document.exitPointerLock();
  ui.resume.classList.add('hidden');
  ui.prompt.style.display = 'none';
  ui.cross.classList.remove('active');
  highlight.visible = false;
  touch.enable(false);
}
function closeOverlay() {
  ui.panel.classList.add('hidden');
  ui.hint.classList.add('hidden');
  ui.journal.classList.add('hidden');
  ui.menu.classList.add('hidden');
  terminal.close();
  grid.close();
  G.panelId = null;
  document.activeElement?.blur?.();
  if (G.mode === 'end' || G.mode === 'start') return;
  if (G.returnTo && ['hint', 'journal'].includes(G.mode)) {             // back to the terminal / console the player came from
    const back = G.returnTo; G.returnTo = null;
    if (back === 'terminal') { openOverlay('terminal'); terminal.open(); } else openGrid();
    return;
  }
  G.returnTo = null;
  G.mode = 'paused';
  touch.enable(touchMode);
  if (touchMode) enterPlay(); else lockPointer();
}
document.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', closeOverlay));

// ============================================================ panels (lab devices + props)
const lcd = (txt, red = false) => `<div class="lcd ${red ? 'red' : ''}">${txt}</div>`;
let circuitUrl = null;
const circuitImg = () => (circuitUrl ??= refs.circuitCanvas.toDataURL());
const drawLock = () => redraw(refs.drawerLockTex, (ctx, w, h) => { ctx.fillStyle = '#222'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#ddd'; ctx.font = `bold 34px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText(G.drawer.code.join(' '), w / 2, 36); });

function propPanel(id) {
  const D = {};
  D.cat = {
    title: 'A sleeping cat',
    controls: () => `<p>A ginger cat is curled up on top of INV-2, enjoying the warm fan exhaust.</p>
      <div class="lcd" style="font-size:18px">Collar tag: “${P.cat.toUpperCase()}”</div>
      <button class="btn" data-act="pet">Pet the cat</button>`,
    onOpen: () => note('cat', 'The cat on INV-2', `Collar tag: "${P.cat.toUpperCase()}"`),
    onAct: () => {
      G.catPets++; sound.purrLoud();
      if (G.catPets > 3) G.catEye = 2.5; else G.earFlick = { ear: G.catPets % 2, t: 0.35 };
      toast(G.catPets > 3 ? 'He opens one eye. Judging you.' : 'Prrrrr. (He did not bite.)');
    },
  };
  D.drawer = {
    title: 'Bench drawer · 4-wheel combination lock',
    controls: () => (G.drawer.open
      ? (G.drawer.taken ? '<p>Empty — cable ties, a multimeter fuse and half a cookie.</p>' : '<p>Inside: the missing <b>handwheel</b> of the H₂ valve.</p><button class="btn on" data-act="take">Take the handwheel</button>')
      : `<p class="note">Four number wheels.<span class="kbd-hint"> (You can also type the digits and press Enter.)</span></p>
        <div class="wheels">${G.drawer.code.map((d, i) => `<div class="wheel"><button class="btn" data-act="dw:${i}:1" aria-label="wheel ${i + 1} up">▲</button><div class="digit">${d}</div><button class="btn" data-act="dw:${i}:-1" aria-label="wheel ${i + 1} down">▼</button></div>`).join('')}</div>
        <button class="btn on" data-act="dopen">Pull the drawer</button>`),
    onAct: (a) => {
      const [k, i, dir] = a.split(':');
      if (k === 'dw') G.drawer.code[i] = (G.drawer.code[i] + Number(dir) + 10) % 10;
      if (k === 'digit') { G.drawer.code.shift(); G.drawer.code.push(Number(i)); }
      if (k === 'dopen') {
        if (G.drawer.code.join('') === P.drawerCode) { G.drawer.open = true; sound.clack(); toast('Click — the drawer slides open.', 'good'); note('drawer', 'Bench drawer', `Code ${P.drawerCode}. It held the H₂ valve handwheel.`); }
        else if ([`${P.bands.join('')}0`, `0${P.bands.join('')}`].includes(G.drawer.code.join(''))) {
          // the classic misreading: third band taken as a digit (4-7-2 → 4720 or 0472) — nudge, no penalty
          sound.bad(); toast('The wheels almost give… Is the third band really a digit? Check the colour-code poster.', 'bad');
        } else { sound.bad(); toast('The lock doesn\'t budge.', 'bad'); }
      }
      if (k === 'take') { G.drawer.taken = true; addItem('handwheel'); }
      drawLock();
    },
  };
  D.resistor = {
    title: 'A display resistor with a sticky note',
    controls: () => `<div class="resistor"><span class="lead"></span><span class="rbody">${P.bands.map((b) => `<i style="background:${RES_HEX[b]}"></i>`).join('')}<i class="gap"></i><i style="background:#c8a040"></i></span><span class="lead"></span></div>
      <div class="board" style="font-size:18px">"Drawer = my value in Ω." <span style="float:right">— M.V.</span></div>
      <p class="note">Bands are read from the end they are closest to. The separate gold band is the tolerance.</p>`,
    onOpen: () => note('resistor', 'Resistor sticky note', `"Drawer = my value in Ω." Bands: ${P.bands.map((b) => RES_COLORS[b]).join(', ')}, gold.`),
  };
  D.colorcode = {
    title: 'Resistor colour code (poster)',
    controls: () => `<p><b>Bands 1 + 2 = digits · band 3 = multiplier</b> <span class="bad">(band 3 is not a digit — it adds zeros)</span> · band 4 = tolerance</p>
      <table class="phase-table"><tr><th>Colour</th><th>Digit (bands 1–2)</th><th>Multiplier (band 3)</th></tr>${RES_COLORS.map((n, i) => `<tr><td><i class="sw" style="background:${RES_HEX[i]}"></i> ${n}</td><td>${i}</td><td>${RES_MULT[i]} <span class="note">(${i ? `+${i} zero${i > 1 ? 's' : ''}` : 'no zeros'})</span></td></tr>`).join('')}<tr><td><i class="sw" style="background:#c8a040"></i> gold</td><td>—</td><td>tolerance ±5 %</td></tr></table>
      <p class="note">Example: brown · black · orange · gold = 1, 0, ×1 000 → 10 × 1 000 = 10 000 Ω.</p>`,
    onOpen: () => note('colorcode', 'Resistor colour code', 'Bands 1+2 = digits, band 3 = MULTIPLIER (number of zeros), band 4 = tolerance. black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9. Example: brown·black·orange = 10 × 1 000 = 10 000 Ω.'),
  };
  D.whiteboard = {
    title: 'Whiteboard (half erased)',
    controls: () => `<div class="board">${whiteboardLines(P).map(([tx, c]) => `<div style="color:${c};white-space:pre-wrap">${tx}</div>`).join('')}</div>`,
    onOpen: () => note('whiteboard', 'Whiteboard', whiteboardLines(P).map((l) => l[0].trim()).join('\n')),
  };
  D.plaque = {
    title: 'Brass plaque',
    controls: () => `<div class="board" style="background:#b8923a;color:#3b2a08;text-align:center;font-family:Georgia,serif">SOLAR TEST LABORATORY<br><b style="font-size:26px">EST. ${P.year}</b><br><i>"Power to the people."</i></div>`,
    onOpen: () => note('plaque', 'Brass plaque', `Solar Test Laboratory — est. ${P.year}`),
  };
  for (const r of ['rec1', 'rec2', 'rec3', 'rec4']) {
    D[r] = {
      title: MEMOS[r].title,
      controls: () => `<div class="memo">▶ ${MEMOS[r].text.replace(/\n/g, '<br>')}</div><button class="btn" data-act="replay">↻ Replay</button>`,
      onOpen: () => { playMemo(); G.heard[r] = true; note(r, MEMOS[r].title, MEMOS[r].text); },
      onAct: () => playMemo(),
    };
  }
  D.rack = {
    title: 'Server rack · DIAG LED row',
    controls: () => (G.diag
      ? `<div class="leds">${P.binStr.split('').map((b) => `<span class="led ${b === '1' ? 'on' : ''}"></span>`).join('')}</div><p class="note">◀ MSB · lit = 1 · 8 bits</p>`
      : '<p>The DIAG row is dark. Some SCADA diagnostic must drive it.</p>'),
    onOpen: () => { if (G.diag) { G.f2seen = true; note('rackdiag', 'DIAG LED pattern', `${P.binStr.replace(/1/g, '●').replace(/0/g, '○')}  (lit = 1, MSB left)`); } },
  };
  D.circuit = {
    title: 'Poster: FW-BOARD circuit',
    controls: () => `<img class="circuit-img" src="${circuitImg()}" alt="Logic circuit: inputs A to D feed gates whose outputs are ANDed into the output LED">`,
  };
  D.board = {
    title: 'FW-BOARD · logic board',
    controls: () => `<img class="circuit-img" src="${circuitImg()}" alt="Logic circuit">
      <div class="seg" style="margin:10px 0">${'ABCD'.split('').map((n, i) => `<button class="btn tog ${G.board.bits[i] ? 'on' : ''}" data-act="bt:${i}" ${G.board.solved ? 'disabled' : ''}>${n} = ${G.board.bits[i]}</button>`).join('')}
      <button class="btn big" data-act="btest" style="margin:0 0 0 8px" ${G.board.solved ? 'disabled' : ''}>TEST</button></div>
      <p class="note"><span class="kbd-hint">Keys 1–4 toggle A–D, Enter tests. </span>A wrong TEST trips the security alarm (+0:30).</p>`,
    live: () => (G.board.solved ? lcd(`OUT = 1  ✔\nDISPLAY: ${P.f3}   (fragment 3)`) : lcd(`OUT = ?   inputs ${G.board.bits.join(' ')}`)),
    onAct: (a) => {
      const [k, i] = a.split(':');
      if (G.board.solved) return;
      if (k === 'bt') G.board.bits[i] ^= 1;
      if (k === 'btest') {
        if (evalCircuit(P.circuitDef, G.board.bits)) { G.board.solved = true; sound.good(); toast(`FW-BOARD: OUT = 1 — the display shows "${P.f3}".`, 'good'); note('f3', 'Fragment 3', `FW-BOARD display: ${P.f3}`); }
        else { G.board.fails++; sound.bad(); sound.beep(880, 0.5, 'square', 0.06, 0.1); penalty(30, 'FW-BOARD alarm: output 0'); }
      }
    },
  };
  D.checklist = {
    title: 'Sync checklist (pinned to the wall)',
    controls: () => `<div class="board" style="white-space:pre-wrap;font-size:16px">${checklistText()}</div>`,
    onOpen: () => note('checklist', 'Sync checklist', checklistText()),
  };
  D.sync = {
    title: 'Grid tie panel · breaker Q0',
    controls: () => `<canvas id="syncCv" class="synccv" width="720" height="420"></canvas>
      ${!sync.closed && !sync.islandOn ? lcd('ISLAND BUS DEAD — the lab cluster has no voltage. Energise it again in the booth (e.g. PV on INV-1).', true) : ''}
      ${sync.closed ? lcd('Q0 CLOSED — the lab is connected to the grid ✔')
        : !grid.permit ? lcd('Q0 INTERLOCKED — no reconnection permit from the grid operator yet (gridctl).', true)
          : !G.permitIn ? `${lcd('Q0 INTERLOCKED — insert the operator\'s permit card.', true)}<button class="btn on" data-act="permit">🪪 Insert the permit card</button>` : lcd('Permit card accepted — interlock released.')}
      <div class="ctl"><label>Island voltage</label><div class="seg">${[-5, -1, 1, 5].map((v) => `<button class="btn" data-act="sv:${v}">${v > 0 ? '+' : '−'}${Math.abs(v)} V</button>`).join('')}</div></div>
      <div class="ctl"><label>Island frequency</label><div class="seg">${[-0.1, -0.01, 0.01, 0.1].map((v) => `<button class="btn" data-act="sf:${v}">${v > 0 ? '+' : '−'}${Math.abs(v)} Hz</button>`).join('')}</div></div>
      <div class="ctl"><label>Incomer terminals</label><div class="seg"><button class="btn" data-act="swap">⇄ Swap L2 ↔ L3</button></div><span class="note">jumper position ${sync.swapped === P.swapped ? 'A (as found)' : 'B (L2 ↔ L3 exchanged)'}</span></div>
      ${sync.closed ? '' : '<button class="btn big danger" data-act="sclose" style="margin-top:4px">CLOSE Q0 <span class="kbd-hint" style="font-size:12px">(Space)</span></button>'}`,
    anim: () => { const cv = $('syncCv'); if (cv) drawSyncScope(cv.getContext('2d'), cv.width, cv.height, sync); },
    onAct: (a) => {
      const [k, v] = a.split(':');
      if (sync.closed) return;
      if (k === 'sv') sync.isl.V = Math.max(200, Math.min(260, sync.isl.V + Number(v)));
      if (k === 'sf') sync.isl.f = Math.round(Math.max(49, Math.min(51, sync.isl.f + Number(v))) * 100) / 100;
      if (k === 'swap') { sync.swapped = !sync.swapped; sound.clack(); }
      if (k === 'permit') {
        if (G.inventory.includes('permit')) { useItem('permit'); G.permitIn = true; sound.clack(); toast('The interlock key turns — Q0 can now be closed.', 'good'); }
        else toast('You have no permit card.', 'bad');
      }
      if (k === 'sclose') closeTie();
    },
  };
  D.clock = {
    title: 'Wall clock',
    controls: () => (G.stage === 'synced' || G.stage === 'won'
      ? '<p>It is ticking again — the 50 Hz are back. Somebody will have to set it right: it still lags by the length of the blackout.</p>'
      : '<p>A mains-synchronous clock: its motor counts the 50 Hz of the grid. It stopped at <b>18:36:02</b> — the moment the grid went down.</p>'),
    onOpen: () => note('clock', 'Wall clock', 'Mains-synchronous clock, stopped at 18:36:02 when the grid went down.'),
  };
  D.cabinet = { say: () => 'Expense reports 2019–2023 and a folder marked "DO NOT OPEN — M.V.". It is empty.' };
  D.bin = { say: () => `Crumpled drafts. One says: "${P.bands.join('-')}?? NO — the third band is the number of ZEROS. — M.V."` };
  D.boxes = { say: () => 'Spare III-V test modules, still in their foam. The "THIS SIDE UP" arrows point down.' };
  D.papers = { say: () => 'Test protocols for the PV rig. Somebody drew a cat in the margin.' };
  D.cork = { say: () => 'The duty rota, the guest Wi-Fi name, a lunch invite for 12:30. None of it opens anything. Probably.' };
  D.exit = {
    title: 'Exit door',
    controls: () => (G.exitOpen ? '<p>The door is open. Fresh air!</p>' : '<p>The access control is dead: the building has no grid supply. Only the life-safety circuits run on the emergency generator.</p>'),
  };
  return D[id];
}

function playMemo() { for (let i = 0; i < 9; i++) sound.beep(140 + Math.random() * 120, 0.09, 'triangle', 0.05, i * 0.11); }

function closeTie() {
  if (!sync.closed && !sync.islandOn) { sound.bad(); toast('Q0 refuses: the island bus is dead — energise the lab cluster first.', 'bad'); return; }
  if (!grid.permit || !G.permitIn) { sound.bad(); toast(grid.permit ? 'Q0 is interlocked: insert the permit card first.' : 'Q0 is interlocked: no reconnection permit yet (gridctl).', 'bad'); return; }
  const r = sync.check();
  if (r.ok) {
    sync.closed = true; sound.thunk(); sound.resolve();
    setStage('synced');
  } else {
    sync.flash = settings.reduceFlashing ? 0.3 : 1; kick(0.5); sound.clack(); sound.thunk();
    penalty(30, r.why);
  }
}

function getPanel(id) {
  const lab = sim.panel(id);
  if (lab) return { ...lab, lab: true };
  return propPanel(id);
}
function openPanel(id) {
  const def = getPanel(id);
  if (!def) return;
  openOverlay('panel');
  G.panelId = id; G.panelVersion = -1;
  if (sim.panel(id)) G.busSeen = true;                     // the bus HUD appears once the player works on the lab devices
  ui.panelTitle.textContent = def.title;
  ui.panel.classList.remove('hidden');
  def.onOpen?.();
  refreshPanel(true);
}
function refreshPanel(force = false) {
  if (!G.panelId) return;
  const def = getPanel(G.panelId);
  const ver = sim.version * 1000 + G.pver;
  if (force || G.panelVersion !== ver) {
    G.panelVersion = ver;
    ui.panelBody.innerHTML = `<div id="panelLive">${def.live ? def.live() : ''}</div>${def.controls()}`;
  } else if (def.live) {
    const live = $('panelLive'); if (live) live.innerHTML = def.live();
  }
}
function panelAction(act) {
  const def = getPanel(G.panelId);
  if (!def) return;
  sound.click();
  if (act.startsWith('usewheel')) {
    if (G.inventory.includes('handwheel')) { useItem('handwheel'); sim.action('wheel:1'); }
    else toast('You have nothing that fits the spindle.', 'bad');
  } else if (def.lab) {
    sim.action(act);
    if (act === 'pin:OK' && sim.s.sun.unlocked) redraw(refs.keypadTex, (ctx, w, h) => drawKeypad(ctx, w, h, true));
  } else def.onAct?.(act);
  G.pver++;
  refreshPanel(true);
}
ui.panelBody.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
  panelAction(b.dataset.act);
});

function interact(id) {
  if (!id) return;
  sound.init();
  sound.click();
  const say = propPanel(id)?.say;
  if (say) { toast(say()); return; }
  if (id === 'pc') { G.termOpened = true; openOverlay('terminal'); terminal.open(); return; }
  if (id === 'door' && sim.s.door.state === 'open') return;
  openPanel(id);
}
const ray = new THREE.Raycaster(); ray.far = 3.2;
const center = new THREE.Vector2(0, 0);
function tapInteract(x, y) {
  const v = new THREE.Vector2((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);
  ray.setFromCamera(v, camera);
  const hit = ray.intersectObjects(rayTargets, false)[0];
  if (hit?.object.userData.id) interact(hit.object.userData.id);
}

function openGrid() { openOverlay('grid'); grid.open(); }

// ------------------------------------------------------------ hint, journal, menu overlays
function openHint() {
  if (G.mode === 'start' || G.mode === 'end') return;
  G.returnTo = ['terminal', 'grid'].includes(G.mode) ? G.mode : G.returnTo;
  if (G.mode === 'terminal') terminal.close();
  if (G.mode === 'grid') grid.close();
  openOverlay('hint');
  renderHint();
  ui.hint.classList.remove('hidden');
}
function renderHint() {
  const t = hintTopic();
  const rev = G.hints.revealed[t.id] ?? 0;
  const cost = [0, 60, 180];
  ui.hint.querySelector('.hint-body').innerHTML = `
    ${t.tiers.slice(0, rev).map((h, i) => `<div class="hint-tier t${i}"><b>${['Nudge', 'Pointer', 'Solution'][i]}</b> ${h}</div>`).join('') || '<p class="note">Stuck? Reveal a hint for your current problem. Nudges are free; pointers and solutions cost time.</p>'}
    ${rev < 3 ? `<button class="btn ${rev === 2 ? 'danger' : ''}" id="hintMore">${['Show a nudge (free)', 'Show a pointer (+1:00)', 'Show the solution (+3:00)'][rev]}</button>` : ''}`;
  const b = $('hintMore');
  if (b) b.onclick = () => {
    G.hints.revealed[t.id] = rev + 1; G.hints.used++;
    if (cost[rev]) penalty(cost[rev], 'hint');
    renderHint();
  };
}
function openJournal() {
  if (G.mode === 'start' || G.mode === 'end') return;
  G.returnTo = ['terminal', 'grid'].includes(G.mode) ? G.mode : G.returnTo;
  if (G.mode === 'terminal') terminal.close();
  if (G.mode === 'grid') grid.close();
  openOverlay('journal');
  const entries = Object.values(G.journal).sort((a, b) => a.t - b.t);
  $('jBadge')?.classList.remove('new');
  ui.journal.querySelector('.journal-body').innerHTML = `
    <div class="kv"><span>Time</span><span>${mmss(totalTime())} (${mmss(G.time.penalty)} penalties)</span><span>Hints used</span><span>${G.hints.used}</span>
    <span>Inventory</span><span>${G.inventory.map((i) => ITEMS[i]).join(', ') || '—'}</span></div>
    ${entries.length ? entries.map((e) => `<div class="jentry"><b>${e.title}</b><div>${e.text.replace(/\n/g, '<br>')}</div></div>`).join('') : '<p class="note">Clues you read or hear are collected here automatically.</p>'}`;
  ui.journal.classList.remove('hidden');
}
function openMenu(fromStart = false) {
  if (G.mode === 'end') return;
  if (!fromStart) openOverlay('menu');
  G.menuAt = performance.now();
  ui.menu.querySelector('.menu-actions').classList.toggle('hidden', fromStart);
  ui.menu.querySelector('h2').textContent = fromStart ? 'Settings' : 'Menu';
  ui.menu.querySelector('h3').classList.toggle('hidden', fromStart);
  ui.menu.querySelector('.settings-wrap').innerHTML = settingsHtml(settings);
  bindSettings(ui.menu, settings, applySettings);
  ui.menu.classList.remove('hidden');
  ui.menu.dataset.fromStart = fromStart ? '1' : '';
}
ui.menu.addEventListener('click', (e) => {
  const a = e.target.closest('[data-menu]')?.dataset.menu;
  if (!a) return;
  if (a === 'resume') { if (ui.menu.dataset.fromStart) { ui.menu.classList.add('hidden'); return; } sound.init(); closeOverlay(); }
  if (a === 'hint') { ui.menu.classList.add('hidden'); openHint(); }
  if (a === 'journal') { ui.menu.classList.add('hidden'); openJournal(); }
  if (a === 'restart' && confirm('Restart this room from the beginning? Your progress will be lost.')) { store.del(SAVE_KEY); location.search = seed ? `?seed=${seed}&autostart=1` : '?autostart=1'; }
  if (a === 'title') { save(); location.href = location.pathname; }
});

// ============================================================ input
// e.code is layout-independent (WASD on AZERTY too); fall back to e.key where browsers/IMEs leave code empty
const KEYMAP = { w: 'KeyW', a: 'KeyA', s: 'KeyS', d: 'KeyD', e: 'KeyE', h: 'KeyH', j: 'KeyJ', ' ': 'Space', escape: 'Escape', enter: 'Enter', backspace: 'Backspace',
  shift: 'ShiftLeft', arrowup: 'ArrowUp', arrowdown: 'ArrowDown', arrowleft: 'ArrowLeft', arrowright: 'ArrowRight' };
const codeOf = (e) => e.code || KEYMAP[e.key?.toLowerCase()] || e.key;
const digitOf = (e) => (/^\d$/.test(e.key) ? Number(e.key) : /^(?:Digit|Numpad)(\d)$/.test(e.code) ? Number(e.code.slice(-1)) : null);
addEventListener('keydown', (e) => {
  const code = codeOf(e);
  if ((e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') && code !== 'Escape') return;
  if (G.mode === 'start' && code === 'Escape' && !ui.menu.classList.contains('hidden')) { ui.menu.classList.add('hidden'); return; }
  if (G.mode === 'start' || G.mode === 'end') return;
  if (code === 'Escape') {
    if (G.mode === 'menu' && performance.now() - (G.menuAt || 0) < 200) return;   // same Esc that unlocked the pointer
    if (G.mode === 'grid' && grid.modalOpen()) { grid.$('gModal').classList.add('hidden'); return; }
    if (OVERLAYS.includes(G.mode)) { e.preventDefault(); closeOverlay(); }
    else if (G.mode === 'paused' || (G.mode === 'play' && !document.pointerLockElement)) openMenu();
    return;
  }
  if (G.mode === 'panel') {
    const id = G.panelId;
    if (code === 'KeyE' && !e.repeat) { closeOverlay(); return; }
    const d = digitOf(e);
    const enter = code === 'Enter' || code === 'NumpadEnter';
    if (id === 'sunsim' && !sim.s.sun.unlocked) {
      if (d !== null) panelAction(`pin:${d}`);
      if (code === 'Backspace') panelAction('pin:C');
      if (enter) panelAction('pin:OK');
    }
    if (id === 'drawer' && !G.drawer.open) { if (d !== null) panelAction(`digit:${d}`); if (enter) panelAction('dopen'); }
    if (id === 'board' && !G.board.solved) { if (d >= 1 && d <= 4) panelAction(`bt:${d - 1}`); if (enter) panelAction('btest'); }
    if (id === 'sync' && code === 'Space') { e.preventDefault(); if (!e.repeat) panelAction('sclose'); }
    if (id === 'door' && enter) panelAction('door:open');
    return;
  }
  if (code === 'KeyH' && ['play', 'paused', 'hint'].includes(G.mode)) { if (G.mode === 'hint') closeOverlay(); else openHint(); return; }
  if (code === 'KeyJ' && ['play', 'paused', 'journal'].includes(G.mode)) { if (G.mode === 'journal') closeOverlay(); else openJournal(); return; }
  if (G.mode !== 'play') return;
  keys[code] = true;
  if (code === 'Space') e.preventDefault();
  if (code === 'KeyE' && !e.repeat) interact(G.target);
});
addEventListener('keyup', (e) => { keys[codeOf(e)] = false; });
function look(dx, dy) {
  const k = 0.0022 * settings.sens;
  player.yaw -= dx * k;
  player.pitch = Math.max(-1.45, Math.min(1.45, player.pitch - dy * k * (settings.invertY ? -1 : 1)));
}
addEventListener('mousemove', (e) => {
  if (G.mode !== 'play' || touchMode || document.pointerLockElement !== canvas) return;
  const big = Math.abs(e.movementX) > 150 || Math.abs(e.movementY) > 150;
  if (big && performance.now() - lockedAt < 150) return;          // bogus jump right after the pointer locks
  const clamp = (v) => Math.max(-400, Math.min(400, v));           // fast flicks with high-DPI mice are clamped, not eaten
  look(clamp(e.movementX), clamp(e.movementY));
});
canvas.addEventListener('mousedown', (e) => { if (G.mode === 'play' && !touchMode && e.button === 0) interact(G.target); });

// ============================================================ movement & collision
function blocked(x, z) {
  const r = player.r;
  const inside = (c, px, pz) => px > c.minX - r && px < c.maxX + r && pz > c.minZ - r && pz < c.maxZ + r;
  for (const c of colliders) {
    if (c.enabled === false) continue;
    if (inside(c, x, z) && !inside(c, player.x, player.z)) return true;   // already overlapping → let the player walk out
  }
  return false;
}
function move(dt) {
  let f = 0, s = 0;
  if (G.mode === 'play') {
    if (keys.KeyW || keys.ArrowUp) f += 1;
    if (keys.KeyS || keys.ArrowDown) f -= 1;
    if (keys.KeyD || keys.ArrowRight) s += 1;
    if (keys.KeyA || keys.ArrowLeft) s -= 1;
    if (touch.enabled) { f += touch.move.y; s += touch.move.x; }
  }
  const len = Math.hypot(f, s); if (len > 1) { f /= len; s /= len; }
  const sprint = keys.ShiftLeft || keys.ShiftRight || sprintTouch;
  const speed = sprint ? 5.2 : 3.0;
  const sin = Math.sin(player.yaw), cos = Math.cos(player.yaw);
  const tx = (-sin * f + cos * s) * speed, tz = (-cos * f - sin * s) * speed;
  const k = 1 - Math.exp(-12 * dt);
  player.vx += (tx - player.vx) * k; player.vz += (tz - player.vz) * k;
  const dx = player.vx * dt, dz = player.vz * dt;
  if (!blocked(player.x + dx, player.z)) player.x += dx; else player.vx = 0;
  if (!blocked(player.x, player.z + dz)) player.z += dz; else player.vz = 0;
  const sp = Math.hypot(player.vx, player.vz);
  if (sp > 0.3) {
    player.bob += dt * sp * 2.6;
    player.stepAcc += sp * dt;
    if (player.stepAcc > (sprint ? 0.8 : 0.65)) { player.stepAcc = 0; sound.step(); }
  }
  const fovT = viewFov() + (sprint && sp > 3.5 && !settings.reducedMotion ? 6 : 0);
  if (Math.abs(camera.fov - fovT) > 0.05) { camera.fov += (fovT - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
}

// ------------------------------------------------------------ target + highlight
const box3 = new THREE.Box3();
function stateLabel(id) {
  const s = sim.s, f = sim.f;
  const inv = (i, out, avail) => (!i.on ? 'off' : i.ph < 0 ? 'no phase' : s.trip[i.ph] ? `${PH[i.ph]} TRIPPED` : avail ? `${PH[i.ph]} · ${out.toFixed(1)} kW` : 'standby');
  switch (id) {
    case 'inv_pv': return inv(s.inv.pv, f.pv, f.pvAvail > 0);
    case 'inv_bat': return inv(s.inv.bat, f.bat, s.inv.bat.ph >= 0 && f.live[s.inv.bat.ph]) + ` · ${s.inv.bat.mode}`;
    case 'inv_fc': return inv(s.inv.fc, f.fc, f.fcAvail > 0);
    case 'battery': return `SOC ${(s.bat.soc * 100).toFixed(0)} %`;
    case 'h2tank': return s.h2.wheel ? `${(s.h2.level * C.H2_KG * 1000).toFixed(0)} g · valve ${s.h2.valve ? 'open' : 'closed'}` : 'handwheel missing';
    case 'fuelcell': return s.fc.running ? `running · ${f.fc.toFixed(1)} kW` : 'stopped';
    case 'electrolyzer': return s.elz.on ? (f.elz > 0 ? 'producing H₂' : 'no voltage') : 'off';
    case 'sunsim': return s.sun.unlocked ? (s.sun.on ? 'lamps on' : 'unlocked') : 'locked';
    case 'door': return { locked: sim.doorReady() ? 'READY' : 'locked', opening: 'opening…', open: 'open' }[s.door.state];
    case 'bus': return s.trip.some(Boolean) ? 'TRIP!' : `${f.live.filter(Boolean).length}/3 phases live`;
    case 'drawer': return G.drawer.open ? (G.drawer.taken ? 'empty' : 'open') : 'locked';
    case 'board': return G.board.solved ? 'OUT = 1' : '';
    case 'sync': return sync.closed ? 'closed ✔' : G.permitIn ? 'armed' : grid.permit ? 'insert permit' : 'interlocked';
    case 'exit': return G.exitOpen ? 'open' : 'locked';
    case 'rec1': case 'rec2': case 'rec3': case 'rec4': return G.heard[id] ? 'played' : 'new';
    default: return '';
  }
}
function updateTarget() {
  const prev = G.target;
  G.target = null;
  if (G.mode === 'play') {
    ray.setFromCamera(center, camera);
    const hit = ray.intersectObjects(rayTargets, false)[0];
    const id = hit?.object.userData.id;
    if (id && !(id === 'door' && sim.s.door.state === 'open' && hit.object === refs.door) && !(id === 'exit' && G.exitOpen)) {
      G.target = id;
      const st = stateLabel(id);
      ui.prompt.innerHTML = `<b>${touch.enabled ? 'USE' : 'E'}</b> · ${hit.object.userData.label}${st ? ` <span class="st">· ${st}</span>` : ''}`;
      G.targetRoot = hit.object.userData.root;
      box3.setFromObject(G.targetRoot); box3.expandByScalar(0.02);
      highlight.box.copy(box3);
    }
  }
  const outlined = postfx.select(G.target ? [G.targetRoot] : []);
  highlight.visible = !!G.target && !outlined;
  ui.prompt.style.display = G.target ? 'block' : 'none';
  ui.cross.classList.toggle('active', !!G.target);
  if (prev !== G.target && G.target) sound.beep(2400, 0.015, 'sine', 0.012);
}

// ============================================================ visuals driven by the simulation
let screenTimer = 0, syncTexTimer = 0, t = 0;
const fixturePhase = [0, 1, 2, 0];
const fixtureState = refs.labLights.map(() => ({ on: false, flicker: 0 }));
let prevDoor = sim.s.door.state;
function updateVisuals(dt) {
  const s = sim.s, f = sim.f;
  t += dt;
  const synced = G.stage === 'synced' || G.stage === 'won';
  const ease = (cur, target, k) => cur + (target - cur) * Math.min(1, dt * k);
  refs.sunLampMat.emissiveIntensity = ease(refs.sunLampMat.emissiveIntensity, s.sun.on ? 3 : 0.05, 3);
  refs.sunLight.intensity = ease(refs.sunLight.intensity, s.sun.on ? 18 : 0, 3);
  refs.sunCone.opacity = ease(refs.sunCone.opacity, s.sun.on ? 0.1 : 0, 3);
  const calm = settings.reduceFlashing;
  // cold open (a fresh game): the lab is lit and humming — a close strike — the tubes die — the emergency lights click on
  const cold = G.cold ?? 99;
  if (cold < 99) {
    G.cold = cold + dt;
    if (cold < 1.2 && G.cold >= 1.2) { G.boltT = 0; G.thunderIn = 0.35; G.thunderKm = 1.2; kick(0.4); }
    if (cold < 2.4 && G.cold >= 2.4) sound.clack();
    if (cold < 3.2 && G.cold >= 3.2) caption('18:36:02 — the grid is gone.', 4);
    if (G.cold > 12) G.cold = 99;
  }
  // fluorescent tubes strike with a scripted starter pattern (frame-rate independent), each flash with a tink
  const STRIKE = [[0.07, 1], [0.18, 0], [0.06, 1], [0.3, 0]];   // two short blinks, then on (≤ 3 flashes per second)
  const tube = (st, on) => {
    if (on && !st.on) { st.t = 0; st.step = -1; }
    st.on = on;
    if (!on) return 0;
    st.t = (st.t ?? 9) + dt;
    if (calm) return 1;
    let acc = 0;
    for (let k = 0; k < STRIKE.length; k++) {
      acc += STRIKE[k][0];
      if (st.t < acc) { if (STRIKE[k][1] && st.step !== k) { st.step = k; sound.tink(); } return STRIKE[k][1]; }
    }
    return 1;
  };
  // lab lighting follows the energised phases (each phase feeds one group of fixtures)
  let litCount = 0;
  refs.labLights.forEach((L, i) => {
    let k;
    if (cold < 1.2) k = 1;                                  // cold open: still lit …
    else if (cold < 1.6) k = !calm && cold > 1.32 && cold < 1.42 ? 1 : 0;   // … one last gasp, then dark
    else k = tube(fixtureState[i], synced || f.live[fixturePhase[i]]);
    L.light.intensity = k ? ease(L.light.intensity, 7, 25) : ease(L.light.intensity, 0, 30);
    L.mat.emissiveIntensity = k ? 1.6 : 0.05;
    if (k) litCount++;
  });
  // reconnection: the control-room tubes strike one after another and settle at a working level; the clocks run again
  if (G.syncT !== undefined) G.syncT += dt;
  refs.ctrlLights.forEach((L, i) => {
    const on = synced && (G.syncT === undefined || G.syncT > 0.9 + i * 0.8);
    const k = tube(L, on);
    L.light.intensity = k ? ease(L.light.intensity, 3.2, 20) : 0;
    L.mat.emissiveIntensity = k ? 1.2 : 0.05;
  });
  if (synced && Math.floor(t) !== G.clockSec) { G.clockSec = Math.floor(t); refs.setClocks(refs.CLOCK_STOPPED + (G.syncT ?? 0)); }
  const over = TIME_LIMIT - totalTime() < 0;
  refs.emergency.forEach((l, i) => {                     // battery-backed luminaires: the odd stutter, weaker in overtime
    if (!calm && Math.random() < 0.0015) l.userData.stutter = 0.12;
    l.userData.stutter = Math.max(0, (l.userData.stutter || 0) - dt);
    const off = cold < 2.4 + i * 0.12;                   // cold open: they click on one by one
    l.intensity = off ? 0 : l.userData.stutter > 0 ? 0.8 : over ? (Math.sin(t * 7 + i) > 0.6 ? 0.5 : 1.3) : 2.6;
  });
  refs.hemi.intensity = ease(refs.hemi.intensity, 0.08 + 0.35 * (litCount / 4) + (synced ? 0.3 : 0), 3);
  scene.environmentIntensity = ease(scene.environmentIntensity, 0.04 + 0.18 * (litCount / 4) + (synced ? 0.12 : 0), 3);
  // storm outside: lightning (≤ 2 pulses per strike, strikes ≥ 7 s apart — or one soft swell with "reduce flashing"),
  // thunder after distance / speed of sound, rain on the glass
  const O = refs.outside.u, eve = O.uEve.value;
  if (!synced && G.mode !== 'start') {
    G.boltIn = (G.boltIn ?? 5) - dt;
    if (G.boltIn <= 0) {
      G.boltIn = 7 + Math.random() * 16; G.boltT = 0; refs.outside.strike();
      G.thunderKm = 2 + Math.random() * 6; G.thunderIn = G.thunderKm * 1000 / 343;
    }
  }
  if (G.boltT !== undefined) G.boltT += dt;
  const bt = G.boltT ?? 99, pulse = (t0, a) => (bt < t0 ? 0 : a * Math.exp(-(bt - t0) / 0.08));
  const flash = bt > 3 ? 0 : calm ? 0.3 * Math.min(1, bt / 0.15) * Math.exp(-bt / 0.5) : Math.min(1, pulse(0, 1) + pulse(0.24, 0.6));
  if (G.thunderIn > 0 && (G.thunderIn -= dt) <= 0) sound.thunder(Math.min(1, 2.6 / G.thunderKm) * (player.z > -5 ? 0.6 : 1), G.thunderKm);
  refs.outside.update(dt, flash);
  refs.dropMat.opacity = Math.min(1, O.uRain.value * 1.4);
  refs.rainMat.opacity = O.uRain.value;
  refs.rainTex.offset.y = (refs.rainTex.offset.y + dt * 0.03) % 1;           // runnels creeping down the glass
  const roomLit = refs.ctrlLights[0].light.intensity / 3.2;                     // the pane reflects the control room
  O.uRoom.value.setRGB(0.012 + 0.08 * roomLit, 0.016 + 0.07 * roomLit, 0.02 + 0.06 * roomLit);
  // one light through the window: cold lightning, or the low warm evening sun (the frame throws its shadow)
  const sunK = eve * 5, flK = flash * 3.5;
  refs.windowLight.intensity = sunK + flK;
  if (sunK + flK > 0) refs.windowLight.color.setRGB((1.0 * sunK + 0.75 * flK) / (sunK + flK), (0.6 * sunK + 0.82 * flK) / (sunK + flK), (0.3 * sunK + 1.0 * flK) / (sunK + flK));
  refs.skyLight.intensity = eve * 7;
  if (G.syncT > 3 && !G.shadowRedone) { G.shadowRedone = true; refs.windowLight.shadow.needsUpdate = true; }   // exit door has moved
  // the cat: slow sleeping breaths, the hanging tail swaying, now and then an ear flick; lifts his head to open an eye
  const eyeOpen = (G.catEye = Math.max(0, (G.catEye || 0) - dt)) > 0;
  refs.cat.eyeOpen.visible = eyeOpen; refs.cat.lids.forEach((l) => { l.visible = !eyeOpen; });
  G.catLift = ease(G.catLift || 0, eyeOpen ? 1 : 0, 4); refs.cat.lift(G.catLift);
  // dust motes: only where a light beam shows them (sun simulator, evening sun through the window)
  for (const [d, vis] of [[refs.dustSun, s.sun.on ? 0.7 : 0], [refs.dustBeam, eve * 0.8]]) {
    d.material.opacity = ease(d.material.opacity, vis, 2);
    if (d.material.opacity < 0.01) continue;
    const p = d.geometry.attributes.position.array, b = d.userData.box, k = d.userData.seed;
    for (let i = 0; i < p.length; i += 3) {
      p[i] += Math.sin(t * 0.25 + i * 0.37 + k) * 0.012 * dt;
      p[i + 1] -= (0.012 + (i % 11) * 0.002) * dt;
      p[i + 2] += Math.cos(t * 0.21 + i * 0.29 + k) * 0.012 * dt;
      if (p[i + 1] < b[2]) p[i + 1] = b[3];
    }
    d.geometry.attributes.position.needsUpdate = true;
  }
  refs.busbars.forEach((m, p) => {
    m.material.emissive.set(s.trip[p] ? (Math.sin(t * 10) > 0 ? '#ff0000' : '#330000') : PH_COLORS[p]);
    m.material.emissiveIntensity = s.trip[p] ? 1.5 : 0.05 + Math.min(3, f.load[p] * 0.6);
  });
  refs.breakers.forEach((b, p) => { b.position.y = s.trip[p] ? 0.5 : 0.6; b.material.color.set(s.trip[p] ? 0xd02020 : 0x2a2a2a); });
  const led = (m, st) => { m.material.emissive.set({ off: '#111', idle: '#ffa020', run: '#20ff60', fault: '#ff2020' }[st]); m.material.emissiveIntensity = st === 'off' ? 0 : st === 'fault' && Math.sin(t * 8) < 0 ? 0.2 : 2; };
  const invState = (inv, ok) => (!inv.on ? 'off' : inv.ph >= 0 && s.trip[inv.ph] ? 'fault' : ok ? 'run' : 'idle');
  led(refs.invLeds.inv_pv, invState(s.inv.pv, f.pvAvail > 0 && s.inv.pv.ph >= 0));
  led(refs.invLeds.inv_bat, invState(s.inv.bat, s.inv.bat.ph >= 0 && f.live[s.inv.bat.ph]));
  led(refs.invLeds.inv_fc, invState(s.inv.fc, f.fcAvail > 0 && s.inv.fc.ph >= 0));
  const lit = Math.ceil(s.bat.soc * 10 - 0.001);
  refs.socLeds.forEach((m, i) => {
    const on = i < lit || (f.bat < 0 && i === lit && Math.sin(t * 6) > 0);
    m.material.emissive.set(on ? (s.bat.soc < 0.25 ? '#ff3020' : s.bat.soc < 0.5 ? '#ffb020' : '#20ff60') : '#111');
    m.material.emissiveIntensity = on ? 1.8 : 0;
  });
  refs.elzGlow.material.emissiveIntensity = f.elz > 0 ? 1.5 + Math.sin(t * 5) * 0.8 : 0.05;
  refs.fcGlow.material.emissiveIntensity = f.fc > 0 ? 2 : s.fc.running ? 0.6 : 0.05;
  refs.h2Bar.scale.y = Math.max(0.001, s.h2.level);
  refs.valve.visible = s.h2.wheel; refs.valveTag.visible = !s.h2.wheel;
  refs.valve.rotation.z = ease(refs.valve.rotation.z, s.h2.valve ? Math.PI * 1.5 : 0, 4);
  const breath = Math.sin(t * 1.9);
  refs.cat.body.scale.set(1 + breath * 0.012, 1 + breath * 0.035, 1);
  refs.cat.tail.rotation.x = Math.sin(t * 0.55) * 0.1 + Math.sin(t * 1.7) * 0.025;
  if (Math.random() < dt * 0.12) G.earFlick = { ear: Math.random() < 0.5 ? 0 : 1, t: 0.35 };
  refs.cat.ears.forEach((e, i) => { e.rotation.x = -0.25 + (G.earFlick && G.earFlick.ear === i ? Math.sin((0.35 - G.earFlick.t) * 36) * 0.35 * (G.earFlick.t / 0.35) : 0); });
  if (G.earFlick && (G.earFlick.t -= dt) <= 0) G.earFlick = null;
  // booth door follows the drive progress
  const dTarget = s.door.state === 'open' ? 1.65 : s.door.state === 'opening' ? 1.65 * Math.min(1, s.door.t / C.DOOR_T) : 0;
  refs.door.position.x = ease(refs.door.position.x, dTarget, 4);
  refs.doorCollider.enabled = refs.door.position.x < 1.35;
  refs.doorLed.material.emissive.set(s.door.state === 'open' ? '#20ff60' : s.door.state === 'opening' ? (Math.sin(t * 12) > 0 ? '#ffb020' : '#ff2020') : sim.doorReady() ? '#ffb020' : '#ff2020');
  if (prevDoor !== 'open' && s.door.state === 'open') kick(0.35);
  prevDoor = s.door.state;
  refs.exitDoor.position.z = ease(refs.exitDoor.position.z, G.exitOpen ? -6.4 : -8.0, 1.2);
  refs.exitCollider.enabled = refs.exitDoor.position.z < -6.7;
  refs.exitLed.material.emissive.set(G.exitOpen ? '#20ff60' : '#ff2020');
  refs.drawer.position.z = ease(refs.drawer.position.z, G.drawer.open ? 4.15 : 4.55, 5);
  refs.drawerWheel.visible = !G.drawer.taken;
  for (const [id, m] of Object.entries(refs.recorders)) {
    m.material.emissive.set(G.heard[id] ? '#20ff60' : '#ff2020');
    m.material.emissiveIntensity = G.heard[id] ? 0.6 : (Math.sin(t * 4) > 0 ? 2 : 0.2);
  }
  refs.boardToggles.forEach((lv, i) => { lv.rotation.x = G.board.bits[i] ? -0.5 : 0.5; });
  refs.boardLed.material.emissive.set(G.board.solved ? '#20ff60' : '#330000');
  refs.diagLeds.forEach((m, i) => { const on = G.diag && P.binStr[i] === '1'; m.material.emissive.set(on ? '#ff3020' : '#200505'); m.material.emissiveIntensity = on ? 2.2 : 1; });
  refs.rackLeds.forEach((m, i) => { m.material.emissiveIntensity = Math.sin(t * (3 + i * 0.7) + i) > 0.2 ? 1.5 : 0.1; });
  const lamps = sync.lamps();
  refs.syncLamps.forEach((m, i) => { m.material.emissive.set('#ffb060'); m.material.emissiveIntensity = 0.05 + lamps[i] * 3; });
  refs.syncHandle.rotation.x = sync.closed ? 0.6 : 0;
  syncTexTimer -= dt;
  if (player.z < -5 && syncTexTimer <= 0 && Math.hypot(player.x - 4.6, player.z + 10.6) < 7) { syncTexTimer = 0.1; redraw(refs.syncTex, (ctx, w, h) => drawSyncScope(ctx, w, h, sync, { compact: true })); }

  screenTimer -= dt;
  if (screenTimer <= 0) { screenTimer = 0.25; drawScreens(); }
}

const screenCache = {};
function drawScreens() {
  const s = sim.s, f = sim.f;
  const doorKey = JSON.stringify([s.door.state, f.head.map((h) => h.toFixed(1)), s.door.t.toFixed(1), settings.palette]);
  if (screenCache.door !== doorKey) {
    screenCache.door = doorKey;
    redraw(refs.doorScreenTex, (ctx, w) => {
      ctx.fillStyle = '#061009'; ctx.fillRect(0, 0, w, 320);
      ctx.font = `bold 26px ${FONT.mono}`; ctx.textAlign = 'center';
      const ready = sim.doorReady();
      ctx.fillStyle = s.door.state === 'open' ? '#3eff7a' : ready ? '#ffd24a' : '#ff4a4a';
      ctx.fillText(s.door.state === 'open' ? 'OPEN' : s.door.state === 'opening' ? 'OPENING' : ready ? 'READY' : 'LOCKED', w / 2, 36);
      ctx.font = `17px ${FONT.mono}`; ctx.fillStyle = '#7fbf8f'; ctx.fillText(`drive: ${C.DOOR_P} kW / phase`, w / 2, 64);
      PH.forEach((n, p) => {
        const y = 100 + p * 56;
        ctx.textAlign = 'left'; ctx.fillStyle = PH_COLORS[p]; ctx.font = `bold 22px ${FONT.mono}`; ctx.fillText(n, 14, y + 16);
        ctx.fillStyle = '#1a2a1e'; ctx.fillRect(60, y, 180, 22);
        ctx.fillStyle = f.head[p] >= C.DOOR_P ? '#3eff7a' : '#ff9a4a'; ctx.fillRect(60, y, 180 * Math.max(0, Math.min(1, f.head[p] / 6)), 22);
        ctx.fillStyle = '#fff'; ctx.fillRect(60 + 180 * C.DOOR_P / 6, y - 3, 2, 28);
        ctx.fillStyle = '#cfe'; ctx.font = `15px ${FONT.mono}`; ctx.fillText(`${f.head[p].toFixed(1)} kW ${f.head[p] >= C.DOOR_P ? '✔' : ''}`, 64, y + 42);
      });
      ctx.textAlign = 'center'; ctx.fillStyle = '#ffd24a'; ctx.font = `18px ${FONT.mono}`;
      if (s.door.state === 'opening') ctx.fillText(`${s.door.t.toFixed(1)} / ${C.DOOR_T} s`, w / 2, 300);
    });
  }
  const blink = Math.sin(t * 4) > 0;
  const pcKey = G.stage + blink;
  if (screenCache.pc !== pcKey) {
    screenCache.pc = pcKey;
    redraw(refs.pcScreenTex, (ctx) => {
      ctx.fillStyle = '#020c05'; ctx.fillRect(0, 0, 512, 320);
      ctx.fillStyle = '#5dff8f'; ctx.font = `20px ${FONT.mono}`; ctx.textAlign = 'left';
      const lines = G.stage === 'won' || G.stage === 'synced' ? ['gridctl ▸ connected', '', 'Q0: CLOSED', 'EXIT: UNLOCKED ✔']
        : G.stage === 'permit' ? ['gridctl ▸ schedule OK', '', 'reconnection permit ✔', 'sync at tie panel Q0']
          : ['labctl-01 login:', '', 'Solar Test Laboratory', 'running on UPS', '', G.stage === 'root' ? '# root session active' : 'grid reconnection: root required'];
      lines.forEach((l, i) => ctx.fillText(l, 24, 40 + i * 30));
      if (blink) ctx.fillRect(24 + ctx.measureText(lines[0]).width + 8, 24, 11, 20);
    });
  }
  const wallKey = JSON.stringify([f.pv.toFixed(1), (s.bat.soc * 100).toFixed(0), (s.h2.level * 100).toFixed(0), s.fc.running, G.stage, f.load.map((x) => x.toFixed(1)), settings.palette]);
  if (screenCache.wall !== wallKey) {
    screenCache.wall = wallKey;
    redraw(refs.wallScreenTex, (ctx) => {
      ctx.fillStyle = '#07111c'; ctx.fillRect(0, 0, 768, 400);
      ctx.fillStyle = '#ffd24a'; ctx.font = `bold 34px ${FONT.sans}`; ctx.textAlign = 'left'; ctx.fillText('SOLAR TEST LAB · GRID STATUS', 30, 52);
      ctx.font = `24px ${FONT.mono}`;
      const synced = G.stage === 'synced' || G.stage === 'won';
      const rows = [
        ['Public grid', synced ? 'CONNECTED ✔' : G.stage === 'permit' ? 'LIVE at incomer · site OFF' : 'LOST (storm)'], ['PV (test rig)', `${f.pv.toFixed(2)} kW`], ['Battery', `${(s.bat.soc * 100).toFixed(0)} % SOC`],
        ['H₂ tank', `${(s.h2.level * C.H2_KG * 1000).toFixed(0)} g`], ['Fuel cell', s.fc.running ? 'RUNNING' : 'STOPPED'],
        ['Reconnection', synced ? 'DONE' : G.stage === 'permit' ? 'PERMIT ✔ — sync Q0' : 'root required'],
      ];
      rows.forEach(([a, b], i) => { ctx.fillStyle = '#9fb0c0'; ctx.fillText(a, 30, 105 + i * 44); ctx.fillStyle = synced || i ? '#5dff8f' : '#ff6b77'; ctx.fillText(b, 300, 105 + i * 44); });
      PH.forEach((n, p) => { const hgt = Math.min(200, f.load[p] * 35); ctx.fillStyle = PH_COLORS[p]; ctx.fillRect(600 + p * 50, 330 - hgt, 40, hgt + 2); ctx.fillText(n, 602 + p * 50, 370); });
    });
  }
}

// ------------------------------------------------------------ HUD
function updateHud() {
  const s = sim.s, f = sim.f;
  ui.objective.innerHTML = `<span class="lbl">Objective</span>${objective()}`;
  const showBus = G.stage === 'lab' && G.busSeen;
  ui.busHud.style.display = showBus ? '' : 'none';
  if (showBus) {
    ui.busHud.innerHTML = `<div style="color:#ffd24a;margin-bottom:4px">MAIN BUS · headroom</div>` +
      PH.map((n, p) => `<div class="row"><span style="color:${PH_COLORS[p]}">${n}${s.trip[p] ? ' <span class="bad">TRIP</span>' : f.live[p] ? '' : ' <span style="color:#778">dead</span>'}</span><span>${f.live[p] ? f.head[p].toFixed(2) + ' kW' : '—'} ${f.head[p] >= C.DOOR_P ? '✔' : ''}</span></div>
        <div class="bar"><i style="width:${Math.max(0, Math.min(100, f.head[p] / 6 * 100))}%;background:${f.head[p] >= C.DOOR_P ? '#3ecf7a' : PH_COLORS[p]}"></i><span class="mark" style="left:50%"></span></div>`).join('') +
      `<div class="row"><span>Battery</span><span>${(s.bat.soc * 100).toFixed(0)} %</span></div><div class="row"><span>H₂ tank</span><span>${(s.h2.level * C.H2_KG * 1000).toFixed(0)} g</span></div>`;
  }
  const left = TIME_LIMIT - totalTime();
  ui.timer.innerHTML = `⏱ ${left >= 0 ? mmss(left) : '<span class="bad">' + mmss(left) + '</span>'} <span class="sub">${G.stage === 'synced' || G.stage === 'won' ? 'grid restored' : left >= 0 ? 'emergency light' : 'overtime'}</span>`;
}

// ============================================================ audio mix
function updateAudio(dt) {
  const s = sim.s, f = sim.f;
  const synced = G.stage === 'synced' || G.stage === 'won';
  const inside = player.z > -5 ? 1 : player.x > 5 && G.exitOpen ? 0.2 : 0.55;   // booth / corridor with the door open / control room
  sound.update(camera, {
    rain: G.mode === 'start' ? 0.4 : refs.outside.u.uRain.value, inside: G.outro ? 0 : inside,
    purr: 1, drone: !synced && G.mode !== 'start' && (G.cold ?? 99) > 3 ? 1 : 0, evening: refs.outside.u.uEve.value,
    hum: (G.cold ?? 99) < 1.2 ? 1 : Math.min(1, f.load.reduce((a, b) => a + b, 0) / 9) + (synced ? 0.5 : 0),
    fan: f.fc > 0 ? 1 : s.fc.running ? 0.4 : 0,
    bubbles: f.elz > 0 ? 1 : 0,
    ballast: s.sun.on ? 1 : 0,
    motor: s.door.state === 'opening' ? 1 : Math.abs(refs.exitDoor.position.z - (G.exitOpen ? -6.4 : -8)) > 0.05 ? 0.8 : 0,
  }, dt);
}

// ============================================================ save / restore
function save() {
  if (G.mode === 'start' || G.stage === 'won' || G.noSave) return;
  store.set(SAVE_KEY, {
    v: 2, seed, stage: G.stage, at: Date.now(),
    player: { x: player.x, z: player.z, yaw: player.yaw, pitch: player.pitch },
    sim: sim.s, term: terminal.serialize(), grid: grid.serialize(), sync: sync.serialize(),
    G: { inventory: G.inventory, journal: G.journal, heard: G.heard, hints: G.hints, time: G.time, drawer: G.drawer, board: G.board, diag: G.diag, f2seen: G.f2seen, exitOpen: G.exitOpen, catPets: G.catPets, termOpened: G.termOpened, gridResult: G.gridResult, permitIn: G.permitIn, busSeen: G.busSeen },
  });
}
function restore(sv) {
  Object.assign(sim.s, JSON.parse(JSON.stringify(sv.sim)));
  if (sim.s.door.state === 'opening') { sim.s.door.state = 'locked'; sim.s.door.t = 0; }
  sim.version++; sim.f = sim.compute();
  prevDoor = sim.s.door.state;
  doorWasOpen = sim.s.door.state === 'open';
  Object.assign(player, sv.player);
  terminal.restore(sv.term); grid.restore(sv.grid); sync.restore(sv.sync);
  Object.assign(G, sv.G);
  G.stage = sv.stage;
  if (sim.s.sun.unlocked) redraw(refs.keypadTex, (ctx, w, h) => drawKeypad(ctx, w, h, true));
  refs.door.position.x = sim.s.door.state === 'open' ? 1.65 : 0;
  refs.exitDoor.position.z = G.exitOpen ? -6.4 : -8.0;
  refs.drawer.position.z = G.drawer.open ? 4.15 : 4.55;
  drawLock();
  if (G.stage === 'permit') {                                // the city is already back; prepare the evening now, not at the sync
    for (const m of ['restored', 'evening']) for (const tex of refs.outside.prepare(m)) renderer.initTexture(tex);
    refs.outside.setMode('restored', true);
  }
  if (G.stage === 'synced' || G.stage === 'won') { refs.outside.setMode('evening', true); G.syncT = 99; }
  refs.windowLight.shadow.needsUpdate = true;
  renderInv();
}
addEventListener('pagehide', save);

// ============================================================ start & end screens
function showStart() {
  const best = store.get(BEST_KEY) || {};
  const daily = todaySeed();
  const live = (s) => { const v = store.get(saveKey(s)); return v && v.stage !== 'won' ? v : null; };
  const svC = live(0), svD = live(daily);
  const cont = (v, k) => (v ? `<button class="btn big" data-start="${k}">Continue ${k === 'cont-classic' ? 'classic' : 'daily'} <span class="small">(${mmss(v.G.time.elapsed + v.G.time.penalty)})</span></button>` : '');
  const card = $('startCard');
  const trophies = store.get(ACH_KEY) || [];
  let streak = 0;
  for (let d = new Date(), k = 0; k < 400; k++, d.setDate(d.getDate() - 1)) {
    const key = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    if (best[key]) streak++; else if (k > 0) break;
  }
  const bestList = Object.entries(best).sort((a, b) => (a[0] === '0' ? -1 : b[0] === '0' ? 1 : b[0] - a[0])).slice(0, 4);
  card.innerHTML = `<h1>${INTRO.title}</h1>
    <p class="lead">${INTRO.lead}</p>
    <div class="controls-help">${touchMode
      ? '<div>Left thumb: move</div><div>Right thumb: look</div><div>Tap an object / USE: interact</div><div>💡 hints · 📓 journal</div>'
      : '<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move · <kbd>Shift</kbd> run</div><div><kbd>Mouse</kbd> look</div><div><kbd>E</kbd>/<kbd>Click</kbd> use</div><div><kbd>H</kbd> hint</div><div><kbd>J</kbd> journal</div><div><kbd>Esc</kbd> menu</div>'}</div>
    <div class="start-btns">
      ${cont(svC, 'cont-classic')}${cont(svD, 'cont-daily')}
      <button class="btn big ${svC || svD ? 'alt' : ''}" data-start="classic">New game · Classic room</button>
      <button class="btn big alt" data-start="daily">${svD ? 'Restart' : 'Play'} daily room · ${String(daily).slice(6)}.${String(daily).slice(4, 6)}.</button>
      <button class="btn" data-start="settings">⚙ Settings</button>
    </div>
    ${bestList.length ? `<p class="note">Best: ${bestList.map(([k, v]) => `${k === '0' ? 'Classic' : 'Daily ' + String(k).slice(6) + '.' + String(k).slice(4, 6) + '.'} ${mmss(v.time)} (${v.rank})`).join(' · ')}${streak > 1 ? ` · 🔥 daily streak ${streak}` : ''}</p>` : ''}
    ${trophies.length ? `<p class="note trophies">🏆 ${trophies.length}/${ACH_NAMES.length}: ${trophies.join(' · ')}</p>` : ''}
    <p class="note">Every code in a daily room is different. Progress is saved automatically in this browser.</p>`;
  card.querySelectorAll('[data-start]').forEach((b) => b.addEventListener('click', () => {
    const a = b.dataset.start;
    sound.init();
    if (a === 'settings') { openMenu(true); return; }
    if (a === 'cont-classic' || a === 'cont-daily') {
      const s = a === 'cont-daily' ? daily : 0;
      if (s !== seed) { location.search = s ? `?seed=${s}&continue=1` : '?continue=1'; return; }
      restore(store.get(SAVE_KEY)); begin(false); return;
    }
    const want = a === 'daily' ? daily : 0;
    if ((want ? svD : svC) && !confirm('Start this room over? The run in progress will be lost.')) return;
    store.del(saveKey(want));
    if (want !== seed) { location.search = want ? `?seed=${want}&autostart=1` : '?autostart=1'; return; }
    begin(true);
  }));
  ui.start.classList.remove('hidden');
}

function begin(fresh) {
  ui.start.classList.add('hidden'); ui.hud.classList.remove('hidden');
  G.mode = 'paused';
  if (fresh) startBriefing();
  touch.enable(touchMode);
  if (touchMode) enterPlay(); else lockPointer();
  sound.init();
  if (fresh && seed) toast(`Daily room ${seed}: every code is different today.`);
  else toast('Welcome back.');
  renderInv();
}

const ACH_KEY = 'ple-achievements';
const ACH_NAMES = ['No hints', 'No breaker trips', 'Grid wizard (3★)', 'Under 30 minutes', 'Cat person', 'Heard every memo', 'Clean logic'];
/** A fresh run: the briefing goes to the journal, and the cold open plays once the player is in control. */
function startBriefing() {
  G.coldPending = true;
  note('brief', 'Briefing', INTRO.body.replace(/<br>/g, '\n'));
}
/** The last shot: control is taken away, the camera walks out onto the terrace and turns to the Dom and the sunset. */
function startOutro() {
  G.outro = { t: 0, x0: player.x, z0: player.z, yaw0: player.yaw, pitch0: player.pitch, bells: false };
  G.mode = 'outro';
  if (document.pointerLockElement) document.exitPointerLock();
  clearKeys(); ui.hud.classList.add('hidden'); ui.prompt.style.display = 'none'; highlight.visible = false; postfx.select([]);
  toasts.length = 0; nextToast(); captionEl.classList.remove('show');
}
function updateOutro(dt) {
  const o = G.outro; o.t += dt;
  const e = (a, b) => { const k = Math.max(0, Math.min(1, (o.t - a) / (b - a))); return k * k * (3 - 2 * k); };
  const walk = e(0, 3.0), pan = e(2.8, 7.2);
  player.x = o.x0 + (10.4 - o.x0) * walk + 0.3 * pan;
  player.z = o.z0 + (-8 - o.z0) * walk;
  const dy = ((-Math.PI / 2 - o.yaw0 + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  player.yaw = o.yaw0 + dy * Math.min(1, walk * 1.6) + (0.24 + Math.PI / 2) * pan;   // face out, then turn left to the Dom and the sun
  player.pitch = o.pitch0 + (0.03 - o.pitch0) * walk;
  outroView.visible = camera.position.x > 8.93;
  if (!o.bells && o.t > 3.4) { o.bells = true; [0, 2.1, 4.2, 6.3].forEach((w, i) => sound.bell(i % 2 ? 110 : 98, w, 0.045)); }
  if (o.t > 9.5 && !o.faded) { o.faded = true; fadeEl.classList.add('on'); }
  if (o.t > 11 && !o.done) { o.done = true; win(); setTimeout(() => fadeEl.classList.remove('on'), 300); }
}
function win() {
  setStage('won');
  openOverlay('end');
  const total = totalTime();
  const rank = RANKS.find(([m]) => total / 60 < m)[1];
  const best = store.get(BEST_KEY) || {};
  const key = String(seed);
  const isBest = !G.noSave && (!best[key] || total < best[key].time);   // debug (?skip=) runs don't count
  if (isBest) { best[key] = { time: total, rank }; store.set(BEST_KEY, best); }
  store.del(SAVE_KEY);
  const gr = G.gridResult;
  const ach = [
    [G.hints.used === 0, 'No hints'], [sim.s.stats.trips === 0, 'No breaker trips'], [gr?.stars === 3, 'Grid wizard (3★)'],
    [total < 30 * 60, 'Under 30 minutes'], [G.catPets > 0, 'Cat person'], [Object.keys(G.heard).length === 4, 'Heard every memo'], [G.board.fails === 0, 'Clean logic'],
  ];
  if (!G.noSave) store.set(ACH_KEY, ACH_NAMES.filter((n) => (store.get(ACH_KEY) || []).includes(n) || ach.some(([ok, m]) => ok && m === n)));
  const splits = Object.entries(G.time.splits).filter(([k]) => SPLIT[k]).map(([k, v]) => `<span>${SPLIT[k]}</span><span>${mmss(v)}</span>`).join('');
  const share = `⚡ Power Lab Escape · ${seed ? 'Daily ' + seed : 'Classic'} · ${mmss(total)} · ${G.hints.used} hints · grid ${gr ? '★'.repeat(gr.stars) : '–'} · "${rank}"`;
  $('endCard').innerHTML = `<h1>🌇 YOU ESCAPED</h1>
    <p class="lead">Evening. The storm has passed, the sun is going down behind the Dom, and the lab hums on the grid again. Rank: <b>${rank}</b>${isBest ? ' · new personal best!' : ''}</p>
    <div class="res">${splits}<span class="tot">Total (incl. ${mmss(G.time.penalty)} penalties)</span><span class="tot">${mmss(total)}</span>
      <span>Hints used</span><span>${G.hints.used}</span><span>Breaker trips</span><span>${sim.s.stats.trips}</span>
      ${gr ? `<span>Dispatch score</span><span>${'★'.repeat(gr.stars)}${'☆'.repeat(3 - gr.stars)} ${(gr.ratio * 100).toFixed(0)} %</span>` : ''}</div>
    <div class="ach">${ach.map(([ok, n]) => `<span class="${ok ? 'got' : ''}">${ok ? '🏆' : '·'} ${n}</span>`).join('')}</div>
    <div class="start-btns">
      <button class="btn big" id="shareBtn">Copy result</button>
      <button class="btn big alt" id="dailyBtn">Play the daily room</button>
      <button class="btn" id="againBtn">Play classic again</button>
      <button class="btn" id="keepBtn">Keep exploring</button>
    </div>`;
  ui.end.classList.remove('hidden');
  sound.fanfare();
  $('shareBtn').onclick = () => { navigator.clipboard?.writeText(share).then(() => toast('Result copied!', 'good'), () => toast(share)); };
  $('dailyBtn').onclick = () => { location.search = `?seed=${todaySeed()}&autostart=1`; };
  $('againBtn').onclick = () => { location.search = '?autostart=1'; };
  $('keepBtn').onclick = () => {
    ui.end.classList.add('hidden'); ui.hud.classList.remove('hidden');
    outroView.visible = false; Object.assign(player, { x: 7.2, z: -8, yaw: Math.PI / 2 }); G.outro = null;
    G.mode = 'paused'; closeOverlay();
  };
}

// ============================================================ frame-time governor (Balanced quality)
// Keeps ~60 fps on weaker GPUs: renders at a lower resolution while frames are slow, climbs back when there is headroom,
// and as a last resort drops the ambient occlusion for the session.
function governor(rawDt) {
  if (settings.quality !== 'auto' || document.hidden || rawDt > 0.25 || G.mode === 'grid' || G.mode === 'start') return;
  perf.ema += (rawDt * 1000 - perf.ema) * 0.06;
  if ((perf.t += rawDt) < 1) return;
  perf.t = 0;
  const prev = perf.scale;
  if (perf.ema > 20.5) {
    if (perf.scale > 0.55) perf.scale = Math.max(0.55, perf.scale - 0.15); else postfx.aoOff = true;
    perf.good = 0;
  } else if (perf.ema < 17.8) { if (++perf.good >= 4 && perf.scale < 1) { perf.scale = Math.min(1, perf.scale + 0.1); perf.good = 0; } }
  else perf.good = 0;
  if (perf.scale !== prev) { renderer.setPixelRatio(pixelRatio() * perf.scale); postfx.setSize(innerWidth, innerHeight); }
}

// ============================================================ main loop
let last = performance.now(), hudTimer = 0, saveTimer = 5, doorWasOpen = sim.s.door.state === 'open';
function loop(now) {
  const rawDt = (now - last) / 1000, dt = Math.min(0.1, rawDt); last = now;
  governor(rawDt);
  const running = ['play', 'panel', 'terminal', 'grid', 'hint', 'journal'].includes(G.mode);   // not before "Click to play", not in the menu
  if (running) {
    sim.tick(dt);
    sync.islandOn = sim.s.grid || sim.f.live.some(Boolean);   // the cluster must be energised to synchronise
    sync.tick(dt);
    if (G.stage !== 'won') G.time.elapsed += dt;
  }
  for (const ev of sim.events.splice(0)) {
    if (G.stage !== 'lab' && player.z < -5) continue;   // routine booth messages don't follow you into the control room
    toast(ev.msg, ev.kind);
    if (ev.sfx) sound[ev.sfx]?.(); else if (ev.kind === 'bad') sound.bad(); else if (ev.kind === 'good') sound.good();
  }
  if (sim.s.door.state === 'open' && !doorWasOpen) { doorWasOpen = true; setStage('control'); toast('The booth door slides open. On to the control room!', 'good'); }
  if (G.board.solved && !G.boardDrawn) { G.boardDrawn = true; redraw(refs.boardSegTex, (ctx, w, h) => drawSevenSeg(ctx, w, h, P.f3, true)); }

  if (G.mode === 'play' || G.mode === 'paused') move(dt);
  if (G.stage === 'synced' && G.mode === 'play') {
    const e = refs.exitTrigger;
    if (player.x > e.minX && player.x < e.maxX && player.z > e.minZ && player.z < e.maxZ) startOutro();
  }
  if (G.mode === 'outro' || (G.outro && !G.outro.done)) updateOutro(dt);
  const bob = settings.reducedMotion ? 0 : Math.sin(player.bob) * 0.03 * Math.min(1, Math.hypot(player.vx, player.vz) / 3);
  G.shake = Math.max(0, G.shake - dt);
  const sh = G.shake > 0 ? Math.sin(G.shake * 45) * G.shake * 0.09 : 0;           // damped kick along one direction
  camera.position.set(player.x + G.shakeDir.x * sh, player.eye + bob + G.shakeDir.y * sh, player.z + G.shakeDir.z * sh);
  camera.rotation.set(player.pitch, player.yaw, 0);
  if (G.mode === 'start') { camera.position.set(Math.sin(now / 9000) * 2, 1.9, 2.8); camera.rotation.set(-0.12, Math.sin(now / 9000) * 0.5, 0); }

  updateTarget();
  updateVisuals(dt);
  updateAudio(dt);
  if (G.mode === 'panel') getPanel(G.panelId)?.anim?.(dt);

  hudTimer -= dt;
  if (hudTimer <= 0) { hudTimer = 0.2; updateHud(); if (G.mode === 'panel') refreshPanel(); }
  if (toastTimer > 0) { toastTimer -= dt; if (toastTimer <= 0) nextToast(); }
  saveTimer -= dt;
  if (saveTimer <= 0) { saveTimer = 5; save(); }

  // AO off behind overlays and in the last shot (its depth buffer still holds the building); the console covers everything
  lightPool.update(camera.position);
  if (G.mode !== 'grid') postfx.render(dt, outroView.visible || ['panel', 'terminal', 'journal', 'hint', 'menu'].includes(G.mode));
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// ============================================================ launch
/** After a reload we need one user gesture (pointer lock / audio). */
function showResumeGate() {
  ui.start.classList.add('hidden'); ui.hud.classList.remove('hidden');
  G.mode = 'paused';
  touch.enable(touchMode);
  ui.resume.classList.remove('hidden');
}
ui.resume.textContent = touchMode ? '▶ Tap to play' : '▶ Click to play';
const sv0 = store.get(SAVE_KEY);
const skip = params.get('skip');
if (skip) {
  // debug shortcuts: ?skip=door | terminal | grid | sync
  G.noSave = true;
  const s = sim.s;
  Object.assign(s.sun, { unlocked: true, on: true });
  s.door.state = 'open'; doorWasOpen = true; refs.door.position.x = 1.65; setStage('control');
  player.z = -7; player.yaw = 0;
  showResumeGate();
  if (skip === 'terminal') { openOverlay('terminal'); terminal.open(); }
  if (skip === 'grid') { terminal.stack.push({ user: 'root', cwd: '/root' }); setStage('root'); openGrid(); }
  if (skip === 'sync') { setStage('root'); grid.permit = true; setStage('permit'); player.x = 3.6; player.z = -10.6; player.yaw = -Math.PI / 2; }
} else if (params.get('continue') && sv0 && (sv0.seed || 0) === seed) { restore(sv0); showResumeGate(); toast('Welcome back.'); }
else if (params.get('autostart')) { store.del(SAVE_KEY); showResumeGate(); startBriefing(); if (seed) toast(`Daily room ${seed}: every code is different today.`); }
else showStart();

window.__game = { player, sim, G, P, interact, terminal, grid, sync, refs, openPanel, setStage, win, save, postfx, renderer, perf, lightPool };
$('loading')?.remove();
