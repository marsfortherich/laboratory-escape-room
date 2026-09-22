// Act 2 — fake Linux shell on the control PC. The clues live in the 3D world:
//   mvolta password : the cat's name (collar tag in the booth) reversed, lowercase
//   fragment 1      : Caesar cipher, shift = number of lamps above the PV test rig
//   fragment 2      : `scada diag` lights a binary pattern on the server rack → decimal
//   fragment 3      : the logic board on the desk (handled in main.js)
//   root password   : F1 + F2 + F3
import { emails } from './story.js';

const ALL = ['guest', 'mvolta', 'root'];
const MV = ['mvolta', 'root'];

const caesar = (s, k) => s.replace(/[a-z]/gi, (ch) => {
  const b = ch <= 'Z' ? 65 : 97;
  return String.fromCharCode(((ch.charCodeAt(0) - b + k) % 26 + 26) % 26 + b);
});

function buildFS(P) {
  return {
    '/': { dir: true, r: ALL },
    '/home': { dir: true, r: ALL },
    '/home/guest': { dir: true, r: ALL },
    '/home/guest/readme.txt': { r: ALL, c:
`Welcome to labctl-01, guest.

Grid reconnection (gridctl) requires ROOT privileges.

Our admin Marco Volta (user: mvolta) keeps "forgetting" the root password,
so he split it into three fragments and hid them. Classic Marco.

PS: Marco uses this guest account way too often.
    Real hackers also look at hidden files (ls -a).` },
    '/home/guest/.bash_history': { r: ALL, c:
`ls
cd pics
cat IMG_0413.jpg
cd ..
su mvolta
su mvolta
# argh. why did I make my password my cat's name BACKWARDS and lowercase
exit` },
    '/home/guest/pics': { dir: true, r: ALL },
    '/home/guest/pics/IMG_0413.jpg': { r: ALL, c:
`ÿØÿà JFIF  ÿÛ C ░▒▓█▓▒░ ¤¤¤ binary data ¤¤¤ ▒▓█▓▒░ ÿÄ
--- EXIF ---
Camera   : LabCam 3000
Author   : mvolta
Title    : "Napping on his favourite inverter again. Best cat. (Name's on the collar.)"
Date     : 2026:04:01 12:00:00` },
    '/home/guest/pics/inverter_bench.jpg': { r: ALL, c:
`ÿØÿà JFIF ▒▓█ binary data █▓▒
--- EXIF ---
Author   : mvolta
Title    : "Three phases, 120° apart, rotating clockwise. Beautiful."` },
    '/home/mvolta': { dir: true, r: MV },
    '/home/mvolta/notes.txt': { r: MV, c:
`ROOT PASSWORD = FRAGMENT1 + FRAGMENT2 + FRAGMENT3   (no spaces)

F1 -> ~/fragment1.enc   Caesar cipher.
      Shift = number of lamps above our PV test rig.
      (decode <file> <shift>)
F2 -> run "scada diag" and look at the DIAG LED row on the server rack.
      Lit = 1, MSB on the left. I want it in decimal.
F3 -> the logic board on my desk shows it when its output is 1.
      (Wrong guesses set off the alarm. Sorry.)` },
    '/home/mvolta/todo.txt': { r: MV, c:
`[ ] buy cat food
[x] lock away the H2 valve handwheel (intern!!)
[ ] fix sun simulator lamp driver
[ ] stop writing passwords in text files
[ ] answer the grid operator about the reconnection procedure (see mail)` },
    '/home/mvolta/fragment1.enc': { r: MV, c: caesar(`The first fragment is: ${P.f1}`, P.lamps) },
    '/opt': { dir: true, r: ALL },
    '/opt/scada': { dir: true, r: MV },
    '/opt/scada/scada.log': { r: MV, c:
`18:02:11 GRID  L1 ${P.gridV}.0V  L2 ${P.gridV - 1}.8V  L3 ${P.gridV}.2V  f=${P.gridF.toFixed(2)}Hz  rot L1-L2-L3
18:02:11 INFO phase angles L1 0°  L2 -120°  L3 -240°
18:31:47 WARN storm front, wind gusts 110 km/h
18:36:02 ALRM GRID LOST — tie breaker Q0 opened by under-voltage protection
18:36:02 INFO building on emergency supply (life safety only)
18:36:05 INFO booth door drive: no supply → fail-secure LOCKED
18:37:40 INFO cluster INV-1..3 standby — manual start required` },
    '/etc': { dir: true, r: ALL },
    '/etc/passwd': { r: ALL, c:
`root:x:0:0:root:/root:/bin/bash
mvolta:x:1000:1000:Marco Volta,,,:/home/mvolta:/bin/bash
guest:x:1001:1001:Guest:/home/guest:/bin/bash` },
    '/etc/motd': { r: ALL, c: 'labctl-01 · Solar Test Laboratory · authorized use only · running on UPS' },
    '/root': { dir: true, r: ['root'] },
    '/root/README': { r: ['root'], c:
`You made it, root.

1. gridctl  — validate a day-ahead dispatch schedule. The grid operator issues
              the reconnection permit when it is good enough.
2. Then synchronise the lab with the grid at the tie panel (Q0) next to the exit.` },
  };
}

