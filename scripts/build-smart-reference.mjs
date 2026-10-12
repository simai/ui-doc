#!/usr/bin/env node
// Generate the «Справочник API» section of every Smart component page from the
// manifests of the pinned release.
//
// The pages carried tables written once and then edited by hand: they named
// internal methods, lost attributes, kept an old release in their citations and
// said nothing about what an event carries. A docs-only trial (ui-control
// control/DOCS-TRIAL-2026-10-12.md) ranked that the first documentation gap. The
// manifest the release ships is the contract; this script renders it, and
// --check fails when a page differs from what the pinned release says.
//
// Sources, all read from git objects at the revisions the lock names, so the
// result does not depend on what is checked out:
//   - simai-framework.lock.json runtime.ui.commit — the ui release
//     (distr/smart/<folder>/smart.manifest.json, distr/rule/rule.json);
//   - contracts/releases/<pair>.lock.json build_inputs.source.commit — the
//     ui-source revision, for the change journal (old names and their removal);
//   - package_projections.<name>.receipt.package_source — each product package's
//     source (<path>/src/smart/<folder>/smart.manifest.json).
// Repositories are found beside this project (../ui, ../ui-source,
// ../<repository name>) or named with SIMAI_UI_REPO, SIMAI_UI_SOURCE_REPO and
// SIMAI_PACKAGE_REPO_<NAME> (absolute paths to git checkouts).
//
// Manifest text is English; the site is Russian. Every manifest string a page
// shows is looked up in config/smart-reference.ru.json. --check also fails when
// a string has no translation, and --missing prints the strings to translate.
//
// Usage: node scripts/build-smart-reference.mjs [--check | --missing]

