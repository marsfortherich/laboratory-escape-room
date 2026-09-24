// Faraday (or whoever), a ginger tabby asleep on top of INV-2: curled nose-to-tail, one front paw and the end of
// the tail hanging over the edge. Body, legs and tail are swept tubes with a varying radius; the tabby pattern is
// painted along the spine; a few alpha-tested fur shells (depth-writing, so no layering steps) soften the silhouette;
// sheen gives the velvety rim.
import * as THREE from 'three';

/** Tube along a smooth curve with radius(t); flatten < 1 squashes it vertically, floor clips it flat underneath. */
function sweep(pts, radius, { segs = 56, ring = 16, flatten = 1, floor = -Infinity } = {}) {
  const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), false, 'centripetal');
  const pos = [], uv = [], idx = [];
  const up = new THREE.Vector3(0, 1, 0), T = new THREE.Vector3(), S = new THREE.Vector3(), N = new THREE.Vector3(), P = new THREE.Vector3();
  const prevS = new THREE.Vector3(1, 0, 0);
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    curve.getPointAt(t, P); curve.getTangentAt(t, T);
    S.crossVectors(T, up);
    if (S.lengthSq() < 1e-4) S.copy(prevS); else S.normalize();      // vertical stretches keep the previous side vector
    prevS.copy(S);
    N.crossVectors(S, T).normalize();
    const r = radius(t);
    for (let j = 0; j <= ring; j++) {
      const phi = -Math.PI / 2 + (j / ring) * Math.PI * 2;           // seam underneath
      const c = Math.cos(phi) * r, s = Math.sin(phi) * r * flatten;
      pos.push(P.x + c * S.x + s * N.x, Math.max(floor, P.y + c * S.y + s * N.y), P.z + c * S.z + s * N.z);
      uv.push(t, j / ring);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < ring; j++) {
    const a = i * (ring + 1) + j, b = a + ring + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}
/** piecewise-smooth radius profile from [t, r] pairs */
const profile = (keys) => (t) => {
  for (let i = 1; i < keys.length; i++) if (t <= keys[i][0]) {
    const [t0, r0] = keys[i - 1], [t1, r1] = keys[i], k = (t - t0) / (t1 - t0);
    return r0 + (r1 - r0) * k * k * (3 - 2 * k);
  }
  return keys[keys.length - 1][1];
};

