---
extends: _core._layouts.documentation
section: content
title: Стиль разделителя
description: Стиль разделителя
---

# Стиль разделителя

!rtags[divider-style]


Утилиты стиля определяют тип линии разделителя.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.divider-solid` / `.divide-solid` | `border-style: solid` |
| `.divider-dashed` / `.divide-dashed` | `border-style: dashed` |
| `.divider-dotted` / `.divide-dotted` | `border-style: dotted` |
| `.divider-double` / `.divide-double` | `border-style: double` |
| `.divider-hidden` / `.divide-hidden` | `border-style: hidden` |
| `.divider-none` / `.divide-none` | `border-style: none` |
{.table}

## Пример

```html
<div class="grid grid-col-3 divider-x-1 divider-dashed">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=divider&group=divider-style"></iframe>
</div>
