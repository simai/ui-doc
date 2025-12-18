---
extends: _core._layouts.documentation
section: content
title: Error
description: Error
---

# Error

The **Error** role is used to clearly and noticeably display problematic states in the interface: errors, failures,
or other critical situations. Using colors from this role helps the user quickly understand the nature of the problem
and pay attention to it.

Error role variations:

* **Error** — fills, text, and icons with a strong accent that emphasizes the seriousness of the problem.
* **On Error** — text and icon color on the Error background.
* **Error Container** — a muted fill color for areas related to error information, for example for toast messages or
  tonal buttons.
* **On Error Container** — text and icons on the Error Container background.
* **On Error Container Graphic** — fills of large graphic objects on the Error Container background.
* **Error Transparent** — a semi-transparent color for highlighting transparent elements on a surface (for example,
  for outline buttons on hover).
* **Outline Error** — color of outlines, borders, and dividers related to error elements.

Example of using the Error role:

![][image13]

![][image14]

The following variables are used for the Error role:

| Variable                         | Value (light)          | Value (dark)           |
|:---------------------------------|:-----------------------|:-----------------------|
| `--sf-error`                     | `--sf-error-40`        | `--sf-error-80`        |
| `--sf-error-hover`               | `--sf-error-35`        | `--sf-error-85`        |
| `--sf-error-active`              | `--sf-error-30`        | `--sf-error-90`        |
| `--sf-error-container`           | `--sf-error-90`        | `--sf-error-30`        |
| `--sf-error-container-hover`     | `--sf-error-85`        | `--sf-error-35`        |
| `--sf-error-container-active`    | `--sf-error-80`        | `--sf-error-40`        |
| `--sf-error-transparent-hover`   | `--sf-error-50--alfa-4`  | `--sf-error-90--alfa-4`  |
| `--sf-error-transparent-select`  | `--sf-error-50--alfa-8`  | `--sf-error-90--alfa-8`  |
| `--sf-error-transparent-active`  | `--sf-error-50--alfa-12` | `--sf-error-90--alfa-12` |
| `--sf-error-transparent-overlay` | `--sf-error-50--alfa-24` | `--sf-error-90--alfa-24` |
| `--sf-on-error`                  | `--sf-white`           | `--sf-error-20`        |
| `--sf-on-error-container`        | `--sf-error-10`        | `--sf-error-90`        |
| `--sf-on-error-container-graphic`| `--sf-error-50`        | `--sf-error-60`        |
| `--sf-outline-error`             | `--sf-error-50`        | `--sf-error-60`        |
{.table}

[image13]: /assets/build/img/b64/f686dd417f8a6496.png
[image14]: /assets/build/img/b64/2b6d33f495587919.png

