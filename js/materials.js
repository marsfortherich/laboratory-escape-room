// Procedural "lived-in" surfaces: tileable value-noise based colour + bump/roughness maps for walls, floors,
// ceilings and metals, plus weathering for printed labels and soft contact-shadow decals. No image assets.
import * as THREE from 'three';

function rng(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967296; }; }

/** Tileable fractal value noise in [0,1], `size`×`size`, lattice period `p` doubling per octave. */
function fbm(size, p, octaves, seed) {
  const out = new Float32Array(size * size);
  let amp = 1, norm = 0;
  const r = rng(seed);
  for (let o = 0; o < octaves; o++, p *= 2, amp *= 0.5) {
    const lat = new Float32Array(p * p); for (let i = 0; i < lat.length; i++) lat[i] = r();
    const k = p / size;
    for (let y = 0; y < size; y++) {
      const fy = y * k, y0 = Math.floor(fy) % p, y1 = (y0 + 1) % p, ty = fy - Math.floor(fy), sy = ty * ty * (3 - 2 * ty);
      for (let x = 0; x < size; x++) {
        const fx = x * k, x0 = Math.floor(fx) % p, x1 = (x0 + 1) % p, tx = fx - Math.floor(fx), sx = tx * tx * (3 - 2 * tx);
        const a = lat[y0 * p + x0] + (lat[y0 * p + x1] - lat[y0 * p + x0]) * sx;
        const b = lat[y1 * p + x0] + (lat[y1 * p + x1] - lat[y1 * p + x0]) * sx;
        out[y * size + x] += (a + (b - a) * sy) * amp;
      }
    }
    norm += amp;
  }
  for (let i = 0; i < out.length; i++) out[i] /= norm;
  return out;
}

function toTexture(canvas, { srgb = true, repeat = true } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
function canvas(size, h = size) { const c = document.createElement('canvas'); c.width = size; c.height = h; return c; }

/** Draw something at x and at its horizontal wrap-around positions (keeps textures tileable). */
function wrapDraw(w, x, fn) { fn(x); if (x < w * 0.25) fn(x + w); if (x > w * 0.75) fn(x - w); }

/**
 * Painted plaster / concrete wall: colour variation, fine speckle, water stains, drip streaks from the ceiling,
 * dirt and shoe scuffs along the skirting. The canvas represents one 3.5 m × 3.5 m wall patch (tiles horizontally).
 */
export function wallSurface({ base = [214, 218, 221], seed = 1, size = 512, grime = 1 } = {}) {
  const n = fbm(size, 4, 5, seed), fine = fbm(size, 64, 2, seed + 7);
  const c = canvas(size), ctx = c.getContext('2d'), img = ctx.createImageData(size, size);
  const bc = canvas(size), bctx = bc.getContext('2d'), bimg = bctx.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const v = 0.9 + 0.12 * n[i] + 0.025 * (fine[i] - 0.5);
    img.data[i * 4] = base[0] * v; img.data[i * 4 + 1] = base[1] * v; img.data[i * 4 + 2] = base[2] * v; img.data[i * 4 + 3] = 255;
    const b = 128 + 40 * (fine[i] - 0.5) + 50 * (n[i] - 0.5);
    bimg.data[i * 4] = bimg.data[i * 4 + 1] = bimg.data[i * 4 + 2] = b; bimg.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0); bctx.putImageData(bimg, 0, 0);
  const r = rng(seed * 31);
  // water / grime stains
  for (let s = 0; s < 7 * grime; s++) {
    const x = r() * size, y = r() * size * 0.8, rad = 20 + r() * 70;
    wrapDraw(size, x, (xx) => {
      const g = ctx.createRadialGradient(xx, y, rad * 0.2, xx, y, rad);
      g.addColorStop(0, `rgba(120,98,60,${0.05 + r() * 0.06})`); g.addColorStop(0.85, 'rgba(110,90,55,0.03)'); g.addColorStop(1, 'rgba(110,90,55,0)');
      ctx.fillStyle = g; ctx.fillRect(xx - rad, y - rad, rad * 2, rad * 2);
    });
  }
  // drip streaks from the ceiling line
  for (let s = 0; s < 16 * grime; s++) {
    const x = r() * size, len = size * (0.15 + r() * 0.5), wd = 1 + r() * 3;
    const g = ctx.createLinearGradient(0, 0, 0, len);
    g.addColorStop(0, `rgba(90,80,65,${0.06 + r() * 0.06})`); g.addColorStop(1, 'rgba(90,80,65,0)');
    wrapDraw(size, x, (xx) => { ctx.fillStyle = g; ctx.fillRect(xx, 0, wd, len); });
  }
  // skirting dirt + scuffs
  const sk = ctx.createLinearGradient(0, size * 0.8, 0, size);
  sk.addColorStop(0, 'rgba(60,55,48,0)'); sk.addColorStop(1, `rgba(60,55,48,${0.22 * grime})`);
  ctx.fillStyle = sk; ctx.fillRect(0, size * 0.8, size, size * 0.2);
  for (let s = 0; s < 40 * grime; s++) {
    const x = r() * size, y = size * (0.9 + r() * 0.09), len = 6 + r() * 30;
    ctx.strokeStyle = `rgba(30,28,26,${0.08 + r() * 0.15})`; ctx.lineWidth = 1 + r() * 2;
    wrapDraw(size, x, (xx) => { ctx.beginPath(); ctx.moveTo(xx, y); ctx.quadraticCurveTo(xx + len / 2, y - 3 + r() * 6, xx + len, y + (r() - 0.5) * 4); ctx.stroke(); });
  }
  const map = toTexture(c), bump = toTexture(bc, { srgb: false });
  return { map, bump };
}

