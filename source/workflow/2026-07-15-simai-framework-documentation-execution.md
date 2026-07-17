# Исполнение: русская документация SIMAI Framework 5.4.0

Дата старта: 2026-07-15
Статус: completed (локальная документация подготовлена; release lock остаётся внешним)
Project mode: product documentation and release-readiness preparation
Process state: repository_prepared
Runtime goal: complete

## Control state

Workflow ID: 2026-07-15-simai-framework-documentation-execution
Process Model: general_delivery
Current State: repository_prepared
Target State: repository_prepared
Memory decision: skip
Memory reason: live repository sources, current source workflow and fresh
validation are sufficient; personal memory is not used as source of truth.

## Цель

Автономно довести русскую документацию SIMAI Framework в `ui-doc` до
релизно-достоверного и проверяемого состояния: реализовать утверждённый план
для разделов «Старт», «Основы», «Утилиты», «Компоненты» и «Smart Components»,
закрепить source/version contract baseline `5.4.0` и выполнить Docara QA.

## Done When

- у каждого опубликованного контракта есть проверяемый источник и статус;
- документация русской версии не выдаёт historical `5.3.x`, ветки или proposals
  за baseline `5.4.0`;
- «Старт», «Основы» и «Утилиты» дают последовательный путь и не содержат
  известных ложных runtime-утверждений;
- разделы Components и Smart Components имеют честный каталог, границы слоёв,
  статусы и ссылки на проверяемые источники/примеры;
- внутренние ссылки, front matter, UTF-8/BOM, меню, Docara build и ключевые
  browser-пути имеют свежие evidence;
- локальная preview-сборка готова к публикации, но публикация и заявление о
  release `5.4.0` не выполняются до approved immutable Core/Smart release lock.

## Границы и stop conditions

Разрешены обратимые локальные изменения в `ui-doc`, проверки исходников,
генерация/проверка локальной сборки и browser QA локального хоста.

Запрещено без отдельной границы:

- деплоить или менять `ui.simai.io` / `ui-doc.test` document root;
- ставить тег, релиз или объявлять совместимость `5.4.0` без immutable lock;
- копировать raw-предоставленный Markdown в публикующие источники;
- изменять грязные рабочие деревья `ui`, `ui-smart`, `ui-admin`,
  `ui-components` и чужие изменения в `ui-doc`.

Если отсутствует approved Core/Smart lock `5.4.0`, продолжаем все независимые
контентные и integrity-батчи, но вместо фиктивных CDN/commit значений оставляем
явный release blocker и safe handoff владельцам.

## Исходные артефакты и hierarchy of truth

1. Будущий approved immutable compatibility lock `5.4.0`.
2. Owner manifests и tagged runtime артефакты.
3. `ui-play` examples, закреплённые той же совместимостью.
4. Ручной текст `source/docs/ru`.

Подробный audit/план:
`source/workflow/2026-07-15-simai-framework-documentation-plan.md`.
Рекомендации по продукту:
`source/workflow/2026-07-15-simai-framework-development-recommendations.md`.

## Owners и review boundaries

| Роль | Владелец | Ответственность |
| --- | --- | --- |
| Goal / delivery | `teamlead` | путь до Done When, scope и handoff |
| Documentation content | `docs` | IA, русский текст, источники и reader journeys |
| Source facts | `sf5` | Core/Loader/Utilities/Components/Smart source-backed facts |
| Site mechanics | `docara` | меню, front matter, build и локальный preview |
| Acceptance | `tester` | link/build/browser evidence и честный verdict |
| Release lock | Core + Smart owners | immutable `5.4.0` pair, manifests и provenance |

## Route/process note

Runtime route recognised the Docara surface, but did not detect the explicit
goal scale and separately classified the same text as release/full-QA because
of `baseline`, `release` and `QA`. This is a graph-routing mismatch, not a
change of the actual owner boundary above. The active Codex Goal and this
workflow are canonical execution control for this task.

