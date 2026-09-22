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
}
