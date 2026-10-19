#!/usr/bin/env node
// Browser check of the built documentation site.
//
// Every page is opened in headless Chromium and fails on:
//   - an uncaught page error (pageerror), in the page or an example frame;
//   - a response of HTTP 400 or more (a missing site asset, a broken link the
//     page itself requests);
//   - a Smart tag (sf-*) still undefined 10 s after the page settled, in the
//     page or any of its example frames;
//   - an example frame that did not load (no frame, never complete, or empty).
//
// The pages are served from a build directory by a small static server, the
// way CI runs it, or read from a running site with --base:
//
//   node scripts/qa/browser-smoke.mjs                       # key pages, build_production
//   node scripts/qa/browser-smoke.mjs --all                 # every page of the build
//   node scripts/qa/browser-smoke.mjs --all --base https://ui-doc.test
//   node scripts/qa/browser-smoke.mjs /ru/guide/ /ru/components/   # given pages
//   node scripts/qa/browser-smoke.mjs --prefix /ui-doc/     # a build made for base_url /ui-doc/
//
// --prefix serves the build under that path, the way GitHub Pages serves a
// project site, and answers 404 for everything outside it, so a link or asset
// that leaves the base fails the page. Page paths (the key pages, the given
// ones and the --all list) are read relative to the site and opened under the
// prefix; with --base the prefix is added to the given address.
//
// --all takes the page list from _docara/page-metadata.json, the list of
// published pages Docara writes into the build; redirect stubs are not in it.
//
// Options: --root DIR (default build_production), --base URL, --concurrency N
// (default 6), --page-timeout MS (default 45000), --json FILE (write the full
// result), --retry (open each failing page once more and keep only what fails
// again). CHROME_PATH runs a given browser instead of Playwright's own;
// PLAYWRIGHT_CORE points at a playwright-core other than this repository's.
import {createReadStream, existsSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {createServer} from 'node:http';
import {extname, join, normalize, resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

// Key pages: one of every page type, and the examples most likely to break
// (frame overlays, the application table, live renderers, the generator).
export const SMOKE_PAGES = [
  '/ru/',
  '/ru/guide/',
  '/ru/guide/smart-components/field-renderers/',
  '/ru/guide/connection/js-api/',
  '/ru/components/',
  '/ru/components/navigation/menu/',
  '/ru/smart-components/overlays/drawer/',
  '/ru/smart-components/overlays/modal/',
  '/ru/smart-components/content/table/',
  '/ru/smart-components/forms/theme-generator/',
  '/ru/utilities/',
  '/ru/utilities/tables/',
  // English shows the Russian original with a notice until a translation is
  // accepted (translation_tracking.mode publish-current).
  '/en/',
  '/en/utilities/tables/',
];

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const at = args.indexOf(name);
  if (at === -1) return fallback;
  const value = args[at + 1];
  args.splice(at, 2);
  return value;
};
const flag = (name) => {
  const at = args.indexOf(name);
  if (at === -1) return false;
  args.splice(at, 1);
  return true;
};

const all = flag('--all');
const retry = flag('--retry');
const root = resolve(option('--root', 'build_production'));
let base = option('--base', '');
const concurrency = Number(option('--concurrency', '6'));
const pageTimeout = Number(option('--page-timeout', '45000'));
const jsonOut = option('--json', '');
// '/ui-doc/' -> '/ui-doc'; the default '/' -> '' (the site at the root).
const prefix = `/${option('--prefix', '/').split('/').filter(Boolean).join('/')}`.replace(/^\/$/, '');
const SETTLE_MS = 3000;
const DEFINE_WAIT_MS = 10000;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.avif': 'image/avif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.otf': 'font/otf', '.txt': 'text/plain; charset=utf-8', '.md': 'text/markdown; charset=utf-8',
  '.xml': 'application/xml', '.webmanifest': 'application/manifest+json', '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.pdf': 'application/pdf', '.wasm': 'application/wasm', '.map': 'application/json',
};

