---
extends: _core._layouts.documentation
section: content
title: "Text indents"
description: "Text indents"
---

# Text indents

In the SIMAI Framework, the "indent-down" principle is used: all elements receive only a bottom margin, which
simplifies block layout and prevents margins from overlapping each other. The exception is H2–H6 headings inside the
text flow, which have default margins without additional modifiers. The H1 heading has no top margin, because it is
usually placed at the beginning of the page and does not need extra space above.

* For the bottom margin of text and its content, `--sf-space-1` is used.
* For the top margin of H2–H6 headings, a doubled value `--sf-space-4` is used.

**Indent variables:**

| Variable                     | Value         |
|:-----------------------------|:-------------|
| `--sf-text--space-bottom`    | `--sf-space-1` |
| `--sf-heading--space-top`    | `--sf-space-4` |
| `--sf-heading--space-bottom` | `--sf-space-1` |
{.table}
