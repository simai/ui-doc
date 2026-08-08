````markdown
---
extends: _core._layouts.documentation
section: content
title: Neutral
description: Neutral
---

# Neutral

The `neutral` color in SIMAI Framework is intended for surfaces and neutral interface elements. In Google Material this
is a shade based on the Primary color with reduced chroma (by default 4), which gives a gray color with a tint of the
primary color.

In practice, however, this approach is not always convenient. Therefore, SIMAI Framework uses three variants of the
`neutral` (gray) color:

1. **grey-primary** — gray formed on the basis of the primary color.
2. **grey-blue** — gray with a bluish tint.
3. **grey** — a pure neutral gray color without additional tints.

By default, `neutral = grey-primary`.

![][image3]

**Changing the gray color**

To switch to another shade of gray, you need to use the corresponding modifier on the `html` or `body` tag:

- `neutral-grey` — for pure gray (grey).
- `neutral-grey-blue` — for gray with a blue tint (grey-blue).
- `neutral-grey-primary` — for gray based on primary (grey-primary).

It is important to apply modifiers to the `html` or `body` tags to avoid mixing different gray shades on the same page.
Example usage:

```css
html.neutral-grey {
  /* apply pure gray */
}

body.neutral-grey-blue {
  /* apply gray with a blue tint */
}
```

**Default values (grey-primary)**

By default, `neutral` uses the `grey-primary` color obtained from the generator with default settings. It produces the
following set of tone values (example):

| Variable                   | Value                                             |
|----------------------------|---------------------------------------------------|
| `--sf-neutral-98`          | #faf9fe                                          |
| `--sf-neutral-95`          | #f1f0f6                                          |
| `--sf-neutral-90`          | #e3e2e7                                          |
| `--sf-neutral-90--alfa-4`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 4%);  |
| `--sf-neutral-90--alfa-8`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 8%);  |
| `--sf-neutral-90--alfa-12` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 12%); |
| `--sf-neutral-90--alfa-24` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-90`) 24%); |
| `--sf-neutral-85`          | #d4d4d9                                          |
| `--sf-neutral-80`          | #c6c6cb                                          |
| `--sf-neutral-70`          | #ababb0                                          |
| `--sf-neutral-60`          | #909095                                          |
| `--sf-neutral-50`          | #76777c                                          |
| `--sf-neutral-50--alfa-4`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 4%);  |
| `--sf-neutral-50--alfa-8`  | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 8%);  |
| `--sf-neutral-50--alfa-12` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 12%); |
| `--sf-neutral-50--alfa-24` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-neutral-50`) 24%); |
| `--sf-neutral-40`          | #5d5e63                                          |
| `--sf-neutral-35`          | #515257                                          |
| `--sf-neutral-30`          | #45474b                                          |
| `--sf-neutral-25`          | #3a3b40                                          |
| `--sf-neutral-20`          | #2f3035                                          |
| `--sf-neutral-15`          | #24262a                                          |
| `--sf-neutral-10`          | #1a1b1f                                          |
| `--sf-neutral-5`           | #0f1115                                          |
{.table}

This set of values can be changed using the color generator. The other two gray variants are defined statically and
override the color via modifiers.

When using the **neutral-grey-blue** modifier, the main set of values is replaced with the following set:

| Variable        | Value |
|-----------------|-------|
| `--sf-neutral-98` | #f5faff  |
| `--sf-neutral-95` | #e8f2fa  |
| `--sf-neutral-90` | #dae4ec  |
| `--sf-neutral-85` | #ccd6de  |
| `--sf-neutral-80` | #bec8d0  |
| `--sf-neutral-70` | #a3adb4  |
| `--sf-neutral-60` | #88929a  |
| `--sf-neutral-50` | #6f7880  |
| `--sf-neutral-40` | #566067  |
| `--sf-neutral-35` | #4a545b  |
| `--sf-neutral-30` | #3e484f  |
| `--sf-neutral-25` | #333d43  |
| `--sf-neutral-20` | #283238  |
| `--sf-neutral-15` | #1e272d  |
| `--sf-neutral-10` | #131d23  |
| `--sf-neutral-5`  | #091218  |
{.table}

When using the **neutral-grey** modifier, the main set of values is replaced with the following set:

| Variable        | Value |
|-----------------|-------|
| `--sf-neutral-98` | #f9f9f9  |
| `--sf-neutral-95` | #f1f1f1  |
| `--sf-neutral-90` | #e2e2e2  |
| `--sf-neutral-85` | #d4d4d4  |
| `--sf-neutral-80` | #c6c6c6  |
| `--sf-neutral-70` | #ababab  |
| `--sf-neutral-60` | #919191  |
| `--sf-neutral-50` | #777777  |
| `--sf-neutral-40` | #5e5e5e  |
| `--sf-neutral-35` | #525252  |
| `--sf-neutral-30` | #474747  |
| `--sf-neutral-25` | #3b3b3b  |
| `--sf-neutral-20` | #303030  |
| `--sf-neutral-15` | #262626  |
| `--sf-neutral-10` | #1b1b1b  |
| `--sf-neutral-5`  | #111111  |
{.table}

[image3]: /assets/build/img/b64/1b0bbe09c5de338b.png

````
