# Цель: полная русская документация SIMAI Framework

Дата старта: 2026-07-26

Статус: active

Track: `simai-framework-docs`

Process model: `sf5_frontend_delivery`

Current state: `integration_acceptance`

## Final Outcome

Русская документация SIMAI Framework соответствует фактически поставляемым
Core, Loader, Utilities, Components и Smart Components, имеет полноценные
читательские пути и API-reference, использует один версионируемый контракт и
проходит source, build, browser и accessibility-проверки.

## Current Goal

Реализовать согласованные рекомендации из аудита 2026-07-26 автономно до
проверенного локального результата. Публичное название — только
`SIMAI Framework`. До выполнения рекомендаций документационная baseline —
`5.4.0`; следующая версия определяется после оценки фактического объёма.

## Done When

- P0 loader/assets/relation defects исправлены и покрыты регрессией;
- существует один machine-readable compatibility/registry contract для
  проверяемых ревизий Core и Smart;
- все public utility families имеют точный reference или явную связь со
  страницей, а копируемые примеры не содержат неизвестных runtime-классов;
- ordinary Components классифицированы и public contracts документированы;
- Smart Components классифицированы, metadata/types/reference согласованы;
- отсутствующие изображения восстановлены либо заменены актуальными живыми
  демонстрациями;
- разделы «Старт», «Основы», «Утилиты», «Компоненты» и «Smart Components»
  образуют цельные пути без архивного и версионного мусора;
- validators, production build, representative browser matrix и accessibility
  smoke дают итоговый PASS;
- не выполнены merge, push, release или deploy без отдельного разрешения.

## Source Of Truth

1. Проверяемые source/dist/rules актуальных `origin/main` репозиториев `ui` и
   `ui-smart`.
2. Machine-readable registries/manifests и их validators.
3. Reference application `ui-admin`, закреплённая на точной паре ревизий.
4. Русские source pages `ui-doc` и локальная production build.
5. Исходный большой Markdown-файл — только исторический источник требований,
   не доказательство реализации.

## Owner Map

| Surface | Owner | Role |
| --- | --- | --- |
| Goal, stages, cross-repo integration | `teamlead` | coordinator |
| Core/Loader/Utilities/Components/Smart contracts | `sf5` | primary owner |
| Repository implementation | `dev` | implementation owner |
| Documentation architecture and Russian text | `docs` | author/gatekeeper |
| Reader paths and accessibility | `ux` | reviewer |
| Static/runtime/browser acceptance | `tester` | gatekeeper |

Execution mode: `single_agent`; subagents: none.

## Repository And Write Boundaries

### Allowed

- `ui`: isolated worktree and branch `codex/framework-docs-54`; loader rules,
  registries, validators, narrowly required release metadata/docs.
- `ui-smart`: isolated worktree and branch `codex/framework-docs-54`; Smart
  metadata/types/validators and narrowly required source fixes.
- `ui-admin`: isolated worktree only if compatibility/types/reference checks
  require changes.
- `ui-doc`: current documentation branch; Russian docs, navigation, layouts,
  validators, generated documentation inputs and local build configuration.
- `source/workflow` and ignored `source/output` evidence.

### Forbidden Without Separate Approval

- merge or rebase into `main`;
- push, tag, GitHub release or public publication;
- production/live changes, including `ui.simai.io`;
- destructive cleanup or rewriting existing user history;
- exposing or committing credentials from the source document;
- editing English documentation except where a shared site mechanism cannot be
  safely fixed otherwise.

## Launch Record

- User authorization: explicit autonomous Goal mode confirmation on
  2026-07-26.
- Route: primary `sf5`; companions `teamlead`, `ux`, `tester`; raw owner
  sources remain authoritative.
- Route scale incorrectly classified the whole goal as one batch. This file
  preserves the explicit multi-stage user scope.
- Action gate for `ui-doc`: PASS at
  `source/output/action-gates/action-gate-report-20260726143530.json`.
- Existing dirty files are user-owned and must be preserved.
- Working set: custom source-backed audit inventory; generic scaffold skipped
  because this goal changes the registry contract itself.
- Stop conditions: failed safety/process gate, unresolved source ownership,
  material breaking API decision, release/deploy boundary or unavailable
  verification environment.

## Goal Queue

