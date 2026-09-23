// Act 1 — laboratory island microgrid.
//
// Physics model (reviewed by our resident science nerd):
// • Three single-phase grid-forming inverters (a "cluster", like SMA Sunny Island units) each form ONE phase.
//   The phases are not coupled: a load on L2 can only be supplied by sources on L2.
// • In an island, generation = load at every instant. Sources only deliver what is consumed
//   (merit order: PV → battery → fuel cell); storage drains by DELIVERED power, so energy is conserved.
// • If demand on a phase exceeds what its inverters can deliver, they hit their current limit, the
//   voltage collapses and the under-voltage relay trips that phase.
// • One lab clock for everything: time-lapse ×360 (10 real seconds = 1 lab hour) — except the door-motor
//   start, which takes a few real seconds and therefore runs in real time (×1).
// • The door is driven by a 3-phase induction motor: starting it loads EVERY phase with 3 kW for 5 s.

export const PH = ['L1', 'L2', 'L3'];
export const PALETTES = {
  standard: ['#ff5a4a', '#ffd23f', '#4aa8ff'],
  colorblind: ['#e69f00', '#56b4e9', '#cc79a7'],   // Okabe–Ito
};
export const PH_COLORS = [...PALETTES.standard];   // mutated in place by settings
export function setPalette(name) { PALETTES[name].forEach((c, i) => { PH_COLORS[i] = c; }); }

export const C = {
  TL: 360,                 // time-lapse factor
  PV_DC: 5.4,              // kW DC: 6 m² III-V modules, η 30 % at 3 suns (3000 W/m²)
  LAMP_KW: 60,             // xenon lamp electrical input (≈ 30 % light yield → 18 kW of light on the rig)
  INV_EFF: 0.97,           // INV-1 efficiency → 5.24 kW AC
  BAT_KWH: 10, BAT_CH: 2.0, BAT_DIS: 3.5, BAT_EFF: 0.95, BAT_MIN: 0.25,
  ELZ_P: 3.0, ELZ_KWH_KG: 55,
  FC_P: 3.4, FC_KWH_KG: 18, FC_RAMP: 3, FC_START: 0.30,
  H2_KG: 0.22, H2_BAR: 30,
  AUX: 0.2,                // lights + controls on every energized phase
  DOOR_P: 3.0, DOOR_T: 5,  // door drive: kW per phase, seconds
};
const K = C.TL / 3600;     // lab hours per real second
export const PV_AC = C.PV_DC * C.INV_EFF;

const fmt = (x) => x.toFixed(2);

export class LabSim {
  constructor(puzzle) {
    this.puzzle = puzzle;
    this.s = {
      t: 0,
      sun: { unlocked: false, on: false, pin: '' },
      inv: {
        pv: { on: false, ph: -1 },
        bat: { on: false, ph: -1, mode: 'idle' },
        fc: { on: false, ph: -1 },
      },
      bat: { soc: 0.08 },
      elz: { on: false, ph: -1 },
      h2: { level: 0, valve: false, wheel: false },
      fc: { running: false, rt: 0 },
      trip: [false, false, false],
      door: { state: 'locked', t: 0 },
      stats: { trips: 0 },
    };
    this.version = 0;
    this.events = [];
    this.f = this.compute();
  }

  emit(msg, kind = 'info', sfx) { this.events.push({ msg, kind, sfx }); this.version++; }

