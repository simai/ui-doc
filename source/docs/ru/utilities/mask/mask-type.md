---
extends: _core._layouts.documentation
section: content
title: Тип маски
description: Тип маски
---

# Тип маски

!rtags[mask-type]



`mask-type` задает, какой канал использовать для вычисления маски.

## Таблица классов

| Класс                | Значение              |
|:---------------------|:----------------------|
| .mask-type-alpha     | mask-type: alpha;     |
| .mask-type-luminance | mask-type: luminance; |
{.table}

## Примеры

```html
<svg class="mask-type-alpha">...</svg>
<svg class="mask-type-luminance">...</svg>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=mask&group=mask-type"></iframe>
</div>
