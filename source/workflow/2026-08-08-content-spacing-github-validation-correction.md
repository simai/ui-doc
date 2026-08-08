# ui-doc content spacing GitHub validation correction

Date: 2026-08-08
Status: content_spacing_github_correction_ready_for_independent_owner_audit

This project-owned correction adds a non-deploy GitHub validation contour and one
canonical validation/build entrypoint shared with the existing deploy workflow.
It must preserve the exact project `package.json`, tracked `source/workflow`
history and documentation integrity across a real clean `docara init --update`
plus ordinary frozen frontend install.

Entry revision: `510d43e11c48eae12d3d3b33a3a38779801efc2d`.

The final commit will remain unpublished in this batch. Framework local evidence
may clone an exact local repository override, while hosted GitHub Actions remains
`cloud_ci_pending_authorized_publication` until that immutable commit is pushed by
a separately authorized action.

## Result

- Lifecycle implementation commits: `c002f302f43a4cb5c69053aa453af87c8433b6de`
  and `14b3a740328b7cd2d1221a99538b907bf8bc0a21`.
- The canonical validation entrypoint is `bin/validate-docs-project.sh`; both
  pull-request validation and the existing deploy workflow invoke it before any
  deploy step.
- A real clean lifecycle preserves the project-owned `package.json` and tracked
  `source/` files across `docara init --update --force-core-files` and a frozen
  Yarn install. The previously reproduced deletion of nine tracked workflow
  files plus creation of `source/index.blade.md` and `nul` is now covered by the
  permanent lifecycle regression.
- Documentation integrity: 506 Markdown files, broken links 0. Production
  rendering: 505 HTML files, 70,395 references, broken references 0.
- The content-spacing page and every asset referenced by its rendered HTML return
  HTTP 200 in the local production smoke.
- Hosted GitHub Actions has not run because this exact correction revision is not
  published. Its state remains `cloud_ci_pending_authorized_publication`.

No documentation deploy, publication, Framework runtime change, Docara repin or
site write was performed. Rollback is the entry revision above; the lifecycle
scripts and validation workflow can be reverted without touching documentation
content or the frozen spacing contract.