export class Terminal {
  constructor(puzzle, hooks = {}) {
    this.P = puzzle;
    this.hooks = hooks;           // onGridctl, onDiag(bool), onKey, getState() -> {permit, synced, f3}
    this.fs = buildFS(puzzle);
    this.users = { guest: null, mvolta: puzzle.userPw, root: puzzle.rootPw.toLowerCase() };
    this.el = document.getElementById('terminal');
    this.out = document.getElementById('termOut');
    this.inp = document.getElementById('termIn');
    this.promptEl = document.getElementById('termPrompt');
    this.stack = [{ user: 'guest', cwd: '/home/guest' }];
    this.hist = []; this.hi = 0;
    this.pw = null;
    this.booted = false;
    this.pending = null;
    this.progress = { mv: false, f1: false, diag: false, root: false, mail: false };

    this.inp.addEventListener('keydown', (e) => this.key(e));
    this.el.addEventListener('mousedown', (e) => { if (e.target !== this.inp && !e.target.closest('button')) setTimeout(() => this.inp.focus(), 0); });
    this.el.querySelectorAll('[data-cmd]').forEach((b) => b.addEventListener('click', () => {
      this.inp.value = b.dataset.cmd + (b.dataset.cmd.endsWith(' ') ? '' : '');
      if (!b.dataset.cmd.endsWith(' ')) this.submit(); else this.inp.focus();
    }));
  }

  serialize() { return { stack: this.stack, progress: this.progress, hist: this.hist.slice(-50) }; }
  restore(o) { if (!o) return; this.stack = o.stack; this.progress = o.progress; this.hist = o.hist || []; this.hi = this.hist.length; }

  get cur() { return this.stack[this.stack.length - 1]; }

  open() {
    this.el.classList.remove('hidden');
    if (!this.booted) {
      this.booted = true;
      this.print('labctl-01 login: guest (auto-login)', 'dim');
      this.print(this.fs['/etc/motd'].c, 'hi');
      if (this.cur.user !== 'guest') this.print(`session restored: ${this.cur.user}`, 'dim');
      this.print('Type "help" for commands. Stuck? Press the 💡 button (or F1).\n', 'dim');
    }
    this.updPrompt();
    setTimeout(() => this.inp.focus(), 30);
  }
  close() {
    this.el.classList.add('hidden'); this.inp.blur();
    if (this.pending) { clearTimeout(this.pending); this.pending = null; }
  }
  isOpen() { return !this.el.classList.contains('hidden'); }

  print(text, cls = '') {
    const d = document.createElement('div');
    if (cls) d.className = cls;
    d.textContent = text;
    this.out.appendChild(d);
    while (this.out.childElementCount > 400) this.out.firstChild.remove();
    this.out.scrollTop = this.out.scrollHeight;
  }

  updPrompt() {
    if (this.pw) { this.promptEl.textContent = 'Password: '; this.inp.type = 'password'; return; }
    this.inp.type = 'text';
    const { user, cwd } = this.cur;
    const home = user === 'root' ? '/root' : `/home/${user}`;
    const d = cwd === home ? '~' : cwd.startsWith(home + '/') ? '~' + cwd.slice(home.length) : cwd;
    this.promptEl.textContent = `${user}@labctl-01:${d}${user === 'root' ? '#' : '$'} `;
  }

