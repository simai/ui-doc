---
extends: _core._layouts.documentation
section: content
title: Warning
description: Warning
---

# Warning

The **Warning** role is used to draw attention to potentially dangerous or critical problems that have not yet
occurred. The color palette of this role helps the user notice the warning in time and react before errors appear.

Warning role variations:

* **Warning** — fills, text, and icons with a strong accent indicating the need to pay attention.
* **On Warning** — text and icons that are optimally visible on the Warning color background.
* **Warning Container** — muted fill used to highlight areas with warnings or tonal interface elements.
* **On Warning Container** — text and icons on the Warning Container background.
* **On Warning Container Graphic** — fills of large graphic objects on the Warning Container background.
* **Warning Transparent** — a semi-transparent color for highlighting interactive elements with a transparent background
  on hover (for example, for outline buttons).
* **Outline Warning** — color for outlines, borders, or dividers associated with warning elements.

Example of using the Warning role:

![][image15]

![][image16]

The following variables are used for the Warning role:

| Variable                           | Value (light)             | Value (dark)              |
|:-----------------------------------|:--------------------------|:--------------------------|
| `--sf-warning`                     | `--sf-warning-40`         | `--sf-warning-80`         |
| `--sf-warning-hover`               | `--sf-warning-35`         | `--sf-warning-85`         |
| `--sf-warning-active`              | `--sf-warning-30`         | `--sf-warning-90`         |
| `--sf-warning-container`           | `--sf-warning-90`         | `--sf-warning-30`         |
| `--sf-warning-container-hover`     | `--sf-warning-85`         | `--sf-warning-35`         |
| `--sf-warning-container-active`    | `--sf-warning-80`         | `--sf-warning-40`         |
| `--sf-warning-transparent-hover`   | `--sf-warning-50--alfa-4` | `--sf-warning-90--alfa-4` |
| `--sf-warning-transparent-select`  | `--sf-warning-50--alfa-8` | `--sf-warning-90--alfa-8` |
| `--sf-warning-transparent-active`  | `--sf-warning-50--alfa-12`| `--sf-warning-90--alfa-12`|
| `--sf-warning-transparent-overlay` | `--sf-warning-50--alfa-24`| `--sf-warning-90--alfa-24`|
| `--sf-on-warning`                  | `--sf-white`              | `--sf-warning-20`         |
| `--sf-on-warning-container`        | `--sf-warning-10`         | `--sf-warning-90`         |
| `--sf-on-warning-container-graphic`| `--sf-warning-50`         | `--sf-warning-60`         |
| `--sf-outline-warning`             | `--sf-warning-50`         | `--sf-warning-60`         |
{.table}

[image15]: /assets/build/img/b64/faa5487eac403f05.png
[image16]: /assets/build/img/b64/75051c00915713c5.png
