---
extends: _core._layouts.documentation
section: content
title: "Direct translation (from alpha-numeric to pixels)"
description: "Direct translation (from alpha-numeric to pixels)"
---

# Direct translation (from alpha-numeric to pixels)

1. **Zones and thresholds**  
   Each letter corresponds to a certain threshold:

   * A(0+), B(10+), C(20+), D(40+), E(80+), F(160+), G(320+), H(640+), I(1280+).

2. **Digit multipliers**  
   After the threshold, each letter multiplies the digit by a specific factor and adds it to the base threshold:

   * B = ×1
   * C = ×2
   * D = ×4
   * E = ×8
   * F = ×16
   * G = ×32
   * H = ×64
   * I = ×128  
     An easy way to remember is via powers of two: B=1, D=4 (2²), F=16 (2⁴), I=128 (2⁷). The other letters are the intermediate values.

3. **Example**  
   `d4`:

   - D starts at 40px.
   - The digit 4 is multiplied by 4 → 4×4=16.
   - Add them together: 40 + 16 = 56px.

Thus, `d4` = 56px.
