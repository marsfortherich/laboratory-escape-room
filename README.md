# ⚡ Power Lab Escape

A first-person 3D escape room in the browser about **3-phase island grids, hydrogen, hacking and energy trading**.

> Friday, 18:40. A storm has knocked out the public grid. You are locked in the booth of a solar test laboratory.
> The door is driven by a 3-phase motor, and the emergency lights last about an hour.

- **Act 1 – The booth.** Bring a lab microgrid to life: a CPV test rig under a sun simulator, three single-phase grid-forming inverters, a 10 kWh battery, a PEM electrolyzer, a hydrogen tank and a fuel cell. Each phase is its own island, so the door motor only starts once **every** phase can carry 3 kW.
- **Act 2 – The control room.** Crack Marco Volta's shell account using clues from the 3D world: a cat's collar tag, a lamp count, a binary LED row and a logic board.
- **Act 3 – gridctl.** Validate a 24-hour dispatch against day-ahead price and weather forecasts. There are negative prices, evening spikes and forecast errors, and your plan is scored against a perfect-foresight optimum.
- **Finale – Synchronise.** Match voltage and frequency, fix the phase rotation with the dark-lamp method, and close the tie breaker at 12 o'clock on the synchroscope. Then walk out into the dawn.

A **Classic room** follows the walkthrough below. A **Daily room** changes every code and clue each day.

---

## Play

