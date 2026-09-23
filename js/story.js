// Narrative content. Everything that depends on the puzzle seed takes the puzzle config `P`.

export const INTRO = {
  title: '⚡ POWER LAB ESCAPE',
  lead: 'Friday, 18:40. You came to the <b>Solar Test Laboratory</b> to certify its island microgrid. Then the storm hit.',
  body: `The public grid is down, the building is dark, and the booth door — a motor-driven, fail-secure sliding door — won't move without power.
    The emergency lights run on a battery that lasts about an hour. Marco Volta, the lab's head, has already left for the weekend.<br><br>
    Bring the lab's own power system to life, get into the control room, and get the building back on the grid.`,
};

export const RANKS = [
  [30, "Volta's Successor"], [40, 'Chief Grid Engineer'], [50, 'Senior Engineer'], [60, 'Engineer'], [Infinity, 'Intern (overtime)'],
];

export function memos(P) {
  return {
    rec1: {
      title: 'Voice recorder · workbench', label: 'Voice recorder',
      text: `"Memo, Friday. Facility management finally installed the fail-secure door drive on the booth. No power, no exit — very safe, they say.
Note to self: never get locked in here during a grid outage. …Also, somebody feed the cat over the weekend."`,
    },
    rec2: {
      title: 'Voice recorder · battery cabinet', label: 'Voice recorder',
      text: `"Changed the sun-simulator PIN again. It's the year we opened — the one engraved on that pompous brass plaque.
And yes, I wired the simulator to the building's emergency generator. Don't tell facility management."`,
    },
    rec3: {
      title: 'Voice recorder · electrolyzer', label: 'Voice recorder',
      text: `"Lesson of the week: our three inverters are single-phase. Each one FORMS its own phase. Power cannot hop from L1 to L2 —
if nothing feeds a phase, nothing on it runs. The intern tried to charge the battery from an empty phase for an hour.
Then he opened the H₂ valve with a wrench. The handwheel lives in my bench drawer now."`,
    },
    rec4: {
      title: 'Voice recorder · control room', label: 'Voice recorder',
      text: `"If the grid ever drops out: the operator won't let us back on until gridctl has validated a day-ahead schedule.
Then synchronise at the tie panel — voltage, frequency, rotation, and close at twelve. Don't close out of phase. I've heard that bang once."`,
    },
  };
}

export function whiteboardLines(P) {
  return [
    ['LAB NOTES — DON\'T ERASE!!', '#1b3f8f', 'bold 40px'],
    ['INV-1 ─ L?     INV-2 ─ L?     INV-3 ─ L?', '#1b3f8f'],
    ['   (each inverter = its OWN phase → island!)', '#b3261e'],
    ['Door drive: 3~ motor, 3 kW / phase at start', '#1b3f8f'],
    ['Sun-sim PIN → the year we opened ✓', '#1b3f8f'],
    ['H₂ handwheel → locked away (intern-proof)', '#1b3f8f'],
    ['BMS min 25 %  ·  FC needs ▒▒ % H₂', '#1b3f8f'],
    ['                                  — M.V.', '#1b3f8f'],
  ];
}

export function emails(P) {
  return [
    {
      from: 'it-security@solarlab.example', subj: 'Your password hygiene (3rd reminder)',
      body: `Dear Marco,\nwe noticed that your password is still based on your cat's name. Reversing it does not count as encryption.\nPlease also stop splitting the root password into "fragments".\n— IT`,
    },
    {
      from: 'dispatch@tso-grid.example', subj: 'RE: Reconnection after outage — procedure',
      body: `Hello Solar Test Laboratory,\nafter the storm outage, reconnection of your site requires:\n  1) a validated day-ahead dispatch schedule (gridctl, ≥ ${Math.round(0.55 * 100)} % of the optimum),\n  2) manual synchronisation at your tie breaker Q0.\nOur side: ${P.gridV} V, ${P.gridF.toFixed(2)} Hz, rotation L1-L2-L3 (clockwise) at the substation.\nNB: our storm crew re-terminated your incomer cable at Q0 tonight in a hurry — check the phase rotation before closing.\nThe reconnection permit card is issued automatically once the schedule is validated.\n— Grid Dispatch`,
    },
    {
      from: 'marco.volta@solarlab.example', subj: 'Out of office',
      body: `I'm off for the weekend. For emergencies: don't.\nPS for whoever is on duty: the cat sleeps on the battery inverter in the booth. Do not wake him. He bites.`,
    },
  ];
}

export function checklistText() {
  return `SYNC CHECKLIST — tie breaker Q0
0. Permit card into the interlock
1. Island voltage = grid voltage (± 2 %)
2. Island frequency a hair ABOVE grid
   (needle creeps clockwise, slip ≤ 0.1 Hz)
3. Check phase ro▒▒▒▒n — the three lamps
   must go dark TOGETHER, not chase.
   Chasing? → swap two incoming phases
4. Close on the SYNCHROSCOPE at 12 (± 10°)
   (lamps look dark over a wide band)
                                   — M.V.`;
}
