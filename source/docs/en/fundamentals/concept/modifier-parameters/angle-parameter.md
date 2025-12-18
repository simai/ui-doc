---
extends: _core._layouts.documentation
section: content
title: Angle parameter
description: Angle parameter
---

# Angle parameter

The angle parameter is used to specify a direction made up of two sides — one horizontal and one vertical:

1. `left-bottom` — bottom-left corner.
2. `left-top` — top-left corner.
3. `right-bottom` — bottom-right corner.
4. `right-top` — top-right corner.

The angle notation is added with a hyphen after the property name. Examples:

1. **Element positioning**: `left-top-auto`, `right-bottom-0`.
2. **Border radius**: `radius-left-bottom-1/3`, `radius-right-top-0`.

This approach makes it possible to control border rounding and element positioning more precisely for individual corners.
