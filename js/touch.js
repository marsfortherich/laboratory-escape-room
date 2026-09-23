// Touch controls: left-side virtual joystick, right-side drag to look, tap an object to use it,
// plus on-screen buttons. Active on coarse-pointer devices (phones / tablets).

// Touch mode only when the primary pointer is coarse AND no fine pointer (mouse/trackpad) exists —
// a Windows touchscreen laptop or 2-in-1 with a mouse keeps pointer-lock mouse controls.
export const isTouchDevice = () => matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches;

export class TouchControls {
  /** handlers: { look(dx, dy), tap(clientX, clientY), use(), menu(), hint(), journal(), sprint(bool) } */
  constructor(canvas, handlers) {
    this.h = handlers;
    this.move = { x: 0, y: 0 };
    this.enabled = false;
    this.el = document.createElement('div');
    this.el.id = 'touchUi';
    this.el.className = 'hidden';
    this.el.innerHTML = `
      <div class="joy" id="joyBase"><div class="joy-knob" id="joyKnob"></div></div>
      <div class="tbtns">
        <button class="tbtn" data-t="menu" aria-label="Menu">☰</button>
        <button class="tbtn" data-t="hint" aria-label="Hint">💡</button>
        <button class="tbtn" data-t="journal" aria-label="Journal">📓</button>
      </div>
      <button class="tbtn use" data-t="use">USE</button>
      <button class="tbtn run" data-t="sprint">RUN</button>`;
    document.body.appendChild(this.el);
    this.base = this.el.querySelector('#joyBase');
    this.knob = this.el.querySelector('#joyKnob');

    this.el.querySelectorAll('[data-t]').forEach((b) => {
      const t = b.dataset.t;
      if (t === 'sprint') {
        b.addEventListener('pointerdown', (e) => { e.preventDefault(); this.h.sprint?.(true); b.classList.add('on'); });
        const off = () => { this.h.sprint?.(false); b.classList.remove('on'); };
        b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off); b.addEventListener('pointerleave', off);
      } else b.addEventListener('click', (e) => { e.preventDefault(); this.h[t]?.(); });
    });

    this.joyId = null; this.lookId = null;
    canvas.addEventListener('pointerdown', (e) => this.down(e));
    window.addEventListener('pointermove', (e) => this.moveEv(e));
    window.addEventListener('pointerup', (e) => this.up(e));
    window.addEventListener('pointercancel', (e) => this.up(e));
  }

  enable(on) { this.enabled = on; this.el.classList.toggle('hidden', !on); if (!on) this.reset(); }
  reset() { this.move.x = this.move.y = 0; this.joyId = this.lookId = null; this.base.classList.remove('active'); this.knob.style.transform = ''; }

  down(e) {
    if (!this.enabled || e.pointerType === 'mouse') return;
    if (e.clientX < innerWidth * 0.4 && this.joyId === null) {
      this.joyId = e.pointerId; this.jx = e.clientX; this.jy = e.clientY;
      this.base.style.left = `${e.clientX - 60}px`; this.base.style.top = `${e.clientY - 60}px`;
      this.base.classList.add('active');
    } else if (this.lookId === null) {
      this.lookId = e.pointerId; this.lx = e.clientX; this.ly = e.clientY; this.tapStart = { x: e.clientX, y: e.clientY, t: performance.now() };
    }
  }
  moveEv(e) {
    if (!this.enabled) return;
    if (e.pointerId === this.joyId) {
      let dx = e.clientX - this.jx, dy = e.clientY - this.jy;
      const len = Math.hypot(dx, dy), max = 50;
      if (len > max) { dx *= max / len; dy *= max / len; }
      this.knob.style.transform = `translate(${dx}px, ${dy}px)`;
      this.move.x = dx / max; this.move.y = -dy / max;
    } else if (e.pointerId === this.lookId) {
      this.h.look?.(e.clientX - this.lx, e.clientY - this.ly);
      this.lx = e.clientX; this.ly = e.clientY;
    }
  }
  up(e) {
    if (e.pointerId === this.joyId) { this.joyId = null; this.move.x = this.move.y = 0; this.base.classList.remove('active'); this.knob.style.transform = ''; }
    if (e.pointerId === this.lookId) {
      this.lookId = null;
      const s = this.tapStart;
      if (s && Math.hypot(e.clientX - s.x, e.clientY - s.y) < 12 && performance.now() - s.t < 350) this.h.tap?.(e.clientX, e.clientY);
    }
  }
}
