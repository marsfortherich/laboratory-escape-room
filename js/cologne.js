// Procedural Cologne, seen from the Deutz bank across the Rhine. The view is split into depth layers that the
// window shader (outside.js) re-projects for the player's actual eye position, so the city has real parallax:
// sky (∞) · far city: Colonius, Kranhäuser (2.5 km) · left bank: Altstadt, Groß St. Martin, Kölner Dom (600 m) ·
// Hohenzollern Bridge, KölnTriangle (220 m). The Rhine, the wet terrace, its railing, street lamps, trees and rain
// are drawn procedurally in the shader. The view looks west-north-west (the Dom is at ≈ 300° from Deutz).
// Modes: 'night' = storm + city blackout · 'restored' = still stormy, but the grid operator has re-energised the city
// (the lab itself stays dark until Q0 closes) · 'evening' = the storm front has passed and the sun sets behind the
// old town (Friday ≈ 19:35, late September: sunset almost due west).
//
// Design units: x is an angle (K units per radian, x = 1024 straight ahead), y = 0…768 with the horizon (eye level)
// at y = 0.73 · 768. A point h metres above the lab floor on a layer `depth` metres behind the glass sits at yAt(h, depth).

export const DESIGN = { W: 2048, H: 768, HORIZON: 0.73 * 768 };
export const OUT = {
  K: 2408,          // design units per radian (≈ 602 units per metre of glass seen from 4 m)
  R: 4,             // reference eye distance in front of the glass (the layers are cylinders around it)
  EYE: 1.65,        // eye height above the lab floor = terrace level outside
  WATER: -6,        // Rhine level (the lab sits on the high Deutz bank)
  BANK: -5,         // quay tops on the far bank
  RAIL: 4,          // the terrace ends at a railing 4 m outside the glass
  X0: -2816, X1: 6700,   // −90° … +128° around x = 1024: enough for the window and the exit doorway (which faces +90°)
};
export const yAt = (h, depth) => DESIGN.HORIZON - ((h - OUT.EYE) * OUT.K) / (OUT.R + depth);

/** Canvas sizes match what a 1080p screen can resolve (GPU memory); outside.js halves them on touch devices. */
export const LAYERS = [
  { id: 'sky', depth: Infinity, w: 2048, h: 256 },
  { id: 'far', depth: 2500, w: 3072, h: 384 },
  { id: 'mid', depth: 600, w: 4096, h: 448 },
  { id: 'bridge', depth: 220, w: 3072, h: 384 },
];
export const SUN_X = 150;       // sunset azimuth ≈ 270°, about 30° left of the Dom

/** Backlight: a warm rim on the edges of the silhouettes that face the low sun (on the left). */
function rimLight(ctx, w, h, dx, dy, color) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d');
  x.drawImage(ctx.canvas, 0, 0);
  x.globalCompositeOperation = 'destination-out'; x.drawImage(ctx.canvas, dx, dy);
  x.globalCompositeOperation = 'source-in'; x.fillStyle = color; x.fillRect(0, 0, w, h);
  ctx.drawImage(c, 0, 0);
}

function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