  /** Instantaneous per-phase dispatch. */
  compute() {
    const s = this.s;
    const cap = [0, 0, 0], load = [0, 0, 0], avail = [[], [], []];
    const f = { cap, load, head: [0, 0, 0], live: [false, false, false], pv: 0, bat: 0, fc: 0, elz: 0, door: 0, pvAvail: 0, fcAvail: 0 };
    const ok = (p) => p >= 0 && !s.trip[p];

    f.pvAvail = s.sun.on ? PV_AC * (0.998 + 0.002 * Math.sin(s.t * 0.9)) : 0;   // tiny flicker, never below 5.2 kW
    f.fcAvail = s.fc.running && s.fc.rt >= C.FC_RAMP ? C.FC_P : 0;   // output contactor closes after warm-up
    const ip = s.inv.pv, ib = s.inv.bat, ifc = s.inv.fc;
    if (ip.on && ok(ip.ph) && f.pvAvail > 0) avail[ip.ph].push(['pv', f.pvAvail]);
    if (s.grid) for (let p = 0; p < 3; p++) avail[p].push(['grid', 1000]);   // after resynchronisation the public grid backs every phase
    if (ib.on && ib.mode === 'discharge' && ok(ib.ph) && s.bat.soc > C.BAT_MIN) avail[ib.ph].push(['bat', C.BAT_DIS]);
    if (ifc.on && ok(ifc.ph) && f.fcAvail > 0) avail[ifc.ph].push(['fc', f.fcAvail]);
    for (let p = 0; p < 3; p++) { cap[p] = avail[p].reduce((a, [, v]) => a + v, 0); f.live[p] = cap[p] > 0; }

    for (let p = 0; p < 3; p++) if (f.live[p]) load[p] += C.AUX;
    if (s.elz.on && ok(s.elz.ph) && f.live[s.elz.ph] && s.h2.level < 1) { load[s.elz.ph] += C.ELZ_P; f.elz = C.ELZ_P; }
    if (ib.on && ib.mode === 'charge' && ok(ib.ph) && f.live[ib.ph] && s.bat.soc < 1) { load[ib.ph] += C.BAT_CH; f.bat = -C.BAT_CH; }
    if (s.door.state === 'opening') { for (let p = 0; p < 3; p++) load[p] += C.DOOR_P; f.door = C.DOOR_P; }

    // merit-order dispatch on each phase
    for (let p = 0; p < 3; p++) {
      let rest = load[p];
      for (const [who, a] of avail[p]) {
        const d = Math.min(a, rest); rest -= d;
        if (who === 'pv') f.pv += d; else if (who === 'bat') f.bat += d; else if (who === 'fc') f.fc += d;
      }
      f.head[p] = cap[p] - load[p];
    }
    return f;
  }

  tick(dt) {
    const s = this.s;
    s.t += dt;
    if (s.fc.running) s.fc.rt += dt;
    let f = this.compute();
    const k = (s.door.state === 'opening' ? 1 / 3600 : K) * dt;   // lab hours elapsed this tick

    // under-voltage protection
    for (let p = 0; p < 3; p++) {
      if (f.load[p] > f.cap[p] + 1e-6 && (f.cap[p] > 0 || f.door)) {
        s.trip[p] = true; s.stats.trips++;
        this.emit(f.cap[p] > 0
          ? `⚠ ${PH[p]}: demand ${fmt(f.load[p])} kW > ${fmt(f.cap[p])} kW available — inverter current limit, voltage collapse, under-voltage relay TRIPPED. Reset at the main bus panel.`
          : `⚠ ${PH[p]} has no voltage — the door motor is single-phasing and hums. Drive stopped.`, 'bad', 'clack');
      }
    }
    if (s.trip.some(Boolean)) {
      if (s.door.state === 'opening') { s.door.state = 'locked'; s.door.t = 0; this.emit('Door drive stalled — the bolt re-engages.', 'bad'); }
      f = this.compute();
    }

    // storage by delivered power
    if (f.bat < 0) s.bat.soc = Math.min(1, s.bat.soc - f.bat * C.BAT_EFF * k / C.BAT_KWH);
    if (f.bat > 0) {
      s.bat.soc = Math.max(0, s.bat.soc - f.bat / C.BAT_EFF * k / C.BAT_KWH);
      if (s.bat.soc <= C.BAT_MIN) this.emit('Battery BMS: SOC reached 25 % — discharge blocked.', 'bad');
    }
    if (f.elz > 0) {
      const before = s.h2.level;
      s.h2.level = Math.min(1, s.h2.level + C.ELZ_P / C.ELZ_KWH_KG * k / C.H2_KG);
      if (before < C.FC_START && s.h2.level >= C.FC_START) this.emit('H₂ tank above 30 % — enough to start the fuel cell.', 'good');
      if (s.h2.level >= 1) this.emit('H₂ tank full (30 bar) — electrolyzer idles.');
    }
    if (f.fc > 0) {
      s.h2.level = Math.max(0, s.h2.level - f.fc / C.FC_KWH_KG * k / C.H2_KG);
      if (s.h2.level <= 0) { s.fc.running = false; s.fc.rt = 0; this.emit('Fuel cell shut down: H₂ tank empty.', 'bad'); }
    }
    if (s.fc.running && !s.h2.valve) { s.fc.running = false; s.fc.rt = 0; this.emit('Fuel cell shut down: H₂ valve closed.', 'bad'); }

    // door drive
    if (s.door.state === 'opening') {
      s.door.t += dt;
      if (s.door.t >= C.DOOR_T) { s.door.state = 'open'; this.emit('🔓 Door open!', 'good', 'thunk'); }
    }
    this.f = f;
  }

