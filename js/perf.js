// Rendering budget helpers.
//
// • A light pool: the scene has 14 point / spot lights, but every lit pixel pays for every light in the shader. The
//   originals stay as plain objects that the game animates (intensity, colour …); each frame the most important ones
//   near the camera are copied into a fixed pool of real lights. The pool size never changes, so shaders never
//   recompile, and a light in the other room (behind a wall) costs nothing.
// • Static merging: meshes that never move, aren't interactable and share a material are merged into one draw call.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export function poolLights(scene, { points = 4, spots = 4 } = {}) {
  const virt = { PointLight: [], SpotLight: [] };
  for (const l of [...scene.children]) {
    if ((l.isPointLight || l.isSpotLight) && !l.castShadow) { virt[l.type].push(l); scene.remove(l); }
  }
  const make = (type, n) => Array.from({ length: n }, () => {
    const l = type === 'PointLight' ? new THREE.PointLight(0xffffff, 0) : new THREE.SpotLight(0xffffff, 0);
    scene.add(l); if (l.isSpotLight) scene.add(l.target);
    l.userData.src = null; return l;
  });
  const pool = { PointLight: make('PointLight', points), SpotLight: make('SpotLight', spots) };
  const d2 = new THREE.Vector3();

  function update(cam) {
    for (const type of ['PointLight', 'SpotLight']) {
      const slots = pool[type], lights = virt[type];
      const held = new Set(slots.map((s) => s.userData.src));
      // importance: brightness over distance², with a bonus for lights already in a slot (no flicker between two)
      const ranked = lights.filter((l) => l.intensity > 0).map((l) => {
        const dist2 = d2.copy(l.position).sub(cam).lengthSq();
        return [l, (l.intensity / (1 + dist2)) * (held.has(l) ? 1.6 : 1)];
      }).sort((a, b) => b[1] - a[1]).slice(0, slots.length).map((e) => e[0]);
      // keep lights in the slot they already occupy, fill the rest
      const free = slots.filter((s) => !ranked.includes(s.userData.src));
      for (const l of ranked) if (!slots.some((s) => s.userData.src === l)) free.shift().userData.src = l;
      for (const s of free) s.userData.src = null;
      for (const s of slots) {
        const l = s.userData.src;
        if (!l) { s.intensity = 0; continue; }
        s.position.copy(l.position); s.color.copy(l.color); s.intensity = l.intensity; s.distance = l.distance; s.decay = l.decay;
        if (s.isSpotLight) { s.angle = l.angle; s.penumbra = l.penumbra; s.target.position.copy(l.target.position); }
      }
    }
  }
  return { update, virtual: virt };
}

/** Merge static meshes (direct children of the scene) that share a material. `keep` = objects that must stay separate. */
export function mergeStatic(scene, keep) {
  const groups = new Map();
  for (const o of scene.children) {
    if (!o.isMesh || keep.has(o) || o.userData.id || o.children.length || !o.visible || Array.isArray(o.material)) continue;
    const m = o.material;
    if (m.transparent || m.isShaderMaterial || o.raycast !== THREE.Mesh.prototype.raycast || !o.geometry.index) continue;
    const key = `${m.uuid}|${o.castShadow}|${o.receiveShadow}|${Object.keys(o.geometry.attributes).sort().join()}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(o);
  }
  let removed = 0;
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    const geos = list.map((o) => { o.updateMatrixWorld(); const g = o.geometry.clone(); g.applyMatrix4(o.matrixWorld); g.clearGroups(); return g; });
    const merged = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, list[0].material);
    mesh.castShadow = list[0].castShadow; mesh.receiveShadow = list[0].receiveShadow; mesh.name = 'merged';
    scene.add(mesh);
    for (const o of list) { scene.remove(o); o.geometry.dispose(); }
    removed += list.length - 1;
  }
  return removed;
}

/** Every Object3D reachable from `refs` (a few levels deep): these are animated or referenced, so they stay separate. */
export function referencedObjects(refs) {
  const keep = new Set();
  const walk = (v, depth) => {
    if (!v || depth > 3 || typeof v !== 'object') return;
    if (v.isObject3D) { v.traverse((o) => keep.add(o)); return; }
    if (v.isMaterial || v.isTexture || v.isColor || v.isVector3) return;
    for (const x of Array.isArray(v) ? v : Object.values(v)) walk(x, depth + 1);
  };
  walk(refs, 0);
  return keep;
}
