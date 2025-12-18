````markdown
---
extends: _core._layouts.documentation
section: content
title: Shadows
description: Shadows
---

# Shadows

In the current version of the SIMAI framework, shadow implementation has become more flexible and customizable. Instead
of fixed presets, a single shadow template is now used, which can be adapted for different needs using variables. This
is an experimental approach that may change or be simplified in the future.

[Demo example](https://codepen.io/simai/full/xxNORpN)

## Shadow structure (everything below is one block ####)

The shadow consists of three layers:

1. **Fill** — the main layer that creates the base shadow.
2. **Outline** — emphasizes the shadow edges, making them clearer.
3. **Shade** — softens the shadow edges, giving a more subtle look.

The following variables are used to control layer transparency and shadow intensity:

| Variable                    | Value |
|:----------------------------|:------|
| `--sf-shadow--alfa-fill`    | 24%   |
| `--sf-shadow--alfa-outline` | 12%   |
| `--sf-shadow--alfa-shade`   | 8%    |
{.table}

The base color is set in the `--sf-shadow--color` variable:

| Variable             | Value |
|:---------------------|:------|
| `--sf-shadow--color` | black |
{.table}

Based on this data, the final colors for each shadow layer are calculated:

| Variable                     | Value                                                                             |
|:-----------------------------|:---------------------------------------------------------------------------------|
| `--sf-shadow--color-fill`    | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-fill`));    |
| `--sf-shadow--color-outline` | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-outline`)); |
| `--sf-shadow--color-shade`   | color-mix(in srgb, var(`--sf-transparent`), var(`--sf-shadow--color`) var(`--sf-shadow--alfa-shade`));   |
{.table}

**Shadow level ratio**

The `--sf-shadow--level-ratio` variable controls the intensity and scale of the shadow. Its default value is `1`.

| Variable                   | Value |
|:---------------------------|:------|
| `--sf-shadow--level-ratio` | 1     |
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

For classes containing `shadow`, the following shadow template is applied:

```css
[class*="shadow"] {
  box-shadow: 
    0px calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(-1 * var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-fill),
    0px calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) calc(var(--sf-a3) * var(--sf-shadow--level-ratio)) 0px var(--sf-shadow--color-outline),
    0px calc(var(--sf-a2) * var(--sf-shadow--level-ratio)) calc(var(--sf-a4) * var(--sf-shadow--level-ratio)) calc(var(--sf-a1) * var(--sf-shadow--level-ratio)) var(--sf-shadow--color-shade);
}
```

If you need to use a drop shadow, which differs from `box-shadow` by the absence of the spread parameter, you can apply
the `drop-shadow` class and disable the standard shadow:

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

### Using shadows

* **shadow-1** — base shadow for elements that slightly lift them above the surface (for example, cards).
* **shadow-2** — shadow that appears on hover over an element with `shadow-1` or a border, adding extra depth in the
  hover state.
* **shadow-3** — shadow for FAB (Floating Action Button) elements.
* **shadow-4** — shadow for FAB on hover.
* **shadow-5** — shadow for modal windows, creating the impression of a layer above all content.

This approach to shadows provides high flexibility and customizability, simplifies the creation of consistent shadow
styles, and makes it easier to scale and adapt to different projects.

---

````