/** Floor tiles (vinyl / epoxy): per-tile tint, dirty grout, rubber scuffs, worn patches. Canvas = 2.4 m square, 4×4 tiles. */
export function floorSurface({ base = [118, 124, 130], grout = [70, 72, 74], seed = 2, size = 512, tiles = 4 } = {}) {
  const n = fbm(size, 4, 5, seed), fine = fbm(size, 128, 1, seed + 3);
  const c = canvas(size), ctx = c.getContext('2d'), img = ctx.createImageData(size, size);
  const bc = canvas(size), bctx = bc.getContext('2d'), bimg = bctx.createImageData(size, size);
  const rc = canvas(size), rctx = rc.getContext('2d'), rimg = rctx.createImageData(size, size);
  const r = rng(seed * 17);
  const tint = Array.from({ length: tiles * tiles }, () => 0.93 + r() * 0.12);
  const ts = size / tiles, gw = 2.5;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = y * size + x, tx = x % ts, ty = y % ts;
    const inGrout = tx < gw || ty < gw;
    const t = tint[Math.floor(y / ts) * tiles + Math.floor(x / ts)];
    const v = (0.88 + 0.16 * n[i] + 0.08 * (fine[i] - 0.5)) * (inGrout ? 1 : t);
    const col = inGrout ? grout : base;
    img.data[i * 4] = col[0] * v; img.data[i * 4 + 1] = col[1] * v; img.data[i * 4 + 2] = col[2] * v; img.data[i * 4 + 3] = 255;
    const b = inGrout ? 40 : 170 + 30 * (fine[i] - 0.5);
    bimg.data[i * 4] = bimg.data[i * 4 + 1] = bimg.data[i * 4 + 2] = b; bimg.data[i * 4 + 3] = 255;
    const ro = inGrout ? 250 : 120 + 110 * n[i];                                       // worn = shinier patches
    rimg.data[i * 4] = rimg.data[i * 4 + 1] = rimg.data[i * 4 + 2] = ro; rimg.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0); bctx.putImageData(bimg, 0, 0); rctx.putImageData(rimg, 0, 0);
  // rubber scuffs from shoes and trolleys
  for (let s = 0; s < 55; s++) {
    const x = r() * size, y = r() * size, len = 8 + r() * 40, a = r() * Math.PI;
    ctx.strokeStyle = `rgba(20,20,20,${0.06 + r() * 0.16})`; ctx.lineWidth = 0.8 + r() * 1.8;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(a) * len / 2 + (r() - 0.5) * 10, y + Math.sin(a) * len / 2, x + Math.cos(a) * len, y + Math.sin(a) * len); ctx.stroke();
  }
  for (let s = 0; s < 6; s++) {                                                      // dried spills
    const x = r() * size, y = r() * size, rad = 10 + r() * 34;
    const g = ctx.createRadialGradient(x, y, 2, x, y, rad);
    g.addColorStop(0, 'rgba(70,60,45,.10)'); g.addColorStop(1, 'rgba(70,60,45,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(x, y, rad, rad * (0.5 + r() * 0.5), r() * 3, 0, Math.PI * 2); ctx.fill();
  }
  return { map: toTexture(c), bump: toTexture(bc, { srgb: false }), rough: toTexture(rc, { srgb: false }) };
}