// A plain file server over the build: a directory answers with its
// index.html, a directory without the trailing slash is redirected to it,
// everything else that is not a file is a 404.
function serve(dir) {
  const server = createServer((request, response) => {
    let path;
    try {
      path = decodeURIComponent(new URL(request.url, 'http://x').pathname);
    } catch {
      response.writeHead(400).end();
      return;
    }
    if (prefix) {
      if (path === prefix) {
        response.writeHead(301, {location: prefix + '/'}).end();
        return;
      }
      if (!path.startsWith(prefix + '/')) {
        response.writeHead(404, {'content-type': 'text/plain'}).end('outside the site prefix');
        return;
      }
      path = path.slice(prefix.length);
    }
    const file = normalize(join(dir, path));
    if (!file.startsWith(dir)) {
      response.writeHead(403).end();
      return;
    }
    let target = file;
    try {
      if (statSync(target).isDirectory()) {
        if (!path.endsWith('/')) {
          response.writeHead(301, {location: path + '/'}).end();
          return;
        }
        target = join(target, 'index.html');
      }
      statSync(target);
    } catch {
      response.writeHead(404, {'content-type': 'text/plain'}).end('not found');
      return;
    }
    response.writeHead(200, {'content-type': MIME[extname(target).toLowerCase()] || 'application/octet-stream'});
    createReadStream(target).pipe(response);
  });
  return new Promise((done) => server.listen(0, '127.0.0.1', () => done(server)));
}

async function loadPlaywright() {
  const explicit = process.env.PLAYWRIGHT_CORE;
  if (explicit) return import(pathToFileURL(join(explicit, 'index.mjs')).href);
  return import('playwright-core');
}

async function pageList(context) {
  if (args.length) return args.map(inSite);
  if (!all) return SMOKE_PAGES.map(inSite);
  let metadata;
  if (server) {
    metadata = JSON.parse(readFileSync(join(root, '_docara/page-metadata.json'), 'utf8'));
  } else {
    // Through the browser context: a local site's certificate is one only
    // the browser is told to accept.
    const response = await context.request.get(base + prefix + '/_docara/page-metadata.json');
    metadata = await response.json();
  }
  return [...new Set(metadata.pages.map((page) => inSite(page.url)))].sort();
}

// A page path under the prefix; one that already carries it is kept.
function inSite(path) {
  if (!prefix || path === prefix || path.startsWith(prefix + '/')) return path;
  return prefix + path;
}

async function checkPage(context, path) {
  const page = await context.newPage();
  const findings = [];
  const add = (kind, detail) => findings.push({kind, detail: String(detail).slice(0, 300)});
  page.on('pageerror', (error) => add('pageerror', error.message || error));
  page.on('response', (response) => {
    if (response.status() >= 400) add('http', `${response.status()} ${response.url().replace(base, '')}`);
  });
  page.on('requestfailed', (request) => {
    const failure = request.failure()?.errorText || 'failed';
    // A navigation the page itself abandons (a closed page) is not a finding.
    if (failure !== 'net::ERR_ABORTED') add('requestfailed', `${failure} ${request.url().replace(base, '')}`);
  });
  const work = (async () => {
    const response = await page.goto(base + path, {waitUntil: 'load', timeout: pageTimeout});
    if (response && response.status() >= 400) return;
    // Lazy frames (loading="lazy") load only once scrolled to: bring each
    // into view and wait for its document before moving on, or it is never
    // requested and reads as a frame that failed. Docara (3.3.0) keeps an
    // example's document in data-docara-srcdoc and moves it to srcdoc when the
    // frame nears the screen; a srcdoc frame keeps reporting about:blank, so
    // the move itself is the signal (the frame check below reads its document).
    for (const handle of await page.$$('iframe[loading="lazy"]')) {
      await handle.scrollIntoViewIfNeeded().catch(() => {});
      for (let waited = 0; waited < 5000; waited += 100) {
        const url = (await handle.contentFrame())?.url() || '';
        if (url && url !== 'about:blank') break;
        if (await handle.evaluate((frame) => frame.hasAttribute('srcdoc')).catch(() => false)) break;
        await page.waitForTimeout(100);
      }
    }
    await page.waitForTimeout(SETTLE_MS);
    const evaluate = (frame, fn) => Promise.race([
      frame.evaluate(fn).catch(() => null),
      new Promise((done) => setTimeout(() => done(null), 5000)),
    ]);
    const undefinedTags = async () => {
      const found = new Set();
      for (const frame of page.frames()) {
        const tags = await evaluate(frame, () => [...new Set([...document.querySelectorAll('*')]
          .map((element) => element.localName)
          .filter((name) => name.startsWith('sf-') && !customElements.get(name)))]);
        for (const tag of tags || []) found.add(tag);
      }
      return [...found];
    };
    // Six pages load at once, so a slow page gets up to 10 s more: a tag
    // still undefined after that is a finding, one defined late is not.
    let undefinedNow = await undefinedTags();
    for (let waited = 0; undefinedNow.length && waited < DEFINE_WAIT_MS; waited += 1000) {
      await page.waitForTimeout(1000);
      undefinedNow = await undefinedTags();
    }
    if (undefinedNow.length) add('undefined', undefinedNow.join(','));
    // Example frames: each must have loaded a document with content.
    const frames = await page.$$('iframe');
    for (const [index, handle] of frames.entries()) {
      const title = (await handle.getAttribute('title')) || `#${index}`;
      const frame = await handle.contentFrame();
      if (!frame) {
        add('frame', `${title}: no frame`);
        continue;
      }
      const state = await evaluate(frame, () => ({
        ready: document.readyState,
        children: document.body ? document.body.children.length : -1,
        text: document.body ? document.body.innerText.trim().length : 0,
      }));
      if (!state) add('frame', `${title}: not reachable`);
      else if (state.ready !== 'complete') add('frame', `${title}: readyState ${state.ready}`);
      else if (state.children <= 0 && state.text === 0) add('frame', `${title}: empty body`);
    }
  })();
  try {
    await Promise.race([work, new Promise((_, reject) => setTimeout(() => reject(new Error(`page did not settle in ${pageTimeout} ms`)), pageTimeout))]);
  } catch (error) {
    add('timeout', error.message);
  }
  await page.close().catch(() => {});
  return {path, findings};
}

