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
php scripts/materialize-framework-runtime.php /absolute/path/to/ui /absolute/path/to/ui-smart
php scripts/migrate-legacy-content.php content redirects.json
php -d memory_limit=512M vendor/bin/docara build production
php -d memory_limit=512M vendor/bin/docara verify-static build_production
node scripts/audit-utility-executable-examples.mjs /absolute/path/to/exact-core \
  --build-root="$(pwd)/build_production"
```

The migration command is deterministic and must report zero changed Markdown
files on committed content. It remains in the repository so historical source
material can be normalized through the same documented path.

The utility example audit must receive the absolute path to the exact Core
archive pinned by `simai-framework.lock.json`; a moving branch or an arbitrary
local checkout is not an equivalent input.

## Repository boundaries

- One physical Markdown file owns each public page.
- UI strings belong to `content/<locale>/lang.json`.
- Stable Docara `2.9.0` is pinned to its exact published source revision in
  `composer.lock`. The bounded Framework pair recorded in
  `simai-framework.lock.json` is materialized after install from immutable Git
  objects by `scripts/materialize-framework-runtime.php`; never substitute
  working-tree or moving-branch bytes.
- GitHub Actions validates builds only. Publication and deployment are separate
  explicitly authorized operations.
- Generated `build_*`, `vendor/`, `.docara/`, `.env`, and working `source/`
  directories are local-only.
