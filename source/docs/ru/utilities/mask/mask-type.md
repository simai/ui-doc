---
extends: _core._layouts.documentation
section: content
title: Тип маски
description: Тип маски
---

# Тип маски

[https://dev.ru.simai.io/ru/ui/utility/mask/mask-type.php](https://dev.ru.simai.io/ru/ui/utility/mask/mask-type.php)

С помощью модификаторов типа маски можно указать, какой канал использовать для формирования маски элемента: альфа-канал
или яркость.

## Таблица классов

| Класс                | Значение              |
|:---------------------|:----------------------|
| .mask-type-alpha     | mask-mode: alpha;     |
| .mask-type-luminance | mask-mode: luminance; |
{.table}

## Описание

Модификаторы задают, как будет формироваться маска для элемента:

- **mask-type-alpha** – для наложения маски используется альфа-канал изображения.
- **mask-type-luminance** – для наложения маски используется яркость (luminance) изображения.

## Примеры использования

```html
<!-- Маска формируется на основе альфа-канала -->
<div class="mask-type-alpha"></div>
```

```html
<!-- Маска формируется на основе яркости -->
<div class="mask-type-luminance"></div>
```
