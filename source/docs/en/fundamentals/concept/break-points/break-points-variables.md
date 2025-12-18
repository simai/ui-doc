---
extends: _core._layouts.documentation
section: content
title: Breakpoint variables
description: Breakpoint variables
---

# Breakpoint variables

Each breakpoint is defined via a variable, which makes it easy to change values centrally. The breakpoints are adapted from Bootstrap with these conditions in mind:

* A breakpoint size should align with the framework’s sizing system.
* Breakpoint values should be divisible by 12 (with 1rem = 16px) to support a 12‑column grid.

**Breakpoint variables:**

| Variable             | Value    | Width  |
|----------------------|----------|-------:|
| --sf-breakpoint-sm   | --sf-g8  |  576px |
| --sf-breakpoint-md   | --sf-h2  |  768px |
| --sf-breakpoint-lg   | --sf-h5  |  960px |
| --sf-breakpoint-xl   | --sf-h8  | 1152px |
| --sf-breakpoint-xxl  | --sf-i2  | 1536px |
{.table}
