// Post-processing: MSAA scene render → ambient occlusion (GTAO) → outline of the targeted object → bloom (only HDR
// emissives: LEDs, lamps, glowing strips) → tone mapping / sRGB (OutputPass) → film pass (grain, vignette, slight lens
// aberration) in display space. Quality 'low' bypasses everything; 'auto' runs AO at half resolution and skips it on
// small/touch GPUs.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';

const FilmShader = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, grain: { value: 0.045 }, vignette: { value: 0.4 }, aberration: { value: 0.0025 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float time, grain, vignette, aberration; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + time * 61.7) * 43758.5453); }
    void main() {
      vec2 d = vUv - 0.5; float r2 = dot(d, d);
      vec2 off = d * aberration * r2 * 4.0;
      vec3 col = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
      col *= 1.0 - vignette * smoothstep(0.05, 0.7, r2 * 2.0);
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      col += (hash(vUv * 1024.0) - 0.5) * grain * (1.2 - lum);   // film grain, a bit stronger in the shadows
      gl_FragColor = vec4(col, 1.0);
    }`,
};

export class PostFX {
  constructor(renderer, scene, camera) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    this.enabled = false; this.composer = null;
  }

  /** (Re)build the chain for a quality level: 'low' | 'auto' | 'high'. */
  configure(quality, { touch = false } = {}) {
    if (this.composer) {                                    // free every pass's render targets, not just the composer's
      for (const p of this.composer.passes) p.dispose?.();
      this.composer.dispose();
    }
    this.composer = null; this.outline = null;
    this.enabled = quality !== 'low';
    if (!this.enabled) return;
    const r = this.renderer, size = r.getSize(new THREE.Vector2()), pr = r.getPixelRatio();
    // anti-aliasing: the scene is rendered into a 4× multisampled HDR target (the canvas' own MSAA is bypassed here)
    const rt = new THREE.WebGLRenderTarget(size.x * pr, size.y * pr, { type: THREE.HalfFloatType, samples: touch ? 2 : 4 });
    const c = this.composer = new EffectComposer(r, rt);
    c.setPixelRatio(pr); c.setSize(size.x, size.y);
    c.addPass(new RenderPass(this.scene, this.camera));
    const withAO = quality === 'high' || (quality === 'auto' && !touch);
    if (withAO) {
      const ao = this.ao = new GTAOPass(this.scene, this.camera, size.x, size.y);
      if (quality !== 'high') {                              // balanced: AO at half resolution (it is soft anyway)
        const setSize = ao.setSize.bind(ao);
        ao.setSize = (w, h) => setSize(Math.max(1, Math.round(w / 2)), Math.max(1, Math.round(h / 2)));
        ao.setSize(size.x * pr, size.y * pr);
      }
      ao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.5, thickness: 1.2, scale: 1.1, samples: quality === 'high' ? 16 : 12 });
      ao.updatePdMaterial({ samples: 12, radius: 6 });
      ao.blendIntensity = 0.9;
      c.addPass(ao);
    } else this.ao = null;
    // the object under the crosshair gets a soft amber outline instead of a debug-looking box
    const ol = this.outline = new OutlinePass(new THREE.Vector2(size.x, size.y), this.scene, this.camera);
    Object.assign(ol, { edgeStrength: 2.2, edgeGlow: 0.4, edgeThickness: 1.2, pulsePeriod: 0 });
    ol.visibleEdgeColor.set(0xffd24a); ol.hiddenEdgeColor.set(0x5a4a1a);
    c.addPass(ol);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.55, 0.45, 1.0);
    c.addPass(this.bloom);
    c.addPass(new OutputPass());
    this.film = new ShaderPass(FilmShader);
    c.addPass(this.film);
  }

  setSize(w, h) { if (this.composer) { this.composer.setPixelRatio(this.renderer.getPixelRatio()); this.composer.setSize(w, h); } }

  /** Objects to outline (empty = none). Returns false on 'low' quality, where the caller shows its fallback box. */
  select(objs) { if (!this.outline) return false; this.outline.selectedObjects = objs; return true; }

  /** lite = true skips AO (used while a panel or the terminal covers most of the screen). */
  render(dt, lite = false) {
    if (!this.enabled) { this.renderer.render(this.scene, this.camera); return; }
    this.film.uniforms.time.value = (this.film.uniforms.time.value + dt) % 100;
    if (this.ao) this.ao.enabled = !lite;
    this.composer.render(dt);
  }
}
