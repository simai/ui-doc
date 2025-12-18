---
extends: _core._layouts.documentation
section: content
title: Text spacing
description: Text spacing
---

# Text spacing

SIMAI follows a “push-down” rule: elements get bottom margin only, simplifying flow and avoiding stacked margins.
Headings H2–H6 inside text have built-in spacing; H1 has no top margin since it starts the page.

* Text bottom margin: `--sf-space-1`.
* Heading top margin (H2–H6): `--sf-space-4`.

**Spacing variables:**

| Variable                     | Value          |
|:-----------------------------|:---------------|
| `--sf-text--space-bottom`    | `--sf-space-1` |
| `--sf-heading--space-top`    | `--sf-space-4` |
| `--sf-heading--space-bottom` | `--sf-space-1` |
{.table}
