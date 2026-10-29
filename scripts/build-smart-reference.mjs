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
// The axis register says which legacy inputs are not retired but keep their own
// meaning (badge `scheme` still picks a colour; only its status words moved).
const axes = JSON.parse(show(sourceRepo, sourceCommit, 'contracts/public-api-axes.json') ?? '{"components":[]}');
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
const STAGE = {compat: 'работает, отмечается в `SF.deprecations`', removed: 'удалено'};
// A legacy input that stays its own axis: only some of its values moved.
const staysOwnAxis = (folder, from, to) => (axes.components ?? []).some((entry) => entry.component === folder
  && entry.axis === to && (entry.legacy ?? []).includes(from) && entry.legacy_input_remains_its_own_axis === true);
// The values an attribute rename maps, read from the journal's class records of
// the same rename (`tightness-low` → `spacing-compact` is `tightness="low"` →
// `spacing="compact"`); the attribute record states the mapping only in prose.
const valueMap = (from, to, inputs) => {
  const oldValues = inputs[from]?.enum;
  const pairs = new Map();
  for (const record of journal.records.filter((entry) => entry.kind === 'class')) {
    for (const item of record.items ?? []) {
      if (!item.from?.startsWith(`${from}-`) || !item.to?.startsWith(`${to}-`)) continue;
      const before = item.from.slice(from.length + 1);
      const after = item.to.slice(to.length + 1);
      if (oldValues && !oldValues.includes(before)) continue;
      if (inputs[to]?.enum && !inputs[to].enum.includes(after)) continue;
      pairs.set(before, after);
    }
  }
  return [...pairs];
};

// The person's view the component keeps (manifest persistence.view_preference,
// schema 2.5.0): its key, version and fields. The same table is shown in the
// component's reference and in the view-preferences guide.
const viewPreferenceTable = (preference) => {
  const lines = [
    `Ключ ${code(preference.key)}${preference.general_key ? `, общий для всех элементов этого вида — ${code(preference.general_key)}` : ''}; версия формата — \`v: ${preference.v}\`.`
      + ' В столбце «Для первой отрисовки» «да» значит, что сервер может положить поле в блок `data-sf-preferences` страницы.',
    '',
    '| Поле | Тип | Пишет | Для первой отрисовки | Что в нём |',
    '|:---|:---|:---|:---|:---|',
  ];
  for (const [name, field] of Object.entries(preference.fields ?? {})) {
    const writers = (field.written_by ?? []).map((writer) => code(writer)).join(', ') || '—';
    lines.push(`| ${code(name)} | ${code(field.type)} | ${writers} | ${field.seed ? 'да' : 'нет'} | ${cell(ru(field.description))} |`);
  }
  lines.push('');
  return lines;
};

