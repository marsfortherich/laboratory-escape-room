// Headless tests for the pure simulation modules (no browser needed): `npm test`
import assert from 'node:assert/strict';
import { LabSim, C } from '../js/labsim.js';
import { makeDay, simHour, baseline, benchmark, score, CFG } from '../js/gridgame.js';
import { makePuzzle, solve, CIRCUITS } from '../js/puzzle.js';
import { SyncSim } from '../js/sync.js';

let failed = 0;
const test = (name, fn) => {
  try { fn(); console.log('  ✔', name); } catch (e) { failed++; console.log('  ✘', name, '\n   ', e.message); }
};
const run = (sim, sec, dt = 0.05) => { for (let i = 0; i < sec / dt; i++) sim.tick(dt); };
const P = makePuzzle(0);

console.log('Puzzles');
test('every circuit has exactly one solution', () => CIRCUITS.forEach((c, i) => assert.equal(solve(c).length, 1, `circuit ${i}`)));
test('classic room matches the README walkthrough', () => {
  assert.equal(P.year, 1987); assert.equal(P.drawerCode, '4700'); assert.equal(P.lamps, 6);
  assert.equal(P.userPw, 'yadaraf'); assert.equal(P.rootPw, 'GRID150H2'); assert.equal(P.boardSolution, '1001');
});
test('daily rooms are deterministic and valid', () => {
  for (let s = 20260101; s < 20260140; s++) {
    const a = makePuzzle(s), b = makePuzzle(s);
    assert.deepEqual(a.rootPw, b.rootPw);
    assert.match(a.drawerCode, /^\d{4}$/);
    assert.ok(a.lamps >= 4 && a.lamps <= 8);
    assert.equal(a.binStr.length, 8);
  }
});

console.log('Lab simulation');
test('reference solution opens the door', () => {
  const sim = new LabSim(P);
  const A = (a) => sim.action(a);
  ['pin:1', 'pin:9', 'pin:8', 'pin:7', 'pin:OK', 'sun:1', 'invpv:1', 'invpvph:0',
    'invbat:1', 'batmode:charge', 'invbatph:0', 'elz:1', 'elzph:0'].forEach(A);
  run(sim, 30);
  assert.equal(sim.s.trip.some(Boolean), false, 'no trip while charging (5.2 kW ≤ 5.24 kW)');
  assert.ok(sim.s.bat.soc > 0.5, `battery charged (${sim.s.bat.soc.toFixed(2)})`);
  assert.ok(sim.s.h2.level > 0.6, `tank filled (${sim.s.h2.level.toFixed(2)})`);
  A('wheel:1');
  ['elz:0', 'batmode:discharge', 'invbatph:1', 'valve:1', 'fc:1', 'invfc:1', 'invfcph:2'].forEach(A);
  run(sim, 4);                                  // fuel cell warm-up
  assert.ok(sim.doorReady(), `headroom ${sim.f.head.map((h) => h.toFixed(2))} fc ${JSON.stringify(sim.s.fc)} h2 ${sim.s.h2.level.toFixed(2)} ev ${sim.events.map((e) => e.msg).slice(-3).join(' | ')}`);
  A('door:open');
  run(sim, 6);
  assert.equal(sim.s.door.state, 'open');
});
test('valve needs the handwheel', () => {
  const sim = new LabSim(P);
  sim.action('valve:1');
  assert.equal(sim.s.h2.valve, false);
});
test('a load without a source on the same phase does not run', () => {
  const sim = new LabSim(P);
  Object.assign(sim.s.sun, { unlocked: true, on: true });
  ['invpv:1', 'invpvph:0', 'elz:1', 'elzph:1'].forEach((a) => sim.action(a));
  run(sim, 2);
  assert.equal(sim.f.elz, 0);
  assert.equal(sim.s.h2.level, 0);
});
test('overload trips, reset is refused while still overloaded', () => {
  const sim = new LabSim(P);
  Object.assign(sim.s.h2, { level: 0.9, valve: true, wheel: true });
  Object.assign(sim.s.fc, { running: true, rt: 10 });
  sim.s.bat.soc = 0.3;
  ['invfc:1', 'invfcph:1', 'elz:1', 'elzph:1', 'invbat:1', 'batmode:charge', 'invbatph:1'].forEach((a) => sim.action(a));
  run(sim, 0.2);
  assert.equal(sim.s.trip[1], true, 'L2 tripped (5.2 kW demand > 3.4 kW)');
  sim.action('reset:1');
  assert.equal(sim.s.trip[1], true);
  sim.action('batmode:idle'); sim.action('reset:1');
  assert.equal(sim.s.trip[1], false);
});
test('door refuses to start single-phasing', () => {
  const sim = new LabSim(P);
  Object.assign(sim.s.sun, { unlocked: true, on: true });
  ['invpv:1', 'invpvph:0', 'door:open'].forEach((a) => sim.action(a));
  assert.equal(sim.s.door.state, 'locked');
});
test('energy is conserved: storage drains by delivered power (×360 time-lapse)', () => {
  const sim = new LabSim(P);
  sim.s.bat.soc = 0.8;
  ['invbat:1', 'batmode:discharge', 'invbatph:0'].forEach((a) => sim.action(a));
  run(sim, 10, 0.01);                           // 10 s = 1 lab hour at only the 0.2 kW aux load
  const kWh = (0.8 - sim.s.bat.soc) * C.BAT_KWH;
  assert.ok(Math.abs(kWh - C.AUX / C.BAT_EFF) < 0.01, `drew ${kWh.toFixed(3)} kWh for 0.2 kW·h`);
});
test('hydrogen round trip returns about a third', () => {
  const inKWh = C.ELZ_P, kg = inKWh / C.ELZ_KWH_KG, outKWh = kg * C.FC_KWH_KG;
  assert.ok(Math.abs(outKWh / inKWh - 0.327) < 0.01);
});

