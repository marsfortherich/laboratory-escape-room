# ⚡ Power Lab Escape

A first-person 3D escape room in the browser about **3-phase island grids, hydrogen, hacking and energy trading**.

> Friday, 18:40. A storm has knocked out the public grid. You are locked in the booth of a solar test laboratory.
> The door is driven by a 3-phase motor, and the emergency lights last about an hour.

- **Act 1 – The booth.** Bring a lab microgrid to life: a III-V PV test rig under a sun simulator, three single-phase grid-forming inverters, a 10 kWh battery, a PEM electrolyzer, a hydrogen tank and a fuel cell. Each phase is its own island, so the door motor only starts once **every** phase can carry 3 kW.
- **Act 2 – The control room.** Crack Marco Volta's shell account using clues from the 3D world: a cat's collar tag, a lamp count, a binary LED row and a logic board.
- **Act 3 – gridctl.** Validate a 24-hour dispatch against day-ahead price and weather forecasts. There are negative prices, evening spikes and forecast errors, and your plan is scored against a perfect-foresight optimum.
- **Finale – Synchronise.** The city across the Rhine is already back on the grid; only your building is dark. Insert the permit card, match voltage, run the island a hair fast, check the incomer's phase rotation with the dark-lamp method, and close the tie breaker at 12 o'clock on the synchroscope. The storm passes, and you walk out onto the terrace as the sun sets behind the Dom.

A **Classic room** follows the walkthrough below. A **Daily room** changes every code and clue each day.

---

## Play

- **Online:** **<https://labescape.marsindustries.dev/>** (GitHub Pages, deployed automatically from `main`).
- **Offline:** download or clone the repo and **double-click `index.html`**. It runs straight from disk, with no server and no internet (Three.js is bundled).

| | Desktop | Phone / tablet |
|---|---|---|
| Move | `W A S D`, `Shift` to run | left thumb joystick, **RUN** |
| Look | mouse | drag with right thumb |
| Use | `E` or click | tap the object, or **USE** |
| Hint / Journal | `H` / `J` | 💡 / 📓 |
| Menu & settings | `Esc` | ☰ |

