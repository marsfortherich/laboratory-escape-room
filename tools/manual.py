"""Builds the printable student handout: handout/Power-Lab-Escape-Student-Manual.pdf

    pip install reportlab
    python tools/manual.py

Spoiler-free: it explains the controls, the setting and the science, but gives no codes or solutions.
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
                                PageBreak, KeepTogether, Flowable)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'handout', 'Power-Lab-Escape-Student-Manual.pdf')
URL = 'lnes-rh.github.io/escaperoom'
LABEL = 'Student manual'

FONTS = 'C:/Windows/Fonts/'
pdfmetrics.registerFont(TTFont('UI', FONTS + 'segoeui.ttf'))
pdfmetrics.registerFont(TTFont('UI-Bold', FONTS + 'segoeuib.ttf'))
pdfmetrics.registerFont(TTFont('UI-Light', FONTS + 'segoeuil.ttf'))
pdfmetrics.registerFont(TTFont('Mono', FONTS + 'consola.ttf'))
from reportlab.lib.fonts import addMapping
addMapping('UI', 0, 0, 'UI'); addMapping('UI', 1, 0, 'UI-Bold'); addMapping('UI', 0, 1, 'UI'); addMapping('UI', 1, 1, 'UI-Bold')

NAVY = colors.HexColor('#1b2530'); YELLOW = colors.HexColor('#f2b705'); PALE = colors.HexColor('#fff6d6')
GREY = colors.HexColor('#5b6570'); LINE = colors.HexColor('#c9cfd6'); BLUE = colors.HexColor('#1b5fa8')
L1, L2, L3 = colors.HexColor('#e0483a'), colors.HexColor('#d9a400'), colors.HexColor('#2f7fd0')

S = {
    'body': ParagraphStyle('body', fontName='UI', fontSize=9.6, leading=13.4, spaceAfter=5, textColor=colors.HexColor('#1d232a')),
    'h1': ParagraphStyle('h1', fontName='UI-Bold', fontSize=17, leading=21, textColor=NAVY, spaceBefore=2, spaceAfter=7),
    'h2': ParagraphStyle('h2', fontName='UI-Bold', fontSize=11.5, leading=15, textColor=BLUE, spaceBefore=8, spaceAfter=3),
    'small': ParagraphStyle('small', fontName='UI', fontSize=8.2, leading=11, textColor=GREY),
    'cell': ParagraphStyle('cell', fontName='UI', fontSize=8.8, leading=11.6),
    'cellb': ParagraphStyle('cellb', fontName='UI-Bold', fontSize=8.8, leading=11.6),
    'head': ParagraphStyle('head', fontName='UI-Bold', fontSize=8.8, leading=11.6, textColor=colors.white),
    'box': ParagraphStyle('box', fontName='UI', fontSize=9.2, leading=12.8),
    'bullet': ParagraphStyle('bullet', fontName='UI', fontSize=9.6, leading=13.4, leftIndent=12, bulletIndent=2, spaceAfter=2.5),
    'title': ParagraphStyle('title', fontName='UI-Bold', fontSize=34, leading=38, textColor=colors.white),
    'sub': ParagraphStyle('sub', fontName='UI-Light', fontSize=15, leading=20, textColor=colors.HexColor('#ffd24a')),
}
P = lambda t, s='body': Paragraph(t, S[s])
def bullets(items): return [Paragraph(t, S['bullet'], bulletText='•') for t in items]


def table(rows, widths, head=True, zebra=True, align_top=True, heights=None):
    data = [[c if isinstance(c, Flowable) else Paragraph(str(c), S['head'] if (head and i == 0) else S['cell']) for c in r] for i, r in enumerate(rows)]
    t = Table(data, colWidths=widths, rowHeights=heights, repeatRows=1 if head else 0)
    st = [('GRID', (0, 0), (-1, -1), 0.4, LINE), ('VALIGN', (0, 0), (-1, -1), 'TOP' if align_top else 'MIDDLE'),
          ('LEFTPADDING', (0, 0), (-1, -1), 5), ('RIGHTPADDING', (0, 0), (-1, -1), 5), ('TOPPADDING', (0, 0), (-1, -1), 3.2), ('BOTTOMPADDING', (0, 0), (-1, -1), 3.2)]
    if head: st.append(('BACKGROUND', (0, 0), (-1, 0), NAVY))
    if zebra:
        for i in range(1 if head else 0, len(rows)):
            if i % 2 == 0: st.append(('BACKGROUND', (0, i), (-1, i), colors.HexColor('#f3f5f7')))
    t.setStyle(TableStyle(st)); return t


def box(title, flowables, bg=PALE, edge=YELLOW):
    inner = [Paragraph(f'<b>{title}</b>', S['box'])] + flowables
    t = Table([[inner]], colWidths=[170 * mm])
    t.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), bg), ('LINEBEFORE', (0, 0), (0, -1), 3, edge),
                           ('LEFTPADDING', (0, 0), (-1, -1), 9), ('RIGHTPADDING', (0, 0), (-1, -1), 9), ('TOPPADDING', (0, 0), (-1, -1), 6), ('BOTTOMPADDING', (0, 0), (-1, -1), 6)]))
    return KeepTogether([Spacer(1, 3), t, Spacer(1, 5)])


class Swatch(Flowable):
    def __init__(self, hexcol, w=13 * mm, h=4.2 * mm): super().__init__(); self.c, self.width, self.height = hexcol, w, h
    def draw(self):
        self.canv.setFillColor(colors.HexColor(self.c)); self.canv.setStrokeColor(GREY); self.canv.setLineWidth(0.4)
        self.canv.rect(0, 0, self.width, self.height, fill=1, stroke=1)


class Synchroscope(Flowable):
    """A small synchroscope + three lamps, for the synchronisation page."""
    def __init__(self): super().__init__(); self.width, self.height = 170 * mm, 44 * mm
    def draw(self):
        c = self.canv; cx, cy, r = 30 * mm, 21 * mm, 17 * mm
        c.setStrokeColor(NAVY); c.setFillColor(colors.HexColor('#f4f1e8')); c.setLineWidth(1.2); c.circle(cx, cy, r, fill=1)
        import math
        c.setFillColor(colors.HexColor('#9fd8a8')); p = c.beginPath(); p.moveTo(cx, cy)
        p.arcTo(cx - r, cy - r, cx + r, cy + r, 80, 20); p.close(); c.drawPath(p, fill=1, stroke=0)
        c.setLineWidth(0.6)
        for i in range(36):
            a = math.radians(90 - i * 10); r0 = r * (0.78 if i % 9 == 0 else 0.88)
            c.line(cx + math.cos(a) * r0, cy + math.sin(a) * r0, cx + math.cos(a) * r * 0.97, cy + math.sin(a) * r * 0.97)
        a = math.radians(90 - 35); c.setStrokeColor(colors.HexColor('#c0251a')); c.setLineWidth(2)
        c.line(cx, cy, cx + math.cos(a) * r * 0.85, cy + math.sin(a) * r * 0.85)
        c.setFillColor(NAVY); c.setFont('UI', 7); c.drawCentredString(cx - 9 * mm, cy - 9 * mm, 'SLOW'); c.drawCentredString(cx + 9 * mm, cy - 9 * mm, 'FAST')
        c.drawCentredString(cx, cy + r + 2 * mm, '12 o’clock = in phase')
        # lamps
        x0 = 72 * mm
        for row, (label, levels) in enumerate([('Dark together: same rotation', [0.0, 0.0, 0.0]), ('Chasing each other: rotation wrong', [1.0, 0.1, 0.55])]):
            y = cy + 8 * mm - row * 16 * mm
            for k, lv in enumerate(levels):
                c.setFillColor(colors.Color(0.3 + 0.7 * lv, 0.27 + 0.6 * lv, 0.24 + 0.2 * lv)); c.setStrokeColor(GREY); c.setLineWidth(0.5)
                c.circle(x0 + k * 9 * mm, y, 3.2 * mm, fill=1)
                c.setFillColor(NAVY); c.setFont('UI', 6.5); c.drawCentredString(x0 + k * 9 * mm, y - 6 * mm, f'L{k + 1}')
            c.setFont('UI', 8.5); c.drawString(x0 + 27 * mm, y - 1 * mm, label)


CODES = [('black', '#111111', '×1'), ('brown', '#6b3a1e', '×10'), ('red', '#d0231f', '×100'), ('orange', '#f07f16', '×1 000'), ('yellow', '#f5d10f', '×10 000'),
         ('green', '#2c9a3a', '×100 000'), ('blue', '#2455c9', '×1 M'), ('violet', '#7b3fb0', '×10 M'), ('grey', '#8a8a8a', '×100 M'), ('white', '#f4f4f4', '×1 G')]


def colour_code():
    """The resistor colour code as two compact side-by-side tables (0–4 and 5–9)."""
    half = lambda k: table([['Colour', '', 'Digit', 'Multiplier']] + [[n, Swatch(c, w=10 * mm), str(k + i), m] for i, (n, c, m) in enumerate(CODES[k:k + 5])],
                           [22 * mm, 15 * mm, 13 * mm, 28 * mm], align_top=False)
    t = Table([[half(0), half(5)]], colWidths=[85 * mm, 85 * mm])
    t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0)]))
    return t


def decorate(canvas, doc):
    canvas.saveState()
    w, h = A4
    if doc.page > 1:
        canvas.setFillColor(NAVY); canvas.rect(0, h - 11 * mm, w, 11 * mm, fill=1, stroke=0)
        canvas.setFillColor(YELLOW); canvas.rect(0, h - 11.8 * mm, w, 0.8 * mm, fill=1, stroke=0)
        canvas.setFillColor(colors.white); canvas.setFont('UI-Bold', 9); canvas.drawString(20 * mm, h - 7.2 * mm, 'POWER LAB ESCAPE')
        canvas.setFont('UI', 8.5); canvas.drawRightString(w - 20 * mm, h - 7.2 * mm, LABEL)
        canvas.setFillColor(GREY); canvas.setFont('UI', 8)
        canvas.drawString(20 * mm, 10 * mm, URL); canvas.drawRightString(w - 20 * mm, 10 * mm, f'{doc.page}')
        canvas.setStrokeColor(LINE); canvas.setLineWidth(0.4); canvas.line(20 * mm, 14 * mm, w - 20 * mm, 14 * mm)
    canvas.restoreState()


def cover(canvas, doc):
    w, h = A4
    canvas.saveState()
    canvas.setFillColor(NAVY); canvas.rect(0, 0, w, h, fill=1, stroke=0)
    # stylised skyline + river
    canvas.setFillColor(colors.HexColor('#24344a')); canvas.rect(0, 0, w, 95 * mm, fill=1, stroke=0)
    import random
    random.seed(4); x = 0
    canvas.setFillColor(colors.HexColor('#0e141c'))
    while x < w:
        bw = random.uniform(8, 22) * mm; bh = random.uniform(10, 28) * mm
        canvas.rect(x, 95 * mm, bw, bh, fill=1, stroke=0); x += bw
    # cathedral silhouette
    for cx in (118 * mm, 130 * mm):
        p = canvas.beginPath(); p.moveTo(cx - 4 * mm, 95 * mm); p.lineTo(cx - 4 * mm, 132 * mm); p.lineTo(cx, 152 * mm); p.lineTo(cx + 4 * mm, 132 * mm); p.lineTo(cx + 4 * mm, 95 * mm); p.close()
        canvas.drawPath(p, fill=1, stroke=0)
    canvas.rect(122 * mm, 95 * mm, 40 * mm, 26 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor('#ffd58a'))
    random.seed(9)
    for _ in range(70): canvas.rect(random.uniform(0, w), random.uniform(97, 118) * mm, 1.1 * mm, 1.3 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(colors.HexColor('#3d5470')); canvas.setLineWidth(0.6)
    random.seed(2)
    for _ in range(60):
        y = random.uniform(10, 90) * mm; x = random.uniform(0, w); canvas.line(x, y, x + random.uniform(8, 30) * mm, y)
    # lightning
    canvas.setStrokeColor(colors.HexColor('#dfe8ff')); canvas.setLineWidth(1.6)
    pts = [(168, 282), (163, 266), (171, 258), (164, 240), (172, 230), (167, 214)]
    for a, b in zip(pts, pts[1:]): canvas.line(a[0] * mm, a[1] * mm, b[0] * mm, b[1] * mm)
    canvas.setFillColor(YELLOW); canvas.rect(20 * mm, 248 * mm, 30 * mm, 1.6 * mm, fill=1, stroke=0)
    canvas.restoreState()


def build():
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    doc = BaseDocTemplate(OUT, pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=19 * mm, bottomMargin=19 * mm,
                          title='Power Lab Escape — Student manual', author='Power Lab Escape', subject='Handout for students')
    frame = Frame(20 * mm, 19 * mm, 170 * mm, 259 * mm, id='f')
    cover_frame = Frame(20 * mm, 120 * mm, 170 * mm, 155 * mm, id='c')
    doc.addPageTemplates([PageTemplate('cover', [cover_frame], onPage=cover), PageTemplate('page', [frame], onPage=decorate)])
    st = []

    # ------------------------------------------------------------------ cover
    st += [Spacer(1, 40 * mm), Paragraph('POWER LAB<br/>ESCAPE', S['title']), Spacer(1, 6 * mm),
           Paragraph('A 3D escape room about island grids, hydrogen,<br/>hacking and energy trading', S['sub']), Spacer(1, 10 * mm),
           Paragraph('<font color="#ffffff">Student manual · read before you play · no spoilers inside</font>', ParagraphStyle('x', fontName='UI', fontSize=10.5, leading=14)),
           Spacer(1, 3 * mm),
           Paragraph(f'<font color="#c8d4e0">Play in the browser: <b>{URL}</b></font>', ParagraphStyle('y', fontName='UI', fontSize=9.5, leading=13))]
    from reportlab.platypus import NextPageTemplate
    st += [NextPageTemplate('page'), PageBreak()]

    # ------------------------------------------------------------------ 1. mission
    st += [P('1 · Your mission', 'h1'),
           P('<b>Friday, 18:40.</b> You came to the Solar Test Laboratory in Cologne to certify its island microgrid. Then a storm knocked out the public grid. '
             'The building is dark, and the door of the test booth — a motor-driven, fail-secure sliding door — will not move without power. '
             'The emergency lights run on a battery that lasts about an hour. The head of the lab, Marco Volta, has already left for the weekend.'),
           P('Your job: bring the lab\'s own power system to life, get into the control room, and get the building back on the grid. '
             'The game is played in four stages:'),
           table([['Stage', 'Where', 'What you have to do'],
                  ['1 · The booth', 'Test booth', 'Start the lab microgrid (PV, battery, hydrogen, fuel cell) so that every phase can carry the door motor.'],
                  ['2 · The control PC', 'Control room', 'Find clues in the 3D world to log in to Marco\'s computer and become <i>root</i>.'],
                  ['3 · gridctl', 'Control PC', 'Plan 24 hours of trading for the lab\'s energy system to earn a reconnection permit from the grid operator.'],
                  ['4 · Synchronise', 'Tie panel Q0', 'Connect the lab to the public grid without a bang. Then walk out.']],
                 [32 * mm, 30 * mm, 108 * mm]),
           Spacer(1, 4),
           box('How to play as a team', bullets([
               'Play in teams of <b>2–3</b>: one person drives, the others read panels, take notes and check this manual. Swap the driver after each stage.',
               'Allow <b>45–75 minutes</b>. The 60-minute timer is part of the story; you can keep playing in overtime.',
               '<b>Everything you need is in the game.</b> This manual explains the physics and the tools, not the answers.',
               'Use the notes page at the end of this booklet: many clues are needed again much later.'])),
           P('2 · Controls', 'h1'),
           table([['Action', 'Keyboard + mouse', 'Phone / tablet'],
                  ['Move · run', 'W A S D · hold Shift', 'Left thumb joystick · RUN button'],
                  ['Look around', 'Mouse (click into the game first)', 'Drag with the right thumb'],
                  ['Use / open an object', 'E or left click', 'Tap the object or USE'],
                  ['Hint', 'H', 'Hint button'],
                  ['Journal (all clues found so far)', 'J', 'Journal button'],
                  ['Menu, settings, pause', 'Esc', 'Menu button']],
                 [52 * mm, 58 * mm, 60 * mm]),
           Spacer(1, 4),
           P('The <b>crosshair</b> in the middle of the screen turns active and an object gets an amber outline when you can use it. '
             'Objects open a <b>panel</b> on the right with switches, readings or text. The game <b>saves automatically</b>; choose <i>Continue</i> on the title screen to resume.'),
           ]
    st += [PageBreak()]

    # ------------------------------------------------------------------ 3. screen + hints
    st += [P('3 · What you see on screen', 'h1'),
           table([['Element', 'What it tells you'],
                  ['Timer (top left)', 'Time left on the emergency light, including time penalties for hints. Your rank at the end depends on it.'],
                  ['Objective (bottom left)', 'The current goal — never the solution.'],
                  ['Main bus box', 'Appears once you work on the lab devices: the headroom (spare power) on each of the three phases L1, L2, L3.'],
                  ['Inventory chips', 'Items you carry. Items are used from the panel of the object they belong to.'],
                  ['Journal', 'Every clue you have read or heard is copied here automatically, with the time you found it.']],
                 [42 * mm, 128 * mm]),
           P('Hints', 'h2'),
           P('Press <b>H</b> when you are stuck. Hints always refer to your <i>current</i> problem and come in three steps:'),
           table([['Step', 'Cost', 'What you get'],
                  ['Nudge', 'free', 'A question that points you in the right direction.'],
                  ['Pointer', '+1:00', 'Where to look and what to combine.'],
                  ['Solution', '+3:00', 'The exact answer.']],
                 [30 * mm, 22 * mm, 118 * mm]),
           Spacer(1, 3),
           P('In the trading game an <b>advisor</b> is available for single hours; each use adds 0:15.'),
           P('Settings (Esc → Settings)', 'h2'),
           P('Look sensitivity, invert Y, field of view, volume, UI size, brightness, <b>reduced motion</b>, <b>reduce flashing</b> '
             '(softer lightning — recommended for players sensitive to flashing light), a <b>colour-blind-safe</b> palette for the phase colours, and render quality. '
             'If the game runs slowly, choose <i>Low</i> quality.'),
           box('Escape-room rules of thumb', bullets([
               'Read everything: signs, posters, labels, sticky notes, e-mails, files. Listen to the voice recorders.',
               'Numbers and words you find usually have exactly one purpose. Write them down with <i>where</i> you found them.',
               'If something looks broken or missing, someone probably took it away — and hid it.',
               'Not every object is a clue. Some just tell you about the people who work here (and their cat).',
               'Wrong attempts at some locks and boards cost time. Think first, then try.']))]
    st += [PageBreak()]

    # ------------------------------------------------------------------ 4. island grid
    st += [P('4 · Science for stage 1: an island microgrid', 'h1'),
           P('With the public grid gone, the lab must run as an <b>island</b>. Nothing outside supplies or absorbs power, so at every instant '
             '<b>generation must equal consumption</b>. Sources only deliver what the loads actually draw.'),
           P('Three phases, three islands', 'h2'),
           P('The lab\'s main bus has three phases, <font color="#e0483a"><b>L1</b></font>, <font color="#b08400"><b>L2</b></font> and '
             '<font color="#2f7fd0"><b>L3</b></font>. Each of the three inverters is <b>single-phase</b> and <b>grid-forming</b>: it creates the 230 V / 50 Hz '
             'of exactly one phase you assign to it. Power cannot jump from one phase to another — a load on L2 can only be supplied by a source on L2.'),
           P('<b>Headroom</b> = what the sources on a phase could still deliver minus what that phase already consumes. '
             'If the demand on a phase is higher than its sources can deliver, the inverter reaches its current limit, the voltage collapses and an '
             '<b>under-voltage relay trips</b> that phase. Reset it in the main bus panel once the overload is gone.'),
           P('The lab\'s devices', 'h2'),
           table([['Device', 'What it does', 'Key numbers'],
                  ['Sun simulator + PV test rig', 'Lamps light the III-V solar modules; the PV produces DC power.', '5.4 kW DC at 3 suns. Lamp → light → PV → AC is only about 9 % efficient.'],
                  ['INV-1 (hybrid PV inverter)', 'Turns PV power into AC on one phase.', '≈ 5.2 kW AC (η 97 %)'],
                  ['Battery + INV-2', 'Stores energy. Mode CHARGE (load) or DISCHARGE (source).', '10 kWh, charge 2.0 kW, discharge 3.5 kW, 95 % efficient each way'],
                  ['PEM electrolyzer', 'Uses electricity to split water: H<sub>2</sub>O → H<sub>2</sub> + ½ O<sub>2</sub>.', '3 kW, 55 kWh per kg of H<sub>2</sub>'],
                  ['H<sub>2</sub> buffer tank', 'Stores the hydrogen. The valve needs a handwheel.', '30 bar, 0.22 kg H<sub>2</sub>'],
                  ['PEM fuel cell + INV-3', 'Turns hydrogen back into electricity.', '3.4 kW, 18 kWh of electricity per kg; needs a few seconds to warm up'],
                  ['Every energised phase', 'Lights and controls.', '0.2 kW auxiliary load per phase']],
                 [40 * mm, 66 * mm, 64 * mm]),
           Spacer(1, 4),
           P('Merit order and storage', 'h2'),
           P('On each phase the sources are used in a fixed order: <b>PV first, then the battery, then the fuel cell</b>. Storage drains only by the power it actually delivers. '
             'The game runs on a <b>time-lapse</b>: 10 real seconds are one lab hour, so filling the battery or the tank takes a little real time.'),
           box('Think about it', [P('Power → hydrogen → power returns only about one third of the electricity '
                                    '(55 kWh in per kg, 18 kWh out per kg). Why would anyone still store energy as hydrogen?', 'box')]),
           P('The door', 'h2'),
           P('The booth door is driven by a <b>3-phase induction motor</b>. Starting it loads <b>every phase at the same time</b> with about 3 kVA for 5 seconds '
             '(a large, mostly reactive inrush current). If one phase is dead or too weak, the motor hums and stalls — this is called <i>single-phasing</i>. '
             'The door controller shows the headroom of each phase.')]
    st += [PageBreak()]

    # ------------------------------------------------------------------ 5. stage 2 toolbox
    st += [P('5 · Puzzle toolbox', 'h1'),
           P('Some locks and clues need a bit of general knowledge. The <b>resistor colour code</b> is needed in the booth (stage 1); '
             'the terminal, binary numbers, logic gates and the Caesar cipher in the control room (stage 2).'),
           P('The control PC (stage 2)', 'h2'),
           P('The control PC is a Linux-like terminal. Type <font name="Mono">help</font> to see the commands. Useful general knowledge:'),
           table([['Command', 'Meaning'],
                  ['<font name="Mono">ls</font> · <font name="Mono">ls -a</font>', 'List files · also show hidden files (their names start with a dot)'],
                  ['<font name="Mono">cat file</font>', 'Show the contents of a file'],
                  ['<font name="Mono">cd folder</font>', 'Change directory'],
                  ['<font name="Mono">su user</font>', 'Switch user (asks for a password)'],
                  ['<font name="Mono">mail</font>', 'Read the current user\'s e-mail']],
                 [45 * mm, 125 * mm]),
           P('Resistor colour code (stage 1)', 'h2'),
           P('A 4-band resistor is read from the end its bands are closest to. <b>Bands 1 and 2 are digits, band 3 is a multiplier</b> (the number of zeros), band 4 is the tolerance.'),
           colour_code(),
           P('Example (not a code from the game): brown · black · orange · gold = 1, 0, ×1 000 → 10 000 Ω, ±5 %.', 'small'),
           P('Binary numbers (stage 2)', 'h2'),
           P('A row of LEDs can be read as a binary number: lit = 1, dark = 0. The leftmost LED is the most significant bit (MSB). '
             'With 8 LEDs the place values are <b>128 · 64 · 32 · 16 · 8 · 4 · 2 · 1</b>. Example: 0000 0101 = 4 + 1 = 5.'),
           P('Logic gates (stage 2)', 'h2'),
           table([['A', 'B', 'AND', 'OR', 'XOR', 'NAND', 'NOR'],
                  ['0', '0', '0', '0', '0', '1', '1'], ['0', '1', '0', '1', '1', '1', '0'], ['1', '0', '0', '1', '1', '1', '0'], ['1', '1', '1', '1', '0', '0', '0']],
                 [14 * mm] * 7),
           P('NOT inverts its input. A small circle (bubble) on a gate input or output also means "inverted". Work backwards from the output: '
             'what must each gate deliver so that the final output is 1?'),
           P('Caesar cipher (stage 2)', 'h2'),
           P('Each letter is shifted by a fixed number of places in the alphabet (with a shift of 3: A → D, B → E, … X → A). '
             'To decode, shift back by the same number. The shift itself is hidden somewhere in the lab.')]
    st += [PageBreak()]

    # ------------------------------------------------------------------ 6. gridctl
    st += [P('6 · Science for stage 3: trading energy (gridctl)', 'h1'),
           P('To get a <b>reconnection permit</b>, the lab must show the grid operator a sensible 24-hour dispatch plan for its large system '
             '(600 kWp PV, 1 MWh battery, 200 kW electrolyzer, 150 kW fuel cell, 300 kW grid connection). You set the devices hour by hour and press <b>Run hour</b>.'),
           table([['Term', 'Meaning'],
                  ['Day-ahead price', 'The forecast price for each hour, known in advance (dashed line).'],
                  ['Intraday price', 'The real price, revealed when the hour runs. If it is cloudier than forecast, there is less solar power in the region and the price goes up.'],
                  ['Export / import', 'Exported energy is paid at the price. Imports cost the price plus 40 €/MWh grid fees.'],
                  ['Negative prices', 'On sunny days there can be too much power: exporting then <i>costs</i> money. Curtail PV, charge, or run the electrolyzer.'],
                  ['Break-even prices', 'Shown in the forecast box: below the electrolyzer break-even, making hydrogen is worth more than selling power; above the fuel-cell break-even, burning hydrogen pays.'],
                  ['Green vs. grey H<sub>2</sub>', 'Hydrogen only counts as renewable (and fetches the day\'s H<sub>2</sub> price) if it comes from your own PV surplus or from hours with a day-ahead price ≤ 20 €/MWh. Otherwise it sells as grey hydrogen at 2 €/kg.'],
                  ['Score', 'Your result is compared with a "do nothing" plan and with a perfect-foresight benchmark. You need ≥ 55 % of the benchmark\'s extra profit.']],
                 [36 * mm, 134 * mm]),
           Spacer(1, 4),
           box('A simple strategy that usually passes', bullets([
               'Buy low, sell high: <b>charge the battery when power is cheap</b> (midday, negative prices) and <b>discharge at the evening peak</b>.',
               'Run the electrolyzer on PV surplus or in very cheap hours — not on expensive night-time grid power.',
               'Run the fuel cell only when the price is above its break-even.',
               'At night, when nothing is cheap or expensive, leave everything at zero and fast-forward with the "3 h" button.',
               'Failed? <i>Review the day</i> shows the benchmark hour by hour. <i>Replay</i> keeps the forecast, but reality comes out differently — so learn the rule, not the numbers.'])),
           box('Think about it', [P('Why does a storage operator earn money exactly when the price difference between hours is large? '
                                    'What does this mean for a power system with a lot of solar energy?', 'box')])]
    st += [PageBreak()]

    # ------------------------------------------------------------------ 7. sync
    st += [P('7 · Science for stage 4: synchronising with the grid', 'h1'),
           P('You may only connect two AC systems when they are <b>in step</b>. Closing a breaker between two voltages that are out of phase drives huge currents — '
             'it trips immediately and, with real machines, can damage them. Before closing the tie breaker <b>Q0</b>, four conditions must hold:'),
           table([['#', 'Condition', 'Why'],
                  ['1', 'The same voltage (within about 2 %)', 'Otherwise reactive current rushes from one side to the other.'],
                  ['2', 'Almost the same frequency — the island a hair <b>faster</b>', 'If the island were slower, the grid would push power into it (reverse power) the moment the breaker closes.'],
                  ['3', 'The same phase rotation (L1 → L2 → L3)', 'If two phases are swapped, two poles of the breaker close onto the full line voltage.'],
                  ['4', 'The same phase angle', 'Close when the synchroscope needle is at 12 o\'clock.']],
                 [8 * mm, 62 * mm, 100 * mm]),
           P('Synchroscope and dark lamps', 'h2'),
           Synchroscope(),
           P('The <b>synchroscope</b> needle turns at the difference frequency: clockwise (FAST) when the island is faster, anticlockwise when slower, '
             'and it stands still when both are equal. The three <b>lamps</b> are connected across the open breaker poles. When rotation and phase match, '
             'all three go dark <b>together</b>. If they light up one after another (they "chase" each other), the phase rotation is wrong. '
             'Filament lamps look dark over a wide angle — so use the lamps to check the rotation, and the synchroscope to choose the moment.'),
           box('Think about it', [P('You can only synchronise to a grid that is already live. What does that tell you about the city outside the window '
                                    'when you reach this stage?', 'box')]),
           P('Glossary', 'h2'),
           table([['Term', 'Short explanation'],
                  ['AC / DC', 'Alternating current (50 cycles per second here) / direct current (from PV, batteries, fuel cells).'],
                  ['Phase (L1, L2, L3)', 'One of the three AC conductors; their voltages are shifted by 120°.'],
                  ['Inverter', 'Power electronics that turns DC into AC. Grid-forming inverters set voltage and frequency themselves.'],
                  ['kW / kWh', 'Power (how fast energy flows) / energy (power × time).'],
                  ['kVA', 'Apparent power: includes the reactive current that does no work but still loads cables and inverters.'],
                  ['Electrolyzer / fuel cell', 'Electricity → hydrogen / hydrogen → electricity.'],
                  ['Curtailment', 'Deliberately producing less PV power than possible.'],
                  ['Breaker / relay', 'A switch that can interrupt a current / a device that opens it automatically when something is wrong.']],
                 [38 * mm, 132 * mm])]
    st += [PageBreak()]

    # ------------------------------------------------------------------ 8. notes
    st += [P('8 · Team notes', 'h1'),
           P('Write down every number, word or observation with the place you found it. Tick it off when you have used it.'),
           table([['What we found', 'Where', 'Used for', '✓'.replace('✓', 'done')]] + [['', '', '', ''] for _ in range(14)],
                 [64 * mm, 44 * mm, 46 * mm, 16 * mm], zebra=False, heights=[None] + [10 * mm] * 14),
           Spacer(1, 6),
           P('After the game', 'h2'),
           table([['Question', 'Your answer']] + [[q, ''] for q in [
               'Why could the door not open as long as one phase had too little headroom?',
               'Which part of the energy chain lost the most energy, and why?',
               'What would you change in your trading plan if the next day were cloudy?',
               'Our time · hints used · rank:']], [78 * mm, 92 * mm], zebra=False, heights=[None] + [15 * mm] * 4),
           ]
    doc.build(st)


if __name__ == '__main__':
    build()
    print('wrote', OUT)
