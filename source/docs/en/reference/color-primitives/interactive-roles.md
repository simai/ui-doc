---
extends: _core._layouts.documentation
section: content
title: Interactive roles
description: Interactive roles
---

# Interactive roles

Although the principles are largely inspired by Material Design, SIMAI adapts them for web development. Instead of
creating "elevations" above the surface through a layer, SIMAI uses interactivity roles.

* **Hover** — state when the cursor is hovering over an element.
* **Active** — state of an active element.
* **Select** — state of a selected element within a set.

Example of applying an interactive role:

```css
.hover\:color-primary:hover {
  color: var(--sf-primary-hover);
}
```

