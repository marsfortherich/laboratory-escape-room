// Act 3 — gridctl: validate a 24-hour dispatch of the lab's PV, battery, electrolyzer and fuel cell
// against day-ahead forecasts. Actuals (intraday prices, real clouds) differ from the forecasts.

export const CFG = {
  PV_KWP: 600, PR: 0.82,            // kWp, performance ratio
  BAT_E: 1000, BAT_P: 250, BAT_EFF: 0.95, SOC_MIN: 0.05, BAT_WEAR: 20,  // kWh, kW, one-way, –, €/MWh discharged
  ELZ_P: 200, ELZ_MIN: 20, ELZ_KWH_KG: 55,
  FC_P: 150, FC_MIN: 15, FC_KWH_KG: 18,
  H2_MAX: 150,                       // kg
  H2_GREY: 2, RFNBO_MAX: 20,         // €/kg for non-renewable H₂; hours with a DAY-AHEAD price ≤ 20 €/MWh count as renewable (EU RFNBO, simplified)
  LIM: 300,                          // kW grid connection (import & export)
  FEE: 40,                           // €/MWh grid fees on imports
  SOC0: 0.5, H2_0: 20,
  WIN_RATIO: 0.55,                   // share of the benchmark's extra profit needed for the permit
  STAR3: 0.85,
};

