import * as THREE from 'three';
import { canvasTex, labelTex, tileTex, pvCellTex, hazardTex, redraw, FONT } from './textures.js';
import { drawCircuit } from './schematic.js';
import { RES_HEX } from './puzzle.js';
import { whiteboardLines } from './story.js';

// Layout (metres). Booth: x[-6,6] z[-5,5]. Control room: x[-5,5] z[-13,-5]. Booth door in wall z=-5, x[-0.8,0.8].
// Exit door in the control-room east wall x=5, z[-8.8,-7.2] → corridor to the outside (x up to 9).
export const H = 3.5;

const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.05, ...o });

export function drawKeypad(ctx, w, h, unlocked) {
  ctx.fillStyle = '#2a2f36'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ffd24a'; ctx.font = `bold 30px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('SUN-SIM', w / 2, 40);
  ctx.fillStyle = '#081a0e'; ctx.fillRect(24, 60, w - 48, 50);
  ctx.fillStyle = unlocked ? '#3eff7a' : '#ff4a4a'; ctx.font = `24px ${FONT.mono}`; ctx.fillText(unlocked ? 'UNLOCKED' : 'LOCKED', w / 2, 94);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) {
    ctx.fillStyle = '#ccd'; ctx.fillRect(40 + c * 64, 130 + r * 56, 48, 42);
    ctx.fillStyle = '#222'; ctx.font = `bold 22px ${FONT.sans}`;
    ctx.fillText('123456789C0✓'[r * 3 + c], 64 + c * 64, 159 + r * 56);
  }
}

