# Эталон документации компонента: Buttons

Дата: 2026-07-26

Статус: complete

Track: `simai-framework-docs`

Track linkage: `simai-framework-docs`

Process model: `docs_goal_mode_documentation`

Current state: `feedback_recorded`

Personal memory decision: `skip`

Personal memory reason: no relevant personal-memory entry was used; runtime,
documentation and browser claims were verified from current local sources.

Kaizen review: `skip`

Kaizen skip reason: bounded documentation sample produced no reusable owner
methodology change; the agreed page structure is preserved directly in the
committed sample and workflow.

## Current Goal

Подготовить и проверить одну эталонную страницу компонента Buttons, не
расширяя согласуемый batch на остальные компоненты.

## Final Outcome

Одна source-backed русская страница Buttons готова как согласуемый эталон для
будущего описания полного каталога компонентов SIMAI Framework.

## Цель

Подготовить одну полноценную русскую страницу компонента `buttons` как
согласуемый шаблон для последующего описания остальных компонентов SIMAI
Framework.

## Аудитория

Веб-разработчик, использующий SIMAI Framework в обычной HTML-разметке либо
создающий компонент программно через Loader.

## Source Of Truth

1. `ui/distr/component/buttons/css/buttons.css`.
2. `ui/distr/component/buttons/js/buttons.js`.
3. `ui/distr/core/js/core-loader.js`.
4. Актуальные примеры `ui-play/examples/components/buttons`.
5. Реестр компонентов и сгенерированная runtime-reference в `ui-doc`.

## Done When

- показаны живая минимальная кнопка, варианты, размеры, иконки, сегменты и
  состояния;
- приведена копируемая ручная разметка без вымышленных классов;
- описаны точные `param`, `attrs`, `utilities`, lifecycle events и `destroy()`;
- loading, формы, семантика и доступность не противоречат runtime;
- source validators, integrity check, production build и browser smoke дают
  PASS;
- изменения ограничены русской страницей Buttons и этим workflow-файлом.

## Границы

- Это один согласуемый пример, не массовое заполнение всех компонентов.
- Сгенерированный справочник не редактируется вручную.
- Merge, push, release и deploy не входят в задачу.
- Существующие пользовательские изменения в рабочем дереве сохраняются.

## Launch Record

- User authorization: explicit request to add one Buttons component page as a
  sample before documenting the complete catalog.
- Route: primary `docs`, companions `ux`, `tester`; raw SF component contract
  verified through owner skill `sf5`.
- Action gate: PASS at
  `source/output/action-gates/action-gate-report-20260726161235.json`.
- Execution mode: `single_agent`; subagents: none.
- Safe boundary: local Russian documentation, build and read-only browser QA;
  no merge, push, release or deploy.

## Stages

- [x] Verify the current Buttons CSS, JavaScript, Loader and UI Play contracts.
- [x] Author one complete Russian reader page with live demonstrations.
- [x] Validate source, build, links, browser rendering and repository scope.

## Batches

- [x] B1 source contract inspection.
- [x] B2 authored Buttons guide.
- [x] B3 production and browser acceptance.

## Evidence Plan

- Compare every documented class, parameter, event and state with current
  distributable source.
- Run repository documentation validators and production build against the
  exact UI/Smart pair.
- Confirm live controls, assets, dimensions, states, overflow and Console in
  the local browser.
- Preserve unrelated dirty files and commit only the page and workflow.

## Evidence

- Track linkage: `simai-framework-docs`; this is the first authored component
  sample after completion of the framework-wide reference inventory.

## Verification

- framework documentation contract validator;
- Docara integrity check;
- production build для закреплённой пары UI/Smart;
- проверка маршрута `/ru/components/buttons/` в локальном браузере;
- `git diff --check` и проверка состава коммита.

## Результат

- Страница `source/docs/ru/components/buttons.md` переработана в полноценный
  authored guide: 18 живых кнопок, точные варианты, пять размеров, иконки,
  плотность, радиус, сегменты, состояния и доступность.
- Ручной loading-контракт согласован с генератором: `loading`,
  `sf-button-state-loading`, `aria-busy` и нативный `disabled` описаны отдельно.
- Добавлены точные `param`, `attrs`, `utilities`, `SF.Loader.ready()`, lifecycle
  events и `destroy()` по текущему runtime source.
- Framework docs validator: PASS, 2047 example classes, 66 variables,
  findings 0.
- Docara integrity: PASS, 505 Markdown pages, broken links 0.
- Production build: PASS; exact UI/Smart assets скопированы в локальную сборку.
- Built-link scan: PASS, 504 HTML pages, 69672 internal links, broken 0.
- Browser smoke: PASS на `https://ui-doc.test/ru/components/buttons/`;
  component stylesheet загружен, 18 живых кнопок видимы, размеры возрастают от
  17 до 36 px, loading overlay активен, segment pressed state корректен,
  horizontal overflow и Console errors отсутствуют.
- `git diff --check`: PASS.
