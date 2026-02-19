---
extends: _core._layouts.documentation
section: content
title: Параметры по умолчанию
description: Параметры по умолчанию
---

# Параметры по умолчанию

!rtags[outline-default-parameters]


Классы по умолчанию для внешней границы:

| Класс | Значение |
|:--|:--|
| `.outline` | `outline: var(--sf-px) var(--sf-outline-variant) solid;` |
| `.outline-none` | `outline-width: var(--sf-0);` |
{.table}

## Описание

- `outline` добавляет внешнюю границу по умолчанию.
- `outline-none` убирает внешнюю границу.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификаторы: `outline`, `outline-none`.

## Пример

```html
<div class="outline p-2 radius-2">Outline default</div>
<div class="outline-none p-2 radius-2">Outline none</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=outline&group=outline-default-parameters"></iframe>
</div>
