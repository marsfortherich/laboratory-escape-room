# Expert reviews

Three specialist reviewers looked at v1 of the game. v2 was rebuilt around their findings, the same reviewers re-reviewed it, and v2.1 addresses the second round. For round 3 (v3) a movie director and a QA engineer joined them.

| Reviewer | Focus |
|---|---|
| 🔬 **Science nerd** (energy-systems engineer / physicist) | physical plausibility, 3-phase concepts, market realism, educational value |
| 🔐 **Escape-room nerd** (250+ rooms played, puzzle designer) | puzzle flow, clue design, fairness, hints, theme, finale |
| 🎮 **Video-game nerd** (indie dev, web-game tech) | bugs, controls, UX, audio-visuals, platform, retention |
| 🎬 **Movie director** (director / cinematographer) | lighting, composition, colour, pacing, sound, environmental storytelling (round 3) |
| 🧪 **QA engineer** | visual and functional regressions, repro steps (v2.2 and round 3) |

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

## QA pass (v2.2)

A QA agent then played the live build visually. It took screenshots from player positions, compared frames for flicker, logged every canvas text draw, and checked every clue against its solution in the classic room and a daily room. The owner's three reports were confirmed and fixed along with everything else it found:

| Finding | Fix |
|---|---|
| **Plaque** "SOLAR TEST LABORATORY" clipped (the text was 556 px wide on a 512 px canvas). "MAIN BUS 3~ 230/400 V" and "🏃 EXIT" were clipped too | `labelTex` now shrinks any line to fit (`fitFont`) |
| **Resistor didn't match the drawer code.** The model was mirrored for a player facing the bench (gold·red·violet·yellow), gold was nearer its end, gold rendered black, and the note was tilted away | Bands now read yellow·violet·red · gap · gold from left to right. Band 1 is nearest its end, the colours glow slightly so they're readable in emergency light, and the note is tilted up and readable |
| **Grid-status wall screen flickered** (its plane was coplanar with the frame, so it z-fought) | The screen sits 1.5 cm in front of its frame. The bus glass, logic-board decals and floor hazard strips were also moved off coplanar faces |
| The timer ran before "Click to play" | The clock and simulation only run during actual play |
| Hole in the floor at the exit doorway; the exit door said "CONTROL ROOM"; the CONTROL ROOM sign was on the wrong side | The corridor floor and ceiling now reach the door. The exit door has its own EXIT texture, and the sign faces into the booth |
| A conduit covered the MAIN BUS sign; the tie-panel sign floated; the H₂ label, "NO WHEEL" tag and sight glass floated; the PV sign was washed out by the lamp cone | All moved or attached: a curved tank label, a tag hanging from the spindle, a sight glass with foot and brackets, the sign moved beside the rig |
| The plaque and gold band rendered near-black (metal without an environment map) | Lower metalness |
| The sync panel showed island voltage with every inverter off | The island is shown as dead ("— V"), the needle stops and Q0 refuses to close until the lab cluster is energised again |
| Text inconsistencies ("CPV rig", e-mail wording "of the optimum", poster without a gold row, "EMERGENCY LIGHT" after resync) | Unified: the e-mail uses `CFG.WIN_RATIO` and the same wording as gridctl, the gold tolerance row was added, the timer shows "grid restored" |
| The interaction prompt covered the aim point; mobile: 9 px scope text, broken `help` columns, keyboard hints on touch | Prompt moved lower, larger scope text, single-column `help`, keyboard-only hints hidden on touch devices |

Every clue matched its solution in both rooms: plaque year and PIN, lamp count and Caesar shift, DIAG LEDs and the binary value, circuit poster and board, collar tag and password, e-mail values and sync panel, checklist and code tolerances.

## Owner feedback after v2.2

