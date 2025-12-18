---
extends: _core._layouts.documentation
section: content
title: "Direct translation (alpha-numeric to pixels)"
description: "Direct translation (alpha-numeric to pixels)"
---

# Direct translation (alpha-numeric to pixels)

1. **Zones and thresholds**: each letter has a base threshold:

   * A(0+), B(10+), C(20+), D(40+), E(80+), F(160+), G(320+), H(640+), I(1280+).

2. **Multipliers for digits**: after the threshold, each letter multiplies the digit and adds to the base:

   * B = ×1
   * C = ×2
   * D = ×4
   * E = ×8
   * F = ×16
   * G = ×32
   * H = ×64
   * I = ×128  
     Remember via powers of two: B=1, D=4 (2²), F=16 (2⁴), I=128 (2⁷); others are in-between.

3. **Example**: `d4`:

   - D starts at 40px.
   - Digit 4 × 4 → 16.
   - Sum: 40 + 16 = 56px.

So `d4` = 56px.
