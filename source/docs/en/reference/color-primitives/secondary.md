---
extends: _core._layouts.documentation
section: content
title: Secondary
description: Secondary
---

# Secondary

![][image7]

The **Secondary** role is applied to interface elements that either repeat on the screen or do not require a strong
visual accent. This can be a menu, repeating buttons, tabs, or other components that appear in multiple instances.

Using Secondary preserves visual hierarchy and makes the interface more harmonious: elements with this color remain
noticeable but do not distract attention from key objects highlighted by Primary.

Secondary role variations:

* **Secondary** — fill, text, and icons with a moderate accent on the surface.
* **On Secondary** — text and icon color on the Secondary background.
* **Secondary Container** — a muted color for surfaces, suitable for navigation elements or tonal buttons.
* **On Secondary Container** — text and icons on the Secondary Container background.
* **On Secondary Container Graphic** — fills of large graphic objects on the Secondary Container background.
* **Secondary Transparent** — a semi-transparent color for accenting transparent elements on the surface (for example
  for outline buttons).
* **Secondary Overlay** — a semi-transparent color used on top of Secondary Container or Surface, allowing you to
  create additional emphasis.
* **Outline Secondary** — color of borders, outlines, and lines used in combination with the Secondary role.

Example of using the Secondary color:

![][image8]

![][image9]

The following variables are used for the Secondary role:

| Variable                             | Value (light)               | Value (dark)                |
|:-------------------------------------|:----------------------------|:----------------------------|
| `--sf-secondary`                     | `--sf-secondary-40`         | `--sf-secondary-80`         |
| `--sf-secondary-hover`               | `--sf-secondary-35`         | `--sf-secondary-85`         |
| `--sf-secondary-active`              | `--sf-secondary-30`         | `--sf-secondary-90`         |
| `--sf-secondary-container`           | `--sf-secondary-90`         | `--sf-secondary-30`         |
| `--sf-secondary-container-hover`     | `--sf-secondary-85`         | `--sf-secondary-35`         |
| `--sf-secondary-container-active`    | `--sf-secondary-80`         | `--sf-secondary-40`         |
| `--sf-secondary-transparent-hover`   | `--sf-secondary-50--alfa-4` | `--sf-secondary-90--alfa-4` |
| `--sf-secondary-transparent-select`  | `--sf-secondary-50--alfa-8` | `--sf-secondary-90--alfa-8` |
| `--sf-secondary-transparent-active`  | `--sf-secondary-50--alfa-12`| `--sf-secondary-90--alfa-12`|
| `--sf-secondary-transparent-overlay` | `--sf-secondary-50--alfa-24`| `--sf-secondary-90--alfa-24`|
| `--sf-on-secondary`                  | `--sf-white`                | `--sf-secondary-20`         |
| `--sf-on-secondary-container`        | `--sf-secondary-10`         | `--sf-secondary-90`         |
| `--sf-on-secondary-container-graphic`| `--sf-secondary-50`         | `--sf-secondary-60`         |
| `--sf-outline-secondary`             | `--sf-secondary-50`         | `--sf-secondary-60`         |
{.table}

[image7]: /assets/build/img/b64/59f5d584a028fa16.png
[image8]: /assets/build/img/b64/f18b0b73f1e62795.png
[image9]: /assets/build/img/b64/4fded5d66908782d.png
