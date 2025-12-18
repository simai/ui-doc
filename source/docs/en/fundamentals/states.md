---
extends: _core._layouts.documentation
section: content
title: "State conditions"
description: "State conditions"
---

# State conditions

In addition to responsiveness conditions, SIMAI Framework supports state conditions that define styles depending on the
state of elements. This makes it possible to change the appearance of elements at moments such as hover, focus or
activation, making the interface more interactive and responsive.

**Available state conditions:**

* **hover** — applied when the user hovers the cursor over an element. Used to change the style of elements when
  interacting with them, for example, highlighting a button or changing the text color.
* **focus** — activated when an element receives focus (for example, when tabbing to it from the keyboard or clicking
  on an input field). This condition helps visually highlight elements in the active state to improve accessibility.
* **active** — applied to an element when it is in an active state (for example, while a button is being pressed). Used
  to provide visual feedback when interacting with an element.

If no state condition is specified, the modifier applies to all states of the element.

**Usage examples:**

* **hover:bg-primary** — sets the `bg-primary` background color when the cursor hovers over an element.
* **focus:border-highlight** — adds a `border-highlight` outline for elements in focus.
* **active:opacity-80** — reduces element opacity to 80% when it is active.

State conditions make it possible to flexibly control visual effects and provide intuitive interaction with interface
elements, improving the user experience.