// The shape the element holds before its code (manifest presentation.skeleton):
// the data-sf-skeleton value the server writes, and whether the component
// draws a skeleton of its own while it waits for data.
const SKELETON_SHAPES = ['rows', 'record', 'menu', 'block', 'line', 'none'];
const skeletonText = (skeleton) => (skeleton.shape === 'none'
  ? 'нет: атрибут `data-sf-skeleton` не пишется; '
  : `сервер пишет ${code(`data-sf-skeleton="${skeleton.shape}"`)}; `)
  + (skeleton.while_loading === 'template' ? 'пока ждёт данные, рисует свой скелетон' : 'своего скелетона при загрузке данных нет')
  + ' ([Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода))';

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
    `| [Жизненный цикл](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | ${LIFECYCLE[manifest.lifecycle] ?? code(manifest.lifecycle)} |`,
    `| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | ${READINESS[manifest.readiness?.level] ?? code(manifest.readiness?.level ?? '—')} |`,
    ...(manifest.presentation?.skeleton ? [`| Заготовка до прихода кода | ${skeletonText(manifest.presentation.skeleton)} |`] : []),
    '',
  );

  const inputs = Object.entries(manifest.inputs?.properties ?? {});
  const legacy = legacyFor(tag, manifest.inputs?.properties ?? {});
  const ownAxis = new Set(legacy
    .filter(({record, item}) => record.kind === 'attribute' && staysOwnAxis(folder, item.from, item.to))
    .map(({item}) => item.from));
  const legacyNames = new Set(legacy
    .filter(({record, item}) => record.kind === 'attribute' && !ownAxis.has(item.from))
    .map(({item}) => item.from));
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
    // The journal can hold one rename twice (in a component's record and in
    // the record for every component); the table names it once.
    const rows = new Set();
    const properties = manifest.inputs?.properties ?? {};
    for (const {record, item} of legacy) {
      const from = item.attribute ? `${item.attribute}="${item.from}"` : item.from;
      const stage = `${STAGE[record.stage] ?? record.stage} | ${record.remove_after ?? '—'}`;
      if (record.kind === 'attribute' && ownAxis.has(item.from)) {
        // Only the new axis's words moved; the old attribute keeps its own values.
        const words = (properties[item.to]?.enum ?? []).filter((value) => value !== '');
        const which = words.length ? ` — только значения ${words.map(code).join(', ')}` : '';
        rows.add(`| ${code(item.to)} | ${code(item.from)}${which} | ${stage} |`);
        continue;
      }
      const to = item.attribute ? `${item.attribute}="${item.to}"` : item.to;
      rows.add(`| ${code(to)} | ${code(from)} | ${stage} |`);
      if (record.kind === 'attribute' && !item.attribute) {
        for (const [before, after] of valueMap(item.from, item.to, properties)) {
          rows.add(`| ${code(`${item.to}="${after}"`)} | ${code(`${item.from}="${before}"`)} | ${stage} |`);
        }
      }
    }
    lines.push(...rows);
    for (const name of unlisted) {
      lines.push(`| ${AXES.filter((axis) => inputs.some(([input]) => input === axis)).map(code).join(', ')} | ${code(name)} | принимается для совместимости | — |`);
    }
    lines.push('');
  }

  // What a node of this component takes in a layout document, when the
  // manifest declares it (composition.declarative).
  const declarative = manifest.composition?.declarative;
  if (declarative?.type && (declarative.props?.length || Object.keys(declarative.data ?? {}).length)) {
    lines.push(`${h} Свойства в документе макета`, '');
    const standard = declarative.standard ? ` (${code(declarative.standard)})` : '';
    lines.push(`Узел типа ${code(declarative.type)} в [документе макета](/ru/guide/layouts/building/smart-component/)${standard} принимает:`, '');
    if (declarative.props?.length) lines.push(item(`- свойства: ${declarative.props.map(code).join(', ')};`));
    const data = Object.keys(declarative.data ?? {});
    if (data.length) lines.push(item(`- данные: ${data.map(code).join(', ')};`));
    lines[lines.length - 1] = lines[lines.length - 1].replace(/;$/u, '.');
    lines.push('', 'Значения свойств те же, что у одноимённых атрибутов, и того же типа, что в списке атрибутов: строковое значение пишется строкой (`"size": "1"`, а не `1` — число отклоняется с диагностикой `schema_enum` или `schema_type`), логическое — `true` или `false`.', '');
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
    lines.push('Своих событий нет; общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).', '');
  } else {
    lines.push('Все события приходят на сам элемент и всплывают. Общие события базового элемента перечислены в главе [Модель компонента → Базовый интерфейс](/ru/guide/smart-components/model/#базовый-интерфейс).', '');
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

  const preference = manifest.persistence?.view_preference;
  if (preference) {
    lines.push(`${h} Персональный вид`, '', ...viewPreferenceTable(preference));
  }

  // A section a manifest is known to get wrong is left out until the manifest
  // is fixed (config/smart-reference.json `suppress`, with the reason).
  const suppressed = new Set(settings.suppress?.[folder]?.sections ?? []);
  const access = suppressed.has('accessibility') ? {} : (manifest.accessibility ?? {});
  if (access.role || access.keyboard || access.focus) {
    lines.push(`${h} Доступность`, '');
    if (access.role) lines.push(`- Роль: ${ru(access.role)}.`);
    if (access.accessible_name) lines.push(`- Доступное имя: ${NAME_RULE[access.accessible_name] ?? ru(access.accessible_name)}.`);
    // A key name is code; a phrase about keys is text and is translated.
    const key = (entry) => (dictionary[entry] === undefined && /^[A-Z][A-Za-z0-9]*(\+[A-Za-z0-9]+)*$/u.test(entry) ? code(entry) : ru(entry));
    if (Array.isArray(access.keyboard) && access.keyboard.length) lines.push(`- Клавиши: ${access.keyboard.map(key).join(', ')}.`);
    else if (typeof access.keyboard === 'string' && access.keyboard) lines.push(`- Клавиатура: ${ru(access.keyboard)}`);
    if (access.focus) lines.push(`- Фокус: ${ru(access.focus)}`);
    lines.push('');
  }

  // An example that does not use the component's own tag was copied from
  // another manifest; showing it would teach the wrong element.
  const example = manifest.ai_guidance?.minimal_example;
  // A Russian version of the example, when the dictionary has one, so its
  // words match the page; otherwise the manifest's own.
  if (example && example.includes(`<${tag}`)) lines.push(`${h} Минимальная разметка`, '', '```html', (dictionary[example] ?? example).trim(), '```', '');

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
  // What follows the generated section (the standard's «См. также») stays.
  const next = at === -1 ? -1 : text.indexOf('\n## ', at + HEADING.length + 1);
  const tail = next === -1 ? '' : text.slice(next + 1);
  body = body.replace(IDENTIFIER, '');
  const parts = body.split(/^(?=## )/mu);
  const kept = parts.filter((part) => {
    const match = part.match(/^## (.+)\n([\s\S]*)$/u);
    if (!match) return true;
    const test = LEGACY[match[1].trim()];
    return !(test && test(match[2]));
  });
  body = kept.join('').replace(/\n+$/u, '');
  return `${body}\n\n${renderSection(entries)}${tail ? `\n${tail.replace(/\n*$/u, '\n')}` : ''}`;
};

const changed = [];
for (const [page, entries] of [...pages].sort(([a], [b]) => a.localeCompare(b))) {
  const current = readFileSync(page, 'utf8');
  const expected = rewrite(current, entries);
  if (expected === current) continue;
  changed.push(relative(root, page));
  if (!checkOnly && !listMissing) writeFileSync(page, expected);
}

// A guide page may hold one section this script writes: from its heading to
// the next heading of the same or a higher level. The rest of the page is
// written by hand.
const writeGuideSection = (page, heading, body) => {
  const path = join(root, page);
  const current = readFileSync(path, 'utf8');
  const begin = current.indexOf(`\n${heading}\n`);
  if (begin < 0) {
    console.error(`${heading} not found in ${page}`);
    process.exit(2);
  }
  const level = heading.match(/^#+/u)[0].length;
  const after = begin + 1 + heading.length + 1;
  const rest = current.slice(after);
  const match = rest.match(new RegExp(`^#{1,${level}} `, 'mu'));
  const end = match ? after + match.index : current.length;
  const section = [heading, '', ...body].join('\n').replace(/\n+$/u, '');
  const expected = `${current.slice(0, begin + 1)}${section}\n${match ? `\n${current.slice(end)}` : ''}`;
  if (expected !== current) {
    changed.push(page);
    if (!checkOnly && !listMissing) writeFileSync(path, expected);
  }
};
const byTag = (list) => list.sort(([, a], [, b]) => a.manifest.custom_element.localeCompare(b.manifest.custom_element));
const releaseLine = 'Раздел собран из манифестов выпуска ' + code(pair) + ' и пакетов и обновляется вместе с ними.';

// The view-preferences guide quotes every declared view preference.
{
  const body = [releaseLine + ' Поля объявляет `persistence.view_preference`.', ''];
  for (const [, {manifest}] of byTag([...components].filter(([, {manifest}]) => manifest.persistence?.view_preference))) {
    body.push(`### \`<${manifest.custom_element}>\``, '', ...viewPreferenceTable(manifest.persistence.view_preference));
  }
  writeGuideSection('content/ru/guide/smart-components/view-preferences.md', '## Поля значения', body);
}

// The JavaScript API guide lists every global the release declares on
// window.SF (core/contracts/public-js-api.json, schema
// simai.framework.public-js-api): the public ones with what they are, where
// they come from and their members; the internal ones by name only.
{
  const text = show(uiRepo, uiCommit, 'distr/core/contracts/public-js-api.json');
  if (text) {
    const contract = JSON.parse(text);
    const KIND = {object: 'объект', function: 'функция', value: 'значение', class: 'класс'};
    const origin = (loadedBy) => {
      if (loadedBy === 'core') return 'ядро, сразу после `core.js`';
      if (loadedBy === 'core-loader') return 'Loader, после `sf-loader-init`';
      if (loadedBy === 'smart-base') return 'основа Smart-компонентов';
      const [layer, name] = String(loadedBy).split('/');
      if (layer === 'component') return `компонент ${code(name)}`;
      if (layer === 'smart') return `Smart-компонент ${code(`sf-${name}`)}`;
      return code(loadedBy);
    };
    const byName = (a, b) => a.name.localeCompare(b.name);
    const publicGlobals = contract.globals.filter((item) => item.status === 'public').sort(byName);
    const internalGlobals = contract.globals.filter((item) => item.status !== 'public').sort(byName);
    const body = [
      'Раздел собран из контракта выпуска ' + code(pair) + ' (`core/contracts/public-js-api.json`, формат `simai.framework.public-js-api`) и обновляется вместе с выпуском.',
      '',
      `Публичные имена (${publicGlobals.length}) сохраняют смысл; переименовать или убрать такое имя можно только через журнал изменений, как атрибут. Когда имя появляется на странице, говорит столбец «Откуда»: имя компонента приходит вместе с его кодом.`,
      '',
      '| Имя | Вид | Откуда | Что это | Члены |',
      '|:---|:---|:---|:---|:---|',
      ...publicGlobals.map((item) => `| ${code(item.name)} | ${KIND[item.kind] ?? code(item.kind)} | ${origin(item.loaded_by)} | ${cell(ru(item.summary))} | ${(item.members ?? []).map((member) => code(member)).join(', ') || '—'} |`),
      '',
      `Внутренние имена (${internalGlobals.length}) принадлежат среде выполнения и могут измениться в любом выпуске; страница их не вызывает: ${internalGlobals.map((item) => code(item.name)).join(', ')}.`,
      '',
    ];
    writeGuideSection('content/ru/guide/connection/js-api.md', '## Глобальные объекты', body);
  }
}

// The first-paint guide lists every component by the shape it declares.
{
  const body = [releaseLine + ' Форму объявляет `presentation.skeleton.shape`, свой скелетон при загрузке данных — `while_loading: template`.', '',
    '| Форма | Компоненты |', '|:---|:---|'];
  const declared = byTag([...components].filter(([, {manifest}]) => manifest.presentation?.skeleton));
  for (const shape of SKELETON_SHAPES) {
    const tags = declared.filter(([, {manifest}]) => manifest.presentation.skeleton.shape === shape)
      .map(([, {manifest}]) => `${code(`<${manifest.custom_element}>`)}${manifest.presentation.skeleton.while_loading === 'template' ? ' (свой скелетон)' : ''}`);
    if (tags.length) body.push(`| ${code(shape)} | ${tags.join(', ')} |`);
  }
  const undeclared = byTag([...components].filter(([, {manifest}]) => !manifest.presentation?.skeleton)).map(([, {manifest}]) => code(`<${manifest.custom_element}>`));
  if (undeclared.length) body.push('', `Формы не объявляют: ${undeclared.join(', ')}.`);
  body.push('');
  writeGuideSection('content/ru/guide/smart-components/first-paint.md', '### Формы компонентов', body);
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
