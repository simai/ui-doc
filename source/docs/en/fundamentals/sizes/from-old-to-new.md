---
extends: _core._layouts.documentation
section: content
title: Migrating from the old spacing system
description: Migrating from the old spacing system
---

# Migrating from the old spacing system

To switch from the old spacing system (--sf-space--size-N) to the new one (--sf-space-...), use this mapping:

| Old value            | New value        |
|:---------------------|:-----------------|
| `--sf-space--size-0` | `--sf-space-0`   |
| `--sf-space--size-1` | `--sf-space-1/3` |
| `--sf-space--size-2` | `--sf-space-1/2` |
| `--sf-space--size-3` | `--sf-space-1`   |
| `--sf-space--size-4` | `--sf-space-1`   |
| `--sf-space--size-5` | `--sf-space-2`   |
| `--sf-space--size-6` | `--sf-space-3`   |
| `--sf-space--size-7` | `--sf-space-4`   |
| `--sf-space--size-8` | `--sf-space-4`   |
| `--sf-space--size-9` | `--sf-space-5`   |
{.table}

Using the new spacing system gives clearer, more consistent spacing while keeping compatibility through these direct
replacements.
