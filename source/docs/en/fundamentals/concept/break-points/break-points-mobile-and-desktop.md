---
extends: _core._layouts.documentation
section: content
title: Mobile vs desktop
description: Mobile vs desktop breakpoints
---

# Mobile vs desktop devices

The framework also distinguishes between mobile and desktop devices based on viewport width. Breakpoints below `lg` (960px) target mobile, while `lg` and above serve desktop.

Variables:

| Variable               | Value               | Size  |
|------------------------|---------------------|-------:|
| --sf-breakpoint-desktop | --sf-breakpoint-lg  | 960px |
{.table}

| Breakpoint | Value                    | Width     |
|------------|--------------------------|----------:|
| **mobile**  | < `--sf-breakpoint-desktop` | < 960px |
| **desktop** | ≥ `--sf-breakpoint-desktop` | ≥ 960px |
{.table}

This separation clarifies mobile vs desktop styles, making responsive work simpler.
