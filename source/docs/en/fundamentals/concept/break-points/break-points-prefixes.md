---
extends: _core._layouts.documentation
section: content
title: Breakpoint prefixes
description: Breakpoint prefixes
---

# Breakpoint prefixes

SIMAI modifiers use prefix notation for breakpoints:

| Prefix | Value                    | Width     |
|:-------|:-------------------------|----------:|
| none   | < `--sf-breakpoint-sm`    | < 576px |
| **sm** | ≥ `--sf-breakpoint-sm`    | ≥ 576px |
| **md** | ≥ `--sf-breakpoint-md`    | ≥ 768px |
| **lg** | ≥ `--sf-breakpoint-lg`    | ≥ 960px |
| **xl** | ≥ `--sf-breakpoint-xl`    | ≥ 1152px |
| **xxl**| ≥ `--sf-breakpoint-xxl`   | ≥ 1536px |
{.table}

**Usage examples:**

* **md:p-1** — this padding applies from 768px.
* **lg:bg-primary** — sets `bg-primary` on screens ≥ 960px.
* **xxl:max-width-80** — constrains container width starting at 1536px.
