---
extends: _core._layouts.documentation
section: content
title: "Maximum container width (max-container)"
description: "Limit the standard container through SIMAI Framework size-system tokens."
---

# Maximum container width

`max-container-*` limits the width of a nested `.container`. Apply the modifier
to a parent and keep the standard container for responsive gutters.

```html
<div class="max-container-7">
  <div class="container m-inline-auto">
    ...content...
  </div>
</div>
```

Below `desktop`, the nested container uses the available width without
overflowing the viewport. From `desktop` onward, its maximum resolves through
`--sf-container-N--size-max`. The `m-inline-auto` utility centers it in both
LTR and RTL layouts.

## Values

| Class | Container variable | Size-system token |
|:---|:---|:---|
| `max-container-1` | `--sf-container-1--size-max` | `--sf-h5` |
| `max-container-2` | `--sf-container-2--size-max` | `--sf-h6` |
| `max-container-3` | `--sf-container-3--size-max` | `--sf-h8` |
| `max-container-4` | `--sf-container-4--size-max` | `--sf-i0` |
| `max-container-5` | `--sf-container-5--size-max` | `--sf-i1` |
| `max-container-6` | `--sf-container-6--size-max` | `--sf-i2` |
| `max-container-7` | `--sf-container-7--size-max` | `--sf-i3` |
| `max-container-8` | `--sf-container-8--size-max` | `--sf-i4` |
{.table}

Pixel and `rem` values are deliberately not duplicated here. The Framework
size system remains the source of truth, so a token update automatically
updates the container.

## Full-bleed surface with aligned content

The parent surface can span the viewport while its inner content stays aligned
with the page grid:

```html
<section class="bg-surface-1 max-container-7">
  <div class="container m-inline-auto">
    ...section content...
  </div>
</section>
```

## Playground

<div class="sf-playground overflow-hidden">
<iframe title="All max-container values" loading="lazy" src="https://play.simai.io/embed.html?component=layout&group=max-container"></iframe>
</div>
