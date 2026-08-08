````markdown
---
extends: _core._layouts.documentation
section: content
title: Focus
description: Focus
---

# Focus

To display the focus state (for example, when navigating to an element via keyboard), the following variables are used:

| Variable             | Value      |
|:---------------------|:----------|
| `--sf-focus--offset` | `--sf-a0` |
| `--sf-focus--style`  | solid     |
| `--sf-focus--width`  | `--sf-a4` |
{.table}

Example of focus implementation in CSS:

```css
*:focus {
  outline-color: var(--sf-focus-color);
  outline-offset: var(--sf-focus--offset);
  outline-style: var(--sf-focus--style);
  outline-width: var(--sf-focus--width);
}
```

````
