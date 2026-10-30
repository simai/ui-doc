# The documentation's usage record

Standard `simai.linkage` 1.0.0: documentation pages are consumers of SIMAI
Framework units. `contracts/documentation/unit-usage.json` records, for each page
of `content/ru`, the units the page shows, with the version and the content hash
it was last read against. `scripts/build-unit-usage.mjs` reads the units from the
page itself (`config/reference-pages.json`, the Smart contract in a reference
section, the tags and ports in the page and its examples) and compares the record
with the pinned pair and package through ui-builder's `reconcile`.

## After a repin

1. `composer run docs:usage:check` says which pages are behind: `own_unit_changed`
   for a page whose own unit moved, `behind` with those a shared foundation moved,
   `not_recorded` for a page that is new, `uses_other_units_now` for a page whose
   text now names other units. `--out <file>` writes the whole report, unit by unit.
2. Read those pages against the new unit and correct them.
3. `node scripts/build-unit-usage.mjs --accept <page>` for each page read
   (`content/ru/...` or the path under it), and commit the record.

The check reports and changes nothing: it runs inside `docs:check` and does not
fail it yet. A repin never accepts on its own, because a new hash does not make a
page's prose true. `--write` takes every page anew; it is for the first record.

The first record was taken at `ui-68cbd8d1b560` with `larena-0905ea5a358b`. It says
what the pages were last brought up to, not that every page had been read against
every unit at that pair.
