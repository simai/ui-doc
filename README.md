# SIMAI Framework Documentation

This repository contains the Russian and English public documentation for
SIMAI Framework. It is a content-only Docara 2 project: authored pages live in
`content/<locale>/`, site configuration lives in `docara.json`, and local
assets live in `assets/`.

## Local checks

```bash
composer install
php scripts/migrate-legacy-content.php content redirects.json
php -d memory_limit=512M vendor/bin/docara build production
php -d memory_limit=512M vendor/bin/docara verify-static build_production
```

The migration command is deterministic and must report zero changed Markdown
files on committed content. It remains in the repository so historical source
material can be normalized through the same documented path.

## Repository boundaries

- One physical Markdown file owns each public page.
- UI strings belong to `content/<locale>/lang.json`.
- Stable `simai/docara:^2.0` is pinned in `composer.lock`; do not copy its
  runtime here.
- GitHub Actions validates builds only. Publication and deployment are separate
  explicitly authorized operations.
- Generated `build_*`, `vendor/`, `.docara/`, `.env`, and working `source/`
  directories are local-only.