/** Mineral-fibre drop-ceiling tiles (600 mm) with T-bar grid, speckles and a few water-stained tiles. */
export function ceilingSurface({ seed = 3, size = 512, tiles = 4 } = {}) {
  const fine = fbm(size, 128, 2, seed), n = fbm(size, 8, 3, seed + 1);
  const c = canvas(size), ctx = c.getContext('2d'), img = ctx.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const v = 0.82 + 0.1 * n[i] + 0.16 * (fine[i] - 0.5);
    img.data[i * 4] = 212 * v; img.data[i * 4 + 1] = 210 * v; img.data[i * 4 + 2] = 204 * v; img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const r = rng(seed * 13), ts = size / tiles;
  for (let s = 0; s < 3; s++) {                                                      // water-stained tiles
    const tx = Math.floor(r() * tiles) * ts, ty = Math.floor(r() * tiles) * ts;
    const g = ctx.createRadialGradient(tx + ts / 2, ty + ts / 2, 4, tx + ts / 2, ty + ts / 2, ts * 0.6);
    g.addColorStop(0, 'rgba(150,120,70,.28)'); g.addColorStop(0.7, 'rgba(150,120,70,.12)'); g.addColorStop(1, 'rgba(150,120,70,0)');
    ctx.fillStyle = g; ctx.fillRect(tx, ty, ts, ts);
  }
  ctx.fillStyle = '#e8e8e4';
  for (let k = 0; k <= tiles; k++) { ctx.fillRect(k * ts - 3, 0, 6, size); ctx.fillRect(0, k * ts - 3, size, 6); }
  ctx.fillStyle = 'rgba(0,0,0,.25)';
  for (let k = 0; k <= tiles; k++) { ctx.fillRect(k * ts + 3, 0, 1.5, size); ctx.fillRect(0, k * ts + 3, size, 1.5); }
  return { map: toTexture(c) };
}

/** Brushed / scratched metal: colour and roughness maps. */
export function metalSurface({ base = [160, 168, 176], seed = 4, size = 256, brushed = true } = {}) {
  const n = fbm(size, 4, 4, seed);
  const c = canvas(size), ctx = c.getContext('2d'), img = ctx.createImageData(size, size);
  const rc = canvas(size), rctx = rc.getContext('2d'), rimg = rctx.createImageData(size, size);
  const r = rng(seed * 7);
  const streak = new Float32Array(size); for (let y = 0; y < size; y++) streak[y] = r();
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = y * size + x, s = brushed ? streak[y] * 0.08 : 0;
    const v = 0.9 + 0.1 * n[i] + s;
    img.data[i * 4] = base[0] * v; img.data[i * 4 + 1] = base[1] * v; img.data[i * 4 + 2] = base[2] * v; img.data[i * 4 + 3] = 255;
    const ro = 90 + 80 * n[i] + (brushed ? streak[y] * 40 : 0);
    rimg.data[i * 4] = rimg.data[i * 4 + 1] = rimg.data[i * 4 + 2] = ro; rimg.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0); rctx.putImageData(rimg, 0, 0);
  for (let s = 0; s < 30; s++) {                                                     // scratches
    const x = r() * size, y = r() * size, len = 5 + r() * 40, a = r() * Math.PI;
    ctx.strokeStyle = `rgba(255,255,255,${0.05 + r() * 0.12})`; ctx.lineWidth = 0.6;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len); ctx.stroke();
  }
  return { map: toTexture(c), rough: toTexture(rc, { srgb: false }) };
}

