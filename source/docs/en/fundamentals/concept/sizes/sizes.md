---
extends: _core._layouts.documentation
section: content
title: "Sizes"
description: "Sizes"
---

# Sizes

In the current version of the sizing system in the SIMAI framework, precise adjustments have been made to align the
sizes of different interface elements. This makes it possible to remove unused values and ensure more accurate use of
sizes.

**Size multiplicity:**  
When working with the sizes of any elements, it is important to follow the following rule:

* The final height of any element (button, block, icon, etc.) must be a multiple of `0.25rem` or `4px` (assuming
  `1rem = 16px`).

This means that while inner elements (for example, inside a button) may have non-multiple sizes, the final visible
height of the element on the page must be a multiple of 4px.