export function drawLayer(ctx, w, h, mode, L) {
  const dawn = mode === 'evening', lights = mode !== 'night';
  const r = rng(1248 + L.id.length * 97 + (L.id === 'far' ? 5 : 0));
  const SX = w / (OUT.X1 - OUT.X0), SY = h / DESIGN.H;
  const X = (x) => (x - OUT.X0) * SX, Y = (y) => y * SY;
  const HZ = Y(DESIGN.HORIZON);
  ctx.clearRect(0, 0, w, h);
  const far = dawn ? '#5d5470' : '#141b27', mid = dawn ? '#3b3346' : '#0d121a', near = dawn ? '#211b26' : '#080b11';
  const lit = (x, y, ww, hh, p, dx = 9, dy = 11) => {
    for (let yy = y + 6 * SY; yy < y + hh - 6 * SY; yy += dy * SY) for (let xx = x + 4 * SX; xx < x + ww - 5 * SX; xx += dx * SX)
      if (r() < p) { ctx.fillStyle = r() < 0.6 ? '#ffd58a' : '#cfe0ff'; ctx.fillRect(xx, yy, Math.max(1, 4 * SX), Math.max(1, 5 * SY)); }
  };
  const winP = lights ? 0.28 : 0.02;                                // blackout: only a few battery-lit windows
  const rim = (dx, dy) => { if (dawn) rimLight(ctx, w, h, Math.max(1, dx * SX * 2), Math.max(1, dy * SY), 'rgba(255,186,105,.9)'); };

  if (L.id === 'sky') {
    const g = ctx.createLinearGradient(0, 0, 0, HZ);
    if (dawn) { g.addColorStop(0, '#2c4a7c'); g.addColorStop(0.5, '#8e7196'); g.addColorStop(0.82, '#e59a78'); g.addColorStop(1, '#ffc389'); }
    else { g.addColorStop(0, '#070a13'); g.addColorStop(0.55, '#172033'); g.addColorStop(1, '#34435e'); }
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    for (let bank = 0; bank < (dawn ? 60 : 90); bank++) {           // soft cloud banks, wide rather than round
      const bx = r() * w, by = HZ * (0.18 + r() * (dawn ? 0.4 : 0.67)), bw = (250 + r() * 450) * SX;
      for (let i = 0; i < 18; i++) {
        const cx = bx + (r() - 0.5) * bw, cy = by + (r() - 0.5) * 50 * SY, rad = Math.max(3, (30 + r() * 70) * SY);
        const [cr, cg, cb, a] = dawn ? [255, 200 + r() * 30, 180 + r() * 30, 0.08 + r() * 0.1] : [50 + r() * 25, 58 + r() * 25, 80 + r() * 25, 0.1 + r() * 0.14];
        const p = ctx.createRadialGradient(0, 0, 0, 0, 0, rad);
        p.addColorStop(0, `rgba(${cr | 0},${cg | 0},${cb | 0},${a})`); p.addColorStop(1, `rgba(${cr | 0},${cg | 0},${cb | 0},0)`);
        ctx.save(); ctx.translate(cx, cy); ctx.scale(2.2, 1); ctx.fillStyle = p; ctx.fillRect(-rad, -rad, rad * 2, rad * 2); ctx.restore();
      }
    }
    if (dawn) {                                                     // the setting sun, low behind the old town
      const sx = X(SUN_X), sy = HZ - 30 * SY, s = ctx.createRadialGradient(0, 0, 2, 0, 0, 520 * SY);
      s.addColorStop(0, 'rgba(255,236,190,.95)'); s.addColorStop(0.25, 'rgba(255,180,110,.5)'); s.addColorStop(1, 'rgba(255,160,100,0)');
      ctx.save(); ctx.translate(sx, sy); ctx.scale(3.2 * SX / SY, 1); ctx.fillStyle = s; ctx.fillRect(-520 * SY, -520 * SY, 1040 * SY, 1040 * SY); ctx.restore();
      ctx.fillStyle = '#fff4d8'; ctx.beginPath(); ctx.ellipse(sx, sy, Math.max(2, 11 * SX), Math.max(2, 11 * SY), 0, 0, Math.PI * 2); ctx.fill();
    } else if (lights) {                                            // city lights back: sodium glow under the clouds
      const cg = ctx.createLinearGradient(0, HZ - 160 * SY, 0, HZ);
      cg.addColorStop(0, 'rgba(255,150,70,0)'); cg.addColorStop(1, 'rgba(255,150,70,.28)');
      ctx.fillStyle = cg; ctx.fillRect(0, HZ - 160 * SY, w, 160 * SY);
    }
    const top = ctx.createLinearGradient(0, 0, 0, HZ * 0.3);        // uniform zenith: the shader clamps the top row upwards
    top.addColorStop(0, dawn ? '#2c4a7c' : '#070a13'); top.addColorStop(1, dawn ? 'rgba(44,74,124,0)' : 'rgba(7,10,19,0)');
    ctx.fillStyle = top; ctx.fillRect(0, 0, w, HZ * 0.3);
    return;
  }

  if (L.id === 'far') {
    const base = Y(yAt(OUT.BANK, L.depth));
    for (let x = 0; x < w;) {                                       // distant city, down to the canvas bottom
      const bw = (30 + r() * 70) * SX, bh = (18 + r() * 60) * SY;
      ctx.fillStyle = far; ctx.fillRect(x, base - bh, bw + 1, h - base + bh);
      lit(x, base - bh, bw, bh, winP * 0.6);
      x += bw;
    }
    ctx.fillStyle = far;                                            // Colonius TV tower (266 m at ≈ 2.5 km)
    ctx.fillRect(X(295), Y(360), 9 * SX, h);
    ctx.beginPath(); ctx.ellipse(X(299.5), Y(408), 22 * SX, 6 * SY, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(X(299.5), Y(397), 17 * SX, 5 * SY, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(X(298), Y(307), 3 * SX, 56 * SY);
    ctx.fillStyle = '#ff3b2f'; for (const y of [308, 360, 440]) ctx.fillRect(X(298), Y(y), Math.max(2, 3 * SX), Math.max(2, 3 * SY));   // aviation lights (battery)
    for (const kx of [-2520, -2440, -2360]) {                       // Kranhäuser, up-river in the Rheinauhafen (61 m, ≈ 1.8 km)
      ctx.fillStyle = mid;
      ctx.fillRect(X(kx), Y(486), 18 * SX, h);
      ctx.fillRect(X(kx), Y(486), 52 * SX, 20 * SY);
      ctx.fillStyle = lights ? 'rgba(170,200,230,.35)' : 'rgba(80,100,140,.25)'; ctx.fillRect(X(kx), Y(487), 52 * SX, 2 * SY);
      lit(X(kx), Y(486), 52 * SX, 20 * SY, winP); lit(X(kx), Y(506), 18 * SX, base - Y(506), winP);
    }
    rim(1, 1);
    return;
  }

  if (L.id === 'mid') {
    const base = Y(yAt(OUT.BANK, L.depth));
    for (let x = 0; x < w;) {                                       // riverfront houses (continue when you look out at an angle)
      const dx = OUT.X0 + x / SX;
      const bw = (40 + r() * 60) * SX, bh = (24 + r() * 40) * SY;
      if (dx < 640 || dx > 1600) { ctx.fillStyle = mid; ctx.fillRect(x, base - bh, bw + 1, h - base + bh); lit(x, base - bh, bw, bh, winP); }
      x += bw;
    }
    for (let x = X(660); x < X(1200);) {                            // Altstadt: narrow gabled houses
      const bw = (26 + r() * 22) * SX, bh = (48 + r() * 35) * SY;
      ctx.fillStyle = dawn ? ['#4b3a3c', '#56423c', '#433b4e', '#4e473f'][Math.floor(r() * 4)] : mid;
      ctx.fillRect(x, base - bh, bw + 1, h - base + bh);
      ctx.beginPath(); ctx.moveTo(x, base - bh); ctx.lineTo(x + bw / 2, base - bh - (22 + r() * 10) * SY); ctx.lineTo(x + bw, base - bh); ctx.fill();
      lit(x, base - bh, bw, bh, winP * 1.6);
      x += bw;
    }
    ctx.fillStyle = dawn ? '#3e3530' : '#0a0e14'; ctx.fillRect(X(640), base, X(1600) - X(640), h);   // quay wall
    ctx.fillStyle = near;                                           // Groß St. Martin
    ctx.fillRect(X(760), base - 95 * SY, 130 * SX, h);
    ctx.fillRect(X(795), Y(330), 52 * SX, h);
    ctx.beginPath(); ctx.moveTo(X(795), Y(330)); ctx.lineTo(X(821), Y(250)); ctx.lineTo(X(847), Y(330)); ctx.fill();
    for (const tx of [791, 843]) { ctx.fillRect(X(tx), Y(318), 8 * SX, 30 * SY); ctx.beginPath(); ctx.moveTo(X(tx), Y(318)); ctx.lineTo(X(tx + 4), Y(292)); ctx.lineTo(X(tx + 8), Y(318)); ctx.fill(); }
    // Kölner Dom
    const spire = (cx, baseY, tipY, halfW) => {
      ctx.fillStyle = near;
      ctx.fillRect(X(cx - halfW), Y(baseY), 2 * halfW * SX, h);
      for (let k = 0; k < 4; k++) { const y = baseY + 40 + k * 45; ctx.fillRect(X(cx - halfW - 5), Y(y), 5 * SX, 30 * SY); ctx.fillRect(X(cx + halfW), Y(y), 5 * SX, 30 * SY); }
      ctx.fillRect(X(cx - halfW * 0.72), Y(baseY - 40), halfW * 1.44 * SX, 42 * SY);
      ctx.beginPath(); ctx.moveTo(X(cx - halfW * 0.72), Y(baseY - 38)); ctx.lineTo(X(cx), Y(tipY)); ctx.lineTo(X(cx + halfW * 0.72), Y(baseY - 38)); ctx.fill();
      for (let t = 0.1; t < 0.95; t += 0.09) {                      // crockets
        const y = baseY - 38 + (tipY - (baseY - 38)) * t, dx = halfW * 0.72 * (1 - t);
        for (const s of [-1, 1]) { ctx.beginPath(); ctx.moveTo(X(cx + s * dx), Y(y)); ctx.lineTo(X(cx + s * (dx + 6)), Y(y - 4)); ctx.lineTo(X(cx + s * dx), Y(y - 8)); ctx.fill(); }
      }
      ctx.fillRect(X(cx - 1.5), Y(tipY - 16), 3 * SX, 18 * SY); ctx.fillRect(X(cx - 6), Y(tipY - 10), 12 * SX, 3 * SY);
      ctx.strokeStyle = dawn ? 'rgba(255,220,180,.18)' : 'rgba(120,140,170,.14)'; ctx.lineWidth = Math.max(1, 1.5 * SX);
      for (let k = -1; k <= 1; k++) for (const [y0, y1] of [[baseY + 30, baseY + 120], [baseY + 150, baseY + 230]]) {
        const x = cx + k * halfW * 0.5;
        ctx.beginPath(); ctx.moveTo(X(x - 5), Y(y1)); ctx.lineTo(X(x - 5), Y(y0 + 10)); ctx.lineTo(X(x), Y(y0)); ctx.lineTo(X(x + 5), Y(y0 + 10)); ctx.lineTo(X(x + 5), Y(y1)); ctx.stroke();
      }
    };
    ctx.fillStyle = near;
    ctx.fillRect(X(1170), Y(410), 340 * SX, h);
    ctx.fillRect(X(1190), Y(380), 300 * SX, 40 * SY);
    ctx.beginPath(); ctx.moveTo(X(1190), Y(382)); ctx.lineTo(X(1235), Y(318)); ctx.lineTo(X(1470), Y(318)); ctx.lineTo(X(1510), Y(382)); ctx.fill();
    ctx.beginPath(); ctx.moveTo(X(1500), Y(410)); ctx.lineTo(X(1552), Y(430)); ctx.lineTo(X(1560), h); ctx.lineTo(X(1500), h); ctx.fill();
    ctx.fillRect(X(1300), Y(360), 46 * SX, 60 * SY);
    ctx.beginPath(); ctx.moveTo(X(1300), Y(362)); ctx.lineTo(X(1323), Y(322)); ctx.lineTo(X(1346), Y(362)); ctx.fill();
    for (let x = 1205; x < 1560; x += 24) {
      const top = x > 1495 ? 392 : 372;
      ctx.beginPath(); ctx.moveTo(X(x - 4), Y(top + 45)); ctx.lineTo(X(x), Y(top)); ctx.lineTo(X(x + 4), Y(top + 45)); ctx.fill();
      ctx.fillRect(X(x - 4), Y(top + 45), 8 * SX, 30 * SY);
    }
    ctx.fillRect(X(1352), Y(300), 12 * SX, 55 * SY); ctx.beginPath(); ctx.moveTo(X(1350), Y(302)); ctx.lineTo(X(1358), Y(262)); ctx.lineTo(X(1366), Y(302)); ctx.fill();
    spire(1118, 230, 62, 34); spire(1205, 236, 70, 34);
    ctx.fillStyle = lights ? '#2d5a9a' : '#101a2e';                // Musical Dome
    ctx.beginPath(); ctx.moveTo(X(1545), base); ctx.quadraticCurveTo(X(1580), base - 55 * SY, X(1640), base - 38 * SY); ctx.lineTo(X(1660), base); ctx.fill();
    // river cruiser moored at the old-town quay: it runs on its own generators, so it is lit in the blackout
    const water = Y(yAt(OUT.WATER, L.depth)), s0 = 130, s1 = 610, deckTop = water - 16 * SY;
    ctx.fillStyle = dawn ? '#8f8a86' : '#1c222b';
    ctx.beginPath(); ctx.moveTo(X(s0), deckTop); ctx.lineTo(X(s1), deckTop); ctx.lineTo(X(s1 + 18), deckTop - 6 * SY); ctx.lineTo(X(s1 + 10), h); ctx.lineTo(X(s0 + 4), h); ctx.fill();
    ctx.fillRect(X(s0 + 40), deckTop - 14 * SY, (s1 - s0 - 90) * SX, 14 * SY);
    ctx.fillRect(X(s0 + 70), deckTop - 25 * SY, (s1 - s0 - 170) * SX, 11 * SY);
    ctx.fillStyle = '#ffd9a0';
    for (let x = s0 + 46; x < s1 - 54; x += 8) if (r() < 0.8) ctx.fillRect(X(x), deckTop - 10 * SY, Math.max(1, 4 * SX), Math.max(1, 4 * SY));
    for (let x = s0 + 76; x < s1 - 104; x += 10) if (r() < 0.5) ctx.fillRect(X(x), deckTop - 21 * SY, Math.max(1, 5 * SX), Math.max(1, 4 * SY));
    ctx.fillStyle = dawn ? '#1c3f7a' : '#0e1622'; ctx.fillRect(X(s0), deckTop + 4 * SY, (s1 - s0) * SX, 4 * SY);
    rim(1, 1);
    if (lights) {                                                   // the Dom's floodlights (back with the grid)
      const fl = ctx.createRadialGradient(X(1160), base, 10 * SX, X(1160), base - 80 * SY, 300 * SY);
      fl.addColorStop(0, `rgba(255,196,120,${dawn ? 0.3 : 0.55})`); fl.addColorStop(1, 'rgba(255,196,120,0)');
      ctx.globalCompositeOperation = 'source-atop'; ctx.fillStyle = fl; ctx.fillRect(X(880), Y(40), 620 * SX, base - Y(40)); ctx.globalCompositeOperation = 'source-over';
    }
    return;
  }

  if (L.id === 'bridge') {
    const water = Y(yAt(OUT.WATER, L.depth)), steel = dawn ? '#3a3440' : '#0a0e15';
    // Hohenzollern Bridge: starts next to the Dom and comes towards our bank on the right, so its arches grow
    const deck = (x) => Y(547 - (x - 1180) * 0.035);
    const joints = [1180, 1420, 1700, 2040];
    ctx.fillStyle = steel;
    ctx.beginPath(); ctx.moveTo(X(1180), deck(1180)); ctx.lineTo(X(2760), deck(2760)); ctx.lineTo(X(2760), deck(2760) + 16 * SY); ctx.lineTo(X(1180), deck(1180) + 12 * SY); ctx.fill();
    for (const px of joints) ctx.fillRect(X(px) - 11 * SX, deck(px), 22 * SX, h);
    for (let px = 2040 + 120; px < 2760; px += 120) {               // approach viaduct on our side
      ctx.fillRect(X(px) - 8 * SX, deck(px), 16 * SX, h);
      ctx.beginPath(); ctx.moveTo(X(px - 112), deck(px - 112) + 14 * SY); ctx.quadraticCurveTo(X(px - 60), deck(px - 60) + 40 * SY, X(px - 8), deck(px - 8) + 14 * SY); ctx.lineTo(X(px - 8), deck(px - 8) + 10 * SY); ctx.lineTo(X(px - 112), deck(px - 112) + 10 * SY); ctx.fill();
    }
    ctx.strokeStyle = steel;
    for (let a = 0; a < 3; a++) {
      const x0 = joints[a], x1 = joints[a + 1], mx = (x0 + x1) / 2, top = deck(mx) - (x1 - x0) * 0.62 * SY;
      ctx.lineWidth = Math.max(2, 5 * SX);
      for (const off of [0, 7]) { ctx.beginPath(); ctx.moveTo(X(x0), deck(x0)); ctx.quadraticCurveTo(X(mx), top + off * SY, X(x1), deck(x1)); ctx.stroke(); }
      ctx.lineWidth = Math.max(1, 1.6 * SX);
      for (let t = 0.05; t < 0.96; t += 0.05) {
        const ax = x0 + (x1 - x0) * t, archY = (1 - t) * (1 - t) * deck(x0) + 2 * (1 - t) * t * top + t * t * deck(x1);
        ctx.beginPath(); ctx.moveTo(X(ax), archY); ctx.lineTo(X(ax + 13 * (t < 0.5 ? 1 : -1)), deck(ax)); ctx.stroke();
      }
    }
    if (lights) { ctx.fillStyle = 'rgba(255,190,110,.9)'; for (let x = 1190; x < 2760; x += 22) ctx.fillRect(X(x), deck(x) + 3 * SY, Math.max(2, 3 * SX), Math.max(2, 3 * SY)); }
    if (!dawn) {                                                    // a regional train, stranded by a storm fault on the overhead line
      // (DB runs its own 15 kV / 16.7 Hz traction grid, so the city blackout alone would not have stopped it)
      ctx.fillStyle = '#131820';
      for (let c = 0; c < 4; c++) { const x0 = 1480 + c * 58; ctx.fillRect(X(x0), deck(x0) - 13 * SY, 55 * SX, 13 * SY); }
      ctx.fillStyle = 'rgba(160,190,255,.45)';
      for (let x = 1486; x < 1706; x += 9) if (r() < 0.4) ctx.fillRect(X(x), deck(x) - 10 * SY, Math.max(1, 4 * SX), Math.max(1, 4 * SY));
    }
    // KölnTriangle (glass tower at the Deutz end of the bridge) and the Deutz riverfront beyond it
    ctx.fillStyle = dawn ? '#2e3a4c' : '#0b1018';
    ctx.fillRect(X(2790), Y(250), 90 * SX, h);
    ctx.fillStyle = dawn ? 'rgba(255,200,140,.45)' : 'rgba(90,110,150,.2)'; ctx.fillRect(X(2790), Y(250), 90 * SX, 22 * SY);
    if (dawn) { const gl = ctx.createLinearGradient(X(2790), 0, X(2880), 0); gl.addColorStop(0, 'rgba(255,190,120,.35)'); gl.addColorStop(1, 'rgba(255,190,120,0)'); ctx.fillStyle = gl; ctx.fillRect(X(2790), Y(272), 90 * SX, water - Y(272)); }
    lit(X(2790), Y(280), 90 * SX, water - Y(280), winP * 1.2, 8, 9);
    for (let x = X(2900); x < w;) {                                 // the Deutz riverfront, north of the bridge
      const bw = (50 + r() * 70) * SX, bh = (60 + r() * 90) * SY;
      ctx.fillStyle = dawn ? '#2a2531' : '#090c12'; ctx.fillRect(x, water - bh - 30 * SY, bw + 1, h);
      lit(x, water - bh - 30 * SY, bw, bh, winP);
      x += bw;
    }
    rim(1, 1);
  }
}

/** A forked lightning bolt (white core, blue glow) on a transparent canvas; `seed` picks the shape. */
export function drawBolt(ctx, w, h, seed) {
  const r = rng(seed);
  const paths = [];
  const branch = (x, y, dir, len, wd, depth) => {
    const pts = [[x, y]];
    for (let i = 0; i < len && y < h; i++) {
      x += (r() - 0.5) * 26 + dir * 4; y += 8 + r() * 14;
      if (x < 24 || x > w - 24) { x = Math.max(24, Math.min(w - 24, x)); dir = -dir; }
      pts.push([x, y]);
      if (depth < 2 && r() < 0.08) branch(x, y, r() < 0.5 ? -1.6 : 1.6, (len - i) * 0.45, wd * 0.55, depth + 1);
    }
    paths.push({ pts, wd });
  };
  branch(w * 0.5, 0, 0, 60, 1, 0);
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.shadowColor = 'rgba(140,170,255,1)';
  for (const [col, wd, blur] of [['rgba(120,150,255,.35)', 9, 18], ['rgba(200,215,255,.8)', 3.5, 6], ['#fff', 1.4, 0]]) {
    ctx.strokeStyle = col; ctx.shadowBlur = blur;
    for (const p of paths) {
      ctx.lineWidth = wd * p.wd; ctx.beginPath(); ctx.moveTo(...p.pts[0]);
      for (const q of p.pts) ctx.lineTo(...q);
      ctx.stroke();
    }
  }
  ctx.shadowBlur = 0;
}

/** Rain on the glass, part 1: droplets clinging to the pane (static — they only fade with the rain). */
export function drawDroplets(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const r = rng(11);
  for (let i = 0; i < 150; i++) {                                   // a darker lens with a tiny highlight
    const x = r() * w, y = r() * h, rr = 1.2 + r() * 3.2;
    ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(210,225,255,.16)'; ctx.beginPath(); ctx.arc(x - rr * 0.3, y - rr * 0.35, rr * 0.35, 0, Math.PI * 2); ctx.fill();
  }
}
/** Rain on the glass, part 2: runnels that creep down (this texture scrolls slowly; tileable vertically). */
export function drawRunnels(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const r = rng(7);
  for (let i = 0; i < 90; i++) {
    const x = r() * w, y = r() * h, len = 14 + r() * 40;
    ctx.strokeStyle = `rgba(190,210,240,${0.05 + r() * 0.12})`; ctx.lineWidth = 1 + r();
    ctx.beginPath(); ctx.moveTo(x, y); ctx.bezierCurveTo(x + 2, y + len * 0.3, x - 2, y + len * 0.6, x + (r() - 0.5) * 3, y + len); ctx.stroke();
    ctx.fillStyle = 'rgba(210,225,255,.2)'; ctx.beginPath(); ctx.arc(x, y + len, 1.6, 0, Math.PI * 2); ctx.fill();   // the bead at its front
  }
}
