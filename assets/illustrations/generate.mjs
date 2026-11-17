#!/usr/bin/env node
// Documentation illustrations (rule D22, owner 2026-11-14).
//
// One script draws every picture the examples show: five sets of eight
// (places, products, people without faces, documents and screens, covers)
// and one colour study for the filter, blur and glass examples. The pictures
// are flat SVG in the static palette of the bound SIMAI Framework pair
// (--sf-<hue>-<tone>), read from the distribution's core.css and baked into
// each file, so one file serves both themes and works wherever an image URL
// does: <img src>, sf-gallery, sf-avatar image-url, sf-input-image, CSS
// background-image.
//
// Names are <set>-<nn>-<shape>.svg (place-03-16x9.svg). A picture whose order,
// shape or crop is the point of an example (gallery, slider, image field) has
// a second file, <set>-<nn>-<shape>-label.svg, with its number and shape drawn
// in a corner. manifest.json lists every file with its Russian alt text;
// covers are decorative and have an empty alt.
//
// Docara publishes an example's own folder only, so an example keeps the
// pictures it shows in its assets/ folder. `sync` copies them there from this
// folder; `sync --check` fails when a copy differs or is no longer used, or
// when an example carries a raster picture (D22 (1): no photos).
//
// Usage:
//   node assets/illustrations/generate.mjs [--ui <ui checkout or archive>]
//     regenerates the pictures and manifest.json (no network); the palette
//     comes from <ui>/distr/core/css/core.css, <ui> defaults to
//     DOCARA_SIMAI_UI_ROOT or SIMAI_UI_ROOT. Run it after each repin.
//   node assets/illustrations/generate.mjs sync [--check]