| ID | Goal | Done When | Status |
| --- | --- | --- | --- |
| G1 | Stabilize source contracts | P0 loader fixes, registries, validators, exact revision evidence | complete |
| G2 | Make Utilities and Fundamentals exact | missing contracts added, invalid examples/tokens/images corrected | complete |
| G3 | Document ordinary Components | every classified public component has a verified reference contract | complete |
| G4 | Document Smart Components | metadata/types/docs cover every classified public Smart tag | complete |
| G5 | Integrate and accept | build, link, browser, accessibility and drift gates PASS | active |

Auto Continue: allowed between safe local batches inside G1–G5.

## Completed Stage: G1 — source contract stabilization

### Batch G1.1 — clean implementation surfaces and reproduce defects

Allowed actions:

- create isolated worktrees/branches for source repositories;
- rerun exact rule/assets/relations checks;
- map existing test/build commands;
- record target revisions and dirty-state boundaries.

Evidence:

- Git status/HEAD for every repository;
- loader defect fixtures reproducing the hue-rotate and gradient relation
  failures;
- action-gate reports for every repository before writes.

### Batch G1.2 — fix loader graph and add validation

- correct the confirmed rule typo and gradient relation;
- introduce a validator that distinguishes rule relations from direct
  dependency assets;
- verify every computed asset and compressed counterpart;
- preserve compatibility unless a tested alias is required.

### Batch G1.3 — registries, Smart metadata and compatibility contract

- define schema/status for Utilities, Components and Smart Components;
- cover every current rule/catalog with an explicit status;
- generate or validate Smart metadata and types from the owner source;
- define an exact compatibility contract without claiming an unreleased tag.

## Later Stages

### G2 — Utilities and Fundamentals

- correct all confirmed invalid classes, variables, responsive and RTL claims;
- add nine absent utility references and connect twenty embedded families;
- regenerate color palettes/swatches from tokens;
- resolve `xxl` by implementation evidence, not editorial promise;
- extract only still-valid source images and replace obsolete diagrams.

### G3 — ordinary Components

- classify 58 rules and 19 extra asset directories;
- generate reference skeletons from registry;
- complete public contracts by user value priority;
- cover states, keyboard, accessibility and dependencies.

### G4 — Smart Components

- decide the nine no-rule directories from source evidence;
- cover all supported tags in metadata, types and API reference;
- document attributes, properties, methods, events, slots, lifecycle,
  dependencies, accessibility and minimal examples.

### G5 — integration and acceptance

- pin local docs/Playground/reference app to exact compatible revisions;
- run validators and full Docara production build;
- browser smoke Start/Fundamentals/Utilities/Components/Smart paths;
- accessibility and responsive/RTL representative matrix;
- reverse-outcome audit against this Done When.

## Required Verification

- rules/assets/relations/gzip validators;
- registry schemas and coverage equality;
- documentation class/token/image/link checks;
- unit and integration tests in touched framework repositories;
- `ui-admin` exact-pair runtime test;
- Docara integrity and production build;
- local browser and accessibility evidence;
- `git diff --check` and secret scan;
- federation process/conformance checks before completion.

## Evidence Paths

- Audit:
  `source/workflow/2026-07-26-simai-framework-documentation-gap-audit.md`.
- Framework recommendations:
  `source/workflow/2026-07-26-simai-framework-development-recommendations.md`.
- Generated evidence: `source/output/simai-framework-documentation-implementation/`.
- Action gates: `source/output/action-gates/`.

## Progress Log

- 2026-07-26: user accepted the plan and explicitly started Goal mode.
- 2026-07-26: live Codex Goal created for the full cross-repository outcome.
- 2026-07-26: federation route/process resolved; single-agent execution and
  `sf5_frontend_delivery` selected; route scale mismatch recorded.
- 2026-07-26: `ui-doc` preflight action gates PASS.
- 2026-07-26: action gates for `ui` and `ui-smart` PASS; isolated worktrees
  created on `codex/framework-docs-54` from current `origin/main`.
- 2026-07-26: recovered the existing registry work from its historical
  5.3.x-based branches and integrated it into the new current-main worktrees.
- 2026-07-26: G1.1 complete. Historical Smart registry tests correctly failed
  against current source (50 directories instead of 45 and changed assets),
  proving that the old manifest could not be reused as current evidence.
- 2026-07-26: G1.2 complete in `ui` commit `bec6c8a5`: corrected
  `filter-hue-rotate/hover`, corrected the gradient relation, synchronized JSON,
  readable/minified bundles and gzip sidecars, and added a fail-closed loader
  validator with positive and negative regression tests.
