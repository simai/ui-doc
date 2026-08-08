# ui-doc content spacing GitHub validation correction C3

Date: 2026-08-08
Status: in_progress

This bounded correction makes the checked-in validation workflow runnable with
its default PATH-visible Composer, pins setup-php to the peeled immutable commit,
restores the existing deploy PHP 8.2 baseline and adds permanent regression
coverage. It does not execute deploy, modify documentation content, change the
Framework runtime or repin Docara.

Entry revision: `92d8ec40ab969af99afc9e0abcb0e93e29eb1d0e`.

Done when the real clean lifecycle succeeds with `COMPOSER_BINARY` unset, both
workflows parse and pass actionlint, and the terminal correction revision is
ready for an independent owner audit while remaining unpublished.
