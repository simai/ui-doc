---
extends: _core._layouts.documentation
section: content
title: Splitting mobile and desktop
description: Splitting mobile and desktop
---

# Splitting mobile and desktop

The framework separates mobile and desktop based on screen width. Breakpoints below lg (960px) are mobile; lg and above
are desktop.

Variables:

| Variable                | Value               | Size  |
|--------------------------|---------------------|--------|
| --sf-breakpoint-desktop | --sf-breakpoint-lg | 960px  |
{.table}

| Breakpoint        | Value                    | Size   |
|-------------------|---------------------------|---------|
| **mobile**        | \<--sf-breakpoint-desktop | \<960px |
| **desktop**       | ≥--sf-breakpoint-desktop  | ≥960px  |
{.table}

This approach cleanly separates mobile and desktop styles, simplifying responsive development.
