// Finale — synchronising the lab island with the public grid at the tie breaker.
// Real procedure: match voltage, run the island a hair FAST (needle turns slowly clockwise),
// verify phase rotation with the three "dark lamps" (dark together = same sequence, chasing = wrong),
// then close the breaker when the synchroscope needle passes 12 o'clock.

const SEQ = { CW: [0, -120, -240], CCW: [0, -240, -120] };   // L1, L2, L3 phase angles
const rad = (d) => d * Math.PI / 180;
const wrap = (d) => ((d + 180) % 360 + 360) % 360 - 180;

export const SYNC_TOL = { V: 5, F: 0.1, PHI: 12 };

export class SyncSim {
  constructor(puzzle) {
    this.grid = { V: puzzle.gridV, f: puzzle.gridF, seq: 'CW' };
    this.isl = { V: 222, f: 49.8, seq: 'CCW' };
    this.phi = 140;          // island angle relative to grid, degrees
    this.closed = false;
    this.flash = 0;
  }
  serialize() { return { isl: this.isl, closed: this.closed }; }
  restore(o) { if (o) { Object.assign(this.isl, o.isl); this.closed = o.closed; } }

  tick(dt) {
    if (this.closed) { this.phi = 0; return; }
    this.phi = wrap(this.phi + 360 * (this.isl.f - this.grid.f) * dt);
    this.flash = Math.max(0, this.flash - dt);
  }
  /** Voltage across each breaker pole → lamp brightness 0..1. */
  lamps() {
    if (this.closed) return [0, 0, 0];
    const gi = SEQ[this.grid.seq], ii = SEQ[this.isl.seq];
    return [0, 1, 2].map((k) => {
      const a = rad(this.phi + ii[k] - gi[k]);
      const u = Math.sqrt(this.isl.V ** 2 + this.grid.V ** 2 - 2 * this.isl.V * this.grid.V * Math.cos(a));
      return Math.min(1, u / (2 * 230));
    });
  }
  check() {
    const dV = this.isl.V - this.grid.V, dF = this.isl.f - this.grid.f;
    if (this.isl.seq !== this.grid.seq) return { ok: false, why: 'PHASE ROTATION MISMATCH — negative-sequence protection tripped. The lamps were chasing each other, not going dark together.' };
    if (Math.abs(dV) > SYNC_TOL.V) return { ok: false, why: `VOLTAGE MISMATCH ${dV > 0 ? '+' : ''}${dV.toFixed(0)} V — reactive-power surge, breaker tripped.` };
    if (Math.abs(dF) > SYNC_TOL.F) return { ok: false, why: `SLIP TOO LARGE (${dF > 0 ? '+' : ''}${dF.toFixed(2)} Hz) — power swing, breaker tripped.` };
    if (Math.abs(this.phi) > SYNC_TOL.PHI) return { ok: false, why: `OUT OF PHASE by ${Math.abs(this.phi).toFixed(0)}° — the generators got yanked into step. BANG. Breaker tripped.` };
    return { ok: true };
  }
}

