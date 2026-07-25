---
extends: _core._layouts.documentation
section: content
title: LTR and RTL support
description: Set document direction and build SIMAI Framework interfaces with logical CSS properties.
---

# LTR and RTL support

SIMAI Framework uses the same DOM and component set for left-to-right (`ltr`)
and right-to-left (`rtl`) interfaces. The application owns the document
direction, while flow-relative spacing, borders, and placement use logical
sides.

## Set the document direction

Set `dir` on the root element together with the page language:

```html
<html lang="en" dir="ltr">
```

```html
<html lang="ar" dir="rtl">
```

An explicit `dir` takes precedence and is not overwritten by the Loader. If the
attribute is missing, the Loader reads the root element's computed direction
and adds either `ltr` or `rtl`. Setting it in the initial HTML is still
recommended to keep the first render predictable.

Use a nested `dir` for content with a different direction:

```html
<p dir="rtl">
  رقم الطلب <span dir="ltr">LTR-2026</span>
</p>
```

## Logical sides

Logical sides resolve according to the text direction:

| Logical side | `dir="ltr"` | `dir="rtl"` |
| --- | --- | --- |
| `inline-start` | left | right |
| `inline-end` | right | left |
| `block-start` | top | top |
| `block-end` | bottom | bottom |

Use them for elements that should mirror with the content flow:

```css
.notice {
  margin-inline-start: 1rem;
  padding-inline: 1rem;
  border-inline-start: 0.25rem solid var(--sf-primary);
  text-align: start;
}

.actions {
  inset-inline-end: 0;
}
```

SIMAI Framework utilities provide semantic classes such as
`m-inline-start-*`, `m-inline-end-*`, `p-inline-start-*`,
`p-inline-end-*`, `inline-start-*`, and `inline-end-*`.

```html
<aside class="p-inline-start-4 p-inline-end-2 border-inline-start">
  Panel content
</aside>
```

## Components and Smart components

Use semantic placement values for direction-aware interfaces:

- `inline-start` — the start of the line;
- `inline-end` — the end of the line.

For example, a drawer or modal with `position="inline-end"` changes its
physical side when `dir` changes. Use `text-position="inline-end"` for
direction-aware progress text.

The physical `left` and `right` values remain supported for existing code and
for cases that intentionally target a viewport side instead of a flow side.

## When physical coordinates are correct

Do not mechanically replace `left` and `right` when a value represents:

- pointer or drag coordinates;
- range or slider geometry;
- viewport-relative placement;
- a third-party API that uses physical coordinates.

`translateX()` animations do not become direction-aware automatically either.
Add an explicit `:dir(rtl)` branch when motion follows the content flow.

```css
.drawer {
  transform: translateX(-100%);
}

.drawer:dir(rtl) {
  transform: translateX(100%);
}
```

## Build compatibility

The SIMAI Framework builder emits direction-aware physical fallbacks and keeps
the original logical declaration after them. Modern browsers use the logical
declaration, while the compatible fallback remains available for older
environments.

Do not patch `ui` or `ui-smart` manually. `ui-loader/src` is the source of
truth, and distributions are updated only through a reproducible `ui-builder`
build.

## Verify an interface

Test the same DOM in both directions:

1. Switch the root `dir` between `ltr` and `rtl`.
2. Confirm that logical spacing, borders, menus, and panels mirror correctly.
3. Exercise forms, tables, dialogs, and Smart components.
4. Check keyboard use, focus order, Escape, and error states.
5. Confirm that physical coordinates and mixed-direction content are not
   mirrored by mistake.

[Open the LTR/RTL utility demo in SIMAI Framework Playground](https://play.simai.io/#/p/utility/ltr-rtl/system).
LTR is the default. Use the direction control in the Playground toolbar to
view the same elements in RTL.

A successful page check does not prove every component ready. Release readiness
is established by the component matrix for the exact coordinated build.