- **Settings:** look sensitivity, invert Y, FOV, volume, UI scale, brightness, reduced motion, **reduce flashing** (soft single-pulse lightning, no fluorescent flicker), a colour-blind-safe palette and render quality. Reduced motion and reduce flashing follow the operating system's *reduce motion* preference by default.
- **Saving:** progress is saved automatically in your browser, with one slot per room (classic and today's daily). Use **Continue** on the title screen.

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

**Debug shortcuts:** `?skip=door|terminal|grid|sync` jumps ahead (these runs don't save and don't record best times or achievements). `?seed=<n>` plays a specific daily room. `window.__game` exposes state in the console.

### Project structure

| File | Purpose |
|---|---|
| `js/main.js` | game loop, stages, first-person controls, interaction and highlight, panels, hints, journal, inventory, timer, save/load, HUD |
| `js/world.js` | builds both rooms, the corridor and all props from primitives and canvas textures |
| `js/details.js` | set dressing: stopped mains clocks, extinguisher, boxes, duct, cable runs (device to gland/socket, lying on the floor), floor tape, desk clutter, contact shadows, dust motes |
| `js/cat.js` | the cat on INV-2: swept-tube body with a painted tabby coat, fur shells, breathing, tail sway and ear flicks |
| `js/materials.js` | procedural tileable surfaces (grimy plaster, worn floor tiles, drop ceiling, brushed metal, paint) and label weathering |
| `js/cologne.js` | the Cologne skyline as depth layers (far city with Colonius and Kranhäuser, Altstadt with Groß St. Martin, the Dom and a river cruiser, Hohenzollern Bridge and KölnTriangle) in three states: storm blackout, storm with the city re-energised, and the evening after the storm with the sun setting behind the old town; lightning bolts, rain on the glass |
| `js/outside.js` | the view through the window and the exit doorway: a shader that traces each pixel's line of sight into the layers, the reflecting Rhine, a wet terrace with railing, street lamps and trees, and rain at several depths, so the city has real parallax; cross-fades between the three states; the same shader renders the last shot out on the terrace |
| `js/postfx.js` | post-processing: ambient occlusion, bloom, tone mapping, film grain and vignette (off on *Low* quality) |
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
- **One lab clock.** Everything runs on the same ×360 time-lapse (10 s of play is 1 lab hour), except the 5 s door-motor start, which runs in real time.
  - Battery: 10 kWh, 95 % efficiency each way.
  - Electrolyzer: 55 kWh per kg of H₂. Fuel cell: 18 kWh per kg, which makes power → H₂ → power about 33 % efficient.
  - H₂ buffer tank: 30 bar, 0.22 kg.
  - PV: 6 m² of III-V modules at η 30 % under 3 suns = 5.4 kW. The lamps draw about 60 kW from the emergency generator, so the whole lamp → light → PV → AC chain is only about 9 % efficient.
- **Door.** A 3-phase induction motor whose starting current loads 3 kW onto each phase for 5 s. If one phase is dead, the motor hums and stalls ("single-phasing").
- **gridctl.**
  - PV: 600 kWp at a performance ratio of 0.82, with Kasten–Czeplak cloud attenuation and forecast errors that persist from hour to hour.
  - Prices: day-ahead forecast vs. intraday actual, with actual prices reacting to cloud forecast errors.
  - Grid: fees on imports, a ±300 kW connection limit.
  - Devices: minimum loads for electrolyzer and fuel cell, battery wear cost, a daily H₂ price.
  - A simplified EU renewable-hydrogen (RFNBO) rule: H₂ from grid power only fetches the day's price in hours at or below 20 €/MWh. Otherwise it sells as grey H₂ at €2/kg.
  - The benchmark is a dynamic program over battery energy, replayed through the real hour model so it stays feasible.
- **Outside.** The window looks west-north-west from the Deutz bank (the Dom is at ≈ 300°), so the storm clears into a sunset in the west, not a sunrise. The game starts at 18:40 on a late-September Friday and the emergency light lasts an hour, which fits a sunset at ≈ 19:30. The city comes back on *before* the finale: you can only synchronise to a grid that is already live. Thunder arrives distance ÷ 343 m/s after the flash (strikes 2–8 km away). The regional train stranded on the Hohenzollern Bridge is stopped by a storm fault on the overhead line (DB's 15 kV / 16.7 Hz traction grid is separate from the city's).
- **Synchronisation.** The synchroscope needle turns at the slip frequency. Each lamp sees |V_island − V_grid| across its breaker pole: all three go dark together when rotation and phase match, and they chase each other when the rotation is wrong. The lamps are filaments (brightness ∝ V², practically dark below 25 % voltage), so they look dark over about ±25°. That's why you close on the synchroscope, not the lamps. Close with the island a hair *above* grid frequency: if it were slower, the grid would push power into the island inverters (reverse power) the moment Q0 closes. In the classic room the storm crew swapped two incomer phases; in daily rooms it varies, so read the lamps.

The review notes behind many of these choices are in [REVIEWS.md](REVIEWS.md).

## Credits

Three.js (MIT, © three.js authors), bundled into `dist/game.js`. Everything else, including the textures, the Cologne skyline and all sound, is procedurally generated at runtime; there are no image or audio assets.

---

<details>
<summary><b>Full walkthrough of the Classic room (spoilers!)</b></summary>

**Booth**
1. The brass plaque above the workbench says *Est. 1987*. Enter `1987` on the sun-sim keypad (left wall) and switch the lamps **ON**.
2. INV-1: **ON**, phase **L1**.
3. INV-2: **ON**, **CHARGE**, **L1**. Electrolyzer: **ON**, **L1**. The load is 2 + 3 + 0.2 kW, which is just under the 5.24 kW PV supply.
4. While storage fills, read the resistor on the bench: yellow-violet-red = 47 × 10² = **4700** Ω. Open the drawer with `4700`, take the handwheel and use it on the H₂ tank.
5. Once the battery is above 35 % and H₂ above 45 % (a margin over the 25 % / 30 % limits): Electrolyzer **OFF**; INV-2 **DISCHARGE** on **L2**; tank valve **OPEN**; fuel cell **START**; INV-3 **ON**, **L3**.
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
**gridctl:** at negative prices, curtail, charge and run the electrolyzer. Run the electrolyzer on PV surplus below its break-even price, but not on night grid power (that H₂ is grey). Around the evening peak, discharge the battery, and run the fuel cell above its break-even. You need at least 55 % of the benchmark's extra profit. The break-evens are shown in the forecast box. The advisor costs 0:15 per use.

**Tie panel Q0** (next to the exit): insert the **permit card**; island **231 V**, **50.07 Hz** (slightly faster than the grid's 50.03). The lamps chase each other, so press **Swap L2 ↔ L3** once; now they go dark together. Press **CLOSE** (Space) when the needle is in the green sector. Then walk out through the exit and down the corridor.
</details>
