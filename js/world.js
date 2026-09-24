import * as THREE from 'three';
import { canvasTex, labelTex, pvCellTex, hazardTex, FONT } from './textures.js';
import { drawCircuit } from './schematic.js';
import { RES_HEX, RES_MULT } from './puzzle.js';
import { whiteboardLines } from './story.js';
import { wallSurface, floorSurface, ceilingSurface, metalSurface, paintSurface, weather, blobShadowTexture, edgeShadowTexture } from './materials.js';
import { drawDroplets, drawRunnels, OUT } from './cologne.js';
import { OutsideView } from './outside.js';
import { isTouchDevice } from './touch.js';
import { buildDetails } from './details.js';
import { buildCat } from './cat.js';

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
  weather(ctx, w, h, 0.8, 3);
}

export function drawSevenSeg(ctx, w, h, text, on) {
  ctx.fillStyle = '#100404'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = on ? '#ff3b2f' : '#3a1210'; ctx.font = `bold ${h * 0.75}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(on ? text : '--', w / 2, h / 2 + 2);
  ctx.textBaseline = 'alphabetic';
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
  // procedural, lived-in surfaces (see materials.js); every texture is a tileable patch repeated to real-world scale
  const wallS = wallSurface({ base: [214, 218, 221], seed: 11 });
  const ctrlS = wallSurface({ base: [86, 100, 118], seed: 23, grime: 0.8 });
  const floorS = floorSurface({ seed: 5 });
  const ctrlFloorS = floorSurface({ base: [70, 78, 90], grout: [42, 46, 52], seed: 9 });
  const ceilS = ceilingSurface({ seed: 7 });
  const metalS = metalSurface({ seed: 3 }), aluS = metalSurface({ base: [196, 202, 208], seed: 8 });
  const paintS = paintSurface({ seed: 4 }), darkS = paintSurface({ base: [48, 53, 59], seed: 6 });
  const rep = (t, x, y, oy = 0) => { const c = t.clone(); c.repeat.set(x, y); c.offset.set(0, oy); c.needsUpdate = true; return c; };
  /** wall `len` m long and `hgt` m high; pieces hanging from the ceiling (lintels) show the top of the 3.5 m patch */
  const wallMat = (S, len, hgt = H) => {
    const ry = hgt / H, oy = 1 - ry;
    return std(0xffffff, { map: rep(S.map, len / 3.5, ry, oy), bumpMap: rep(S.bump, len / 3.5, ry, oy), bumpScale: 0.7, roughness: 0.93 });
  };
  const floorMat = (S, w, d) => std(0xffffff, { map: rep(S.map, w / 2.4, d / 2.4), bumpMap: rep(S.bump, w / 2.4, d / 2.4), bumpScale: 1.5, roughnessMap: rep(S.rough, w / 2.4, d / 2.4), roughness: 1 });
  const ceilMat = (w, d) => std(0xffffff, { map: rep(ceilS.map, w / 2.4, d / 2.4), roughness: 1 });
  const M = {
    wall: wallMat(wallS, 3.5),
    metal: std(0xffffff, { map: metalS.map, roughnessMap: metalS.rough, metalness: 0.75, roughness: 0.85 }),
    dark: std(0xffffff, { map: darkS.map, roughness: 0.62 }),
    white: std(0xffffff, { map: paintS.map, roughness: 0.55 }),
    alu: std(0xffffff, { map: aluS.map, roughnessMap: aluS.rough, metalness: 0.8, roughness: 0.7 }),
    pipeY: std(0xe0b21a, { metalness: 0.3, roughness: 0.4 }),
    pipeB: std(0x3a7fd0, { metalness: 0.3, roughness: 0.4 }),
    ctrlWall: std(0x55657a, { roughness: 0.9 }),
    wood: std(0x6b4e33, { roughness: 0.8 }),
    red: std(0xd02020, { metalness: 0.4 }),
  };

  // ---------------------------------------------------------------- shells
  plane(12, 10, floorMat(floorS, 12, 10), 0, 0, 0, '+y');
  plane(10, 8, floorMat(ctrlFloorS, 10, 8), 0, 0, -9, '+y');
  plane(12, 10, ceilMat(12, 10), 0, H, 0, '+y').rotation.x = Math.PI / 2;
  plane(10, 8, ceilMat(10, 8), 0, H, -9, '+y').rotation.x = Math.PI / 2;

  box(12.4, H, 0.2, wallMat(wallS, 12.4), 0, H / 2, 5.1); col(-6.2, 6.2, 5, 5.2);
  box(0.2, H, 10.4, wallMat(wallS, 10.4), -6.1, H / 2, 0); col(-6.2, -6, -5.2, 5.2);
  box(0.2, H, 10.4, wallMat(wallS, 10.4), 6.1, H / 2, 0); col(6, 6.2, -5.2, 5.2);
  box(5.4, H, 0.2, wallMat(wallS, 5.4), -3.5, H / 2, -5.1); col(-6.2, -0.8, -5.2, -5);
  box(5.4, H, 0.2, wallMat(wallS, 5.4), 3.5, H / 2, -5.1); col(0.8, 6.2, -5.2, -5);
  box(1.6, H - 2.4, 0.2, wallMat(wallS, 1.6, H - 2.4), 0, 2.4 + (H - 2.4) / 2, -5.1);
  // control-room face of that wall in the control-room colour
  plane(4.2, H, wallMat(ctrlS, 4.2), -2.9, H / 2, -5.205, '-z'); plane(4.2, H, wallMat(ctrlS, 4.2), 2.9, H / 2, -5.205, '-z');
  plane(1.6, H - 2.4, wallMat(ctrlS, 1.6, H - 2.4), 0, 2.4 + (H - 2.4) / 2, -5.205, '-z');
  // control room: west + back walls, east wall split around the exit door (z -8.8…-7.2)
  box(0.2, H, 8, wallMat(ctrlS, 8), -5.1, H / 2, -9.2); col(-5.2, -5, -13.2, -5.2);
  // back wall, built around the window opening x[-4.0,-0.6] y[1.35,2.65]; texture offsets keep the plaster continuous
  const piece = (x0, x1, y0, y1) => {
    const m = std(0xffffff, { roughness: 0.93, bumpScale: 0.7 });
    for (const [k, t] of [['map', ctrlS.map], ['bumpMap', ctrlS.bump]]) { const c = t.clone(); c.repeat.set((x1 - x0) / 3.5, (y1 - y0) / H); c.offset.set((x0 + 5.2) / 3.5, y0 / H); c.needsUpdate = true; m[k] = c; }
    box(x1 - x0, y1 - y0, 0.2, m, (x0 + x1) / 2, (y0 + y1) / 2, -13.1);
  };
  piece(-5.2, -4.0, 0, H); piece(-0.6, 5.2, 0, H); piece(-4.0, -0.6, 0, 1.35); piece(-4.0, -0.6, 2.65, H);
  col(-5.2, 5.2, -13.2, -13);
  box(0.2, H, 4.4, wallMat(ctrlS, 4.4), 5.1, H / 2, -11.0); col(5, 5.2, -13.2, -8.8);
  box(0.2, H, 2.0, wallMat(ctrlS, 2.0), 5.1, H / 2, -6.2); col(5, 5.2, -7.2, -5.2);
  box(0.2, H - 2.4, 1.6, wallMat(ctrlS, 1.6, H - 2.4), 5.1, 2.4 + (H - 2.4) / 2, -8.0);
  // exit corridor
  plane(4.0, 1.6, floorMat(ctrlFloorS, 4.0, 1.6), 7.0, 0, -8, '+y');   // starts at x = 5.0: no gap under the exit door
  plane(4.0, 1.6, ceilMat(4.0, 1.6), 7.0, H, -8, '+y').rotation.x = Math.PI / 2;
  box(3.8, H, 0.2, wallMat(ctrlS, 3.8), 7.1, H / 2, -7.1); col(5.2, 9.2, -7.2, -7.0);
  box(3.8, H, 0.2, wallMat(ctrlS, 3.8), 7.1, H / 2, -8.9); col(5.2, 9.2, -9.0, -8.8);
  // Cologne across the Rhine (outside.js): storm blackout, the city re-energised, and the evening after the storm.
  // The corridor ends in an open doorway onto the terrace, looking at the Dom.
  refs.outside = new OutsideView({ scale: isTouchDevice() ? 0.5 : 1 });
  refs.doorFrame = { origin: new THREE.Vector3(9.0, 0, -8), right: new THREE.Vector3(0, 0, 1), normal: new THREE.Vector3(-1, 0, 0), xCenter: 1024 + OUT.K * Math.PI / 2 };
  refs.doorView = plane(1.6, 2.4, refs.outside.material(refs.doorFrame), 9.0, 1.2, -8, '-x');   // faces north-north-east: bridge end, KölnTriangle
  box(0.2, H - 2.4, 1.6, wallMat(ctrlS, 1.6, H - 2.4), 9.1, 2.4 + (H - 2.4) / 2, -8); col(9, 9.2, -8.8, -7.2);
  for (const z of [-8.77, -7.23]) box(0.12, 2.4, 0.06, M.alu, 8.96, 1.2, z);            // door frame
  box(0.12, 0.06, 1.6, M.alu, 8.96, 2.37, -8);
  box(0.14, 0.02, 1.6, M.metal, 8.95, 0.01, -8);                                        // threshold
  refs.skyLight = new THREE.SpotLight(0xffc48c, 0, 9, 1.0, 0.8, 1);                 // warm evening sky light spilling in
  refs.skyLight.position.set(8.9, 2.3, -8); refs.skyLight.target.position.set(6.2, 0, -8); scene.add(refs.skyLight, refs.skyLight.target);
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
  for (const [x, z] of [[-2.5, -9], [2.5, -9]]) {
    const mat = glowMat(0xbcd4ff, 0.05);
    box(1.2, 0.06, 0.3, mat, x, H - 0.03, z);
    const l = new THREE.PointLight(0xfff1dc, 0, 0, 2); l.position.set(x, H - 0.3, z); scene.add(l);
    refs.ctrlLights.push({ light: l, mat });
  }
  box(1.2, 0.06, 0.3, glowMat(0xbcd4ff, 0.02), 7.0, H - 0.03, -8);                     // the corridor tube: dead (storm damage)
  // emergency luminaires (battery backed): cool white, pointing down, so they make pools on the floor
  refs.emergency = [];
  for (const [x, y, z] of [[0, 3.2, 4.8], [-5.8, 3.2, -4.6], [5.8, 3.2, -4.6], [4.8, 3.2, -12.8]]) {
    box(0.4, 0.1, 0.12, glowMat(0xe8f0ff, 1.2), x, y, z);
    const l = new THREE.SpotLight(0xcfe0ff, 2.6, 0, 1.05, 0.75, 2); l.position.set(x, y - 0.08, z + (z > 0 ? -0.2 : 0.2));
    l.target.position.set(x, 0, z + (z > 0 ? -1.2 : 1.2)); scene.add(l, l.target);
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
    scene.add(g); tag(g, 'pv', 'III-V PV test modules');
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
  refs.sunLight = new THREE.SpotLight(0xfff0cc, 0, 0, 1.15, 0.6, 2); refs.sunLight.position.set(-4.95, 2.85, 0);
  refs.sunLight.target.position.set(-4.95, 0, 0); scene.add(refs.sunLight, refs.sunLight.target);
  // the light shaft: a soft volume that fades towards its edges (view angle) and towards the floor — no hard box edges
  const coneMat = new THREE.ShaderMaterial({
    uniforms: { opacity: { value: 0 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    vertexShader: 'varying vec3 vN, vV; varying float vY; void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vY = uv.y; gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform float opacity; varying vec3 vN, vV; varying float vY; void main() { float edge = pow(abs(dot(normalize(vN), normalize(vV))), 2.0); gl_FragColor = vec4(vec3(1.0, 0.94, 0.78) * opacity * edge * smoothstep(0.0, 0.8, vY), 1.0); }',
  });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.25, 1.9, 32, 1, true), coneMat);
  shaft.scale.set(1, 1, 1.6); shaft.position.set(-4.95, 1.95, 0); scene.add(noRay(shaft));
  refs.sunCone = { get opacity() { return coneMat.uniforms.opacity.value; }, set opacity(v) { coneMat.uniforms.opacity.value = v; } };
  refs.keypadTex = canvasTex(256, 360, (ctx, w, h) => drawKeypad(ctx, w, h, false));
  const kp = new THREE.Group();
  box(0.06, 0.5, 0.36, M.dark, -5.97, 1.45, 2.85, kp);
  plane(0.34, 0.48, screenMat(refs.keypadTex, 0.35), -5.935, 1.45, 2.85, '+x', kp);
  scene.add(kp); tag(kp, 'sunsim', 'Sun-simulator keypad');
  plane(0.8, 0.4, texMat(labelTex(['PV TEST RIG', { t: 'Sun simulator · 3 suns', font: `30px ${FONT.sans}` }], { bg: '#1b3a6b', fg: '#fff' })), -5.99, 2.0, -2.75, '+x');

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
    weather(ctx, w, h, 1.2, 11);
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
  const IY = refs.INV_Y = 1.25, IT = IY + 0.36;                                          // centre and top of the inverters
  for (const [id, name, sub, zc] of invDefs) {
    const g = new THREE.Group();
    box(0.22, 0.72, 0.56, M.white, 5.88, IY, zc, g);
    const t = labelTex([{ t: name, font: `bold 64px ${FONT.sans}` }, { t: sub, font: `bold 36px ${FONT.sans}`, color: '#1b5fa8' }, { t: '~ / =', font: `46px ${FONT.mono}`, color: '#666' }], { w: 256, h: 320, bg: '#f5f6f7' });
    plane(0.5, 0.64, texMat(t), 5.765, IY, zc, '-x', g);
    refs.invLeds[id] = box(0.03, 0.05, 0.05, glowMat(0x111111, 1), 5.75, IY + 0.28, zc + 0.18, g);
    scene.add(g); tag(g, id, `${name} · ${sub.toLowerCase()} inverter`);
    box(0.08, 3.1 - IT, 0.08, M.dark, 5.93, IT + (3.1 - IT) / 2, zc - 0.2);
  }

  // ---------------------------------------------------------------- Faraday (or whoever) the cat, asleep on INV-2
  refs.cat = buildCat({ M });
  refs.cat.group.position.set(5.873, IT, 0.22);
  scene.add(refs.cat.group); tag(refs.cat.group, 'cat', 'A sleeping cat');

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
  glass.position.set(5.44, 1.2, -2.9); glass.rotation.y = -Math.PI / 2; bus.add(glass);
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
  box(0.08, 0.9, 0.08, M.dark, 5.93, 2.65, -3.75);
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
    weather(ctx, w, h, 1.2, 12);
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
  const h2Lbl = new THREE.Mesh(new THREE.CylinderGeometry(0.243, 0.243, 0.3, 24, 1, true, -0.65, 1.3),
    texMat(labelTex([{ t: 'H₂', font: `bold 120px ${FONT.sans}`, color: '#c21' }, { t: '30 bar · 90 L', font: `36px ${FONT.sans}` }], { w: 256, h: 256, bg: '#ffffff' })));
  h2Lbl.position.set(-2.9, 1.0, -4.35); tank.add(h2Lbl);
  refs.valve = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.022, 8, 20), M.red);
  refs.valve.position.set(-2.9, 0.45, -3.98); refs.valve.visible = false; tank.add(refs.valve);
  cyl(0.02, 0.14, M.metal, -2.9, 0.45, -4.05, tank).rotation.x = Math.PI / 2;
  refs.valveTag = new THREE.Group();
  plane(0.1, 0.075, texMat(labelTex(['NO WHEEL', '— M.V.'], { w: 128, h: 96, bg: '#fff6c8', fg: '#b3261e', font: `bold 22px ${FONT.sans}` })), -2.9, 0.37, -3.985, '+z', refs.valveTag);
  cyl(0.002, 0.045, M.dark, -2.9, 0.428, -3.985, refs.valveTag);   // string tied to the bare spindle
  tank.add(refs.valveTag);
  cyl(0.05, 1.3, std(0xcce6ff, { transparent: true, opacity: 0.3 }), -2.52, 0.75, -4.15, tank);
  box(0.12, 0.1, 0.12, M.metal, -2.52, 0.05, -4.15, tank);                                  // foot
  for (const y of [0.3, 1.2]) box(0.16, 0.03, 0.04, M.metal, -2.6, y, -4.18, tank);          // brackets to the tank
  refs.h2Bar = cyl(0.038, 1.26, glowMat(0x6fd0ff, 0.8), -2.52, 0.12, -4.15, tank);
  refs.h2Bar.geometry.translate(0, 0.63, 0); refs.h2Bar.scale.y = 0.001;
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
    weather(ctx, w, h, 1.4, 13);
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
    weather(ctx, w, h, 1.5, 14);
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
  for (const z of [-4.7, -5.45]) { const hz = hazardTex(); hz.repeat.set(3, 1); plane(1.6, 0.25, texMat(hz), 0, 0.012, z, '+y'); }

  // ---------------------------------------------------------------- Whiteboard, plaque, workbench, drawer, resistor, colour-code poster
  const wbTex = canvasTex(1024, 512, (ctx, w, h) => {
    ctx.fillStyle = '#f7f7f2'; ctx.fillRect(0, 0, w, h);
    // smudges of erased notes
    for (let i = 0; i < 14; i++) { ctx.fillStyle = 'rgba(120,130,160,.07)'; ctx.beginPath(); ctx.ellipse(80 + Math.random() * 860, 60 + Math.random() * 400, 120, 22, Math.random() - 0.5, 0, Math.PI * 2); ctx.fill(); }
    const hand = '"Segoe Print", "Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive';
    whiteboardLines(P).forEach(([t, c, f], i) => { ctx.fillStyle = c; ctx.font = `${f || '28px'} ${hand}`; ctx.fillText(t, 40, 64 + i * 58); });
    weather(ctx, w, h, 0.5, 15);
  });
  const wb = new THREE.Group();
  box(2.7, 1.4, 0.05, M.alu, -1.8, 1.75, 4.97, wb);
  plane(2.6, 1.3, texMat(wbTex, { roughness: 0.3 }), -1.8, 1.75, 4.94, '-z', wb);
  box(2.0, 0.04, 0.08, M.alu, -1.8, 1.03, 4.93, wb);
  scene.add(wb); tag(wb, 'whiteboard', 'Whiteboard');

  const plaque = new THREE.Group();
  const plaqueTex = labelTex([{ t: 'SOLAR TEST LABORATORY', font: 'bold 38px Georgia, serif' }, { t: `EST. ${P.year}`, font: 'bold 64px Georgia, serif' }, { t: '"Power to the people."', font: 'italic 30px Georgia, serif' }], { w: 512, h: 300, bg: '#b8923a', fg: '#3b2a08', border: '#8a6a22' });
  box(0.74, 0.44, 0.03, std(0x8a6a22, { metalness: 0.25, roughness: 0.5 }), 2.6, 1.95, 4.98, plaque);
  plane(0.7, 0.41, texMat(plaqueTex, { metalness: 0.1, roughness: 0.45 }), 2.6, 1.95, 4.96, '-z', plaque);
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
  // Player faces +z when looking at the bench, so +x is on their LEFT: band 1 sits at +x and reads left → right,
  // the gold tolerance band is set apart on the right. A little emissive keeps the hues readable in emergency light.
  const bandMat = (hex) => std(hex, { emissive: new THREE.Color(hex), emissiveIntensity: 0.25, roughness: 0.5 });
  [0.075, 0.04, 0.005].forEach((x, i) => { const bnd = cyl(0.032, 0.018, bandMat(RES_HEX[P.bands[i]]), x, 0, 0, res); bnd.rotation.z = Math.PI / 2; });
  const gold = cyl(0.032, 0.014, std(0xc8a040, { metalness: 0.2, roughness: 0.4, emissive: new THREE.Color(0xc8a040), emissiveIntensity: 0.15 }), -0.06, 0, 0, res); gold.rotation.z = Math.PI / 2;
  for (const s of [-1, 1]) { const lead = cyl(0.004, 0.1, M.alu, s * 0.15, 0, 0, res); lead.rotation.z = Math.PI / 2; }
  plane(0.16, 0.08, texMat(labelTex(['DRAWER =', 'MY VALUE IN Ω'], { w: 256, h: 128, bg: '#fff6c8', fg: '#1b3f8f', font: `bold 30px ${FONT.sans}` })), 0, 0.012, -0.07, '-z', res).rotation.x = 0.6;   // tilted up towards the player's eyes
  res.position.set(3.05, 0.97, 4.35); res.rotation.y = 0.15;
  scene.add(res); tag(res, 'resistor', 'Resistor with a sticky note');
  recorder('rec1', 1.55, 0.95, 4.35, 0.2);
  // colour-code poster on the back wall
  // The multiplier band is the classic stumbling block (players read yellow-violet-red as "472"), so the poster
  // spells it out: bands 1+2 are digits, band 3 is a MULTIPLIER, with a worked example that is not the answer.
  const ccTex = canvasTex(512, 720, (ctx, w, h) => {
    ctx.fillStyle = '#fbfaf5'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#111'; ctx.font = `bold 34px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('RESISTOR COLOUR CODE', w / 2, 44);
    ctx.font = `bold 20px ${FONT.sans}`; ctx.fillText('bands 1 + 2 = DIGITS  ·  band 3 = MULTIPLIER', w / 2, 76);
    ctx.font = `italic 18px ${FONT.sans}`; ctx.fillStyle = '#b3261e'; ctx.fillText('band 3 is NOT a digit — it adds zeros!', w / 2, 100);
    ctx.fillStyle = '#555'; ctx.font = `bold 17px ${FONT.sans}`; ctx.textAlign = 'left';
    ctx.fillText('colour', 150, 132); ctx.fillText('digit', 262, 132); ctx.fillText('multiplier', 340, 132);
    ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'].forEach((n, i) => {
      const y = 142 + i * 46;
      ctx.fillStyle = RES_HEX[i]; ctx.fillRect(40, y, 90, 36); ctx.strokeStyle = '#999'; ctx.strokeRect(40, y, 90, 36);
      ctx.fillStyle = '#111'; ctx.font = `bold 24px ${FONT.sans}`;
      ctx.fillText(n, 150, y + 26); ctx.fillText(String(i), 272, y + 26); ctx.fillText(RES_MULT[i], 340, y + 26);
    });
    const gy = 142 + 10 * 46;
    ctx.fillStyle = '#c8a040'; ctx.fillRect(40, gy, 90, 36); ctx.strokeRect(40, gy, 90, 36);
    ctx.fillStyle = '#111'; ctx.fillText('gold', 150, gy + 26); ctx.fillText('—', 272, gy + 26); ctx.fillText('±5 % tol.', 340, gy + 26);
    ctx.font = `18px ${FONT.sans}`; ctx.fillStyle = '#1b3f8f'; ctx.textAlign = 'center';
    ctx.fillText('e.g. brown · black · orange · gold', w / 2, 680); ctx.fillText('= 1, 0, ×1 000  →  10 × 1 000 = 10 000 Ω', w / 2, 704);
    weather(ctx, w, h, 0.7, 16);
  });
  const cc = new THREE.Group();
  plane(0.64, 0.9, texMat(ccTex), 4.6, 1.85, 4.985, '-z', cc);
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
  plane(0.46, 0.06, texMat(pcbLbl), 0, 0.014, 0.1, '+y', board);
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
  plane(0.14, 0.06, screenMat(refs.boardSegTex, 1), -0.14, 0.04, -0.086, '+z', board);
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
  plane(3.0, 1.56, new THREE.MeshBasicMaterial({ map: refs.wallScreenTex }), -4.965, 1.9, -9.2, '+x');   // 1.5 cm in front of the frame (no z-fighting)
  box(0.04, 1.66, 3.1, M.dark, -5.0, 1.9, -9.2);
  // window (back wall): glass near the outer face of the wall, plastered reveals, a window board, aluminium frame
  plane(3.4, 1.3, refs.outside.material({ origin: new THREE.Vector3(-2.3, 0, -13.16), right: new THREE.Vector3(1, 0, 0), normal: new THREE.Vector3(0, 0, 1) }), -2.3, 2.0, -13.16, '+z');
  const dropTex = canvasTex(512, 512, drawDroplets); dropTex.wrapS = dropTex.wrapT = THREE.RepeatWrapping; dropTex.repeat.set(3, 1.2);
  refs.rainTex = canvasTex(512, 512, drawRunnels); refs.rainTex.wrapS = refs.rainTex.wrapT = THREE.RepeatWrapping; refs.rainTex.repeat.set(3, 1.2);
  refs.dropMat = new THREE.MeshBasicMaterial({ map: dropTex, transparent: true, depthWrite: false, fog: false });
  refs.rainMat = new THREE.MeshBasicMaterial({ map: refs.rainTex, transparent: true, depthWrite: false, fog: false });
  noRay(plane(3.4, 1.3, refs.dropMat, -2.3, 2.0, -13.156, '+z'));
  noRay(plane(3.4, 1.3, refs.rainMat, -2.3, 2.0, -13.154, '+z'));
  const reveal = std(0xd9dde0, { roughness: 0.9 });
  plane(0.2, 1.3, reveal, -3.999, 2.0, -13.1, '+x'); plane(0.2, 1.3, reveal, -0.601, 2.0, -13.1, '-x');
  plane(3.4, 0.2, reveal, -2.3, 2.649, -13.1, '+y').rotation.x = Math.PI / 2;
  box(3.56, 0.035, 0.3, std(0x8d8a84, { roughness: 0.45 }), -2.3, 1.335, -13.02);        // stone window board
  for (const x of [-3.97, -0.63, -2.3]) box(0.06, 1.3, 0.07, M.alu, x, 2.0, -13.16);   // frame + mullion
  for (const y of [1.38, 2.62]) box(3.4, 0.06, 0.07, M.alu, -2.3, y, -13.16);
  // One light from outside through the glass: lightning at night, the low evening sun at the end (sunset ≈ 21° left of
  // the window's axis, 10° high). It casts shadows, so the frame and mullion throw a window-shaped pool across the room.
  const sunDir = new THREE.Vector3(-Math.sin(0.37) * Math.cos(0.18), Math.sin(0.18), -Math.cos(0.37) * Math.cos(0.18));
  const win = new THREE.Vector3(-2.3, 2.0, -13.15);
  refs.windowLight = new THREE.SpotLight(0xffb070, 0, 0, 0.24, 0.35, 0);
  refs.windowLight.position.copy(win).addScaledVector(sunDir, 10); refs.windowLight.target.position.copy(win).addScaledVector(sunDir, -10);
  refs.windowLight.castShadow = true;
  Object.assign(refs.windowLight.shadow, { autoUpdate: false, needsUpdate: true, bias: -0.0006, normalBias: 0.02 });
  refs.windowLight.shadow.mapSize.set(1024, 1024); refs.windowLight.shadow.camera.near = 6; refs.windowLight.shadow.camera.far = 24;
  scene.add(refs.windowLight, refs.windowLight.target);
  plane(1.2, 0.26, texMat(labelTex(['CONTROL ROOM ▸'], { w: 592, h: 128, bg: '#1b2530', fg: '#ffd24a', font: `bold 60px ${FONT.sans}` })), 0, 2.93, -4.99, '+z');

  // ---------------------------------------------------------------- Tie panel (sync) + checklist + exit door (east wall)
  const sp = new THREE.Group();
  box(0.35, 1.9, 1.3, std(0x8a939c, { metalness: 0.4, roughness: 0.5 }), 4.82, 1.05, -10.6, sp);
  refs.syncTex = canvasTex(512, 512);
  plane(0.5, 0.5, screenMat(refs.syncTex, 0.9), 4.64, 1.45, -10.6, '-x', sp);
  refs.syncLamps = [-10.95, -10.6, -10.25].map((z) => sph(0.045, glowMat(0x552200, 0.2), 4.62, 1.86, z, sp));
  refs.syncHandle = box(0.06, 0.25, 0.08, M.red, 4.6, 0.85, -10.6, sp);
  plane(1.0, 0.25, texMat(labelTex(['GRID TIE · Q0 · SYNC'], { w: 512, h: 128, bg: '#ffd200', fg: '#111', font: `bold 50px ${FONT.sans}` })), 4.985, 2.25, -10.6, '-x', sp);
  scene.add(sp); tag(sp, 'sync', 'Grid tie panel (Q0)');
  col(4.6, 5.05, -11.3, -9.9);
  const ckTex = canvasTex(320, 400, (ctx, w, h) => {
    ctx.fillStyle = '#f7f3e3'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#1b3f8f'; ctx.font = `bold 22px ${FONT.sans}`; ctx.fillText('SYNC CHECKLIST', 16, 34);
    ctx.font = `17px ${FONT.sans}`;
    ['0. permit card in', '1. V island = V grid ±2%', '2. f island a hair ABOVE', '3. phase ro▒▒▒n: lamps', '    dark TOGETHER', '4. close on scope at 12', '— M.V.'].forEach((t, i) => ctx.fillText(t, 16, 76 + i * 44));
    ctx.fillStyle = '#e8e0c8'; ctx.beginPath(); ctx.moveTo(w, h - 60); ctx.lineTo(w - 70, h); ctx.lineTo(w, h); ctx.fill();
    weather(ctx, w, h, 0.9, 17);
  });
  const ck = new THREE.Group();
  plane(0.26, 0.32, texMat(ckTex), 4.985, 1.55, -11.7, '-x', ck);
  scene.add(ck); tag(ck, 'checklist', 'Sync checklist (pinned)');
  const exitTex = canvasTex(256, 384, (ctx, w, h) => {
    ctx.fillStyle = '#7d8790'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#5d666e'; ctx.lineWidth = 4; ctx.strokeRect(16, 16, w - 32, h - 32);
    ctx.fillStyle = '#1b2530'; ctx.fillRect(70, 50, 116, 90);
    ctx.fillStyle = '#0c7a35'; ctx.fillRect(16, 250, w - 32, 38);
    ctx.fillStyle = '#fff'; ctx.font = `bold 22px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('EXIT ▸ OUTSIDE', w / 2, 276);
    weather(ctx, w, h, 1.3, 18);
  });
  refs.exitDoor = box(0.08, 2.4, 1.62, [texMat(exitTex, { metalness: 0.4 }), texMat(exitTex, { metalness: 0.4 }), M.metal, M.metal, M.metal, M.metal], 5.07, 1.2, -8.0);
  tag(refs.exitDoor, 'exit', 'Exit door');
  refs.exitCollider = col(4.95, 5.25, -8.85, -7.15);
  refs.exitLed = box(0.04, 0.06, 0.5, glowMat(0xff2020, 1.5), 4.98, 2.52, -8.0);

  buildDetails({ scene, P, refs, M, col, box, cyl, sph, plane, texMat, glowMat, tag, noRay });
  scene.fog = new THREE.FogExp2(0x0b0e13, 0.028);
  return { colliders, refs };
}
