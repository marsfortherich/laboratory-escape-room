// "Lived-in" set dressing: contact shadows and floor/wall occlusion strips, stopped mains clocks, safety kit,
// boxes, bin, ventilation duct, sagging cables, floor tape, control-room clutter and dust motes.
import * as THREE from 'three';
import { canvasTex, labelTex, hazardTex, redraw, FONT } from './textures.js';
import { weather, blobShadowTexture, edgeShadowTexture } from './materials.js';

export function buildDetails({ scene, refs, M, col, box, cyl, sph, plane, texMat, tag, noRay }) {
  const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.75, ...o });

  // ---------------------------------------------------------------- contact shadows + occlusion where floor meets wall
  const blobMat = new THREE.MeshBasicMaterial({ map: blobShadowTexture(), transparent: true, depthWrite: false, opacity: 0.85, polygonOffset: true, polygonOffsetFactor: -2, fog: false });
  for (const [x, z, sx, sz] of [
    [5.6, 3.05, 1.3, 3.3], [5.75, -2.9, 0.9, 2.4], [-4.7, -4.2, 2.1, 1.6], [-2.9, -4.35, 0.9, 0.9], [3.1, -4.3, 1.8, 1.4],
    [-4.95, 0, 2.1, 4.6], [2.6, 4.55, 2.9, 1.3], [0, -11.9, 2.9, 1.4], [3.9, -12.4, 1.3, 1.4], [4.8, -10.6, 0.8, 1.8],
    [0, -11.0, 0.8, 0.8], [-5.35, 4.35, 1.3, 1.3], [-4.45, -12.45, 0.9, 1.0], [1.0, 4.65, 0.5, 0.5], [4.35, -5.75, 0.6, 0.6],
  ]) noRay(plane(sx, sz, blobMat, x, 0.003, z, '+y'));
  const edgeMat = new THREE.MeshBasicMaterial({ map: edgeShadowTexture(), transparent: true, depthWrite: false, opacity: 0.75, polygonOffset: true, polygonOffsetFactor: -2, fog: false });
  // strip along a wall line (cx, cz), `len` long; yaw points its local +z into the room
  const edge = (cx, cz, len, yaw, w = 0.45) => {
    const g = new THREE.Group(); g.position.set(cx, 0.004, cz); g.rotation.y = yaw;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(len, w), edgeMat); m.rotation.x = -Math.PI / 2; m.position.z = w / 2; noRay(m); g.add(m); scene.add(g);
  };
  const PI = Math.PI;
  edge(0, 5, 12, PI); edge(-6, 0, 10, PI / 2); edge(6, 0, 10, -PI / 2); edge(-3.4, -5, 5.2, 0); edge(3.4, -5, 5.2, 0);          // booth
  edge(0, -13, 10, 0); edge(-5, -9.1, 7.8, PI / 2); edge(5, -10.9, 4.2, -PI / 2); edge(5, -6.2, 2, -PI / 2);                // control room
  edge(-2.9, -5.2, 4.2, PI); edge(2.9, -5.2, 4.2, PI); edge(7, -7.2, 3.8, PI); edge(7, -8.8, 3.8, 0);

  // ---------------------------------------------------------------- mains-synchronous wall clocks, stopped when the grid fell
  const drawClock = (ctx, w, h, secs) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#f1efe6'; ctx.beginPath(); ctx.arc(128, 128, 124, 0, PI * 2); ctx.fill();
    ctx.strokeStyle = '#222';
    for (let i = 0; i < 60; i++) {
      const a = (i / 60) * PI * 2, r0 = i % 5 ? 108 : 94;
      ctx.lineWidth = i % 5 ? 2 : 6; ctx.beginPath(); ctx.moveTo(128 + Math.sin(a) * r0, 128 - Math.cos(a) * r0); ctx.lineTo(128 + Math.sin(a) * 116, 128 - Math.cos(a) * 116); ctx.stroke();
    }
    ctx.fillStyle = '#333'; ctx.font = `bold 15px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('SYNCHRON · 50 Hz', 128, 172);
    const hand = (a, len, wd, color) => { ctx.strokeStyle = color; ctx.lineWidth = wd; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(128, 128); ctx.lineTo(128 + Math.sin(a) * len, 128 - Math.cos(a) * len); ctx.stroke(); };
    hand(((secs / 3600) % 12 / 12) * PI * 2, 62, 9, '#1b1b1b');
    hand(((secs / 60) % 60 / 60) * PI * 2, 96, 6, '#1b1b1b');
    hand(((secs % 60) / 60) * PI * 2, 104, 2, '#c21');
    ctx.fillStyle = '#1b1b1b'; ctx.beginPath(); ctx.arc(128, 128, 8, 0, PI * 2); ctx.fill();
    weather(ctx, w, h, 0.9, 21);
  };
  const STOPPED = 18 * 3600 + 36 * 60 + 2;                              // 18:36:02 — the moment Q0 opened
  const clockTex = canvasTex(256, 256, (ctx, w, h) => drawClock(ctx, w, h, STOPPED));
  refs.setClocks = (secs) => redraw(clockTex, (ctx, w, h) => drawClock(ctx, w, h, secs));
  refs.CLOCK_STOPPED = STOPPED;
  const clockMat = texMat(clockTex, { roughness: 0.35 });
  const clock = (x, y, z, rotY) => {
    const g = new THREE.Group();
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.16, 40), clockMat); face.position.z = 0.021; g.add(face);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.175, 0.175, 0.04, 40), M.dark); rim.rotation.x = PI / 2; g.add(rim);
    g.position.set(x, y, z); g.rotation.y = rotY; scene.add(g); tag(g, 'clock', 'Wall clock');
  };
  clock(0.55, 2.6, 4.975, PI);                // booth, back wall
  clock(-4.975, 2.93, -9.2, PI / 2);          // control room, above the wall screen

  // ---------------------------------------------------------------- safety kit + signage
  const ext = new THREE.Group();
  cyl(0.085, 0.5, std(0xc0141a, { roughness: 0.4, metalness: 0.1 }), 0, 0.42, 0, ext);
  cyl(0.03, 0.08, M.dark, 0, 0.71, 0, ext); box(0.12, 0.02, 0.03, M.dark, 0.03, 0.76, 0, ext);
  const hose = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.01, 6, 16, PI * 1.2), M.dark); hose.position.set(0.07, 0.55, 0.05); hose.rotation.z = -PI / 2; ext.add(hose);
  box(0.2, 0.06, 0.04, M.metal, 0, 0.55, -0.09, ext);
  ext.position.set(-2.05, 0, -4.86); scene.add(ext); col(-2.15, -1.95, -5.0, -4.76);
  plane(0.18, 0.24, texMat(labelTex([{ t: '🧯', font: `90px ${FONT.sans}` }, { t: 'FIRE', font: `bold 34px ${FONT.sans}` }], { w: 192, h: 256, bg: '#c0141a', fg: '#fff' })), -2.05, 1.05, -4.99, '+z');
  plane(0.3, 0.3, texMat(labelTex([{ t: 'H₂', font: `bold 70px ${FONT.sans}` }, { t: 'NO FLAMES', font: `bold 30px ${FONT.sans}` }], { w: 256, h: 256, bg: '#ffd200', fg: '#111', border: '#111' })), -3.9, 2.2, -4.99, '+z');
  plane(0.26, 0.26, texMat(labelTex([{ t: '⛑', font: `80px ${FONT.sans}` }, { t: 'PPE', font: `bold 36px ${FONT.sans}` }], { w: 256, h: 256, bg: '#1b5fa8', fg: '#fff' })), 5.99, 1.6, -4.4, '-x');

  // ---------------------------------------------------------------- boxes, bin, stool
  const cardboard = canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#a57b4f'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 400; i++) { ctx.fillStyle = `rgba(${60 + Math.random() * 40},${40 + Math.random() * 30},20,${Math.random() * 0.08})`; ctx.fillRect(Math.random() * w, Math.random() * h, 3, 1); }
    ctx.fillStyle = 'rgba(210,190,140,.75)'; ctx.fillRect(w * 0.44, 0, w * 0.12, h);
    ctx.fillStyle = '#2a2a2a'; ctx.font = `bold 22px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('PV MODULES', w / 2 - 55, 80); ctx.fillText('↑↑ THIS SIDE UP', w / 2, 200);
    weather(ctx, w, h, 1.5, 22);
  });
  const cb = texMat(cardboard, { roughness: 0.95 });
  for (const [bw, bh, bd, x, y, z, ry] of [[0.62, 0.42, 0.5, -5.4, 0.21, 4.4, 0.12], [0.55, 0.36, 0.45, -5.35, 0.6, 4.35, -0.18], [0.4, 0.3, 0.35, -4.75, 0.15, 4.62, 0.4]]) {
    const b = box(bw, bh, bd, cb, x, y, z); b.rotation.y = ry; tag(b, 'boxes', 'Cardboard boxes');
  }
  col(-5.75, -4.5, 4.05, 4.85);
  const bin = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.14, 0.44, 24, 1, true), std(0x3a3f45, { side: THREE.DoubleSide, roughness: 0.6 }));
  bin.position.set(1.0, 0.22, 4.65); scene.add(bin); tag(bin, 'bin', 'Waste-paper bin');
  cyl(0.14, 0.01, std(0x2a2e33), 1.0, 0.005, 4.65);
  for (let i = 0; i < 4; i++) sph(0.045 + Math.random() * 0.02, std(0xe8e6de, { roughness: 1 }), 1.0 + (Math.random() - 0.5) * 0.12, 0.38 + i * 0.03, 4.65 + (Math.random() - 0.5) * 0.12);
  col(0.83, 1.17, 4.48, 4.82);

  // ---------------------------------------------------------------- spiral ventilation duct with diffusers and hangers
  const duct = new THREE.Group();
  const dm = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 10.8, 24), M.alu); dm.rotation.z = PI / 2; duct.add(dm);
  for (let x = -5.2; x <= 5.2; x += 0.6) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.183, 0.008, 6, 24), M.metal); ring.rotation.y = PI / 2; ring.position.x = x; duct.add(ring); }
  for (const x of [-2.2, 2.2]) {
    box(0.34, 0.06, 0.34, M.white, x, -0.21, 0, duct);
    plane(0.3, 0.3, texMat(canvasTex(128, 128, (ctx, w, h) => { ctx.fillStyle = '#ddd'; ctx.fillRect(0, 0, w, h); ctx.fillStyle = '#555'; for (let i = 8; i < w; i += 12) ctx.fillRect(i, 8, 5, h - 16); weather(ctx, w, h, 1, 23); })), x, -0.245, 0, '+y', duct).rotation.x = PI / 2;
  }
  for (const x of [-4.5, -1, 2.5, 5]) box(0.02, 0.14, 0.02, M.metal, x, 0.25, 0, duct);
  duct.position.set(-0.2, 3.18, 3.6); scene.add(duct);

  // ---------------------------------------------------------------- cables
  // Each run starts inside the device it leaves and ends inside a gland, socket or device, so no open tube end shows.
  // The path is resampled and lifted where needed so a cable lies ON the floor instead of dipping through it.
  const cableMat = std(0x16181b, { roughness: 0.5 });
  // A gland sits exactly where the (resampled) cable crosses the face it enters: face = [axis, value].
  const cable = (pts, r = 0.012, mat = cableMat, face = null) => {
    const rough = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), false, 'centripetal');
    const lifted = rough.getSpacedPoints(90).map((v) => { v.y = Math.max(v.y, r + 0.0015); return v; });
    const curve = new THREE.CatmullRomCurve3(lifted, false, 'centripetal');
    const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 160, r, 8, false), mat);
    m.userData.cable = true; scene.add(m);
    if (face) {
      const [ax, v] = face, P = curve.getSpacedPoints(400);
      for (let i = 1; i < P.length; i++) if ((P[i - 1][ax] - v) * (P[i][ax] - v) <= 0) {
        const g = cyl(r + 0.009, 0.03, M.dark, P[i].x, P[i].y, P[i].z);
        g.position[ax] = v; g.rotation.set(ax === 'z' ? Math.PI / 2 : 0, 0, ax === 'x' ? Math.PI / 2 : 0);
        break;
      }
    }
    return m;
  };
  // inverters → battery cabinet (side face z = 1.75) and → main bus panel (side face z = −1.95), along the wall skirting
  const IB = refs.INV_Y - 0.3;                                                // just inside the inverters' bottom
  cable([[5.9, IB, 0.25], [5.91, IB - 0.25, 0.3], [5.91, 0.4, 0.45], [5.9, 0.08, 0.7], [5.9, 0, 1.0], [5.9, 0, 1.5], [5.88, 0.12, 1.66], [5.87, 0.25, 1.78]], 0.012, cableMat, ['z', 1.75]);   // INV-2 → battery
  cable([[5.94, IB, 1.05], [5.955, IB - 0.25, 1.1], [5.955, 0.4, 1.2], [5.955, 0.06, 1.35], [5.955, 0, 1.55], [5.945, 0.2, 1.68], [5.93, 0.36, 1.78]], 0.01, cableMat, ['z', 1.75]);   // INV-1 → battery (DC)
  cable([[5.9, IB, -0.7], [5.92, IB - 0.25, -0.8], [5.935, 0.4, -1.05], [5.94, 0.06, -1.35], [5.94, 0, -1.6], [5.93, 0.15, -1.85], [5.9, 0.36, -1.98]], 0.012, cableMat, ['z', -1.95]);   // INV-3 → bus
  // electrolyzer → junction box beside the booth door, behind the H2 tank and under the wall-mounted extinguisher
  const feed = cable([[-3.95, 0.5, -4.45], [-3.84, 0.4, -4.5], [-3.72, 0.1, -4.62], [-3.5, 0, -4.8], [-3.0, 0, -4.86], [-2.0, 0, -4.87], [-1.3, 0, -4.88], [-1.12, 0.12, -4.93], [-1.1, 0.4, -4.935]], 0.014, std(0x1f3f7a, { roughness: 0.5 }), ['x', -3.9]);
  box(0.16, 0.22, 0.08, M.dark, -1.1, 0.46, -4.955);
  void feed;
  // bench: multimeter lead along the top, over the right-hand edge, across the floor to a skirting socket
  cable([[3.49, 0.97, 4.56], [3.56, 0.941, 4.59], [3.72, 0.94, 4.61], [3.79, 0.942, 4.615], [3.814, 0.937, 4.62], [3.824, 0.9, 4.623], [3.834, 0.82, 4.627], [3.845, 0.5, 4.64], [3.86, 0.1, 4.66], [3.95, 0, 4.76], [4.2, 0, 4.9], [4.3, 0.08, 4.965], [4.3, 0.24, 4.975]], 0.007, std(0xd9d6cc));
  box(0.09, 0.09, 0.03, std(0xeeeeea, { roughness: 0.5 }), 4.3, 0.26, 4.985);
  // control desk: PC and monitor leads go over the back edge of the desk and down into the UPS behind it
  cable([[0.95, 0.92, -12.19], [0.95, 0.88, -12.27], [0.93, 0.812, -12.335], [0.926, 0.801, -12.362], [0.922, 0.77, -12.387], [0.9, 0.62, -12.42], [0.8, 0.36, -12.47], [0.68, 0.29, -12.47], [0.64, 0.28, -12.4]], 0.01);
  cable([[0.1, 1.0, -12.17], [0.11, 0.92, -12.2], [0.13, 0.82, -12.24], [0.17, 0.8, -12.28], [0.23, 0.803, -12.32], [0.25, 0.805, -12.337], [0.258, 0.797, -12.357], [0.265, 0.775, -12.376], [0.33, 0.62, -12.42], [0.45, 0.4, -12.46], [0.53, 0.33, -12.47], [0.56, 0.32, -12.4]], 0.006);

  // ---------------------------------------------------------------- floor safety tape around the PV rig and the bus panel
  const tape = (x0, z0, x1, z1) => {
    const len = Math.hypot(x1 - x0, z1 - z0), t = hazardTex(); t.repeat.set(len / 0.3, 1);
    const g = new THREE.Group(); g.position.set((x0 + x1) / 2, 0.006, (z0 + z1) / 2); g.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(len, 0.07), texMat(t, { roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -3 })); m.rotation.x = -PI / 2; noRay(m); g.add(m); scene.add(g);
  };
  tape(-3.85, -2.3, -3.85, 2.3); tape(-6, 2.3, -3.85, 2.3); tape(-6, -2.3, -3.85, -2.3);
  tape(5.15, -4.0, 5.15, -1.8);

  // ---------------------------------------------------------------- control-room clutter
  const fc = new THREE.Group();                                           // filing cabinet
  box(0.5, 1.3, 0.6, M.dark, 0, 0.65, 0, fc);
  for (let i = 0; i < 4; i++) { box(0.46, 0.005, 0.02, M.metal, 0, 0.3 + i * 0.3, 0.301, fc); box(0.12, 0.025, 0.03, M.metal, 0, 0.18 + i * 0.3, 0.31, fc); }
  fc.position.set(-4.45, 0, -12.45); scene.add(fc); tag(fc, 'cabinet', 'Filing cabinet'); col(-4.72, -4.18, -12.78, -12.12);
  const mug = new THREE.Group();                                          // coffee mug (cold)
  cyl(0.04, 0.09, std(0xe8e4d8, { roughness: 0.3 }), 0, 0.045, 0, mug);
  cyl(0.036, 0.005, std(0x2b1a10, { roughness: 0.1 }), 0, 0.075, 0, mug);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.007, 6, 12), std(0xe8e4d8)); handle.position.set(0.045, 0.045, 0); mug.add(handle);
  mug.position.set(-0.28, 0.79, -12.05); scene.add(mug);
  const paper = std(0xf2f0ea, { roughness: 0.9 });
  for (const [x, z, r] of [[0.25, -11.5, 0.2], [0.3, -11.55, -0.15], [-1.0, -12.15, 0.6]]) { const pp = plane(0.21, 0.297, paper, x, 0.792, z, '+y'); pp.rotation.z = r; tag(pp, 'papers', 'Papers'); }
  const ups = new THREE.Group();                                          // UPS under the desk — why the PC still runs
  box(0.2, 0.4, 0.45, M.dark, 0, 0.2, 0, ups);
  box(0.05, 0.02, 0.01, new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0x20ff60, emissiveIntensity: 2 }), 0, 0.33, 0.226, ups);
  ups.position.set(0.6, 0, -12.2); scene.add(ups);
  const plant = new THREE.Group();                                        // forgotten office plant
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.32, 20), std(0x7a4a32, { roughness: 0.9 })); pot.position.y = 0.16; plant.add(pot);
  cyl(0.15, 0.01, std(0x2b2016), 0, 0.31, 0, plant);
  for (let i = 0; i < 9; i++) {
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.45, 5), std(i % 3 ? 0x6b6a2c : 0x8a7a3a, { roughness: 0.9 }));
    const a = (i / 9) * PI * 2; leaf.position.set(Math.cos(a) * 0.05, 0.5, Math.sin(a) * 0.05); leaf.rotation.set(Math.sin(a) * 0.5, 0, Math.cos(a) * 0.5 + (i % 2) * 0.3); plant.add(leaf);
  }
  plant.position.set(4.35, 0, -5.75); scene.add(plant); col(4.17, 4.53, -5.93, -5.57);
  const cork = canvasTex(384, 256, (ctx, w, h) => {                       // cork board with pinned notes
    ctx.fillStyle = '#b48a5a'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 2500; i++) { ctx.fillStyle = `rgba(90,60,30,${Math.random() * 0.25})`; ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
    const notes = [['#fff59d', 'Fri rota:', 'M.V.'], ['#b3e5fc', 'Wi-Fi:', 'SolarLab_Guest'], ['#ffccbc', 'PV test', 'plan Q4'], ['#c8e6c9', 'Lunch?', '12:30']];
    notes.forEach(([c, a, b], i) => {
      const x = 20 + (i % 2) * 180 + Math.random() * 20, y = 18 + Math.floor(i / 2) * 120 + Math.random() * 10;
      ctx.save(); ctx.translate(x + 70, y + 50); ctx.rotate((Math.random() - 0.5) * 0.2); ctx.fillStyle = c; ctx.fillRect(-70, -50, 140, 100);
      ctx.fillStyle = '#333'; ctx.font = `20px "Segoe Print", "Comic Sans MS", cursive`; ctx.textAlign = 'center'; ctx.fillText(a, 0, -8); ctx.fillText(b, 0, 22);
      ctx.fillStyle = '#c21'; ctx.beginPath(); ctx.arc(0, -40, 5, 0, PI * 2); ctx.fill(); ctx.restore();
    });
    weather(ctx, w, h, 1, 24);
  });
  box(0.03, 0.62, 0.92, std(0x6b4e33), -4.985, 1.6, -6.3);
  tag(plane(0.88, 0.58, texMat(cork, { roughness: 0.95 }), -4.968, 1.6, -6.3, '+x'), 'cork', 'Cork board');

  // ---------------------------------------------------------------- dust motes (brightness follows the room lighting)
  const mote = canvasTex(32, 32, (ctx, w, h) => {                    // soft round sprite, not a square
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  });
  const dust = (n, bx, color, size) => {
    const g = new THREE.BufferGeometry(), p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { p[i * 3] = bx[0] + Math.random() * (bx[1] - bx[0]); p[i * 3 + 1] = bx[2] + Math.random() * (bx[3] - bx[2]); p[i * 3 + 2] = bx[4] + Math.random() * (bx[5] - bx[4]); }
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    const m = new THREE.PointsMaterial({ color, size, map: mote, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    const pts = new THREE.Points(g, m); pts.userData.box = bx; pts.userData.seed = Math.random() * 100; noRay(pts); scene.add(pts);
    return pts;
  };
  refs.dustSun = dust(260, [-5.6, -4.3, 1.1, 2.8, -1.8, 1.8], 0xfff1d6, 0.014);
  refs.dustBeam = dust(300, [-1.5, 3.2, 0.2, 2.4, -12.6, -5.6], 0xffc890, 0.016);   // in the evening sun through the window
}
