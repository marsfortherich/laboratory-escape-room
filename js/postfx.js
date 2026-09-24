// Post-processing: MSAA scene render → ambient occlusion (GTAO) → highlight of the targeted object → bloom (only HDR
// emissives: LEDs, lamps, glowing strips) → tone mapping / sRGB (OutputPass) → film pass (grain, vignette, slight lens
// aberration) in display space. Quality 'low' bypasses everything; 'auto' runs AO at half resolution and skips it on
// small/touch GPUs.
//
// Cost notes: the scene is drawn ONCE per frame. GTAO reads the depth of that render (normals reconstructed from depth)
// instead of drawing the scene again into its own G-buffer, and the highlight draws only the targeted object into a
// small mask instead of re-rendering the scene like three's OutlinePass does.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

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

/** A soft amber outline around the selected objects: they alone are drawn (via a spare layer) into a half-size mask. */
class HighlightPass extends Pass {
  constructor(scene, camera) {
    super();
    this.scene = scene; this.camera = camera; this.selected = []; this.enabled = false;
    this.mask = new THREE.WebGLRenderTarget(1, 1);
    this.maskMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.clear = new THREE.Color();
    this.quad = new FullScreenQuad(new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, tMask: { value: null }, texel: { value: new THREE.Vector2(1, 1) }, color: { value: new THREE.Color(0xffc94a) } },
      vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `
        uniform sampler2D tDiffuse, tMask; uniform vec2 texel; uniform vec3 color; varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tDiffuse, vUv);
          float m = texture2D(tMask, vUv).r, d = 0.0;
          for (int i = 0; i < 8; i++) {
            vec2 o = vec2(cos(float(i) * 0.7853982), sin(float(i) * 0.7853982)) * texel * 1.5;
            d = max(d, texture2D(tMask, vUv + o).r); d = max(d, texture2D(tMask, vUv + o * 2.2).r * 0.55);
          }
          gl_FragColor = vec4(c.rgb + color * (clamp(d - m, 0.0, 1.0) * 1.3 + m * 0.04), c.a);
        }`,
    }));
  }
  setSize(w, h) {
    const mw = Math.max(1, Math.round(w / 2)), mh = Math.max(1, Math.round(h / 2));
    this.mask.setSize(mw, mh); this.quad.material.uniforms.texel.value.set(1 / mw, 1 / mh);
  }
  render(renderer, writeBuffer, readBuffer) {
    const cam = this.camera, sc = this.scene, layers = cam.layers.mask, bg = sc.background, ov = sc.overrideMaterial, alpha = renderer.getClearAlpha();
    renderer.getClearColor(this.clear);
    for (const o of this.selected) o.traverse((c) => c.layers.enable(31));
    cam.layers.set(31); sc.background = null; sc.overrideMaterial = this.maskMat;
    renderer.setRenderTarget(this.mask); renderer.setClearColor(0x000000, 1); renderer.clear(); renderer.render(sc, cam);
    for (const o of this.selected) o.traverse((c) => c.layers.disable(31));
    cam.layers.mask = layers; sc.background = bg; sc.overrideMaterial = ov; renderer.setClearColor(this.clear, alpha);
    const u = this.quad.material.uniforms; u.tDiffuse.value = readBuffer.texture; u.tMask.value = this.mask.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer); this.quad.render(renderer);
  }
  dispose() { this.mask.dispose(); this.maskMat.dispose(); this.quad.material.dispose(); this.quad.dispose(); }
}

export class PostFX {
  constructor(renderer, scene, camera) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    this.enabled = false; this.composer = null;
    this.aoOff = false;                                     // set by the frame-time governor when even low resolution is too slow
  }

  /** (Re)build the chain for a quality level: 'low' | 'auto' | 'high'. */
  configure(quality, { touch = false } = {}) {
    if (this.composer) {                                    // free every pass's render targets, not just the composer's
      for (const p of this.composer.passes) p.dispose?.();
      this.composer.renderTarget1.depthTexture?.dispose(); this.composer.renderTarget2.depthTexture?.dispose();
      this.composer.dispose();
    }
    this.composer = null; this.highlight = null; this.aoOff = false;
    this.enabled = quality !== 'low';
    if (!this.enabled) return;
    const r = this.renderer, size = r.getSize(new THREE.Vector2()), pr = r.getPixelRatio();
    // anti-aliasing: the scene is rendered into a multisampled HDR target (the canvas' own MSAA is bypassed here);
    // its depth is resolved into a texture that the AO pass reads
    const samples = touch ? 2 : quality === 'high' || pr <= 1.2 ? 4 : 2;
    const rt = new THREE.WebGLRenderTarget(size.x * pr, size.y * pr, { type: THREE.HalfFloatType, samples, depthTexture: new THREE.DepthTexture(size.x * pr, size.y * pr) });
    const c = this.composer = new EffectComposer(r, rt);
    c.setPixelRatio(pr); c.setSize(size.x, size.y);
    c.addPass(new RenderPass(this.scene, this.camera));
    const withAO = quality === 'high' || (quality === 'auto' && !touch);
    if (withAO) {
      const ao = this.ao = new GTAOPass(this.scene, this.camera, size.x, size.y);
      ao.setGBuffer(rt.depthTexture);                        // no second scene render: normals come from the depth
      const aoRender = ao.render.bind(ao);
      ao.render = (renderer, w, rb, dt, mask) => {           // the composer swaps buffers: always read this frame's depth
        if (rb.depthTexture && ao.depthTexture !== rb.depthTexture) {
          ao.depthTexture = rb.depthTexture;
          ao.gtaoMaterial.uniforms.tDepth.value = ao.pdMaterial.uniforms.tDepth.value = rb.depthTexture;
        }
        aoRender(renderer, w, rb, dt, mask);
      };
      if (quality !== 'high') {                              // balanced: AO at half resolution (it is soft anyway)
        const setSize = ao.setSize.bind(ao);
        ao.setSize = (w, h) => setSize(Math.max(1, Math.round(w / 2)), Math.max(1, Math.round(h / 2)));
        ao.setSize(size.x * pr, size.y * pr);
      }
      ao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.5, thickness: 1.2, scale: 1.1, samples: quality === 'high' ? 16 : 10 });
      ao.updatePdMaterial({ samples: quality === 'high' ? 12 : 8, radius: 6 });
      ao.blendIntensity = 0.9;
      c.addPass(ao);
    } else this.ao = null;
    this.highlight = new HighlightPass(this.scene, this.camera);
    c.addPass(this.highlight);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.55, 0.45, 1.0);
    c.addPass(this.bloom);
    c.addPass(new OutputPass());
    this.film = new ShaderPass(FilmShader);
    c.addPass(this.film);
  }

  setSize(w, h) { if (this.composer) { this.composer.setPixelRatio(this.renderer.getPixelRatio()); this.composer.setSize(w, h); } }

  /** Objects to highlight (empty = none). Returns false on 'low' quality, where the caller shows its fallback box. */
  select(objs) {
    if (!this.highlight) return false;
    this.highlight.selected = objs; this.highlight.enabled = objs.length > 0;
    return true;
  }

  /** lite = true skips AO (used while a panel or the terminal covers most of the screen). */
  render(dt, lite = false) {
    if (!this.enabled) { this.renderer.render(this.scene, this.camera); return; }
    this.film.uniforms.time.value = (this.film.uniforms.time.value + dt) % 100;
    if (this.ao) this.ao.enabled = !lite && !this.aoOff;
    this.composer.render(dt);
  }
}
