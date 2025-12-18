---
extends: _core._layouts.documentation
section: content
title: Color generator
description: Color generator
---

# Color generator

To build a color palette, SIMAI Framework provides its own generator based on Google’s generator.

* SIMAI generator: [http://sf5.simai.pro/ru/bx/color/](http://sf5.simai.pro/ru/bx/color/)
* Google generator: [https://m3.material.io/theme-builder/](https://m3.material.io/theme-builder/#/)

Generation process:

1. The user selects a color using the picker or uploads an image. When uploading an image, the dominant color is extracted via quantization.
2. The selected color is converted to an HCT color scheme and used to build the Primary, Secondary, and Tertiary palettes.

**HCT parameters:**

* **Hue**: the color wheel (0–360°).
* **Chroma**: the higher it is, the “purer” the color.
* **Tone**: brightness/lightness (0 — black, 100 — white).

Default value examples used for color generation:

| Color         | Hue                                                                 | Chroma                         |
|:--------------|:---------------------------------------------------------------------|:------------------------------|
| **Primary**   | Set by the user                                                      | Set by the user               |
| **Secondary** | Same as Primary                                                      | 20 (can be changed from 15 to 30\) |
| **Tertiary**  | Primary + 60. If the value exceeds 360, subtract 360.                | 40 (can be changed from 30 to 50\) |
| **Neutral**   | Same as Primary                                                      | 5 (can be changed from 0 to 10\)   |
| **Error**     | 25 (can be changed from 20 to 30\)                                   | 85 (can be changed from 50 to 100\) |
| **Warning**   | 60 (can be changed from 55 to 80\)                                   | 60 (can be changed from 40 to 60\)  |
| **Success**   | 145 (can be changed from 135 to 165\)                                 | 65 (can be changed from 30 to 100\) |
{.table}

By adjusting brightness, hue, and chroma settings, designers and developers can get the palette they need for the interface.

The following values were used when creating the UI Kit:

| Color         | Hue |  Chroma |
|:--------------|-----|--------:|
| **Primary**   | 265 |      85 |
| **Secondary** | 265 |      20 |
| **Tertiary**  | 325 |      40 |
| **Error**     | 25  |      85 |
| **Warning**   | 60  |      60 |
| **Success**   | 145 |      65 |
{.table}

For Neutral, three variants are available (Grey Primary, Gray Blue, Grey) with configurable Hue and Chroma parameters:

| Color            | Hue |  Croma |
|:-----------------|-----|-------:|
| **Grey Primary** | 265 |      5 |
| **Gray Blue**    | 235 |     10 |
| **Grey**         | 0   |      0 |
{.table}

Thanks to a flexible palette/token generation system and support for multiple themes (light and dark), SIMAI Framework simplifies working with color and makes interfaces clearer, more functional, and more aesthetically pleasing.
