---
extends: _core._layouts.documentation
section: content
title: "Transparent, White and Black"
description: "Transparent, White and Black"
---

# Transparent, White and Black

In addition to primary and accent colors, the following base primitives are used:

* **transparent** — transparency.
* **white** — white color.
* **black** — black color.

To optimize the number of variables, tones 0 and 100 are not used for all colors (similar to Material Design). Their
role is played by white and black:

* White and black colors do not change during generation, so their semi-transparent variations are written directly as
  ready-made values.

This system makes it possible to flexibly use color primitives to form a wide range of tokens, providing a clear
structure and convenient work with colors in the interface.

| Variable              | Value                 |
|-----------------------|-----------------------|
| `--sf-transparent`    | rgba(0,0,0,0)         |
| `--sf-white`          | rgba(255,255,255,1)   |
| `--sf-white--alfa-4`  | rgba(255,255,255,0.04) |
| `--sf-white--alfa-8`  | rgba(255,255,255,0.08) |
| `--sf-white--alfa-12` | rgba(255,255,255,0.12) |
| `--sf-white--alfa-24` | rgba(255,255,255,0.24) |
| `--sf-black`          | rgba(0,0,0,1)         |
| `--sf-black--alfa-4`  | rgba(0,0,0,0.04)      |
| `--sf-black--alfa-8`  | rgba(0,0,0,0.08)      |
| `--sf-black--alfa-12` | rgba(0,0,0,0.12)      |
| `--sf-black--alfa-24` | rgba(0,0,0,0.24)      |
{.table}
