# ui-doc content spacing GitHub validation correction

Date: 2026-08-08
Status: in_progress

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
