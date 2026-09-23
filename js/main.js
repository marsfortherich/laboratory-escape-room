import * as THREE from 'three';
import { buildWorld, drawKeypad, drawSevenSeg } from './world.js';
import { LabSim, PH, PH_COLORS, C, setPalette } from './labsim.js';
import { Terminal } from './terminal.js';
import { GridGame, CFG as GRID } from './gridgame.js';
import { SyncSim, drawSyncScope } from './sync.js';
import { makePuzzle, evalCircuit, RES_HEX, RES_COLORS } from './puzzle.js';
import { memos, checklistText, whiteboardLines, INTRO, RANKS } from './story.js';
import { Sound } from './audio.js';
import { loadSettings, settingsHtml, bindSettings } from './settings.js';
import { TouchControls, isTouchDevice } from './touch.js';
import { redraw, FONT } from './textures.js';

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
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
} catch {
  document.body.insertAdjacentHTML('beforeend', '<div class="overlay"><div class="card"><h2>WebGL unavailable</h2><p>This game needs a browser with WebGL enabled.</p></div></div>');
  throw new Error('WebGL unavailable');
}
const pixelRatio = () => Math.min(devicePixelRatio || 1, { low: 1, auto: 1.5, high: 2 }[settings.quality] ?? 1.5);
renderer.setPixelRatio(pixelRatio());
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
$('app').appendChild(renderer.domElement);
const canvas = renderer.domElement;
canvas.setAttribute('aria-label', '3D view of the laboratory');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x05080c);
const camera = new THREE.PerspectiveCamera(settings.fov, innerWidth / innerHeight, 0.05, 100);
camera.rotation.order = 'YXZ';
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const { colliders, refs } = buildWorld(scene, P);
const sim = new LabSim(P);
const sync = new SyncSim(P);
const sound = new Sound(); sound.setVolume(settings.volume);
const MEMOS = memos(P);

