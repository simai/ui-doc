# Reverse conversion

To find the alpha-numeric label for a pixel value, locate the range the number belongs to:

- A: 0+ px
- B: 10+ px
- C: 20+ px
- D: 40+ px
- E: 80+ px
- F: 160+ px
- G: 320+ px
- H: 640+ px
- I: 1280+ px

Example for 16px:

- 16px falls into `B (10+)`.
- Subtract 10 (start of B): 16 - 10 = 6.
- Divide the remainder by 1 (multiplier for B): 6 ÷ 1 = 6.
- Result: `b6`.

For 64px:

- 64px falls into `D (40+)`.
- Subtract 40: 64 - 40 = 24.
- Divide 24 by 4 (multiplier for D): 24 ÷ 4 = 6.
- Result: `d6` (or pick the nearest digit if you do not use that precision).

For 288px:

- 288px falls into `F (160+)`.
- Subtract 160: 288 - 160 = 128.
- Divide 128 by 16 (multiplier for F): 128 ÷ 16 = 8.
- Result: `f8`.

This system makes it easy to navigate sizes and translate them between pixels and the framework's relative units.

Below is a simplified way to convert between alpha-numeric values and pixels.
