// The view out of the building. Instead of a picture glued to the glass, every pixel of a window traces the player's
// actual line of sight into a small outdoor scene: the city layers from cologne.js (cylinders around a reference eye),
// the Rhine as a reflecting plane, the wet terrace with its railing, street lamps and trees, and rain falling at several
// depths. Walking past the window therefore shows real parallax: the railing and trees slide across the city, the Dom
// stays put like something 600 m away, and the river's reflections shift with the viewing angle.
import * as THREE from 'three';
import { LAYERS, OUT, DESIGN, drawLayer, drawBolt } from './cologne.js';
import { canvasTex, redraw } from './textures.js';

const f = (x) => (Number.isFinite(x) ? x : 1e6).toFixed(3);
const R = Object.fromEntries(LAYERS.map((L) => [L.id, OUT.R + L.depth]));

const VS = /* glsl */ `
varying vec3 vW;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;

const FS = /* glsl */ `
uniform sampler2D tSkyN, tFarN, tMidN, tBriN, tSkyD, tFarD, tMidD, tBriD, tBolt;
uniform vec3 uO, uRt, uN;
uniform float uXC, uTime, uFlash, uBoltX, uMix, uRain, uEve, uLamps, uTrees;   // uMix: texture cross-fade · uEve: evening light
uniform vec3 uRoom;
varying vec3 vW;

#define K ${f(OUT.K)}
#define RREF ${f(OUT.R)}
#define EYE ${f(OUT.EYE)}
#define HZ ${f(DESIGN.HORIZON)}
#define X0 ${f(OUT.X0)}
#define XW ${f(OUT.X1 - OUT.X0)}
#define WATER ${f(OUT.WATER)}
#define RAIL ${f(OUT.R + OUT.RAIL)}
#define RFAR ${f(R.far)}
#define RMID ${f(R.mid)}
#define RBRI ${f(R.bridge)}
#define TREE 6.5

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) {
  vec2 i = floor(p), g = fract(p); g = g * g * (3.0 - 2.0 * g);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), g.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), g.x), g.y);
}
float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return v; }

