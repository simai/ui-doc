# Utilities

The SF UI modifier reference is organized by CSS capability, from layout and
typography to masks and filters. Each page describes a modifier, its values,
and examples.

## Direction (LTR/RTL)

- The Framework keeps an explicit root `dir` and adds one only when it is
  missing.
- Flow-relative utilities use logical `inline-start/end` and
  `block-start/end` properties, so the same classes work in LTR and RTL.
- Keep `dir` in custom templates and avoid physical `left` or `right` when the
  value should follow the content flow.
- Read the complete [LTR and RTL support guide](../fundamentals/directions/).

## Categories

- [Layout](layout/index.md) — positioning and display.
- [Layout breaks](layout-break/index.md) — columns and breaks.
- [Objects](objects/index.md) — media alignment and fitting.
- [Sizing](sizes/index.md) — width, height, and constraints.
- [Spacing](indents/index.md) — margins, padding, and spatial modifiers.
- [Grid](grid/index.md) — grid templates and item placement.
- [Flexbox](flex/index.md) — direction, growth, shrinkage, and wrapping.
- [Grid and flexbox utilities](grid-and-flexbox-utilities/index.md) — alignment and ordering.
- [Typography](typography/index.md) — text roles, sizes, and weight.
- [Text formatting](text-formatting/index.md) — color, weight, and decoration.
- [Links](links/index.md) — link states and formatting.
- [Tables](tables/index.md) — table and cell presentation.
- [SVG](svg/index.md) — fills, strokes, and sizing.
- [Borders](border/index.md) — width, style, and radius.
- [Dividers](divider/index.md) — horizontal and vertical dividers.
- [Outline](outline/index.md) — focus and emphasis outlines.
- [Background color](background-color/index.md) — background color modifiers.
- [Background image](background-image/index.md) — position, repeat, and sizing.
- [Gradients](background-gradient/index.md) — gradient types and parameters.
- [Masks](mask/index.md) — clipping, repetition, and mask placement.
- [Shadows](shadows/index.md) — box and drop shadows.
- [Filters](filters/index.md) — blur, hue rotation, and other filters.
- [Backdrop filters](backdrop-filter/index.md) — background blur and adjustment.
- [Animation](animation/index.md) — transitions and animations.
- [Scrolling](overscroll/index.md) — scroll snap, colors, and scroll radius.
- [Transforms](transform/index.md) — rotation, scaling, skew, and translation.
- [Forms](forms/index.md) — fields and supporting states.
- [Interactivity](interactivity/index.md) — cursors, selection, and touch behavior.
- [Print](print/index.md) — print visibility.
- [Stripes](stripes/index.md) — striped and patterned backgrounds.

## Commonly used

- [Layout](layout/index.md)
- [Grid](grid/index.md)
- [Flexbox](flex/index.md)
- [Spacing](indents/index.md)
- [Sizing](sizes/index.md)
- [Typography](typography/index.md)
- [Text formatting](text-formatting/index.md)
- [Background color](background-color/index.md)
- [Borders](border/index.md)
- [Shadows](shadows/index.md)
- [Transforms](transform/index.md)
- [Interactivity](interactivity/index.md)