| Feedback | Change |
|---|---|
| The resistor reads yellow-violet-red = "4720", but the code is 4700 | The poster and panel say it plainly: bands 1–2 are digits, **band 3 is a multiplier**, with a worked example that isn't the answer. The misreading gives a no-penalty nudge, and a test makes sure it is never the answer. |
| The city outside should look like Cologne; the graphics are too clean | A procedural **Cologne skyline** (Dom, Groß St. Martin, Hohenzollern Bridge, Colonius, Kranhäuser, the Rhine). Grimy procedural plaster, worn floor tiles, a drop ceiling, brushed metal, weathered labels, contact shadows, ambient occlusion, bloom and film grain. |
| The cat looks weird | A curled **ginger tabby**: a swept-tube body with a painted coat, fur shells, sheen, closed eyes, whiskers and a collar. It breathes, its tail sways and its ears flick. |
| Cables glitch through objects and the ground | Every run starts inside its device and ends in a gland, socket or junction box. The path is lifted onto the floor, and an automated check finds no clipping. |
| The window view needs depth | The window became a **parallax view**: each pixel traces the player's line of sight into city layers at real distances, a reflecting Rhine, a wet terrace with railing, a street lamp and trees, and rain at several depths. |

## Round 3 — v3 review scores

The review ran on the build with the parallax window, the new cat and the re-routed cables.

| | v2 | **Round 3** | Notes |
|---|---|---|---|
| 🔬 Science | 8.5 | **8.0** | Simulation core re-verified. The new outdoor scene had a sunrise in the west, city lights that came back only after the sync, oversized landmarks and a too-short thunder delay. |
| 🔐 Escape room | 7.5 | **8.0** | Clue fairness fixed (resistor). The finale, the drawer multiplier and a failed trading day could be solved from memory. |
| 🎮 Video game | 8.0 | **8.5** | The parallax window is "the best thing in the game". Flashing, no anti-aliasing, a hitch on the cat's eye and after restoring at the permit stage. |
| 🎬 Movie director | — | **6.5** | Strong frames, but the lighting didn't build to the payoff and the payoff was cut short by a stats card. No storm sound. |
| 🧪 QA | — | **no critical bugs** | 660 shader renders without NaN or black pixels. Rain in rows and misplaced cable glands (medium), six low findings. |

### Changes after round 3 (v3)