/** Painted steel (cabinets, housings): faint orange-peel texture, scuffs and a darker lower edge. */
export function paintSurface({ base = [236, 239, 241], seed = 5, size = 256 } = {}) {
  const fine = fbm(size, 64, 2, seed), n = fbm(size, 4, 3, seed + 2);
  const c = canvas(size), ctx = c.getContext('2d'), img = ctx.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const y = Math.floor(i / size) / size;
    const v = (0.93 + 0.06 * n[i] + 0.04 * (fine[i] - 0.5)) * (y > 0.9 ? 1 - (y - 0.9) * 1.5 : 1);
    img.data[i * 4] = base[0] * v; img.data[i * 4 + 1] = base[1] * v; img.data[i * 4 + 2] = base[2] * v; img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const r = rng(seed * 5);
  for (let s = 0; s < 14; s++) {
    const x = r() * size, y = r() * size;
    ctx.strokeStyle = `rgba(60,60,60,${0.05 + r() * 0.1})`; ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 30, y + (r() - 0.5) * 8); ctx.stroke();
  }
  return { map: toTexture(c, { repeat: false }) };
}

/**
 * Age a printed canvas in place: paper/ink speckle, a few scratches, grimy edges and a fingerprint smudge.
 * Kept subtle so text stays readable.
 */
export function weather(ctx, w, h, k = 1, seed = 9) {
  const r = rng(seed + w * 7 + h * 13);
  ctx.save();
  for (let i = 0; i < w * h * 0.004 * k; i++) {
    ctx.fillStyle = r() < 0.5 ? `rgba(0,0,0,${0.03 + r() * 0.06})` : `rgba(255,255,255,${0.03 + r() * 0.05})`;
    ctx.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2);
  }
  for (let i = 0; i < 6 * k; i++) {
    ctx.strokeStyle = `rgba(0,0,0,${0.05 + r() * 0.07})`; ctx.lineWidth = 0.8;
    const x = r() * w, y = r() * h; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * w * 0.3, y + (r() - 0.5) * h * 0.1); ctx.stroke();
  }
  const edge = Math.min(w, h) * 0.18;
  for (const [x0, y0, x1, y1] of [[0, 0, 0, edge], [0, h, 0, h - edge], [0, 0, edge, 0], [w, 0, w - edge, 0]]) {
    const g = ctx.createLinearGradient(x0, y0, x1, y1);
    g.addColorStop(0, `rgba(40,35,28,${0.16 * k})`); g.addColorStop(1, 'rgba(40,35,28,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  }
  const fx = r() * w, fy = r() * h, fr = Math.min(w, h) * 0.12;
  const fg = ctx.createRadialGradient(fx, fy, 1, fx, fy, fr);
  fg.addColorStop(0, `rgba(60,50,40,${0.07 * k})`); fg.addColorStop(1, 'rgba(60,50,40,0)');
  ctx.fillStyle = fg; ctx.fillRect(fx - fr, fy - fr, fr * 2, fr * 2);
  ctx.restore();
}

/** Soft radial contact-shadow decal (put under props). */
export function blobShadowTexture() {
  const c = canvas(128), ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 8, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(0.55, 'rgba(0,0,0,.28)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128);
  return toTexture(c, { srgb: false, repeat: false });
}

/** Linear gradient decal for ambient occlusion along wall/floor and wall/ceiling edges. */
export function edgeShadowTexture() {
  const c = canvas(4, 64), ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 64);
  g.addColorStop(0, 'rgba(0,0,0,.5)'); g.addColorStop(0.35, 'rgba(0,0,0,.18)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 64);
  return toTexture(c, { srgb: false, repeat: false });
}