  doorReady() { return this.f.head.every((h) => h >= C.DOOR_P - 1e-6); }

  /** Current hint topic with three tiers: nudge, pointer, solution. */
  hintTopic() {
    const s = this.s, f = this.f, P = this.puzzle;
    const pvPh = s.inv.pv.ph >= 0 ? PH[s.inv.pv.ph] : 'the PV phase';
    if (s.trip.some(Boolean)) return { id: 'trip', tiers: [
      'Something clicked off. The main bus panel will tell you what.',
      'A phase tripped because its demand exceeded what the inverters on that phase can deliver.',
      'Remove load from the tripped phase (or add a source), then press RESET at the main bus panel on the right wall.'] };
    if (!s.sun.unlocked) return { id: 'pin', tiers: [
      'The test rig on the left wall is dark. Something must control those lamps.',
      'The sun-simulator keypad wants a 4-digit year. Marco\'s notes mention when the lab opened — look for something engraved.',
      `PIN ${P.year} — it is on the brass plaque above the workbench.`] };
    if (!s.sun.on) return { id: 'sun', tiers: ['The keypad is unlocked now.', 'Switch the lamp array on.', 'Keypad → Lamp array ON.'] };
    if (f.pvAvail > 0 && !(s.inv.pv.on && s.inv.pv.ph >= 0)) return { id: 'inv1', tiers: [
      'Light on the modules makes DC. The lab bus is AC.',
      'Something has to convert the PV power — look at the inverters on the right wall.',
      'INV-1: power ON, output phase L1.'] };
    const needBat = s.bat.soc < 0.35, needH2 = s.h2.level < 0.45;
    const charging = s.inv.bat.on && s.inv.bat.mode === 'charge' && s.inv.bat.ph === s.inv.pv.ph;
    const elzing = s.elz.on && s.elz.ph === s.inv.pv.ph;
    if ((needBat && !charging) || (needH2 && !elzing)) return { id: 'store', tiers: [
      'The door motor needs all three phases. One PV inverter can only energize one of them — and the other two sources are empty.',
      'Loads only run from a source on the SAME phase. Use PV power to fill the battery and the H₂ tank.',
      `INV-2: ON, CHARGE, phase ${pvPh}. Electrolyzer: ON, phase ${pvPh}. 2 + 3 + 0.2 kW aux = 5.2 kW ≤ 5.24 kW PV. Fill the battery to ≥ 35 % and the tank to ≥ 45 % — a margin above the 25 % / 30 % limits.`] };
    if (needBat || needH2) return { id: 'wait', tiers: [
      'Storage takes time — even at ×360 time-lapse.',
      `Battery ${(s.bat.soc * 100).toFixed(0)} % (aim ≥ 35 %), H₂ ${(s.h2.level * 100).toFixed(0)} % (aim ≥ 45 %). The 5 s motor start itself is cheap, but idle phases keep draining their storage through the 0.2 kW aux load at ×360.`,
      'Meanwhile, solve the valve problem: the H₂ tank has no handwheel.'] };
    if (!s.h2.wheel) return { id: 'wheel', tiers: [
      'The fuel cell needs hydrogen from the tank — but can you actually open the valve?',
      'The handwheel was removed ("M.V."). Marco keeps things in the workbench drawer — it has a 4-digit lock.',
      `The resistor on the bench: ${P.bands.map((b, i) => (i < 2 ? ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'][b] : '×10^' + b)).join(', ')} → ${P.drawerCode} Ω. Drawer code ${P.drawerCode}. Then use the handwheel on the tank.`] };
    if (!s.fc.running || !(s.inv.fc.on && s.inv.fc.ph >= 0)) return { id: 'fc', tiers: [
      'Hydrogen in a tank does not make electricity by itself.',
      'Open the H₂ valve, start the fuel cell stack, and give its inverter (INV-3) a phase.',
      'H₂ tank: valve OPEN. Fuel cell: START. INV-3: ON, a phase not used by PV.'] };
    if (!this.doorReady()) return { id: 'split', tiers: [
      'Three sources, three phases. The door motor draws 3 kW on EVERY phase at once.',
      'Give each source its own phase and switch the loads off. Check "headroom" on the bus panel or the door controller.',
      'Electrolyzer OFF, INV-2 → DISCHARGE. PV on L1, battery on L2, fuel cell on L3. Every phase then has ≥ 3 kW headroom.'] };
    return { id: 'open', tiers: ['All three phases have enough headroom.', 'The door controller next to the door has an OPEN button.', 'Door controller → OPEN, and keep the sources running for 5 s.'] };
  }

