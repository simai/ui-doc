```markdown
---
extends: _core._layouts.documentation
section: content
title: Font size categories
description: Font size categories
---

# Font size categories

Font sizes are conventionally divided into three categories:

* **Small fonts (¼–½):** the difference between sizes is 0.125rem (2px).
* **Standard fonts (1–6):** the difference between sizes is 0.25rem (4px).
* **Large fonts (7–12):** the difference between sizes is 0.5rem (8px).

This division simplifies working with typography, making font sizes more predictable and convenient when scaling.

| Variable              | Value (mobile) |      | Value (desktop) |      |
|:----------------------|----------------|:-----|-----------------|:-----|
| `--sf-text--size-1/4` | `--sf-b0`      | 10px | `--sf-b0`       | 10px |
| `--sf-text--size-1/3` | `--sf-b2`      | 12px | `--sf-b2`       | 12px |
| `--sf-text--size-1/2` | `--sf-b2`      | 12px | `--sf-b4`       | 14px |
| `--sf-text--size-1`   | `--sf-b4`      | 14px | `--sf-b6`       | 16px |
| `--sf-text--size-2`   | `--sf-b6`      | 16px | `--sf-c0`       | 20px |
| `--sf-text--size-3`   | `--sf-b8`      | 18px | `--sf-c2`       | 24px |
| `--sf-text--size-4`   | `--sf-c0`      | 20px | `--sf-c4`       | 28px |
| `--sf-text--size-5`   | `--sf-c1`      | 22px | `--sf-c6`       | 32px |
| `--sf-text--size-6`   | `--sf-c2`      | 24px | `--sf-c8`       | 36px |
| `--sf-text--size-7`   | `--sf-c4`      | 28px | `--sf-d0`       | 40px |
| `--sf-text--size-8`   | `--sf-c6`      | 32px | `--sf-d2`       | 48px |
| `--sf-text--size-9`   | `--sf-c8`      | 36px | `--sf-d4`       | 56px |
| `--sf-text--size-10`  | `--sf-d0`      | 40px | `--sf-d6`       | 64px |
| `--sf-text--size-11`  | `--sf-d1`      | 44px | `--sf-d8`       | 72px |
| `--sf-text--size-12`  | `--sf-d2`      | 48px | `--sf-e0`       | 80px |
{.table}

For the **label** role, the following text size variables are used:

| Variable                  | Value                  |
|:--------------------------|:-----------------------|
| `--sf-label-small--size`  | `--sf-text--size-1/4` |
| `--sf-label-medium--size` | `--sf-text--size-1/3` |
| `--sf-label-large--size`  | `--sf-text--size-1/2` |
{.table}

For the **body-text** role, the following text size variables are used:

| Variable                 | Value                |
|:-------------------------|:---------------------|
| `--sf-text-small--size`  | `--sf-text--size-1/2` |
| `--sf-text-medium--size` | `--sf-text--size-1`   |
| `--sf-text-large--size`  | `--sf-text--size-2`   |
{.table}

For the **heading** role, the following text size variables are used:

| Variable               | Value              |
|:-----------------------|:-------------------|
| `--sf-heading-1--size` | `--sf-text--size-6` |
| `--sf-heading-2--size` | `--sf-text--size-5` |
| `--sf-heading-3--size` | `--sf-text--size-4` |
| `--sf-heading-4--size` | `--sf-text--size-3` |
| `--sf-heading-5--size` | `--sf-text--size-2` |
| `--sf-heading-6--size` | `--sf-text--size-1` |
{.table}

For the **display** role, the following text size variables are used:

| Variable               | Value               |
|:-----------------------|:--------------------|
| `--sf-display-1--size` | `--sf-text--size-12` |
| `--sf-display-2--size` | `--sf-text--size-11` |
| `--sf-display-3--size` | `--sf-text--size-10` |
| `--sf-display-4--size` | `--sf-text--size-9`  |
| `--sf-display-5--size` | `--sf-text--size-8`  |
| `--sf-display-6--size` | `--sf-text--size-7`  |
{.table}

```