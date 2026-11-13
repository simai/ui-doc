---
title: "Drop shadow colour"
description: "Coloured drop shadows leave SIMAI Framework after 2027-01-01: a shadow carries no colour."
---

# Drop shadow colour

The `drop-shadow-{colour}` classes, with `hover:`, leave SIMAI Framework after
**2027-01-01** with no successor: in the shadow system a shadow carries no colour.
Until that date the class still colours the shadow the
[drop shadow](/en/utilities/shadows/drop-shadow/) classes draw. Do not add new uses:
an icon or a logo needs only the place shadow, without colour — `drop-shadow-raised`
or `drop-shadow-overlay` — and carries its colour itself.

```html
<!-- before -->
<div class="drop-shadow-2 drop-shadow-primary">…</div>
<!-- after -->
<div class="drop-shadow-overlay">…</div>
```

Journal record: `utility-c20-coloured-shadows`.