import {createHash} from 'node:crypto';
import {existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const args = process.argv.slice(2);
const command = args[0] === 'sync' ? 'sync' : 'generate';

const NAME = /^(place|product|person|document|cover|study)-(\d\d)-(\d+)x(\d+)(-label)?\.svg$/;
const REFERENCE = /assets\/((?:place|product|person|document|cover|study)-\d\d-\d+x\d+(?:-label)?\.svg)/g;


// ---------------------------------------------------------------- palette

function palette() {
  const at = args.indexOf('--ui');
  const ui = at >= 0 ? args[at + 1] : (process.env.DOCARA_SIMAI_UI_ROOT || process.env.SIMAI_UI_ROOT);
  if (!ui) fail('Point --ui (or DOCARA_SIMAI_UI_ROOT) at the pinned ui checkout or archive.');
  const file = join(resolve(ui), 'distr/core/css/core.css');
  if (!existsSync(file)) fail(`No core.css at ${file}.`);
  const css = readFileSync(file, 'utf8');
  const tones = {};
  for (const [, hue, tone, value] of css.matchAll(/--sf-([a-z]+)-(\d+)\s*:\s*(#[0-9a-fA-F]{6})\b/g)) {
    const key = `${hue}-${tone}`;
    if (tones[key] && tones[key] !== value.toLowerCase()) fail(`--sf-${key} has two values in core.css.`);
    tones[key] = value.toLowerCase();
  }
  const pin = readFileSync(join(root, 'scripts/materialize-framework-runtime.php'), 'utf8')
    .match(/UI_RUNTIME_REVISION = '([0-9a-f]{40})'/);
  return {
    tones,
    source: {
      file: 'distr/core/css/core.css',
      sha256: createHash('sha256').update(css).digest('hex'),
      pair: pin ? `ui-${pin[1].slice(0, 12)}` : null,
    },
  };
}

// ---------------------------------------------------------------- drawing

// The 15 chromatic static hues (gray is paper) and the 16 tones of C43.
const HUES = ['sky', 'teal', 'green', 'amber', 'orange', 'pink', 'violet', 'indigo', 'cyan', 'lime', 'purple', 'blue', 'red', 'yellow', 'brown'];
const TONES = [5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 85, 90, 95, 98];
const SKIN = [['orange', 85], ['orange', 70], ['brown', 60], ['brown', 40], ['amber', 80], ['brown', 30]];
const HAIR = [['brown', 20], ['gray', 30], ['amber', 40], ['gray', 15], ['orange', 30], ['gray', 70]];

let TONE = {};
const T = (hue, tone) => {
  if (!TONES.includes(tone)) throw new Error(`tone ${tone} is not one of the 16 palette tones`);
  const value = TONE[`${hue}-${tone}`];
  if (!value) throw new Error(`--sf-${hue}-${tone} is missing from the palette`);
  return value;
};
const lower = (tone) => TONES[Math.max(0, TONES.indexOf(tone) - 1)];
const shift = (hue, by) => HUES[(HUES.indexOf(hue) + by) % HUES.length];
const n = (value) => String(Math.round(value * 10) / 10);
const rect = (x, y, w, h, fill, extra = '') => `<rect${x ? ` x="${n(x)}"` : ''}${y ? ` y="${n(y)}"` : ''} width="${n(w)}" height="${n(h)}" fill="${fill}"${extra}/>`;
const circle = (cx, cy, r, fill) => `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}" fill="${fill}"/>`;
const path = (d, fill, extra = '') => `<path d="${d}" fill="${fill}"${extra}/>`;
const P = (strings, ...values) => strings.reduce((out, s, i) => out + s + (i < values.length ? n(values[i]) : ''), '');

const DRAW = {
  // Sky in two tones of one hue, a sun, two hill lines; city, lake or forest by kind.
  place(hue, w, h, v) {
    const kind = v % 4;
    const sunX = v < 4 ? 0.7 : 0.28;
    let s = `<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T(hue, 85)}"/><stop offset="1" stop-color="${T(hue, 95)}"/></linearGradient></defs>`;
    s += rect(0, 0, w, h, 'url(#s)');
    s += circle(w * sunX, h * 0.3, Math.min(w, h) * 0.09, T('yellow', 95));
    s += path(P`M0 ${h * 0.62}Q${w * 0.25} ${h * 0.42} ${w * 0.5} ${h * 0.6}T${w} ${h * 0.55}V${h}H0Z`, T(hue, 60));
    if (kind === 1) {
      for (let i = 0; i < 7; i++) {
        const bh = h * (0.18 + ((i * 37 + v) % 5) * 0.05);
        s += rect(w * (0.08 + i * 0.12), h * 0.72 - bh, w * 0.09, bh, T(hue, 40));
        s += rect(w * (0.105 + i * 0.12), h * 0.72 - bh + h * 0.04, w * 0.04, h * 0.03, T('yellow', 90));
      }
    }
    if (kind === 2) s += rect(0, h * 0.74, w, h * 0.1, T(hue, 80));
    if (kind === 3) {
      for (let i = 0; i < 9; i++) {
        const x = w * (0.06 + i * 0.11);
        const th = h * (0.16 + ((i * 3 + v) % 4) * 0.035);
        const base = h * 0.76;
        s += path(P`M${x - w * 0.035} ${base}L${x} ${base - th}L${x + w * 0.035} ${base}Z`, T(shift(hue, 2), 35));
      }
    }
    s += path(P`M0 ${h * 0.8}Q${w * 0.35} ${h * 0.66} ${w * 0.7} ${h * 0.82}T${w} ${h * 0.78}V${h}H0Z`, T(hue, 30));
    return s;
  },

  // One object on a table, in an accent hue five steps away from the background.
  product(hue, w, h, v) {
    const ac = shift(hue, 5);
    const cx = w / 2;
    const fy = h * 0.72;
    const u = Math.min(w, h);
    let s = rect(0, 0, w, h, T(hue, 90)) + rect(0, fy, w, h - fy, T(hue, 80));
    s += `<ellipse cx="${n(cx)}" cy="${n(fy)}" rx="${n(u * 0.2)}" ry="${n(u * 0.03)}" fill="${T(hue, 70)}"/>`;
    switch (v % 8) {
      case 0: // vase
        s += path(P`M${cx - u * 0.06} ${fy - u * 0.48}h${u * 0.12}q0 ${u * 0.08} ${u * 0.08} ${u * 0.16}q${u * 0.1} ${u * 0.1} ${u * 0.06} ${u * 0.24}q${-u * 0.03} ${u * 0.08} ${-u * 0.14} ${u * 0.08}h${-u * 0.12}q${-u * 0.11} 0 ${-u * 0.14} ${-u * 0.08}q${-u * 0.04} ${-u * 0.14} ${u * 0.06} ${-u * 0.24}q${u * 0.08} ${-u * 0.08} ${u * 0.08} ${-u * 0.16}Z`, T(ac, 60));
        s += path(P`M${cx - u * 0.1} ${fy - u * 0.3}q${-u * 0.04} ${u * 0.1} 0 ${u * 0.2}`, 'none', ` stroke="${T(ac, 80)}" stroke-width="${n(u * 0.02)}" stroke-linecap="round"`);
        break;
      case 1: // cup
        s += rect(cx - u * 0.14, fy - u * 0.24, u * 0.28, u * 0.24, T(ac, 50), ` rx="${n(u * 0.03)}"`);
        s += path(P`M${cx + u * 0.14} ${fy - u * 0.19}a${u * 0.07} ${u * 0.07} 0 0 1 0 ${u * 0.14}`, 'none', ` stroke="${T(ac, 50)}" stroke-width="${n(u * 0.03)}"`);
        s += rect(cx - u * 0.14, fy - u * 0.24, u * 0.28, u * 0.05, T(ac, 70));
        break;
      case 2: // bottle
        s += path(P`M${cx - u * 0.03} ${fy - u * 0.56}h${u * 0.06}v${u * 0.14}q${u * 0.07} ${u * 0.04} ${u * 0.07} ${u * 0.12}v${u * 0.3}h${-u * 0.2}v${-u * 0.3}q0 ${-u * 0.08} ${u * 0.07} ${-u * 0.12}Z`, T(ac, 40));
        s += rect(cx - u * 0.1, fy - u * 0.24, u * 0.2, u * 0.1, T(ac, 85));
        break;
      case 3: // lamp
        s += rect(cx - u * 0.012, fy - u * 0.4, u * 0.024, u * 0.38, T(ac, 30));
        s += path(P`M${cx - u * 0.16} ${fy - u * 0.36}L${cx - u * 0.08} ${fy - u * 0.56}H${cx + u * 0.08}L${cx + u * 0.16} ${fy - u * 0.36}Z`, T(ac, 60));
        s += `<ellipse cx="${n(cx)}" cy="${n(fy - u * 0.01)}" rx="${n(u * 0.09)}" ry="${n(u * 0.025)}" fill="${T(ac, 30)}"/>`;
        break;
      case 4: // plant in a pot
        for (const [dx, dy, r] of [[-0.09, -0.36, 0.08], [0.08, -0.4, 0.09], [0, -0.5, 0.08], [-0.05, -0.27, 0.06], [0.07, -0.28, 0.06]]) {
          s += `<ellipse cx="${n(cx + u * dx)}" cy="${n(fy + u * dy)}" rx="${n(u * r)}" ry="${n(u * r * 1.4)}" fill="${T('green', dx < 0 ? 40 : 50)}"/>`;
        }
        s += path(P`M${cx - u * 0.12} ${fy - u * 0.2}H${cx + u * 0.12}L${cx + u * 0.09} ${fy}H${cx - u * 0.09}Z`, T(ac, 50));
        break;
      case 5: // stack of books
        [[0.3, 0.07, 40], [0.26, 0.06, 60], [0.32, 0.07, 30], [0.24, 0.06, 70]].reduce((top, [bw, bh, tone], i) => {
          const y = top - u * bh;
          s += rect(cx - u * bw / 2 + (i % 2 ? u * 0.02 : 0), y, u * bw, u * bh, T(i % 2 ? hue : ac, tone));
          return y;
        }, fy);
        break;
      case 6: // clock
        s += circle(cx, fy - u * 0.24, u * 0.2, T(ac, 40));
        s += circle(cx, fy - u * 0.24, u * 0.16, T('gray', 98));
        s += path(P`M${cx} ${fy - u * 0.24}V${fy - u * 0.36}M${cx} ${fy - u * 0.24}H${cx + u * 0.08}`, 'none', ` stroke="${T(ac, 20)}" stroke-width="${n(u * 0.02)}" stroke-linecap="round"`);
        break;
      default: // bowl of fruit
        for (const [dx, dy, r, h2, tone] of [[-0.08, -0.12, 0.07, 3, 50], [0.07, -0.13, 0.075, 12, 60], [0, -0.2, 0.07, 13, 70]]) {
          s += circle(cx + u * dx, fy + u * dy, u * r, T(HUES[h2], tone));
        }
        s += path(P`M${cx - u * 0.2} ${fy - u * 0.1}H${cx + u * 0.2}Q${cx + u * 0.18} ${fy} ${cx} ${fy}Q${cx - u * 0.18} ${fy} ${cx - u * 0.2} ${fy - u * 0.1}Z`, T(ac, 40));
    }
    return s;
  },

  // A portrait without facial features: shoulders, neck, head, hair.
  person(hue, w, h, v) {
    const sk = SKIN[v % SKIN.length];
    const hr = HAIR[(v + Math.floor(v / 6) * 3) % HAIR.length];
    const cx = w / 2;
    const u = Math.min(w, h);
    const hy = h * 0.4;
    let s = rect(0, 0, w, h, T(hue, 85));
    s += path(P`M${cx - u * 0.42} ${h}Q${cx - u * 0.4} ${hy + u * 0.3} ${cx} ${hy + u * 0.28}Q${cx + u * 0.4} ${hy + u * 0.3} ${cx + u * 0.42} ${h}Z`, T(hue, 40));
    s += rect(cx - u * 0.06, hy + u * 0.1, u * 0.12, u * 0.14, T(sk[0], lower(sk[1])));
    s += circle(cx, hy, u * 0.16, T(sk[0], sk[1]));
    s += v % 2
      ? path(P`M${cx - u * 0.17} ${hy + u * 0.02}Q${cx - u * 0.18} ${hy - u * 0.2} ${cx} ${hy - u * 0.2}Q${cx + u * 0.18} ${hy - u * 0.2} ${cx + u * 0.17} ${hy + u * 0.02}Q${cx + u * 0.08} ${hy - u * 0.1} ${cx - u * 0.17} ${hy + u * 0.02}Z`, T(hr[0], hr[1]))
      : path(P`M${cx - u * 0.19} ${hy + u * 0.22}V${hy}Q${cx - u * 0.19} ${hy - u * 0.21} ${cx} ${hy - u * 0.21}Q${cx + u * 0.19} ${hy - u * 0.21} ${cx + u * 0.19} ${hy}V${hy + u * 0.22}Q${cx + u * 0.14} ${hy - u * 0.08} ${cx} ${hy - u * 0.1}Q${cx - u * 0.14} ${hy - u * 0.08} ${cx - u * 0.19} ${hy + u * 0.22}Z`, T(hr[0], hr[1]));
    return s;
  },

  // Pages (01-04) and application windows (05-08).
  document(hue, w, h, v) {
    const u = Math.min(w, h);
    let s = rect(0, 0, w, h, T(hue, 90));
    if (v < 4) {
      const pw = Math.min(w * 0.76, h * 0.84 * 0.72);
      const ph = h * 0.84;
      const px = (w - pw) / 2;
      const py = h * 0.08;
      s += rect(px, py, pw, ph, T('gray', 98));
      s += rect(px + pw * 0.1, py + ph * 0.08, pw * 0.5, ph * 0.04, T(hue, 40));
      const lines = (from, count) => {
        for (let i = 0; i < count; i++) s += rect(px + pw * 0.1, py + ph * (from + i * 0.06), pw * (i === count - 1 ? 0.5 : 0.8), ph * 0.018, T('gray', 85));
      };
      if (v === 0) { // table
        lines(0.18, 5);
        for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) s += rect(px + pw * (0.1 + c * 0.27), py + ph * (0.52 + r * 0.075), pw * 0.25, ph * 0.06, r === 0 ? T(hue, 80) : T('gray', 90));
      } else if (v === 1) { // bar chart
        lines(0.18, 5);
        for (let b = 0; b < 5; b++) {
          const bh = ph * (0.1 + ((b * 7) % 5) * 0.045);
          s += rect(px + pw * (0.12 + b * 0.15), py + ph * 0.9 - bh, pw * 0.1, bh, T(hue, b % 2 ? 70 : 50));
        }
      } else if (v === 2) { // article with a picture
        s += rect(px + pw * 0.1, py + ph * 0.17, pw * 0.8, ph * 0.28, T(shift(hue, 4), 80));
        s += circle(px + pw * 0.3, py + ph * 0.25, pw * 0.05, T('yellow', 95));
        s += path(P`M${px + pw * 0.1} ${py + ph * 0.45}L${px + pw * 0.4} ${py + ph * 0.3}L${px + pw * 0.6} ${py + ph * 0.38}L${px + pw * 0.9} ${py + ph * 0.26}V${py + ph * 0.45}Z`, T(shift(hue, 4), 50));
        lines(0.52, 6);
      } else { // form
        for (let i = 0; i < 4; i++) {
          s += rect(px + pw * 0.1, py + ph * (0.18 + i * 0.15), pw * 0.3, ph * 0.02, T('gray', 70));
          s += rect(px + pw * 0.1, py + ph * (0.215 + i * 0.15), pw * 0.8, ph * 0.065, T('gray', 95), ` stroke="${T('gray', 80)}" stroke-width="${n(u * 0.004)}"`);
        }
        s += rect(px + pw * 0.1, py + ph * 0.82, pw * 0.34, ph * 0.07, T(hue, 40), ` rx="${n(ph * 0.035)}"`);
      }
      return s;
    }
    const x = w * 0.08;
    const y = h * 0.1;
    const W = w * 0.84;
    const H = h * 0.8;
    s += rect(x, y, W, H, T('gray', 98));
    s += rect(x, y, W, H * 0.1, T(hue, 40));
    for (let i = 0; i < 3; i++) s += circle(x + W * (0.03 + i * 0.025), y + H * 0.05, H * 0.015, T(hue, 80));
    const card = (cx, cy, cw, ch, fill) => { s += rect(cx, cy, cw, ch, fill); };
    if (v === 4) { // dashboard
      s += rect(x, y + H * 0.1, W * 0.2, H * 0.9, T(hue, 85));
      for (let k = 0; k < 3; k++) card(x + W * (0.25 + k * 0.25), y + H * 0.18, W * 0.22, H * 0.22, T(shift(hue, k * 4), 70));
      s += path(P`M${x + W * 0.25} ${y + H * 0.85}L${x + W * 0.4} ${y + H * 0.62}L${x + W * 0.55} ${y + H * 0.72}L${x + W * 0.72} ${y + H * 0.5}L${x + W * 0.95} ${y + H * 0.58}`, 'none', ` stroke="${T(hue, 50)}" stroke-width="${n(u * 0.015)}" stroke-linejoin="round"`);
    } else if (v === 5) { // blog feed
      for (let r = 0; r < 3; r++) {
        const ry = y + H * (0.18 + r * 0.26);
        card(x + W * 0.06, ry, W * 0.24, H * 0.2, T(shift(hue, r * 3), 80));
        s += rect(x + W * 0.36, ry + H * 0.02, W * 0.5, H * 0.04, T('gray', 70));
        s += rect(x + W * 0.36, ry + H * 0.09, W * 0.4, H * 0.03, T('gray', 85));
        s += rect(x + W * 0.36, ry + H * 0.14, W * 0.3, H * 0.03, T('gray', 85));
      }
    } else if (v === 6) { // shop
      for (let c = 0; c < 3; c++) {
        const cx = x + W * (0.06 + c * 0.31);
        card(cx, y + H * 0.18, W * 0.26, H * 0.4, T(shift(hue, c * 5), 80));
        s += circle(cx + W * 0.13, y + H * 0.38, H * 0.09, T(shift(hue, c * 5), 50));
        s += rect(cx, y + H * 0.63, W * 0.18, H * 0.04, T('gray', 70));
        s += rect(cx, y + H * 0.73, W * 0.12, H * 0.08, T(hue, 40), ` rx="${n(H * 0.04)}"`);
      }
    } else { // landing
      card(x + W * 0.05, y + H * 0.16, W * 0.9, H * 0.42, T(hue, 80));
      s += rect(x + W * 0.12, y + H * 0.27, W * 0.46, H * 0.07, T(hue, 30));
      s += rect(x + W * 0.12, y + H * 0.39, W * 0.3, H * 0.04, T(hue, 50));
      s += circle(x + W * 0.76, y + H * 0.37, H * 0.13, T(shift(hue, 6), 60));
      for (let c = 0; c < 3; c++) card(x + W * (0.05 + c * 0.31), y + H * 0.65, W * 0.28, H * 0.27, T('gray', 95));
    }
    return s;
  },

  // Decorative: two or three hue circles and a wave.
  cover(hue, w, h, v) {
    const h2 = shift(hue, 3);
    const h3 = shift(hue, 7);
    const u = Math.max(w, h);
    const left = v % 2 === 1;
    let s = rect(0, 0, w, h, T(hue, 90));
    s += circle(w * (left ? 0.2 : 0.78), h * (v % 4 < 2 ? 0.25 : 0.2), u * (0.24 + (v % 3) * 0.03), T(h2, 70));
    s += circle(w * (left ? 0.85 : 0.15), h * 0.95, u * 0.22, T(h3, 60));
    if (v >= 4) s += circle(w * 0.5, h * 0.45, u * 0.08, T(shift(hue, 10), 80));
    s += path(P`M0 ${h * 0.7}C${w * 0.3} ${h * 0.5} ${w * 0.6} ${h * 0.95} ${w} ${h * 0.6}V${h}H0Z`, T(hue, 40), ' fill-opacity=".9"');
    return s;
  },

  // Every hue in stripes, a yellow disc, a white sheet: shows what a filter does.
  study(_hue, w, h) {
    let s = '';
    HUES.forEach((hue, i) => { s += rect(w * i / HUES.length, 0, w / HUES.length + 1, h, T(hue, 50)); });
    s += circle(w * 0.3, h * 0.45, h * 0.25, T('yellow', 90));
    s += rect(w * 0.52, h * 0.2, w * 0.3, h * 0.45, T('gray', 98));
    s += rect(w * 0.58, h * 0.3, w * 0.18, h * 0.25, T('indigo', 30));
    s += rect(0, h * 0.8, w, h * 0.2, T('gray', 15));
    return s;
  },
};

// ---------------------------------------------------------------- the set

const SETS = [
  {
    key: 'place', shapes: ['16x9', '3x2', '4x3'],
    hues: ['sky', 'green', 'teal', 'lime', 'amber', 'indigo', 'cyan', 'orange'],
    alts: ['Холмы и солнце над долиной', 'Город у подножия холмов', 'Озеро между холмами', 'Лес на склоне холма',
      'Долина под утренним солнцем', 'Город у холмов на рассвете', 'Озеро в долине', 'Еловый лес у холмов'],
  },
  {
    key: 'product', shapes: ['1x1', '4x3', '3x4'],
    hues: ['pink', 'amber', 'teal', 'indigo', 'sky', 'orange', 'green', 'violet'],
    alts: ['Ваза на столе', 'Чашка на столе', 'Бутылка с этикеткой', 'Настольная лампа',
      'Растение в горшке', 'Стопка книг', 'Часы на столе', 'Миска с фруктами'],
  },
  {
    key: 'person', shapes: ['1x1', '3x4'],
    hues: ['violet', 'sky', 'amber', 'teal', 'pink', 'green', 'indigo', 'orange'],
    alts: (v) => v % 2 ? 'Портрет: человек с короткой стрижкой' : 'Портрет: человек с длинными волосами',
  },
  {
    key: 'document', shapes: (v) => v < 4 ? ['3x4', '2x3'] : ['4x3', '3x2', '16x9'],
    hues: ['indigo', 'teal', 'sky', 'violet', 'blue', 'orange', 'pink', 'green'],
    alts: ['Страница с таблицей', 'Страница с диаграммой', 'Страница статьи с картинкой', 'Страница с формой',
      'Окно приложения с карточками и графиком', 'Окно блога с лентой статей', 'Окно магазина с витриной товаров', 'Окно лендинга с крупным заголовком'],
  },
  {
    key: 'cover', shapes: ['16x9', '1x1', '2x3'],
    hues: ['sky', 'pink', 'teal', 'amber', 'violet', 'green', 'orange', 'indigo'],
    alts: () => '',
  },
  {
    key: 'study', count: 1, shapes: ['4x3'], hues: ['sky'],
    alts: ['Цветовой этюд: полосы всех оттенков палитры, жёлтый круг и белый лист'],
  },
];

// Pictures whose order, shape or crop an example shows carry their number and shape.
const LABELS = [
  'place-01-16x9', 'place-02-16x9', 'place-03-16x9',
  'place-01-3x2', 'place-02-3x2', 'place-03-3x2', 'place-06-4x3',
];

function size(shape) {
  const [a, b] = shape.split('x').map(Number);
  return a >= b ? [1200, Math.round(1200 * b / a)] : [Math.round(1200 * a / b), 1200];
}

function label(w, h, nn, shape) {
  const fs = Math.round(Math.min(w, h) * 0.06);
  const text = `${Number(nn)} · ${shape.replace('x', ':')}`;
  const pad = fs * 0.5;
  const bw = text.length * fs * 0.56 + pad * 2;
  const bh = fs * 1.5;
  const x = Math.min(w, h) * 0.04;
  const y = h - x - bh;
  return rect(x, y, bw, bh, T('gray', 10), ` rx="${n(bh / 2)}" fill-opacity=".72"`)
    + `<text x="${n(x + pad)}" y="${n(y + bh * 0.7)}" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="${fs}" font-weight="600" fill="${T('gray', 98)}">${text}</text>`;
}

function generate() {
  const {tones, source} = palette();
  TONE = tones;
  const pictures = [];
  for (const set of SETS) {
    const count = set.count ?? 8;
    for (let v = 0; v < count; v++) {
      const nn = String(v + 1).padStart(2, '0');
      const hue = set.hues[v % set.hues.length];
      const alt = typeof set.alts === 'function' ? set.alts(v) : set.alts[v];
      const shapes = typeof set.shapes === 'function' ? set.shapes(v) : set.shapes;
      for (const shape of shapes) {
        const [w, h] = size(shape);
        const body = DRAW[set.key](hue, w, h, v);
        const base = `${set.key}-${nn}-${shape}`;
        for (const labelled of [false, true]) {
          if (labelled && !LABELS.includes(base)) continue;
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}${labelled ? label(w, h, nn, shape) : ''}</svg>\n`;
          const file = `${base}${labelled ? '-label' : ''}.svg`;
          pictures.push({file, set: set.key, picture: nn, shape: shape.replace('x', ':'), hue, width: w, height: h,
            label: labelled ? `${Number(nn)} · ${shape.replace('x', ':')}` : null, alt, bytes: Buffer.byteLength(svg), svg});
        }
      }
    }
  }
  const unknownLabels = LABELS.filter((base) => !pictures.some((p) => p.file === `${base}.svg`));
  if (unknownLabels.length) fail(`LABELS name pictures that are not drawn: ${unknownLabels.join(', ')}`);

  const keep = new Set(pictures.map((p) => p.file));
  for (const file of readdirSync(here)) {
    if (NAME.test(file) && !keep.has(file)) unlinkSync(join(here, file));
  }
  for (const p of pictures) writeFileSync(join(here, p.file), p.svg);
  const manifest = {
    schema: 'simai.doc-illustrations.v1',
    rule: 'D22',
    palette: source,
    sets: SETS.map((s) => s.key),
    shapes: ['1:1', '4:3', '3:4', '3:2', '2:3', '16:9'],
    long_side: 1200,
    pictures: pictures.map(({svg, ...entry}) => entry),
  };
  writeFileSync(join(here, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  const total = pictures.reduce((sum, p) => sum + p.bytes, 0);
  console.log(`${pictures.length} pictures, ${total} bytes, palette ${source.pair ?? '?'} (${source.sha256.slice(0, 12)})`);
}

// ---------------------------------------------------------------- sync

function sync(checkOnly) {
  const examples = join(root, 'examples');
  const wanted = new Map();
  const walk = (dir) => {
    for (const entry of readdirSync(dir, {withFileTypes: true})) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) { if (entry.name !== 'assets' && entry.name !== 'node_modules') walk(p); continue; }
      if (!/\.(html|js|css|json)$/.test(entry.name)) continue;
      for (const [, name] of readFileSync(p, 'utf8').matchAll(REFERENCE)) {
        const target = join(dir, 'assets', name);
        wanted.set(target, name);
      }
    }
  };
  walk(examples);
  const problems = [];
  let written = 0;
  for (const [target, name] of [...wanted].sort()) {
    const source = join(here, name);
    if (!existsSync(source)) { problems.push(`${relative(root, target)}: no ${name} in assets/illustrations`); continue; }
    const bytes = readFileSync(source);
    if (existsSync(target) && readFileSync(target).equals(bytes)) continue;
    if (checkOnly) { problems.push(`${relative(root, target)}: differs from assets/illustrations/${name}`); continue; }
    mkdirSync(dirname(target), {recursive: true});
    writeFileSync(target, bytes);
    written++;
  }
  // A copy no example names any more is stale.
  const stale = [];
  const findStale = (dir) => {
    for (const entry of readdirSync(dir, {withFileTypes: true})) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) { findStale(p); continue; }
      if (NAME.test(entry.name) && dirname(p).endsWith('/assets') && !wanted.has(p)) stale.push(p);
    }
  };
  findStale(examples);
  for (const p of stale) {
    if (checkOnly) problems.push(`${relative(root, p)}: no example names it`);
    else unlinkSync(p);
  }
  // D22 (1): no photos or foreign raster pictures in examples. The home
  // showcase (examples/home) is a product demo with its own brand files.
  const raster = [];
  const findRaster = (dir) => {
    for (const entry of readdirSync(dir, {withFileTypes: true})) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) { if (p !== join(examples, 'home')) findRaster(p); continue; }
      if (/\.(jpe?g|png|webp|gif|avif)$/i.test(entry.name)) raster.push(p);
    }
  };
  findRaster(examples);
  for (const p of raster) problems.push(`${relative(root, p)}: a raster picture; examples take pictures from assets/illustrations (D22)`);
  for (const problem of problems) console.error(problem);
  console.log(`${wanted.size} illustration copies in examples${checkOnly ? '' : `, ${written} written, ${stale.length} stale removed`}`);
  return problems.length ? 1 : 0;
}

function fail(message) {
  console.error(message);
  process.exit(2);
}

// ---------------------------------------------------------------- run

if (command === 'sync') process.exit(sync(args.includes('--check')));
generate();
