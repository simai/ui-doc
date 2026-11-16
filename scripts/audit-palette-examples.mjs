#!/usr/bin/env node
// Fails when a palette or tone example of the colour guide leaves out a
// primitive the pinned Framework release defines, or shows one it does not.
//
// Written after the owner found the static palette table on
// guide/colour/palettes without tone 98 (and 85, 35, 25, 15, 5; fixed in
// 9472799a): the release declares sixteen tones for every hue and nothing
// compared the table with it.
//
// Everything comes from the release, nothing is listed here:
//   - a palette is a family of colour primitives --sf-<name>-<tone> the core
//     declares (a literal colour or var() of another palette's tone) whose
//     tones are mostly the release's tone ladder -- so the chart series
//     (--sf-chart-1 … 8), the space ladder and the like are not palettes;
//   - the palettes declared in one rule of the core are one group (the theme
//     palettes, the static palette);
//   - an example is a palette table when it shows at least half the tones of
//     some palette (a «ramp»). Every ramp must then show every tone the
//     release declares for that palette;
//   - an example that shows more than half the palettes of a group (as ramps,
//     or as sf-hue-<name> classes) must show all of them;
//   - an example may not name a --sf-<name>-<number> the core does not declare
//     or a sf-hue-<name> class the core does not define.
//
// The examples read are the :::example blocks of content/ru/guide/colour/*.md,
// inline or by id (examples/<id>/*.html|css|js).
//
// The core is the one the lock pins: read from git at the lock's ui commit
// when DOCARA_SIMAI_UI_ROOT (or SIMAI_UI_ROOT) is a ui checkout, else from the
// runtime Docara materialized for that commit
// (vendor/simai/docara/resources/portable/vendor/simai-framework/runtime/<commit>/).
//
// Usage: node scripts/audit-palette-examples.mjs

import {execFileSync} from 'node:child_process';
import {existsSync, readdirSync, readFileSync, statSync} from 'node:fs';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CORE = 'distr/core/css/core.css';
const PAGES_DIR = 'content/ru/guide/colour';

