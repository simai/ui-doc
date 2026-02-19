---
extends: _core._layouts.documentation
section: content
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

Модификаторы содержимого позволяют управлять тем, что отображается в псевдоэлементах `::before` и `::after`. Например, с
их помощью можно добавлять или скрывать пустое содержимое.

## Пример

```html
<p class="after-empty">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="before-empty">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="after-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="before-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```
