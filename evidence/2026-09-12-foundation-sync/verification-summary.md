# Foundation Documentation Sync verification

Статус: `PASS`.

- Exact pair: `sf-v5.7.0-e2e5d0fe-839ca74a`.
- Core: `e2e5d0fec53dbd40d298299c8c3be0f038c3deb5`.
- Smart: `839ca74ae47e50b69ddde46b8995c48031303bae`.
- Source-backed audit: 0 blockers; exact `rem` policy, five current control roles,
  nine architectural levels, Loader alias semantics, Custom Elements boundary
  and registry counts verified from locked Git objects.
- Build: 918 pages, exit 0.
- Static verification: 1 806 HTML files, 376 869 local references, 0 broken.
- Browser smoke: nine affected routes on desktop and the adaptive-sizing page at
  390×844; expected headings and main landmarks present, no overflow, missing
  images, console warnings or errors.
- Example audit: 502 shared examples, 0 blockers; two pre-existing advisories are
  outside this batch.
- Russian-content audit: repository-wide status remains `needs_revision` because
  of 72 pre-existing findings under `content/ru/utilities/**`; affected pages in
  this batch have no findings.
- Git scope: documentation, one focused audit and evidence only; Core, Smart,
  registry projection, release locks and generated production site are unchanged.

## Result

Readers now have one architecture path from tokens to backend, explicit product
boundaries, exact current control heights, and a clearly separated nine-role
development direction. Direct sizes, `rem`, `--sf-px`, logical directions and
Loader aliases are described without turning internal exceptions into public CSS
contracts.

The local `ui-doc.test` inventory, rollback target and stop conditions are
recorded in `local-site-release-plan.md`. No local site switch, push, merge or
public release was performed.