// The pinned core.
const lockCommit = JSON.parse(readFileSync(resolve(root, 'simai-framework.lock.json'), 'utf8')).runtime.ui.commit;
const uiRoot = process.env.DOCARA_SIMAI_UI_ROOT ?? process.env.SIMAI_UI_ROOT;
const materialized = resolve(root, 'vendor/simai/docara/resources/portable/vendor/simai-framework/runtime', lockCommit, CORE);
let css = null;
let coreSource = null;
if (uiRoot && existsSync(resolve(uiRoot, '.git'))) {
  try {
    css = execFileSync('git', ['-C', uiRoot, 'show', `${lockCommit}:${CORE}`], {encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore']});
    coreSource = `${uiRoot} at ${lockCommit.slice(0, 12)}`;
  } catch {
    css = null;
  }
}
if (css === null && existsSync(materialized)) {
  css = readFileSync(materialized, 'utf8');
  coreSource = relative(root, materialized);
}
if (css === null) {
  console.error(`No core for the pinned release ${lockCommit.slice(0, 12)}: set DOCARA_SIMAI_UI_ROOT to a ui checkout holding that commit, or materialize the runtime (scripts/materialize-framework-runtime.php).`);
  process.exit(2);
}

// Declarations of the core, each with the rule (opening brace offset) it sits in.
const stripped = css.replace(/\/\*[\s\S]*?\*\//gu, (comment) => ' '.repeat(comment.length));
const declarations = [];
{
  const stack = [];
  const re = /[{}]|(--sf-[A-Za-z0-9_-]+)\s*:\s*([^;{}]*)/gu;
  for (let match; (match = re.exec(stripped));) {
    if (match[0] === '{') stack.push(match.index);
    else if (match[0] === '}') stack.pop();
    else declarations.push({name: match[1], value: match[2].trim(), rule: stack.at(-1) ?? -1});
  }
}
const declared = new Set(declarations.map((entry) => entry.name));

// Palettes: families of colour primitives over the tone ladder.
const PRIMITIVE = /^--sf-([a-z]+)-(\d+)$/u;
const LITERAL_COLOUR = /^(?:#[0-9a-f]{3,8}|(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\()/iu;
const families = new Map();
for (const entry of declarations) {
  const match = PRIMITIVE.exec(entry.name);
  if (!match) continue;
  const [, family, tone] = match;
  if (!families.has(family)) families.set(family, {tones: new Set(), values: [], rule: entry.rule});
  const record = families.get(family);
  record.tones.add(Number(tone));
  record.values.push(entry.value);
}
const literal = new Set([...families].filter(([, record]) => record.values.every((value) => LITERAL_COLOUR.test(value))).map(([family]) => family));
const isColour = (value) => LITERAL_COLOUR.test(value) || literal.has(/^var\(--sf-([a-z]+)-\d+\)$/u.exec(value)?.[1]);
const colourFamilies = [...families].filter(([, record]) => record.values.every(isColour));
// The tone ladder: the tone set most colour families share.
const ladderCount = new Map();
for (const [, record] of colourFamilies) {
  const key = [...record.tones].sort((a, b) => b - a).join(',');
  ladderCount.set(key, (ladderCount.get(key) ?? 0) + 1);
}
const ladder = new Set(([...ladderCount].sort((a, b) => b[1] - a[1])[0]?.[0] ?? '').split(',').filter(Boolean).map(Number));
const palettes = new Map(colourFamilies
  .filter(([, record]) => [...record.tones].filter((tone) => ladder.has(tone)).length * 2 > ladder.size)
  .map(([family, record]) => [family, {tones: [...record.tones].sort((a, b) => b - a), rule: record.rule}]));
if (palettes.size === 0) {
  console.error(`No palette primitives found in ${coreSource}: the core changed shape, update scripts/audit-palette-examples.mjs.`);
  process.exit(2);
}
const groups = new Map();
for (const [family, palette] of palettes) {
  if (!groups.has(palette.rule)) groups.set(palette.rule, []);
  groups.get(palette.rule).push(family);
}
// A group is named after the comment that opens its rule's layer, when it calls itself a palette.
const groupName = (rule, members) => {
  const before = css.slice(Math.max(0, rule - 600), rule);
  const comment = [...before.matchAll(/\/\*([\s\S]*?)\*\//gu)].at(-1)?.[1] ?? '';
  const named = /\b(static palette|theme palettes?)\b/iu.exec(comment)?.[1];
  return `${named ?? 'palette group'} (${members.join(', ')})`;
};
const hueClasses = new Set([...css.matchAll(/\.sf-hue-([a-z]+)(?![\w-])/gu)].map((match) => match[1]));

// The examples of the colour guide.
const walk = (dir, out = []) => {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (/\.(html|css|js)$/u.test(entry)) out.push(path);
  }
  return out;
};
const examples = [];
for (const file of readdirSync(resolve(root, PAGES_DIR)).filter((name) => name.endsWith('.md')).sort()) {
  const page = `${PAGES_DIR}/${file}`;
  const lines = readFileSync(resolve(root, page), 'utf8').split('\n');
  for (let index = 0; index < lines.length; index += 1) {
    const open = /^:::example\b(.*)$/u.exec(lines[index]);
    if (!open) continue;
    const label = /label="([^"]*)"/u.exec(open[1])?.[1] ?? `line ${index + 1}`;
    const id = /id="([^"]*)"/u.exec(open[1])?.[1];
    let end = index + 1;
    while (end < lines.length && lines[end].trim() !== ':::') end += 1;
    let text = lines.slice(index + 1, end).join('\n');
    if (id) text += '\n' + walk(resolve(root, 'examples', id)).map((path) => readFileSync(path, 'utf8')).join('\n');
    examples.push({where: `${page}:${index + 1} (example «${label}»${id ? `, examples/${id}` : ''})`, text});
    index = end;
  }
}

// The check.
const failures = [];
let tables = 0;
for (const example of examples) {
  const shown = new Map();
  const unknown = new Set();
  for (const match of example.text.matchAll(/--sf-([a-z]+)-(\d+)(?![\w\\/-])/gu)) {
    const [name, family, tone] = match;
    if (!declared.has(name)) {
      if (palettes.has(family) || ladder.has(Number(tone))) unknown.add(name);
      continue;
    }
    if (!palettes.has(family)) continue;
    if (!shown.has(family)) shown.set(family, new Set());
    shown.get(family).add(Number(tone));
  }
  const hues = new Set();
  for (const match of example.text.matchAll(/(?<![\w-])sf-hue-([a-z]+)(?![\w-])/gu)) {
    if (hueClasses.has(match[1])) hues.add(match[1]);
    else unknown.add(`sf-hue-${match[1]}`);
  }
  const problems = [];
  if (unknown.size) problems.push(`names the release does not define: ${[...unknown].sort().join(', ')}`);
  const ramps = [...shown].filter(([family, tones]) => tones.size * 2 >= palettes.get(family).tones.length);
  if (ramps.length) tables += 1;
  for (const [family, tones] of ramps) {
    const missing = palettes.get(family).tones.filter((tone) => !tones.has(tone));
    if (missing.length) problems.push(`palette ${family} misses ${missing.map((tone) => `--sf-${family}-${tone}`).join(', ')}`);
  }
  const listed = new Set([...ramps.map(([family]) => family), ...hues]);
  for (const [rule, members] of groups) {
    const present = members.filter((family) => listed.has(family));
    if (present.length * 2 <= members.length) continue;
    const absent = members.filter((family) => !listed.has(family));
    if (absent.length) problems.push(`${groupName(rule, members)} misses ${absent.join(', ')}`);
  }
  if (problems.length) failures.push(`${example.where}\n    ${problems.join('\n    ')}`);
}

const summary = [...groups].map(([rule, members]) => `${members.length} × ${palettes.get(members[0]).tones.length}`).join(' and ');
if (failures.length) {
  console.error(`Palette examples differ from the pinned release (${coreSource}; palettes ${summary}):\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`Palette examples match the pinned release: ${examples.length} examples, ${tables} palette tables, palettes ${summary} (${coreSource}).`);
