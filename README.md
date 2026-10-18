# SIMAI Framework Documentation

This repository contains the Russian and English public documentation for
SIMAI Framework. It is a content-only Docara 2 project: authored pages live in
`content/<locale>/`, site configuration lives in `docara.json`, and local
assets live in `assets/`.

The documentation is published at <https://simai.github.io/ui-doc/>. The
Quality workflow builds it on every push to `main` with `base_url` set to the
GitHub Pages path (`/ui-doc/`, in the CI checkout only: the committed
`docara.json` keeps `/` for local builds), checks that build and deploys it to
GitHub Pages.

Developer references:

- [Reference page standard](docs/developer/reference-page-standard.md): utility, component and Smart component pages.

## Local checks

```bash
composer install
npm ci
node /absolute/path/to/ui-builder/bin/sf-build.js package --name larena \
  --package-root /absolute/path/to/larena-ui/components --package-revision <pinned revision> \
  --package-repository simai/larena-ui --ui-source /absolute/path/to/ui-source \
  --ui /absolute/path/to/ui --out /absolute/path/to/larena-package
php scripts/materialize-framework-runtime.php /absolute/path/to/ui \
  --receipt=/absolute/path/to/larena-package/package-receipt.json
php scripts/migrate-legacy-content.php content redirects.json
composer docs:versions:check
composer docs:components:check
php scripts/audit-framework-documentation-versions.php --check-remote
php scripts/audit-guide-information-architecture.php
php scripts/audit-guide-redirects.php
php scripts/audit-reference-separation.php
php -d memory_limit=2G vendor/bin/docara build production
php -d memory_limit=2G vendor/bin/docara verify-static build_production
node scripts/audit-utility-executable-examples.mjs /absolute/path/to/exact-core \
  --build-root="$(pwd)/build_production"
```

`scripts/build-documentation.php` runs the build with every step in order.
Code blocks are coloured at build time with Shiki (`page_transforms` in
`docara.json` runs `scripts/highlight-code.mjs` before Docara measures the
pages): GitHub's light and dark themes,
the grammars VS Code uses; the Framework's Highlight component
skips a block coloured that way. Shiki is the one npm dependency
(`package.json`, exact version).

The site is pinned to one Framework release (release lock v2, `ui-<12>`:
Core and Smart from the same `simai/ui` commit, Smart in `distr/smart`) and
to Larena's component package `larena` built against it (`simai/larena-ui`,
folder `components/`, Apache-2.0: `sf-table`, `sf-data-view`,
`sf-property-view`, `sf-admin-menu`). The release revisions and the package's
source revision and archive digest are named at the top of
`scripts/materialize-framework-runtime.php`. The package is built with
ui-builder (`sf-build package`) and taken by its package receipt: Docara
checks the files against the receipt and that the receipt names this release.
Package bytes are laid only into the installed Docara copy under `vendor/`
and into the built site, never into this repository; `simai-framework.lock.json`
records the receipt's identity and the files' hashes under
`package_projections.larena`, and pages declare the package as
`SF_BOOT_CONFIG.packages.larena`. With `--without-packages` the site builds
and the four Larena components do not load.

## Структура русской документации

Русская верхняя навигация состоит из четырёх разделов:

- **Руководство** — вся теория и последовательное обучение: подключение,
  устройство Framework, оформление, макеты, компоненты и Smart-компоненты;
- **Утилиты** — каталог CSS-классов и их точных значений;
- **Компоненты** — каталог готовых элементов, вариантов и примеров;
- **Смарт-компоненты** — каталог атрибутов, свойств, методов, событий и статусов.

Общие объяснения принадлежат `content/ru/guide/`. Корни трёх каталогов помогают
найти сущность и ведут к точному справочнику. `composer docs:check` запускает
`audit-reference-separation.php` и останавливается, если теория снова появляется
в справочных деревьях, возвращается отдельный верхний раздел «Макеты» или в
Markdown остаются ссылки на старые канонические адреса.

