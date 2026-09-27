# Docara primary Composition Recipe pipeline

Docara keeps Markdown, `docara.json`, inherited `section.json` and page
sidecars as its editable inputs. Its production builder projects the checked
page, regions, sections and blocks into `simai.composition.recipe.v1`, resolves
it with the exact generated Framework module, and reconstructs the PHP
renderer input from the returned Composition Document.

The normative standard remains owned by `ui-source`; Docara's manifests and
renderers describe product-owned types. The old typed PHP render plan is a
renderer projection, not an independent page store or a second standard.

The local build environment needs PHP, Node.js and an exact generated `ui`
distribution:

```bash
export DOCARA_SIMAI_UI_ROOT=/path/to/exact/ui
export DOCARA_NODE_BINARY=/path/to/node
php scripts/build-documentation.php
php vendor/bin/docara verify-static build_production
```

`DOCARA_NODE_BINARY` is optional when Node.js is on `PATH`. `SIMAI_UI_ROOT` is
the fallback name for the Framework root in package checks and CI.

Each page's build diagnostics contain `composition_recipe_primary` with the
Recipe digest, Document digest and dependency receipt. A mismatch or failed
resolution stops the candidate build before replacing a previously accepted
static tree. Publication still uses the product's existing static snapshots.

The build checks the installed Composer package before rendering and runs
`scripts/audit-docara-recipe-primary.php` afterward. The audit requires a
primary receipt for every page and compares the standard, renderer and
Composer identities. `composer run docs:recipe:check` repeats this check on an
existing production build.

The normative files for developers and AI remain available through `/ai.json`
and the stable identifier
`urn:simai:framework:composition-recipe:specification`. This implementation does
not add or alter the normative JSON fields.