// far intersection of the ray p + s·d with the vertical cylinder of radius r around the reference eye
float cylS(vec3 p, vec3 d, float r) {
  vec2 q = vec2(p.x, p.z - RREF), h = d.xz;
  float a = dot(h, h), b = dot(q, h), c = dot(q, q) - r * r, disc = b * b - a * c;
  return disc < 0.0 ? -1.0 : (-b + sqrt(disc)) / a;
}
float arcOf(vec3 h, float r) { return atan(h.x, RREF - h.z) * r; }           // metres along a cylinder
vec2 design(vec3 h, float r) { return vec2(uXC + atan(h.x, RREF - h.z) * K, HZ - (h.y - EYE) * K / r); }
vec4 samp(sampler2D a, sampler2D b, vec2 xy, float bias) {
  vec2 uv = vec2((xy.x - X0) / XW, 1.0 - xy.y / 768.0);
  vec4 c;                                                                    // uniform branches: one fetch except during a cross-fade
  if (uMix <= 0.0) c = texture2D(a, uv, bias);
  else if (uMix >= 1.0) c = texture2D(b, uv, bias);
  else c = mix(texture2D(a, uv, bias), texture2D(b, uv, bias), uMix);
  return c * step(0.0, uv.x) * step(uv.x, 1.0);
}
vec3 sky(vec3 d, float bias) {
  vec2 xy = vec2(uXC + atan(d.x, -d.z) * K, HZ - d.y / max(length(d.xz), 1e-4) * K);
  vec3 c = samp(tSkyN, tSkyD, xy, bias).rgb * (1.0 + uFlash * 3.0);
  if (uFlash > 0.0) {
    vec2 b = vec2((xy.x - uBoltX) / 300.0 + 0.5, (xy.y - 30.0) / 560.0);
    vec4 bc = texture2D(tBolt, vec2(b.x, 1.0 - b.y), 0.0);
    c += bc.rgb * bc.a * step(0.0, b.x) * step(b.x, 1.0) * step(0.0, b.y) * step(b.y, 1.0) * uFlash * 5.0;
  }
  return c;
}
// city layers in front of whatever is at distance sMax along the ray
vec3 city(vec3 p, vec3 d, vec3 c, float sMax, float bias) {
  float lit = 1.0 + uFlash * 0.6, s; vec4 L;
  s = cylS(p, d, RFAR); L = samp(tFarN, tFarD, design(p + s * d, RFAR), bias); c = mix(c, L.rgb * lit, L.a * step(0.0, s) * step(s, sMax));
  s = cylS(p, d, RMID); L = samp(tMidN, tMidD, design(p + s * d, RMID), bias); c = mix(c, L.rgb * lit, L.a * step(0.0, s) * step(s, sMax));
  s = cylS(p, d, RBRI); L = samp(tBriN, tBriD, design(p + s * d, RBRI), bias); c = mix(c, L.rgb * lit, L.a * step(0.0, s) * step(s, sMax));
  return c;
}
float band(float y, float a, float b, float w) { return smoothstep(a - w, a, y) * (1.0 - smoothstep(b, b + w, y)); }
// repeated vertical bars of half-width hw every period; fades to the average coverage where they would alias
float bars(float x, float period, float hw, float w) {
  float dd = abs(fract(x / period + 0.5) - 0.5) * period;
  return mix(1.0 - smoothstep(hw - w * 0.5, hw + w * 0.5, dd), 2.0 * hw / period, smoothstep(hw, period * 0.5, w));
}
float rain(vec3 p, vec3 d, float r, float seed, float sMax) {
  float s = cylS(p, d, r); vec3 h = p + s * d;
  vec2 q = vec2(arcOf(h, r) * 9.0 + h.y * 1.2, h.y * 0.5 + uTime * 4.5);   // 11 cm lanes, 2 m cells, falling 9 m/s, wind-slanted
  q.y += hash(vec2(floor(q.x), seed * 3.1));                               // every lane starts at its own height (no rows)
  vec2 id = floor(q), g = fract(q);
  float fx = fwidth(q.x) + 1e-4;
  float line = 1.0 - smoothstep(0.02, 0.02 + fx * 1.5, abs(g.x - 0.2 - 0.6 * hash(id.yx + seed * 1.7)));
  float seg = smoothstep(0.0, 0.03, g.y) * (1.0 - smoothstep(0.07, 0.13, g.y));
  return line * seg * step(hash(id + seed), 0.4) * step(0.0, s) * step(s, sMax) / (1.0 + fx * 4.0);
}

