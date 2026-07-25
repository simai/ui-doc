---
extends: _core._layouts.documentation
section: content
title: "Scrollbar presets"
description: "The sf-scrollbar component and its overlay, standard, persistent, and hidden presets"
---

# Scrollbar presets

The `sf-scrollbar` component creates a predictable scrollable region with one
of four ready-made behaviors. SIMAI Framework owns its appearance, dimensions,
states, and interaction. Consumers do not copy scrollbar CSS or JavaScript.

## Quick start

```html
<div class="sf-scrollbar" data-sf-scrollbar="overlay">
    <div class="sf-scrollbar__viewport" tabindex="0" aria-label="Navigation">
        <!-- Long content -->
    </div>
</div>
```

Set the height or maximum height on the outer component. The direct child
`.sf-scrollbar__viewport` is the element that scrolls.

When `data-sf-scrollbar` is omitted, the component uses `overlay`.

## Choose a preset

| Value | Behavior | Use it for |
|:--|:--|:--|
| `overlay` | Hidden while idle and shown during scrolling or focus. The 2 px indicator expands to 6 px inside a 16 px hit area | Recommended for navigation, page outlines, panels, and compact work areas |
| `standard` | A native scrollbar styled with semantic Framework variables | Interfaces where the familiar system scrollbar should remain explicit |
| `persistent` | A managed 6 px indicator that remains visible over the content | Long regions where the current scroll position should always be visible |
| `hidden` | No visible indicator; wheel, touch, and keyboard scrolling remain available | Only when another cue makes scrolling obvious |

## Overlay

```html
<aside class="sf-scrollbar" data-sf-scrollbar="overlay">
    <nav class="sf-scrollbar__viewport" tabindex="0" aria-label="Sections">
        ...
    </nav>
</aside>
```

`overlay` does not reserve a separate column and does not change content width
between states. The indicator hides after a short idle delay. Hovering its hit
area expands it so that it is easier to grab with a pointer.

## Standard

```html
<div class="sf-scrollbar" data-sf-scrollbar="standard">
    <div class="sf-scrollbar__viewport" tabindex="0">
        ...
    </div>
</div>
```

This preset uses the browser's native mechanism and Framework variables for
color, thickness, and radius. Browser and operating-system preferences may
change its exact rendering.

## Persistent

```html
<div class="sf-scrollbar" data-sf-scrollbar="persistent">
    <div class="sf-scrollbar__viewport" tabindex="0">
        ...
    </div>
</div>
```

`persistent` uses the same geometry and controls as `overlay`, but keeps the
indicator visible after scrolling stops.

## Hidden

```html
<div class="sf-scrollbar" data-sf-scrollbar="hidden">
    <div class="sf-scrollbar__viewport" tabindex="0">
        ...
    </div>
</div>
```

Do not use `hidden` when a reader may not understand that the region scrolls.
Keyboard focus must remain visible and all content must be reachable without a
pointer.

## Accessibility

- Add `tabindex="0"` to the scrolling viewport when it has no naturally
  focusable elements.
- Give it a useful `aria-label` or associate it with a visible heading.
- Managed presets support wheel, trackpad, thumb dragging, `ArrowUp`,
  `ArrowDown`, `PageUp`, `PageDown`, `Home`, and `End`.
- Transitions are disabled when `prefers-reduced-motion: reduce` is active.
- In forced-colors mode, SIMAI Framework returns scrollbar rendering to the
  browser and operating system.
- On touch devices, the scrollbar remains an indicator while gestures stay the
  primary interaction.

## Compatibility with previous utilities

`.scroll-hover` and `.scroll-subtle` remain available. They style the native
scrollbar of a specific element and do not create a managed component.

Use `sf-scrollbar` for new interfaces that need presets, auto-hide, thumb
dragging, and one cross-browser contract.

## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scrollbar-presets"></iframe>
</div>