// ------------------------------------------------------------ scenario generation
function mulberry32(a) {
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
export const clearSky = (h) => { const x = (h + 0.5 - 6) / 14; return x > 0 && x < 1 ? Math.pow(Math.sin(Math.PI * x), 1.2) : 0; };
/** Kasten–Czeplak: irradiance under cloud cover c (0..1). */
const kc = (c) => 1 - 0.75 * Math.pow(c, 3.4);

const KINDS = [
  { name: 'Mostly sunny, passing clouds around noon', base: 0.15, trend: 0, bump: 0.5 },
  { name: 'Cloudy morning, clearing in the afternoon', base: 0.6, trend: -0.55, bump: 0 },
  { name: 'Bright morning, thunderstorms later', base: 0.3, trend: 0.65, bump: 0 },
  { name: 'Clear skies — solar flood on the market', base: 0.05, trend: 0, bump: 0 },
  { name: 'Overcast, windless evening', base: 0.95, trend: 0.05, bump: 0 },
];

export function makeDay(seed, kindIdx) {
  const r = mulberry32(seed * 7919 + 17);
  const gauss = () => { const u = 1 - r(), v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const kind = KINDS[kindIdx ?? Math.floor(r() * KINDS.length)];
  const cloudF = [], cloudA = [], pvF = [], pvA = [], load = [], priceF = [], priceA = [];
  let walk = 0, err = 0;
  for (let h = 0; h < 24; h++) {
    walk = walk * 0.7 + gauss() * 0.08;
    err = 0.7 * err + Math.sqrt(1 - 0.49) * gauss() * 0.18;          // forecast error, AR(1) ρ = 0.7
    cloudF[h] = clamp(kind.base + kind.trend * (h - 12) / 12 + kind.bump * Math.exp(-((h - 12.5) ** 2) / 3) + walk, 0, 1);
    cloudA[h] = clamp(cloudF[h] + err, 0, 1);
    pvF[h] = CFG.PV_KWP * CFG.PR * clearSky(h) * kc(cloudF[h]);
    pvA[h] = CFG.PV_KWP * CFG.PR * clearSky(h) * kc(cloudA[h]);
    load[h] = Math.round(70 + (h >= 7 && h <= 17 ? 55 : 0) + (h >= 18 && h <= 21 ? 20 : 0) + r() * 12);
  }
  const avgCloud = cloudF.slice(8, 18).reduce((a, b) => a + b, 0) / 10;
  for (let h = 0; h < 24; h++) {
    const mkt = clearSky(h) * kc(avgCloud);
    const p = 95 + 45 * Math.exp(-((h - 7.5) ** 2) / 3) + 115 * Math.exp(-((h - 19) ** 2) / 4) - 30 * Math.exp(-((h - 3) ** 2) / 6) - 175 * mkt + gauss() * 6;
    priceF[h] = Math.round(p * 10) / 10;
    // intraday price: noise + regional PV surprise (more clouds than forecast → less solar → higher price)
    priceA[h] = Math.round((p + gauss() * 10 + 120 * (cloudA[h] - cloudF[h]) * clearSky(h)) * 10) / 10;
  }
  if (r() < 0.75) { const h = 17 + Math.floor(r() * 5); priceA[h] = Math.round((priceA[h] + 120 + r() * 220) * 10) / 10; }
  if (r() < 0.4) { const h = 10 + Math.floor(r() * 5); priceA[h] = Math.round((priceA[h] - 40 - r() * 60) * 10) / 10; }
  const h2Price = Math.round((3 + r() * 5) * 2) / 2;                 // 3.0 … 8.0 €/kg
  return { seed, kind: kind.name, cloudF, cloudA, pvF, pvA, load, priceF, priceA, h2Price, variant: 0 };
}

/**
 * Same forecasts, different reality: re-rolls the intraday prices and real clouds. "Replay this day" uses it, so a
 * replay tests forecasting again instead of letting the player copy the benchmark from the review.
 */
export function rerollActuals(day, variant) {
  if (!variant) return day;
  const r = mulberry32(day.seed * 7919 + 17 + variant * 104729);
  const gauss = () => { const u = 1 - r(), v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const cloudA = [], pvA = [], priceA = [];
  let err = 0;
  for (let h = 0; h < 24; h++) {
    err = 0.7 * err + Math.sqrt(1 - 0.49) * gauss() * 0.18;
    cloudA[h] = clamp(day.cloudF[h] + err, 0, 1);
    pvA[h] = CFG.PV_KWP * CFG.PR * clearSky(h) * kc(cloudA[h]);
    priceA[h] = Math.round((day.priceF[h] + gauss() * 10 + 120 * (cloudA[h] - day.cloudF[h]) * clearSky(h)) * 10) / 10;
  }
  if (r() < 0.75) { const h = 17 + Math.floor(r() * 5); priceA[h] = Math.round((priceA[h] + 120 + r() * 220) * 10) / 10; }
  if (r() < 0.4) { const h = 10 + Math.floor(r() * 5); priceA[h] = Math.round((priceA[h] - 40 - r() * 60) * 10) / 10; }
  return { ...day, cloudA, pvA, priceA, variant };
}

// ------------------------------------------------------------ physics / economics of one hour
const money = (net, price) => (net >= 0 ? net * price : net * (price + CFG.FEE)) / 1000;
const minLoad = (v, min) => (v > 0 && v < min ? min : v);
/**
 * H₂ made from grid power outside renewable hours only fetches the grey price: returns the € lost vs. the day's H₂ price.
 * Renewable = the hour's DAY-AHEAD price is ≤ RFNBO_MAX, or own PV surplus left after the load and battery charging.
 */
export function greyPenalty(day, elz, pv, load, priceDA, charge = 0) {
  if (elz <= 0 || day.h2Price <= CFG.H2_GREY) return 0;
  const green = priceDA <= CFG.RFNBO_MAX ? elz : Math.min(elz, Math.max(0, pv - load - charge));
  return (elz - green) / CFG.ELZ_KWH_KG * (day.h2Price - CFG.H2_GREY);
}
/** Break-even prices (€/MWh) for today's H₂ value. */
export function breakEvens(day) {
  const elzEx = day.h2Price / CFG.ELZ_KWH_KG * 1000, fcEx = day.h2Price / CFG.FC_KWH_KG * 1000;
  return { elzEx, fcEx, fcIm: fcEx - CFG.FEE };
}

export function simHour(day, h, st, set, forecast = false) {
  const pvRaw = forecast ? day.pvF[h] : day.pvA[h];
  const price = forecast ? day.priceF[h] : day.priceA[h];
  const load = day.load[h];
  const notes = [];
  const E = st.soc * CFG.BAT_E, Emin = CFG.SOC_MIN * CFG.BAT_E;

  let pv = pvRaw * (1 - set.curt / 100);
  let bat = set.bat;                                    // + discharge / − charge, AC kW
  if (bat > 0) { const m = Math.max(0, (E - Emin) * CFG.BAT_EFF); if (bat > m + 1e-6) notes.push('battery empty'); bat = Math.min(bat, m); }
  if (bat < 0) { const m = Math.max(0, (CFG.BAT_E - E) / CFG.BAT_EFF); if (-bat > m + 1e-6) notes.push('battery full'); bat = -Math.min(-bat, m); }
  let fc = Math.min(minLoad(set.fc, CFG.FC_MIN), st.h2 * CFG.FC_KWH_KG);
  if (fc < CFG.FC_MIN) fc = 0;
  if (fc < set.fc - 1e-6) notes.push('H₂ low');
  let elz = Math.min(minLoad(set.elz, CFG.ELZ_MIN), (CFG.H2_MAX - st.h2) * CFG.ELZ_KWH_KG);
  if (elz < CFG.ELZ_MIN) elz = 0;
  if (elz < set.elz - 1e-6) notes.push('H₂ tank full');

  let net = pv + fc + bat - load - elz;
  if (net < -CFG.LIM) { const c = Math.min(elz, -CFG.LIM - net); elz -= c; net += c; notes.push('import limit'); }
  if (net < -CFG.LIM && bat < 0) { const c = Math.min(-bat, -CFG.LIM - net); bat += c; net += c; }
  let lost = 0;
  if (net > CFG.LIM) {
    let ex = net - CFG.LIM;
    const cpv = Math.min(pv, ex); pv -= cpv; ex -= cpv; lost += cpv;
    const cfc = Math.min(fc, ex); fc -= cfc; ex -= cfc;
    if (ex > 0 && bat > 0) { const cb = Math.min(bat, ex); bat -= cb; ex -= cb; }
    net = CFG.LIM + ex;
    notes.push(`export limit (${lost.toFixed(0)} kW PV lost)`);
  }
  const wear = Math.max(0, bat) * CFG.BAT_WEAR / 1000;
  const grey = greyPenalty(day, elz, pv, load, day.priceF[h], Math.max(0, -bat));
  if (grey > 0.5) notes.push(`grey H₂ −€${grey.toFixed(0)}`);
  const eur = money(net, price) - wear - grey;
  const Eafter = bat > 0 ? E - bat / CFG.BAT_EFF : E - bat * CFG.BAT_EFF;
  return {
    h, price, pvRaw, pv, load, bat, elz, fc, net, eur, wear, grey, notes,
    soc: Eafter / CFG.BAT_E,
    h2: st.h2 + elz / CFG.ELZ_KWH_KG - fc / CFG.FC_KWH_KG,
  };
}

const avg = (a) => a.reduce((x, y) => x + y, 0) / a.length;

/** Result = cash + stored-energy change. Battery energy is valued at the (known) average forecast price after discharge losses and wear. */
export function score(day, cash, st) {
  const batV = (st.soc - CFG.SOC0) * CFG.BAT_E * CFG.BAT_EFF * (avg(day.priceF) - CFG.BAT_WEAR) / 1000;
  const h2V = (st.h2 - CFG.H2_0) * day.h2Price;
  return { cash, batV, h2V, total: cash + batV + h2V };
}

export function baseline(day) {
  let st = { soc: CFG.SOC0, h2: CFG.H2_0 }, cash = 0;
  for (let h = 0; h < 24; h++) { const r = simHour(day, h, st, { bat: 0, elz: 0, fc: 0, curt: 0 }); cash += r.eur; st = r; }
  return score(day, cash, st).total;
}

/**
 * Perfect-foresight benchmark on the ACTUAL data. Dynamic programming over battery energy; per hour a search
 * over electrolyzer / fuel cell / curtailment (H₂ valued at the day's price). The resulting policy is then
 * replayed through simHour() so the benchmark respects every real constraint (H₂ stock, tank, limits).
 */
export function benchmark(day, data = { pv: day.pvA, price: day.priceA }) {
  const step = 25, Emin = CFG.SOC_MIN * CFG.BAT_E, N = Math.round((CFG.BAT_E - Emin) / step) + 1;
  const ap = avg(day.priceF);
  const maxCh = Math.floor(CFG.BAT_P * CFG.BAT_EFF / step), maxDis = Math.floor(CFG.BAT_P / CFG.BAT_EFF / step);
  const elzOpts = [0, 0.25, 0.5, 0.75, 1].map((x) => x * CFG.ELZ_P);
  const fcOpts = [0, 1 / 3, 2 / 3, 1].map((x) => Math.round(x * CFG.FC_P));
  const batAC = (d) => (d > 0 ? -d * step / CFG.BAT_EFF : -d * step * CFG.BAT_EFF);
  const inner = [], arg = [];
  for (let h = 0; h < 24; h++) {
    inner[h] = {}; arg[h] = {};
    for (let d = -maxDis; d <= maxCh; d++) {
      const b = batAC(d);
      let best = -Infinity, bestA = null;
      for (const elz of elzOpts) for (const fc of fcOpts) for (const c of [0, 25, 50, 75, 100]) {
        let net = data.pv[h] * (1 - c / 100) + fc + b - day.load[h] - elz;
        if (net < -CFG.LIM) continue;
        if (net > CFG.LIM) net = CFG.LIM;
        const v = money(net, data.price[h]) - Math.max(0, b) * CFG.BAT_WEAR / 1000 + (elz / CFG.ELZ_KWH_KG - fc / CFG.FC_KWH_KG) * day.h2Price
          - greyPenalty(day, elz, data.pv[h] * (1 - c / 100), day.load[h], day.priceF[h], Math.max(0, -b));
        if (v > best) { best = v; bestA = { elz, fc, curt: c }; }
      }
      inner[h][d] = best; arg[h][d] = bestA;
    }
  }
  const pol = [];
  let V = Array.from({ length: N }, (_, i) => (Emin + i * step - CFG.SOC0 * CFG.BAT_E) * CFG.BAT_EFF * (ap - CFG.BAT_WEAR) / 1000);
  for (let h = 23; h >= 0; h--) {
    const nv = new Array(N).fill(-Infinity); pol[h] = new Array(N).fill(0);
    for (let i = 0; i < N; i++) for (let d = -maxDis; d <= maxCh; d++) {
      const j = i + d; if (j < 0 || j >= N || inner[h][d] === -Infinity) continue;
      const v = inner[h][d] + V[j]; if (v > nv[i]) { nv[i] = v; pol[h][i] = d; }
    }
    V = nv;
  }
  // replay the policy through the real hour model
  let st = { soc: CFG.SOC0, h2: CFG.H2_0 }, cash = 0;
  const plan = [], rows = [];
  for (let h = 0; h < 24; h++) {
    const i = clamp(Math.round((st.soc * CFG.BAT_E - Emin) / step), 0, N - 1);
    const d = pol[h][i];
    const set = { bat: Math.round(batAC(d)), ...arg[h][d] };
    const r = simHour(day, h, st, set);
    cash += r.eur; st = r; plan.push(set); rows.push(r);
  }
  return { value: score(day, cash, st).total, plan, rows };
}

// ------------------------------------------------------------ UI
const eur = (x) => (x < 0 ? '−' : '') + '€' + Math.abs(x).toFixed(2);
const hh = (h) => String(h).padStart(2, '0') + ':00';
const wx = (h, c) => (clearSky(h) === 0 ? '🌙' : c < 0.2 ? '☀️' : c < 0.45 ? '🌤️' : c < 0.7 ? '⛅' : '☁️');
const bestKey = 'ple-grid-best';

export class GridGame {
  constructor(onWin, roomSeed = 0) {
    this.el = document.getElementById('grid');
    this.onWin = onWin;
    this.onClose = null;
    this.onHint = null;        // called when the advisor is used (counts as a hint)
    this.dayNo = 0;
    this.built = false;
    this.permit = false;
    this.newDay(roomSeed || 2026, roomSeed ? undefined : 0);   // daily rooms get their own trading day
  }

  newDay(seed, kindIdx) {
    this.dayNo++;
    this.seed = seed;
    this.day = makeDay(seed, kindIdx);
    this.reset();
    this.base = baseline(this.day);
    this.bench = benchmark(this.day);
  }
  /** Replay the same forecasts with a new reality (and a fresh baseline / benchmark for it). */
  replay(variant = (this.day.variant || 0) + 1) {
    this.day = rerollActuals(makeDay(this.seed, this.seed === 2026 ? 0 : undefined), variant);
    this.reset();
    this.base = baseline(this.day);
    this.bench = benchmark(this.day);
  }
  reset() {
    this.st = { soc: CFG.SOC0, h2: CFG.H2_0 };
    this.h = 0; this.cash = 0; this.log = [];
    this.set = { bat: 0, elz: 0, fc: 0, curt: 0 };
    this.finished = false;
    this.advisorHour = -1;
    this.advisorUsed = false;
  }

  serialize() { return { seed: this.seed, variant: this.day.variant, dayNo: this.dayNo, log: this.log, st: this.st, h: this.h, cash: this.cash, set: this.set, permit: this.permit }; }
  restore(o) {
    if (!o) return;
    this.dayNo = o.dayNo - 1;
    this.newDay(o.seed, o.seed === 2026 ? 0 : undefined);
    if (o.variant) this.replay(o.variant);
    Object.assign(this, { log: o.log, st: o.st, h: o.h, cash: o.cash, set: o.set, permit: o.permit, finished: o.h >= 24 });
  }

  open() {
    if (!this.built) this.build();
    this.openedAt = performance.now();
    this.el.classList.remove('hidden');
    this.render();
    if (this.finished && !this.permit) this.showResult();
  }
  close() { this.el.classList.add('hidden'); if (this.built) this.$('gModal').classList.add('hidden'); }
  isOpen() { return !this.el.classList.contains('hidden'); }
  modalOpen() { return this.built && !this.$('gModal').classList.contains('hidden'); }

  build() {
    this.built = true;
    this.el.innerHTML = `
    <div class="gwrap">
      <div class="ghead">
        <h2>gridctl ▸ day-ahead validation</h2>
        <span class="stat" id="gDay"></span>
        <span class="stat">Hour <b id="gHour"></b></span>
        <span class="stat">Cash <b id="gCash"></b></span>
        <span class="stat">Battery <b id="gSoc"></b></span>
        <span class="stat">H₂ <b id="gH2"></b></span>
        <span class="stat" id="gPace"></span>
        <span class="spacer"></span>
        <button class="btn" id="gClose">Leave console (Esc)</button>
      </div>
      <div class="gmain">
        <div class="gleft">
          <div class="chartbox"><canvas id="gChart"></canvas>
            <div class="legend">
              <span><i style="background:rgba(255,210,74,.35)"></i>PV forecast</span>
              <span><i style="background:#ffd24a"></i>PV actual</span>
              <span><i style="background:#8ea3b8;height:2px"></i>load</span>
              <span><i style="background:#ff8c42;height:2px"></i>price: day-ahead (dashed) / intraday</span>
              <span><i style="background:#3ecf7a;height:2px"></i>SOC (dashed: benchmark)</span>
            </div>
          </div>
          <div class="logbox"><table><thead><tr><th>Hour</th><th>Price DA→ID</th><th>PV fc→act kW</th><th>Load</th><th>Batt</th><th>ELZ</th><th>FC</th><th>Grid</th><th>€</th><th id="gBenchH" class="hidden">Bench €</th><th>SOC</th><th>H₂ kg</th><th>Notes</th></tr></thead><tbody id="gLog"></tbody></table></div>
        </div>
        <div class="gside">
          <h3 id="gFcTitle">Forecast</h3>
          <div class="fc" id="gFc"></div>
          <h3>Setpoints for this hour</h3>
          ${this.sliderHtml('bat', 'Battery', -CFG.BAT_P, CFG.BAT_P, 10, '◀ charge', 'discharge ▶')}
          ${this.sliderHtml('elz', 'Electrolyzer', 0, CFG.ELZ_P, 10, `off · min ${CFG.ELZ_MIN}`, `${CFG.ELZ_P} kW`)}
          ${this.sliderHtml('fc', 'Fuel cell', 0, CFG.FC_P, 5, `off · min ${CFG.FC_MIN}`, `${CFG.FC_P} kW`)}
          ${this.sliderHtml('curt', 'PV curtailment', 0, 100, 10, '0 %', '100 %')}
          <div class="preview" id="gPrev"></div>
          <div class="note" id="gTip" style="margin-bottom:10px"></div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn big" id="gRun" style="margin:0;flex:1">Run hour ▶ <span class="kbd-hint" style="font-size:12px">(Enter)</span></button>
            <button class="btn" id="gRun3" title="Run 3 hours with these setpoints">▶▶ 3 h</button>
            <button class="btn" id="gZero">Zero</button>
          </div>
        </div>
      </div>
      <div class="gfoot"><details><summary>How it works</summary><div>
        • Forecasts: <b>day-ahead</b> price and cloud cover. The <b>intraday</b> price and real clouds are revealed when the hour runs. Cloudier than forecast → less regional solar → higher price.<br>
        • Positive grid = export (paid the price). Import pays the price <b>+ €${CFG.FEE}/MWh grid fees</b>. Connection limit <b>±${CFG.LIM} kW</b> — surplus PV beyond it is lost.<br>
        • Negative prices happen: exporting then <b>costs</b> money. Curtail, charge, or run the electrolyzer.<br>
        • Renewable-H₂ rule (EU RFNBO, simplified): hydrogen only fetches today's price if it is made from on-site PV surplus or in hours ≤ ${CFG.RFNBO_MAX} €/MWh; otherwise it sells as grey H₂ for €${CFG.H2_GREY}/kg.<br>
        • Battery: ${CFG.BAT_E} kWh, ±${CFG.BAT_P} kW, ${CFG.BAT_EFF * 100} % each way (90 % round trip), wear €${CFG.BAT_WEAR}/MWh discharged. Worth cycling when sell &gt; buy / 0.9 + wear.<br>
        • Electrolyzer ${CFG.ELZ_MIN}–${CFG.ELZ_P} kW, ${CFG.ELZ_KWH_KG} kWh/kg. Fuel cell ${CFG.FC_MIN}–${CFG.FC_P} kW, ${CFG.FC_KWH_KG} kWh/kg. H₂ value varies by day (header). Power→H₂→power ≈ 33 %.<br>
        • Result = cash + stored battery energy (after discharge losses, at the average day-ahead price) + H₂ change at today's H₂ price.<br>
        • The operator grants the reconnection permit if you reach ≥ ${CFG.WIN_RATIO * 100} % of the extra profit a perfect-foresight benchmark makes over "do nothing".
      </div></details></div>
      <div class="modal hidden" id="gModal"><div class="card" id="gModalCard" style="min-width:min(440px,92vw);max-height:92vh;overflow:auto"></div></div>
    </div>`;
    const $ = (id) => this.el.querySelector('#' + id);
    this.$ = $;
    for (const k of ['bat', 'elz', 'fc', 'curt']) {
      $('s_' + k).addEventListener('input', (e) => { this.set[k] = Number(e.target.value); this.renderSide(); });
    }
    // blur after a click: a focused button would otherwise auto-repeat its own Enter activation
    $('gRun').addEventListener('click', (e) => { e.currentTarget.blur(); this.runHour(); });
    $('gRun3').addEventListener('click', (e) => { e.currentTarget.blur(); for (let i = 0; i < 3 && !this.finished; i++) this.runHour(); });
    $('gZero').addEventListener('click', () => { this.set = { bat: 0, elz: 0, fc: 0, curt: 0 }; this.renderSide(); });
    $('gClose').addEventListener('click', () => this.onClose?.());
    this.el.addEventListener('click', (e) => {
      if (e.target.id === 'gAdvisor') { this.advisorHour = this.h; this.onHint?.(!this.advisorUsed); this.advisorUsed = true; this.renderSide(); }
      if (e.target.id === 'gResult') this.showResult();
    });
    window.addEventListener('resize', () => { if (this.isOpen()) this.drawChart(); });
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen() || this.modalOpen()) return;
      if (e.key !== 'Enter') return;
      if (e.repeat) { e.preventDefault(); return; }       // a held Enter never fast-forwards the day (not even on a focused button)
      if (performance.now() - this.openedAt < 500) return;
      if (e.target.tagName === 'BUTTON') return;          // a focused button handles its own Enter
      e.preventDefault(); this.runHour();
    });
  }

  sliderHtml(k, label, min, max, step, l, r) {
    return `<div class="slider"><div class="top"><span>${label}</span><b id="v_${k}"></b></div>
      <input type="range" id="s_${k}" min="${min}" max="${max}" step="${step}" value="0" aria-label="${label}">
      <div class="sub"><span>${l}</span><span>${r}</span></div></div>`;
  }

  baselineAt(h) {
    let st = { soc: CFG.SOC0, h2: CFG.H2_0 }, cash = 0;
    for (let i = 0; i < h; i++) { const r = simHour(this.day, i, st, { bat: 0, elz: 0, fc: 0, curt: 0 }); cash += r.eur; st = r; }
    return score(this.day, cash, st).total;
  }

  render() {
    const $ = this.$;
    $('gDay').innerHTML = `Day ${this.dayNo} · <b style="font-size:13px">${this.day.kind}</b> · H₂ €${this.day.h2Price.toFixed(1)}/kg`;
    $('gHour').textContent = this.finished ? 'done' : `${hh(this.h)}–${hh(this.h + 1)}`;
    $('gCash').textContent = eur(this.cash);
    $('gCash').style.color = this.cash >= 0 ? '#6dff9a' : '#ff6b77';
    $('gSoc').textContent = `${(this.st.soc * 100).toFixed(0)} %`;
    $('gH2').textContent = `${this.st.h2.toFixed(1)} kg`;
    if (this.h > 0) {
      const me = score(this.day, this.cash, this.st).total;
      const b = this.bench.rows.slice(0, this.h);
      const bs = score(this.day, b.reduce((a, r) => a + r.eur, 0), b[b.length - 1]).total;
      const bb = this.baselineAt(this.h);
      const pot = bs - bb, ratio = pot > 1 ? (me - bb) / pot : 0;
      $('gPace').innerHTML = `Pace <b style="color:${ratio >= CFG.WIN_RATIO ? '#6dff9a' : '#ffc44a'}">${(ratio * 100).toFixed(0)} %</b> <span style="font-size:11px">of benchmark</span>`;
    } else $('gPace').textContent = '';
    const showBench = this.finished;
    $('gBenchH').classList.toggle('hidden', !showBench);
    $('gLog').innerHTML = this.log.map((r) => {
      const b = this.bench.rows[r.h];
      return `<tr>
      <td>${hh(r.h)}</td><td>${this.day.priceF[r.h].toFixed(0)}→<b style="color:${Math.abs(r.price - this.day.priceF[r.h]) > 30 ? '#ffd24a' : 'inherit'}">${r.price.toFixed(0)}</b></td>
      <td>${this.day.pvF[r.h].toFixed(0)}→${r.pvRaw.toFixed(0)}</td><td>${r.load}</td><td>${r.bat.toFixed(0)}</td><td>${r.elz.toFixed(0)}</td><td>${r.fc.toFixed(0)}</td>
      <td>${r.net.toFixed(0)}</td><td style="color:${r.eur >= 0 ? '#6dff9a' : '#ff6b77'}">${r.eur.toFixed(2)}</td>
      ${showBench ? `<td title="benchmark: batt ${b.bat.toFixed(0)} · elz ${b.elz.toFixed(0)} · fc ${b.fc.toFixed(0)} · curt ${this.bench.plan[r.h].curt}%" style="color:#8ea3b8">${b.eur.toFixed(2)} <span style="font-size:10px">(${b.bat > 0 ? '▲' : b.bat < 0 ? '▼' : '·'}${Math.abs(b.bat).toFixed(0)}${b.elz ? ' E' + b.elz.toFixed(0) : ''}${b.fc ? ' F' + b.fc.toFixed(0) : ''})</span></td>` : ''}
      <td>${(r.soc * 100).toFixed(0)}%</td><td>${r.h2.toFixed(1)}</td>
      <td style="text-align:left;color:#ffc44a">${r.notes.join(', ')}</td></tr>`;
    }).reverse().join('');
    this.renderSide();
    this.drawChart();
  }

  renderSide() {
    const $ = this.$, d = this.day, h = Math.min(this.h, 23);
    for (const k of ['bat', 'elz', 'fc', 'curt']) {
      $('s_' + k).value = this.set[k];
      const v = this.set[k];
      const eff = k === 'elz' ? minLoad(v, CFG.ELZ_MIN) : k === 'fc' ? minLoad(v, CFG.FC_MIN) : v;
      $('v_' + k).textContent = k === 'bat' ? (v === 0 ? 'idle' : v > 0 ? `+${v} kW discharge` : `${-v} kW charge`) : k === 'curt' ? `${v} %` : `${eff} kW`;
    }
    $('gFcTitle').textContent = this.finished ? 'Day complete' : `Forecast ${hh(h)}–${hh(h + 1)}`;
    $('gFc').innerHTML = `
      <span>Price (day-ahead)</span><span style="color:${d.priceF[h] < 0 ? '#7fd4ff' : d.priceF[h] > 180 ? '#ff8c42' : 'inherit'}">${d.priceF[h].toFixed(1)} €/MWh</span>
      <span>Weather</span><span>${wx(h, d.cloudF[h])} ${(d.cloudF[h] * 100).toFixed(0)} % clouds</span>
      <span>PV</span><span>${d.pvF[h].toFixed(0)} kW</span>
      <span>Load</span><span>${d.load[h]} kW</span>
      <span>Next 3 h price</span><span>${[1, 2, 3].map((i) => (h + i < 24 ? d.priceF[h + i].toFixed(0) : '—')).join(' / ')}</span>
      <span title="today's H₂ break-even prices">Break-evens</span><span>ELZ &lt; ${breakEvens(d).elzEx.toFixed(0)} · FC &gt; ${breakEvens(d).fcIm.toFixed(0)}</span>`;
    const r = simHour(d, h, this.st, this.set, true);
    $('gPrev').innerHTML = `Expected (forecast):<br>grid ${r.net >= 0 ? 'export' : 'import'} <b>${Math.abs(r.net).toFixed(0)} kW</b> → <b style="color:${r.eur >= 0 ? '#6dff9a' : '#ff6b77'}">${eur(r.eur)}</b>` +
      `<br>H₂ ${r.elz > 0 ? '+' + (r.elz / CFG.ELZ_KWH_KG).toFixed(2) : ''}${r.fc > 0 ? ' −' + (r.fc / CFG.FC_KWH_KG).toFixed(2) : ''}${r.elz || r.fc ? ' kg' : '±0'} (≈ ${eur((r.elz / CFG.ELZ_KWH_KG - r.fc / CFG.FC_KWH_KG) * d.h2Price)}) · SOC → ${(r.soc * 100).toFixed(0)} %` +
      (r.notes.length ? `<br><span style="color:#ffc44a">${r.notes.join(', ')}</span>` : '');
    $('gTip').innerHTML = this.finished ? '<button class="btn on" id="gResult">📋 Show the result</button>' : this.advisorHour === this.h ? '💡 ' + this.tip(h) : '<button class="btn" id="gAdvisor">💡 Ask the advisor (counts as a hint)</button>';
    $('gRun').disabled = this.finished;
    $('gRun3').disabled = this.finished;
  }

  tip(h) {
    const d = this.day, p = d.priceF[h], hp = d.h2Price;
    const { elzEx, fcEx, fcIm } = breakEvens(d);
    const surplus = d.pvF[h] > d.load[h];
    const be = `<br><span style="color:#6c8196">Break-evens today: electrolyzer below ${elzEx.toFixed(0)} €/MWh on surplus PV; from grid power only in renewable hours (≤ ${CFG.RFNBO_MAX} €/MWh), otherwise the H₂ is grey (€${CFG.H2_GREY}/kg). Fuel cell above ${fcIm.toFixed(0)} €/MWh when it avoids imports (above ${fcEx.toFixed(0)} when exporting).</span>`;
    if (p < 0) return `Negative price: every exported kWh costs money. Curtail PV, charge the battery, run the electrolyzer.${be}`;
    if (p > fcIm) return `High price: the fuel cell beats keeping H₂ worth €${hp}/kg — and discharge the battery.${be}`;
    if (surplus && p < elzEx) return `Surplus PV and a price below ${elzEx.toFixed(0)} €/MWh: turning PV into H₂ pays more than exporting.${be}`;
    const future = d.priceF.slice(h + 1);
    const mx = future.length ? Math.max(...future) : 0;
    const buy = surplus ? p : p + CFG.FEE;
    if (mx > buy / (CFG.BAT_EFF ** 2) + CFG.BAT_WEAR) return `Store now? Forecast peak later ${mx.toFixed(0)} €/MWh &gt; ${buy.toFixed(0)} / 0.90 + ${CFG.BAT_WEAR} wear → charging pays if you hold it until then.${be}`;
    return `No obvious arbitrage this hour. Imports carry €${CFG.FEE}/MWh fees.${be}`;
  }

  runHour() {
    if (this.finished) return;
    const r = simHour(this.day, this.h, this.st, this.set, false);
    this.cash += r.eur;
    this.st = { soc: r.soc, h2: r.h2 };
    this.log.push(r);
    this.h++;
    this.onStep?.();
    if (this.h >= 24) { this.finished = true; this.render(); this.showResult(); return; }
    this.render();
  }

  result() {
    const sc = score(this.day, this.cash, this.st);
    const gain = sc.total - this.base, pot = Math.max(1, this.bench.value - this.base);
    const ratio = gain / pot;
    const stars = ratio >= CFG.STAR3 ? 3 : ratio >= CFG.WIN_RATIO ? 2 : gain > 0 ? 1 : 0;
    return { ...sc, ratio, stars, won: ratio >= CFG.WIN_RATIO, base: this.base, bench: this.bench.value, day: this.dayNo, seed: this.seed };
  }

  showResult() {
    const res = this.result();
    let best = {};
    try { best = JSON.parse(localStorage.getItem(bestKey) || '{}'); } catch { /* storage unavailable */ }
    const prev = best[this.seed];
    if (prev === undefined || res.ratio > prev) { best[this.seed] = res.ratio; try { localStorage.setItem(bestKey, JSON.stringify(best)); } catch { /* ignore */ } }
    this.lastResult = res;
    const card = this.$('gModalCard');
    card.innerHTML = `<h2 style="margin-top:0;color:#ffd24a">Dispatch validation complete</h2>
      <div class="stars">${[1, 2, 3].map((i) => `<span class="${i <= res.stars ? '' : 'off'}">★</span>`).join('')}</div>
      <div class="res">
        <span>Cash from trading (incl. wear)</span><span>${eur(res.cash)}</span>
        <span>Battery energy change</span><span>${eur(res.batV)}</span>
        <span>H₂ inventory change</span><span>${eur(res.h2V)}</span>
        <span class="tot">Your result</span><span class="tot">${eur(res.total)}</span>
        <span style="color:#8ea3b8">"Do nothing" baseline</span><span style="color:#8ea3b8">${eur(this.base)}</span>
        <span style="color:#8ea3b8">Perfect-foresight benchmark</span><span style="color:#8ea3b8">${eur(this.bench.value)}</span>
        <span>Share of possible extra profit</span><span style="color:${res.won ? '#6dff9a' : '#ff6b77'}">${(res.ratio * 100).toFixed(0)} %</span>
        ${prev !== undefined ? `<span style="color:#8ea3b8">Previous best on this day</span><span style="color:#8ea3b8">${(prev * 100).toFixed(0)} %</span>` : ''}
      </div>
      <p class="note">${res.won
        ? '✔ The grid operator accepts the schedule and issues a <b>reconnection permit</b>. Synchronise the lab with the grid at the tie panel next to the exit.'
        : `The operator needs ≥ ${CFG.WIN_RATIO * 100} %. "Review the day" compares every hour with the benchmark (Bench € column, dashed SOC line). "Replay" keeps the forecasts, but the real clouds and intraday prices come out differently.`}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn" id="mReview">Review the day</button>
        <button class="btn" id="mRetry">Replay this day</button>
        <button class="btn" id="mNew">New day</button>
        ${res.won ? '<button class="btn big" id="mWin" style="margin:0">Take the permit ▶</button>' : ''}
      </div>`;
    this.$('gModal').classList.remove('hidden');
    const hide = () => this.$('gModal').classList.add('hidden');
    card.querySelector('#mReview').onclick = hide;
    card.querySelector('#mRetry').onclick = () => { hide(); this.replay(); this.render(); };
    card.querySelector('#mNew').onclick = () => { hide(); this.newDay(Math.floor(Math.random() * 1e6)); this.render(); };
    if (res.won) card.querySelector('#mWin').onclick = () => { hide(); this.permit = true; this.onWin(res); };
  }

  drawChart() {
    const cv = this.$('gChart');
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const W = cv.clientWidth, Hh = cv.clientHeight;
    if (!W || !Hh) return;
    cv.width = W * dpr; cv.height = Hh * dpr;
    const ctx = cv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, Hh);
    const d = this.day;
    const narrowChart = W < 560;
    const pl = narrowChart ? 36 : 52, pr = narrowChart ? 40 : 58, pt = narrowChart ? 44 : 76, pb = 26;
    const cw = (W - pl - pr) / 24;
    const x = (h) => pl + h * cw;
    const kwMax = 600;
    const yk = (kw) => pt + (Hh - pt - pb) * (1 - kw / kwMax);
    const allP = [...d.priceF, ...this.log.map((r) => r.price)];
    const pMin = Math.min(-50, Math.floor(Math.min(...allP) / 50) * 50);
    const pMax = Math.max(250, Math.ceil(Math.max(...allP) / 50) * 50);
    const yp = (p) => pt + (Hh - pt - pb) * (1 - (p - pMin) / (pMax - pMin));
    const mono = 'Consolas, "Courier New", monospace';

    ctx.font = `11px ${mono}`;
    ctx.strokeStyle = '#1a2633'; ctx.lineWidth = 1; ctx.fillStyle = '#6c8196';
    for (let kw = 0; kw <= kwMax; kw += 100) {
      ctx.beginPath(); ctx.moveTo(pl, yk(kw)); ctx.lineTo(W - pr, yk(kw)); ctx.stroke();
      ctx.textAlign = 'right'; ctx.fillText(kw, pl - 6, yk(kw) + 4);
    }
    ctx.strokeStyle = 'rgba(255,90,74,.35)'; ctx.setLineDash([6, 4]); ctx.beginPath(); ctx.moveTo(pl, yk(CFG.LIM)); ctx.lineTo(W - pr, yk(CFG.LIM)); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(255,120,100,.7)'; ctx.textAlign = 'left'; ctx.fillText(`grid limit ${CFG.LIM} kW`, pl + 4, yk(CFG.LIM) - 4);
    ctx.fillStyle = '#ff8c42';
    for (let p = pMin; p <= pMax; p += 50) ctx.fillText(p, W - pr + 6, yp(p) + 4);
    ctx.save(); ctx.fillStyle = '#6c8196'; ctx.translate(12, pt + 40); ctx.rotate(-Math.PI / 2); ctx.fillText('kW', 0, 0); ctx.restore();
    ctx.fillStyle = '#ff8c42'; ctx.fillText('€/MWh', W - pr + 6, pt - 8);
    if (pMin < 0) {
      ctx.fillStyle = 'rgba(80,160,255,.07)'; ctx.fillRect(pl, yp(0), W - pl - pr, yp(pMin) - yp(0));
      ctx.strokeStyle = 'rgba(127,212,255,.5)'; ctx.setLineDash([2, 3]); ctx.beginPath(); ctx.moveTo(pl, yp(0)); ctx.lineTo(W - pr, yp(0)); ctx.stroke(); ctx.setLineDash([]);
    }
    if (!this.finished) {
      ctx.fillStyle = 'rgba(255,210,74,.06)'; ctx.fillRect(x(this.h), 4, cw, Hh - pb - 4);
      ctx.strokeStyle = 'rgba(255,210,74,.5)'; ctx.setLineDash([3, 3]); ctx.strokeRect(x(this.h) + 0.5, 4.5, cw - 1, Hh - pb - 5); ctx.setLineDash([]);
    }
    ctx.textAlign = 'center';
    for (let h = 0; h < 24; h++) {
      const past = h < this.h;
      const c = past ? d.cloudA[h] : d.cloudF[h];
      const narrow = cw < 20;
      ctx.font = `${narrow ? 10 : 15}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`; ctx.globalAlpha = past ? 0.5 : 1;
      ctx.fillText(wx(h, c), x(h) + cw / 2, 20);
      ctx.font = `9px ${mono}`; ctx.fillStyle = '#6c8196';
      if (clearSky(h) > 0 && !narrow) ctx.fillText(`${(c * 100).toFixed(0)}%`, x(h) + cw / 2, 34);
      ctx.globalAlpha = 1;
      ctx.font = `10px ${mono}`; ctx.fillStyle = h === this.h ? '#ffd24a' : '#6c8196';
      if (!narrow || h % 3 === 0 || h === this.h) ctx.fillText(String(h).padStart(2, '0'), x(h) + cw / 2, Hh - 8);
    }
    for (let h = 0; h < 24; h++) {
      const bw = cw * 0.7, bx = x(h) + cw * 0.15;
      ctx.fillStyle = 'rgba(255,210,74,.22)';
      ctx.fillRect(bx, yk(d.pvF[h]), bw, yk(0) - yk(d.pvF[h]));
      if (h < this.h) {
        ctx.fillStyle = '#ffd24a';
        ctx.fillRect(bx + bw * 0.2, yk(d.pvA[h]), bw * 0.6, yk(0) - yk(d.pvA[h]));
        const r = this.log[h];
        if (r && r.pvRaw - r.pv > 1) { ctx.fillStyle = 'rgba(255,90,74,.7)'; ctx.fillRect(bx + bw * 0.2, yk(r.pvRaw), bw * 0.6, yk(r.pv) - yk(r.pvRaw)); }
      }
    }
    ctx.strokeStyle = '#8ea3b8'; ctx.lineWidth = 1.5; ctx.beginPath();
    for (let h = 0; h < 24; h++) { ctx.lineTo(x(h), yk(d.load[h])); ctx.lineTo(x(h + 1), yk(d.load[h])); }
    ctx.stroke();
    const socLine = (rows, dash, color) => {
      ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.setLineDash(dash); ctx.beginPath(); ctx.moveTo(x(0), yk(CFG.SOC0 * kwMax));
      rows.forEach((r, h) => ctx.lineTo(x(h + 1), yk(r.soc * kwMax)));
      ctx.stroke(); ctx.setLineDash([]);
    };
    if (this.finished) socLine(this.bench.rows, [4, 4], 'rgba(62,207,122,.55)');
    if (this.log.length) {
      socLine(this.log, [], '#3ecf7a');
      ctx.fillStyle = '#3ecf7a'; ctx.textAlign = 'left'; ctx.font = `10px ${mono}`;
      ctx.fillText(`SOC ${(this.st.soc * 100).toFixed(0)}%`, x(this.log.length) + 4, yk(this.st.soc * kwMax) - 4);
    }
    ctx.strokeStyle = 'rgba(255,140,66,.75)'; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]); ctx.beginPath();
    for (let h = 0; h < 24; h++) ctx.lineTo(x(h) + cw / 2, yp(d.priceF[h]));
    ctx.stroke(); ctx.setLineDash([]);
    if (this.log.length) {
      ctx.strokeStyle = '#ff8c42'; ctx.lineWidth = 2.5; ctx.beginPath();
      this.log.forEach((r, h) => ctx.lineTo(x(h) + cw / 2, yp(r.price)));
      ctx.stroke();
      ctx.fillStyle = '#ff8c42';
      this.log.forEach((r, h) => { ctx.beginPath(); ctx.arc(x(h) + cw / 2, yp(r.price), 3, 0, Math.PI * 2); ctx.fill(); });
    }
  }
}
