---
extends: _core._layouts.documentation
section: content
title: Line height
description: Line height
---

# Line height

Line heights are calculated separately for body text and headings in 0.25rem (4px) steps to keep layouts consistent.

**Rules:**

* **Body text:**  
  Line height РІвЂ°в‚¬ 1.5 Р“вЂ” font size. If not a 0.25rem multiple, round down to the nearest step.
* **Headings:**  
  Line height РІвЂ°в‚¬ 1.2 Р“вЂ” font size with a minimum of 1. Round down to the nearest 0.25rem.

If a number is off-grid, use the nearest lower value.

## Line height for **body text**

| Variable                | Value (mobile)    |      | Value (desktop)    |       |
|:------------------------|-------------------|:-----|--------------------|:------|
| `--sf-text-height-1/4` | `--sf-b2`         | 12px | `--sf-b2`          | 12px  |
| `--sf-text-height-1/3` | `--sf-b6`         | 16px | `--sf-b6`          | 16px  |
| `--sf-text-height-1/2` | `--sf-b6`         | 16px | `--sf-c0`          | 20px  |
| `--sf-text-height-1`   | `--sf-c0`         | 20px | `--sf-c2`          | 24px  |
| `--sf-text-height-2`   | `--sf-c2`         | 24px | `--sf-c4`          | 28px  |
| `--sf-text-height-3`   | `--sf-c2`         | 24px | `--sf-c8`          | 36px  |
| `--sf-text-height-4`   | `--sf-c4`         | 28px | `--sf-d0`          | 40px  |
| `--sf-text-height-5`   | `--sf-c6`         | 32px | `--sf-d2`          | 48px  |
| `--sf-text-height-6`   | `--sf-c8`         | 36px | `--sf-d3`          | 52px  |
| `--sf-text-height-7`   | `--sf-d0`         | 40px | `--sf-d5`          | 60px  |
| `--sf-text-height-8`   | `--sf-d2`         | 48px | `--sf-d8`          | 72px  |
| `--sf-text-height-9`   | `--sf-d3`         | 52px | `--sf-e0`          | 80px  |
| `--sf-text-height-10`  | `--sf-d5`         | 60px | `--sf-e2`          | 96px  |
| `--sf-text-height-11`  | `--sf-d6`         | 64px | `--sf-e3`          | 104px |
| `--sf-text-height-12`  | `--sf-d8`         | 72px | `--sf-e5`          | 120px |
{.table}

## Line height for **headings**

Heading variables use the `title` prefix to distinguish them and account for the reversed sizing order (heading 1 uses
height 6).

| Variable                | Value (mobile)    |      | Value (desktop)    |      |
|:------------------------|-------------------|:-----|--------------------|:-----|
| `--sf-title-height-1`  | `--sf-b6`         | 16px | `--sf-b6`          | 16px |
| `--sf-title-height-2`  | `--sf-b6`         | 16px | `--sf-c2`          | 24px |
| `--sf-title-height-3`  | `--sf-c0`         | 20px | `--sf-c4`          | 28px |
| `--sf-title-height-4`  | `--sf-c2`         | 24px | `--sf-c6`          | 32px |
| `--sf-title-height-5`  | `--sf-c2`         | 24px | `--sf-c8`          | 36px |
| `--sf-title-height-6`  | `--sf-c4`         | 28px | `--sf-d0`          | 40px |
| `--sf-title-height-7`  | `--sf-c6`         | 32px | `--sf-d2`          | 48px |
| `--sf-title-height-8`  | `--sf-c8`         | 36px | `--sf-d4`          | 56px |
| `--sf-title-height-9`  | `--sf-d0`         | 40px | `--sf-d6`          | 64px |
| `--sf-title-height-10` | `--sf-d2`         | 48px | `--sf-d9`          | 76px |
| `--sf-title-height-11` | `--sf-d3`         | 52px | `--sf-e0`          | 80px |
| `--sf-title-height-12` | `--sf-d4`         | 56px | `--sf-e2`          | 96px |
{.table}

## Using the heading modifier

To switch from body to heading line height, use the `.heading` modifier. It overrides the body line height with the
heading value; include it after body styles.

Example:

```css
.text-1.heading {
  --sf-text-height-1: var(--sf-heading--height-1);
}
```

For **label** roles:

| Variable                    | Value                   |
|:----------------------------|:------------------------|
| `--sf-label-small--height`  | `--sf-text-height-1/4` |
| `--sf-label-medium--height` | `--sf-text-height-1/3` |
| `--sf-label-large--height`  | `--sf-text-height-1/2` |
{.table}

For **body text**:

| Variable                   | Value                   |
|:---------------------------|:------------------------|
| `--sf-text-small--height`  | `--sf-text-height-1/2` |
| `--sf-text-medium--height` | `--sf-text-height-1`   |
| `--sf-text-large--height`  | `--sf-text-height-2`   |
{.table}

For **heading**:

| Variable                 | Value                  |
|:-------------------------|:-----------------------|
| `--sf-heading-1--height` | `--sf-title-height-6` |
| `--sf-heading-2--height` | `--sf-title-height-5` |
| `--sf-heading-3--height` | `--sf-title-height-4` |
| `--sf-heading-4--height` | `--sf-title-height-3` |
| `--sf-heading-5--height` | `--sf-title-height-2` |
| `--sf-heading-6--height` | `--sf-title-height-1` |
{.table}

For **display**:

| Variable                 | Value                   |
|:-------------------------|:------------------------|
| `--sf-display-1--height` | `--sf-title-height-12` |
| `--sf-display-2--height` | `--sf-title-height-11` |
| `--sf-display-3--height` | `--sf-title-height-10` |
| `--sf-display-4--height` | `--sf-title-height-9`  |
| `--sf-display-5--height` | `--sf-title-height-8`  |
| `--sf-display-6--height` | `--sf-title-height-7`  |
{.table}
