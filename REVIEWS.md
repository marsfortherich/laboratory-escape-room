# Expert reviews

Three specialist reviewers looked at v1 of the game. v2 was rebuilt around their findings, and the same reviewers then re-reviewed it.

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

_Pending — filled in after the re-review._