## Launch record

- Launch date: 2026-07-15.
- Trigger: explicit user request to execute the approved documentation plan
  autonomously in goal mode.
- Local safe-write scope: documentation sources, Docara configuration and
  test/validation artifacts within `ui-doc` only.
- Baseline assertion: `5.4.0` is the required documentation target, not a
  currently proven release ref.
- Dirty-worktree policy: preserve all pre-existing changes; inspect before
  any overlapping edit.
- Recovery source: this workflow plus the two plan/recommendation artifacts.

## Этапы

### Этап 0 — execution baseline and preflight

Done When: active workflow, release boundary, Docara environment and repository
state are recorded; workstreams have non-overlapping scopes.

### Этап 1 — P0 publication integrity

Done When: a reproducible version/source policy exists in the docs repository;
obvious menu, link, encoding, embed and source-drift defects have either been
fixed or are documented with exact blockers; validators are runnable.

### Этап 2 — P0 reader path: «Старт» and «Основы»

Done When: Russian beginner and fundamentals paths are coherent, source-backed,
and do not promise unsupported Loader/backend/variant behaviour.

### Этап 3 — catalog foundations: Utilities, Components, Smart Components

Done When: catalogs are honest about readiness and provenance, and their first
high-value pages/overviews are usable without claiming unapproved APIs.

### Этап 4 — recipes, release handoff and acceptance

Done When: platform-neutral recipe entrypoint, compatibility/release-blocker
surface and final local QA evidence exist; remaining release-owner work is
packaged without silent claims.

## Stages

- Этап 0 — execution baseline and preflight
- Этап 1 — P0 publication integrity
- Этап 2 — P0 reader path: «Старт» and «Основы»
- Этап 3 — catalog foundations: Utilities, Components, Smart Components
- Этап 4 — recipes, release handoff and acceptance

## Batches

- E0.1 — establish evidence and writable P0 boundary
- E1.1 — source/version policy and documentation integrity validators
- E1.2 — safe menu, link, encoding and embed corrections
- E2.1 — source-backed «Старт» reader path
- E2.2 — consolidated «Основы» reader path
- E3.1 — Utilities registry-facing overview and truthful catalog entrypoint
- E3.2 — Components and Smart Components catalog foundations
- E4.1 — recipe, release-owner handoff and final local QA

## Evidence

- Git/repository status before and after each write batch.
- Source-backed facts from tagged runtime, owner manifests or an explicit
  blocker when the approved `5.4.0` source does not exist.
- Docara doctor, production build, link/encoding/front-matter checks and
  browser evidence for changed reader paths.
- Agent reports are review inputs, not source-of-truth replacements.

## Workstream register

| ID | Scope | Owner | File reservation | Integration gate | Status |
| --- | --- | --- | --- | --- | --- |
| W0 | Docs source/build/menu audit and P0 candidate list | root | documentation/config/validation | build and browser evidence | completed: source, build and browser evidence recorded |
| W1 | Immutable `5.4.0` lock and source-of-truth feasibility | agent | external repos read-only | source-fact report | completed: release blocker recorded |
| W2 | Components/Smart source inventory and safe catalog plan | agent | Components + Smart Components docs | catalog evidence and root routes | completed: catalog roots and reference routes integrated |
| W3 | Start/Fundamentals source facts and reader-path gaps | agent | Fundamentals docs | content evidence report | completed: canonical reader path integrated |

No agent may write shared `source/docs/ru`, configuration or this workflow
without an explicit new reservation.

## Completed batch: E1.2/E2.1/E3.2/E4.1 — publication integrity, reader paths and acceptance

Allowed work:

- normalize encoding and embed safety in the Russian source tree;
- repair source menus, root routes and Markdown links;
- publish version-neutral Start/Fundamentals/Utilities/Components/Smart
  entrypoints that do not need a `5.4.0` release ref;
