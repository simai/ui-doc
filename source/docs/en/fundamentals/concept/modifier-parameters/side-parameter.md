---
extends: _core._layouts.documentation
section: content
title: Side parameter
description: Side parameter
---

# Side parameter

The side parameter specifies which particular side of an element a modifier applies to:

1. `left` — left side.
2. `right` — right side.
3. `top` — top side.
4. `bottom` — bottom side.

The side parameter is added with a hyphen after the property name. Examples:

1. **Element positioning**: `left-1/2`, `right-0`, `top-auto`, `bottom-2`.
2. **Border radius**: `radius-left-1/3`, `radius-top-0`.
3. **Margin**: `m-top-0`, `m-left-1`.
4. **Padding**: `p-bottom-1`, `p-right-1`.

**Note:** The side parameter may look similar to an alignment value. You can distinguish a parameter by the mandatory value that follows it.

**Parameter**: `radius-left-1/3`, `top-1/2`

**Value**: `text-left`, `bg-top`
