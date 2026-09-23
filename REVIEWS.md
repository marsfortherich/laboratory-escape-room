# Expert reviews

Three specialist reviewers looked at v1 of the game. v2 was rebuilt around their findings, the same reviewers re-reviewed it, and v2.1 addresses the second round.

| Reviewer | Focus |
|---|---|
| 🔬 **Science nerd** (energy-systems engineer / physicist) | physical plausibility, 3-phase concepts, market realism, educational value |
| 🔐 **Escape-room nerd** (250+ rooms played, puzzle designer) | puzzle flow, clue design, fairness, hints, theme, finale |
| 🎮 **Video-game nerd** (indie dev, web-game tech) | bugs, controls, UX, audio-visuals, platform, retention |

## Round 1 — v1 scores

| | Overall | Sub-scores |
|---|---|---|
| 🔬 Science | **6.5** | accuracy 5 · educational value 7 · depth 6 |
| 🔐 Escape room | **5.5** | puzzle design 5 · clue fairness 7 · flow/pacing 5 · theme/narrative 5 |
| 🎮 Video game | **6.5** | controls/feel 5 · UX/onboarding 7 · audio-visual 5 · technical 7 · replayability 4 |

## What changed for each reviewer

### 🔬 Science
| Finding in v1 | Change in v2 |
|---|---|
| Storage gave back more energy than it took in (battery 4.4×, H₂ 8.6× too good); the time scale was inconsistent | One lab clock (×360). Every rate follows from power × efficiency × time. Storage drains by the power it actually **delivers**. Tested in `npm test`. |
| "Net" power drained storage even though nothing consumed it | Per-phase merit-order dispatch (PV → battery → fuel cell); the readout is now **headroom**. The bus panel shows neutral current. |
| A maglock needing 3 kW per phase makes no physical sense | The door is now a fail-secure **3-phase induction-motor drive**. Opening loads 3 kW onto each phase for 5 s; a missing phase stalls it ("single-phasing"). |
| PV hardware was impossible; INV-1 was underrated | The rig is now 6 m² of **concentrator PV** (η 38 %) under 2.4 suns. INV-1 is a 6 kVA hybrid inverter with grid-forming backup mode, η 97 %. |
| A "350 bar" tank would hold about 22 kg of H₂ | The tank is a **30 bar, 90 L, 0.22 kg** buffer, shown in grams and bar. The fuel cell has a warm-up period. |
| Trips were modelled as "load > generation" | Overload now drives the inverter to its current limit, the voltage collapses, and the **under-voltage relay** trips. |
| Market: "day-ahead" price differed from "actual" | Now **day-ahead forecast → intraday actual**. The actual price reacts to cloud forecast errors. |
| The PV model was optimistic; cloud errors were independent each hour | Performance ratio 0.82, **Kasten–Czeplak** cloud mapping, cloud errors that persist hour to hour (ρ = 0.7). |
| The fuel cell was a dead control; H₂ was a trivial decision | The H₂ price varies by day (3–8 €/kg). Minimum loads apply. Battery wear is charged. The advisor shows export and import **break-evens**. |
| Benchmark hard-coded its options and ignored H₂ limits | The benchmark reads `CFG` and is **replayed through the real hour model**, so it is feasible. Its plan appears after the day, for learning. |
| The 40 % threshold was too lenient | Raised to **55 %**, calibrated over 200 days of simulated play (rule of thumb passes about 50 % of days; a break-even strategy about 99 %). |
| Missed opportunity: phase rotation and synchronisation | New finale: **synchroscope + dark-lamp method + phase-sequence check** at the grid tie breaker. |

### 🔐 Escape room
| Finding in v1 | Change in v2 |
|---|---|
| The game told instead of asked (the whiteboard was a rulebook, objectives gave step-by-step instructions) | Objectives state only the goal. The whiteboard is a half-erased sketch. There are **3-tier hints**: nudge (free), pointer (+1:00), solution (+3:00). |
| Nothing to search; no physical locks | **Inventory**. The H₂ valve handwheel is missing, so you open the bench drawer with a **resistor colour code** decoded from a poster. |
| Tools did the thinking (`decode` with a guessable shift, `bin2dec`, a brute-forceable firewall) | The shift is the **number of lamps** over the PV rig. `scada diag` lights a **binary LED row** on the rack (`bin2dec` removed). A physical **FW-BOARD** logic board has a gate-symbol poster, and wrong tests cost 30 s. |
| The terminal never sent you back into the room | The password comes from the **cat's collar tag** on INV-2. The photo only says "napping on his favourite inverter". |
| No story, stakes, timer or ranking | Storm night, auditor role, **60-min emergency-light countdown**, Marco's voice memos and e-mails, **ranks**, splits, achievements, a shareable result. |
| No actual exit; the trading finale broke the genre | Trading earns a **reconnection permit**. The climax is a physical **grid-sync puzzle**, then the exit door opens onto dawn and you walk out. |
| Low replayability | A **Daily room**: seeded year, cat, lamp count, resistor, binary value, circuit, fragments and grid values. |