console.log('Synchronisation');
test('dark-lamp method: lamps dark together only with the right rotation', () => {
  const s = new SyncSim(P);
  s.isl = { V: P.gridV, f: P.gridF, seq: 'CW' }; s.phi = 0;
  assert.ok(s.lamps().every((l) => l < 0.01));
  s.isl.seq = 'CCW';
  assert.ok(s.lamps().some((l) => l > 0.5), 'wrong rotation → lamps chase');
});
test('closing rules', () => {
  const s = new SyncSim(P);
  s.isl = { V: P.gridV, f: P.gridF + 0.04, seq: 'CW' }; s.phi = 5;
  assert.equal(s.check().ok, true);
  s.phi = 60; assert.equal(s.check().ok, false);
  s.phi = 0; s.isl.seq = 'CCW'; assert.equal(s.check().ok, false);
});

console.log('Grid dispatch');
test('energy balance and storage bookkeeping', () => {
  const d = makeDay(42);
  const r = simHour(d, 12, { soc: 0.5, h2: 20 }, { bat: -200, elz: 100, fc: 0, curt: 0 });
  assert.ok(Math.abs(r.pv + r.fc + r.bat - r.load - r.elz - r.net) < 1e-6);
  assert.ok(Math.abs(r.soc - (0.5 + 200 * CFG.BAT_EFF / CFG.BAT_E)) < 1e-9);
  assert.ok(Math.abs(r.h2 - (20 + 100 / CFG.ELZ_KWH_KG)) < 1e-9);
});
test('minimum loads are respected', () => {
  const d = makeDay(42);
  const r = simHour(d, 12, { soc: 0.5, h2: 20 }, { bat: 0, elz: 5, fc: 5, curt: 0 });
  assert.equal(r.elz, CFG.ELZ_MIN); assert.equal(r.fc, CFG.FC_MIN);
});
test('grid limit is never exceeded', () => {
  for (let seed = 1; seed < 30; seed++) {
    const d = makeDay(seed);
    for (let h = 0; h < 24; h++) {
      assert.ok(simHour(d, h, { soc: 0.5, h2: 50 }, { bat: 250, elz: 0, fc: 150, curt: 0 }).net <= CFG.LIM + 1e-6);
      assert.ok(simHour(d, h, { soc: 0.5, h2: 50 }, { bat: -250, elz: 200, fc: 0, curt: 100 }).net >= -CFG.LIM - 1e-6);
    }
  }
});
test('benchmark is feasible, beats baseline, and a sensible strategy can reach the permit', () => {
  let pass = 0;
  for (let seed = 1; seed <= 40; seed++) {
    const d = makeDay(seed);
    const base = baseline(d), bench = benchmark(d);
    assert.equal(bench.plan.length, 24);
    assert.ok(bench.value > base);
    const elzEx = d.h2Price / 55 * 1000, fcIm = d.h2Price / 18 * 1000 - 40;
    const sorted = [...d.priceF].sort((a, b) => a - b);
    let st = { soc: CFG.SOC0, h2: CFG.H2_0 }, cash = 0;
    for (let h = 0; h < 24; h++) {
      const p = d.priceF[h], s = { bat: 0, elz: 0, fc: 0, curt: 0 }, sur = d.pvF[h] - d.load[h];
      if (p < 0) Object.assign(s, { curt: 100, bat: -250, elz: 200 });
      else { if (sur > 0 && p < elzEx) s.elz = Math.min(200, Math.max(20, sur)); if (p <= sorted[6]) s.bat = -250; if (p >= sorted[19]) s.bat = 250; if (p > fcIm) s.fc = 150; }
      const r = simHour(d, h, st, s); cash += r.eur; st = r;
    }
    if ((score(d, cash, st).total - base) / (bench.value - base) >= CFG.WIN_RATIO) pass++;
  }
  assert.ok(pass >= 36, `break-even strategy passes on ${pass}/40 days`);
});

if (failed) { console.log(`\n${failed} test(s) failed`); process.exit(1); }
console.log('\nall tests passed');
