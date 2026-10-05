# A forgotten snake plant (Sansevieria) in a terracotta pot. The pot is baked; the leaves are thin blades with their
# own simple materials (thin geometry does not bake well and is cheap anyway). Blender: Z up, origin on the floor.
reset('plant')
terracotta = ('pot_terracotta', (0.42, 0.18, 0.1), 0.9, 0.0)
soil = ('pot_soil', (0.06, 0.04, 0.025), 1.0, 0.0)
saucer = ('pot_saucer', (0.36, 0.16, 0.09), 0.85, 0.0)

part('cone', (0, 0, 0.17), (0.12, 0.16, 0.15), terracotta, bevel=0.01, segs=3, subd=1, verts=48, lowverts=16)   # pot
part('torus', (0, 0, 0.32), (0.158, 0.014), terracotta, verts=48, lowverts=16)                                 # rim
part('cyl', (0, 0, 0.3), (0.15, 0.15, 0.008), soil, verts=48, lowverts=16)                                     # soil
part('cyl', (0, 0, 0.012), (0.16, 0.16, 0.012), saucer, bevel=0.006, segs=2, verts=48, lowverts=16)            # saucer
low = bake('plant', size=512, cage=0.01)


from mathutils import Quaternion


def blade(height, width, lean, twist, turn, x, y, mat):
    """One sword-shaped leaf: a tapering, slightly cupped strip leaning outwards with a gentle twist."""
    bm = bmesh.new(); rows = 10; ring = []
    for i in range(rows + 1):
        t = i / rows
        w = width * (1 - t ** 2.2) * (0.6 + 0.4 * math.sin(min(1, t * 3) * math.pi / 2)) + 0.001
        z = 0.29 + height * t
        off = lean * t ** 1.6
        ang = twist * t
        left = Vector((-w, 0.004 * (1 - t), 0)); mid = Vector((0, -0.006 * (1 - t), 0)); right = Vector((w, 0.004 * (1 - t), 0))
        row = []
        for v in (left, mid, right):
            v.rotate(Quaternion((0, 0, 1), ang))
            row.append(bm.verts.new((x + v.x, y + v.y + off, z + v.z)))
        ring.append(row)
    for a, b in zip(ring, ring[1:]):
        bm.faces.new((a[0], a[1], b[1], b[0])); bm.faces.new((a[1], a[2], b[2], b[1]))
    me = bpy.data.meshes.new('blade'); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new('blade', me); bpy.context.scene.collection.objects.link(o)
    o.rotation_euler = (0, 0, turn)
    sol = o.modifiers.new('sol', 'SOLIDIFY'); sol.thickness = 0.004; sol.offset = 0
    o.data.materials.append(mat)
    bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active = o
    bpy.ops.object.modifier_apply(modifier='sol'); bpy.ops.object.shade_smooth()
    return o


def leaf_mat(name, base, edge):
    """Green with darker cross-bands and a yellow rim, as a small procedural texture baked into the material colour."""
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']; b.inputs['Base Color'].default_value = (*base, 1); b.inputs['Roughness'].default_value = 0.55
    return m


import random
from mathutils import Quaternion
random.seed(5)
green, tired, yellowed = leaf_mat('leaf_green', (0.05, 0.16, 0.05), None), leaf_mat('leaf_tired', (0.12, 0.17, 0.05), None), leaf_mat('leaf_yellow', (0.32, 0.25, 0.06), None)
leaves = []
for i in range(11):
    a = i / 11 * math.tau + random.uniform(-0.2, 0.2)
    r = random.uniform(0.01, 0.06)
    mat = yellowed if i in (3, 8) else tired if i % 4 == 0 else green
    h = random.uniform(0.38, 0.62) * (0.7 if mat is yellowed else 1)
    leaves.append(blade(h, random.uniform(0.022, 0.032), random.uniform(0.03, 0.11) * (2.2 if mat is yellowed else 1), random.uniform(-0.8, 0.8), a,
                        math.cos(a) * r, math.sin(a) * r, mat))
leafy = join(leaves, 'plant_leaves')
result = export('plant', [low, leafy])
preview('plant', [low, leafy], dist=1.3, height=0.35, target=(0, 0, 0.42), angle=-25)
print(result)
