// Puzzle parameters. Seed 0 = the classic room (matches the README walkthrough);
// any other seed produces a "daily room" where every code and clue changes.

export const CIRCUITS = [
  // Each circuit: OUT = AND of all terms. Term: {g: gate, a, b} (inputs may be prefixed with '!' for an inversion bubble)
  { terms: [{ g: 'AND', a: 'A', b: '!B' }, { g: 'XOR', a: 'C', b: 'D' }, { g: 'OR', a: 'B', b: 'D' }] },   // 1001
  { terms: [{ g: 'XOR', a: 'A', b: 'B' }, { g: 'AND', a: 'B', b: 'D' }, { g: 'NOT', a: 'C' }] },          // 0101
  { terms: [{ g: 'AND', a: 'A', b: 'C' }, { g: 'NOR', a: 'B', b: 'D' }] },                                // 1010
  { terms: [{ g: 'NAND', a: 'B', b: 'C' }, { g: 'NOR', a: 'A', b: 'D' }, { g: 'XOR', a: 'B', b: 'D' }] },    // 0100
  { terms: [{ g: 'XOR', a: '!A', b: 'C' }, { g: 'NAND', a: 'B', b: 'C' }, { g: 'AND', a: 'A', b: 'D' }] },   // 1011
  { terms: [{ g: 'XOR', a: 'B', b: 'D' }, { g: 'NOR', a: 'A', b: 'D' }, { g: 'NAND', a: '!C', b: '!D' }] },  // 0110
  { terms: [{ g: 'AND', a: 'A', b: 'D' }, { g: 'NOR', a: 'C', b: '!D' }, { g: 'XOR', a: 'B', b: 'C' }] },    // 1101
  { terms: [{ g: 'AND', a: 'C', b: 'D' }, { g: 'XOR', a: 'A', b: 'C' }, { g: 'NOR', a: 'A', b: 'B' }] },     // 0011
];

const bit = (bits, s) => (s[0] === '!' ? 1 - bits['ABCD'.indexOf(s[1])] : bits['ABCD'.indexOf(s)]);
export function evalGate(t, bits) {
  const a = bit(bits, t.a), b = t.b ? bit(bits, t.b) : 0;
  switch (t.g) {
    case 'AND': return a & b; case 'NAND': return 1 - (a & b);
    case 'OR': return a | b; case 'NOR': return 1 - (a | b);
    case 'XOR': return a ^ b; case 'NOT': return 1 - a;
  }
  return 0;
}
export const evalCircuit = (c, bits) => c.terms.every((t) => evalGate(t, bits) === 1) ? 1 : 0;
/** All 4-bit inputs (as 'ABCD' strings) for which the circuit outputs 1. */
export function solve(c) {
  const out = [];
  for (let i = 0; i < 16; i++) {
    const bits = [(i >> 3) & 1, (i >> 2) & 1, (i >> 1) & 1, i & 1];
    if (evalCircuit(c, bits)) out.push(bits.join(''));
  }
  return out;
}

function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

const CATS = ['Faraday', 'Tesla', 'Kelvin', 'Ampere', 'Joule', 'Hertz', 'Ohm', 'Watt'];
const F1 = ['GRID', 'VOLT', 'WATT', 'AMPS', 'OHMS'];
const F3 = ['H2', 'PV', 'AC', 'DC'];
const E12 = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
export const RES_COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
export const RES_MULT = ['×1', '×10', '×100', '×1 000', '×10 000', '×100 000', '×1 M', '×10 M', '×100 M', '×1 G'];
export const RES_HEX = ['#111', '#6b3a1e', '#d0231f', '#f07f16', '#f5d10f', '#2c9a3a', '#2455c9', '#7b3fb0', '#8a8a8a', '#f4f4f4'];

export function makePuzzle(seed = 0) {
  let p;
  if (!seed) {
    p = { seed: 0, year: 1987, cat: 'Faraday', lamps: 6, res: 47, resMult: 2, bin: 150, circuit: 0, f1: 'GRID', f3: 'H2', swapped: true };
  } else {
    const r = rng(Math.imul(seed ^ 0x9e3779b9, 2654435761) ^ (seed >>> 16));
    const pick = (a) => a[Math.floor(r() * a.length)];
    p = {
      seed, year: 1975 + Math.floor(r() * 30), cat: pick(CATS), lamps: 4 + Math.floor(r() * 5),
      res: pick(E12), resMult: 2, bin: 129 + Math.floor(r() * 126), circuit: Math.floor(r() * CIRCUITS.length), f1: pick(F1), f3: pick(F3),
    };
    // drawn last so the earlier values of a daily room stay the same
    p.swapped = r() < 0.5;                 // was the incomer re-terminated wrongly? (the lamps tell)
    if (r() < 0.3) p.resMult = 1;          // some days the multiplier band is brown (×10): e.g. 470 Ω → 0470
  }
  p.drawerCode = String(p.res * 10 ** p.resMult).padStart(4, '0');
  p.bands = [Math.floor(p.res / 10), p.res % 10, p.resMult];
  p.binStr = p.bin.toString(2).padStart(8, '0');
  p.circuitDef = CIRCUITS[p.circuit];
  p.boardSolution = solve(p.circuitDef)[0];
  p.userPw = p.cat.toLowerCase().split('').reverse().join('');
  p.rootPw = `${p.f1}${p.bin}${p.f3}`;
  p.gridV = seed ? 228 + (seed % 6) : 231;
  p.gridF = seed ? Math.round((49.97 + (seed % 9) / 100) * 100) / 100 : 50.03;
  return p;
}