async function run(context, pages, label) {
  const results = [];
  let next = 0;
  let done = 0;
  const worker = async () => {
    while (next < pages.length) {
      const path = pages[next++];
      results.push(await checkPage(context, path));
      done++;
      if (pages.length > 20 && (done % 25 === 0 || done === pages.length)) process.stderr.write(`${label} ${done}/${pages.length}\n`);
    }
  };
  await Promise.all(Array.from({length: Math.min(concurrency, pages.length)}, worker));
  return results.sort((a, b) => a.path.localeCompare(b.path));
}

const started = Date.now();
let server;
if (!base) {
  if (!existsSync(join(root, 'index.html'))) {
    console.error(`no build at ${root}: build the site first or pass --base`);
    process.exit(2);
  }
  server = await serve(root);
  base = `http://127.0.0.1:${server.address().port}`;
}
const {chromium} = await loadPlaywright();
const browser = await chromium.launch(process.env.CHROME_PATH ? {executablePath: process.env.CHROME_PATH, args: ['--headless=new']} : {});
const context = await browser.newContext({ignoreHTTPSErrors: true, viewport: {width: 1280, height: 4000}});
const pages = await pageList(context);
let results = await run(context, pages, 'checked');
let failing = results.filter((result) => result.findings.length);
const firstPass = failing.map((result) => ({...result}));
if (retry && failing.length) {
  // A finding that does not come back on a quiet second visit is a flake.
  const again = await run(context, failing.map((result) => result.path), 'rechecked');
  const byPath = new Map(again.map((result) => [result.path, result]));
  results = results.map((result) => (result.findings.length ? byPath.get(result.path) : result));
  failing = results.filter((result) => result.findings.length);
}
await browser.close();
server?.close();

const seconds = ((Date.now() - started) / 1000).toFixed(1);
for (const result of failing) {
  console.log(result.path);
  for (const finding of result.findings) console.log(`  ${finding.kind}: ${finding.detail}`);
}
if (retry) {
  const flaky = firstPass.filter((first) => !failing.some((result) => result.path === first.path));
  for (const result of flaky) console.log(`flake (passed on retry) ${result.path}: ${result.findings.map((f) => f.kind).join(',')}`);
}
console.log(`pages ${pages.length}, failing ${failing.length}, ${seconds} s, ${base}`);
if (jsonOut) writeFileSync(jsonOut, JSON.stringify({base, pages: pages.length, seconds: Number(seconds), firstPass, results: failing}, null, 2));
process.exit(failing.length ? 1 : 0);