### 🎮 Video game
| Finding in v1 | Change in v2 |
|---|---|
| Holding Enter ran the whole trading day | Key repeat is ignored, plus a 500 ms grace period after the console opens. The result screen can be left and reopened. |
| Keys stuck after Alt-Tab; re-lock failures; mouse spikes; `gridctl` timer leak; walking through the opening door; `__proto__` crash; audio never resumed | All fixed. |
| No feedback on what you're looking at | Yellow **outline highlight** plus the device's live state in the prompt. |
| No settings or save | **Pause menu + settings** (sensitivity, invert Y, FOV, volume, UI scale, reduced motion, colour-blind palette, quality). **Autosave / Continue**. |
| Beeps only | **Procedural spatial audio**: 50 Hz bus hum scaled by load, fuel-cell fan, bubbles, ballast, door motor, footsteps, typing. |
| Flat lighting; the lab was "dark" but fully lit | **Lights follow the energised phases** (with flicker), emergency lighting, a control room that stays dark until resync, a dawn payoff. |
| Unplayable on phones | **Touch controls**: joystick, drag-to-look, tap-to-use, buttons; terminal quick commands; mobile console layout. |
| CDN dependency, caching, performance | **Self-contained bundle** (works from `file://` and GitHub Pages), hashed cache busting, no rendering behind the opaque console, screen textures redrawn only when they change, pixel-ratio cap. |

## Round 2 — v2 scores

| | v1 | **v2** | Sub-scores v2 |
|---|---|---|---|
| 🔬 Science | 6.5 | **8.5** | accuracy 8 · educational value 8.5 · depth 8.5 |
| 🔐 Escape room | 5.5 | **7.5** | puzzle design 7 · clue fairness 8 · flow/pacing 6.5 · theme/narrative 8 |
| 🎮 Video game | 6.5 | **8.0** | controls/feel 7.5 · UX/onboarding 8.5 · audio-visual 7.5 · technical 8 · replayability 6.5 |

What the reviewers confirmed in v2:
- 🔬 Energy is conserved, and the door physics is right. The benchmark is feasible across 150 days, and nobody scores above 100 %. The break-even tips are correct, and the synchroscope and dark-lamp maths check out.
- 🔐 The game no longer gives answers away. The drawer is a real parallel track. The clues cross between rooms. The logic board can't be brute-forced for free. There are no hard softlocks.
- 🎮 All 12 bugs from round 1 are fixed. The lights following the energised phases, the finale and the priced hints are "real improvements".

### Changes after round 2 (v2.1)

| Reviewer finding | Change |
|---|---|
| 🔬 The 5 s door start ran on the ×360 clock (half a lab hour, 1.7 kWh) | The time-lapse pauses during the motor start. Storage targets are now honest: ≥ 35 % battery and ≥ 45 % H₂, a margin above the BMS and fuel-cell limits. Tested. |
| 🔐 The door controller could show READY and still stall | Fixed by the real-time start: the start itself drains less than 1 %. |
| 🔬 The finale's reversed island rotation contradicted Act 1, where the same inverters started the door motor forwards | The island rotation is now fixed. The storm crew re-terminated the **incoming cable** with L2/L3 swapped, and the player fixes it with **Swap L2 ↔ L3** (the grid operator's e-mail warns about it). |
| 🔐 The sync panel printed both rotations and coloured ΔV/Δf red or green, so it was a "match the numbers" task | The rotation readout is gone and the readouts are neutral. **The lamps are the only rotation clue.** |
| 🔬 Lamp brightness was linear in voltage | Filament model: brightness ∝ V², dark below 25 % voltage, so the lamps look dark over about ±25°. The checklist now says "close on the synchroscope". |
| 🔬 Failure messages described rotating generators; the checklist tolerances didn't match the code | The messages now describe inverters and current limits. Tolerances are ±2 % / ±10°, identical in the code and the checklist. |
| 🔬 38 % CPV under diffuse lamp light isn't plausible | Relabelled as III-V modules, η 30 % at 3 suns, with a 60 kW lamp-input readout (about 9 % lamp → AC). |
| 🔬 Overcast days weren't overcast; grid power became "green" H₂ | The overcast cloud base is 0.95. A simplified **EU RFNBO rule** applies: grid-powered H₂ is grey (€2/kg) unless the price is ≤ 20 €/MWh. The battery's end value includes wear. |
| 🔐 The sun-sim panel gave away the lamp count; the Caesar shift could be brute-forced | The count was removed from the text. A wrong `decode` shift triggers a 5 s cooldown. |
| 🔐 The advisor was hint-inflating but cost no time, and break-evens were only taught by the advisor | Break-evens are always shown in the forecast box. The advisor costs +0:15 per use and counts as one hint per day. |
| 🔐 The permit was only a token | The **permit card** must be inserted into the Q0 interlock. |
| 🔐 🎮 Daily rooms always used the same trading day; one save slot was overwritten | The trading day is seeded by the daily room. There is **one save slot per room**, with a confirm before a run is discarded. |
| 🎮 Windows touchscreen laptops were forced into touch mode | Touch mode only applies when there is no fine pointer (`any-pointer: fine`). |
| 🎮 Fast mouse flicks were dropped | Spikes are ignored only in the first 150 ms after locking; after that they are clamped. |
| 🎮 Holding Enter on a focused "▶▶ 3 h" button fast-forwarded the day | Buttons blur after a click, and repeated Enter is always swallowed while the console is open. |
| 🎮 A hint or the journal opened from the terminal dropped you back into the 3D world | Overlays return to the terminal or console you came from. |
| 🎮 A door collider switching back on could trap the player | Colliders the player already overlaps are ignored. |
| 🎮 The Esc that unlocks the pointer might also close the menu | Esc is debounced for 200 ms after the menu opens. |
