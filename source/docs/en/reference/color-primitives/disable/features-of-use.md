---
extends: _core._layouts.documentation
section: content
title: Usage features
description: Usage features
---

# Usage features

For the **Disable** role, semi-transparent colors are used, which makes it possible to place them over various
backgrounds with different contrast levels while preserving readability and clear perception.

Example of the logic for transitioning from active to inactive states:

* Primary → Disable
* On Primary → On Disable
* Primary Container → Disable
* On Primary Container → On Disable
* Outline Primary → Outline Disable

This approach preserves visual consistency: if an active element is colored with Primary, its inactive state will
correspond to Disable, and for text on Primary, On Disable is used automatically.

![][image22]

![][image23]

The following variables are used for the Disable role:

| Variable              | Value (light)              | Value (dark)               |
|:----------------------|:---------------------------|:---------------------------|
| `--sf-disable`        | `--sf-neutral-50--alfa-12` | `--sf-neutral-90--alfa-12` |
| `--sf-on-disable`     | `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
| `--sf-outline-disable`| `--sf-neutral-50--alfa-24` | `--sf-neutral-90--alfa-24` |
{.table}

[image22]: /assets/build/img/b64/49a66e5e4a47e2c6.png
[image23]: /assets/build/img/b64/ac48e6f24fd4805f.png

