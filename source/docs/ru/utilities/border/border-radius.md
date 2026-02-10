---
extends: _core._layouts.documentation
section: content
title: Скругление границы
description: Скругление границы
---

# Скругление границы

С помощью модификаторов радиуса вы можете задавать скругление для всего элемента, отдельных сторон и отдельных углов.

## Размеры радиуса

`0`, `1/3`, `1/2`, `1`, `2`, `3`, `default`, `square`, `rounded`, `round`, `full`

## Базовые классы

| Класс | Значение |
|:--|:--|
| `.radius-{size}` | `border-radius: var(--sf-radius-*)` |
| `.radius-top-{size}` | верхние углы |
| `.radius-bottom-{size}` | нижние углы |
| `.radius-inline-start-{size}` | углы стороны `inline-start` |
| `.radius-inline-end-{size}` | углы стороны `inline-end` |
| `.radius-top-inline-start-{size}` | верхний `inline-start` угол |
| `.radius-top-inline-end-{size}` | верхний `inline-end` угол |
| `.radius-bottom-inline-start-{size}` | РЅРёР¶РЅРёР№ `inline-start` СѓРіРѕР» |
| `.radius-bottom-inline-end-{size}` | РЅРёР¶РЅРёР№ `inline-end` СѓРіРѕР» |

{.table}

## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`), например `md:radius-2`.

## Примеры

```html
<div class="radius-1/3">radius-1/3</div>
<div class="radius-rounded">radius-rounded</div>

<div class="radius-top-2">radius-top-2</div>
<div class="radius-inline-start-1">radius-inline-start-1</div>

<div class="radius-top-inline-start-3">radius-top-inline-start-3</div>
<div class="radius-bottom-inline-end-rounded">radius-bottom-inline-end-rounded</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=border&group=border-radius"></iframe>
</div>