  objective() {
    const s = this.s;
    if (s.door.state === 'open') return null;
    if (s.door.state === 'opening') return `Door drive running… ${(C.DOOR_T - s.door.t).toFixed(1)} s`;
    return 'Get out of the booth. The door is driven by a <b>3-phase motor</b> — and the lab is dark.';
  }

  // ------------------------------------------------------------------ panels
  panel(id) {
    const s = this.s, f = this.f;
    const onoff = (key, on) => `<div class="seg"><button class="btn ${on ? 'on' : ''}" data-act="${key}:1">ON</button><button class="btn ${!on ? 'danger' : ''}" data-act="${key}:0">OFF</button></div>`;
    const phasesel = (key, ph) => `<div class="seg">${PH.map((n, i) => `<button class="btn ${ph === i ? 'on' : ''}" data-act="${key}:${i}" style="${ph === i ? '' : `border-color:${PH_COLORS[i]}88`}">${n}</button>`).join('')}</div>`;
    const lcd = (txt, red = false) => `<div class="lcd ${red ? 'red' : ''}">${txt}</div>`;
    const tl = '<p class="note">⏩ Lab time-lapse ×360 — 10 s ≈ 1 h.</p>';
    const P = {};

    P.sunsim = {
      title: 'Sun Simulator · Control Keypad',
      controls: () => s.sun.unlocked
        ? `<div class="ctl"><label>Lamp array</label>${onoff('sun', s.sun.on)}</div>
           <p class="note">Xenon arc lamps giving 3 suns (3000 W/m²) on the test rig. Lamp input ≈ ${C.LAMP_KW} kW from the building's emergency generator ("temporarily" — M.V.). Lamp → light → PV → AC is only ≈ 9 % efficient.</p>`
        : `<p class="note">SYSTEM LOCKED — enter 4-digit PIN. (Number keys work too.)</p>
           <div class="keypad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => `<button class="btn" data-act="pin:${d}">${d}</button>`).join('')}
           <button class="btn warn" data-act="pin:C">C</button><button class="btn" data-act="pin:0">0</button><button class="btn on" data-act="pin:OK">OK</button></div>`,
      live: () => s.sun.unlocked
        ? lcd(`LAMPS ${s.sun.on ? 'ON ' : 'OFF'}   IRRADIANCE ${s.sun.on ? '3000' : '   0'} W/m²
LAMP INPUT ${s.sun.on ? C.LAMP_KW : 0} kW (emergency generator)`)
        : lcd(`PIN: ${(s.sun.pin + '____').slice(0, 4).split('').join(' ')}`, true),
    };

    P.pv = {
      title: 'PV Test Rig · III-V modules',
      controls: () => `<div class="kv"><span>Modules</span><span>3 × 2 m² III-V multi-junction modules (η ≈ 30 %)</span>
        <span>Output at 3 suns</span><span>${C.PV_DC} kW DC</span><span>Connected to</span><span>INV-1 (hybrid inverter)</span></div>
        <p class="note">6 m² × 3000 W/m² × 0.30 = 5.4 kW. The modules make DC; only an inverter can put it on the 230 V AC bus.</p>`,
      live: () => lcd(`IRRADIANCE  ${s.sun.on ? '3000' : '0'} W/m²\nDC POWER    ${fmt(f.pvAvail / C.INV_EFF)} kW available\nAC FEED-IN  ${fmt(f.pv)} kW (as much as the phase consumes)`),
    };

    const invLive = (name, avail, out, inv, extra = '') => {
      let status = 'OFF';
      if (inv.on) {
        if (inv.ph < 0) status = 'NO PHASE SELECTED';
        else if (s.trip[inv.ph]) status = `FAULT: ${PH[inv.ph]} UNDER-VOLTAGE TRIP`;
        else status = avail > 0 ? `FORMING ${PH[inv.ph]} · 230 V 50 Hz` : 'STANDBY (no DC source)';
      }
      return lcd(`${name}\nSTATUS     ${status}\nAVAILABLE  ${fmt(avail)} kW\nDELIVERING ${fmt(out)} kW${extra}`, inv.on && inv.ph >= 0 && s.trip[inv.ph]);
    };

    P.inv_pv = {
      title: 'INV-1 · Hybrid PV Inverter (6 kVA, η 97 %)',
      controls: () => `<div class="ctl"><label>Power</label>${onoff('invpv', s.inv.pv.on)}</div>
        <div class="ctl"><label>Output phase</label>${phasesel('invpvph', s.inv.pv.ph)}</div>
        <p class="note">Backup (EPS) mode: grid-forming on one phase. It throttles PV down to exactly what that phase consumes.</p>`,
      live: () => invLive('INV-1 PV', s.inv.pv.on ? f.pvAvail : 0, f.pv, s.inv.pv),
    };

    P.inv_bat = {
      title: 'INV-2 · Battery Inverter (bidirectional)',
      controls: () => `<div class="ctl"><label>Power</label>${onoff('invbat', s.inv.bat.on)}</div>
        <div class="ctl"><label>Mode</label><div class="seg">${['idle', 'charge', 'discharge'].map((m) => `<button class="btn ${s.inv.bat.mode === m ? 'on' : ''}" data-act="batmode:${m}">${m.toUpperCase()}</button>`).join('')}</div></div>
        <div class="ctl"><label>AC phase</label>${phasesel('invbatph', s.inv.bat.ph)}</div>
        <p class="note">CHARGE draws ${C.BAT_CH} kW from its phase — something else must be feeding that phase.<br>DISCHARGE forms the phase and supplies up to ${C.BAT_DIS} kW while SOC &gt; 25 %.</p>${tl}`,
      live: () => invLive('INV-2 BATTERY', s.inv.bat.on && s.inv.bat.mode === 'discharge' && s.bat.soc > C.BAT_MIN ? C.BAT_DIS : 0, f.bat, s.inv.bat,
        `\nSOC        ${(s.bat.soc * 100).toFixed(1)} %` + (s.inv.bat.on && s.inv.bat.mode === 'discharge' && s.bat.soc <= C.BAT_MIN ? '\nBMS        DISCHARGE BLOCKED (SOC < 25 %)' : '')),
    };

    P.inv_fc = {
      title: 'INV-3 · Fuel Cell Inverter',
      controls: () => `<div class="ctl"><label>Power</label>${onoff('invfc', s.inv.fc.on)}</div>
        <div class="ctl"><label>Output phase</label>${phasesel('invfcph', s.inv.fc.ph)}</div>
        <p class="note">Converts the fuel cell's DC stack voltage to AC. The stack itself must be running.</p>`,
      live: () => invLive('INV-3 FUEL CELL', s.inv.fc.on ? f.fcAvail : 0, f.fc, s.inv.fc),
    };

    P.battery = {
      title: 'Battery Storage · Li-ion (LFP) 10 kWh',
      controls: () => `<div class="kv"><span>Capacity</span><span>10 kWh, 95 % one-way efficiency</span><span>BMS discharge limit</span><span>SOC ≥ 25 %</span>
        <span>Controlled by</span><span>INV-2 (right wall)</span></div>${tl}`,
      live: () => {
        const soc = s.bat.soc * 100;
        const col = soc < 25 ? '#ff5a4a' : soc < 50 ? '#ffc44a' : '#3ecf7a';
        return `<div style="font:28px Consolas,monospace;margin:4px 0">${soc.toFixed(1)} % <span style="font-size:15px;color:#8ea3b8">= ${(s.bat.soc * C.BAT_KWH).toFixed(2)} kWh</span></div><div class="bar" style="height:16px"><i style="width:${soc}%;background:${col}"></i><span class="mark" style="left:25%"></span><span class="mark" style="left:50%;opacity:.35"></span></div>` +
          lcd(`STATE  ${f.bat > 0 ? 'DISCHARGING' : f.bat < 0 ? 'CHARGING' : 'IDLE'}\nPOWER  ${fmt(f.bat)} kW (AC)`);
      },
    };

    P.electrolyzer = {
      title: 'PEM Electrolyzer · 3 kW',
      controls: () => `<div class="ctl"><label>Power</label>${onoff('elz', s.elz.on)}</div>
        <div class="ctl"><label>Supply phase</label>${phasesel('elzph', s.elz.ph)}</div>
        <p class="note">Splits water into H₂ and O₂: 55 kWh per kg of H₂, delivered at 30 bar straight into the tank (no compressor).</p>${tl}`,
      live: () => {
        let st = 'OFF';
        if (s.elz.on) {
          if (s.elz.ph < 0) st = 'NO SUPPLY PHASE';
          else if (s.trip[s.elz.ph]) st = `NO VOLTAGE (${PH[s.elz.ph]} TRIPPED)`;
          else if (!f.live[s.elz.ph]) st = `NO VOLTAGE ON ${PH[s.elz.ph]}`;
          else if (s.h2.level >= 1) st = 'TANK FULL';
          else st = `PRODUCING ${(C.ELZ_P / C.ELZ_KWH_KG * 1000).toFixed(0)} g/h`;
        }
        return lcd(`STATUS   ${st}\nPOWER    ${fmt(f.elz)} kW\nH₂ TANK  ${(s.h2.level * C.H2_KG * 1000).toFixed(0)} g · ${(s.h2.level * C.H2_BAR).toFixed(1)} bar`, st.startsWith('NO'));
      },
    };

    P.h2tank = {
      title: 'H₂ Buffer Tank · 30 bar, 90 L',
      controls: () => (s.h2.wheel
        ? `<div class="ctl"><label>Manual valve</label><div class="seg"><button class="btn ${s.h2.valve ? 'on' : ''}" data-act="valve:1">OPEN</button><button class="btn ${!s.h2.valve ? 'danger' : ''}" data-act="valve:0">CLOSE</button></div></div>`
        : `<div class="lcd red">The valve spindle is bare — the handwheel has been removed.\nTag: "HANDWHEEL REMOVED AFTER THE INTERN INCIDENT — M.V."</div>
           <div class="ctl"><button class="btn" data-act="usewheel:1">Use handwheel from inventory</button></div>`) +
        `<p class="note">Holds up to ${C.H2_KG * 1000} g of H₂ (≈ 7.3 kWh chemical energy, but a fuel cell turns only ~⅓ of the electricity back into electricity).</p>`,
      live: () => `<div style="font:28px Consolas,monospace;margin:4px 0">${(s.h2.level * C.H2_KG * 1000).toFixed(0)} g <span style="font-size:15px;color:#8ea3b8">${(s.h2.level * C.H2_BAR).toFixed(1)} bar · ${(s.h2.level * 100).toFixed(0)} %</span></div><div class="bar" style="height:16px"><i style="width:${s.h2.level * 100}%;background:#7fd4ff"></i><span class="mark" style="left:30%"></span><span class="mark" style="left:60%;opacity:.35"></span></div>` +
        lcd(`VALVE  ${s.h2.wheel ? (s.h2.valve ? 'OPEN' : 'CLOSED') : 'NO HANDWHEEL'}`, !s.h2.wheel),
    };

    P.fuelcell = {
      title: 'PEM Fuel Cell · 3.4 kW',
      controls: () => `<div class="ctl"><label>Stack</label><div class="seg"><button class="btn ${s.fc.running ? 'on' : ''}" data-act="fc:1">START</button><button class="btn ${!s.fc.running ? 'danger' : ''}" data-act="fc:0">STOP</button></div></div>
        <p class="note">Start conditions: H₂ valve open, tank ≥ 30 %. Warm-up ramp ${C.FC_RAMP} s. 18 kWh of electricity per kg H₂. Output goes through INV-3.</p>${tl}`,
      live: () => lcd(`STACK      ${s.fc.running ? (f.fcAvail === 0 ? `WARMING UP ${Math.max(0, C.FC_RAMP - s.fc.rt).toFixed(1)} s` : 'RUNNING') : 'STOPPED'}\nAVAILABLE  ${fmt(f.fcAvail)} kW\nDELIVERING ${fmt(f.fc)} kW (via INV-3)\nH₂         ${(s.h2.level * C.H2_KG * 1000).toFixed(0)} g · valve ${s.h2.valve ? 'OPEN' : 'CLOSED'}`),
    };

    P.bus = {
      title: 'Main Bus · 3~ 230/400 V island',
      controls: () => `<div class="ctl"><label>Under-voltage relays</label><div class="seg">${PH.map((n, i) => `<button class="btn ${s.trip[i] ? 'danger' : 'on'}" data-act="reset:${i}">${n} ${s.trip[i] ? 'RESET' : 'OK'}</button>`).join('')}</div></div>
        <p class="note">Each phase is formed by its own single-phase inverter — power cannot hop from one phase to another.
        <b>Headroom</b> = what the sources on a phase could still deliver. Negative headroom → current limit → voltage collapse → trip.</p>`,
      live: () => {
        const who = (p) => {
          const l = [];
          if (s.inv.pv.ph === p && s.inv.pv.on) l.push('PV');
          if (s.inv.bat.ph === p && s.inv.bat.on) l.push(`BAT(${s.inv.bat.mode})`);
          if (s.inv.fc.ph === p && s.inv.fc.on) l.push('FC');
          if (s.elz.ph === p && s.elz.on) l.push('ELZ');
          return l.join(', ') || '—';
        };
        const tot = f.load.reduce((a, b) => a + b, 0);
        const iN = Math.sqrt(f.load.reduce((a, b) => a + b * b, 0) - f.load[0] * f.load[1] - f.load[1] * f.load[2] - f.load[0] * f.load[2]) * 1000 / 230;
        return `<table class="phase-table"><tr><th>Phase</th><th>Avail kW</th><th>Load kW</th><th>Headroom</th><th>Devices</th></tr>${PH.map((n, p) =>
          `<tr><td style="color:${PH_COLORS[p]}">${n}${s.trip[p] ? ' <span class="bad">TRIP</span>' : f.live[p] ? '' : ' <span style="color:#667">dead</span>'}</td><td>${fmt(f.cap[p])}</td><td>${fmt(f.load[p])}</td><td class="${f.head[p] >= C.DOOR_P ? 'ok' : ''}">${fmt(f.head[p])}${f.head[p] >= C.DOOR_P ? ' ✔' : ''}</td><td>${who(p)}</td></tr>`).join('')}</table>
          <div class="note">Total load ${fmt(tot)} kW · neutral current ${iN.toFixed(1)} A ${iN < 1 ? '(balanced)' : '(unbalanced)'}</div>`;
      },
    };

    P.door = {
      title: 'Door Drive Controller',
      controls: () => (s.door.state === 'open' ? '' : `<p class="note">Sliding door, fail-secure. Drive: 3-phase induction motor — starting current loads <b>${C.DOOR_P} kW on EACH phase</b> for ${C.DOOR_T} s (real time — the ×360 time-lapse pauses while the motor starts). A missing phase makes the motor hum and stall ("single-phasing").</p>
        <div class="ctl"><button class="btn big" data-act="door:open" style="margin:0" ${s.door.state === 'opening' ? 'disabled' : ''}>OPEN DOOR</button></div>`),
      live: () => (s.door.state === 'open' ? lcd('STATUS  OPEN ✔') :
        lcd(PH.map((n, p) => `${n}  headroom ${fmt(f.head[p]).padStart(5)} kW  ${f.head[p] >= C.DOOR_P - 1e-6 ? '✔ ready' : '✘'}`).join('\n') +
          (s.door.state === 'opening' ? `\n\nDRIVE RUNNING  ${s.door.t.toFixed(1)} / ${C.DOOR_T}.0 s` : `\n\nSTATUS  ${this.doorReady() ? 'READY' : 'LOCKED'}`), !this.doorReady() && s.door.state !== 'opening')),
    };

    return P[id];
  }

