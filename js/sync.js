// Finale — synchronising the lab island with the public grid at the tie breaker.
// Real procedure: match voltage, run the island a hair FAST (needle turns slowly clockwise),
// verify phase rotation with the three "dark lamps" (dark together = same sequence, chasing = wrong),
// then close the breaker when the synchroscope needle passes 12 o'clock.
// The island's own rotation is fixed (it started the booth-door motor forwards); after the storm repair the
// incoming grid cable at Q0 may have been re-terminated with L2/L3 swapped (always in the classic room, on some days
// in daily rooms) — the player has to read the lamps to know.
// Close with the island a hair FAST: an island slower than the grid would be motored (reverse power) the moment Q0 closes.
// Lamps are filaments: brightness ∝ V², practically dark below ~25 % voltage (so close on the scope, not the lamps).

const SEQ = { CW: [0, -120, -240], CCW: [0, -240, -120] };   // L1, L2, L3 phase angles
const rad = (d) => d * Math.PI / 180;
const wrap = (d) => ((d + 180) % 360 + 360) % 360 - 180;

export const SYNC_TOL = { V_REL: 0.02, F: 0.1, PHI: 10 };

export class SyncSim {
  constructor(puzzle) {
    this.grid = { V: puzzle.gridV, f: puzzle.gridF };
    this.isl = { V: 222, f: 49.8 };
    this.swapped = puzzle.swapped ?? true;   // incomer terminals L2/L3 swapped at Q0
    this.islandOn = true;    // set by the game each frame: is the lab cluster energised?
    this.phi = 140;          // island angle relative to grid, degrees
    this.closed = false;
    this.flash = 0;
  }
  serialize() { return { isl: { V: this.isl.V, f: this.isl.f }, swapped: this.swapped, closed: this.closed }; }
  restore(o) {
    if (!o) return;
    this.isl.V = o.isl.V; this.isl.f = o.isl.f; this.closed = o.closed;
    this.swapped = o.swapped ?? (o.isl.seq ? o.isl.seq !== 'CW' : true);   // older saves stored an island rotation
  }

  tick(dt) {
    if (this.closed) { this.phi = 0; return; }
    this.flash = Math.max(0, this.flash - dt);
    if (!this.islandOn) return;                     // no island voltage → the synchroscope needle stands still
    this.phi = wrap(this.phi + 360 * (this.isl.f - this.grid.f) * dt);
  }
  /** Voltage across each breaker pole → filament lamp brightness 0..1. */
  lamps() {
    if (this.closed) return [0, 0, 0];
    const gi = SEQ[this.swapped ? 'CCW' : 'CW'], ii = SEQ.CW;
    const Vi = this.islandOn ? this.isl.V : 0;      // dead island: each lamp just sees the grid voltage (steady glow)
    return [0, 1, 2].map((k) => {
      const a = rad(this.phi + ii[k] - gi[k]);
      const u = Math.sqrt(Vi ** 2 + this.grid.V ** 2 - 2 * Vi * this.grid.V * Math.cos(a));
      const v = Math.min(1, u / (2 * 230));
      return Math.max(0, (v * v - 0.0625) / 0.9375);
    });
  }
  check() {
    const dV = this.isl.V - this.grid.V, dF = this.isl.f - this.grid.f;
    if (!this.islandOn) return { ok: false, why: 'NO ISLAND VOLTAGE — Q0 cannot synchronise a dead bus. Energise the lab cluster first.' };
    if (this.swapped) return { ok: false, why: 'PHASE ROTATION MISMATCH — the incomer arrives as L1-L3-L2. Two poles closed onto 400 V: the inverters hit their current limit within milliseconds and Q0 tripped. (The lamps were chasing each other instead of going dark together.)' };
    if (Math.abs(dV) > SYNC_TOL.V_REL * this.grid.V) return { ok: false, why: `VOLTAGE MISMATCH ${dV > 0 ? '+' : ''}${dV.toFixed(0)} V — a reactive-current surge drove the island inverters into current limit; Q0 tripped.` };
    if (Math.abs(dF) > SYNC_TOL.F) return { ok: false, why: `SLIP TOO LARGE (${dF > 0 ? '+' : ''}${dF.toFixed(2)} Hz) — the island inverters could not be pulled into step; overcurrent trip.` };
    if (dF <= 0) return { ok: false, why: `ISLAND ${dF < 0 ? 'SLOWER THAN' : 'EXACTLY AT'} GRID FREQUENCY (${dF.toFixed(2)} Hz) — the grid would push power INTO the island inverters the moment Q0 closes. Reverse-power relay tripped. (Checklist: a hair ABOVE the grid.)` };
    if (Math.abs(this.phi) > SYNC_TOL.PHI) return { ok: false, why: `OUT OF PHASE by ${Math.abs(this.phi).toFixed(0)}° — ${(460 * Math.sin(Math.abs(this.phi) * Math.PI / 360)).toFixed(0)} V across each pole, inverters at current limit, Q0 tripped instantly. BANG.` };
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
  ctx.textAlign = 'left'; ctx.font = `${Math.round(h * 0.062)}px ${mono}`;
  const dV = sync.isl.V - sync.grid.V, dF = sync.isl.f - sync.grid.f;
  const rows = [
    ['', 'GRID', 'ISLAND'],
    ['V', `${sync.grid.V} V`, sync.islandOn ? `${sync.isl.V} V` : '— V'],   // (Δ values below also blank out on a dead island)
    ['f', `${sync.grid.f.toFixed(2)} Hz`, sync.islandOn ? `${sync.isl.f.toFixed(2)} Hz` : '— Hz'],
  ];
  rows.forEach((r, i) => {
    const y = h * 0.34 + i * h * 0.11;
    ctx.fillStyle = '#8ea3b8'; ctx.fillText(r[0], w * 0.56, y);
    ctx.fillStyle = i === 0 ? '#8ea3b8' : '#e6edf3'; ctx.fillText(r[1], w * 0.6, y); ctx.fillText(r[2], w * 0.8, y);
  });
  // plain differences, no pass/fail colouring: the checklist says what is acceptable
  ctx.fillStyle = '#c8d4e0'; ctx.fillText(sync.islandOn ? `ΔV ${dV >= 0 ? '+' : ''}${dV} V` : 'ΔV —', w * 0.56, h * 0.72);
  ctx.fillText(sync.islandOn ? `Δf ${dF >= 0 ? '+' : ''}${dF.toFixed(2)} Hz` : 'Δf —', w * 0.78, h * 0.72);
  ctx.fillStyle = sync.closed ? '#3ecf7a' : '#ffd24a'; ctx.fillText(sync.closed ? 'Q0 CLOSED — CONNECTED' : (sync.islandOn ? `Δφ ${sync.phi >= 0 ? '+' : ''}${sync.phi.toFixed(0)}°` : 'ISLAND BUS DEAD'), w * 0.56, h * 0.9);
}