- 2026-07-26: loader validation PASS for 742 rules and for the paired current
  Smart worktree; the explicit direct dependency `fancybox -> jquery` is
  distinguished from a missing rule relation.
- 2026-07-26: G1.3 started. `ui-smart` commit `3d58d7c` adds a reproducible
  manifest generator for the current source pair: 50 directories, 41
  registered components and nine fail-closed unregistered components. Six
  Smart contract tests PASS.
- 2026-07-26: G1.3 complete. `ui-smart` commit `665a7de7` curates the current
  Smart closure; `ui` commit `10576fe7` generates the 5.4.0 candidate
  compatibility contract and aggregate registry for the exact Core/Smart
  source pair.
- 2026-07-26: aggregate coverage is 334 entries: 225 real utility families,
  58 ordinary components, 50 Smart component directories and one verified
  recipe. The earlier audit count of 226 utility families included the
  misspelled `filer-hue-rotate` pseudo-family and is corrected to 225 after the
  loader fix.
- 2026-07-26: all nine Smart directories without a Loader rule are represented
  explicitly as blocked instead of disappearing from inventory: `drawer`,
  `editor`, `fab`, `file-preview`, `flags`, `form`, `link`, `list`, `rating`.
- 2026-07-26: cross-repository contract verification PASS: 16 aggregate
  registry tests (one environment-dependent test skipped), four Loader
  contract tests and six Smart manifest tests. The `ui-doc` consumer pointer
  is bound to the generated registry file hash without claiming a release.
- 2026-07-26: a second Loader family typo was confirmed and corrected:
  `backdrop-filer-hue-rotate` became `backdrop-filter-hue-rotate`. UI commit
  `fff16873`, Smart manifest commit `be28b315` and aggregate registry commit
  `19e638d1` now form candidate
  `simai-framework-5.4.0-candidate-fff16873-b57afb30`.
- 2026-07-26: G2 started. The prior fundamentals/reference branch is treated as
  recoverable authored content, while duplicate legacy trees and obsolete
  archive/version pages are excluded from the new information architecture.
- 2026-07-26: exact documentation generation and source validation PASS. The
  Russian corpus covers all 225 utility families (196 authored pages and 29
  generated exact references), all 58 ordinary components and all 50 Smart
  directories. Validation checked 2054 example classes and 62 CSS variables
  with zero unknown values; 505 Markdown pages have zero broken internal links.
- 2026-07-26: browser smoke exposed a shipped highlight runtime defect: dynamic
  language chunks were requested from `distr/js` instead of
  `distr/component/highlight/js`. UI commit `2742ed22` corrects the public path
  in readable/minified/gzip assets; the Loader validator now also rejects stale
  gzip sidecars and five regression tests PASS. Smart contract revision
  `b5884eb5` and aggregate registry commit `8fea5eb4` update the candidate to
  `simai-framework-5.4.0-candidate-2742ed22-b57afb30`.
- 2026-07-26: G2–G4 complete. Fundamentals contains the complete size system,
  design tokens, themes, live palettes and restored role illustrations;
  Utilities covers all 225 Loader families; generated source-backed reference
  covers 58 ordinary and 50 Smart components, including the nine explicitly
  blocked Smart directories.
- 2026-07-26: `ui-admin` exact-pair acceptance PASS on branch
  `codex/framework-docs-54`, commit `8b70c00`. Runtime materialization verifies
  the candidate registry, pair identity and mandatory file hashes; runtime test
  and full Vite production build PASS on UI `2742ed22` plus Smart `b57afb30`.
- 2026-07-26: Docara production build PASS with 504 HTML pages and 69,668
  internal rendered links, zero broken links. Desktop and 390 px browser smoke
  found no broken images or empty code; mobile tables now scroll locally
  without page overflow. Shared logo/search controls received accessible names.

## Remaining

- Finish G5: final clean browser/accessibility rerun, cross-repository drift and
  secret checks, clean scoped commits, reverse-outcome and federation
  conformance evidence.

## Next

Complete G5 acceptance and prepare the local branch handoff without push,
merge, release or deployment.

## Kaizen

The earlier documentation workflow was closed from build/link evidence while
runtime coverage was still incomplete. Goal acceptance must compare the final
reader outcome against source registries, not only against a green site build.
