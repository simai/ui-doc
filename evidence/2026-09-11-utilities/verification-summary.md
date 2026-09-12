# Проверка этапа executable utility examples

## Результат

Пять выбранных страниц (`margin`, `padding`, `gap`, `width`, `text-wrap`) связаны
с точным accepted Core, Loader rules, фактическим CSS и изолированными примерами.
Проверено 8 registry families и 20 representative classes. Полный utility bundle
примеры не подключают.

Статус этапа: **PASS WITH SOURCE NOTE**. Документация и примеры проходят свои
проверки; отдельно оформлен дефект Core для вложенного направления письма.
Независимый tester verdict оставлен диспетчеру и не подменялся самооценкой
исполнителя.

## Foundation и ревизии

- ui-doc baseline/HEAD: `f264f20974c59fde31277e2f206eb826aaec2bcb`.
- Ветка: `codex/utilities-executable-examples`.
- origin/main на момент финальной проверки: `1beff651dfa24595b3afeb9ab0b284b73a42b12d`.
- `git rev-list --left-right --count origin/main...HEAD`: `0 1`;
  `origin/main` является предком baseline `HEAD`, ветка на один локальный коммит
  впереди и не требует обновления из-за отставания.
- Core: `d328491bc805439f200866f7e04c0e5e853a4998`.
- Registry SHA-256: `2ddbcd7077c6fa2b2f1918726f16c9c213f3a6db5d717539244bcad01abd83b3`.
- Accepted pair: `sf-v5.7.0-d328491b-9e94abc6`.
- Final build: `/Users/rim/Documents/GitHub/ui-doc/build_utilities_20260911_r4`.

## Команды и exit status

| Команда | Exit | Итог |
|:---|---:|:---|
| `php vendor/bin/docara build utilities_20260911_r4` | 0 | 917 страниц, 158.21 s |
| `php vendor/bin/docara verify-static build_utilities_20260911_r4` | 0 | 1804 HTML, 376724 ссылок, 0 broken |
| `php scripts/audit-utility-documentation.php` | 0 | 220/220 learning pages с примерами и badges |
| `node scripts/audit-utility-public-contract.mjs <exact-core>/distr` | 0 | 229 families, 228 documented, 1 internal, 0 missing |
| `node scripts/audit-utility-executable-examples.mjs <exact-core> --build-root=<r4>` | 0 | 5 cases, 8 families, 20 classes, 0 blockers |
| `php scripts/audit-examples.php` | 0 | 0 blockers; 2 unrelated component advisories |
| `php scripts/audit-russian-content.php` | 1 | 72 pre-existing escaped-inline-code findings, ни одного в пяти целевых страницах |
| browser smoke: desktop/mobile, light/dark, LTR/nested RTL, computed styles | 0 | консоль чистая; один Core source fault оформлен отдельно |
| README entrypoint и portable audit command с абсолютным exact Core path | 0 | ссылка существует; команда повторно выполнилась на зафиксированном Core |
| `git diff --check` | 0 | whitespace errors отсутствуют |

Для Node-команд использован managed `SIMAI_NODE_BIN` из
`/Users/rim/.codex/simai-workspace/install.env`, потому что системный Homebrew
Node в этой среде неработоспособен. Homebrew и зависимости не изменялись.

Standalone federation final-response wrapper не принят как QA-доказательство:
без связанного workflow он ошибочно выбрал release/ops-модель и завершился со
статусом `fail` на отсутствующих process-артефактах. Это известный graph/runtime
debt, а не результат проверки документации; обход или запись в control plane в
рамках данного назначения не выполнялись.

## Build report-mode и documentation tracking

Сборка валидна, но сохранила общерепозиторный backlog: 73 authoring, 703
translation и 101 documentation tracking items. В final tracking все пять
целевых utility keys имеют `review: ai_verified`, без missing examples, но
`status: unverified`, потому что tracking source revision всё ещё указывает на
исторический `ui-ad7f6bfaf355-smart-577bd99f8c6d`. Accepted lock не менялся.

## Evidence

- `evidence/2026-09-11-utilities/executable-examples.json`
- `evidence/2026-09-11-utilities/browser-smoke.json`
- `evidence/2026-09-11-utilities/source-fault-logical-direction.md`
- `evidence/2026-09-11-utilities/diff-inventory.json`
- `docs/developer/utility-page-reference.md`
- `README.md` — вход в developer reference и воспроизводимая команда аудита.

## Ограничения и следующий этап

- Это representative corpus, а не заявление о браузерной готовности всех 228
  публичных utility families.
- Исправление directional generator относится к source repo Core и не входит в
  разрешённую запись этого этапа.
- Следующий безопасный этап: независимая приёмка diff/evidence, затем отдельное
  назначение владельцу Core на regression fix; после его принятия обновить lock
  штатным foundation-процессом и повторить этот валидатор.
