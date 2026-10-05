# Office chair (control room). Blender: Z up, the backrest is on +Y, origin on the floor under the gas lift.
reset('chair')
fabric = ('chair_fabric', (0.055, 0.06, 0.068), 0.95, 0.0)
plastic = ('chair_plastic', (0.025, 0.026, 0.028), 0.45, 0.0)
chrome = ('chair_chrome', (0.75, 0.76, 0.78), 0.22, 1.0)

part('cube', (0, 0, 0.475), (0.245, 0.235, 0.045), fabric, bevel=0.035, segs=4, subd=2)          # seat cushion
part('cube', (0, 0.02, 0.425), (0.215, 0.2, 0.012), plastic, bevel=0.01, segs=2)                  # seat shell
part('cube', (0, 0.255, 0.82), (0.22, 0.04, 0.24), fabric, rot=(math.radians(-9), 0, 0), bevel=0.04, segs=4, subd=2)   # backrest
part('cube', (0, 0.255, 0.58), (0.035, 0.016, 0.13), plastic, rot=(math.radians(-14), 0, 0), bevel=0.01, segs=2)      # back spine
part('cube', (0, 0.17, 0.44), (0.035, 0.09, 0.014), plastic, bevel=0.008, segs=2)                  # spine foot
part('cyl', (0, 0, 0.27), (0.022, 0.022, 0.15), chrome, verts=32, lowverts=10)                     # gas lift
part('cyl', (0, 0, 0.165), (0.032, 0.032, 0.075), plastic, bevel=0.006, segs=2, verts=32, lowverts=10)   # lift sleeve
part('cyl', (0, 0, 0.1), (0.05, 0.05, 0.022), plastic, bevel=0.008, segs=2, verts=32, lowverts=12)       # hub
for i in range(5):                                                                                  # 5-star base + casters
    a = math.radians(90 + i * 72); ca, sa = math.cos(a), math.sin(a)
    part('cube', (ca * 0.15, sa * 0.15, 0.095), (0.022, 0.15, 0.016), plastic, rot=(0, 0, a - math.pi / 2), bevel=0.01, segs=3, subd=1)
    part('cube', (ca * 0.29, sa * 0.29, 0.065), (0.012, 0.012, 0.025), plastic, rot=(0, 0, a), bevel=0.004, segs=2)
    part('cyl', (ca * 0.3, sa * 0.3, 0.03), (0.028, 0.028, 0.012), plastic, rot=(0, math.pi / 2, a), bevel=0.005, segs=2, verts=24, lowverts=10)
for s in (-1, 1):                                                                                   # armrests
    part('cube', (s * 0.25, 0.04, 0.56), (0.014, 0.028, 0.085), plastic, bevel=0.006, segs=2)
    part('cube', (s * 0.25, 0.0, 0.655), (0.028, 0.12, 0.014), plastic, bevel=0.012, segs=3, subd=1)
    part('cube', (s * 0.16, 0.04, 0.44), (0.09, 0.022, 0.01), plastic, bevel=0.004, segs=2)

low = bake('chair', size=512, cage=0.02)
result = export('chair', [low])
preview('chair', [low], dist=1.5, height=0.5, target=(0, 0, 0.45))
print(result)