  submit() {
    const v = this.inp.value; this.inp.value = '';
    if (this.pw) { this.print('Password: ', 'dim'); this.checkPw(v); }
    else {
      this.print(this.promptEl.textContent + v);
      if (v.trim()) { this.hist.push(v); this.hi = this.hist.length; }
      this.run(v.trim());
    }
    this.updPrompt();
  }

  key(e) {
    e.stopPropagation();
    if (e.key === 'Escape') { e.preventDefault(); this.hooks.onEscape?.(); return; }
    if (e.key === 'F1') { e.preventDefault(); this.hooks.onHint?.(); return; }
    if (e.key.length === 1 || e.key === 'Backspace') this.hooks.onKey?.();
    if (e.key === 'Enter') { e.preventDefault(); this.submit(); }
    else if (e.key === 'ArrowUp' && !this.pw) { e.preventDefault(); if (this.hi > 0) { this.hi--; this.inp.value = this.hist[this.hi]; } }
    else if (e.key === 'ArrowDown' && !this.pw) { e.preventDefault(); if (this.hi < this.hist.length) { this.hi++; this.inp.value = this.hist[this.hi] ?? ''; } }
    else if (e.key === 'Tab') { e.preventDefault(); this.complete(); }
    else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); this.out.innerHTML = ''; }
  }

  // ------------------------------------------------------------ filesystem helpers
  resolve(p) {
    const { user, cwd } = this.cur;
    if (!p) return cwd;
    if (p === '~' || p.startsWith('~/')) p = (user === 'root' ? '/root' : `/home/${user}`) + p.slice(1);
    const parts = (p.startsWith('/') ? p : cwd + '/' + p).split('/');
    const out = [];
    for (const s of parts) { if (!s || s === '.') continue; if (s === '..') out.pop(); else out.push(s); }
    return '/' + out.join('/');
  }
  node(p) { return Object.hasOwn(this.fs, p) ? this.fs[p] : null; }
  canRead(path) {
    const segs = path.split('/').filter(Boolean);
    let acc = '';
    for (let i = 0; i <= segs.length; i++) {
      const p = i === 0 ? '/' : (acc += '/' + segs[i - 1]);
      const n = this.node(p); if (n && !n.r.includes(this.cur.user)) return false;
    }
    return true;
  }
  children(dir) {
    const pre = dir === '/' ? '/' : dir + '/';
    return Object.keys(this.fs).filter((k) => k !== dir && k.startsWith(pre) && !k.slice(pre.length).includes('/')).map((k) => k.slice(pre.length));
  }
  readFile(arg) {
    const p = this.resolve(arg); const n = this.node(p);
    if (!n) return { err: `${arg}: No such file or directory` };
    if (!this.canRead(p)) return { err: `${arg}: Permission denied` };
    if (n.dir) return { err: `${arg}: Is a directory` };
    return { c: n.c, p };
  }

  complete() {
    const v = this.inp.value; const parts = v.split(' ');
    const last = parts[parts.length - 1];
    let cands;
    if (parts.length === 1) cands = Object.keys(this.cmds()).filter((c) => c.startsWith(last));
    else {
      const slash = last.lastIndexOf('/');
      const base = slash >= 0 ? last.slice(0, slash + 1) : '';
      const dir = this.resolve(base || '.');
      if (!this.node(dir)?.dir || !this.canRead(dir)) return;
      cands = this.children(dir).filter((c) => c.startsWith(last.slice(slash + 1))).map((c) => base + c + (this.node(this.resolve(base + c))?.dir ? '/' : ''));
    }
    if (cands.length === 1) { parts[parts.length - 1] = cands[0] + (cands[0].endsWith('/') ? '' : ' '); this.inp.value = parts.join(' '); }
    else if (cands.length > 1) this.print(cands.join('  '), 'dim');
  }

  // ------------------------------------------------------------ commands
  cmds() {
    const st = this.hooks.getState?.() || {};
    return {
      help: () => this.print(
`Commands:
  ls [-a] [path]        list directory          cd <path>       change directory
  cat <file>            print file              pwd / whoami    where / who am I
  su <user>             switch user             exit            leave user / close
  decode <file> <n>     Caesar-decode a file (shift letters back by n)
  scada [status|diag]   SCADA tools (group scada)
  mail [n]              read mail (mvolta)
  gridctl               grid reconnection console (root only)
  clear  history  hint`),
      ls: (a) => {
        const all = a.some((x) => /^-\w*a/.test(x));
        const target = a.find((x) => !x.startsWith('-'));
        const p = this.resolve(target);
        const n = this.node(p);
        if (!n) return this.print(`ls: cannot access '${target}': No such file or directory`, 'err');
        if (!this.canRead(p)) return this.print(`ls: cannot open directory '${target}': Permission denied`, 'err');
        if (!n.dir) return this.print(target);
        const items = this.children(p).filter((c) => all || !c.startsWith('.')).sort();
        const fmt = items.map((c) => (this.node((p === '/' ? '' : p) + '/' + c).dir ? c + '/' : c));
        this.print((all ? ['./', '../', ...fmt] : fmt).join('   ') || '');
      },
      cd: (a) => {
        const p = this.resolve(a[0] || '~');
        const n = this.node(p);
        if (!n) return this.print(`cd: ${a[0]}: No such file or directory`, 'err');
        if (!n.dir) return this.print(`cd: ${a[0]}: Not a directory`, 'err');
        if (!this.canRead(p)) return this.print(`cd: ${a[0]}: Permission denied`, 'err');
        this.cur.cwd = p;
      },
      cat: (a) => {
        if (!a.length) return this.print('cat: missing file operand', 'err');
        for (const f of a) { const r = this.readFile(f); if (r.err) this.print('cat: ' + r.err, 'err'); else this.print(r.c); }
      },
      pwd: () => this.print(this.cur.cwd),
      whoami: () => this.print(this.cur.user),
      id: () => this.print(`uid=${{ root: 0, mvolta: 1000, guest: 1001 }[this.cur.user]}(${this.cur.user}) groups=${this.cur.user}${this.cur.user !== 'guest' ? ',scada' : ''}`),
      clear: () => { this.out.innerHTML = ''; },
      history: () => this.print(this.hist.map((h, i) => `${String(i + 1).padStart(4)}  ${h}`).join('\n')),
      su: (a) => {
        const u = a[0] || 'root';
        if (!Object.hasOwn(this.users, u)) return this.print(`su: user ${u} does not exist`, 'err');
        if (u === this.cur.user) return;
        if (this.users[u] === null) { this.stack.push({ user: u, cwd: `/home/${u}` }); return; }
        this.pw = { user: u };
      },
      exit: () => {
        if (this.stack.length > 1) { this.stack.pop(); this.print('logout', 'dim'); }
        else this.hooks.onEscape?.();
      },
      logout: () => this.cmds().exit(),
      decode: (a) => {
        if (a.length < 2) return this.print('usage: decode <file> <shift>', 'err');
        const r = this.readFile(a[0]);
        if (r.err) return this.print('decode: ' + r.err, 'err');
        const k = parseInt(a[1], 10);
        if (Number.isNaN(k)) return this.print('decode: shift must be a number', 'err');
        const res = caesar(r.c, -k);
        const hit = res.includes('fragment');
        this.print(res, hit ? 'hi' : '');
        if (hit) this.progress.f1 = true;
      },
      scada: (a) => {
        if (this.cur.user === 'guest') return this.print('scada: permission denied (requires group scada)', 'err');
        if (a[0] === 'diag') {
          this.progress.diag = true;
          this.hooks.onDiag?.(true);
          this.print('DIAG: LED self-test pattern latched on rack LED row "DIAG" (server rack, right of the desk).\nPattern stays until reboot.', 'hi');
        } else this.print(`SCADA status\n  grid         : ${st.synced ? 'CONNECTED' : 'LOST (tie breaker Q0 open)'}\n  island       : cluster INV-1..3 ${st.labOn ? 'online' : 'standby'}\n  permit       : ${st.permit ? 'GRANTED' : 'none'}\n  see also     : scada diag`);
      },
      mail: (a) => {
        if (this.cur.user === 'guest') return this.print('mail: no mailbox for guest', 'err');
        const m = emails(this.P);
        const i = parseInt(a[0], 10);
        if (!a[0]) return this.print(m.map((e, k) => `${k + 1}  ${e.from.padEnd(34)} ${e.subj}`).join('\n') + '\n\nread with: mail <n>');
        if (!(i >= 1 && i <= m.length)) return this.print('mail: no such message', 'err');
        this.progress.mail = true;
        this.print(`From: ${m[i - 1].from}\nSubject: ${m[i - 1].subj}\n\n${m[i - 1].body}`);
      },
      firewall: () => this.print('firewall: moved to hardware — use the FW-BOARD logic board on the desk.', 'warn'),
      bin2dec: () => this.print('bin2dec: command removed by IT ("do it in your head, Marco").', 'err'),
      gridctl: () => {
        if (this.cur.user !== 'root') return this.print('gridctl: Operation not permitted (root only)', 'err');
        if (st.synced) return this.print('gridctl: site connected. Nothing left to validate.', 'hi');
        this.print('Starting gridctl dispatch console…', 'hi');
        if (this.pending) clearTimeout(this.pending);
        this.pending = setTimeout(() => { this.pending = null; if (this.isOpen()) this.hooks.onGridctl?.(); }, 450);
      },
      sudo: () => this.print(`${this.cur.user} is not in the sudoers file. This incident will be reported.`, 'err'),
      rm: () => this.print('rm: Permission denied. And please don\'t.', 'err'),
      hint: () => this.hooks.onHint?.(),
      echo: (a) => this.print(a.join(' ')),
      uname: () => this.print('Linux labctl-01 6.8.0-scada #1 SMP x86_64 GNU/Linux'),
      man: () => this.print('No manual entry. Try "help".'),
    };
  }

  /** Tiered hints for the terminal part (used by the global hint system). */
  hintTopic(state) {
    const p = this.progress, P = this.P, u = this.cur.user;
    if (!p.mv && u === 'guest') return { id: 'mv', tiers: [
      'You are "guest". Marco\'s own account would be more useful.',
      'readme.txt → hidden files (ls -a) → the photo in ~/pics. Whose name is it, and where is he napping?',
      `su mvolta — password "${P.userPw}": the cat's name from his collar tag (${P.cat}, on INV-2 in the booth), reversed, lowercase.`] };
    if (!p.f1) return { id: 'f1', tiers: [
      'As mvolta, read notes.txt.',
      'Fragment 1 is a Caesar cipher. The shift is the number of lamps above the PV test rig in the booth.',
      `decode fragment1.enc ${P.lamps} → ${P.f1}`] };
    if (!p.diag) return { id: 'f2a', tiers: ['Fragment 2 is on the server rack.', 'Run "scada diag".', 'scada diag — then look at the DIAG LED row on the rack.'] };
    if (!state.f2seen) return { id: 'f2', tiers: [
      'The DIAG row is a binary number.',
      'Lit = 1, dark = 0, most significant bit on the left. Place values 128 64 32 16 8 4 2 1.',
      `${P.binStr} = ${P.bin}`] };
    if (!state.f3) return { id: 'f3', tiers: [
      'Fragment 3 comes from hardware on the desk.',
      'The FW-BOARD: set switches A–D so the circuit on the poster outputs 1, then press TEST. Every AND input must be 1.',
      `Switches A B C D = ${P.boardSolution.split('').join(' ')} → fragment ${P.f3}.`] };
    if (u !== 'root') return { id: 'root', tiers: [
      'You have all three fragments.',
      'Root password = fragment 1 + fragment 2 + fragment 3, no spaces.',
      `su root → ${P.rootPw}`] };
    return null;
  }

  checkPw(v) {
    const u = this.pw.user; this.pw = null;
    if (v.trim().toLowerCase() === this.users[u]) {
      this.stack.push({ user: u, cwd: u === 'root' ? '/root' : `/home/${u}` });
      if (u === 'mvolta') { this.progress.mv = true; this.print('Welcome back, Marco. You have 3 unread messages (mail).', 'hi'); }
      if (u === 'root') { this.progress.root = true; this.print('# root shell. Try: cat README', 'hi'); this.hooks.onRoot?.(); }
    } else this.print('su: Authentication failure', 'err');
  }

  run(line) {
    if (!line) return;
    const [c, ...a] = line.split(/\s+/);
    const cmds = this.cmds();
    if (Object.hasOwn(cmds, c)) cmds[c](a);
    else this.print(`${c}: command not found`, 'err');
  }
}
