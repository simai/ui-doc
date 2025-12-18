---
extends: _core._layouts.documentation
section: content
title: Tertiary
description: Tertiary
---

# Tertiary

![][image10]

The **Tertiary** role is used to highlight individual elements among the existing accents created with Primary and
Secondary. Using Tertiary adds a third level of accenting, making the interface more expressive and flexible in setting
priorities.

Tertiary role variations:

* **Tertiary** — fill, text, and icons with a higher accent, applied to highlight important but not primary interface
  elements.
* **On Tertiary** — text and icon color on the Tertiary background.
* **Tertiary Container** — a muted color for surfaces, suitable for navigation elements and tonal buttons that do not
  compete with Primary or Secondary.
* **On Tertiary Container** — text and icons on the Tertiary Container background.
* **On Tertiary Container Graphic** — fills of large graphic objects on the Tertiary Container background.
* **Tertiary Transparent** — a semi-transparent color for highlighting transparent elements on the surface, for example
  for outline buttons on hover.
* **Outline Tertiary** — color of outlines, borders, and dividers used in combination with the Tertiary role.

Example of using the Tertiary color:

![][image11]

![][image12]

The following variables are used for the Tertiary role:

| Variable                            | Value (light)               | Value (dark)                |
|:------------------------------------|:----------------------------|:----------------------------|
| `--sf-tertiary`                     | `--sf-tertiary-40`          | `--sf-tertiary-80`          |
| `--sf-tertiary-hover`               | `--sf-tertiary-35`          | `--sf-tertiary-85`          |
| `--sf-tertiary-active`              | `--sf-tertiary-30`          | `--sf-tertiary-90`          |
| `--sf-tertiary-container`           | `--sf-tertiary-90`          | `--sf-tertiary-30`          |
| `--sf-tertiary-container-hover`     | `--sf-tertiary-85`          | `--sf-tertiary-35`          |
| `--sf-tertiary-container-active`    | `--sf-tertiary-80`          | `--sf-tertiary-40`          |
| `--sf-tertiary-transparent-hover`   | `--sf-tertiary-50--alfa-4`  | `--sf-tertiary-90--alfa-4`  |
| `--sf-tertiary-transparent-select`  | `--sf-tertiary-50--alfa-8`  | `--sf-tertiary-90--alfa-8`  |
| `--sf-tertiary-transparent-active`  | `--sf-tertiary-50--alfa-12` | `--sf-tertiary-90--alfa-12` |
| `--sf-tertiary-transparent-overlay` | `--sf-tertiary-50--alfa-24` | `--sf-tertiary-90--alfa-24` |
| `--sf-on-tertiary`                  | `--sf-white`                | `--sf-tertiary-20`          |
| `--sf-on-tertiary-container`        | `--sf-tertiary-10`          | `--sf-tertiary-90`          |
| `--sf-on-tertiary-container-graphic`| `--sf-tertiary-50`          | `--sf-tertiary-60`          |
| `--sf-outline-tertiary`             | `--sf-tertiary-50`          | `--sf-tertiary-60`          |
{.table}

[image10]: /assets/build/img/b64/52f9cf90be5f330a.png
[image11]: /assets/build/img/b64/5502f1e0f394cba9.png
[image12]: /assets/build/img/b64/aaf234c5fa43a458.png
