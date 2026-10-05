# CO2 / powder fire extinguisher on its wall bracket. Blender: Z up, the wall is on +Y, origin on the floor below it.
reset('extinguisher')
red = ('ext_red', (0.55, 0.02, 0.018), 0.32, 0.0)
label = ('ext_label', (0.82, 0.8, 0.74), 0.55, 0.0)
black = ('ext_black', (0.02, 0.02, 0.022), 0.6, 0.0)
metal = ('ext_metal', (0.72, 0.72, 0.74), 0.3, 1.0)
brass = ('ext_brass', (0.7, 0.52, 0.22), 0.35, 1.0)
gauge = ('ext_gauge', (0.9, 0.9, 0.88), 0.3, 0.0)

part('cyl', (0, 0, 0.385), (0.082, 0.082, 0.205), red, bevel=0.02, segs=4, verts=48, lowverts=16)          # body
part('sphere', (0, 0, 0.59), (0.082, 0.082, 0.05), red, verts=48, lowverts=16)                              # shoulder
part('cyl', (0, 0, 0.36), (0.0835, 0.0835, 0.09), label, verts=48, lowverts=16)                             # label band
part('cyl', (0, 0, 0.215), (0.0838, 0.0838, 0.006), black, verts=48, lowverts=16)                           # foot ring
part('cyl', (0, 0, 0.645), (0.02, 0.02, 0.02), brass, bevel=0.003, segs=2, verts=24, lowverts=10)           # neck
part('cube', (0, 0, 0.685), (0.032, 0.022, 0.024), black, bevel=0.006, segs=2)                              # valve head
part('cube', (0.025, 0, 0.72), (0.05, 0.011, 0.005), metal, rot=(0, math.radians(-10), 0), bevel=0.003, segs=2)   # lever
part('cube', (0.03, 0, 0.705), (0.045, 0.011, 0.004), metal, bevel=0.003, segs=2)                           # handle
part('cyl', (0.0, -0.026, 0.69), (0.014, 0.014, 0.005), metal, rot=(math.pi / 2, 0, 0), verts=24, lowverts=10)   # gauge rim
part('cyl', (0.0, -0.031, 0.69), (0.011, 0.011, 0.001), gauge, rot=(math.pi / 2, 0, 0), verts=24, lowverts=10)   # gauge face
part('cube', (0, 0, 0.705), (0.003, 0.016, 0.012), brass, bevel=0.001, segs=1)                             # safety pin
part('torus', (0.012, 0.0, 0.705), (0.008, 0.0015), brass, rot=(math.pi / 2, 0, 0), verts=24, lowverts=10)  # pin ring
tube([(0.03, 0, 0.67), (0.07, -0.02, 0.6), (0.095, -0.03, 0.46), (0.09, -0.04, 0.33)], 0.008, black)        # hose
part('cyl', (0.09, -0.04, 0.3), (0.012, 0.012, 0.03), black, bevel=0.003, segs=2, verts=24, lowverts=10)    # nozzle
part('cube', (0, 0.092, 0.42), (0.03, 0.006, 0.17), metal, bevel=0.004, segs=2)                             # wall plate
part('torus', (0, 0, 0.5), (0.0855, 0.006), metal, verts=48, lowverts=16)                                   # strap
part('cube', (0, 0.09, 0.56), (0.022, 0.012, 0.012), metal, bevel=0.004, segs=2)                            # hook

low = bake('extinguisher', size=512, cage=0.012)
result = export('extinguisher', [low])
preview('extinguisher', [low], dist=0.9, height=0.25, target=(0, 0, 0.45), angle=-30)
print(result)
