---
extends: _core._layouts.documentation
section: content
title: Положение маски
description: Положение маски
---

# Положение маски

!rtags[mask-position]


Утилиты `mask-*` задают позицию маски внутри элемента.
Для горизонтали используются логические направления `inline-start`/`inline-end` (корректно для LTR/RTL).

## Таблица классов

| Класс                      | Значение                     |
|:---------------------------|:-----------------------------|
| .mask-top                  | mask-position: top;          |
| .mask-bottom               | mask-position: bottom;       |
| .mask-center               | mask-position: center;       |
| .mask-inline-start         | mask-position: left;         |
| .mask-inline-end           | mask-position: right;        |
| .mask-inline-start-top     | mask-position: left top;     |
| .mask-inline-start-bottom  | mask-position: left bottom;  |
| .mask-inline-end-top       | mask-position: right top;    |
| .mask-inline-end-bottom    | mask-position: right bottom; |
{.table}

## Примеры

```html
<div class="mask-top"></div>
<div class="mask-center"></div>
<div class="mask-inline-end-bottom"></div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=mask&group=mask-position"></iframe>
</div>