void main() {
  vec3 cw = cameraPosition - uO, dw = vW - cameraPosition;
  vec3 P = vec3(dot(cw, uRt), cameraPosition.y, dot(cw, uN));                 // outside frame: x right, y up, z towards the room
  vec3 d = vec3(dot(dw, uRt), dw.y, dot(dw, uN));
  vec3 nd = normalize(d);
  vec3 col; float sOpq = 1e9;
  float sG = d.y < 0.0 ? -P.y / d.y : -1.0;
  vec3 g = P + sG * d;
  if (sG > 0.0 && length(vec2(g.x, g.z - RREF)) < RAIL) {
    // wet terrace: paving slabs, puddles, blurry reflections (sharp in the puddles, rippled by the rain)
    sOpq = sG; vec2 p = g.xz;
    vec2 t = p / vec2(0.6, 0.4); t.x += 0.5 * mod(floor(t.y), 2.0);
    vec2 ft = abs(fract(t) - 0.5) * vec2(0.6, 0.4), fw = fwidth(p) + 1e-4;
    float joint = max(1.0 - smoothstep(0.004, 0.004 + fw.x, 0.3 - ft.x), 1.0 - smoothstep(0.004, 0.004 + fw.y, 0.2 - ft.y));
    float puddle = smoothstep(0.5, 0.56, fbm(p * 0.5 + 3.7));
    vec2 rip = (vec2(vnoise(p * 16.0 + uTime * 3.1), vnoise(p * 16.0 - uTime * 2.7)) - 0.5) * 0.06 * uRain;
    vec3 r = vec3(d.x + rip.x * length(d), -d.y, d.z + rip.y * length(d));
    float bias = mix(4.0, 0.5, puddle);
    vec3 rc = city(g, r, sky(r, bias), 1e9, bias);
    vec3 base = mix(vec3(0.010, 0.011, 0.014), vec3(0.15, 0.13, 0.12), uEve) * (0.7 + 0.6 * fbm(p * 2.0)) * (1.0 - 0.45 * joint * (1.0 - puddle));
    float F = 0.03 + 0.97 * pow(1.0 - clamp(-nd.y, 0.0, 1.0), 5.0);
    col = mix(base, rc, clamp(F * mix(0.45, 1.0, puddle) + 0.2 * puddle, 0.0, 1.0)) * (1.0 + uFlash * 0.8);
  } else if (d.y < 0.0) {
    // the Rhine: reflections of sky and city, stretched into vertical streaks by the waves
    sOpq = (WATER - P.y) / d.y;
    vec3 w = P + sOpq * d; vec2 p = vec2(w.x * 0.3, w.z * 1.2);
    float fade = 1.0 / (1.0 + sOpq * length(d) / 250.0);                    // calmer look (less aliasing) far away
    float n1 = vnoise(p + vec2(uTime * 0.25, uTime * 0.6)) - 0.5, n2 = vnoise(p * 2.3 - vec2(uTime * 0.4, uTime * 0.3)) - 0.5;
    vec3 r = vec3(d.x + (n1 * 0.6 + n2 * 0.4) * 0.012 * length(d.xz) * fade, -d.y * (1.0 + (n1 + n2) * 1.1 * fade), d.z);
    vec3 rc = city(w, r, sky(r, 1.0), 1e9, 1.0);
    float F = 0.02 + 0.98 * pow(1.0 - clamp(-nd.y, 0.0, 1.0), 5.0);
    col = mix(mix(vec3(0.006, 0.009, 0.013), vec3(0.08, 0.07, 0.075), uEve), rc, clamp(F * 1.1, 0.0, 0.95));
    col = mix(col, sky(vec3(d.x, 0.0, d.z), 2.0), (1.0 - exp(-sOpq * length(d) / 900.0)) * 0.5);   // haze
  } else col = sky(d, 0.0);
  col = city(P, d, col, sOpq, 0.0);

  // rain behind the railing
  vec3 rainCol = vec3(0.55, 0.62, 0.75) * (0.09 + uFlash * 0.6) * uRain;
  if (uRain > 0.0) col += rainCol * (rain(P, d, 28.0, 1.0, sOpq) * 0.6 + rain(P, d, 12.0, 2.0, sOpq) * 0.8);

  // railing on the terrace edge, and street lamps (dark in the blackout, glowing once the grid is back)
  float s = cylS(P, d, RAIL); vec3 h = P + s * d;
  float a = arcOf(h, RAIL), y = h.y; vec2 fw = fwidth(vec2(a, y)) + 1e-4;
  if (s > 0.0 && s < sOpq && h.y > -0.05) {
    float rail = max(max(band(y, 0.98, 1.05, fw.y), band(y, 0.52, 0.55, fw.y)), band(y, -0.05, 0.14, fw.y));
    rail = max(rail, bars(a, 1.6, 0.03, fw.x) * band(y, 0.0, 1.05, fw.y));
    rail = max(rail, bars(a, 0.13, 0.008, fw.x) * band(y, 0.14, 0.98, fw.y));
    float la = a - 2.4 - 16.0 * floor((a - 2.4) / 16.0 + 0.5);
    float pole = (1.0 - smoothstep(0.06, 0.06 + fw.x, abs(la))) * band(y, 0.0, 4.6, fw.y);
    pole = max(pole, band(la, 0.0, 0.75, fw.x) * band(y, 4.5, 4.57, fw.y));
    vec2 hd = (vec2(la, y) - vec2(0.72, 4.46)) / vec2(0.34, 0.09);
    float head = 1.0 - smoothstep(1.0 - fw.x * 4.0, 1.0, length(hd));
    vec3 steel = mix(vec3(0.014, 0.016, 0.02), vec3(0.07, 0.06, 0.06), uEve) * (1.0 + uFlash * 1.5);
    steel += vec3(0.25, 0.16, 0.1) * uEve * band(y, 1.03, 1.05, fw.y);    // evening light catching the handrail
    col = mix(col, steel, max(rail, pole));
    col = mix(col, mix(steel, vec3(3.0, 2.2, 1.3), uLamps), head);
    col += vec3(1.0, 0.7, 0.4) * uLamps * 0.35 * exp(-dot(hd * vec2(0.34, 0.09), hd * vec2(0.34, 0.09)) * 2.5);   // lamp glow
  }
  if (uRain > 0.0) col += rainCol * rain(P, d, 7.2, 3.0, sOpq);

  // plane trees on the terrace, swaying in the wind
  s = cylS(P, d, TREE); h = P + s * d;
  a = arcOf(h, TREE);
  float fx = fwidth(a) + 1e-4;
  if (uTrees > 0.5 && s > 0.0 && s < sOpq && h.y > -0.05) {
    for (int i = 0; i < 2; i++) {
      vec2 q = vec2(a - (i == 0 ? -4.0 : 5.6), h.y);
      if (abs(q.x) > 3.2 || q.y > 7.0) continue;                            // cheap bounds test before the noise
      q.x += sin(uTime * (1.3 + float(i) * 0.4) + q.y * 0.6) * 0.04 * max(q.y - 2.0, 0.0) * (0.4 + uRain);
      float trunk = (1.0 - smoothstep(0.16 - q.y * 0.02, 0.16 - q.y * 0.02 + fx, abs(q.x + 0.12 * sin(q.y * 1.1)))) * step(q.y, 3.6);
      vec2 c = (q - vec2(0.0, 4.7)) / vec2(2.4, 1.9);
      float leaf = fbm(q * 2.4 + float(i) * 7.0);
      float canopy = smoothstep(0.02, -0.02, length(c) - 0.72 - 0.5 * (leaf - 0.5)) * smoothstep(0.32, 0.4, fbm(q * 5.5 + 3.0) + (1.0 - length(c)) * 0.35);
      vec3 tc = mix(vec3(0.006, 0.008, 0.01), vec3(0.035, 0.04, 0.025), uEve) * (0.7 + 0.6 * leaf) * (1.0 + uFlash * 1.2);
      tc += vec3(0.3, 0.18, 0.08) * uEve * smoothstep(0.3, 0.9, -c.x + c.y * 0.5) * canopy;   // warm rim from the low sun (west, on the left)
      col = mix(col, tc, max(trunk, canopy));
    }
  }
  if (uRain > 0.0) col += rainCol * rain(P, d, 5.2, 4.0, sOpq);

  // the pane itself reflects the room, more so at grazing angles (Fresnel), and lets a little less through
  if (P.z > 0.0) {                                                          // (not once the camera has stepped outside)
    float Fg = 0.04 + 0.96 * pow(1.0 - clamp(-nd.z, 0.0, 1.0), 5.0);
    col = col * (1.0 - Fg) + uRoom * Fg;
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

// what each stage looks like outside: evening light, street lamps, rain, and how long the cross-fade into it takes
const MODES = {
  night: { eve: 0, lamps: 0, rain: 1, fade: 1 },
  restored: { eve: 0, lamps: 1, rain: 0.7, fade: 5 },      // the operator re-energises the city feeder by feeder
  evening: { eve: 1, lamps: 1, rain: 0, fade: 9 },         // the storm front passes, the sun sets behind the old town
};

export class OutsideView {
  /** scale < 1 renders the city layers at lower resolution (touch devices) */
  constructor({ scale = 1 } = {}) {
    this.scale = scale;
    this.mode = 'night';
    this.sets = { night: this.makeSet('night') };
    this.cur = 'night'; this.next = null;
    this.boltTex = canvasTex(256, 512, (ctx, w, h) => drawBolt(ctx, w, h, 1));
    const n = this.sets.night;
    this.u = {
      tSkyN: { value: n.sky }, tFarN: { value: n.far }, tMidN: { value: n.mid }, tBriN: { value: n.bridge },
      tSkyD: { value: n.sky }, tFarD: { value: n.far }, tMidD: { value: n.mid }, tBriD: { value: n.bridge },
      tBolt: { value: this.boltTex },
      uTime: { value: 0 }, uFlash: { value: 0 }, uBoltX: { value: 1000 }, uMix: { value: 0 }, uRain: { value: 1 },
      uEve: { value: 0 }, uLamps: { value: 0 },
      uRoom: { value: new THREE.Color(0.02, 0.025, 0.03) },          // what the glass reflects (set from the room lighting)
    };
  }
  get night() { return this.sets.night; }

  makeSet(mode) {
    const set = {};
    for (const L of LAYERS) set[L.id] = canvasTex(Math.round(L.w * this.scale), Math.round(L.h * this.scale), (ctx, w, h) => drawLayer(ctx, w, h, mode, L));
    return set;
  }

  /** A window: `origin` = centre of the glass at floor height, `right` and `normal` (towards the viewer) unit vectors. */
  material({ origin, right, normal, xCenter = 1024 }, { trees = true } = {}) {
    return new THREE.ShaderMaterial({
      uniforms: { ...this.u, uO: { value: origin }, uRt: { value: right }, uN: { value: normal }, uXC: { value: xCenter }, uTrees: { value: trees ? 1 : 0 } },
      vertexShader: VS, fragmentShader: FS, fog: false,
    });
  }

  /** Draw a stage's layers ahead of time; returns the new textures (upload them with renderer.initTexture). */
  prepare(mode) {
    if (this.sets[mode]) return [];
    this.sets[mode] = this.makeSet(mode);
    return Object.values(this.sets[mode]);
  }

  /** Cross-fade to a stage ('night' | 'restored' | 'evening'); instant = true e.g. when a saved game is restored. */
  setMode(mode, instant = false) {
    if (mode === this.mode) { if (instant && this.next) this.finish(); return; }
    if (this.next) this.finish();                                         // one cross-fade at a time
    this.prepare(mode);
    this.mode = mode; this.next = mode;
    const d = this.sets[mode], u = this.u;
    u.tSkyD.value = d.sky; u.tFarD.value = d.far; u.tMidD.value = d.mid; u.tBriD.value = d.bridge;
    u.uMix.value = 0;
    if (instant) this.finish();
  }
  /** complete the running cross-fade: the new set becomes current, the old one is freed */
  finish() {
    const u = this.u, m = MODES[this.next];
    u.uEve.value = m.eve; u.uLamps.value = m.lamps; u.uRain.value = m.rain;
    const old = this.sets[this.cur];
    this.cur = this.next; this.next = null;
    const d = this.sets[this.cur];
    u.tSkyN.value = d.sky; u.tFarN.value = d.far; u.tMidN.value = d.mid; u.tBriN.value = d.bridge;
    u.uMix.value = 0;
    if (old && old !== d) {
      for (const t of Object.values(old)) { t.dispose(); t.image.width = t.image.height = 0; }   // free GPU and canvas memory
      for (const k in this.sets) if (this.sets[k] === old) delete this.sets[k];
    }
  }

  /** New lightning strike: a fresh bolt shape somewhere over the city. */
  strike() {
    this.u.uBoltX.value = 250 + Math.random() * 1600;
    redraw(this.boltTex, (ctx, w, h) => drawBolt(ctx, w, h, (Math.random() * 1e9) | 0));
  }

  update(dt, flash) {
    const u = this.u;
    u.uTime.value = (u.uTime.value + dt) % 3600;                             // wraps once an hour (hash precision)
    u.uFlash.value = flash;
    if (!this.next) return;
    const m = MODES[this.next], k = Math.min(1, dt / m.fade);
    u.uMix.value = Math.min(1, u.uMix.value + k);
    u.uEve.value += (m.eve - u.uEve.value) * Math.min(1, k * 3);
    u.uLamps.value += (m.lamps - u.uLamps.value) * Math.min(1, k * 4);
    u.uRain.value = Math.max(m.rain, u.uRain.value - dt / (m.fade * 0.4));   // the rain eases first
    if (u.uMix.value >= 1) this.finish();
  }
}
