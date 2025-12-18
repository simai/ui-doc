---
extends: _core._layouts.documentation
section: content
title: Sizes
description: Sizes
---

# Sizes

The SIMAI size system has been finely adjusted to align element dimensions and remove unused values for more precise
sizing.

**Size granularity:**
When sizing elements, follow this rule:

* The final height of any element (button, block, icon, etc.) should be a multiple of `0.25rem` or `4px` (assuming
    `1rem = 16px`).

Internal parts (e.g., inside a button) may be non-multiples, but the final rendered height should still be divisible by
4px.
