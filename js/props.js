// Baked props (modelled in Blender, high-poly baked onto low-poly: colour × AO + normal map; see tools/blender/).
// Each prop has a placeholder group in the world that first holds a quick primitive version; once the embedded GLB is
// parsed, the placeholder's children are swapped for the model.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLB } from './assets-data.js';

const b64ToBuffer = (s) => { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; };

/** slots: { name: Group }. onLoaded(name, group) runs after each swap (e.g. to refresh a shadow map). */
export function loadProps(slots, onLoaded = () => {}) {
  const loader = new GLTFLoader();
  for (const [name, group] of Object.entries(slots)) {
    if (!GLB[name] || !group) continue;
    loader.parse(b64ToBuffer(GLB[name]), '', (gltf) => {
      const model = gltf.scene;
      model.traverse((o) => {
        if (!o.isMesh) return;
        o.castShadow = true;
        o.receiveShadow = group.userData.receiveShadow ?? false;
        for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
          for (const t of [m.map, m.normalMap]) if (t) t.anisotropy = 4;
          m.envMapIntensity = 1;
        }
        // keep the placeholder's interaction tags (id / label / root) on the new meshes
        if (group.userData.id) Object.assign(o.userData, { id: group.userData.id, label: group.userData.label, root: group.userData.root });
      });
      for (const c of [...group.children]) { group.remove(c); c.geometry?.dispose(); }
      group.add(model);
      onLoaded(name, group);
    }, (err) => console.warn('prop', name, err));
  }
}
