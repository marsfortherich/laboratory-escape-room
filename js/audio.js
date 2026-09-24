// Procedural sound: everything is synthesized with WebAudio (no asset files).
// Spatial loops (bus hum, fuel-cell fan, electrolyzer bubbles, sun-sim ballast) follow the camera.

export class Sound {
  constructor() {
    this.ctx = null;
    this.volume = 0.7;
    this.loops = {};
  }

  /** Must be called from a user gesture (browsers block audio before that). */
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    try {
      const ctx = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = ctx.createGain(); this.master.gain.value = this.volume; this.master.connect(ctx.destination);
      // shared noise buffer
      const len = ctx.sampleRate * 2;
      this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = this.noise.getChannelData(0);
      let b = 0;
      for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = (b + 0.02 * w) / 1.02; d[i] = i % 2 ? w : b * 3.5; }
      this.buildLoops();
    } catch { this.ctx = null; }
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }

  noiseSrc() { const s = this.ctx.createBufferSource(); s.buffer = this.noise; s.loop = true; return s; }

  panner([x, y, z]) {
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 1.2; p.rolloffFactor = 1.4;
    if (p.positionX) { p.positionX.value = x; p.positionY.value = y; p.positionZ.value = z; } else p.setPosition(x, y, z);
    p.connect(this.master);
    return p;
  }

  buildLoops() {
    const ctx = this.ctx;
    // room tone (non-spatial)
    const room = this.noiseSrc(), rf = ctx.createBiquadFilter(), rg = ctx.createGain();
    rf.type = 'lowpass'; rf.frequency.value = 260; rg.gain.value = 0.035;
    room.connect(rf).connect(rg).connect(this.master); room.start();
    this.loops.room = rg;

    // 50 Hz transformer hum at the main bus: fundamental + harmonics
    const humG = ctx.createGain(); humG.gain.value = 0; humG.connect(this.panner([5.6, 1.2, -2.9]));
    for (const [f, a] of [[50, 0.6], [100, 1], [150, 0.35], [300, 0.12]]) {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.value = f; g.gain.value = a;
      o.connect(g).connect(humG); o.start();
    }
    this.loops.hum = humG;

    // fuel cell blower
    const fan = this.noiseSrc(), ff = ctx.createBiquadFilter(), fg = ctx.createGain();
    ff.type = 'bandpass'; ff.frequency.value = 700; ff.Q.value = 0.8; fg.gain.value = 0;
    fan.connect(ff).connect(fg).connect(this.panner([3.1, 0.8, -4.2])); fan.start();
    this.loops.fan = fg;

    // electrolyzer bubbling: resonant noise, gated randomly in update()
    const bub = this.noiseSrc(), bf = ctx.createBiquadFilter(), bg = ctx.createGain();
    bf.type = 'bandpass'; bf.frequency.value = 1400; bf.Q.value = 9; bg.gain.value = 0;
    bub.connect(bf).connect(bg).connect(this.panner([-4.7, 1.0, -4.1])); bub.start();
    this.loops.bub = bg; this.loops.bubF = bf;

    // sun simulator ballast buzz
    const ball = ctx.createOscillator(), blf = ctx.createBiquadFilter(), blg = ctx.createGain();
    ball.type = 'sawtooth'; ball.frequency.value = 100; blf.type = 'lowpass'; blf.frequency.value = 500; blg.gain.value = 0;
    ball.connect(blf).connect(blg).connect(this.panner([-4.95, 2.9, 0])); ball.start();
    this.loops.ballast = blg;

    // door drive motor
    const mot = ctx.createOscillator(), mf = ctx.createBiquadFilter(), mg = ctx.createGain();
    mot.type = 'sawtooth'; mot.frequency.value = 40; mf.type = 'lowpass'; mf.frequency.value = 380; mg.gain.value = 0;
    mot.connect(mf).connect(mg).connect(this.panner([0, 2.2, -4.9])); mot.start();
    this.loops.motor = mg; this.loops.motorOsc = mot;

    // the storm: rain hiss + gusting wind everywhere (muffled indoors), and rain drumming on the control-room window
    const rain = this.noiseSrc(), rnf = ctx.createBiquadFilter(), rng = ctx.createGain();
    rnf.type = 'lowpass'; rnf.frequency.value = 1800; rng.gain.value = 0;
    rain.connect(rnf).connect(rng).connect(this.master); rain.start();
    const wind = this.noiseSrc(), wf = ctx.createBiquadFilter(), wg = ctx.createGain(), gust = ctx.createOscillator(), gd = ctx.createGain();
    wf.type = 'bandpass'; wf.frequency.value = 320; wf.Q.value = 0.7; wg.gain.value = 0;
    gust.frequency.value = 0.09; gd.gain.value = 140; gust.connect(gd).connect(wf.frequency); gust.start();
    wind.connect(wf).connect(wg).connect(this.master); wind.start(0, 0.7);
    const pat = this.noiseSrc(), pf = ctx.createBiquadFilter(), pg = ctx.createGain();
    pf.type = 'highpass'; pf.frequency.value = 2400; pg.gain.value = 0;
    const win = this.panner([-2.3, 2.0, -13.0]); win.refDistance = 1.5; win.rolloffFactor = 1.2;
    pat.connect(pf).connect(pg).connect(win); pat.start(0, 1.3);
    this.loops.rain = rng; this.loops.rainF = rnf; this.loops.wind = wg; this.loops.pat = pg;

    // the cat purrs in its sleep — only audible from close by (a way to find him)
    const purr = this.noiseSrc(), puf = ctx.createBiquadFilter(), pam = ctx.createGain(), plfo = ctx.createOscillator(), pdep = ctx.createGain(), pug = ctx.createGain();
    puf.type = 'lowpass'; puf.frequency.value = 260; pam.gain.value = 0.5; plfo.frequency.value = 24; pdep.gain.value = 0.5;
    plfo.connect(pdep).connect(pam.gain); plfo.start();
    const cp = this.panner([5.8, 1.7, 0.2]); cp.refDistance = 0.4; cp.rolloffFactor = 3.5;
    pug.gain.value = 0; purr.connect(puf).connect(pam).connect(pug).connect(cp); purr.start(0, 0.4);
    this.loops.purr = pug;

    // tension: a low, slowly beating drone under the blackout — it resolves when Q0 closes
    const drone = ctx.createGain(), dlp = ctx.createBiquadFilter();
    dlp.type = 'lowpass'; dlp.frequency.value = 220; drone.gain.value = 0; dlp.connect(drone).connect(this.master);
    for (const f of [55, 58.3, 82.4]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; const g = ctx.createGain(); g.gain.value = f > 80 ? 0.25 : 0.5; o.connect(g).connect(dlp); o.start(); }
    this.loops.drone = drone;

    // evening after the storm: distant traffic returning (birds and bells are one-shots)
    const tr = this.noiseSrc(), tf = ctx.createBiquadFilter(), tg = ctx.createGain();
    tf.type = 'lowpass'; tf.frequency.value = 420; tg.gain.value = 0;
    tr.connect(tf).connect(tg).connect(this.master); tr.start(0, 0.2);
    this.loops.traffic = tg;
  }

  /** Per-frame update. levels: {hum 0..1, fan 0..1, bubbles 0..1, ballast 0..1, motor 0..1} */
  update(cam, levels, dt) {
    if (!this.ctx) return;
    const L = this.ctx.listener, t = this.ctx.currentTime;
    const fwd = cam.getWorldDirection(this._v || (this._v = cam.position.clone()));
    if (L.positionX) {
      L.positionX.value = cam.position.x; L.positionY.value = cam.position.y; L.positionZ.value = cam.position.z;
      L.forwardX.value = fwd.x; L.forwardY.value = fwd.y; L.forwardZ.value = fwd.z;
      L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0;
    } else { L.setPosition(cam.position.x, cam.position.y, cam.position.z); L.setOrientation(fwd.x, fwd.y, fwd.z, 0, 1, 0); }
    const set = (g, v) => g.gain.setTargetAtTime(v, t, 0.15);
    set(this.loops.hum, levels.hum * 0.07);
    set(this.loops.fan, levels.fan * 0.5);
    set(this.loops.ballast, levels.ballast * 0.035);
    set(this.loops.motor, levels.motor * 0.16);
    this.loops.motorOsc.frequency.setTargetAtTime(35 + levels.motor * 55, t, 0.2);
    // storm: rain / wind (levels.rain 0..1, levels.inside 0..1 muffles it), window patter is spatial
    set(this.loops.rain, levels.rain * (0.05 + 0.05 * (1 - levels.inside)));
    this.loops.rainF.frequency.setTargetAtTime(levels.inside > 0.5 ? 900 : 1800, t, 0.5);
    set(this.loops.wind, levels.rain * 0.09);
    set(this.loops.pat, levels.rain * 0.05);
    set(this.loops.purr, levels.purr * 0.5);
    set(this.loops.drone, levels.drone * 0.022);
    set(this.loops.traffic, levels.evening * 0.03);
    if (levels.evening > 0.5 && Math.random() < dt * 0.35) this.bird();
    // random bubble gating
    if (levels.bubbles > 0 && Math.random() < dt * 14) {
      this.loops.bubF.frequency.setValueAtTime(900 + Math.random() * 1600, t);
      this.loops.bub.gain.setValueAtTime(0.5 * levels.bubbles, t);
      this.loops.bub.gain.setTargetAtTime(0, t + 0.02, 0.03);
    }
  }

  // ---------------------------------------------------------------- one-shots
  beep(freq, dur, type = 'sine', vol = 0.08, when = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  }
  burst(dur, freq, vol, type = 'lowpass', when = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when;
    const s = this.noiseSrc(), f = this.ctx.createBiquadFilter(), g = this.ctx.createGain();
    f.type = type; f.frequency.value = freq;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(this.master); s.start(t, Math.random()); s.stop(t + dur + 0.02);
  }
  click() { this.beep(1800, 0.03, 'square', 0.025); this.burst(0.03, 3000, 0.05, 'highpass'); }
  good() { this.beep(660, 0.12); this.beep(990, 0.18, 'sine', 0.08, 0.09); }
  bad() { this.beep(140, 0.35, 'sawtooth', 0.06); }
  step() { this.burst(0.07, 380 + Math.random() * 260, 0.22); }
  clack() { this.burst(0.09, 2500, 0.5, 'bandpass'); this.beep(90, 0.25, 'square', 0.08); }
  thunk() { this.beep(55, 0.4, 'sine', 0.35); this.burst(0.15, 200, 0.4); }
  keyType() { this.burst(0.025, 4000, 0.06, 'highpass'); }
  pickup() { this.beep(880, 0.08, 'triangle', 0.08); this.beep(1320, 0.12, 'triangle', 0.07, 0.07); }
  fanfare() { [523, 659, 784, 1047].forEach((f, i) => this.beep(f, 0.35, 'triangle', 0.09, i * 0.12)); }
  /** thunder from `km` away: nearer strikes are louder and keep some of their crack (air eats the highs over distance) */
  thunder(v = 1, km = 4) {
    const near = Math.max(0, Math.min(1, (5 - km) / 3));
    if (near > 0) { this.burst(0.25, 2600, 0.4 * v * near, 'bandpass'); this.burst(0.6, 900, 0.3 * v * near, 'lowpass', 0.05); }
    this.burst(3.2, 110, 0.55 * v);
    this.burst(1.6, 320, 0.22 * v, 'lowpass', 0.08);
    this.burst(2.4, 90, 0.35 * v, 'lowpass', 0.6);
    this.beep(36, 2.2, 'sine', 0.22 * v, 0.05);
  }
  /** a fluorescent tube's starter: a glassy tink plus a little ballast buzz */
  tink(when = 0) { this.beep(3100 + Math.random() * 600, 0.05, 'triangle', 0.035, when); this.beep(100, 0.12, 'sawtooth', 0.025, when); }
  /** the cat, awake enough to enjoy it */
  purrLoud(dur = 2.4) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime, s = this.noiseSrc(), f = ctx.createBiquadFilter(), am = ctx.createGain(), lfo = ctx.createOscillator(), dep = ctx.createGain(), g = ctx.createGain();
    f.type = 'lowpass'; f.frequency.value = 320; am.gain.value = 0.5; lfo.frequency.value = 25; dep.gain.value = 0.5;
    lfo.connect(dep).connect(am.gain);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.6, t + 0.3); g.gain.setValueAtTime(0.6, t + dur * 0.45);
    g.gain.linearRampToValueAtTime(0.25, t + dur * 0.55); g.gain.linearRampToValueAtTime(0.5, t + dur * 0.7); g.gain.linearRampToValueAtTime(0, t + dur);
    s.connect(f).connect(am).connect(g).connect(this.master);
    s.start(t, Math.random()); lfo.start(t); s.stop(t + dur + 0.05); lfo.stop(t + dur + 0.05);
  }
  /** Q0 closes: the drone resolves into a warm major chord */
  resolve() { [110, 164.8, 220, 277.2, 329.6].forEach((f, i) => { this.beep(f, 4.5, 'triangle', 0.035, 0.05 + i * 0.07); this.beep(f * 2, 3.5, 'sine', 0.012, 0.3 + i * 0.07); }); }
  /** a blackbird-ish phrase somewhere outside */
  bird() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime, n = 2 + Math.floor(Math.random() * 4), base = 2200 + Math.random() * 1400;
    for (let i = 0; i < n; i++) {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain(), at = t + i * (0.09 + Math.random() * 0.08), d = 0.05 + Math.random() * 0.08;
      o.frequency.setValueAtTime(base * (0.8 + Math.random() * 0.5), at); o.frequency.exponentialRampToValueAtTime(base * (0.9 + Math.random() * 0.7), at + d);
      g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(0.012, at + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, at + d);
      o.connect(g).connect(this.master); o.start(at); o.stop(at + d + 0.02);
    }
  }
  /** a big church bell (inharmonic partials, long decay): the Dom rings the evening in */
  bell(f = 98, when = 0, v = 0.05) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + when;
    for (const [m, a, d] of [[0.5, 0.6, 6], [1, 1, 4.5], [1.19, 0.5, 3.5], [1.5, 0.45, 3], [2, 0.35, 2.5], [2.51, 0.25, 2], [3.01, 0.15, 1.6], [4.17, 0.08, 1.2]]) {
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.frequency.value = f * m; g.gain.setValueAtTime(v * a, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(this.master); o.start(t); o.stop(t + d + 0.05);
    }
  }
}
