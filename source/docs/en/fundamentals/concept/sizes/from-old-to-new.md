---
extends: _core._layouts.documentation
section: content
title: Migrating from the old system to the new one
description: Migrating from the old system to the new one
---

# Migrating from the old system to the new one

To move from the old spacing system (`--sf-space--size-N`) to the new one (`--sf-space-...`), use the following mapping table:

| Old value            | New value       |
|:---------------------|:----------------|
| `--sf-space--size-0` | `--sf-space-0`  |
| `--sf-space--size-1` | `--sf-space-1/3`|
| `--sf-space--size-2` | `--sf-space-1/2`|
| `--sf-space--size-3` | `--sf-space-1`  |
| `--sf-space--size-4` | `--sf-space-1`  |
| `--sf-space--size-5` | `--sf-space-2`  |
| `--sf-space--size-6` | `--sf-space-3`  |
| `--sf-space--size-7` | `--sf-space-4`  |
| `--sf-space--size-8` | `--sf-space-4`  |
| `--sf-space--size-9` | `--sf-space-5`  |
{.table}

This way, when you switch to the new spacing system, you get a more logical, easy-to-use layout spacing model while keeping compatibility with the old system via the mappings above.
