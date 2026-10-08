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

`composer docs:build` runs the same script but kills it at 300 seconds, which a
full build exceeds -- call php directly, as above.

To build and serve the result as the local preview:

```bash
export DOCARA_SIMAI_UI_ROOT=/path/to/exact/ui
scripts/publish-local-preview.sh 20261008-transparency
```

It builds, copies the tree into `~/Sites/.ui-doc-releases/<name>`, points
`~/Sites/ui-doc.test` at it and then keeps only the last few builds, the live
one always among them. Each release is a complete copy of the site, about
1.3 GB: 107 of them had collected before this was automated, holding 136 GB
with 17 GB left on the disk. `PUBLISH_KEEP`, `PUBLISH_RELEASES` and
`PUBLISH_LINK` override how many are kept and where they go.

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
