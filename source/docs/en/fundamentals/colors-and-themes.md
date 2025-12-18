---
extends: _core._layouts.documentation
section: content
title: Colors
description: Colors
---

# Colors

Since version 5.3, SIMAI Framework uses a token-based color system with roles. This simplifies choosing colors in the
interface and reduces mistakes during implementation.

Key concepts:

1. **Primitives** — base colors (transparent, white, black, neutral) that form the foundation of a color scheme.
2. **Tokens** — variables that describe colors in the context of specific roles, using those primitives.
3. **Color roles** — named colors for particular UI tasks. Each role carries a meaning or state:
   1. **Surface** — a neutral background surface.
   2. **Primary**, **Secondary**, **Tertiary** — accent colors for highlighting elements.
   3. **Error**, **Warning**, **Success** — colors for errors, warnings, and success states.
   4. **On-** colors (for example, `on-surface`, `on-primary`) — text/icon colors intended for use on top of the
      corresponding roles.

Usage examples:

* `bg-surface-container` — background color derived from a neutral surface.
* `color-primary` — text/icon color from the Primary role.
* `border-warning` — border color for warning elements.

Inherited colors:

* **inherit** — inherit the parent’s color.
* **current** — use the current text color (e.g., for borders or icons to match adjacent text).

**Note:** Brand or social colors are not included in the new system by default. You can add them manually via extra
variables if needed.