- **Online:** see [Deploy to GitHub Pages](#deploy-to-github-pages) below.
- **Offline:** download or clone the repo and **double-click `index.html`**. It runs straight from disk, with no server and no internet (Three.js is bundled).

| | Desktop | Phone / tablet |
|---|---|---|
| Move | `W A S D`, `Shift` to run | left thumb joystick, **RUN** |
| Look | mouse | drag with right thumb |
| Use | `E` or click | tap the object, or **USE** |
| Hint / Journal | `H` / `J` | 💡 / 📓 |
| Menu & settings | `Esc` | ☰ |

- **Settings:** look sensitivity, invert Y, FOV, volume, UI scale, reduced motion, a colour-blind-safe palette and render quality.
- **Saving:** progress is saved automatically in your browser. Use **Continue** on the title screen.

## Deploy to GitHub Pages

The site is plain static files, so no server-side code is needed.

1. Create a GitHub repository and push this folder to the `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push again, or run the **Deploy to GitHub Pages** workflow by hand.

The workflow (`.github/workflows/pages.yml`) runs the tests, rebuilds the bundle and publishes `index.html`, `favicon.svg`, `css/` and `dist/`. The site then appears at `https://<user>.github.io/<repo>/`. All paths are relative, so it works from a project subpath.

Prefer "Deploy from a branch" instead? That works too, because the built `dist/game.js` is committed. Set **Source: Deploy from a branch → main / (root)**.

## Development

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:8080/?dev>, which loads the ES-module sources directly, so you can edit and reload.

```bash
npm test
```

```bash
npm run build
```

- `npm test` runs headless tests of the simulations, puzzles and economics.
- `npm run build` rebuilds `dist/game.js` and stamps a cache-busting hash into `index.html`.

Always run `npm run build` before committing, so that double-click and branch deploys get the new code.

**Debug shortcuts:** `?skip=door|terminal|grid|sync` jumps ahead (these runs don't save). `?seed=<n>` plays a specific daily room. `window.__game` exposes state in the console.

### Project structure

| File | Purpose |
|---|---|
| `js/main.js` | game loop, stages, first-person controls, interaction and highlight, panels, hints, journal, inventory, timer, save/load, HUD |
| `js/world.js` | builds both rooms, the corridor and all props from primitives and canvas textures |
| `js/labsim.js` | Act 1 physics: per-phase dispatch, energy-conserving storage, trips, the door drive; device panels and tiered hints |
| `js/terminal.js` | Act 2 shell: virtual filesystem, users, mail, `scada diag`, `gridctl` |
| `js/gridgame.js` | Act 3: weather/price scenarios, hourly dispatch model, scoring, DP benchmark, dashboard |
| `js/sync.js` | finale: synchroscope, dark-lamp model, closing rules |
| `js/puzzle.js` · `js/schematic.js` | seeded puzzle parameters (classic / daily) and logic-circuit drawing |
| `js/story.js` | intro, voice memos, whiteboard, e-mails, checklist, ranks |
| `js/audio.js` | procedural WebAudio: spatial 50 Hz hum, fuel-cell fan, electrolyzer bubbles, footsteps, UI sounds |
| `js/settings.js` · `js/touch.js` | persisted settings, touch controls |
| `tools/build.mjs` | esbuild bundle + hash stamping |
| `tests/sim.test.mjs` | Node tests (`npm test`) |

## The science, briefly

- **Island microgrid.** Three single-phase grid-forming inverters each form one phase, like a battery-inverter cluster. Power can't move between phases. At every instant generation equals load, so sources only deliver what is consumed, in the order PV, then battery, then fuel cell. Storage drains by the power it actually delivers. Demand above a phase's capacity pushes the inverter to its current limit; the voltage collapses and the under-voltage relay trips.
- **One lab clock.** Everything runs on the same ×360 time-lapse: 10 s of play is 1 lab hour.
  - Battery: 10 kWh, 95 % efficiency each way.
  - Electrolyzer: 55 kWh per kg of H₂. Fuel cell: 18 kWh per kg, which makes power → H₂ → power about 33 % efficient.
  - H₂ buffer tank: 30 bar, 0.22 kg.
- **Door.** A 3-phase induction motor whose starting current loads 3 kW onto each phase for 5 s. If one phase is dead, the motor hums and stalls ("single-phasing").
- **gridctl.**
  - PV: 600 kWp at a performance ratio of 0.82, with Kasten–Czeplak cloud attenuation and forecast errors that persist from hour to hour.
  - Prices: day-ahead forecast vs. intraday actual, with actual prices reacting to cloud forecast errors.
  - Grid: fees on imports, a ±300 kW connection limit.
  - Devices: minimum loads for electrolyzer and fuel cell, battery wear cost, a daily H₂ price.
  - The benchmark is a dynamic program over battery energy, replayed through the real hour model so it stays feasible.
- **Synchronisation.** The synchroscope needle turns at the slip frequency. The lamp voltages are |V_island − V_grid| per pole: all three go dark together when rotation and phase match, and they chase each other when the rotation is wrong.

The review notes behind many of these choices are in [REVIEWS.md](REVIEWS.md).

## Credits

Three.js (MIT, © three.js authors), bundled into `dist/game.js`. Everything else, including graphics and sound, is procedurally generated at runtime.

---

<details>
<summary><b>Full walkthrough of the Classic room (spoilers!)</b></summary>

**Booth**
1. The brass plaque above the workbench says *Est. 1987*. Enter `1987` on the sun-sim keypad (left wall) and switch the lamps **ON**.
2. INV-1: **ON**, phase **L1**.
3. INV-2: **ON**, **CHARGE**, **L1**. Electrolyzer: **ON**, **L1**. The load is 2 + 3 + 0.2 kW, which is just under the 5.24 kW PV supply.
4. While storage fills, read the resistor on the bench: yellow-violet-red = 47 × 10² = **4700** Ω. Open the drawer with `4700`, take the handwheel and use it on the H₂ tank.
5. Once the battery is above 50 % and H₂ above 60 %: Electrolyzer **OFF**; INV-2 **DISCHARGE** on **L2**; tank valve **OPEN**; fuel cell **START**; INV-3 **ON**, **L3**.
6. Door controller: **OPEN DOOR**. Each phase has at least 3 kW of headroom.

**Control room** (the PC)
```
ls -a ; cat .bash_history ; cat pics/IMG_0413.jpg   → the cat on INV-2 is "FARADAY"
su mvolta                    # yadaraf
cat notes.txt ; mail
decode fragment1.enc 6       # 6 lamps above the PV rig → GRID
scada diag                   # rack DIAG LEDs 10010110 → 150
```
FW-BOARD on the desk: switches **A=1 B=0 C=0 D=1**, then TEST. The display shows **H2**.
```
su root                      # GRID150H2
gridctl
```
**gridctl:** at negative prices, curtail, charge and run the electrolyzer. Around the evening peak, discharge the battery (and run the fuel cell above its break-even price). You need at least 55 % of the benchmark's extra profit. The advisor helps with break-evens.

**Tie panel Q0** (next to the exit): island **231 V**, **50.07 Hz** (slightly faster than the grid's 50.03), rotation **L1-L2-L3 ↻**. Press **CLOSE** (Space) when the needle is in the green sector. Then walk out through the exit.
</details>
