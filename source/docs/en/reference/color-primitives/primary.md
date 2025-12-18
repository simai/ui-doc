---
extends: _core._layouts.documentation
section: content
title: Primary
description: Primary
---

# Primary

![][image4]

The **Primary** role is used for the most prominent and important interface elements, such as high-priority buttons or
active element states. Using this color is appropriate when it is necessary to draw the user's attention to a specific
object or action.

It is not recommended to use Primary for many repeating elements. For that, it is better to use Secondary. Primary
should be a rare but expressive accent that helps the user easily discover key objects on the screen.

Primary role variations:

* **Primary** — the main color for fill, text, and icons with a strong accent on the surface.
* **On Primary** — text and icon color on the Primary background.
* **Primary Container** — a bright background color for key components, for example for a FAB (Floating Action Button).
* **On Primary Container** — text and icon color on the Primary Container background.
* **On Primary Container Graphic** — fills of large graphic elements on the Primary Container background.
* **Primary Transparent** — a semi-transparent color for accenting transparent elements on the surface (for example,
  outlined buttons).
* **Primary Surface** — a light color for accenting transparent elements on the surface (for example, outlined
  buttons).
* **Outline Primary** — color for borders, outlines, and lines in Primary shades.

Example of using the Primary color:

![][image5]

![][image6]

The following variables are used for the Primary role:

| Variable                           | Value (light)             | Value (dark)              |
|:-----------------------------------|:--------------------------|:--------------------------|
| `--sf-primary`                     | `--sf-primary-40`         | `--sf-primary-80`         |
| `--sf-primary-hover`               | `--sf-primary-35`         | `--sf-primary-85`         |
| `--sf-primary-active`              | `--sf-primary-30`         | `--sf-primary-90`         |
| `--sf-primary-container`           | `--sf-primary-90`         | `--sf-primary-30`         |
| `--sf-primary-container-hover`     | `--sf-primary-85`         | `--sf-primary-35`         |
| `--sf-primary-container-active`    | `--sf-primary-80`         | `--sf-primary-40`         |
| `--sf-primary-transparent-hover`   | `--sf-primary-50--alfa-4` | `--sf-primary-90--alfa-4` |
| `--sf-primary-transparent-select`  | `--sf-primary-50--alfa-8` | `--sf-primary-90--alfa-8` |
| `--sf-primary-transparent-active`  | `--sf-primary-50--alfa-12`| `--sf-primary-90--alfa-12`|
| `--sf-primary-transparent-overlay` | `--sf-primary-50--alfa-24`| `--sf-primary-90--alfa-24`|
| `--sf-on-primary`                  | `--sf-white`              | `--sf-primary-20`         |
| `--sf-on-primary-container`        | `--sf-primary-10`         | `--sf-primary-90`         |
| `--sf-on-primary-container-graphic`| `--sf-primary-50`         | `--sf-primary-60`         |
| `--sf-outline-primary`             | `--sf-primary-50`         | `--sf-primary-60`         |
{.table}

[image4]: /assets/build/img/b64/04f4d95dc3599cf6.png
[image5]: /assets/build/img/b64/e22b8d022dafae71.png
[image6]: /assets/build/img/b64/000f8a8152454bc7.png
