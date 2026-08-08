---
title: "Содержимое (content)"
description: "Содержимое (content)"
---

# Содержимое (content)


С помощью модификаторов можно управлять содержимым псевдоэлементов `::before` и `::after`.

## Таблица классов

| Класс         | Значение      |
|:--------------|:--------------|
| .after-empty  | content: ''   |
| .before-empty | content: ''   |
| .after-none   | content: none |
| .before-none  | content: none |
{.table}

## Описание

Модификаторы содержимого позволяют управлять тем, что отображается в псевдоэлемента
 `::before` и `::after`. Например, с
и
 помощью можно добавлять или скрывать пустое содержимое.

## Пример

```html
<p class="after-empty">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="before-empty">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="after-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="before-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```
