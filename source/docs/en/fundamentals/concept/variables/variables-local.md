---
extends: _core._layouts.documentation
section: content
title: "Local variables"
description: "Local variables"
---

# Local variables

Local variables are valid only within a specific plugin or component. They are used to control parameters specific to a
particular solution without affecting the rest of the framework. Local variable names follow the pattern:
`--sf-{property}–{value}`

**Examples:**

* `--sf-padding--small` — padding value inside a plugin.
* `--sf-font-size--heading` — heading font size for a specific component.