/** Synchroscope + meters, drawn onto a canvas (used both in the 3D world and in the panel). */
export function drawSyncScope(ctx, w, h, sync, { compact = false } = {}) {
  ctx.fillStyle = '#10161d'; ctx.fillRect(0, 0, w, h);
  const cx = compact ? w / 2 : w * 0.3, cy = compact ? h * 0.42 : h / 2, R = Math.min(compact ? w * 0.38 : w * 0.25, h * 0.38);
  const mono = 'Consolas, "Courier New", monospace';
  // dial
  ctx.fillStyle = '#e9e6dc'; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(40,180,90,.45)'; ctx.beginPath(); ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, R, -Math.PI / 2 - rad(SYNC_TOL.PHI), -Math.PI / 2 + rad(SYNC_TOL.PHI)); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = '#222'; ctx.lineWidth = 2;
  for (let i = 0; i < 36; i++) {
    const a = rad(i * 10) - Math.PI / 2, r0 = i % 9 === 0 ? R * 0.78 : R * 0.88;
    ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0); ctx.lineTo(cx + Math.cos(a) * R * 0.97, cy + Math.sin(a) * R * 0.97); ctx.stroke();
  }
  ctx.fillStyle = '#222'; ctx.font = `bold ${Math.round(R * 0.15)}px ${mono}`; ctx.textAlign = 'center';
  ctx.fillText('SLOW', cx - R * 0.45, cy + R * 0.55); ctx.fillText('FAST', cx + R * 0.45, cy + R * 0.55);
  ctx.fillText('↺', cx - R * 0.45, cy + R * 0.35); ctx.fillText('↻', cx + R * 0.45, cy + R * 0.35);
  // needle
  const a = rad(sync.phi) - Math.PI / 2;
  ctx.strokeStyle = sync.closed ? '#1a8f4a' : '#c21'; ctx.lineWidth = Math.max(3, R * 0.05); ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(cx - Math.cos(a) * R * 0.15, cy - Math.sin(a) * R * 0.15); ctx.lineTo(cx + Math.cos(a) * R * 0.85, cy + Math.sin(a) * R * 0.85); ctx.stroke();
  ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(cx, cy, R * 0.07, 0, Math.PI * 2); ctx.fill();
  ctx.lineCap = 'butt';
  if (sync.flash > 0) { ctx.fillStyle = `rgba(255,255,255,${sync.flash})`; ctx.fillRect(0, 0, w, h); }

  // lamps
  const L = sync.lamps();
  const ly = compact ? h * 0.88 : h * 0.12, lx0 = compact ? w / 2 - R * 0.6 : w * 0.62;
  L.forEach((b, k) => {
    const x = compact ? lx0 + k * R * 0.6 : lx0 + k * w * 0.12;
    const g = ctx.createRadialGradient(x, ly, 2, x, ly, h * 0.07);
    g.addColorStop(0, `rgba(255,${200 + 55 * b},${120 + 100 * b},${0.15 + 0.85 * b})`); g.addColorStop(1, 'rgba(255,200,120,0)');
    ctx.fillStyle = '#2a2f36'; ctx.beginPath(); ctx.arc(x, ly, h * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, ly, h * 0.07, 0, Math.PI * 2); ctx.fill();
    if (!compact) { ctx.fillStyle = '#8ea3b8'; ctx.font = `${Math.round(h * 0.04)}px ${mono}`; ctx.fillText(`L${k + 1}`, x, ly + h * 0.1); }
  });
  if (compact) return;
  // meters
  ctx.textAlign = 'left'; ctx.font = `${Math.round(h * 0.05)}px ${mono}`;
  const dV = sync.isl.V - sync.grid.V, dF = sync.isl.f - sync.grid.f;
  const rows = [
    ['', 'GRID', 'ISLAND'],
    ['V', `${sync.grid.V} V`, `${sync.isl.V} V`],
    ['f', `${sync.grid.f.toFixed(2)} Hz`, `${sync.isl.f.toFixed(2)} Hz`],
    ['↻', sync.grid.seq === 'CW' ? 'L1-L2-L3' : 'L1-L3-L2', sync.isl.seq === 'CW' ? 'L1-L2-L3' : 'L1-L3-L2'],
  ];
  rows.forEach((r, i) => {
    const y = h * 0.34 + i * h * 0.1;
    ctx.fillStyle = '#8ea3b8'; ctx.fillText(r[0], w * 0.58, y);
    ctx.fillStyle = i === 0 ? '#8ea3b8' : '#e6edf3'; ctx.fillText(r[1], w * 0.63, y); ctx.fillText(r[2], w * 0.81, y);
  });
  const ok = (c) => (c ? '#3ecf7a' : '#ff6b77');
  ctx.fillStyle = ok(Math.abs(dV) <= SYNC_TOL.V); ctx.fillText(`ΔV ${dV >= 0 ? '+' : ''}${dV} V`, w * 0.58, h * 0.8);
  ctx.fillStyle = ok(Math.abs(dF) <= SYNC_TOL.F); ctx.fillText(`Δf ${dF >= 0 ? '+' : ''}${dF.toFixed(2)} Hz`, w * 0.8, h * 0.8);
  ctx.fillStyle = sync.closed ? '#3ecf7a' : '#ffd24a'; ctx.fillText(sync.closed ? 'Q0 CLOSED — CONNECTED' : `Δφ ${sync.phi >= 0 ? '+' : ''}${sync.phi.toFixed(0)}°`, w * 0.58, h * 0.92);
}
