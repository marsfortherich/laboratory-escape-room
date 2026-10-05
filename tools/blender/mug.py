# Coffee mug with cold coffee. Blender: Z up, origin on the table, handle on +X.
reset('mug')
ceramic = ('mug_ceramic', (0.78, 0.76, 0.7), 0.22, 0.0)
stripe = ('mug_stripe', (0.08, 0.2, 0.45), 0.25, 0.0)
coffee = ('mug_coffee', (0.03, 0.015, 0.008), 0.08, 0.0)

# body as a lathe: outer wall, rim, inner wall, bottom (one closed surface)
prof = [(0.0, 0.0), (0.036, 0.0), (0.04, 0.004), (0.041, 0.05), (0.041, 0.092), (0.039, 0.095), (0.036, 0.092), (0.036, 0.012), (0.0, 0.012)]
for low in (False, True):
    bm = bmesh.new(); n = 22 if low else 48; rings = []
    for k in range(n):
        a = k / n * math.tau; c, s = math.cos(a), math.sin(a)
        rings.append([bm.verts.new((r * c, r * s, z)) for r, z in prof])
    for k in range(n):
        A, B = rings[k], rings[(k + 1) % n]
        for i in range(len(prof) - 1):
            if prof[i][0] == 0 and prof[i + 1][0] == 0: continue
            bm.faces.new((A[i], B[i], B[i + 1], A[i + 1]))
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-6)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.new('mug'); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new('mug', me); bpy.context.scene.collection.objects.link(o)
    bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active = o
    if not low:
        s_ = o.modifiers.new('sub', 'SUBSURF'); s_.levels = 1
    _finish(o, ceramic, 0, 0, 0, low)
part('cyl', (0, 0, 0.06), (0.0412, 0.0412, 0.006), stripe, verts=48, lowverts=22)                     # blue band
part('torus', (0.048, 0, 0.05), (0.022, 0.0055), ceramic, rot=(math.pi / 2, 0, 0), verts=32, lowverts=10)   # handle
part('cyl', (0, 0, 0.074), (0.0362, 0.0362, 0.0008), coffee, verts=48, lowverts=22)                   # cold coffee

low = bake('mug', size=256, cage=0.004)
result = export('mug', [low])
preview('mug', [low], dist=0.3, height=0.12, target=(0, 0, 0.05), angle=-35)
print(result)
