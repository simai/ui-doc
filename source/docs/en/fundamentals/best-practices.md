---
extends: _core._layouts.documentation
section: content
title: Modifier constraints
description: Modifier constraints
---

# Modifier constraints

Modifier constraints define boundary values for properties such as minimum or maximum values. This lets you control the size and behavior of elements within specified limits.

To denote a boundary value, use the `{min|max}` prefix placed before the property name:

1. `min-w-0` — minimum width of the element is `0`.
2. `min-w-fit` — minimum width matches the content size.
3. `min-w-full` — minimum width equals the container width.
4. `max-w-0` — maximum width of the element is `0`.
5. `max-w-full` — maximum width equals the container width.
6. `max-w-screen` — maximum width equals the screen width.

**Note:** A constraint differs from a value in that it is always placed before the property, while a value comes after it.

**Constraint:** `min-w-0`, `max-w-screen`

**Value:** `auto-cols-min`, `w-content-min`

Using constraints allows you to flexibly control element sizes and behavior, ensuring adaptability and consistent UI appearance.
