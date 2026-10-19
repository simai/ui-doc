# Exact Composition Recipe publication copy

This directory is a byte-identical publication copy of the normative files in
`simai/ui-source` revision `eb5b215c332c65644529a5c12631ec57c0f30df1`.
The canonical owner remains `ui-source/src/core/contracts/composition-recipe-v1/`.
Edition 1.1.0 lets the four schemas of the kit (recipe, recipe-manifest, inputs,
dependencies) and the canonicalization profile take their names without a
version (`simai.composition.recipe` with `schema_version` 1,
`simai.recipe.canonical-json`) beside the older labels. The algorithm, limits
and value schemas did not change: a recipe in the older form resolves to the
bytes and digests edition 1.0.1 fixed, and `fixtures/header-switch.json` is
unchanged. Its normative digest is
`sha256:b9eba08bffbdffcb17e2af9d1349764fc8ef279828c44af6a02fd02ce7a5d649`.

`scripts/export-ai-documentation.php` verifies each copy against
`contract.lock.json` and exports it as AI First knowledge. The exact Framework
runtime pair used by this documentation is separately pinned in
`simai-framework.lock.json`; the copy does not itself switch a running site.
`fixtures/header-switch.json` is a byte-identical, checked example from the
same source revision, verified against the public example copy
`assets/examples/composition/header-switch.json`, which stays in the older
form. It is published alongside the specification but is not part of
`normativeFiles`.

Docara (3.3.1 and later) accepts the Recipe editions its composition runtime
lock lists in `contract.editions` (1.0.1 and 1.1.0) and executes the one the
Framework distribution declares. `scripts/audit-docara-recipe-primary.php`
checks every page's dependency receipt against that edition
(`scripts/recipe-edition.php`, tested by `scripts/test-recipe-edition.php`) and
that it is the edition published here.
