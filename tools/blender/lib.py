# Shared Blender-side helpers for the game's props (run inside Blender via tools/blender_rpc.py).
# Every prop is modelled twice from the same parts: a HIGH version (bevels + subdivision, smooth) and a LOW version
# (chamfered, few segments). Colour, normals and ambient occlusion of the high version are baked onto the low one,
# AO is multiplied into the colour, and only the low version is exported as GLB.
import bpy, bmesh, math, os
import numpy as np
from mathutils import Vector

OUT = r'C:\Users\joeyd\ClaudeProjects\Escape Room\assets'
os.makedirs(os.path.join(OUT, 'tex'), exist_ok=True)
HIGH, LOW = [], []


def reset(name):
    scn = bpy.data.scenes.get('asset_bake') or bpy.data.scenes.new('asset_bake')
    bpy.context.window.scene = scn
    for o in list(scn.objects):
        bpy.data.objects.remove(o, do_unlink=True)
    for m in list(bpy.data.materials):
        if m.users == 0: bpy.data.materials.remove(m)
    for me in list(bpy.data.meshes):
        if me.users == 0: bpy.data.meshes.remove(me)
    for im in list(bpy.data.images):
        if im.users == 0 or im.name.startswith(name + '_'): bpy.data.images.remove(im)
    scn.render.engine = 'CYCLES'
    scn.cycles.device = 'CPU'
    scn.cycles.samples = 32
    HIGH.clear(); LOW.clear()
    return scn