// highlight box for the targeted object
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
function applySettings() {
  camera.fov = settings.fov; camera.updateProjectionMatrix();
  sound.setVolume(settings.volume);
  document.documentElement.style.setProperty('--ui', settings.uiScale);
  setPalette(settings.palette);
  renderer.setPixelRatio(pixelRatio());
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
  diag: false, f2seen: false, exitOpen: false, catPets: 0, termOpened: false,
  shake: 0,
};
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
  if (st === 'permit') addItem('permit');
  if (st === 'synced') {
    refs.windowMat.map = refs.dawnTex; refs.windowMat.needsUpdate = true;
    refs.outsideMat.map = refs.dawnTex; refs.outsideMat.needsUpdate = true;
    G.exitOpen = true;
    sim.s.grid = true;
    setTimeout(() => { sound.thunk(); toast('The building is back on the grid. The exit is unlocked!', 'good'); }, 600);
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
    `Insert the permit card. Island ${P.gridV} V, ${(P.gridF + 0.04).toFixed(2)} Hz. The lamps chase → press "Swap L2 ↔ L3" once. Press CLOSE (or Space) when the needle is in the green sector.`] };
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
    onAct: () => { G.catPets++; sound.beep(70, 0.7, 'sine', 0.15); toast(G.catPets > 3 ? 'He opens one eye. Judging you.' : 'Prrrrr. (He did not bite.)'); },
  };
  D.drawer = {
    title: 'Bench drawer · 4-wheel combination lock',
    controls: () => (G.drawer.open
      ? (G.drawer.taken ? '<p>Empty — cable ties, a multimeter fuse and half a cookie.</p>' : '<p>Inside: the missing <b>handwheel</b> of the H₂ valve.</p><button class="btn on" data-act="take">Take the handwheel</button>')
      : `<p class="note">Four number wheels. (You can also type the digits and press Enter.)</p>
        <div class="wheels">${G.drawer.code.map((d, i) => `<div class="wheel"><button class="btn" data-act="dw:${i}:1" aria-label="wheel ${i + 1} up">▲</button><div class="digit">${d}</div><button class="btn" data-act="dw:${i}:-1" aria-label="wheel ${i + 1} down">▼</button></div>`).join('')}</div>
        <button class="btn on" data-act="dopen">Pull the drawer</button>`),
    onAct: (a) => {
      const [k, i, dir] = a.split(':');
      if (k === 'dw') G.drawer.code[i] = (G.drawer.code[i] + Number(dir) + 10) % 10;
      if (k === 'digit') { G.drawer.code.shift(); G.drawer.code.push(Number(i)); }
      if (k === 'dopen') {
        if (G.drawer.code.join('') === P.drawerCode) { G.drawer.open = true; sound.clack(); toast('Click — the drawer slides open.', 'good'); note('drawer', 'Bench drawer', `Code ${P.drawerCode}. It held the H₂ valve handwheel.`); }
        else { sound.bad(); toast('The lock doesn\'t budge.', 'bad'); }
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
    controls: () => `<table class="phase-table"><tr><th>Colour</th><th>Digit</th><th>Multiplier</th></tr>${RES_COLORS.map((n, i) => `<tr><td><i class="sw" style="background:${RES_HEX[i]}"></i> ${n}</td><td>${i}</td><td>× 10${'⁰¹²³⁴⁵⁶⁷⁸⁹'[i]}</td></tr>`).join('')}</table>
      <p class="note">4-band resistor: digit, digit, multiplier, tolerance (gold ±5 %).</p>`,
    onOpen: () => note('colorcode', 'Resistor colour code', 'digit · digit · ×10ⁿ · tolerance — black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9.'),
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
      <p class="note">Keys 1–4 toggle A–D, Enter tests. A wrong TEST trips the security alarm (+0:30).</p>`,
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
      ${sync.closed ? lcd('Q0 CLOSED — the lab is connected to the grid ✔')
        : !grid.permit ? lcd('Q0 INTERLOCKED — no reconnection permit from the grid operator yet (gridctl).', true)
          : !G.permitIn ? `${lcd('Q0 INTERLOCKED — insert the operator\'s permit card.', true)}<button class="btn on" data-act="permit">🪪 Insert the permit card</button>` : lcd('Permit card accepted — interlock released.')}
      <div class="ctl"><label>Island voltage</label><div class="seg">${[-5, -1, 1, 5].map((v) => `<button class="btn" data-act="sv:${v}">${v > 0 ? '+' : '−'}${Math.abs(v)} V</button>`).join('')}</div></div>
      <div class="ctl"><label>Island frequency</label><div class="seg">${[-0.1, -0.01, 0.01, 0.1].map((v) => `<button class="btn" data-act="sf:${v}">${v > 0 ? '+' : '−'}${Math.abs(v)} Hz</button>`).join('')}</div></div>
      <div class="ctl"><label>Incomer terminals</label><div class="seg"><button class="btn" data-act="swap">⇄ Swap L2 ↔ L3</button></div><span class="note">jumper position ${sync.swapped ? 'A (as found after the storm repair)' : 'B (L2 ↔ L3 crossed)'}</span></div>
      ${sync.closed ? '' : '<button class="btn big danger" data-act="sclose" style="margin-top:4px">CLOSE Q0 <span style="font-size:12px">(Space)</span></button>'}`,
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
  D.exit = {
    title: 'Exit door',
    controls: () => (G.exitOpen ? '<p>The door is open. Fresh air!</p>' : '<p>The access control is dead: the building has no grid supply. Only the life-safety circuits run on the emergency generator.</p>'),
  };
  return D[id];
}

function playMemo() { for (let i = 0; i < 9; i++) sound.beep(140 + Math.random() * 120, 0.09, 'triangle', 0.05, i * 0.11); }

function closeTie() {
  if (!grid.permit || !G.permitIn) { sound.bad(); toast(grid.permit ? 'Q0 is interlocked: insert the permit card first.' : 'Q0 is interlocked: no reconnection permit yet (gridctl).', 'bad'); return; }
  const r = sync.check();
  if (r.ok) {
    sync.closed = true; sound.thunk(); sound.fanfare();
    toast('Q0 CLOSED — synchronised! The lab is back on the grid.', 'good');
    setStage('synced');
  } else {
    sync.flash = 1; G.shake = settings.reducedMotion ? 0 : 0.5; sound.clack(); sound.thunk();
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
  const fovT = settings.fov + (sprint && sp > 3.5 && !settings.reducedMotion ? 6 : 0);
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
      box3.setFromObject(hit.object.userData.root); box3.expandByScalar(0.02);
      highlight.box.copy(box3);
    }
  }
  highlight.visible = !!G.target;
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
  refs.sunLight.intensity = ease(refs.sunLight.intensity, s.sun.on ? 22 : 0, 3);
  refs.sunCone.opacity = ease(refs.sunCone.opacity, s.sun.on ? 0.07 : 0, 3);
  // lab lighting follows the energised phases (each phase feeds one group of fixtures)
  let litCount = 0;
  refs.labLights.forEach((L, i) => {
    const on = synced || f.live[fixturePhase[i]];
    const st = fixtureState[i];
    if (on && !st.on) st.flicker = 0.45;
    st.on = on;
    st.flicker = Math.max(0, st.flicker - dt);
    const fl = st.flicker > 0 ? (Math.random() < 0.5 ? 0.15 : 1) : 1;
    L.light.intensity = st.flicker > 0 ? 9 * fl : ease(L.light.intensity, on ? 9 : 0, 6);
    L.mat.emissiveIntensity = on ? 1.6 * fl : 0.05;
    if (on) litCount++;
  });
  refs.ctrlLights.forEach((L) => { L.light.intensity = ease(L.light.intensity, synced ? 11 : 0, 2); L.mat.emissiveIntensity = synced ? 1.4 : 0.05; });
  const over = TIME_LIMIT - totalTime() < 0;
  refs.emergency.forEach((l, i) => { l.intensity = over ? (Math.sin(t * 7 + i) > 0.6 ? 0.4 : 1.1) : 2.2; });
  refs.hemi.intensity = ease(refs.hemi.intensity, 0.2 + 0.45 * (litCount / 4) + (synced ? 0.5 : 0), 3);
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
  refs.cat.body.scale.y = 0.6 + Math.sin(t * 1.8) * 0.02;
  refs.cat.tail.rotation.z = Math.sin(t * 0.7) * 0.15;
  // booth door follows the drive progress
  const dTarget = s.door.state === 'open' ? 1.65 : s.door.state === 'opening' ? 1.65 * Math.min(1, s.door.t / C.DOOR_T) : 0;
  refs.door.position.x = ease(refs.door.position.x, dTarget, 4);
  refs.doorCollider.enabled = refs.door.position.x < 1.35;
  refs.doorLed.material.emissive.set(s.door.state === 'open' ? '#20ff60' : s.door.state === 'opening' ? (Math.sin(t * 12) > 0 ? '#ffb020' : '#ff2020') : sim.doorReady() ? '#ffb020' : '#ff2020');
  if (prevDoor !== 'open' && s.door.state === 'open') G.shake = settings.reducedMotion ? 0 : 0.35;
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
  if (player.z < -5 && syncTexTimer <= 0) { syncTexTimer = 0.05; redraw(refs.syncTex, (ctx, w, h) => drawSyncScope(ctx, w, h, sync, { compact: true })); }

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
        ['Public grid', synced ? 'CONNECTED ✔' : 'LOST (storm)'], ['PV (CPV rig)', `${f.pv.toFixed(2)} kW`], ['Battery', `${(s.bat.soc * 100).toFixed(0)} % SOC`],
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
  ui.busHud.style.display = G.stage === 'lab' ? '' : 'none';
  if (G.stage === 'lab') {
    ui.busHud.innerHTML = `<div style="color:#ffd24a;margin-bottom:4px">MAIN BUS · headroom</div>` +
      PH.map((n, p) => `<div class="row"><span style="color:${PH_COLORS[p]}">${n}${s.trip[p] ? ' <span class="bad">TRIP</span>' : f.live[p] ? '' : ' <span style="color:#778">dead</span>'}</span><span>${f.live[p] ? f.head[p].toFixed(2) + ' kW' : '—'} ${f.head[p] >= C.DOOR_P ? '✔' : ''}</span></div>
        <div class="bar"><i style="width:${Math.max(0, Math.min(100, f.head[p] / 6 * 100))}%;background:${f.head[p] >= C.DOOR_P ? '#3ecf7a' : PH_COLORS[p]}"></i><span class="mark" style="left:50%"></span></div>`).join('') +
      `<div class="row"><span>Battery</span><span>${(s.bat.soc * 100).toFixed(0)} %</span></div><div class="row"><span>H₂ tank</span><span>${(s.h2.level * C.H2_KG * 1000).toFixed(0)} g</span></div>`;
  }
  const left = TIME_LIMIT - totalTime();
  ui.timer.innerHTML = `⏱ ${left >= 0 ? mmss(left) : '<span class="bad">' + mmss(left) + '</span>'} <span class="sub">${left >= 0 ? 'emergency light' : 'overtime'}</span>`;
}

// ============================================================ audio mix
function updateAudio(dt) {
  const s = sim.s, f = sim.f;
  const synced = G.stage === 'synced' || G.stage === 'won';
  sound.update(camera, {
    hum: Math.min(1, f.load.reduce((a, b) => a + b, 0) / 9) + (synced ? 0.5 : 0),
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
    G: { inventory: G.inventory, journal: G.journal, heard: G.heard, hints: G.hints, time: G.time, drawer: G.drawer, board: G.board, diag: G.diag, f2seen: G.f2seen, exitOpen: G.exitOpen, catPets: G.catPets, termOpened: G.termOpened, gridResult: G.gridResult, permitIn: G.permitIn },
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
  if (G.stage === 'synced') {
    refs.windowMat.map = refs.dawnTex; refs.windowMat.needsUpdate = true;
    refs.outsideMat.map = refs.dawnTex; refs.outsideMat.needsUpdate = true;
  }
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
  card.innerHTML = `<h1>${INTRO.title}</h1>
    <p class="lead">${INTRO.lead}</p><p>${INTRO.body}</p>
    <div class="controls-help">${touchMode
      ? '<div>Left thumb: move</div><div>Right thumb: look</div><div>Tap an object / USE: interact</div><div>💡 hints · 📓 journal</div>'
      : '<div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> move · <kbd>Shift</kbd> run</div><div><kbd>Mouse</kbd> look</div><div><kbd>E</kbd>/<kbd>Click</kbd> use</div><div><kbd>H</kbd> hint</div><div><kbd>J</kbd> journal</div><div><kbd>Esc</kbd> menu</div>'}</div>
    <div class="start-btns">
      ${cont(svC, 'cont-classic')}${cont(svD, 'cont-daily')}
      <button class="btn big ${svC || svD ? 'alt' : ''}" data-start="classic">New game · Classic room</button>
      <button class="btn big alt" data-start="daily">${svD ? 'Restart' : 'Play'} daily room · ${String(daily).slice(6)}.${String(daily).slice(4, 6)}.</button>
      <button class="btn" data-start="settings">⚙ Settings</button>
    </div>
    ${Object.keys(best).length ? `<p class="note">Best: ${Object.entries(best).map(([k, v]) => `${k === '0' ? 'Classic' : 'Daily ' + k} ${mmss(v.time)} (${v.rank})`).join(' · ')}</p>` : ''}
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
  touch.enable(touchMode);
  if (touchMode) enterPlay(); else lockPointer();
  sound.init();
  if (fresh) { sound.good(); toast(seed ? `Daily room ${seed}: every code is different today.` : 'Find a way out. The emergency light won\'t last forever.'); }
  else toast('Welcome back.');
  renderInv();
}

function win() {
  setStage('won');
  openOverlay('end');
  const total = totalTime();
  const rank = RANKS.find(([m]) => total / 60 < m)[1];
  const best = store.get(BEST_KEY) || {};
  const key = String(seed);
  const isBest = !best[key] || total < best[key].time;
  if (isBest) { best[key] = { time: total, rank }; store.set(BEST_KEY, best); }
  store.del(SAVE_KEY);
  const gr = G.gridResult;
  const ach = [
    [G.hints.used === 0, 'No hints'], [sim.s.stats.trips === 0, 'No breaker trips'], [gr?.stars === 3, 'Grid wizard (3★)'],
    [total < 30 * 60, 'Under 30 minutes'], [G.catPets > 0, 'Cat person'], [Object.keys(G.heard).length === 4, 'Heard every memo'], [G.board.fails === 0, 'Clean logic'],
  ];
  const splits = Object.entries(G.time.splits).filter(([k]) => SPLIT[k]).map(([k, v]) => `<span>${SPLIT[k]}</span><span>${mmss(v)}</span>`).join('');
  const share = `⚡ Power Lab Escape · ${seed ? 'Daily ' + seed : 'Classic'} · ${mmss(total)} · ${G.hints.used} hints · grid ${gr ? '★'.repeat(gr.stars) : '–'} · "${rank}"`;
  $('endCard').innerHTML = `<h1>🌅 YOU ESCAPED</h1>
    <p class="lead">Dawn. The storm has passed and the lab hums on the grid again. Rank: <b>${rank}</b>${isBest ? ' · new personal best!' : ''}</p>
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
  $('keepBtn').onclick = () => { ui.end.classList.add('hidden'); G.mode = 'paused'; closeOverlay(); };
}

// ============================================================ main loop
let last = performance.now(), hudTimer = 0, saveTimer = 5, doorWasOpen = sim.s.door.state === 'open';
function loop(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  const running = !['start', 'menu', 'end'].includes(G.mode);
  if (running) {
    sim.tick(dt);
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
    if (player.x > e.minX && player.x < e.maxX && player.z > e.minZ && player.z < e.maxZ) win();
  }
  const bob = settings.reducedMotion ? 0 : Math.sin(player.bob) * 0.03 * Math.min(1, Math.hypot(player.vx, player.vz) / 3);
  G.shake = Math.max(0, G.shake - dt);
  const sh = G.shake * 0.05;
  camera.position.set(player.x + (Math.random() - 0.5) * sh, player.eye + bob + (Math.random() - 0.5) * sh, player.z + (Math.random() - 0.5) * sh);
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

  if (G.mode !== 'grid') renderer.render(scene, camera);   // the dispatch console covers the whole screen
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
else if (params.get('autostart')) { store.del(SAVE_KEY); showResumeGate(); toast(seed ? `Daily room ${seed}: every code is different today.` : 'Find a way out. The emergency light won\'t last forever.'); }
else showStart();

window.__game = { player, sim, G, P, interact, terminal, grid, sync, refs, openPanel, setStage, win, save };
