# Workflow: единая структура новой документации SIMAI Framework

Дата: 2026-07-24
Статус: completed

## Track

- Track ID: `simai-framework-russian-documentation`.
- Final outcome: единая полная русская документация SIMAI Framework без
  legacy-дублей и неподтверждённых контрактов.
- Current goal: очистить структуру «Основ» и загрузчика.

## Goal

Убрать из русской документации концепцию архивных страниц и оставить только
единую актуальную структуру с полезным, проверенным по исходникам содержанием.

## Current Goal

Консолидировать полезное содержание, удалить 137 legacy-файлов и архивный
баннер, затем доказать целостность новой структуры production-сборкой.

## Done When

- общий шаблон не содержит архивных предупреждений и внутренних терминов;
- в «Основах» нет дублирующих деревьев `concept`, `color`, `break-points`,
  `themes`, `typography` и `variables`;
- полезное содержание этих деревьев покрыто актуальными страницами верхнего
  уровня;
- раздел загрузчика содержит одну актуальную source-backed страницу вместо
  неподтверждённых frontend/backend/API-описаний;
- удалённые URL не сохраняются редиректами;
- меню, сборка, Markdown и все оставшиеся внутренние ссылки проходят проверки;
- локальный `ui-doc.test` показывает проверенную сборку;
- GitHub и production не изменяются.

## Launch record

- Primary owner: Docara — структура, навигация и статическая сборка.
- Delivery owner: dev — изменения репозитория и гигиена.
- Safety owner: ops — инвентаризация, backup и rollback удаления.
- Acceptance owner: tester — ссылки, маршруты и пользовательский smoke.
- Execution mode: single agent.
- Working branch: `codex/fundamentals-reference-completeness`.
- Working tree: `/private/tmp/ui-doc-fundamentals-reference-completeness`.

## Inventory and rollback

Исходный Git-срез до очистки:
`37aa807de1718e3b79069804cf280fb75112c61f`.

К удалению подготовлены:

- 116 файлов в legacy-деревьях «Основ», включая две redirect-страницы;
- 21 файл неподтверждённого старого раздела загрузчика;
- условный архивный блок из общего layout.

Rollback:

```text
git restore --source=37aa807de1718e3b79069804cf280fb75112c61f -- \
  source/docs/ru/fundamentals \
  source/docs/ru/start/loader \
  source/_core/_layouts/documentation.blade.php
```

Отдельная файловая резервная копия будет сохранена вне репозитория до удаления.

## Constraints and stop conditions

- не сохранять старые URL, redirect и archive landing pages;
- не переносить неподтверждённые PHP/backend API в новую документацию;
- не удалять уникальный материал, пока он не сопоставлен с актуальной страницей;
- остановиться при битой ссылке без однозначной актуальной цели;
- не выполнять push, merge или production deploy.

## Batch plan

| Batch | Goal | Verification | Status |
| --- | --- | --- | --- |
| 1 | Инвентаризация, source comparison, backup | inventory + action gate | completed |
| 2 | Консолидация содержания и удаление дублей | source diff + content coverage | completed |
| 3 | Сборка и QA | build, link checks, HTTP smoke | completed |
| 4 | Локальный handoff | `ui-doc.test`, commit, workflow result | completed |

## Stages

1. Repository prepared: inventory, source mapping, backup and safety gate.
2. Documentation written: consolidation and deletion.
3. Evidence recorded: deterministic checks and local HTTP smoke.
4. Handoff: local branch commit and updated workflow.

## Batches

- Batch 1: inventory and reversible preparation.
- Batch 2: content consolidation and cleanup.
- Batch 3: build and acceptance.
- Batch 4: local preview and handoff.

## Evidence

- исходники loader: `ui/distr/core/js/core-loader.js`,
  `ui/distr/rule/rule.json`, `ui/distr/rule/js/rule.js`;
- актуальные «Основы»: меню и страницы ветки
  `codex/fundamentals-reference-completeness`;
- pre-cleanup Markdown count: 477.
- post-cleanup Markdown count: 367;
- удалено 137 legacy-файлов;
- `build-docs-production.sh`: PASS;
- rendered link check: 366 русских HTML-страниц, 60 475 внутренних ссылок,
  0 битых ссылок;
- source integrity: 367 Markdown-файлов, 0 BOM, 0 неканонических ссылок,
  0 битых ссылок;
- `git diff --check`: PASS;
- HTTP smoke: актуальные страницы `ru`, `start`, `loader`, `fundamentals`,
  `colors-and-themes`, `sizes`, `utilities` возвращают 200;
- удалённые `fundamentals/color/new-approach-to-using-color`,
  `fundamentals/concept` и `start/loader/backend` возвращают 404;
- визуальная проверка: архивный баннер отсутствует, меню актуально,
  горизонтального переполнения нет, таблица полной шкалы содержит 90 значений
  в 30 строках по три группы;
- локальная сборка опубликована в
  `/Users/rim/Documents/GitHub/ui-doc/build_production`.

## Result

Русская документация больше не использует модель архивных страниц. Раздел
«Основы» имеет одно актуальное дерево, «Старт» переписан в пользовательском
языке, а загрузчик описан одной source-backed страницей. Старые URL удалены
без redirect.

Отдельный известный дефект исходного runtime SIMAI Framework: модуль
`component/highlight` формирует URL динамического chunk от корня `distr`,
из-за чего браузер получает `ChunkLoadError`. Он не вызван структурой
документации и должен исправляться в репозитории `ui`. Статическая сборка,
содержимое и навигация документации от него не зависят.

Контроль `check-docs-integrity.php` также сохраняет отдельное предупреждение
`unpinned_runtime_ref` для `source/_core/_layouts/core.blade.php`; это
release-политика общего runtime, а не дефект очищенной структуры.
