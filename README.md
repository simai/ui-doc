# SIMAI Framework Documentation

This repository contains the Russian and English public documentation for
SIMAI Framework. It is a content-only Docara 2 project: authored pages live in
`content/<locale>/`, site configuration lives in `docara.json`, and local
assets live in `assets/`.

Developer references:

- [Эталон страницы утилиты](docs/developer/utility-page-reference.md);
- [Эталон страницы компонента](docs/developer/component-page-reference.md).

## Local checks

```bash
composer install
composer docara:compatibility:check
php scripts/materialize-framework-runtime.php /absolute/path/to/ui /absolute/path/to/ui-smart
php scripts/migrate-legacy-content.php content redirects.json
composer docs:versions:check
php scripts/audit-framework-documentation-versions.php --check-remote
php scripts/audit-guide-information-architecture.php
php scripts/audit-guide-redirects.php
php scripts/audit-foundation-docs.php /absolute/path/to/ui
php -d memory_limit=2G vendor/bin/docara build production
php -d memory_limit=2G vendor/bin/docara verify-static build_production
node scripts/audit-utility-executable-examples.mjs /absolute/path/to/exact-core \
  --build-root="$(pwd)/build_production"
```

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
