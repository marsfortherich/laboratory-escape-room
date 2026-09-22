// Bundles js/main.js (+ three.js) into one classic script so the game runs on GitHub Pages
// and straight from disk (file://), then stamps a content hash into index.html for cache busting.
import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

await build({
  entryPoints: ['js/main.js'], bundle: true, format: 'iife', minify: true,
  target: 'es2020', legalComments: 'eof', outfile: 'dist/game.js', logLevel: 'info',
});
const hash = createHash('sha256').update(readFileSync('dist/game.js')).update(readFileSync('css/style.css')).digest('hex').slice(0, 10);
const html = readFileSync('index.html', 'utf8')
  .replace(/(dist\/game\.js\?v=)[\w]+/, `$1${hash}`)
  .replace(/(css\/style\.css\?v=)[\w]+/, `$1${hash}`);
writeFileSync('index.html', html);
console.log(`index.html → v=${hash}`);