## Синхронизация компонентов и документации

Контракты в `contracts/documentation/components/` связывают страницу компонента
с точными исходными и собранными файлами Framework. Обычная проверка работает в
CI без соседних репозиториев и останавливает сборку, если зафиксированные в
`simai-framework.lock.json` ревизии ещё не были проверены документацией:

```bash
composer docs:components:check
```

Перед включением новой сборки Framework выполните глубокую проверку по точным
Git-объектам. Она обнаруживает изменение поведения, стилей, Loader rule и
зависимостей, а в ошибке называет компонент, файл и страницу для пересмотра:

```bash
node scripts/audit-component-documentation-contracts.mjs \
  --source-root=/absolute/path/to/ui-source \
  --core-root=/absolute/path/to/ui
```

После обновления текста и примеров явно подтвердите, что новая реализация
проверена. Команда запишет новые хеши только после прохождения остальных
проверок контракта:

```bash
node scripts/audit-component-documentation-contracts.mjs \
  --source-root=/absolute/path/to/ui-source \
  --core-root=/absolute/path/to/ui \
  --refresh
```

Такое подтверждение должно входить в каждый батч, который меняет публичное
поведение компонента. Автоматическая проверка определяет устаревшую страницу;
содержание обновляет автор или исполнитель, потому что механическая замена
текста не может надёжно объяснить новое поведение пользователю.

Страницы декларативной композиции защищены отдельным контрактом. Обычный
`composer docs:check` сравнивает зафиксированные ревизии, а глубокая проверка
читает точные схемы, встроенные типы, публичные функции, собранный Core и
эталонный JSON-пример:

```bash
node scripts/audit-composition-documentation-contract.mjs \
  --source-root=/absolute/path/to/ui-source \
  --core-root=/absolute/path/to/ui
```

После осмысленного обновления связанных страниц новые хеши принимаются только
явной командой с `--refresh`. Структуру раздела, как и всего руководства,
проверяет `composer docs:architecture:check` по дереву `config/guide-structure.json`:
один H1, заголовок и порядок страниц, вступление, отсутствие повторяющихся
больших абзацев. Поэтому изменение контракта Framework делает
устаревшую документацию ошибкой CI, а не скрытым расхождением.

The migration command is deterministic and must report zero changed Markdown
files on committed content. It remains in the repository so historical source
material can be normalized through the same documented path.

`config/framework-documentation-versions.json` is the only hand-maintained
source for the public Core tag used by installation examples. Run
`composer docs:versions:sync` after changing it. The candidate pair shown on
the versions page comes directly from `simai-framework.lock.json`; the audit
prevents a candidate tag from entering public CDN examples. Use
`--check-remote` when network access is available to verify the configured tag
object and commit against GitHub.

Composer keeps the exact published Docara revision pinned in `composer.lock`
and then applies the project-owned compatibility patch registered in `composer.json`.
The check command verifies the exact patched file hashes and fails closed if the
locked package or vendor sources drift.

The utility example audit must receive the absolute path to the exact Core
archive pinned by `simai-framework.lock.json`; a moving branch or an arbitrary
local checkout is not an equivalent input.

## Repository boundaries

- One physical Markdown file owns each public page.
- UI strings belong to `content/<locale>/lang.json`.
- Stable Docara is pinned to its exact published source revision in
  `composer.lock`. The bounded Framework pair recorded in
  `simai-framework.lock.json` is materialized after install from immutable Git
  objects by `scripts/materialize-framework-runtime.php`; never substitute
  working-tree or moving-branch bytes.
- GitHub Actions validates builds only. Publication and deployment are separate
  explicitly authorized operations.
- Generated `build_*`, `vendor/`, `.docara/`, `.env`, and working `source/`
  directories are local-only.

## License

Source code, configuration, scripts, templates, and code examples are
available under the [Apache License 2.0](LICENSE). Original documentation prose and
images in `content/` are available under
[CC BY 4.0](LICENSE-CONTENT.md). Third-party materials retain their original
terms.