def material(name, color, rough=0.6, metal=0.0, low=False):
    """Principled material; the low copy is a separate datablock (bake targets must not be shared with the high mesh)."""
    key = name + ('_low' if low else '')
    m = bpy.data.materials.get(key) or bpy.data.materials.new(key)
    m.use_nodes = True
    b = m.node_tree.nodes.get('Principled BSDF')
    b.inputs['Base Color'].default_value = (*color, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    m['rough'], m['metal'] = rough, metal
    return m


def _finish(o, mat, bevel, segs, subd, low):
    bpy.context.view_layer.objects.active = o
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    o.data.materials.append(material(*mat, low=low))
    if bevel > 0:
        m = o.modifiers.new('bev', 'BEVEL'); m.width = bevel; m.segments = 1 if low else segs
        m.limit_method = 'ANGLE'; m.angle_limit = math.radians(40); m.harden_normals = low
    if subd and not low:
        s = o.modifiers.new('sub', 'SUBSURF'); s.levels = subd; s.render_levels = subd
    for mod in list(o.modifiers):
        bpy.ops.object.modifier_apply(modifier=mod.name)
    if low: bpy.ops.object.shade_smooth_by_angle(angle=math.radians(35))
    else: bpy.ops.object.shade_smooth()
    (LOW if low else HIGH).append(o)
    return o


def part(prim, loc, size, mat, rot=(0, 0, 0), bevel=0.0, segs=3, subd=0, verts=32, lowverts=12, only=None):
    """prim: 'cube' (size = half extents), 'cyl' (size = (r, r, half height)), 'cone' (size = (r_bottom, r_top, half height)),
    'sphere' (size = radii), 'torus' (size = (major, minor)). Creates the high and the low version (unless only='high'/'low')."""
    made = []
    for low in (False, True):
        if only and only != ('low' if low else 'high'): continue
        n = lowverts if low else verts
        if prim == 'cube': bpy.ops.mesh.primitive_cube_add(size=2, location=loc, rotation=rot, scale=size)
        elif prim == 'cyl': bpy.ops.mesh.primitive_cylinder_add(vertices=n, radius=1, depth=2, location=loc, rotation=rot, scale=size)
        elif prim == 'cone': bpy.ops.mesh.primitive_cone_add(vertices=n, radius1=size[0], radius2=size[1], depth=size[2] * 2, location=loc, rotation=rot)
        elif prim == 'sphere': bpy.ops.mesh.primitive_uv_sphere_add(segments=n, ring_count=max(6, n // 2), radius=1, location=loc, rotation=rot, scale=size)
        elif prim == 'torus': bpy.ops.mesh.primitive_torus_add(major_segments=n, minor_segments=max(6, n // 3), major_radius=size[0], minor_radius=size[1], location=loc, rotation=rot)
        made.append(_finish(bpy.context.active_object, mat, bevel, segs, subd, low))
    return made


def tube(points, radius, mat, res_high=24, res_low=6, only=None):
    """A hose/cable along a poly-bezier through `points`."""
    for low in (False, True):
        if only and only != ('low' if low else 'high'): continue
        cu = bpy.data.curves.new('tube', 'CURVE'); cu.dimensions = '3D'
        sp = cu.splines.new('BEZIER'); sp.bezier_points.add(len(points) - 1)
        for bp, p in zip(sp.bezier_points, points):
            bp.co = p; bp.handle_left_type = bp.handle_right_type = 'AUTO'
        cu.bevel_depth = radius; cu.bevel_resolution = 1 if low else 4; cu.resolution_u = res_low if low else res_high; cu.use_fill_caps = True
        o = bpy.data.objects.new('tube', cu); bpy.context.scene.collection.objects.link(o)
        bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.context.view_layer.objects.active = o
        bpy.ops.object.convert(target='MESH')
        _finish(bpy.context.active_object, mat, 0, 0, 0, low)


def join(objs, name):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs: o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.object.join()
    o = bpy.context.active_object; o.name = name
    return o


def bake(name, size=1024, cage=0.02, ao_strength=0.75):
    """Bake HIGH onto LOW (joined), write <name>_col.jpg (colour × AO) and <name>_nrm.png, wire them into the low materials."""
    scn = bpy.context.scene
    high = join(HIGH[:], name + '_high')
    low = join(LOW[:], name)
    bpy.ops.object.select_all(action='DESELECT'); low.select_set(True); bpy.context.view_layer.objects.active = low
    bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.uv.smart_project(angle_limit=math.radians(55), island_margin=0.012, area_weight=0.6)
    bpy.ops.object.mode_set(mode='OBJECT')
    imgs = {}
    for kind in ('col', 'nrm', 'ao'):
        im = bpy.data.images.new(f'{name}_{kind}', size, size, alpha=False)
        if kind != 'col': im.colorspace_settings.name = 'Non-Color'
        imgs[kind] = im

    def target(im):
        for slot in low.material_slots:
            nt = slot.material.node_tree
            n = nt.nodes.get('BAKE') or nt.nodes.new('ShaderNodeTexImage'); n.name = 'BAKE'; n.image = im
            nt.nodes.active = n

    scn.render.bake.use_selected_to_active = True
    scn.render.bake.cage_extrusion = cage
    scn.render.bake.max_ray_distance = cage * 4
    scn.render.bake.margin = 6
    for kind, btype, kw in (('col', 'DIFFUSE', {'pass_filter': {'COLOR'}}), ('nrm', 'NORMAL', {}), ('ao', 'AO', {})):
        target(imgs[kind])
        bpy.ops.object.select_all(action='DESELECT'); high.select_set(True); low.select_set(True); bpy.context.view_layer.objects.active = low
        bpy.ops.object.bake(type=btype, use_selected_to_active=True, cage_extrusion=cage, max_ray_distance=cage * 4, margin=6, **kw)

    # colour × ambient occlusion (soft), then save
    col = np.array(imgs['col'].pixels[:]).reshape(-1, 4); ao = np.array(imgs['ao'].pixels[:]).reshape(-1, 4)
    k = (1 - ao_strength) + ao_strength * ao[:, :1]
    col[:, :3] *= k
    imgs['col'].pixels = col.ravel()
    paths = {}
    for kind, fmt, ext in (('col', 'JPEG', 'jpg'), ('nrm', 'JPEG', 'jpg')):
        p = os.path.join(OUT, 'tex', f'{name}_{kind}.{ext}')
        im = imgs[kind]; im.filepath_raw = p; im.file_format = fmt
        scn.render.image_settings.quality = 90
        im.save()
        paths[kind] = p

    # final low materials: baked colour + normal map, roughness / metalness kept per part
    for slot in low.material_slots:
        m = slot.material; nt = m.node_tree
        for n in list(nt.nodes):
            if n.name == 'BAKE': nt.nodes.remove(n)
        b = nt.nodes['Principled BSDF']
        c = nt.nodes.new('ShaderNodeTexImage'); c.image = bpy.data.images.load(paths['col'], check_existing=True)
        nimg = bpy.data.images.load(paths['nrm'], check_existing=True); nimg.colorspace_settings.name = 'Non-Color'
        n = nt.nodes.new('ShaderNodeTexImage'); n.image = nimg
        nm = nt.nodes.new('ShaderNodeNormalMap')
        nt.links.new(c.outputs['Color'], b.inputs['Base Color'])
        nt.links.new(n.outputs['Color'], nm.inputs['Color']); nt.links.new(nm.outputs['Normal'], b.inputs['Normal'])
    high.select_set(False); high.hide_render = True; high.hide_set(True)
    return low


def export(name, objs, origin=(0, 0, 0)):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs: o.hide_set(False); o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    path = os.path.join(OUT, name + '.glb')
    bpy.ops.export_scene.gltf(filepath=path, export_format='GLB', use_selection=True, export_apply=True, export_yup=True,
                              export_image_format='AUTO', export_texcoords=True, export_normals=True, export_materials='EXPORT')
    tris = sum(len(o.data.polygons) for o in objs)
    return f'{name}: {os.path.getsize(path) // 1024} KB, {tris} faces'


def preview(name, objs, dist=1.6, height=0.9, target=(0, 0, 0.45), angle=-35):
    """Quick EEVEE turntable-ish still of the low-poly result: assets/preview/<name>.png"""
    scn = bpy.context.scene
    cam = bpy.data.objects.get('pv_cam') or bpy.data.objects.new('pv_cam', bpy.data.cameras.new('pv_cam'))
    if cam.name not in scn.objects: scn.collection.objects.link(cam)
    a = math.radians(angle)
    cam.location = (target[0] + math.sin(a) * dist, target[1] - math.cos(a) * dist, target[2] + height)
    d = Vector(target) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
    scn.camera = cam
    for nm, loc, e in (('pv_key', (1.5, -1.5, 2.2), 120), ('pv_fill', (-2, -0.5, 1.2), 30), ('pv_rim', (0, 2, 2), 80)):
        L = bpy.data.objects.get(nm) or bpy.data.objects.new(nm, bpy.data.lights.new(nm, 'AREA'))
        if L.name not in scn.objects: scn.collection.objects.link(L)
        L.location = loc; L.data.energy = e; L.data.size = 1.5
        L.rotation_euler = (Vector(target) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
    scn.world = scn.world or bpy.data.worlds.new('pv_world'); scn.world.color = (0.05, 0.05, 0.06)
    scn.render.engine = 'BLENDER_EEVEE'
    scn.render.resolution_x, scn.render.resolution_y = 640, 640
    scn.render.film_transparent = False
    os.makedirs(os.path.join(OUT, 'preview'), exist_ok=True)
    scn.render.filepath = os.path.join(OUT, 'preview', name + '.png')
    scn.render.image_settings.file_format = 'PNG'
    bpy.ops.render.render(write_still=True)
    scn.render.engine = 'CYCLES'
    for nm in ('pv_cam', 'pv_key', 'pv_fill', 'pv_rim'):
        o = bpy.data.objects.get(nm)
        if o: bpy.data.objects.remove(o, do_unlink=True)
