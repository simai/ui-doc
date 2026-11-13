---
title: "Shadow colour"
description: "Coloured shadows leave SIMAI Framework after 2027-01-01: a shadow carries no colour. What to use instead."
---

# Shadow colour

The `shadow-{colour}` classes (`shadow-primary`, `-secondary`, `-tertiary`, `-error`,
`-warning`, `-success`, `-on-surface`, with `hover:` and `active:`) leave SIMAI Framework
after **2027-01-01** with no successor: in the shadow system a shadow carries no colour.
A coloured glow reads as focus or as a status, so focus is shown by the
[ring](/ru/utilities/outline/ring/) and a status by the element's own colour. Until that
date the class still colours both shadows of its own element, the ones the
[element shadow](/en/utilities/shadows/element-shadow/) classes draw. Do not add new uses.

## Instead of a coloured shadow

| You needed | Use |
| :--- | :--- |
| mark a selected card | the `primary-container` fill or a border in the role's colour |
| show focus | the [ring](/ru/utilities/outline/ring/) |
| show a status (error, success) | the element's own colour: fill, border, icon |
| lift an accent button | the place shadow `shadow-raised`, no colour |

```html
<!-- before -->
<div class="shadow-2 shadow-primary p-4">…</div>
<!-- after -->
<div class="shadow-overlay p-4">…</div>
```

Journal record: `utility-c20-coloured-shadows`.
