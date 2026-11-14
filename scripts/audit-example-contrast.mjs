#!/usr/bin/env node
// Example contrast (owner decision C192, 2026-11-15).
//
// Every text in an example panel reads at 4.5:1 against the colour it actually
// stands on (3:1 for large text and icons), in the light and in the dark theme.
// Plates are drawn with theme role pairs only: bg-<role>-container with
// color-on-<role>-container, and the strong bg-<role> with color-on-<role>.
//
// Three modes:
//
//   node scripts/audit-example-contrast.mjs
//     The docs:check gate. Reads every example under examples/ and works out,
//     for each text node, the background and the ink the utility classes give
//     it, then measures both themes with the colours of the pinned pair
//     (config/example-contrast-roles.json). A page whose example breaks the
//     rule fails the check. Text inside a Framework component takes the
//     component's own colours; those are measured in the browser mode.
//
//   node scripts/audit-example-contrast.mjs --refresh-roles
//     Measures every bg-* and color-* utility of the pinned pair in a browser,
//     in both themes, and writes config/example-contrast-roles.json. Run it
//     with each repin (SIMAI_UI_ROOT is the pinned distribution); the gate
//     refuses a roles file written for another pair.
//
//   node scripts/audit-example-contrast.mjs --browser=<site origin> [--pages=<file>]
//     Opens the built site and measures every visible text node of every
//     example panel against its composited background, light and dark,
//     including the text Framework components draw. Reports per page; the
//     findings inside a component are listed for the Framework.
//
// --root=<dir> reads the examples from another tree (for a before count).
// --json prints the findings as JSON; --jobs=<n> pages at once (4);
// CONTRAST_DEBUG=1 adds each finding's background chain.

import {existsSync, readFileSync, readdirSync, statSync, writeFileSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(process.argv.slice(2).map((arg) => {
  const [key, ...value] = arg.replace(/^--/, '').split('=');
  return [key, value.length ? value.join('=') : true];
}));
const rolesPath = join(root, 'config/example-contrast-roles.json');
const NORMAL = 4.5;
const DEBUG = Boolean(process.env.CONTRAST_DEBUG);
const LARGE = 3;
const ROLES = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'info'];

function pinnedRuntime() {
  const source = readFileSync(join(root, 'scripts/materialize-framework-runtime.php'), 'utf8');
  return source.match(/UI_RUNTIME_REVISION\s*=\s*'([0-9a-f]{40})'/)?.[1] ?? '';
}

// ---------- colour arithmetic ----------

