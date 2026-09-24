// Player settings, persisted in localStorage.
const KEY = 'ple-settings';
// players who asked their OS for less motion also get calmer lightning and no light flicker by default
const osReduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export const DEFAULTS = {
  sens: 1.0,            // mouse / touch look sensitivity multiplier
  invertY: false,
  fov: 72,
  volume: 0.7,
  uiScale: 1,
  reducedMotion: osReduce, // no head bob / camera shake
  reduceFlashing: osReduce, // soft single-pulse lightning, no fluorescent flicker (photosensitivity)
  brightness: 1,        // exposure multiplier (the game is dark on purpose; some screens need help)
  palette: 'standard',  // phase colours: standard | colorblind
  quality: 'auto',      // pixel ratio: low | auto | high
};

export function loadSettings() {
  try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { ...DEFAULTS }; }
}
export function saveSettings(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* storage unavailable */ } }

export function settingsHtml(s) {
  const range = (k, label, min, max, step, fmt = (v) => v) => `<div class="setrow"><label for="set_${k}">${label}</label>
    <input type="range" id="set_${k}" data-set="${k}" min="${min}" max="${max}" step="${step}" value="${s[k]}"><output>${fmt(s[k])}</output></div>`;
  const check = (k, label) => `<div class="setrow"><label for="set_${k}">${label}</label><input type="checkbox" id="set_${k}" data-set="${k}" ${s[k] ? 'checked' : ''}></div>`;
  const select = (k, label, opts) => `<div class="setrow"><label for="set_${k}">${label}</label><select id="set_${k}" data-set="${k}">${opts.map(([v, t]) => `<option value="${v}" ${s[k] === v ? 'selected' : ''}>${t}</option>`).join('')}</select></div>`;
  return `<div class="settings">
    ${range('sens', 'Look sensitivity', 0.2, 3, 0.1, (v) => Number(v).toFixed(1) + '×')}
    ${check('invertY', 'Invert Y axis')}
    ${range('fov', 'Field of view', 55, 100, 1, (v) => v + '°')}
    ${range('volume', 'Volume', 0, 1, 0.05, (v) => Math.round(v * 100) + ' %')}
    ${range('uiScale', 'UI scale', 0.8, 1.5, 0.05, (v) => Math.round(v * 100) + ' %')}
    ${range('brightness', 'Brightness', 0.7, 1.6, 0.05, (v) => Math.round(v * 100) + ' %')}
    ${check('reducedMotion', 'Reduced motion (no head bob / shake)')}
    ${check('reduceFlashing', 'Reduce flashing (lightning, flicker)')}
    ${select('palette', 'Phase colours', [['standard', 'Standard (red / yellow / blue)'], ['colorblind', 'Colour-blind safe (Okabe–Ito)']])}
    ${select('quality', 'Render quality', [['low', 'Low (fast)'], ['auto', 'Balanced'], ['high', 'High (sharp)']])}
  </div>`;
}

/** Wire the inputs inside `root` to the settings object; calls onChange(settings) after every change. */
export function bindSettings(root, s, onChange) {
  root.querySelectorAll('[data-set]').forEach((el) => {
    el.addEventListener('input', () => {
      const k = el.dataset.set;
      s[k] = el.type === 'checkbox' ? el.checked : el.tagName === 'SELECT' ? el.value : Number(el.value);
      const out = el.parentElement.querySelector('output');
      if (out) out.textContent = { sens: (v) => v.toFixed(1) + '×', fov: (v) => v + '°', volume: (v) => Math.round(v * 100) + ' %', uiScale: (v) => Math.round(v * 100) + ' %', brightness: (v) => Math.round(v * 100) + ' %' }[k]?.(s[k]) ?? s[k];
      saveSettings(s);
      onChange(s);
    });
  });
}
