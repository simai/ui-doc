---
extends: _core._layouts.documentation
section: content
title: Параметры по умолчанию (для границ)
description: Параметры по умолчанию (для границ)
---

# Параметры по умолчанию (для границ)

!rtags[border-default-parameters]


Базовые утилиты для быстрого включения/отключения рамки с дефолтными параметрами.

## Классы

| Класс | Значение |
|:--|:--|
| `.border` | `border: var(--sf-a1) var(--sf-outline-variant) solid` |
| `.border-none` | `border: var(--sf-a1) var(--sf-transparent) solid` |

{.table}

## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`).
- `hover:{модификатор}` — применение при наведении.

## Примеры

```html
<div class="border">border</div>
<div class="border-none">border-none</div>
<div class="hover:border-none">hover:border-none</div>
<div class="md:border">md:border</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=border&group=border-default-parameters"></iframe>
</div>
