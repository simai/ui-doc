---
extends: _core._layouts.documentation
section: content
title: Breakpoint prefixes
description: Breakpoint prefixes
---

# Breakpoint prefixes

Use breakpoint prefixes in SIMAI modifiers:

| Prefix  |        Meaning        |    Size |
|:--------|:--------------------:|---------:|
| none    | \<--sf-breakpoint-sm |  \<576px |
| **sm**  | ≥--sf-breakpoint-sm  |   ≥576px |
| **md**  | ≥--sf-breakpoint-md  |   ≥768px |
| **lg**  | ≥--sf-breakpoint-lg  |   ≥960px |
| **xl**  | ≥--sf-breakpoint-xl  |  ≥1152px |
| **xxl** | ≥--sf-breakpoint-xxl |  ≥1536px |
{.table}

**Examples:**

* **md:p-1** — margin `p-1` turns on from 768px.
* **lg:bg-primary** — background `bg-primary` starts from 960px.
* **xxl:max-width-80** — max width applies from 1536px.