| Reviewer finding | Change |
|---|---|
| 🎬 The payoff is cut to a spreadsheet | **A last shot:** control is taken away and the camera walks out through the doorway onto the terrace, turns to the Dom and the sunset while the Dom's bells ring, holds, and fades to warm white. Only then does the end card appear. The fanfare plays only there. |
| 🔬 The sun rose in the west; the timeline ends at ≈ 19:40 | The storm clears into an **evening**: the sun sets behind the old town, low and almost due west, silhouettes get a warm rim light, and street lamps and floodlights come *on*. |
| 🔬 The city relit because the lab synchronised | **The city comes back at the permit stage**, feeder by feeder: lit windows, the floodlit Dom, bridge lights and a sodium glow under the clouds. Only the building stays dark. The wall screen reads "LIVE at incomer · site OFF". |
| 🎬 The room lights beat the sunrise; the sun beam was swamped | Reconnection is its own scene. The control-room tubes strike one after another with starter tinks and settle at a working level. The clocks tick again, and the **evening sun through the window is the key light**: one shadow-casting light throws a pool shaped like the two panes, with the mullion's shadow, across the room. At night the same light is the lightning. |
| 🎬 Corridor final shot looked like a poster | The corridor tube is dead (storm damage). A warm sky light spills in through the doorway. The doorway now looks north-north-east along its own axis, and the last shot turns to the Dom. |
| 🎬 No storm sound | Rain and gusting wind (muffled in the booth), rain drumming on the control-room window. Thunder comes distance ÷ 343 m/s after the flash, with more crack from closer strikes. A low drone under the blackout **resolves into a major chord when Q0 closes**. After the storm: birds, returning traffic and the Dom's bells. |
| 🎬 🔐 The cat was hard to see from standing height | The inverters hang lower, so the cat is at eye level. A soft **purr** is audible within about 2 m, and he purrs properly when petted. Shorter, depth-writing fur shells replace the spiky ones, and the whiskers are dimmer. His head lifts when the eye opens. |
| 🎬 The blackout wasn't dark | Much less ambient fill. The emergency luminaires are downward spots that make pools on the floor, and they click on one by one. |
| 🎬 Opening | A **cold open**: the booth is lit and humming, a close strike, the tubes gasp and die, the emergency lights click on, and one line appears: "18:36:02 — the grid is gone." The start card is a single line; the briefing is in the journal. The bus HUD appears once you work on the devices. |
| 🎬 Sun simulator: a hard-edged box of light, flat white wash | A soft light shaft that fades towards its edges and the floor, and a downward spot. |
| 🎬 Dust motes like dead pixels; white-noise camera shake | Soft round motes, only in the sun simulator's beam and the evening window light. The shake is a damped kick in one direction. |
| 🎮 Lightning strobed at ≈ 20 Hz; the tube flicker was random per frame | At most two pulses per strike, with strikes at least 7 s apart. The tube starters follow a fixed pattern that doesn't depend on frame rate. A new **Reduce flashing** setting (defaulting to the OS reduce-motion preference, as does Reduced motion) gives a soft single swell and no flicker. |
| 🎮 No anti-aliasing with post-processing on | The scene renders into a 4× multisampled HDR target (2× on touch). |
| 🎮 Hitches on the cat's eye and after restoring at the permit stage; GPU memory leak on quality change | The eye is compiled at start. `restore()` prepares the evening layers. `configure()` disposes every pass. The city layers are sized to what a 1080p screen resolves, and old layer sets free their canvases too. |
| 🎮 Weaker GPUs, AO behind panels | Balanced runs AO at half resolution. AO is skipped while a panel, the terminal or the last shot covers the view. |
| 🎮 Debug-looking highlight box | An amber **outline** (the box remains only on Low quality). |
| 🎮 Blank page while loading; portrait tunnel vision; inventory over the joystick | A "Loading the lab…" screen. At least 62° horizontal field of view in portrait. The inventory moves to the top on touch devices. |
| 🎮 Achievements not kept; "Best" list overflowed; no brightness | A trophy line on the title screen, a daily streak, a short best list, and a **brightness** setting. Debug runs no longer record best times. |
| 🔐 The finale always had the same answer | The incomer is swapped in the classic room and **50/50 in daily rooms**; the e-mail says "check". The jumper label is neutral ("A (as found)" / "B"). |
| 🔐 The checklist said "a hair above" but either side was accepted | Enforced: an island at or below grid frequency trips the **reverse-power relay**. |
| 🔐 A failed trading day handed out the answer key | **Replay keeps the forecasts but re-rolls the real clouds and intraday prices**, with a fresh benchmark. |
| 🔐 The drawer multiplier was always red; hint tier 2 skipped a step | Some daily rooms use a **×10** (brown) band, e.g. 470 Ω → 0470. The misreading nudge also catches "0472". Tier 2 now points at the sticky note and the poster. |
| 🔐 Scenery that looks searchable said nothing | The filing cabinet, bin, boxes, desk papers and cork board answer with one line. The bin holds a soft clue about the third band. |
| 🔐 More FW-BOARD variety; the scope showed ΔV/Δf on a dead island | Eight circuits, each with exactly one solution (tested). The Δ readouts blank out on a dead island. |
| 🔬 Grey-H₂ rule counted PV surplus twice and used the intraday price | Surplus already charging the battery isn't "green" for the electrolyzer, and the renewable-hour test uses the **day-ahead** price. Both are tested. |
| 🔬 Kranhäuser in the wrong place and 3× too tall; Colonius twice too tall; cruiser too close | The Kranhäuser moved up-river to the far left at their real angular size. The Colonius is the right height for 2.5 km. The cruiser is moored at the old-town quay, on the 600 m layer. |
| 🔬 Door "3 kW", inverter cluster, merit order, cooling | The door start is ≈ 3 kVA per phase (inrush at a low power factor). INV-1 is the cluster master. The merit order comes from frequency-shift power control. The rig is water-cooled. |
| 🧪 Rain fell in rows; glands missed their cables; the cat clipped the label; cables grazed the desk; the bolt was clipped; the animation jumped every 10 min | Each rain lane has its own phase. Each gland is placed where its cable crosses the face. The tail and paw hang clear of the label and edge. The desk-edge points were lifted. The bolt's random walk is kept inside its canvas. The animation clock wraps hourly. |
| 🧪 The sun beam lit the booth through walls | It is now the shadow-casting window light: walls and the frame block it. |
