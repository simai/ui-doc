---
extends: _core._layouts.documentation
section: content
title: Surface
description: Surface
---

# Surface

The **Surface** role is intended to form a neutral background used on surfaces, cards, and interface elements. Using
the Surface role helps separate content from the page background while maintaining visual harmony and readability.

Surface role variations:

* **Surface** — neutral fill for large areas or surfaces.
* **On Surface** — text and icons optimized for contrast and readability on the Surface background.
* **Surface Container** — a slightly muted fill for navigation elements, tonal buttons, and other interface components,
  allowing you to gently highlight objects without a bright color accent.
* **Surface Transparent** — a semi-transparent color for emphasizing elements with a transparent background. Used on
  interaction, for example to create hover effects for outline buttons.

![][image20]

![][image21]

The following variables are used for the Surface role:

| Variable                          | Value (light)             | Value (dark)              |
|:----------------------------------|:--------------------------|:--------------------------|
| `--sf-surface-0`                  | `--sf-white`              | `--sf-neutral-5`          |
| `--sf-surface-1`                  | `--sf-neutral-98`         | `--sf-neutral-10`         |
| `--sf-surface-2`                  | `--sf-neutral-95`         | `--sf-neutral-15`         |
| `--sf-surface-3`                  | `--sf-neutral-90`         | `--sf-neutral-20`         |
| `--sf-surface-4`                  | `--sf-neutral-85`         | `--sf-neutral-25`         |
| `--sf-surface-inverse`            | `--sf-neutral-20`         | `--sf-neutral-90`         |
| `--sf-surface-inverse-fixed`      | `--sf-neutral-20`         | `--sf-neutral-20`         |
| `--sf-surface-container`          | `--sf-neutral-90`         | `--sf-neutral-30`         |
| `--sf-surface-container-hover`    | `--sf-neutral-85`         | `--sf-neutral-35`         |
| `--sf-surface-container-active`   | `--sf-neutral-80`         | `--sf-neutral-40`         |
| `--sf-on-surface`                 | `--sf-neutral-10`         | `--sf-neutral-90`         |
| `--sf-on-surface-fixed`           | `--sf-neutral-10`         | `--sf-neutral-10`         |
| `--sf-on-surface-hover`           | `--sf-neutral-15`         | `--sf-neutral-85`         |
| `--sf-on-surface-active`          | `--sf-neutral-20`         | `--sf-neutral-80`         |
| `--sf-on-surface-variant`         | `--sf-neutral-40`         | `--sf-neutral-60`         |
| `--sf-on-surface-inverse`         | `--sf-neutral-90`         | `--sf-neutral-10`         |
| `--sf-on-surface-inverse-fixed`   | `--sf-neutral-90`         | `--sf-neutral-90`         |
| `--sf-surface-transparent-hover`  | `--sf-neutral-50--alfa-4` | `--sf-neutral-90--alfa-4` |
| `--sf-surface-transparent-select` | `--sf-neutral-50--alfa-8` | `--sf-neutral-90--alfa-8` |
| `--sf-surface-transparent-active` | `--sf-neutral-50--alfa-12`| `--sf-neutral-90--alfa-12`|
| `--sf-surface-transparent-overlay`| `--sf-neutral-50--alfa-24`| `--sf-neutral-90--alfa-24`|
{.table}

[image20]: /assets/build/img/b64/92dbbe6d114d1066.png
[image21]: /assets/build/img/b64/d09425ddfe2b38ac.png
