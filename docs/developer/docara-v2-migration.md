# Docara v2 migration

The previous ui-doc repository mixed authored documentation, Blade templates,
custom PHP tags, Vite assets, translation tooling, and deployment automation.
The current repository deliberately retains only the public documentation and
the configuration required to build it with the shared Docara v2 runtime.

The migration was performed from the consolidated historical branches with
`scripts/migrate-legacy-content.php`. It normalizes the closed front-matter
contract, safely displays legacy raw HTML as text, relocates Framework component
pages away from Docara's reserved `/components/` catalog, flattens unsupported
route depth, and records compatible redirects in `redirects.json`.

Rollback is available from the pre-migration Git bundle and dirty-worktree
backup retained outside the repository. No live site was modified by this
migration.

## Accepted migration ledger

- Docara runtime: `559593685a2273eca551b1643c90b3f0e897327c`.
- Authored Markdown pages: 939.
- Generated files: 2,259.
- Deterministic tree-manifest SHA-256:
  `887506e917da5f3f636de4d25a79435e551844b0065e20f86d7861b316c7c176`.
- Static verification: 1,692 HTML pages, 921,687 local references, 0 broken.
- A repeated migration pass changes 0 Markdown files.

The branch history records the former content-spacing, fundamentals,
Docara-container, Framework-contract, and version-matrix lines before they are
retired. Their runtimes are not retained in the final tree.
