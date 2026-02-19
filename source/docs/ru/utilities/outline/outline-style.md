---
extends: _core._layouts.documentation
section: content
title: Стиль внешней границы
description: Стиль внешней границы
---

# Стиль внешней границы

!rtags[outline-style]


| Класс | Значение |
|:--|:--|
| `.outline-solid` | `outline-style: solid;` |
| `.outline-dashed` | `outline-style: dashed;` |
| `.outline-dotted` | `outline-style: dotted;` |
| `.outline-double` | `outline-style: double;` |
| `.outline-hidden` | `outline-style: hidden;` |
| `.outline-none` | `outline-style: none;` |
{.table}

## Описание

`outline-style-*` задает тип линии внешнего контура.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`.

- Контрольные точки: `sm`, `md`, `lg`, `xl`.
- Модификатор: `outline-{solid|dashed|dotted|double|hidden|none}`.

## Пример

```html
<button class="outline outline-2 outline-solid outline-primary outline-offset-2">solid</button>
<button class="outline outline-2 outline-dashed outline-primary outline-offset-2">dashed</button>
<button class="outline outline-2 outline-dotted outline-primary outline-offset-2">dotted</button>
<button class="outline outline-4 outline-double outline-primary outline-offset-2">double</button>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=outline&group=outline-style"></iframe>
</div>