function canvas(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

const GINGER = [208, 136, 72], STRIPE = [150, 78, 30], CREAM = [238, 212, 170];
const mixc = (a, b, k) => a.map((v, i) => v + (b[i] - v) * k);

/** tabby coat along a swept body: u = along the spine, v = around (0 underneath, 0.5 on top, ~0.62 along the back) */
function coatTexture(stripes, dorsal = 0.62) {
  const r = rng(77);
  const ph = Array.from({ length: 8 }, () => r() * 6.28);
  return canvas(512, 256, (ctx, w, h) => {
    const img = ctx.createImageData(w, h), d = img.data;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const u = x / w, v = 1 - y / h;
      const back = Math.exp(-(((v - dorsal) / 0.2) ** 2));
      const belly = Math.exp(-(((v - 0.22) / 0.13) ** 2)) + Math.exp(-(((v - 1.02) / 0.1) ** 2));
      const wob = Math.sin(v * 9 + ph[0]) * 0.012 + Math.sin(v * 23 + u * 40 + ph[1]) * 0.004;
      const st = Math.sin((u + wob) * stripes * Math.PI * 2 + Math.sin(u * 7 + ph[2]) * 0.8);
      const stripe = Math.max(0, st - 0.15) / 0.85 * (0.35 + 0.65 * back) * (1 - Math.min(1, belly * 1.4));
      const grain = (r() - 0.5) * 16;
      let c = mixc(GINGER, STRIPE, Math.min(1, stripe * 0.9 + back * 0.25));
      c = mixc(c, CREAM, Math.min(1, belly * 0.9));
      const i = (y * w + x) * 4;
      d[i] = c[0] + grain; d[i + 1] = c[1] + grain * 0.8; d[i + 2] = c[2] + grain * 0.6; d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  });
}
/** head (SphereGeometry UVs: the face looks along +z = u 0.25, top = v 1): forehead "M", cheek stripes, cream muzzle */
function headTexture() {
  return canvas(256, 128, (ctx, w, h) => {
    const img = ctx.createImageData(w, h), d = img.data, r = rng(5);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const u = x / w, v = 1 - y / h, du = Math.abs(u - 0.25);
      let stripe = 0;
      if (v > 0.6) for (const c of [0, 0.045, 0.09, 0.14]) stripe = Math.max(stripe, Math.exp(-(((du - c) / 0.012) ** 2)) * Math.min(1, (v - 0.6) / 0.08));
      if (v > 0.66 && du > 0.18) stripe = Math.max(stripe, 0.5 + 0.5 * Math.sin(u * 60));        // back of the head
      if (du > 0.1 && du < 0.2) stripe = Math.max(stripe, Math.exp(-(((v - 0.5 + (du - 0.1) * 0.6) / 0.018) ** 2)) * 0.9);   // cheeks
      const cream = Math.exp(-((du / 0.085) ** 2)) * Math.exp(-(((v - 0.36) / 0.13) ** 2)) + Math.exp(-(((v - 0.1) / 0.15) ** 2));
      let c = mixc(GINGER, STRIPE, stripe * 0.85);
      c = mixc(c, CREAM, Math.min(1, cream));
      const grain = (r() - 0.5) * 14, i = (y * w + x) * 4;
      d[i] = c[0] + grain; d[i + 1] = c[1] + grain * 0.8; d[i + 2] = c[2] + grain * 0.6; d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  });
}
function strandTexture() {                                         // per-hair heights for the fur shells
  const t = canvas(128, 128, (ctx, w, h) => {
    const img = ctx.createImageData(w, h), d = img.data, r = rng(9);
    for (let i = 0; i < w * h; i++) { const v = r() ** 0.8 * 255; d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = v; d[i * 4 + 3] = 255; }
    ctx.putImageData(img, 0, 0);
  });
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

export function buildCat({ M }) {
  const cat = new THREE.Group();
  const strands = strandTexture();
  const furMat = (map) => new THREE.MeshPhysicalMaterial({
    map, roughness: 0.92, sheen: 1, sheenRoughness: 0.45, sheenColor: new THREE.Color(0.55, 0.36, 0.2), bumpMap: strands, bumpScale: 0.4,
  });
  // soft silhouette: a few inflated copies with sparse, alpha-tested "hairs"
  const withFur = (geo, mat, repeat, parent, len = 0.0035, n = 3) => {
    const mesh = new THREE.Mesh(geo, mat); parent.add(mesh);
    const nrm = geo.attributes.normal, p0 = geo.attributes.position;
    const a = strands.clone(); a.repeat.set(...repeat); a.needsUpdate = true;
    for (let k = 1; k <= n; k++) {
      const g = geo.clone(), p = g.attributes.position;
      for (let i = 0; i < p.count; i++) p.setXYZ(i, p0.getX(i) + nrm.getX(i) * len * k / n, p0.getY(i) + nrm.getY(i) * len * k / n, p0.getZ(i) + nrm.getZ(i) * len * k / n);
      g.computeBoundingSphere();
      const m = new THREE.MeshStandardMaterial({ map: mat.map, alphaMap: a, alphaTest: 0.35 + k * 0.14, roughness: 1, color: new THREE.Color().setScalar(0.8 + k * 0.06) });
      const sh = new THREE.Mesh(g, m); sh.raycast = () => {}; parent.add(sh);
    }
    return mesh;
  };
  const coat = furMat(coatTexture(9)), limbCoat = furMat(coatTexture(5, 0.5)), headCoat = furMat(headTexture());

  // body: spine curled almost all the way round (rump → back along the wall → chest → neck ending inside the head)
  const HEAD = [-0.075, 0.068, -0.028];
  const spine = [];
  for (let a = -0.62; a <= 0.93; a += 0.08) spine.push([0.05 * Math.cos(a * Math.PI), 0.05, 0.1 * Math.sin(a * Math.PI)]);
  spine.push([-0.07, 0.058, 0.0], HEAD);
  const body = new THREE.Group(); cat.add(body);                  // breathing scales this group from the floor up
  withFur(sweep(spine, profile([[0, 0.004], [0.025, 0.05], [0.07, 0.072], [0.15, 0.078], [0.4, 0.07], [0.62, 0.068], [0.78, 0.06], [0.9, 0.042], [1, 0.035]]), { flatten: 0.74, floor: 0.002, segs: 72 }),
    coat, [2, 1.8], body);

  // legs: one tucked under the chin, one hanging over the front edge
  const leg = (pts, r0) => withFur(sweep(pts, profile([[0, r0], [0.62, 0.015], [0.84, 0.0195], [1, 0.005]]), { segs: 24, ring: 10, floor: pts[pts.length - 1][1] > 0 ? 0.002 : -1 }), limbCoat, [0.6, 0.5], body, 0.003, 2);
  leg([[-0.04, 0.03, 0.055], [-0.08, 0.02, 0.02], [-0.1, 0.016, -0.02], [-0.108, 0.015, -0.04]], 0.021);
  leg([[-0.045, 0.032, 0.11], [-0.085, 0.026, 0.14], [-0.114, 0.022, 0.155], [-0.136, -0.012, 0.163], [-0.142, -0.05, 0.166]], 0.021);   // dangling, clear of the front edge

  // tail: along the front edge, then over it (the hanging end sways; see main.js)
  const tailR = profile([[0, 0.018], [0.5, 0.0155], [1, 0.0145]]);
  withFur(sweep([[-0.03, 0.035, -0.115], [-0.07, 0.026, -0.15], [-0.105, 0.02, -0.17], [-0.13, 0.008, -0.178], [-0.14, 0.0, -0.18]], tailR, { segs: 24, ring: 10, floor: 0.002 }), limbCoat, [0.7, 0.35], cat, 0.003, 2);
  const tail = new THREE.Group(); tail.position.set(-0.14, 0.0, -0.18); cat.add(tail);   // hangs in front of the label, not in it
  const tailJoint = new THREE.Mesh(new THREE.SphereGeometry(0.0145, 12, 10), limbCoat); tail.add(tailJoint);
  withFur(sweep([[0, 0, 0], [-0.006, -0.04, 0.002], [-0.008, -0.08, 0.01], [-0.001, -0.1, 0.028], [0.006, -0.102, 0.042]], profile([[0, 0.0145], [0.75, 0.012], [1, 0.003]]), { segs: 24, ring: 10 }),
    limbCoat, [0.5, 0.35], tail, 0.003, 2);

  // head: resting on the tucked paw, face turned towards the room and slightly down
  const head = new THREE.Group(); head.position.set(...HEAD); cat.add(head);
  head.lookAt(new THREE.Vector3(HEAD[0] - 1, HEAD[1] - 0.35, HEAD[2] - 0.3).add(cat.position)); head.rotateZ(0.3);
  const skullGeo = new THREE.SphereGeometry(0.05, 32, 20); skullGeo.scale(1.05, 0.86, 0.95);
  withFur(skullGeo, headCoat, [1.2, 0.6], head, 0.004, 3);
  const cream = new THREE.MeshPhysicalMaterial({ color: 0xeed8b4, roughness: 0.9, sheen: 1, sheenRoughness: 0.5, sheenColor: new THREE.Color(0.4, 0.34, 0.28) });
  for (const s of [-1, 1]) {                                      // whisker pads
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.0145, 14, 10), cream); pad.position.set(s * 0.0115, -0.017, 0.038); pad.scale.set(1, 0.85, 0.9); head.add(pad);
  }
  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.014, 12, 8), cream); chin.position.set(0, -0.032, 0.03); head.add(chin);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.0075, 12, 8), new THREE.MeshStandardMaterial({ color: 0xc27a70, roughness: 0.35 }));
  nose.position.set(0, -0.004, 0.047); nose.scale.set(1.2, 0.75, 0.7); head.add(nose);
  const lidMat = new THREE.MeshStandardMaterial({ color: 0x2a170c, roughness: 0.6 });
  const lids = [-1, 1].map((s) => {                               // closed eyes: dark, gently curved slits
    const lid = new THREE.Mesh(new THREE.TorusGeometry(0.0105, 0.0016, 6, 16, Math.PI * 0.8), lidMat);
    lid.position.set(s * 0.021, 0.014, 0.041); lid.rotation.set(-0.35, s * 0.45, Math.PI + Math.PI * 0.1); head.add(lid);
    return lid;
  });
  const eyeOpen = new THREE.Group(); head.add(eyeOpen); eyeOpen.visible = false;   // "he opens one eye"
  const iris = new THREE.Mesh(new THREE.SphereGeometry(0.0095, 16, 12), new THREE.MeshPhysicalMaterial({ color: 0xd9a431, roughness: 0.15, clearcoat: 1, emissive: 0x3a2400 }));
  iris.position.set(0.021, 0.013, 0.041); iris.scale.set(1, 0.8, 0.6); eyeOpen.add(iris);   // sits proud of the fur shells
  const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.0095, 12, 8), new THREE.MeshBasicMaterial({ color: 0x050505 }));
  pupil.position.set(0.021, 0.013, 0.0437); pupil.scale.set(0.22, 0.75, 0.5); eyeOpen.add(pupil);
  const earMat = new THREE.MeshPhysicalMaterial({ map: headCoat.map, roughness: 0.9, sheen: 1, sheenRoughness: 0.4, sheenColor: new THREE.Color(0.5, 0.33, 0.2) });
  const inner = new THREE.MeshStandardMaterial({ color: 0xc99088, roughness: 0.8 });
  const ears = [-1, 1].map((s) => {
    const ear = new THREE.Group(); ear.position.set(s * 0.029, 0.034, -0.004); ear.rotation.set(-0.25, s * 0.2, -s * 0.42); head.add(ear);
    const outer = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.036, 3, 1), earMat); outer.position.y = 0.016; outer.scale.set(1, 1, 0.45); outer.rotation.y = Math.PI / 6; ear.add(outer);
    const inside = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.027, 3, 1), inner); inside.position.set(0, 0.013, 0.005); inside.scale.set(1, 1, 0.3); inside.rotation.y = Math.PI / 6; ear.add(inside);
    return ear;
  });
  const wh = [];                                                  // whiskers
  for (const s of [-1, 1]) for (let k = 0; k < 4; k++) {
    const y = -0.012 - k * 0.004, a = (k - 1.5) * 0.12;
    wh.push(s * 0.018, y, 0.04, s * (0.018 + Math.cos(a) * 0.055), y - 0.006 - Math.sin(a) * 0.02, 0.04 - 0.012);
  }
  const whGeo = new THREE.BufferGeometry(); whGeo.setAttribute('position', new THREE.Float32BufferAttribute(wh, 3));
  const whiskers = new THREE.LineSegments(whGeo, new THREE.LineBasicMaterial({ color: 0x8f8a80, transparent: true, opacity: 0.4 }));   // unlit: keep them dim
  whiskers.raycast = () => {}; head.add(whiskers);

  // collar with a brass tag
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.037, 0.0055, 8, 24), M.red);
  collar.position.set(-0.064, 0.058, 0.004); collar.lookAt(new THREE.Vector3(-0.075, 0.068, -0.028).add(cat.position)); cat.add(collar);
  const tagDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.002, 16), new THREE.MeshStandardMaterial({ color: 0xd8a838, metalness: 0.85, roughness: 0.3 }));
  tagDisc.position.set(-0.098, 0.03, 0.01); tagDisc.rotation.z = Math.PI / 2; cat.add(tagDisc);

  cat.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  const headRest = head.quaternion.clone();
  /** lift: 0 = asleep, 1 = head raised a little (when the eye opens) */
  const lift = (k) => { head.quaternion.copy(headRest); head.rotateX(-0.28 * k); head.rotateY(0.12 * k); };
  return { group: cat, body, tail, ears, head, eyeOpen, lids, lift };
}
