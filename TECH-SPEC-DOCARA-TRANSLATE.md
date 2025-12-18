# Tech Spec: Docara Translation Support

Audience: Docara core developer. Goal: ship translation state CLI + Copilot agent template so all Docara-based projects can reuse incremental translation workflow.

## Current reference (in this project)
- Script prototype: bin/docara-translate-state.php
- Agent prototype: .github/agents/docara-translate.agent.md
- State file produced at runtime: source/docs/.translate.php (not committed upstream)

## Requirements for Docara core
1) Provide translation state CLI
- Source the script from core (e.g., place in source/_core/bin/docara-translate-state.php).
- Publish via composer bin so projects get vendor/bin/docara-translate-state (and optionally copy to project bin/ on init).
- Keep behavior identical to prototype: scan, print-locales, print-todo, print-todo-with-size (reads sizes from state), sync-targets, force flag, extensions filter (default md), hidden/_ directories skipped.
- State format: PHP array with base/targets, per-file sha256, translated_from_sha256, needs_translate, has_local_changes, source_size (and size for targets), meta (hash_algo, generated_at, version=1).
- Locale folders: must be primary BCP-47 subtags, lowercase (e.g., en from en-US), located under source/docs/<locale>.

2) Ship agent template
- Place template in source/_core/.github/agents/docara-translate.agent.md.
- On docara init --update (or equivalent), copy to project .github/agents/ (do not overwrite if customized without confirmation).
- Agent contract: ask 3 questions (mode, base language, target language), resolve locale folders (BCP-47 primary subtag), show summary, require user yes, then auto-run scan/todo/sync commands, translate TODO files, respect has_local_changes (ask overwrite/keep copy/skip), reply in user language, create missing target directories. Include size-aware batching guidance (use print-todo-with-size; ~20–30 KB or ~5–10 files per batch, ordered list), special handling for .settings.php/.lang.php (batch-friendly), post-batch sanity checks (TODO count not growing; grep common typos), and short batch summaries.

3) Project integration behavior
- On init/update: deliver CLI and agent; do not clobber user changes silently.
- Ensure docara workflows remain compatible: no changes to existing build steps required.
- Optional: add .translate.php to default .gitignore template (project-level decision).

## Command reference (unchanged)
- Scan (create): php bin/docara-translate-state.php --docs-dir=source/docs --source=<base> --targets=<target> --force
- Scan (update): php bin/docara-translate-state.php --docs-dir=source/docs --source=<base> --targets=<target>
- List TODO (paths only): php bin/docara-translate-state.php --docs-dir=source/docs --source=<base> --targets=<target> --print-todo --target=<target>
- List TODO with sizes (preferred for batching): php bin/docara-translate-state.php --docs-dir=source/docs --source=<base> --targets=<target> --print-todo-with-size --target=<target>
- Sync: php bin/docara-translate-state.php --docs-dir=source/docs --source=<base> --targets=<target> --sync-targets=<target>

## Acceptance checklist
- CLI available as vendor/bin/docara-translate-state (and/or copied to project bin/ on init).
- Agent template delivered to projects and contains the described flow, BCP-47 folder rule, auto-commands, and language-respecting replies.
- Running scan/todo/sync in a fresh project produces/updates source/docs/.translate.php and reflects file changes correctly.
- Locale discovery lists only BCP-47-like folder names (primary subtags).
- Hidden/_ directories are excluded from hashing.
- README/notes in Docara core updated to mention translation workflow and commands.