  action(act) {
    const [k, v] = act.split(':');
    const s = this.s;
    const n = Number(v);
    let msg = null;
    switch (k) {
      case 'pin':
        if (s.sun.unlocked) break;
        if (v === 'C') s.sun.pin = s.sun.pin.slice(0, -1);
        else if (v === 'OK') {
          if (s.sun.pin === String(this.puzzle.year)) { s.sun.unlocked = true; msg = ['Sun simulator unlocked.', 'good']; }
          else { s.sun.pin = ''; msg = ['Wrong PIN.', 'bad']; }
        } else if (s.sun.pin.length < 4) s.sun.pin += v;
        break;
      case 'sun': s.sun.on = !!n; break;
      case 'invpv': s.inv.pv.on = !!n; break;
      case 'invpvph': s.inv.pv.ph = n; break;
      case 'invbat': s.inv.bat.on = !!n; break;
      case 'invbatph': s.inv.bat.ph = n; break;
      case 'batmode': s.inv.bat.mode = v; break;
      case 'invfc': s.inv.fc.on = !!n; break;
      case 'invfcph': s.inv.fc.ph = n; break;
      case 'elz': s.elz.on = !!n; break;
      case 'elzph': s.elz.ph = n; break;
      case 'wheel': s.h2.wheel = true; msg = ['Handwheel attached to the H₂ valve.', 'good']; break;
      case 'valve': if (s.h2.wheel) s.h2.valve = !!n; break;
      case 'fc':
        if (n) {
          if (!s.h2.valve) msg = ['Fuel cell: start failed — H₂ valve is closed.', 'bad'];
          else if (s.h2.level < C.FC_START) msg = ['Fuel cell: start failed — H₂ tank below 30 %.', 'bad'];
          else if (!s.fc.running) { s.fc.running = true; s.fc.rt = 0; msg = ['Fuel cell stack started — warming up.', 'good']; }
        } else { s.fc.running = false; s.fc.rt = 0; }
        break;
      case 'reset':
        if (s.trip[n]) {
          s.trip[n] = false;
          const f = this.compute();
          if (f.load[n] > f.cap[n] + 1e-6 && f.cap[n] > 0) { s.trip[n] = true; msg = [`${PH[n]} trips again — reduce the load first!`, 'bad']; }
          else msg = [`${PH[n]} relay reset.`, 'good'];
        }
        break;
      case 'door': {
        if (s.door.state !== 'locked') break;
        const f = this.compute();
        const dead = PH.filter((_, p) => !f.live[p]);
        if (dead.length) { msg = [`Motor hums and won't turn — single-phasing (${dead.join(', ')} ${dead.length > 1 ? 'have' : 'has'} no voltage).`, 'bad']; break; }
        s.door.state = 'opening'; s.door.t = 0;
        msg = ['Door drive starting…', 'info'];
        break;
      }
    }
    this.version++;
    if (msg) this.events.push({ msg: msg[0], kind: msg[1] });
    this.f = this.compute();
  }
}
