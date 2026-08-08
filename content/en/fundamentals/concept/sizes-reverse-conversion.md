# Reverse conversion

To determine the letter notation for a known pixel value, find which range the number falls into:

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
- Subtract 10 (start of zone B): 16 − 10 = 6.
- Divide the remainder by 1 (B multiplier): 6 ÷ 1 = 6.
- Result: `b6`.

For 64px:

- 64px falls into `D (40+)`.
- Subtract 40: 64 − 40 = 24.
- Divide 24 by 4 (D multiplier): 24 ÷ 4 = 6.
- Result: `d6` (if that exact value isn’t needed, pick the nearest digit in your system).

For 288px:

- 288px falls into `F (160+)`.
- Subtract 160: 288 − 160 = 128.
- Divide 128 by 16 (F multiplier): 128 ÷ 16 = 8.
- Result: `f8`.

Using this system makes it easy to navigate sizes and quickly convert between pixels and the framework’s relative units.

Here’s a simplified way to convert alpha-numeric values to pixels and back.
