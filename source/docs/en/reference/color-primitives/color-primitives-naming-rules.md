````markdown
---
extends: _core._layouts.documentation
section: content
title: Color primitive naming rules
description: Color primitive naming rules
---

# Color primitive naming rules

**Basic scheme:**

```css
--sf-{color-name}-{tone}
```

Where:

* **color-name** — color name from the set: primary, secondary, tertiary, neutral, error, success.
* **tone** — a number indicating the tone (from 0 to 100).

**Examples:**

```css
--sf-primary-40
--sf-neutral-94
--sf-secondary-5
```

**For semi-transparent colors:**

```text
--sf-{color-name}-{tone}--alfa-{alfa-value}
```

Where:

* **alfa-value** — opacity value from 0 to 1.

**Examples:**

```css
--sf-white--alfa-4
--sf-primary-50--alfa-8
```

Opacity is calculated using the `color-mix` function. Example:

```css
--sf-primary-90--alfa-4: var(color-mix(in srgb, var(--sf-transparent), var(--sf-primary-90) 4%));
```

The `color-mix` function has been supported by modern browsers since 2023. If support issues arise, you can use
additional colors (white and black) to correctly calculate semi-transparent shades:

```css
--sf-primary-90--alfa-4: var(color-mix(in srgb, var(--sf-transparent), var(--sf-primary-90) 4%), --sf-white--alfa-4);
```

It is important that colors for black, white and transparent are declared first in the code to ensure they are
available when computing other color variables.

````
