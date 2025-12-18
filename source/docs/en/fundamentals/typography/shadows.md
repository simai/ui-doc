---
extends: _core._layouts.documentation
section: content
title: Shadows
description: Shadows
---

# Shadows

Shadows are now driven by a single template with tweakable variables instead of fixed presets. This experimental setup
may evolve.

[Example demo](https://codepen.io/simai/full/xxNORpN)

## Shadow structure

Three layers:

1. **Fill** — base shadow.
2. **Outline** — sharpens edges.
3. **Shade** — soft blur.

Opacity and intensity variables:

| Variable                    | Value |
|:----------------------------|:---------|
| `--sf-shadow--alfa-fill`    | 24%      |
| `--sf-shadow--alfa-outline` | 12%      |
| `--sf-shadow--alfa-shade`   | 8%       |
{.table}

Base color:

| Variable           | Value |
|:-------------------|:---------|
| `--sf-shadow--color` | black    |
{.table}

Derived colors:

| Variable                     | Value                                                                             |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------|
| `--sf-shadow--color-fill`    | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-fill`));    |
| `--sf-shadow--color-outline` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-outline`)); |
| `--sf-shadow--color-shade`   | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-shade`));   |
{.table}

**Shadow level ratio**

`--sf-shadow--level-ratio` scales intensity; default is `1`.

| Variable                   | Value |
|:---------------------------|:---------|
| `--sf-shadow--level-ratio` | 1        |
{.table}

```css
:root * {
  --sf-shadow--level-ratio: 1;
  --sf-shadow--alfa-fill: 24%;
  --sf-shadow--alfa-outline: 12%;
  --sf-shadow--alfa-shade: 8%;
  
  --sf-shadow--color: black;
  --sf-shadow--color-fill: color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color) var(--sf-shadow--alfa-fill));
  --sf-shadow--color-outline: color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color) var(--sf-shadow--alfa-outline));
  --sf-shadow--color-shade: color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color) var(--sf-shadow--alfa-shade));
}
```

### Shadow template

Classes containing `shadow` use this template:

```css
[class*="shadow"] {
  box-shadow: 
    0px calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill),
    0px calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0px var(--sf-shadow--color-outline),
    0px calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shade);
}
```

For drop shadows (no spread), disable box-shadow and use `drop-shadow`:

```css
[class*="drop-shadow"] {
  box-shadow: none;
  filter: 
    drop-shadow(
      0px 
      calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) 
      calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) 
      var(--sf-shadow--color-fill)
    ) 
    drop-shadow(
      0px 
      calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) 
      calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 
      var(--sf-shadow--color-outline)
    ) 
    drop-shadow(
      0px 
      calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) 
      calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) 
      var(--sf-shadow--color-shade)
    );
}
```

### Shadow usage

* **shadow-1** — base elevation (cards).
* **shadow-2** — hover state for shadow-1 or bordered elements.
* **shadow-3** — FAB.
* **shadow-4** — FAB hover.
* **shadow-5** — modals.

This approach keeps shadows flexible, consistent, and scalable.

---
