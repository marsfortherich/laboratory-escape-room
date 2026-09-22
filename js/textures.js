import * as THREE from 'three';

/** Font stacks with cross-platform fallbacks (canvas text would otherwise fall back to a serif font). */
export const FONT = {
  sans: '"Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif',
  mono: 'Consolas, Menlo, "DejaVu Sans Mono", "Courier New", monospace',
};

/** Create a CanvasTexture; `draw(ctx, w, h)` paints it. The texture can be redrawn later with redraw(). */
export function canvasTex(w, h, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.userData.ctx = ctx;
  if (draw) draw(ctx, w, h);
  return tex;
}

export function redraw(tex, draw) {
  const ctx = tex.userData.ctx;
  draw(ctx, ctx.canvas.width, ctx.canvas.height);
  tex.needsUpdate = true;
}

/** Simple sign/label: array of lines, each either a string or {t, font, color}. */
export function labelTex(lines, { w = 512, h = 256, bg = '#f2f2ee', fg = '#111', font = `bold 44px ${FONT.sans}`, border = null, align = 'center' } = {}) {
  return canvasTex(w, h, (ctx) => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    if (border) { ctx.strokeStyle = border; ctx.lineWidth = 10; ctx.strokeRect(5, 5, w - 10, h - 10); }
    ctx.textAlign = align; ctx.textBaseline = 'middle';
    const step = h / (lines.length + 1);
    lines.forEach((l, i) => {
      const o = typeof l === 'string' ? { t: l } : l;
      ctx.font = o.font || font; ctx.fillStyle = o.color || fg;
      ctx.fillText(o.t, align === 'center' ? w / 2 : 24, step * (i + 1));
    });
  });
}

export function tileTex(color = '#6b7178', line = '#565b61', cells = 4, size = 512) {
  const t = canvasTex(size, size, (ctx) => {
    ctx.fillStyle = color; ctx.fillRect(0, 0, size, size);
    // subtle noise
    for (let i = 0; i < 2500; i++) {
      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`;
      ctx.fillRect(Math.random() * size, Math.random() * size, 2, 2);
    }
    ctx.strokeStyle = line; ctx.lineWidth = 3;
    const s = size / cells;
    for (let i = 0; i <= cells; i++) {
      ctx.beginPath(); ctx.moveTo(i * s, 0); ctx.lineTo(i * s, size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * s); ctx.lineTo(size, i * s); ctx.stroke();
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function pvCellTex() {
  return canvasTex(512, 320, (ctx, w, h) => {
    ctx.fillStyle = '#c9ced4'; ctx.fillRect(0, 0, w, h);
    const cols = 10, rows = 6, pad = 8;
    const cw = (w - pad * 2) / cols, ch = (h - pad * 2) / rows;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const x = pad + c * cw, y = pad + r * ch;
      const g = ctx.createLinearGradient(x, y, x + cw, y + ch);
      g.addColorStop(0, '#1a2a6e'); g.addColorStop(1, '#0d1740');
      ctx.fillStyle = g; ctx.fillRect(x + 1.5, y + 1.5, cw - 3, ch - 3);
      ctx.strokeStyle = 'rgba(200,210,230,.35)'; ctx.lineWidth = 1;
      for (let k = 1; k < 4; k++) { ctx.beginPath(); ctx.moveTo(x + k * cw / 4, y + 2); ctx.lineTo(x + k * cw / 4, y + ch - 2); ctx.stroke(); }
    }
  });
}

export function hazardTex() {
  const t = canvasTex(256, 64, (ctx, w, h) => {
    ctx.fillStyle = '#f2c200'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#111';
    for (let x = -h; x < w + h; x += 48) {
      ctx.beginPath(); ctx.moveTo(x, h); ctx.lineTo(x + 24, h); ctx.lineTo(x + 24 + h, 0); ctx.lineTo(x + h, 0); ctx.fill();
    }
  });
  t.wrapS = THREE.RepeatWrapping;
  return t;
}