function parseColor(text) {
  const match = String(text).match(/rgba?\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  return {r: parts[0], g: parts[1], b: parts[2], a: parts.length > 3 ? parts[3] : 1};
}

function over(top, bottom) {
  const a = top.a + bottom.a * (1 - top.a);
  if (a === 0) return {r: 0, g: 0, b: 0, a: 0};
  const mix = (x, y) => (x * top.a + y * bottom.a * (1 - top.a)) / a;
  return {r: mix(top.r, bottom.r), g: mix(top.g, bottom.g), b: mix(top.b, bottom.b), a};
}

function luminance({r, g, b}) {
  const channel = (value) => {
    const v = value / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function ratio(ink, ground) {
  const solidGround = ground.a < 1 ? over(ground, {r: 255, g: 255, b: 255, a: 1}) : ground;
  const solidInk = ink.a < 1 ? over(ink, solidGround) : ink;
  const [hi, lo] = [luminance(solidInk), luminance(solidGround)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// ---------- the browser ----------

async function launch() {
  const playwrightPath = [
    process.env.PLAYWRIGHT_CORE,
    join(root, 'node_modules/playwright-core'),
  ].find((path) => path && existsSync(join(path, 'package.json')));
  if (!playwrightPath) throw new Error('playwright-core not found; run npm ci or set PLAYWRIGHT_CORE');
  const {chromium} = await import(pathToFileURL(join(playwrightPath, 'index.mjs')).href);
  const caches = [process.env.PLAYWRIGHT_BROWSERS_PATH, join(process.env.HOME ?? '', 'Library/Caches/ms-playwright')].filter(Boolean);
  let executablePath = process.env.CHROMIUM_EXECUTABLE;
  for (const cache of caches) {
    if (executablePath || !existsSync(cache)) continue;
    executablePath = readdirSync(cache).filter((name) => name.startsWith('chromium_headless_shell-')).sort().reverse()
      .flatMap((name) => ['chrome-headless-shell-mac-arm64', 'chrome-headless-shell-mac-x64', 'chrome-headless-shell-linux64']
        .map((dir) => join(cache, name, dir, 'chrome-headless-shell')))
      .find((path) => existsSync(path));
  }
  return chromium.launch(executablePath ? {executablePath} : {});
}

// ---------- roles ----------

async function refreshRoles() {
  const uiRoot = process.env.SIMAI_UI_ROOT || process.env.DOCARA_SIMAI_UI_ROOT || resolve(root, '../ui');
  const css = ['distr/core/css/core.css', 'distr/core/css/utility.full.css'].map((file) => join(uiRoot, file));
  for (const file of css) if (!existsSync(file)) throw new Error(`missing ${file}; set SIMAI_UI_ROOT to the pinned distribution`);
  const utility = readFileSync(css[1], 'utf8');
  const names = (prefix) => [...new Set([...utility.matchAll(new RegExp(`\\.(${prefix}-[a-z0-9-]+)(?=[\\s,{:])`, 'g'))].map((m) => m[1]))].sort();
  const bg = names('bg');
  const color = names('color');
  const browser = await launch();
  const page = await browser.newPage();
  const styles = css.map((file) => `<style>${readFileSync(file, 'utf8')}</style>`).join('');
  const themes = {};
  for (const theme of ['light', 'dark']) {
    await page.setContent(`<!doctype html><html class="theme-${theme}"><head><meta charset="utf-8">${styles}</head><body class="bg-surface color-on-surface"><div id="probe">Aa</div><p><code id="code">x</code> <kbd id="kbd">x</kbd> <a id="a" href="#x">x</a> <mark id="mark">x</mark></p></body></html>`);
    themes[theme] = await page.evaluate(({bg, color}) => {
      const probe = document.getElementById('probe');
      const read = (name, property) => {
        probe.className = name;
        const style = getComputedStyle(probe);
        return property === 'background' && style.backgroundImage !== 'none' ? 'image' : style[property === 'background' ? 'backgroundColor' : 'color'];
      };
      probe.className = '';
      const body = getComputedStyle(document.body);
      const out = {page: {background: body.backgroundColor, color: body.color}, bg: {}, color: {}, elements: {}};
      // Text elements that paint their own ink (and plate) whatever stands
      // around them: inside a role plate they keep the page's colours.
      for (const id of ['code', 'kbd', 'a', 'mark']) {
        const style = getComputedStyle(document.getElementById(id));
        out.elements[id] = {background: style.backgroundColor, color: style.color};
      }
      for (const name of bg) out.bg[name] = read(name, 'background');
      for (const name of color) out.color[name] = read(name, 'color');
      return out;
    }, {bg, color});
  }
  await browser.close();
  // Keep only classes that paint a colour; the rest (bg-cover, color-inherit...)
  // do not decide contrast.
  for (const theme of Object.values(themes)) {
    for (const [name, value] of Object.entries(theme.bg)) {
      if (value !== 'image' && (parseColor(value)?.a ?? 0) === 0 && !/transparent|none/.test(name)) delete theme.bg[name];
    }
  }
  const out = {
    schema: 'ui-doc.example-contrast-roles.v1',
    runtime_revision: pinnedRuntime(),
    note: 'Written by scripts/audit-example-contrast.mjs --refresh-roles from the pinned SIMAI Framework distribution (core.css and utility.full.css), in .theme-light and .theme-dark. Refresh with every repin.',
    themes,
  };
  writeFileSync(rolesPath, `${JSON.stringify(out, null, 2)}\n`);
  console.log(`wrote ${relative(root, rolesPath)}: ${Object.keys(themes.light.bg).length} backgrounds, ${Object.keys(themes.light.color).length} inks`);
}

// ---------- static gate ----------

const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const SKIP = new Set(['script', 'style', 'template', 'svg', 'noscript', 'textarea', 'select', 'option']);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (name.endsWith('.html')) yield path;
  }
}

function attr(attrs, name) {
  return attrs.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'))?.slice(2).find((v) => v !== undefined) ?? null;
}

function isComponent(tag, classes) {
  if (/^sf-/.test(tag)) return true;
  return classes.some((name) => /^sf-/.test(name) && !/^sf-icon$/.test(name));
}

function decode(text) {
  return text.replace(/&nbsp;/g, ' ').replace(/&[a-z]+;|&#\d+;/g, 'x');
}

function auditFile(file, roles, findings, stats) {
  const html = readFileSync(file, 'utf8');
  const stack = [];
  const plates = new Map();
  const token = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>|([^<]+)/g;
  let skip = 0;
  let match;
  while ((match = token.exec(html))) {
    const [, closing, rawTag, attrs = '', text] = match;
    if (rawTag) {
      const tag = rawTag.toLowerCase();
      if (closing) {
        const index = stack.map((frame) => frame.tag).lastIndexOf(tag);
        if (index >= 0) {
          for (const frame of stack.splice(index)) if (SKIP.has(frame.tag)) skip -= 1;
        }
        continue;
      }
      if (VOID.has(tag) || /\/\s*$/.test(attrs)) continue;
      const classes = (attr(attrs, 'class') ?? '').split(/\s+/).filter(Boolean);
      const style = attr(attrs, 'style') ?? '';
      const own = roles.light.elements?.[tag] && !classes.some((name) => /^sf-/.test(name)) && !stack.some((f) => f.tag === 'pre' || f.component) ? tag : null;
      const ownBg = own && (parseColor(roles.light.elements[own].background)?.a ?? 0) > 0 ? `element:${own}` : null;
      const frame = {
        tag,
        classes,
        bg: classes.filter((name) => /^bg-/.test(name) && name in roles.light.bg).pop() ?? (/background/.test(style) ? 'inline-style' : ownBg),
        color: classes.filter((name) => /^color-/.test(name) && name in roles.light.color).pop() ?? (/(^|;)\s*color\s*:/.test(style) ? 'inline-style' : (own ? `element:${own}` : null)),
        component: isComponent(tag, classes),
        icon: classes.includes('sf-icon'),
        large: /^h[1-3]$/.test(tag) || classes.some((name) => /^text-([2-9]|\d{2})$/.test(name)),
        hidden: /(^|\s)hidden(\s|=|$)/.test(attrs) || classes.includes('sr-only') || classes.includes('hidden'),
        // data-contrast="colour": the element shows a colour itself (a
        // disabled ink, a transparent or gradient fill), so it is not text to
        // be read against its ground. Use it on the sample only, never on a
        // plate that holds explanatory text.
        exempt: attr(attrs, 'data-contrast') === 'colour',
      };
      stack.push(frame);
      if (SKIP.has(tag)) skip += 1;
      continue;
    }
    if (!text || skip || !decode(text).trim()) continue;
    if (stack.some((frame) => frame.hidden)) continue;
    if (stack.some((frame) => frame.exempt)) { stats.exempt += 1; continue; }
    let bgIndex = -1;
    let colorIndex = -1;
    let componentIndex = -1;
    stack.forEach((frame, index) => {
      if (frame.bg) bgIndex = index;
      if (frame.color) colorIndex = index;
      if (frame.component) componentIndex = index;
    });
    stats.texts += 1;
    // A Framework component paints its own text unless a colour utility below
    // it says otherwise; the browser mode measures that.
    if (componentIndex >= 0 && colorIndex < componentIndex) { stats.component += 1; continue; }
    if (componentIndex > bgIndex && bgIndex >= 0 && colorIndex < componentIndex) { stats.component += 1; continue; }
    const bg = bgIndex >= 0 ? stack[bgIndex].bg : null;
    const ink = colorIndex >= 0 ? stack[colorIndex].color : null;
    if (stack.some((frame) => frame.bg === 'inline-style') || ink === 'inline-style' || (bg && !bg.startsWith('element:') && roles.light.bg[bg] === 'image')) { stats.unknown += 1; continue; }
    const large = stack.some((frame) => frame.large || frame.icon);
    const need = large ? LARGE : NORMAL;
    const where = `${relative(root, file)}`;
    const sample = decode(text).trim().replace(/\s+/g, ' ').slice(0, 40);
    if (bgIndex >= 0) {
      const plate = stack[bgIndex];
      const role = bg.startsWith('element:') ? null : bg.match(/^bg-(.+?)(-container)?$/);
      if (role && ROLES.includes(role[1])) {
        const pair = `color-on-${role[1]}${role[2] ?? ''}`;
        const key = `${where}#${bgIndex}:${plate.classes.join('.')}`;
        if (!plates.has(key)) {
          plates.set(key, true);
          const paired = (name) => name === pair || name === `${pair}-graphic`;
          if (!stack.slice(bgIndex).some((frame) => paired(frame.color)) && !paired(ink)) {
            findings.push({file: where, kind: 'unpaired-plate', plate: bg, ink: ink ?? 'page ink', want: pair, text: sample});
          }
        }
      }
    }
    for (const theme of ['light', 'dark']) {
      const page = parseColor(roles[theme].page.background);
      const bgOf = (name) => name.startsWith('element:') ? roles[theme].elements[name.slice(8)].background : roles[theme].bg[name];
      const inkOf = (name) => name.startsWith('element:') ? roles[theme].elements[name.slice(8)].color : roles[theme].color[name];
      // Layers: every plate between the page and the text, outermost first.
      let ground = page;
      for (const frame of stack) if (frame.bg && frame.bg !== 'inline-style' && bgOf(frame.bg) !== 'image') ground = over(parseColor(bgOf(frame.bg)), ground);
      const inkColor = parseColor(ink ? inkOf(ink) : roles[theme].page.color);
      if (!ground || !inkColor) continue;
      const value = ratio(inkColor, ground);
      if (value + 1e-6 < need) {
        findings.push({file: where, kind: 'contrast', theme, plate: bg ?? 'page', ink: ink ?? 'page ink', ratio: Number(value.toFixed(2)), need, text: sample});
      }
    }
  }
}

function staticGate() {
  if (!existsSync(rolesPath)) {
    console.error(`missing ${relative(root, rolesPath)}; run node scripts/audit-example-contrast.mjs --refresh-roles`);
    process.exit(1);
  }
  const data = JSON.parse(readFileSync(rolesPath, 'utf8'));
  const pinned = pinnedRuntime();
  if (data.runtime_revision !== pinned) {
    console.error(`${relative(root, rolesPath)} was measured on ${data.runtime_revision}, the site pins ${pinned}; run --refresh-roles`);
    process.exit(1);
  }
  const examplesRoot = resolve(args.root ? String(args.root) : join(root, 'examples'));
  const findings = [];
  const stats = {files: 0, texts: 0, component: 0, unknown: 0, exempt: 0};
  for (const file of walk(examplesRoot)) {
    stats.files += 1;
    auditFile(file, data.themes, findings, stats);
  }
  const files = new Set(findings.map((finding) => finding.file));
  if (args.json) {
    console.log(JSON.stringify({stats, examples_with_findings: files.size, findings}, null, 2));
  } else {
    for (const finding of findings) {
      console.log(finding.kind === 'contrast'
        ? `${finding.file}: ${finding.theme} ${finding.ink} on ${finding.plate} ${finding.ratio}:1 < ${finding.need}:1 «${finding.text}»`
        : `${finding.file}: ${finding.plate} without ${finding.want} (ink ${finding.ink}) «${finding.text}»`);
    }
    console.log(`example contrast: ${stats.files} examples, ${stats.texts} texts (${stats.component} drawn by components, ${stats.unknown} on images or inline styles, ${stats.exempt} colour samples); ${findings.length} finding(s) in ${files.size} example(s)`);
  }
  process.exit(findings.length ? 1 : 0);
}

// ---------- browser mode ----------

async function browserAudit() {
  const origin = String(args.browser).replace(/\/$/, '');
  let pages = args.pages ? readFileSync(String(args.pages), 'utf8').split('\n').map((line) => line.trim()).filter(Boolean) : null;
  if (!pages) {
    const content = join(root, 'content/ru');
    pages = [];
    const visit = (dir) => {
      for (const name of readdirSync(dir)) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) visit(path);
        else if (name.endsWith('.md') && /:::example/.test(readFileSync(path, 'utf8'))) {
          pages.push(`/ru/${relative(content, path).replace(/\.md$/, '').replace(/(^|\/)index$/, '')}/`.replace(/\/+/g, '/'));
        }
      }
    };
    visit(content);
  }
  const browser = await launch();
  const report = [];
  for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({colorScheme: theme, viewport: {width: 1440, height: 900}, ignoreHTTPSErrors: true});
    const queue = [...pages];
    const jobs = Math.max(1, Number(args.jobs ?? 4));
    await Promise.all(Array.from({length: jobs}, async () => {
    let page = await context.newPage();
    for (let route = queue.shift(); route !== undefined; route = queue.shift()) {
      // A page that never settles (a frame that stops answering, a feed that
      // keeps growing) must not hold the whole run: each page has a limit.
      let timer;
      const limit = new Promise((resolve) => { timer = setTimeout(() => resolve('timeout'), 180000); });
      const outcome = await Promise.race([(async () => {
      try {
        await page.goto(origin + route, {waitUntil: 'load', timeout: 60000});
        // The site follows the system scheme by default and so do its example
        // frames: the context's colorScheme picks the theme.
        // Example frames load as they come into view, and their components
        // fetch their sheets: scroll the page through, then wait for quiet.
        await page.evaluate(async () => {
          for (let y = 0; y < Math.min(document.body.scrollHeight, 60000); y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
          window.scrollTo(0, 0);
        });
        await page.waitForLoadState('networkidle', {timeout: 30000}).catch(() => {});
        await page.waitForTimeout(2500);
      } catch (error) {
        report.push({route, theme, error: String(error.message).slice(0, 200)});
        return;
      }
      const frames = [page.mainFrame(), ...page.frames().filter((frame) => frame !== page.mainFrame())];
      // A sandboxed example frame is transparent: it stands on the panel.
      const base = await page.evaluate(() => getComputedStyle(document.querySelector('.docara-example-preview__panels') ?? document.body).backgroundColor).catch(() => 'rgb(255, 255, 255)');
      for (const frame of frames) {
        let found = [];
        let unstyledLeft = 0;
        try {
          for (let attempt = 0; attempt < 4; attempt += 1) {
          const result = await frame.evaluate(({NORMAL, LARGE, inFrame, theme, base, debug}) => {
            const parse = (text) => {
              const m = String(text).match(/rgba?\(([^)]+)\)/);
              if (!m) return null;
              const p = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
              return {r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1};
            };
            const over = (top, bottom) => {
              const a = top.a + bottom.a * (1 - top.a);
              if (!a) return {r: 0, g: 0, b: 0, a: 0};
              const mix = (x, y) => (x * top.a + y * bottom.a * (1 - top.a)) / a;
              return {r: mix(top.r, bottom.r), g: mix(top.g, bottom.g), b: mix(top.b, bottom.b), a};
            };
            const lum = ({r, g, b}) => [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; })
              .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
            const panels = inFrame ? [document.body] : [...document.querySelectorAll('.docara-example-inline')];
            const out = [];
            let unstyled = 0;
            const seen = new Set();
            for (const panel of panels) {
              const walker = document.createTreeWalker(panel, NodeFilter.SHOW_TEXT);
              while (walker.nextNode()) {
                const node = walker.currentNode;
                const el = node.parentElement;
                if (!el || !node.textContent.trim() || seen.has(el)) continue;
                if (el.closest('script,style,template,noscript')) continue;
                const style = getComputedStyle(el);
                const rect = el.getBoundingClientRect();
                if (style.visibility === 'hidden' || style.display === 'none' || rect.width < 1 || rect.height < 1) continue;
                if (el.closest('[aria-hidden="true"]:not(.sf-icon)') && !el.classList.contains('sf-icon')) { /* still drawn: check it */ }
                let opacity = 1;
                const layers = [];
                let image = false;
                for (let cur = el; cur; cur = cur.parentElement ?? cur.getRootNode?.().host ?? null) {
                  const s = getComputedStyle(cur);
                  opacity *= Number(s.opacity);
                  if (s.backgroundImage !== 'none' && !/^url\(.*\.svg/.test(s.backgroundImage)) image = true;
                  // A control still in the browser's own dress has not got its sheet yet.
                  if (/^(button|input|select)$/i.test(cur.tagName) && /^rgb\((239, 239, 239|107, 107, 107)\)$/.test(s.backgroundColor)) { image = true; unstyled += 1; }
                  const bg = parse(s.backgroundColor);
                  if (bg && bg.a > 0) { layers.push(bg); if (bg.a >= 1) break; }
                  if (cur === document.documentElement) break;
                }
                seen.add(el);
                if (image || opacity < 0.99) continue;
                let ground = (inFrame ? parse(getComputedStyle(document.documentElement).backgroundColor) : null);
                if (!ground || ground.a < 1) ground = parse(base) ?? {r: 255, g: 255, b: 255, a: 1};
                for (const layer of layers.reverse()) ground = over(layer, ground);
                let ink = parse(style.color);
                if (!ink) continue;
                if (ink.a < 1) ink = over(ink, ground);
                const [hi, lo] = [lum(ink), lum(ground)].sort((a, b) => b - a);
                const value = (hi + 0.05) / (lo + 0.05);
                const size = parseFloat(style.fontSize);
                const weight = Number(style.fontWeight) || 400;
                const large = size >= 24 || (size >= 18.66 && weight >= 700) || el.classList.contains('sf-icon') || style.fontFamily.includes('Material');
                const need = large ? LARGE : NORMAL;
                if (value + 1e-6 >= need) continue;
                if (el.closest('[aria-disabled="true"], :disabled, .disabled, [disabled]')) continue;
                let tag = null;
                for (let cur = el; cur && cur !== panel; cur = cur.parentElement) {
                  const name = cur.tagName.toLowerCase();
                  const cls = [...cur.classList].find((c) => /^sf-[a-z]/.test(c) && c !== 'sf-icon');
                  if (name.startsWith('sf-') || cls) tag = name.startsWith('sf-') ? name : cls;
                }
                if (!tag && el.classList.contains('sf-icon') && el.parentElement === panel) tag = 'sf-icon';
                const chain = []; for (let c = el; c; c = c.parentElement) chain.push(`${c.tagName}.${String(c.className).split(' ')[0]}:${getComputedStyle(c).backgroundColor}`);
                out.push({chain: debug ? chain.join(' > ') : undefined, frame: inFrame && debug ? `${document.documentElement.className}|${getComputedStyle(document.body).backgroundColor}|${getComputedStyle(document.documentElement).colorScheme}|ground ${Math.round(ground.r)},${Math.round(ground.g)},${Math.round(ground.b)} ink ${style.color}` : undefined, ratio: Number(value.toFixed(2)), need, text: node.textContent.trim().replace(/\s+/g, ' ').slice(0, 40), component: tag, classes: el.className && typeof el.className === 'string' ? el.className.slice(0, 120) : ''});
              }
            }
            return {out, unstyled};
          }, {NORMAL, LARGE, inFrame: frame !== page.mainFrame(), theme, base, debug: DEBUG});
          found = result.out;
          unstyledLeft = result.unstyled;
          if (!unstyledLeft) break;
          await page.waitForTimeout(2000);
          }
        } catch (error) {
          if (frame === page.mainFrame()) report.push({route, theme, error: `measure: ${String(error.message).slice(0, 200)}`});
          continue;
        }
        for (const item of found) report.push({route, theme, ...item});
        if (unstyledLeft) report.push({route, theme, unstyled: unstyledLeft});
      }
      })(), limit]);
      clearTimeout(timer);
      if (outcome === 'timeout') {
        report.push({route, theme, error: 'timeout: page did not settle in 180 s'});
        await page.close().catch(() => {});
        page = await context.newPage();
      }
    }
    await page.close();
    }));
    await context.close();
  }
  await browser.close();
  const failing = report.filter((item) => !item.error && !item.unstyled);
  const byRoute = new Map();
  for (const item of failing) byRoute.set(item.route, (byRoute.get(item.route) ?? 0) + 1);
  const summary = {
    origin,
    pages: pages.length,
    findings: failing.length,
    pages_with_findings: byRoute.size,
    docs_findings: failing.filter((item) => !item.component).length,
    framework_findings: failing.filter((item) => item.component).length,
    errors: report.filter((item) => item.error).length,
    unstyled_texts_skipped: report.filter((item) => item.unstyled).reduce((sum, item) => sum + item.unstyled, 0),
  };
  if (args.json) console.log(JSON.stringify({summary, report}, null, 2));
  else {
    for (const item of report) {
      if (item.unstyled) continue;
      console.log(item.error ? `${item.route} ${item.theme}: ${item.error}`
        : `${item.route} ${item.theme}: ${item.ratio}:1 < ${item.need}:1 ${item.component ? `[${item.component}] ` : ''}«${item.text}» ${item.classes}`);
    }
    console.log(JSON.stringify(summary));
  }
  process.exit(failing.length ? 1 : 0);
}

if (args['refresh-roles']) await refreshRoles();
else if (args.browser) await browserAudit();
else staticGate();