export function drawSevenSeg(ctx, w, h, text, on) {
  ctx.fillStyle = '#100404'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = on ? '#ff3b2f' : '#3a1210'; ctx.font = `bold ${h * 0.75}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(on ? text : '--', w / 2, h / 2 + 2);
  ctx.textBaseline = 'alphabetic';
}

function skyTex(dawn) {
  return canvasTex(1024, 384, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    if (dawn) { g.addColorStop(0, '#2b4a7a'); g.addColorStop(0.55, '#f0a068'); g.addColorStop(1, '#ffd9a0'); }
    else { g.addColorStop(0, '#03060f'); g.addColorStop(1, '#141c2c'); }
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    if (dawn) { const s = ctx.createRadialGradient(760, h - 70, 5, 760, h - 70, 120); s.addColorStop(0, 'rgba(255,240,200,1)'); s.addColorStop(1, 'rgba(255,200,120,0)'); ctx.fillStyle = s; ctx.fillRect(0, 0, w, h); }
    let x = 0; let seed = 7;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    while (x < w) {
      const bw = 30 + rnd() * 70, bh = 60 + rnd() * 200;
      ctx.fillStyle = dawn ? '#27283a' : '#070b12'; ctx.fillRect(x, h - bh, bw, bh);
      for (let yy = h - bh + 10; yy < h - 10; yy += 16) for (let xx = x + 6; xx < x + bw - 8; xx += 12)
        if (rnd() < (dawn ? 0.35 : 0.04)) { ctx.fillStyle = rnd() < 0.5 ? '#ffd27a' : '#9fc4ff'; ctx.fillRect(xx, yy, 5, 7); }
      x += bw + 4;
    }
    ctx.strokeStyle = dawn ? '#3a3d52' : '#1b2230'; ctx.lineWidth = 2;
    for (const tx of [820, 900, 960]) {
      ctx.beginPath(); ctx.moveTo(tx, h - 150); ctx.lineTo(tx, h - 60); ctx.stroke();
      for (let a = 0; a < 3; a++) { const an = a * 2.09 + tx; ctx.beginPath(); ctx.moveTo(tx, h - 150); ctx.lineTo(tx + Math.cos(an) * 34, h - 150 + Math.sin(an) * 34); ctx.stroke(); }
    }
    if (!dawn) {                         // rain streaks
      ctx.strokeStyle = 'rgba(160,190,230,.22)'; ctx.lineWidth = 1;
      for (let i = 0; i < 260; i++) { const rx = rnd() * w, ry = rnd() * h; ctx.beginPath(); ctx.moveTo(rx, ry); ctx.lineTo(rx - 6, ry + 22); ctx.stroke(); }
    }
  });
}

export function buildWorld(scene, P) {
  const colliders = [];
  const refs = { interactables: [] };
  const col = (minX, maxX, minZ, maxZ) => { const c = { minX, maxX, minZ, maxZ, enabled: true }; colliders.push(c); return c; };

  const box = (w, h, d, mat, x, y, z, parent = scene) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z); parent.add(m); return m;
  };
  const cyl = (r, h, mat, x, y, z, parent = scene, seg = 24) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat);
    m.position.set(x, y, z); parent.add(m); return m;
  };
  const sph = (r, mat, x, y, z, parent = scene) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), mat); m.position.set(x, y, z); parent.add(m); return m; };
  const plane = (w, h, mat, x, y, z, face = '+z', parent = scene) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    m.position.set(x, y, z);
    m.rotation.y = { '+z': 0, '-z': Math.PI, '+x': Math.PI / 2, '-x': -Math.PI / 2 }[face] ?? 0;
    if (face === '+y') m.rotation.set(-Math.PI / 2, 0, 0);
    parent.add(m); return m;
  };
  const texMat = (tex, o = {}) => new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, ...o });
  const screenMat = (tex, k = 0.6) => texMat(tex, { emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: k });
  const glowMat = (color, intensity = 1) => new THREE.MeshStandardMaterial({ color: 0x111111, emissive: new THREE.Color(color), emissiveIntensity: intensity });
  /** Mark a group/mesh as interactable. The whole group is highlighted when targeted. */
  const tag = (obj, id, label) => {
    obj.traverse((o) => { o.userData.id = id; o.userData.label = label; o.userData.root = obj; });
    refs.interactables.push(obj);
    return obj;
  };
  const pipe = (a, b, r, mat) => {
    const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, va.distanceTo(vb), 12), mat);
    m.position.copy(va).add(vb).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vb.clone().sub(va).normalize());
    scene.add(m); return m;
  };
  const noRay = (m) => { m.raycast = () => {}; return m; };

  // ---------------------------------------------------------------- materials
  const floorTex = tileTex('#747a80', '#5c6166', 2); floorTex.repeat.set(6, 5);
  const M = {
    floor: std(0xffffff, { map: floorTex, roughness: 0.85 }),
    wall: std(0xd7dbde, { roughness: 0.95 }),
    ceil: std(0xb9bec2, { roughness: 1 }),
    metal: std(0x9aa4ad, { metalness: 0.6, roughness: 0.35 }),
    dark: std(0x2b3036, { roughness: 0.6 }),
    white: std(0xeef1f3, { roughness: 0.5 }),
    alu: std(0xc6ccd2, { metalness: 0.7, roughness: 0.3 }),
    pipeY: std(0xe0b21a, { metalness: 0.3, roughness: 0.4 }),
    pipeB: std(0x3a7fd0, { metalness: 0.3, roughness: 0.4 }),
    ctrlWall: std(0x55657a, { roughness: 0.9 }),
    wood: std(0x6b4e33, { roughness: 0.8 }),
    red: std(0xd02020, { metalness: 0.4 }),
  };

  // ---------------------------------------------------------------- shells
  plane(12, 10, M.floor, 0, 0, 0, '+y');
  const ctrlFloorTex = tileTex('#3a4350', '#2d353f', 2); ctrlFloorTex.repeat.set(5, 4);
  const ctrlFloor = std(0xffffff, { map: ctrlFloorTex, roughness: 0.8 });
  plane(10, 8, ctrlFloor, 0, 0, -9, '+y');
  plane(12, 10, M.ceil, 0, H, 0, '+y').rotation.x = Math.PI / 2;
  plane(10, 8, M.ceil, 0, H, -9, '+y').rotation.x = Math.PI / 2;

  box(12.4, H, 0.2, M.wall, 0, H / 2, 5.1); col(-6.2, 6.2, 5, 5.2);
  box(0.2, H, 10.4, M.wall, -6.1, H / 2, 0); col(-6.2, -6, -5.2, 5.2);
  box(0.2, H, 10.4, M.wall, 6.1, H / 2, 0); col(6, 6.2, -5.2, 5.2);
  box(5.4, H, 0.2, M.wall, -3.5, H / 2, -5.1); col(-6.2, -0.8, -5.2, -5);
  box(5.4, H, 0.2, M.wall, 3.5, H / 2, -5.1); col(0.8, 6.2, -5.2, -5);
  box(1.6, H - 2.4, 0.2, M.wall, 0, 2.4 + (H - 2.4) / 2, -5.1);
  // control room: west + back walls, east wall split around the exit door (z -8.8…-7.2)
  box(0.2, H, 8, M.ctrlWall, -5.1, H / 2, -9.2); col(-5.2, -5, -13.2, -5.2);
  box(10.4, H, 0.2, M.ctrlWall, 0, H / 2, -13.1); col(-5.2, 5.2, -13.2, -13);
  box(0.2, H, 4.4, M.ctrlWall, 5.1, H / 2, -11.0); col(5, 5.2, -13.2, -8.8);
  box(0.2, H, 2.0, M.ctrlWall, 5.1, H / 2, -6.2); col(5, 5.2, -7.2, -5.2);
  box(0.2, H - 2.4, 1.6, M.ctrlWall, 5.1, 2.4 + (H - 2.4) / 2, -8.0);
  // exit corridor
  plane(3.8, 1.6, ctrlFloor, 7.1, 0, -8, '+y');
  plane(3.8, 1.6, M.ceil, 7.1, H, -8, '+y').rotation.x = Math.PI / 2;
  box(3.8, H, 0.2, M.ctrlWall, 7.1, H / 2, -7.1); col(5.2, 9.2, -7.2, -7.0);
  box(3.8, H, 0.2, M.ctrlWall, 7.1, H / 2, -8.9); col(5.2, 9.2, -9.0, -8.8);
  refs.outsideMat = new THREE.MeshBasicMaterial({ map: skyTex(false) });
  refs.dawnTex = skyTex(true);
  plane(1.6, H, refs.outsideMat, 9.0, H / 2, -8, '-x'); col(9, 9.2, -8.8, -7.2);
  refs.exitTrigger = { minX: 7.6, maxX: 9, minZ: -8.8, maxZ: -7.2 };
  box(11.9, 0.1, 0.02, M.dark, 0, 0.05, 4.99);
  box(0.02, 0.1, 9.9, M.dark, -5.99, 0.05, 0);
  box(0.02, 0.1, 9.9, M.dark, 5.99, 0.05, 0);

  // ---------------------------------------------------------------- lights (driven by main.js)
  refs.hemi = new THREE.HemisphereLight(0xdfe8ff, 0x8a8278, 0.25); scene.add(refs.hemi);
  refs.labLights = [];
  for (const [x, z] of [[-3, -2.2], [3, -2.2], [-3, 2.5], [3, 2.5]]) {
    const mat = glowMat(0xf4f7ff, 0.05);
    box(1.4, 0.06, 0.35, mat, x, H - 0.03, z);
    const l = new THREE.PointLight(0xf4f7ff, 0, 0, 2); l.position.set(x, H - 0.25, z); scene.add(l);
    refs.labLights.push({ light: l, mat });
  }
  refs.ctrlLights = [];
  for (const [x, z] of [[-2.5, -9], [2.5, -9], [7.0, -8]]) {
    const mat = glowMat(0xbcd4ff, 0.05);
    box(1.2, 0.06, 0.3, mat, x, H - 0.03, z);
    const l = new THREE.PointLight(0xfff1dc, 0, 0, 2); l.position.set(x, H - 0.3, z); scene.add(l);
    refs.ctrlLights.push({ light: l, mat });
  }
  // emergency luminaires (battery backed): cool white, dim
  refs.emergency = [];
  for (const [x, y, z] of [[0, 3.2, 4.8], [-5.8, 3.2, -4.6], [5.8, 3.2, -4.6], [4.8, 3.2, -12.8]]) {
    box(0.4, 0.1, 0.12, glowMat(0xe8f0ff, 1.2), x, y, z);
    const l = new THREE.PointLight(0xcfe0ff, 2.2, 0, 2); l.position.set(x, y - 0.2, z + (z > 0 ? -0.3 : 0.3)); scene.add(l);
    refs.emergency.push(l);
  }
  // green EXIT signs
  const exitSign = labelTex([{ t: '🏃 EXIT', font: `bold 72px ${FONT.sans}` }], { w: 256, h: 96, bg: '#0c7a35', fg: '#fff' });
  plane(0.6, 0.22, screenMat(exitSign, 1.1), 4.98, 2.7, -8.0, '-x');

  // ---------------------------------------------------------------- PV rack + sun simulator (left wall)
  const pvCell = texMat(pvCellTex(), { roughness: 0.25, metalness: 0.3 });
  for (const zc of [-1.3, 0, 1.3]) {
    const g = new THREE.Group(); g.position.set(-4.95, 1.05, zc); g.rotation.z = -0.5;
    box(1.75, 0.05, 1.15, M.alu, 0, 0, 0, g);
    plane(1.68, 1.08, pvCell, 0, 0.03, 0, '+y', g);
    scene.add(g); tag(g, 'pv', 'CPV test modules');
  }
  box(1.5, 0.06, 3.9, M.metal, -4.95, 0.62, 0);
  for (const zc of [-1.9, 1.9]) for (const xc of [-5.6, -4.3]) box(0.06, xc < -5 ? 1.35 : 0.62, 0.06, M.metal, xc, xc < -5 ? 0.67 : 0.31, zc);
  col(-5.75, -4.15, -2, 2);
  box(1.7, 0.18, 4.0, M.dark, -4.95, 3.05, 0);
  box(0.05, 0.4, 0.05, M.metal, -4.95, 3.3, -1.8); box(0.05, 0.4, 0.05, M.metal, -4.95, 3.3, 1.8);
  const lampMat = glowMat(0xfff2c8, 0.05);
  const n = P.lamps, rows = n > 5 ? 2 : 1, perRow = Math.ceil(n / rows);
  let placed = 0;
  for (let r = 0; r < rows; r++) {
    const cnt = r === rows - 1 ? n - placed : perRow;
    for (let i = 0; i < cnt; i++) {
      const zc = cnt === 1 ? 0 : -1.5 + (3 * i) / (cnt - 1);
      const xc = rows === 1 ? -4.95 : r === 0 ? -5.35 : -4.55;
      cyl(0.2, 0.05, lampMat, xc, 2.94, zc); cyl(0.23, 0.08, M.dark, xc, 3.0, zc);
      placed++;
    }
  }
  refs.sunLampMat = lampMat;
  refs.sunLight = new THREE.PointLight(0xfff0cc, 0, 0, 2); refs.sunLight.position.set(-4.95, 2.6, 0); scene.add(refs.sunLight);
  const coneMat = new THREE.MeshBasicMaterial({ color: 0xfff0c0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  noRay(box(1.6, 1.8, 3.8, coneMat, -4.95, 2.0, 0));
  refs.sunCone = coneMat;
  refs.keypadTex = canvasTex(256, 360, (ctx, w, h) => drawKeypad(ctx, w, h, false));
  const kp = new THREE.Group();
  box(0.06, 0.5, 0.36, M.dark, -5.97, 1.45, 2.85, kp);
  plane(0.34, 0.48, screenMat(refs.keypadTex, 0.35), -5.935, 1.45, 2.85, '+x', kp);
  scene.add(kp); tag(kp, 'sunsim', 'Sun-simulator keypad');
  plane(0.8, 0.4, texMat(labelTex(['CPV TEST RIG', { t: 'Sun simulator · 2.4 suns', font: `30px ${FONT.sans}` }], { bg: '#1b3a6b', fg: '#fff' })), -5.99, 2.35, 0, '+x');

  // ---------------------------------------------------------------- Battery cabinets (right wall)
  const batFront = canvasTex(256, 420, (ctx, w, h) => {
    ctx.fillStyle = '#e9ecef'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2d7a3e'; ctx.fillRect(0, 0, w, 50);
    ctx.fillStyle = '#fff'; ctx.font = `bold 26px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('Li-ion BESS', w / 2, 34);
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = '#c5cad0'; ctx.fillRect(20, 70 + i * 56, w - 40, 46);
      ctx.fillStyle = '#8b9299'; ctx.fillRect(30, 80 + i * 56, 60, 8);
      ctx.fillStyle = '#3a3'; ctx.fillRect(w - 50, 82 + i * 56, 10, 10);
    }
  });
  refs.socLeds = [];
  for (const [i, zc] of [[0, 2.35], [1, 3.75]]) {
    const g = new THREE.Group();
    box(0.7, 2.0, 1.2, M.white, 5.6, 1.0, zc, g);
    plane(1.1, 1.8, texMat(batFront), 5.245, 1.0, zc, '-x', g);
    if (i === 0) {
      box(0.04, 1.1, 0.14, M.dark, 5.23, 1.1, zc + 0.48, g);
      for (let k = 0; k < 10; k++) refs.socLeds.push(box(0.02, 0.07, 0.09, glowMat(0x222222, 1), 5.2, 0.63 + k * 0.105, zc + 0.48, g));
    }
    scene.add(g); tag(g, 'battery', 'Battery storage 10 kWh');
  }
  col(5.2, 6, 1.7, 4.4);

  // ---------------------------------------------------------------- Inverters (right wall)
  refs.invLeds = {};
  const invDefs = [['inv_pv', 'INV-1', 'PV · HYBRID', 0.95], ['inv_bat', 'INV-2', 'BATTERY', 0.15], ['inv_fc', 'INV-3', 'FUEL CELL', -0.65]];
  for (const [id, name, sub, zc] of invDefs) {
    const g = new THREE.Group();
    box(0.22, 0.72, 0.56, M.white, 5.88, 1.6, zc, g);
    const t = labelTex([{ t: name, font: `bold 64px ${FONT.sans}` }, { t: sub, font: `bold 36px ${FONT.sans}`, color: '#1b5fa8' }, { t: '~ / =', font: `46px ${FONT.mono}`, color: '#666' }], { w: 256, h: 320, bg: '#f5f6f7' });
    plane(0.5, 0.64, texMat(t), 5.765, 1.6, zc, '-x', g);
    refs.invLeds[id] = box(0.03, 0.05, 0.05, glowMat(0x111111, 1), 5.75, 1.88, zc + 0.18, g);
    scene.add(g); tag(g, id, `${name} · ${sub.toLowerCase()} inverter`);
    box(0.08, 3.1 - 1.96, 0.08, M.dark, 5.93, 1.96 + (3.1 - 1.96) / 2, zc - 0.2);
  }

  // ---------------------------------------------------------------- Faraday (or whoever) the cat, asleep on INV-2
  const cat = new THREE.Group();
  const fur = std(0xd98a3a, { roughness: 0.95 }), furDark = std(0xa8611f, { roughness: 0.95 });
  const body = sph(0.13, fur, 0, 0.075, 0, cat); body.scale.set(0.95, 0.6, 1.6);
  const head = sph(0.085, fur, -0.02, 0.1, 0.19, cat); head.scale.set(1, 0.9, 1);
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.06, 8), furDark);
    ear.position.set(-0.02 + s * 0.045, 0.18, 0.2); ear.rotation.z = -s * 0.25; cat.add(ear);
  }
  const tail = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.022, 8, 20, Math.PI * 1.1), fur);
  tail.rotation.x = Math.PI / 2; tail.position.set(0, 0.03, -0.02); cat.add(tail);
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.01, 6, 16), M.red); collar.position.set(-0.02, 0.07, 0.15); collar.rotation.x = Math.PI / 2.4; cat.add(collar);
  const tagDisc = cyl(0.018, 0.005, std(0xe0b030, { metalness: 0.8, roughness: 0.3 }), -0.07, 0.05, 0.16, cat); tagDisc.rotation.z = Math.PI / 2;
  cat.position.set(5.86, 1.96, 0.15);
  scene.add(cat); tag(cat, 'cat', 'A sleeping cat');
  refs.cat = { group: cat, body, tail };

  // ---------------------------------------------------------------- Main bus panel (right wall)
  const bus = new THREE.Group();
  box(0.4, 2.0, 1.9, std(0x8a939c, { metalness: 0.4, roughness: 0.5 }), 5.8, 1.2, -2.9, bus);
  box(0.02, 1.85, 1.75, std(0x1b2127), 5.595, 1.2, -2.9, bus);
  refs.busbars = [];
  [1.75, 1.5, 1.25].forEach((y, i) => {
    refs.busbars.push(box(0.05, 0.07, 1.4, glowMat(0x333333, 0.15), 5.55, y, -2.95, bus));
    plane(0.16, 0.12, texMat(labelTex([`L${i + 1}`], { w: 128, h: 96, bg: '#1b2127', fg: '#e6edf3', font: `bold 64px ${FONT.sans}` })), 5.575, y, -2.1, '-x', bus);
  });
  box(0.05, 0.07, 1.4, std(0x3a6ad0, { metalness: 0.5 }), 5.55, 1.0, -2.95, bus);
  plane(0.16, 0.12, texMat(labelTex(['N'], { w: 128, h: 96, bg: '#1b2127', fg: '#7aa0ff', font: `bold 64px ${FONT.sans}` })), 5.575, 1.0, -2.1, '-x', bus);
  refs.breakers = [];
  for (let i = 0; i < 3; i++) {
    box(0.1, 0.3, 0.16, M.white, 5.55, 0.55, -3.3 + i * 0.3, bus);
    refs.breakers.push(box(0.06, 0.08, 0.06, std(0x2a2a2a), 5.49, 0.6, -3.3 + i * 0.3, bus));
  }
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.75, 1.85), new THREE.MeshStandardMaterial({ color: 0xaaccee, transparent: true, opacity: 0.12, roughness: 0.05 }));
  glass.position.set(5.5, 1.2, -2.9); glass.rotation.y = -Math.PI / 2; bus.add(glass);
  scene.add(bus); tag(bus, 'bus', 'Main bus panel');
  plane(1.2, 0.3, texMat(labelTex(['MAIN BUS  3~ 230/400 V'], { w: 512, h: 128, bg: '#ffd200', fg: '#111', font: `bold 48px ${FONT.sans}` })), 5.99, 2.45, -2.9, '-x');
  plane(0.4, 0.4, texMat(canvasTex(256, 256, (ctx) => {
    ctx.fillStyle = '#ffd200'; ctx.beginPath(); ctx.moveTo(128, 16); ctx.lineTo(244, 230); ctx.lineTo(12, 230); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#111'; ctx.lineWidth = 12; ctx.stroke();
    ctx.fillStyle = '#111'; ctx.font = `bold 130px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('⚡', 128, 200);
  }), { transparent: true }), 5.99, 2.4, -1.7, '-x');
  col(5.5, 6, -3.9, -1.9);
  box(0.35, 0.08, 7.8, M.metal, 5.75, 3.12, 0.4);
  box(10.8, 0.08, 0.35, M.metal, 0.4, 3.12, -4.75);
  box(0.08, 0.9, 0.08, M.dark, 5.93, 2.65, -2.9);
  // recorder on top of the battery cabinet
  refs.recorders = {};
  const recorder = (id, x, y, z, rotY = 0) => {
    const g = new THREE.Group();
    box(0.14, 0.035, 0.07, std(0x1b1f24), 0, 0, 0, g);
    box(0.05, 0.01, 0.04, M.alu, 0.03, 0.022, 0, g);
    const led = box(0.012, 0.012, 0.012, glowMat(0xff2020, 1.5), -0.05, 0.022, 0.02, g);
    g.position.set(x, y, z); g.rotation.y = rotY; scene.add(g); tag(g, id, 'Voice recorder');
    refs.recorders[id] = led;
  };
  recorder('rec2', 5.6, 2.02, 3.8, 0.4);

  // ---------------------------------------------------------------- Electrolyzer
  const elzTex = canvasTex(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#f2f4f6'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#1b5fa8'; ctx.fillRect(0, 60, w, 60);
    ctx.fillStyle = '#fff'; ctx.font = `bold 44px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('PEM ELECTROLYZER', w / 2, 105);
    ctx.fillStyle = '#333'; ctx.font = `32px ${FONT.sans}`; ctx.fillText('3 kW · H₂O → H₂ + ½ O₂ · 30 bar', w / 2, 170);
    for (let i = 0; i < 18; i++) { ctx.fillStyle = i % 2 ? '#9aa4ad' : '#6f7a84'; ctx.fillRect(70 + i * 20, 220, 16, 180); }
    ctx.fillStyle = '#081a0e'; ctx.fillRect(140, 420, 232, 56);
  });
  const elz = new THREE.Group();
  box(1.6, 1.6, 1.1, M.white, -4.7, 0.8, -4.2, elz);
  plane(1.5, 1.5, texMat(elzTex), -4.7, 0.8, -3.645, '+z', elz);
  refs.elzGlow = box(1.5, 0.05, 0.02, glowMat(0x3aa0ff, 0.05), -4.7, 1.57, -3.64, elz);
  cyl(0.28, 0.7, std(0xcfe8ff, { transparent: true, opacity: 0.7, roughness: 0.1 }), -5.15, 1.95, -4.3, elz);
  scene.add(elz); tag(elz, 'electrolyzer', 'PEM electrolyzer');
  col(-5.55, -3.85, -4.8, -3.6);
  recorder('rec3', -4.3, 1.62, -3.95, -0.3);

  // ---------------------------------------------------------------- H2 buffer tank (30 bar, 90 L)
  const tank = new THREE.Group();
  cyl(0.24, 1.3, M.white, -2.9, 0.75, -4.35, tank);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.24, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.white); cap.position.set(-2.9, 1.4, -4.35); tank.add(cap);
  plane(0.3, 0.3, texMat(labelTex([{ t: 'H₂', font: `bold 120px ${FONT.sans}`, color: '#c21' }, { t: '30 bar · 90 L', font: `36px ${FONT.sans}` }], { w: 256, h: 256, bg: '#ffffff' })), -2.9, 1.0, -4.105, '+z', tank);
  refs.valve = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.022, 8, 20), M.red);
  refs.valve.position.set(-2.9, 0.45, -3.98); refs.valve.visible = false; tank.add(refs.valve);
  cyl(0.02, 0.14, M.metal, -2.9, 0.45, -4.05, tank).rotation.x = Math.PI / 2;
  refs.valveTag = plane(0.12, 0.08, texMat(labelTex(['NO WHEEL', '— M.V.'], { w: 128, h: 96, bg: '#fff6c8', fg: '#b3261e', font: `bold 22px ${FONT.sans}` })), -2.78, 0.36, -3.975, '+z', tank);
  cyl(0.05, 1.0, std(0xcce6ff, { transparent: true, opacity: 0.3 }), -2.52, 0.85, -4.15, tank);
  refs.h2Bar = cyl(0.038, 0.96, glowMat(0x6fd0ff, 0.8), -2.52, 0.37, -4.15, tank);
  refs.h2Bar.geometry.translate(0, 0.48, 0); refs.h2Bar.scale.y = 0.001;
  scene.add(tank); tag(tank, 'h2tank', 'H₂ tank & valve');
  col(-3.2, -2.4, -4.7, -3.9);
  pipe([-3.9, 1.4, -4.35], [-3.14, 1.4, -4.35], 0.035, M.pipeY);
  pipe([-2.9, 1.64, -4.35], [-2.9, 2.75, -4.35], 0.035, M.pipeY);
  pipe([-2.9, 2.75, -4.35], [-2.9, 2.75, -4.85], 0.035, M.pipeY);
  pipe([-2.9, 2.75, -4.85], [3.1, 2.75, -4.85], 0.035, M.pipeY);
  pipe([3.1, 2.75, -4.85], [3.1, 1.3, -4.85], 0.035, M.pipeY);
  pipe([-5.15, 2.3, -4.3], [-5.15, 3.1, -4.3], 0.03, M.pipeB);

  // ---------------------------------------------------------------- Fuel cell
  const fcTex = canvasTex(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#5b6570'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2e8b57'; ctx.fillRect(0, 40, w, 70);
    ctx.fillStyle = '#fff'; ctx.font = `bold 46px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('PEM FUEL CELL', w / 2, 92);
    ctx.fillStyle = '#e6edf3'; ctx.font = `32px ${FONT.sans}`; ctx.fillText('3.4 kW · H₂ + ½ O₂ → H₂O', w / 2, 160);
    ctx.strokeStyle = '#333'; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.arc(w / 2, 330, 120, 0, Math.PI * 2); ctx.stroke();
    for (let i = -100; i <= 100; i += 20) { ctx.beginPath(); ctx.moveTo(w / 2 - Math.sqrt(120 * 120 - i * i), 330 + i); ctx.lineTo(w / 2 + Math.sqrt(120 * 120 - i * i), 330 + i); ctx.stroke(); }
  });
  const fc = new THREE.Group();
  box(1.3, 1.3, 0.9, std(0x5b6570, { metalness: 0.3 }), 3.1, 0.65, -4.3, fc);
  plane(1.25, 1.25, texMat(fcTex), 3.1, 0.65, -3.845, '+z', fc);
  refs.fcGlow = box(1.2, 0.05, 0.02, glowMat(0x3ecf7a, 0.05), 3.1, 1.27, -3.84, fc);
  scene.add(fc); tag(fc, 'fuelcell', 'PEM fuel cell');
  col(2.4, 3.8, -4.8, -3.8);

  // ---------------------------------------------------------------- Booth door + controller
  const doorTex = canvasTex(256, 384, (ctx, w, h) => {
    ctx.fillStyle = '#7d8790'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#5d666e'; ctx.lineWidth = 4; ctx.strokeRect(16, 16, w - 32, h - 32);
    ctx.fillStyle = '#1b2530'; ctx.fillRect(70, 50, 116, 90);
    ctx.fillStyle = '#ffd200'; ctx.fillRect(16, 250, w - 32, 38);
    ctx.fillStyle = '#111'; ctx.font = `bold 20px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('CONTROL ROOM', w / 2, 276);
  });
  refs.door = box(1.62, 2.4, 0.08, [M.metal, M.metal, M.metal, M.metal, texMat(doorTex, { metalness: 0.4 }), texMat(doorTex, { metalness: 0.4 })], 0, 1.2, -4.93);
  tag(refs.door, 'door', 'Booth door (motor drive)');
  refs.doorCollider = col(-0.85, 0.85, -5.2, -4.85);
  refs.doorLed = box(0.5, 0.06, 0.04, glowMat(0xff2020, 1.5), 0, 2.55, -4.98);
  refs.doorScreenTex = canvasTex(256, 320);
  const ds = new THREE.Group();
  box(0.42, 0.52, 0.05, M.dark, -1.3, 1.45, -4.98, ds);
  plane(0.36, 0.45, screenMat(refs.doorScreenTex), -1.3, 1.45, -4.95, '+z', ds);
  scene.add(ds); tag(ds, 'door', 'Door drive controller');
  for (const z of [-4.7, -5.45]) { const hz = hazardTex(); hz.repeat.set(3, 1); plane(1.6, 0.25, texMat(hz), 0, 0.005, z, '+y'); }

  // ---------------------------------------------------------------- Whiteboard, plaque, workbench, drawer, resistor, colour-code poster
  const wbTex = canvasTex(1024, 512, (ctx, w, h) => {
    ctx.fillStyle = '#f7f7f2'; ctx.fillRect(0, 0, w, h);
    // smudges of erased notes
    for (let i = 0; i < 14; i++) { ctx.fillStyle = 'rgba(120,130,160,.07)'; ctx.beginPath(); ctx.ellipse(80 + Math.random() * 860, 60 + Math.random() * 400, 120, 22, Math.random() - 0.5, 0, Math.PI * 2); ctx.fill(); }
    const hand = '"Segoe Print", "Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive';
    whiteboardLines(P).forEach(([t, c, f], i) => { ctx.fillStyle = c; ctx.font = `${f || '28px'} ${hand}`; ctx.fillText(t, 40, 64 + i * 58); });
  });
  const wb = new THREE.Group();
  box(2.7, 1.4, 0.05, M.alu, -1.8, 1.75, 4.97, wb);
  plane(2.6, 1.3, texMat(wbTex, { roughness: 0.3 }), -1.8, 1.75, 4.94, '-z', wb);
  box(2.0, 0.04, 0.08, M.alu, -1.8, 1.03, 4.93, wb);
  scene.add(wb); tag(wb, 'whiteboard', 'Whiteboard');

  const plaque = new THREE.Group();
  const plaqueTex = labelTex([{ t: 'SOLAR TEST LABORATORY', font: 'bold 38px Georgia, serif' }, { t: `EST. ${P.year}`, font: 'bold 64px Georgia, serif' }, { t: '"Power to the people."', font: 'italic 30px Georgia, serif' }], { w: 512, h: 300, bg: '#b8923a', fg: '#3b2a08', border: '#8a6a22' });
  box(0.74, 0.44, 0.03, std(0x8a6a22, { metalness: 0.7 }), 2.6, 1.95, 4.98, plaque);
  plane(0.7, 0.41, texMat(plaqueTex, { metalness: 0.5, roughness: 0.35 }), 2.6, 1.95, 4.96, '-z', plaque);
  scene.add(plaque); tag(plaque, 'plaque', 'Brass plaque');

  box(2.4, 0.06, 0.8, M.wood, 2.6, 0.9, 4.55);
  for (const [x, z] of [[1.5, 4.25], [3.7, 4.25], [1.5, 4.85], [3.7, 4.85]]) box(0.06, 0.9, 0.06, M.metal, x, 0.45, z);
  box(0.45, 0.3, 0.35, M.dark, 2.0, 1.08, 4.6);
  plane(0.22, 0.16, glowMat(0x2aff6a, 0.6), 1.95, 1.1, 4.42, '-z');
  box(0.12, 0.2, 0.05, std(0xf2c200), 3.45, 1.03, 4.55);
  col(1.35, 3.85, 4.1, 5);
  // drawer unit under the bench top (front faces −z)
  box(0.72, 0.2, 0.62, std(0x5b4330), 2.4, 0.76, 4.55);
  refs.drawer = new THREE.Group();
  box(0.66, 0.16, 0.56, std(0x7a5a3e), 0, 0, 0, refs.drawer);
  box(0.7, 0.18, 0.02, std(0x8c6848), 0, 0, -0.325, refs.drawer);
  box(0.16, 0.025, 0.03, M.alu, 0, 0.045, -0.345, refs.drawer);
  const lockTex = canvasTex(160, 48, (ctx, w, h) => { ctx.fillStyle = '#222'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#ddd'; ctx.font = `bold 34px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText('0 0 0 0', w / 2, 36); });
  refs.drawerLockTex = lockTex;
  plane(0.16, 0.05, screenMat(lockTex, 0.3), 0, -0.03, -0.337, '-z', refs.drawer);
  refs.drawerWheel = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 8, 20), M.red);
  refs.drawerWheel.rotation.x = Math.PI / 2; refs.drawerWheel.position.set(0.05, 0.0, 0.05); refs.drawer.add(refs.drawerWheel);
  refs.drawer.position.set(2.4, 0.76, 4.55);
  scene.add(refs.drawer); tag(refs.drawer, 'drawer', 'Bench drawer (combination lock)');
  // display resistor with colour bands + tag
  const res = new THREE.Group();
  const rb = cyl(0.03, 0.2, std(0xe8d7b0), 0, 0, 0, res); rb.rotation.z = Math.PI / 2;
  [-0.06, -0.025, 0.01].forEach((x, i) => { const bnd = cyl(0.032, 0.014, std(RES_HEX[P.bands[i]]), x, 0, 0, res); bnd.rotation.z = Math.PI / 2; });
  const gold = cyl(0.032, 0.014, std(0xc8a040, { metalness: 0.8 }), 0.065, 0, 0, res); gold.rotation.z = Math.PI / 2;
  for (const s of [-1, 1]) { const lead = cyl(0.004, 0.1, M.alu, s * 0.15, 0, 0, res); lead.rotation.z = Math.PI / 2; }
  plane(0.16, 0.08, texMat(labelTex(['DRAWER =', 'MY VALUE IN Ω'], { w: 256, h: 128, bg: '#fff6c8', fg: '#1b3f8f', font: `bold 30px ${FONT.sans}` })), 0, -0.03, -0.06, '-z', res).rotation.x = -0.4;
  res.position.set(3.05, 0.97, 4.35); res.rotation.y = 0.15;
  scene.add(res); tag(res, 'resistor', 'Resistor with a sticky note');
  recorder('rec1', 1.55, 0.95, 4.35, 0.2);
  // colour-code poster on the back wall
  const ccTex = canvasTex(512, 640, (ctx, w, h) => {
    ctx.fillStyle = '#fbfaf5'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#111'; ctx.font = `bold 34px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('RESISTOR COLOUR CODE', w / 2, 48);
    ctx.font = `20px ${FONT.sans}`; ctx.fillText('band 1 · band 2 · multiplier ×10ⁿ · tolerance', w / 2, 80);
    ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'].forEach((n, i) => {
      const y = 110 + i * 50;
      ctx.fillStyle = RES_HEX[i]; ctx.fillRect(40, y, 90, 38); ctx.strokeStyle = '#999'; ctx.strokeRect(40, y, 90, 38);
      ctx.fillStyle = '#111'; ctx.textAlign = 'left'; ctx.font = `bold 26px ${FONT.sans}`;
      ctx.fillText(`${n}`, 150, y + 28); ctx.fillText(`${i}`, 300, y + 28); ctx.fillText(`×10${'⁰¹²³⁴⁵⁶⁷⁸⁹'[i]}`, 370, y + 28);
    });
  });
  const cc = new THREE.Group();
  plane(0.64, 0.8, texMat(ccTex), 4.6, 1.85, 4.985, '-z', cc);
  scene.add(cc); tag(cc, 'colorcode', 'Colour-code poster');

  // ---------------------------------------------------------------- Control room
  box(2.4, 0.06, 0.9, M.dark, 0, 0.76, -11.9);
  for (const x of [-1.1, 1.1]) box(0.06, 0.76, 0.8, M.dark, x, 0.38, -11.9);
  col(-1.25, 1.25, -12.4, -11.4);
  refs.pcScreenTex = canvasTex(512, 320);
  const pc = new THREE.Group();
  box(1.0, 0.6, 0.05, M.dark, 0, 1.22, -12.15, pc);
  plane(0.94, 0.54, new THREE.MeshBasicMaterial({ map: refs.pcScreenTex }), 0, 1.22, -12.12, '+z', pc);
  box(0.08, 0.2, 0.08, M.dark, 0, 0.88, -12.15, pc);
  box(0.6, 0.03, 0.2, std(0x1b1f24), 0, 0.8, -11.7, pc);
  box(0.45, 0.45, 0.2, M.dark, 0.85, 1.02, -12.1, pc);
  scene.add(pc); tag(pc, 'pc', 'Control PC');
  const glow = new THREE.PointLight(0x5dff8f, 1.8, 0, 2); glow.position.set(0, 1.3, -11.7); scene.add(glow);
  // chair (with collider)
  box(0.5, 0.08, 0.5, std(0x1b1f24), 0, 0.48, -11.0);
  box(0.5, 0.6, 0.06, std(0x1b1f24), 0, 0.82, -10.73);
  cyl(0.04, 0.44, M.metal, 0, 0.22, -11.0);
  col(-0.28, 0.28, -11.28, -10.7);
  recorder('rec4', 0.55, 0.81, -11.55, -0.3);
  // FW-BOARD logic board on the desk
  const board = new THREE.Group();
  box(0.5, 0.02, 0.3, std(0x1d6b3a, { roughness: 0.5 }), 0, 0, 0, board);
  const pcbLbl = labelTex([{ t: 'FW-BOARD  A   B   C   D', font: `bold 30px ${FONT.mono}` }], { w: 512, h: 64, bg: '#1d6b3a', fg: '#e8f5e0' });
  plane(0.46, 0.06, texMat(pcbLbl), 0, 0.011, 0.1, '+y', board);
  refs.boardToggles = [];
  for (let i = 0; i < 4; i++) {
    const x = -0.02 + i * 0.06;
    box(0.035, 0.02, 0.04, std(0x222222), x, 0.02, 0.03, board);
    const lever = box(0.01, 0.04, 0.01, M.alu, x, 0.045, 0.03, board);
    lever.rotation.x = 0.5; refs.boardToggles.push(lever);
  }
  refs.boardLed = sph(0.014, glowMat(0x330000, 1), 0.2, 0.02, 0.05, board);
  refs.boardSegTex = canvasTex(128, 64, (ctx, w, h) => drawSevenSeg(ctx, w, h, '', false));
  box(0.16, 0.07, 0.02, std(0x111111), -0.14, 0.04, -0.1, board);
  plane(0.14, 0.06, screenMat(refs.boardSegTex, 1), -0.14, 0.04, -0.089, '+z', board);
  board.position.set(-0.7, 0.8, -11.72);
  scene.add(board); tag(board, 'board', 'FW-BOARD logic board');
  // circuit poster (back wall, right of the monitor)
  refs.circuitCanvas = document.createElement('canvas'); refs.circuitCanvas.width = 900; refs.circuitCanvas.height = 460;
  drawCircuit(refs.circuitCanvas.getContext('2d'), 900, 460, P.circuitDef);
  const circTex = new THREE.CanvasTexture(refs.circuitCanvas); circTex.colorSpace = THREE.SRGBColorSpace;
  const cp = new THREE.Group();
  plane(1.3, 0.665, texMat(circTex), 1.9, 1.9, -12.985, '+z', cp);
  scene.add(cp); tag(cp, 'circuit', 'Circuit poster (FW-BOARD)');
  // server rack with blinking LEDs + DIAG row
  box(0.8, 2.0, 0.9, std(0x111418), 3.9, 1.0, -12.4);
  refs.rackLeds = [];
  for (let i = 0; i < 12; i++) refs.rackLeds.push(box(0.03, 0.03, 0.01, glowMat(i % 3 ? 0x2aff6a : 0xffa020, 1), 3.65 + (i % 2) * 0.1, 0.3 + i * 0.1, -11.94));
  const rack = new THREE.Group();
  box(0.78, 0.2, 0.02, std(0x1b2127), 3.9, 1.72, -11.945, rack);
  refs.diagLeds = [];
  for (let i = 0; i < 8; i++) refs.diagLeds.push(box(0.045, 0.045, 0.015, glowMat(0x220000, 1), 3.585 + i * 0.09, 1.7, -11.93, rack));
  plane(0.78, 0.07, texMat(labelTex([{ t: 'DIAG   ◀ MSB  ·  lit = 1', font: `bold 34px ${FONT.mono}` }], { w: 512, h: 48, bg: '#1b2127', fg: '#e6edf3' })), 3.9, 1.86, -11.93, '+z', rack);
  scene.add(rack); tag(rack, 'rack', 'Server rack · DIAG LEDs');
  col(3.45, 4.35, -12.9, -11.9);
  // wall screen (left wall)
  refs.wallScreenTex = canvasTex(768, 400);
  plane(3.0, 1.56, new THREE.MeshBasicMaterial({ map: refs.wallScreenTex }), -4.98, 1.9, -9.2, '+x');
  box(0.04, 1.66, 3.1, M.dark, -5.0, 1.9, -9.2);
  // window (back wall)
  refs.windowMat = new THREE.MeshBasicMaterial({ map: skyTex(false) });
  plane(3.4, 1.3, refs.windowMat, -2.3, 2.0, -12.98, '+z');
  box(3.5, 0.08, 0.1, M.alu, -2.3, 1.33, -12.95); box(3.5, 0.08, 0.1, M.alu, -2.3, 2.67, -12.95);
  plane(1.2, 0.3, texMat(labelTex(['CONTROL ROOM'], { w: 512, h: 128, bg: '#1b2530', fg: '#ffd24a', font: `bold 60px ${FONT.sans}` })), 0, 2.9, -5.21, '-z');

  // ---------------------------------------------------------------- Tie panel (sync) + checklist + exit door (east wall)
  const sp = new THREE.Group();
  box(0.35, 1.9, 1.3, std(0x8a939c, { metalness: 0.4, roughness: 0.5 }), 4.82, 1.05, -10.6, sp);
  refs.syncTex = canvasTex(512, 512);
  plane(0.5, 0.5, screenMat(refs.syncTex, 0.9), 4.64, 1.45, -10.6, '-x', sp);
  refs.syncLamps = [-10.95, -10.6, -10.25].map((z) => sph(0.045, glowMat(0x552200, 0.2), 4.62, 1.86, z, sp));
  refs.syncHandle = box(0.06, 0.25, 0.08, M.red, 4.6, 0.85, -10.6, sp);
  plane(1.0, 0.25, texMat(labelTex(['GRID TIE · Q0 · SYNC'], { w: 512, h: 128, bg: '#ffd200', fg: '#111', font: `bold 50px ${FONT.sans}` })), 4.64, 2.15, -10.6, '-x', sp);
  scene.add(sp); tag(sp, 'sync', 'Grid tie panel (Q0)');
  col(4.6, 5.05, -11.3, -9.9);
  const ckTex = canvasTex(320, 400, (ctx, w, h) => {
    ctx.fillStyle = '#f7f3e3'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#1b3f8f'; ctx.font = `bold 22px ${FONT.sans}`; ctx.fillText('SYNC CHECKLIST', 16, 34);
    ctx.font = `17px ${FONT.sans}`;
    ['1. V island = V grid', '2. f island a hair ABOVE', '3. phase ro▒▒▒n: lamps', '    dark TOGETHER', '4. close at 12 o\'clock', '', '— M.V.'].forEach((t, i) => ctx.fillText(t, 16, 80 + i * 36));
    ctx.fillStyle = '#e8e0c8'; ctx.beginPath(); ctx.moveTo(w, h - 60); ctx.lineTo(w - 70, h); ctx.lineTo(w, h); ctx.fill();
  });
  const ck = new THREE.Group();
  plane(0.26, 0.32, texMat(ckTex), 4.985, 1.55, -11.7, '-x', ck);
  scene.add(ck); tag(ck, 'checklist', 'Sync checklist (pinned)');
  refs.exitDoor = box(0.08, 2.4, 1.62, [texMat(doorTex, { metalness: 0.4 }), texMat(doorTex, { metalness: 0.4 }), M.metal, M.metal, M.metal, M.metal], 5.07, 1.2, -8.0);
  tag(refs.exitDoor, 'exit', 'Exit door');
  refs.exitCollider = col(4.95, 5.25, -8.85, -7.15);
  refs.exitLed = box(0.04, 0.06, 0.5, glowMat(0xff2020, 1.5), 4.98, 2.52, -8.0);

  return { colliders, refs };
}
