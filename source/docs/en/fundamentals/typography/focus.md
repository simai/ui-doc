---
extends: _core._layouts.documentation
section: content
title: Focus
description: Focus
---

# Focus

Use these variables to show focus states (e.g., keyboard navigation):

| Variable             | Value     |
|:---------------------|:----------|
| `--sf-focus--offset` | `--sf-a0` |
| `--sf-focus--style`  | solid     |
| `--sf-focus--width`  | `--sf-a4` |
{.table}

Focus CSS example:

```css
*:focus {
  outline-color: var(--sf-focus-color);
  outline-offset: var(--sf-focus--offset);
  outline-style: var(--sf-focus--style);
  outline-width: var(--sf-focus--width);
}
```