import {execFileSync} from 'node:child_process';
import {existsSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {basename, dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const checkOnly = args.has('--check');
const listMissing = args.has('--missing');
const HEADING = '## Справочник API';

const readJson = (path) => JSON.parse(readFileSync(path, 'utf8'));
const lock = readJson(join(root, 'simai-framework.lock.json'));
const settings = readJson(join(root, 'config/smart-reference.json'));
const dictionaryPath = join(root, 'config/smart-reference.ru.json');
const dictionary = existsSync(dictionaryPath) ? readJson(dictionaryPath).strings : {};

const repository = (envName, name) => {
  const path = process.env[envName] || resolve(root, '..', name);
  if (!existsSync(join(path, '.git'))) {
    // A check where the sources are not checked out (CI without access to the
    // private ui-source) reports that it could not run, as the attribute-table
    // audit does, instead of failing a build that cannot satisfy it.
    if (checkOnly) {
      console.log(JSON.stringify({schema: 'ui-doc.smart_reference.v1', status: 'skipped_no_sources', missing: name}, null, 2));
      process.exit(0);
    }
    console.error(`${name}: no git checkout at ${path}; set ${envName}`);
    process.exit(2);
  }
  return path;
};
const show = (repo, revision, path) => {
  try {
    return execFileSync('git', ['-C', repo, 'show', `${revision}:${path}`], {encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore']});
  } catch {
    return null;
  }
};
const listTree = (repo, revision, path) => execFileSync(
  'git', ['-C', repo, 'ls-tree', '--name-only', `${revision}:${path}`], {encoding: 'utf8'},
).split('\n').filter(Boolean);

// ---- the release and its sources -------------------------------------------

const pair = lock.runtime.pair_id;
const uiCommit = lock.runtime.ui.commit;
const uiRepo = repository('SIMAI_UI_REPO', 'ui');
const releaseLock = JSON.parse(show(uiRepo, uiCommit, `contracts/releases/${pair}.lock.json`)
  ?? show(uiRepo, 'HEAD', `contracts/releases/${pair}.lock.json`)
  ?? 'null');
if (!releaseLock || releaseLock.compatibility_id !== pair) {
  console.error(`release lock ${pair} not found in ${uiRepo}`);
  process.exit(2);
}
const sourceCommit = releaseLock.build_inputs.source.commit;
const sourceRepo = repository('SIMAI_UI_SOURCE_REPO', 'ui-source');
const journal = JSON.parse(show(sourceRepo, sourceCommit, 'contracts/changes/journal.json') ?? '{"records":[]}');
const ruleNames = new Set(JSON.parse(show(uiRepo, uiCommit, 'distr/rule/rule.json') ?? '[]')
  .map((rule) => rule?.name).filter(Boolean));

// component folder -> {manifest, origin}
const components = new Map();
for (const folder of listTree(uiRepo, uiCommit, 'distr/smart')) {
  const text = show(uiRepo, uiCommit, `distr/smart/${folder}/smart.manifest.json`);
  if (!text) continue;
  components.set(folder, {
    manifest: JSON.parse(text),
    citation: `simai/ui@${uiCommit}:distr/smart/${folder}`,
    rule: ruleNames.has(`cl-${folder}`) ? `simai/ui@${uiCommit}:distr/rule/rule.json#name=cl-${folder}` : null,
    delivery: `выпуск Framework \`${pair}\``,
  });
}
for (const [name, projection] of Object.entries(lock.package_projections ?? {})) {
  const source = projection.receipt.package_source;
  const repoName = source.repository.split('/')[1];
  const repo = repository(`SIMAI_PACKAGE_REPO_${name.toUpperCase().replace(/[^A-Z0-9]/gu, '_')}`, repoName);
  const base = `${source.path ? `${source.path}/` : ''}src/smart`;
  for (const folder of listTree(repo, source.revision, base)) {
    const text = show(repo, source.revision, `${base}/${folder}/smart.manifest.json`);
    if (!text) continue;
    const citation = `${source.repository}@${source.revision}:${base}/${folder}`;
    components.set(folder, {
      manifest: JSON.parse(text),
      citation,
      rule: `${citation}/rule.js#name=cl-${folder}`,
      delivery: `пакет \`${name}\` (\`SF_BOOT_CONFIG.packages.${name}\`)`,
    });
  }
}

// ---- pages ------------------------------------------------------------------

const smartRoot = join(root, 'content/ru/smart-components');
const pageByName = new Map();
for (const group of readdirSync(smartRoot, {withFileTypes: true})) {
  if (!group.isDirectory()) continue;
  for (const file of readdirSync(join(smartRoot, group.name))) {
    if (file.endsWith('.md') && file !== 'index.md') pageByName.set(file.slice(0, -3), join(smartRoot, group.name, file));
  }
}
const pageFor = (folder) => {
  const named = settings.pages?.[folder];
  if (named) return join(smartRoot, named);
  return pageByName.get(folder) ?? pageByName.get(folder.replace(/s$/u, '')) ?? pageByName.get(`${folder}s`) ?? null;
};
const pages = new Map();
const unplaced = [];
for (const [folder, component] of [...components].sort(([a], [b]) => a.localeCompare(b))) {
  if ((settings.skip ?? []).includes(folder)) continue;
  const page = pageFor(folder);
  if (!page || !existsSync(page)) {
    unplaced.push(folder);
    continue;
  }
  const list = pages.get(page) ?? [];
  list.push([folder, component]);
  pages.set(page, list);
}

// ---- rendering --------------------------------------------------------------

const missing = new Set();
const ru = (text) => {
  if (text === undefined || text === null || text === '') return '';
  const value = dictionary[text];
  if (value === undefined) {
    missing.add(text);
    return text;
  }
  return value;
};
// A list item is not a table cell: the pipe needs no escape there.
const item = (text) => text.replace(/\\\|/gu, '|').replace(/\s*\n\s*/gu, ' ');
const cell = (text) => String(text).replace(/\|/gu, '\\|').replace(/\s*\n\s*/gu, ' ');
const code = (text) => `\`${String(text).replace(/\|/gu, '\\|')}\``;
const literal = (value) => {
  if (value === '') return 'пусто';
  if (typeof value === 'string') return code(value);
  return code(JSON.stringify(value));
};
// Generic text the manifest generator writes when a source says nothing: shown
// as a dash, because «Public runtime method open.» tells a reader no more than
// the name does.
const generic = (text) => !text
  || /^Public runtime method [\w$]+\.$/u.test(text)
  || /^Runtime event [\w:-]+\.$/u.test(text);

const typeName = (schema) => {
  if (!schema) return '—';
  if (schema.$ref) return code(schema.$ref.split('/').pop());
  const types = [schema.type].flat().filter(Boolean);
  if (schema.type === 'array' && schema.items) return `${code('array')} из ${typeName(schema.items)}`;
  return types.length ? types.map((type) => code(type)).join(' \\| ') : '—';
};
const values = (schema) => {
  const parts = [];
  if (schema.enum) parts.push(schema.enum.map(literal).join(', '));
  if (schema.const !== undefined) parts.push(literal(schema.const));
  if (schema.minimum !== undefined) parts.push(`от ${schema.minimum}`);
  if (schema.maximum !== undefined) parts.push(`до ${schema.maximum}`);
  if (schema.minLength !== undefined) parts.push(`не короче ${schema.minLength}`);
  if (schema.pattern) parts.push(`шаблон ${code(schema.pattern)}`);
  return parts.join('; ') || '—';
};
const resolveRef = (manifest, schema) => {
  if (!schema?.$ref?.startsWith('#/')) return schema;
  return schema.$ref.slice(2).split('/').reduce((node, key) => node?.[key], manifest) ?? schema;
};
// The shape of an event's detail in one line: the keys and their types, or a
// plain «не описан» when the manifest only says «an object».
const shape = (manifest, payload) => {
  const schema = resolveRef(manifest, payload);
  if (!schema) return 'не описан';
  if (schema.properties) {
    const required = new Set(schema.required ?? []);
    const keys = Object.entries(schema.properties).map(([key, value]) => {
      const inner = resolveRef(manifest, value);
      const type = [inner?.type].flat().filter(Boolean).join('|') || (inner?.$ref ? inner.$ref.split('/').pop() : 'any');
      return `${key}${required.has(key) ? '' : '?'}: ${type}`;
    });
    return code(`{ ${keys.join(', ')} }`);
  }
  if (schema.type && schema.type !== 'object') return typeName(schema);
  return 'не описан';
};

const LIFECYCLE = {
  experimental: 'экспериментальный: API может меняться между выпусками',
  stable: 'стабильный',
  deprecated: 'устаревший: замените до удаления',
  internal: 'внутренний: не для прямого использования',
};
const READINESS = {
  described: 'описан: манифест и сценарий есть, продуктовой приёмки нет',
  runnable: 'работает в сценарии студии, продуктовой приёмки нет',
  verified: 'проверен приёмкой',
  accepted: 'принят в продукт',
};
const NAME_RULE = {required: 'обязательно', optional: 'необязательно', none: 'не нужно', inherited: 'наследуется от содержимого'};

// A journal item names its component, or names only an attribute when the rename
// holds for every component that has it (`status="danger"` became `error`).
const legacyFor = (tag, inputs) => journal.records
  .filter((record) => ['attribute', 'value'].includes(record.kind))
  .flatMap((record) => (record.items ?? [])
    .filter((item) => item.from && item.to
      && (item.component === tag || (!item.component && item.attribute && item.attribute in inputs)))
    .map((item) => ({record, item})));
// Properties whose name is not the attribute in camelCase (read from the
// components' static props; `template` → `templateName` holds for all).
const PROPERTY_EXCEPTIONS = {'list-item': {value: 'itemValue'}};
const AXES = ['status', 'appearance', 'kind'];
const LEGACY_WORDS = ['type', 'variant'];
const STAGE = {compat: 'работает и предупреждает', removed: 'удалено'};

const renderComponent = (folder, {manifest, citation, rule, delivery}, single) => {
  const tag = manifest.custom_element;
  const lines = [];
  const h = single ? '###' : '####';
  if (!single) lines.push(`### \`<${tag}>\``, '');
  lines.push(
    '| | |',
    '|:---|:---|',
    `| Тег | ${code(`<${tag}>`)} |`,
    `| Назначение | ${cell(ru(manifest.summary) || '—')} |`,
    `| Контракт | ${code(manifest.id)}, версия ${code(manifest.version)} |`,
    `| Поставка | ${delivery} |`,
    `| Жизненный цикл | ${LIFECYCLE[manifest.lifecycle] ?? code(manifest.lifecycle)} |`,
    `| Готовность | ${READINESS[manifest.readiness?.level] ?? code(manifest.readiness?.level ?? '—')} |`,
    '',
  );

  const inputs = Object.entries(manifest.inputs?.properties ?? {});
  const legacy = legacyFor(tag, manifest.inputs?.properties ?? {});
  const legacyNames = new Set(legacy.filter(({record}) => record.kind === 'attribute').map(({item}) => item.from));
  // `type` and `variant` beside a named axis are the words the axes replaced
  // (scripts/audit-smart-attribute-tables.mjs holds the same rule), whether or
  // not the journal lists this component.
  const hasAxis = inputs.some(([name]) => AXES.includes(name));
  const unlisted = inputs.map(([name]) => name)
    .filter((name) => hasAxis && LEGACY_WORDS.includes(name) && !legacyNames.has(name));
  const current = inputs.filter(([name]) => !legacyNames.has(name) && !unlisted.includes(name));
  lines.push(`${h} Атрибуты`, '');
  if (current.length === 0) {
    lines.push('Атрибутов нет.', '');
  } else {
    // A list, not a table: five columns squeeze a code value to a letter a
    // line on any width a reader has; MDN lists attributes the same way.
    for (const [name, schema] of current) {
      const facts = [typeName(schema)];
      if (schema.default !== undefined) facts.push(`по умолчанию ${literal(schema.default)}`);
      if (values(schema) !== '—') facts.push(`значения: ${values(schema)}`);
      if (schema.examples) facts.push(`например ${schema.examples.map(literal).join(', ')}`);
      const purpose = ru(schema.description);
      lines.push(item(`- ${code(name)} — ${facts.join(', ')}.${purpose ? ` ${purpose}` : ''}`));
    }
    lines.push('');
    for (const [attribute, property] of Object.entries(PROPERTY_EXCEPTIONS[folder] ?? {})) {
      lines.push(`Свойство атрибута ${code(attribute)} называется ${code(property)}.`, '');
    }
  }
  // The current name leads each row: a row that starts with an old name reads
  // as a public attribute.
  if (legacy.length || unlisted.length) {
    lines.push('Прежние имена:', '', '| Имя | Прежнее имя | Состояние | Убирается после |', '|:---|:---|:---|:---|');
    for (const {record, item} of legacy) {
      const from = item.attribute ? `${item.attribute}="${item.from}"` : item.from;
      const to = item.attribute ? `${item.attribute}="${item.to}"` : item.to;
      lines.push(`| ${code(to)} | ${code(from)} | ${STAGE[record.stage] ?? record.stage} | ${record.remove_after ?? '—'} |`);
    }
    for (const name of unlisted) {
      lines.push(`| ${AXES.filter((axis) => inputs.some(([input]) => input === axis)).map(code).join(', ')} | ${code(name)} | принимается для совместимости | — |`);
    }
    lines.push('');
  }

  const methods = Object.entries(manifest.methods ?? {});
  lines.push(`${h} Методы`, '');
  if (methods.length === 0) {
    lines.push('Публичных методов нет.', '');
  } else {
    for (const [name, method] of methods) {
      const argumentList = (method.arguments ?? []).map((argument) => (typeof argument === 'string'
        ? argument
        : `${argument.name}${argument.required === false ? '?' : ''}: ${[argument.type ?? argument.schema?.type].flat().filter(Boolean).join('|') || 'any'}`));
      // The manifest generator writes object|boolean|null when the source does
      // not say; that is «unknown», not three possibilities, and is left out.
      const unknown = JSON.stringify(method.returns?.type) === '["object","boolean","null"]';
      const parts = [];
      if (method.returns && !unknown) parts.push(`возвращает ${typeName(method.returns)}.`);
      if (!generic(method.summary)) parts.push(ru(method.summary));
      lines.push(item(`- ${code(`${name}(${argumentList.join(', ')})`)}${parts.length ? ` — ${parts.join(' ')}` : ''}`));
    }
    lines.push('');
  }

  const events = Object.entries(manifest.events ?? {});
  lines.push(`${h} События`, '');
  if (events.length === 0) {
    lines.push('Своих событий нет; общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).', '');
  } else {
    lines.push('Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).', '');
    for (const [name, event] of events) {
      // Both names carry one detail; when only the alias declares its shape,
      // the name to bind shows it too.
      const alias = events.find(([, other]) => other.alias_of === name && shape(manifest, other.payload) !== 'не описан');
      const detail = shape(manifest, event.payload) === 'не описан' && alias ? shape(manifest, alias[1].payload) : shape(manifest, event.payload);
      const when = event.alias_of
        ? `устаревший псевдоним события ${code(event.alias_of)}: приходит с тем же \`detail\`, подписывайтесь на ${code(event.alias_of)}.`
        : (generic(event.summary) ? '' : ru(event.summary));
      const detailText = detail === 'не описан' ? '`detail` не описан.' : `\`detail\`: ${detail}.`;
      lines.push(item(`- ${code(name)} — ${event.alias_of ? when : `${detailText}${when ? ` ${when}` : ''}`}`));
    }
    lines.push('');
  }

  // A section a manifest is known to get wrong is left out until the manifest
  // is fixed (config/smart-reference.json `suppress`, with the reason).
  const suppressed = new Set(settings.suppress?.[folder]?.sections ?? []);
  const access = suppressed.has('accessibility') ? {} : (manifest.accessibility ?? {});
  if (access.role || access.keyboard || access.focus) {
    lines.push(`${h} Доступность`, '');
    if (access.role) lines.push(`- Роль: ${ru(access.role)}.`);
    if (access.accessible_name) lines.push(`- Доступное имя: ${NAME_RULE[access.accessible_name] ?? ru(access.accessible_name)}.`);
    if (Array.isArray(access.keyboard) && access.keyboard.length) lines.push(`- Клавиши: ${access.keyboard.map(code).join(', ')}.`);
    else if (typeof access.keyboard === 'string' && access.keyboard) lines.push(`- Клавиатура: ${ru(access.keyboard)}`);
    if (access.focus) lines.push(`- Фокус: ${ru(access.focus)}`);
    lines.push('');
  }

  // An example that does not use the component's own tag was copied from
  // another manifest; showing it would teach the wrong element.
  const example = manifest.ai_guidance?.minimal_example;
  if (example && example.includes(`<${tag}`)) lines.push(`${h} Минимальная разметка`, '', '```html', example.trim(), '```', '');

  lines.push(`${h} Источник`, '', `- \`${citation}\``);
  if (rule) lines.push(`- \`${rule}\``);
  lines.push('');
  return lines;
};

const renderSection = (entries) => {
  const lines = [
    HEADING,
    '',
    `Раздел собран из манифеста ${entries.length > 1 ? 'компонентов' : 'компонента'} выпуска ${code(pair)}`
      + ' и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.',
    '',
    'Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase:'
      + ' `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.',
    '',
  ];
  for (const [folder, component] of entries) lines.push(...renderComponent(folder, component, entries.length === 1));
  return `${lines.join('\n').replace(/\n+$/u, '')}\n`;
};

// ---- the hand-made sections this section replaces ----------------------------

// A section is dropped only when it is the old generated shape, recognised by
// its content, never by its heading alone: a lesson's own «## События» stays.
const LEGACY = {
  'Теги и подключение': (body) => /Custom Elements?:|Публичный Custom Element/u.test(body),
  'Зависимости': (body) => body.split('\n').filter((line) => line.trim()).every((line) => /^- `[a-z]+\.[a-z0-9-]+`$/u.test(line.trim())),
  'Атрибуты и свойства': (body) => body.includes('| Атрибут | Свойство |'),
  'Методы': (body) => /^`[^`]+\(\)`(, `[^`]+\(\)`)*\.?$/mu.test(body.trim())
    || body.trim().startsWith('Отдельный публичный метод в source-классе не подтверждён'),
  'События': (body) => body.includes('| `sf-connected` |'),
  'Минимальная разметка': (body) => /^```html\n<sf-[a-z-]+><\/sf-[a-z-]+>\n```$/u.test(body.trim()),
  'Источник': (body) => body.split('\n').filter((line) => line.trim()).every((line) => /^- `simai\/[^`]+`$/u.test(line.trim())),
};
const IDENTIFIER = /^Идентификатор: `[^`]+`\.[^\n]*\n\n/mu;

const rewrite = (text, entries) => {
  const at = text.indexOf(`\n${HEADING}\n`);
  let body = at === -1 ? text : text.slice(0, at + 1);
  body = body.replace(IDENTIFIER, '');
  const parts = body.split(/^(?=## )/mu);
  const kept = parts.filter((part) => {
    const match = part.match(/^## (.+)\n([\s\S]*)$/u);
    if (!match) return true;
    const test = LEGACY[match[1].trim()];
    return !(test && test(match[2]));
  });
  body = kept.join('').replace(/\n+$/u, '');
  return `${body}\n\n${renderSection(entries)}`;
};

const changed = [];
for (const [page, entries] of [...pages].sort(([a], [b]) => a.localeCompare(b))) {
  const current = readFileSync(page, 'utf8');
  const expected = rewrite(current, entries);
  if (expected === current) continue;
  changed.push(relative(root, page));
  if (!checkOnly && !listMissing) writeFileSync(page, expected);
}

if (listMissing) {
  console.log(JSON.stringify([...missing].sort(), null, 2));
  process.exit(0);
}
const result = {
  schema: 'ui-doc.smart_reference.v1',
  release: pair,
  status: changed.length === 0 && missing.size === 0 && unplaced.length === 0 ? 'pass' : (checkOnly ? 'needs_revision' : 'written'),
  pages: pages.size,
  components: [...pages.values()].reduce((sum, list) => sum + list.length, 0),
  changed,
  untranslated: missing.size,
  unplaced,
};
console.log(JSON.stringify(result, null, 2));
if (checkOnly && result.status !== 'pass') process.exit(1);
if (!checkOnly && (missing.size > 0 || unplaced.length > 0)) process.exit(1);
