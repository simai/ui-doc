# Workflow: аудит покрытия SIMAI Framework исходниками и документацией

Дата: 2026-07-26
Статус: completed, verdict `CORRECTION_REQUIRED`

## Goal

Сопоставить актуальные исходники SIMAI Framework Core/Utilities, ordinary
Components, Smart Components и reference admin с русской документацией и
предоставленным описанием утилит; отделить реализованное, документированное,
ошибочно описанное и ещё не реализованное, затем выдать приоритетные
рекомендации.

## Done When

- зафиксированы проверенные refs и статус каждого источника: release, main,
  рабочая ветка или локальный build;
- построены source-backed инвентари Utilities, Components и Smart Components;
- построена матрица покрытия текущей русской документации;
- положения исходного файла классифицированы как implemented/documented,
  implemented/not documented, documented incorrectly, not implemented или
  unverifiable;
- подготовлены два итоговых файла: аудит документации и рекомендации по
  развитию SIMAI Framework;
- выводы имеют проверяемые пути, команды и ограничения доказательств.

## Scope

- `/Users/rim/Documents/GitHub/ui`
- `/Users/rim/Documents/GitHub/ui-components`
- `/Users/rim/Documents/GitHub/ui-smart`
- `/Users/rim/Documents/GitHub/ui-admin`
- `/Users/rim/Documents/GitHub/ui-doc`
- `/Users/rim/Downloads/SIMA Framework UI Utilities v5.3 (полное описание).docx (1).md`
- русский контур документации; Components и Smart Components анализируются на
  покрытие, но не дописываются в этом аудите.

## Source-Of-Truth Policy

1. Immutable release/tag, если он существует.
2. `origin/main` как unreleased current source, отдельно от release.
3. Текущий checkout только как рабочее evidence с явной веткой и dirty-state.
4. Generated dist/manifest/rules и исполняемые примеры выше редакционного
   описания.
5. Предоставленный Markdown — контроль полноты и историческое требование, но не
   доказательство реализации.
6. Локальный `ui-doc.test` и `build_production` — publication evidence, а не
   canonical source.

## Owner Map

| Область | Роль | Владелец |
| --- | --- | --- |
| Координация и границы | coordinator | `teamlead` |
| Структура и качество документации | author/gatekeeper | `docs` |
| Факты Core/Utilities/Components/Smart | source owner | `sf5` |
| Полнота доказательств и итоговый verdict | gatekeeper | `tester` |

Federation route ошибочно выбрал `larena` primary owner из-за примеров
потребления. Для этого аудита применяется raw-source fallback `docs + sf5`;
Larena не является владельцем общего frontend-контракта. Это graph gap.

## Batch Plan

| Batch | Result | Verification | Status |
| --- | --- | --- | --- |
| 1 | refs, versions, dirty-state, source map | Git/file inventory | completed |
| 2 | Utilities inventory and docs coverage | rules/assets/classes/pages matrix | completed |
| 3 | Components/Smart/Admin inventory and docs coverage | catalogs/manifests/pages matrix | completed |
| 4 | source-file claim matrix | claim-to-runtime/doc evidence | completed |
| 5 | two final reports | evidence review, contradiction scan, diff check | completed |

## Constraints And Risks

- Не выдавать `main`, незамерженные worktrees или локальные dirty checkouts за
  release SIMAI Framework 5.4.
- Не считать наличие каталога или CSS-файла доказательством стабильного public
  API без manifest/test/lifecycle evidence.
- Не смешивать ordinary Components из `ui/distr/component` с Web Components из
  `ui-smart`.
- Не исправлять найденные дефекты в framework repos в рамках read-only аудита.
- Не затрагивать компоненты и Smart Components как страницы документации до
  отдельного implementation batch.

## Evidence

- Инвентари и промежуточные машинные результаты: `source/output/framework-gap-audit/`.
- Итоговый аудит: `source/workflow/2026-07-26-simai-framework-documentation-gap-audit.md`.
- Итоговые рекомендации: `source/workflow/2026-07-26-simai-framework-development-recommendations.md`.

## Progress

- Route/process checked; graph routing mismatch recorded.
- Existing 2026-07-15 plan and recommendations recovered as historical baseline.
- Проверены актуальные `origin/main` для Core и Smart, текущие admin/docs locks,
  локальная публикация и большой исходный файл.
- Построен воспроизводимый inventory loader rules, assets, gzip, relations,
  `!rtags`, классов HTML-примеров, CSS variables и image references.
- Подготовлены два итоговых отчёта: пробелы документации и рекомендации по
  развитию SIMAI Framework.
- QA: machine inventory воспроизводится; Markdown и rendered links проходят;
  `ui-admin` exact-pair runtime test проходит; integrity check ожидаемо
  возвращает один P0-дефект — unpinned runtime fallback `latest`.

## Remaining

Реализация найденных исправлений не входит в read-only аудит. Следующий batch
должен начинаться с P0: loader defects, immutable compatibility lock и
исправление недействительных примеров/изображений документации.

## Next

Согласовать владельцев P0 и сформировать отдельный implementation workflow для
baseline `5.4.0`; после закрытия P0 переходить к каталогам Utilities,
Components и Smart Components.

## Verification Summary

- loader rules: 742 total; 640 utility, 58 component, 41 smart, 3 attribute;
- utilities: 226 families; 30 не связаны с reference через `!rtags`;
- components: 58 rules / 77 asset directories;
- Smart Components: 41 rules / 50 asset directories; 9 directories без rule;
- rule assets: 1 подтверждённо отсутствующий asset, gzip parity без разрывов;
- relations: 1 подтверждённый utility defect и 1 direct dependency на review;
- docs links: 0 broken Markdown links, 0 broken rendered internal links;
- `ui-admin npm run test:runtime`: PASS;
- docs integrity: FAIL только по unpinned runtime ref, как зафиксировано в
  итоговом аудите.
