#!/usr/bin/env node
// Every catalogue group answers at its own address.
//
// /ru/components/actions/ returned 404 while every page under it returned 200:
// the group was a directory with pages and no index, so the navigation could
// reach the leaves and nothing could reach the branch. Sixteen groups were in
// that state and the reachability audit carried them as named debt.
//
// The lines are not written here. The catalogue's own index already lists every
// page under a heading that matches the group's section title, each with a
// curated one-line description; a group index is that heading's slice. Writing
// them again by hand would be two descriptions per component, drifting apart
// from the first edit onwards.
//
// --check regenerates and compares, so a page added to a catalogue without a
// line in its index fails the build rather than going missing from the group.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const content = join(root, 'content/ru');
const CATALOGUES = ['components', 'smart-components'];
const check = process.argv.includes('--check');

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));

// The frontmatter block, then the body.
const frontmatter = (text) => {
  const match = /^---\n([\s\S]*?)\n---\n/u.exec(text);
  if (!match) throw new Error('no frontmatter');
  const field = (name) => {
    const found = new RegExp(`^${name}:\\s*"(.*)"\\s*$`, 'mu').exec(match[1]);
    return found ? found[1] : null;
  };
  return { title: field('title'), description: field('description') };
};

const problems = [];
const written = [];

for (const catalogue of CATALOGUES) {
  const catalogueDir = join(content, catalogue);
  const index = readFileSync(join(catalogueDir, 'index.md'), 'utf8');

  // Split the catalogue index into its `## heading` blocks.
  const blocks = new Map();
  let heading = null;
  for (const line of index.split('\n')) {
    const found = /^##\s+(.+?)\s*$/u.exec(line);
    if (found) { heading = found[1]; blocks.set(heading, []); continue; }
    if (heading) blocks.get(heading).push(line);
  }

  for (const entry of readdirSync(catalogueDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const groupDir = join(catalogueDir, entry.name);
    const sectionPath = join(groupDir, 'section.json');
    if (!existsSync(sectionPath)) { problems.push(`${catalogue}/${entry.name}: no section.json`); continue; }
    const section = readJson(sectionPath);
    const block = blocks.get(section.title);
    if (!block) { problems.push(`${catalogue}/${entry.name}: the catalogue index has no "## ${section.title}"`); continue; }

    const prefix = `/ru/${catalogue}/${entry.name}/`;
    const lines = block.filter((line) => line.startsWith('- ') && line.includes(prefix));
    const linked = new Set(
      lines.flatMap((line) => [...line.matchAll(new RegExp(`${prefix}([a-z0-9-]+)/`, 'gu'))].map(([, slug]) => slug)),
    );
    const pages = readdirSync(groupDir)
      .filter((file) => file.endsWith('.md') && file !== 'index.md')
      .map((file) => file.slice(0, -3));
    const missing = pages.filter((slug) => !linked.has(slug));
    if (missing.length) {
      problems.push(`${catalogue}/${entry.name}: the catalogue index does not list ${missing.join(', ')}`);
      continue;
    }

    // The smart catalogue lists bare links with no descriptions, so a group
    // index built from its slice alone would be seven words and nothing else.
    // A line without a description takes the page's own, which is the sentence
    // that page already answers to.
    const ownDescription = (line) => {
      const slug = new RegExp(`${prefix}([a-z0-9-]+)/`, 'u').exec(line)?.[1];
      if (!slug) return null;
      return frontmatter(readFileSync(join(groupDir, `${slug}.md`), 'utf8')).description;
    };
    // Most smart pages answer to the same generated sentence -- "Атрибуты,
    // события и примеры Smart-компонента <name>" -- and a column of it under
    // the links tells a reader less than the links alone. A description is
    // carried over only if it is that page's own: strip the component name and
    // a sentence shared with a sibling is boilerplate, not a description.
    const shape = (line) => (ownDescription(line) ?? '').replace(/[A-Za-z][A-Za-z0-9-]*/gu, '·');
    const seen = new Map();
    for (const line of lines) {
      if (line.includes(' — ')) continue;
      const key = shape(line);
      seen.set(key, (seen.get(key) ?? 0) + 1);
    }
    const described = lines.map((line) => {
      if (line.includes(' — ')) return line;
      if ((seen.get(shape(line)) ?? 0) > 1) return line;
      const own = ownDescription(line);
      return own ? `${line} — ${own.replace(/\.$/u, '')}.` : line;
    });

    // The group's own one-liner says how many of what, and nothing a reader
    // could not have counted.
    const noun = catalogue === 'components' ? 'компонент' : 'смарт-компонент';
    const plural = pages.length % 10 === 1 && pages.length % 100 !== 11 ? noun : `${noun}ов`;
    const page = `---
title: "${section.title}"
description: "${section.title} — ${pages.length} ${plural} SIMAI Framework."
profile: reference
---

# ${section.title}

${described.join('\n')}
`;
    const meta = `${JSON.stringify({
      schema: 'docara.page.v1',
      navigation: { order: section.navigation?.order ?? 10 },
    }, null, 2)}\n`;

    for (const [path, body] of [[join(groupDir, 'index.md'), page], [join(groupDir, 'index.page.json'), meta]]) {
      const current = existsSync(path) ? readFileSync(path, 'utf8') : null;
      if (current === body) continue;
      if (check) { problems.push(`${path.slice(content.length + 1)} is out of date`); continue; }
      writeFileSync(path, body);
      written.push(path.slice(content.length + 1));
    }
  }
}

if (problems.length) {
  for (const problem of problems) process.stderr.write(`${problem}\n`);
  process.exit(1);
}
process.stdout.write(check ? 'every catalogue group index is current\n' : `${written.length} file(s) written\n`);
