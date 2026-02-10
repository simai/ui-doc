---
extends: _core._layouts.documentation
section: content
title: "Отображение элемента при печати (display-print)"
description: "Отображение элемента при печати (display-print)"
---

# Отображение элемента при печати (display-print)

Утилиты `print-*` задают `display` только внутри `@media print`.

## Классы и значения

| Класс | Значение в режиме печати |
|:--|:--|
| `.print-block` | `display: block;` |
| `.print-inline-block` | `display: inline-block;` |
| `.print-inline` | `display: inline;` |
| `.print-flex` | `display: flex;` |
| `.print-inline-flex` | `display: inline-flex;` |
| `.print-table` | `display: table;` |
{.table}

## Как это работает

Каждый `print-*` класс в обычном экране выставляет `display: none`, а при печати включает нужный `display`.

## Синтаксис

`print-{block|inline-block|inline|flex|inline-flex|table}`

## Пример

```html
<div class="hidden print-block">Printed as block</div>
<div class="hidden print-inline-flex">Printed as inline-flex</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=print&group=display-print"></iframe>
</div>