- run source integrity, Docara build and browser checks.

Out of scope:

- publishing/deploying;
- inventing lock IDs, tags, hashes or API details;
- content generation from unapproved Smart/Component inventory.

Checks/evidence:

- `git status --short` baseline;
- Docara doctor and production build command/result;
- direct source inspection of config/layout/menu;
- link/encoding/front-matter inventory;
- fresh evidence reports from W1–W3.

## Evidence log

- 2026-07-15: user explicitly authorised autonomous goal execution.
- 2026-07-15: Codex Goal created with the objective above.
- 2026-07-15: federation route/process invoked. It requires a workflow but
  misclassifies the explicit goal scale; mismatch recorded above.
- 2026-07-15: initial `php docara-doctor` failed before execution because the
  Homebrew PHP 8.2 binary references a missing ICU library. Per Docara guidance,
  retry with the ServBay PHP alias before treating it as a project blocker.
- 2026-07-15: pre-existing dirty files preserved: `.gitignore`,
  `source/docs/.translate.php`, `source/_backup/`, and earlier `source/workflow/`
  artifacts.
- 2026-07-15: ServBay PHP successfully completed the Docara doctor; local
  preview root is a symlink from `/Users/rim/Sites/ui-doc.test` to ignored
  `build_production/`.
- 2026-07-15: W1 found no owner-approved immutable Core/Smart pair for
  `5.4.0`. Historical `5.3.x` evidence is bounded and non-production; the
  release-lock handoff is recorded in
  `2026-07-15-simai-framework-5.4-release-lock-handoff.md`.
- 2026-07-15: W3 canonical Fundamentals menu/path audit was integrated;
  unverified Loader/backend material is hidden from the reader journey and
  explicitly marked archival when visited directly.
- 2026-07-15: BOM removal and iframe hardening completed across Russian
  Markdown. `bin/check-docs-integrity.php` reports zero BOM, broken source
  links and unsafe iframes; it intentionally still reports the unpinned Core
  runtime fallback as the release blocker.
- 2026-07-15: 269 direct internal Markdown links were converted to canonical
  documentation routes (252 in Utilities and 17 in Loader); the source guard
  now rejects a regression to local `.md` links. Playground iframe embeds were
  replaced with direct external links because `play.simai.io` refuses iframe
  embedding.
- 2026-07-15: archive landing pages were added for three automatically
  surfaced legacy Fundamentals routes. `config.production.php` disables the
  Docara cache so a production build is reproducible from current sources.
- 2026-07-15: final ServBay PHP production build completed successfully.
  `bin/check-built-docs-links.php` reported `HTML: 473`, `internal links:
  75032`, `broken rendered links: 0`; rendered output has zero `.md` hrefs and
  zero Playground iframes.
- 2026-07-15: key-route HTTP matrix returned `200`; browser acceptance covered
  the Russian root, Start, Compatibility, Fundamentals, Utilities, Components,
  Smart Components and Change History pages. All expected headings rendered,
  no iframe remained, release-lock notices were visible where required, and
  the browser console was clean.

## Current remaining / next safe batch

Current Remaining: the local documentation scope is complete. The only
remaining requirement before claiming or publishing a `5.4.0` release is an
owner-approved immutable Core/Smart compatibility pair and its provenance.

Next Safe Batch: after Core and Smart owners provide the approved lock, replace
the runtime fallback with the exact approved references, re-run source and
rendered integrity checks plus browser QA, then decide on a separate publish
boundary. Do not substitute `latest`, a branch or a historical `5.3.x` tag.

## Kaizen

Do not let a documentation-site build pass substitute for release evidence.
The permanent guardrail should derive page provenance, runtime compatibility
and examples from one owner-approved contract rather than editorial prose.

Keep production Docara cache disabled during acceptance builds, and enforce
canonical rendered routes rather than source-file links in every documentation
change.
