// Draws a logic circuit (see puzzle.js CIRCUITS) with ANSI gate symbols onto a 2D canvas context.

function gatePath(ctx, g, x, y, h = 50) {
  const r = h / 2;
  ctx.beginPath();
  if (g === 'AND' || g === 'NAND') {
    ctx.moveTo(x, y - r); ctx.lineTo(x + 35, y - r); ctx.arc(x + 35, y, r, -Math.PI / 2, Math.PI / 2); ctx.lineTo(x, y + r); ctx.closePath();
  } else if (g === 'OR' || g === 'NOR' || g === 'XOR') {
    ctx.moveTo(x, y - r); ctx.quadraticCurveTo(x + 45, y - r, x + 70, y); ctx.quadraticCurveTo(x + 45, y + r, x, y + r);
    ctx.quadraticCurveTo(x + 16, y, x, y - r); ctx.closePath();
  } else if (g === 'NOT') {
    ctx.moveTo(x, y - 20); ctx.lineTo(x + 48, y); ctx.lineTo(x, y + 20); ctx.closePath();
  }
  ctx.fill(); ctx.stroke();
  if (g === 'XOR') { ctx.beginPath(); ctx.moveTo(x - 9, y - r); ctx.quadraticCurveTo(x + 7, y, x - 9, y + r); ctx.stroke(); }
  let out = g === 'NOT' ? x + 48 : x + 70;
  if (g === 'NOT' || g === 'NAND' || g === 'NOR') { bubble(ctx, out + 6, y); out += 12; }
  return out;
}
function bubble(ctx, x, y) { ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }

export function drawCircuit(ctx, w, h, circuit, { bg = '#f3efe2', ink = '#1c3f94', title = 'FW-BOARD rev.C' } = {}) {
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.font = 'bold 26px Consolas, monospace'; ctx.textAlign = 'left';
  ctx.fillText(title + '  —  OUT must be 1', 24, 38);
  // grid paper
  ctx.save(); ctx.strokeStyle = 'rgba(28,63,148,.08)'; ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 20) { ctx.beginPath(); ctx.moveTo(x, 50); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 50; y < h; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  ctx.restore();

  const railX = { A: 70, B: 130, C: 190, D: 250 };
  const top = 90, bottom = h - 30;
  ctx.font = 'bold 28px Consolas'; ctx.textAlign = 'center';
  for (const [n, x] of Object.entries(railX)) {
    ctx.fillText(n, x, top - 12);
    ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, bottom); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, top, 5, 0, Math.PI * 2); ctx.fill();
  }

  const terms = circuit.terms, n = terms.length;
  const gx = 430, span = bottom - top - 90;
  const outs = [];
  ctx.fillStyle = bg;
  terms.forEach((t, i) => {
    const y = top + 30 + (n === 1 ? span / 2 : (span * i) / (n - 1));
    const ins = t.g === 'NOT' ? [[t.a, y]] : [[t.a, y - 12], [t.b, y + 12]];
    for (const [sig, iy] of ins) {
      const inv = sig[0] === '!', name = inv ? sig[1] : sig;
      const endX = gx + (t.g === 'OR' || t.g === 'NOR' || t.g === 'XOR' ? (t.g === 'XOR' ? -9 : 5) : 0) - (inv ? 12 : 0);
      ctx.beginPath(); ctx.moveTo(railX[name], iy); ctx.lineTo(endX, iy); ctx.stroke();
      ctx.save(); ctx.fillStyle = ink; ctx.beginPath(); ctx.arc(railX[name], iy, 5, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      if (inv) bubble(ctx, endX + 6, iy);
    }
    const ox = gatePath(ctx, t.g, gx, y);
    ctx.save(); ctx.fillStyle = ink; ctx.font = '15px Consolas'; ctx.fillText(t.g, gx + 28, y + 42); ctx.restore();
    outs.push([ox, y]);
  });

  // final AND
  const fx = 700, fy = top + 30 + span / 2, fh = Math.max(70, n * 26);
  outs.forEach(([ox, oy], i) => {
    const iy = fy - fh / 2 + (fh * (i + 1)) / (n + 1);
    const mx = 600 + i * 14;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(mx, oy); ctx.lineTo(mx, iy); ctx.lineTo(fx, iy); ctx.stroke();
  });
  const fo = gatePath(ctx, 'AND', fx, fy, fh);
  ctx.save(); ctx.fillStyle = ink; ctx.font = '15px Consolas'; ctx.fillText('AND', fx + 30, fy + fh / 2 + 18); ctx.restore();
  ctx.beginPath(); ctx.moveTo(fo, fy); ctx.lineTo(w - 90, fy); ctx.stroke();
  // LED symbol
  ctx.save(); ctx.fillStyle = ink;
  ctx.beginPath(); ctx.moveTo(w - 90, fy - 16); ctx.lineTo(w - 60, fy); ctx.lineTo(w - 90, fy + 16); ctx.closePath(); ctx.fill();
  ctx.fillRect(w - 58, fy - 16, 4, 32);
  ctx.font = 'bold 22px Consolas'; ctx.fillText('OUT', w - 62, fy - 28);
  ctx.restore();
}
