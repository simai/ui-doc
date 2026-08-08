# ui-doc content spacing GitHub validation correction C3

Date: 2026-08-08
Status: content_spacing_github_correction_ready_for_independent_owner_audit

This bounded correction makes the checked-in validation workflow runnable with
its default PATH-visible Composer, pins setup-php to the peeled immutable commit,
restores the existing deploy PHP 8.2 baseline and adds permanent regression
coverage. It does not execute deploy, modify documentation content, change the
Framework runtime or repin Docara.

Entry revision: `92d8ec40ab969af99afc9e0abcb0e93e29eb1d0e`.

Done when the real clean lifecycle succeeds with `COMPOSER_BINARY` unset, both
workflows parse and pass actionlint, and the terminal correction revision is
ready for an independent owner audit while remaining unpublished.

## Result

- Implementation commit: `e02e81dedca8ae2cd8b2343daf52dc17743267f2`.
- `bin/run-composer.sh` resolves a PATH command to an absolute executable and
  executes it directly; an explicit absolute `COMPOSER_BINARY` remains supported.
- The permanent regression makes the PHP stand-in fail if the obsolete
  `php composer` invocation returns.
- Both workflows pin `shivammathur/setup-php` to peeled commit
  `f3e473d116dcccaddc5834248c87452386958240`; validation deliberately uses PHP
  8.4, while deploy is restored to its pre-correction PHP 8.2 baseline.
- `actionlint` and YAML parsing pass for both workflow files.
- A clean clone with Node 20.19.5, `PHP_BINARY=/Applications/ServBay/bin/php`,
  PATH-visible Composer and `COMPOSER_BINARY` unset passes the full lifecycle:
  506 Markdown, 505 HTML, 70,395 references, broken 0, tracked status clean.

This revision remains unpublished. GitHub-hosted validation is
`cloud_ci_pending_authorized_publication`; no deploy workflow or external site
was executed. Rollback is the entry revision above.
