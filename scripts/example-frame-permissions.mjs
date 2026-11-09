#!/usr/bin/env node
// Example frames may download, copy and open links (pre-check 2026-11-09,
// DF-01 and CB-03; owner rule D06: behaviour is shown live).
//
// Docara draws every example in <iframe sandbox="allow-scripts">. In that
// frame a file link downloads nothing, a copy button meets "Permissions
// policy violation: The Clipboard API has been blocked" in the console, and a
// link to a new tab does not open. The frame is Docara's markup, so the
// permissions are added here, after the build, on the example frames only
// (the preview frame and the responsive viewer's frame); other frames keep
// their sandbox.
//
//   sandbox += allow-downloads              a download link and a file the page builds
//             allow-popups                  target="_blank" opens a tab
//             allow-popups-to-escape-sandbox  the tab is an ordinary page
//   allow   =  clipboard-write *            navigator.clipboard.writeText
//
// The frame keeps its opaque origin: no allow-same-origin, no top navigation,
// no forms. Every one of these still needs the person's press.
//
// Usage: node scripts/example-frame-permissions.mjs [build-dir] (default build_production)

import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = resolve(root, process.argv[2] ?? 'build_production');
const SANDBOX = 'sandbox="allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox" allow="clipboard-write *"';
// The opening tag of an example frame that still has Docara's sandbox.
const FRAME = /<iframe\b(?=[^>]*\bdata-docara-example-frame\b)[^>]*?\bsandbox="allow-scripts"/gu;

const pages = (dir, out = []) => {
  for (const entry of readdirSync(dir, {withFileTypes: true})) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) pages(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
};

let files = 0;
let frames = 0;
for (const file of pages(site)) {
  const html = readFileSync(file, 'utf8');
  if (!html.includes('data-docara-example-frame')) continue;
  let count = 0;
  const next = html.replace(FRAME, (tag) => {
    count++;
    return tag.replace(/\bsandbox="allow-scripts"$/u, SANDBOX);
  });
  if (count === 0) continue;
  writeFileSync(file, next);
  files++;
  frames += count;
}
console.log(JSON.stringify({schema: 'ui-doc.example_frame_permissions.v1', site, files, frames}, null, 2));
