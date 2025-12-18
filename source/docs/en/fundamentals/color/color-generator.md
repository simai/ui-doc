---
extends: _core._layouts.documentation
section: content
title: Color generator
description: Color generator
---

## Color generator

SIMAI Framework provides its own palette generator, based on Google’s generator.

* SIMAI generator: [http://sf5.simai.pro/ru/bx/color/](http://sf5.simai.pro/ru/bx/color/)
* Google generator: [https://m3.material.io/theme-builder/](https://m3.material.io/theme-builder/#/)

Generation process:

1. Choose a color via picker or upload an image. When uploading, quantization extracts a dominant color.
2. The chosen color is converted into HCT and forms Primary, Secondary, Tertiary palettes.

**HCT parameters:**

* **Hue**: 0–360° on the color wheel.
* **Chroma**: saturation; higher means “cleaner” color.
* **Tone**: lightness (0 = black, 100 = white).

Default values for palette generation:

| Color         | Hue                                               | Chroma                    |
|:--------------|:--------------------------------------------------|:--------------------------|
| **Primary**   | Set by user                                      | Set by user               |
| **Secondary** | Same as Primary                                  | 20 (tweak 15–30)          |
| **Tertiary**  | Primary + 60 (if >360, subtract 360)              | 40 (tweak 30–50)          |
| **Neutral**   | Same as Primary                                  | 5 (tweak 0–10)            |
| **Error**     | 25 (tweak 20–30)                                  | 85 (tweak 50–100)         |
| **Warning**   | 60 (tweak 55–80)                                  | 60 (tweak 40–60)          |
| **Success**   | 145 (tweak 135–165)                               | 65 (tweak 30–100)         |
{.table}

Adjust hue, chroma, and tone to get the palette you need.

UI Kit example values:

| Color         | Hue | Chroma |
|:--------------|-----|-------:|
| **Primary**   | 265 |     85 |
| **Secondary** | 265 |     20 |
| **Tertiary**  | 325 |     40 |
| **Error**     | 25  |     85 |
| **Warning**   | 60  |     60 |
| **Success**   | 145 |     65 |
{.table}

Neutral offers three variants (Grey Primary, Gray Blue, Grey) with tunable Hue/Chroma:

| Color            | Hue | Croma |
|:-----------------|-----|------:|
| **Grey Primary** | 265 |     5 |
| **Gray Blue**    | 235 |    10 |
| **Grey**         | 0   |     0 |
{.table}

With flexible palette/token generation and light/dark themes, SIMAI Framework simplifies color work and keeps interfaces
clear, functional, and aesthetic.
