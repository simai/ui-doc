---
extends: _core._layouts.documentation
section: content
title: Толщина обводки
description: Толщина обводки
---

# Толщина обводки

[https://dev.ru.simai.io/ru/ui/utility/svg/stroke-width.php](https://dev.ru.simai.io/ru/ui/utility/svg/stroke-width.php)

С помощью модификаторов толщины обводки можно управлять шириной линии у SVG-элементов.

## Таблица классов

| Класс     | Значение         |
|:----------|:-----------------|
| .stroke-0 | stroke-width: 0; |
| .stroke-1 | stroke-width: 1; |
| .stroke-2 | stroke-width: 2; |
| .stroke-3 | stroke-width: 3; |
| .stroke-4 | stroke-width: 4; |
{.table}

## Описание

Модификаторы толщины обводки определяют, насколько толстой будет линия (stroke) у SVG-элементов.  
Используя данные модификаторы, вы можете легко настроить визуальный стиль и читаемость  
графических элементов, изменяя толщину их обводки.

## Синтаксис

Использование: `{модификатор}`

- `stroke-{0...4}` — задаёт соответствующую толщину обводки в пикселях.

## Пример использования

```html
<svg class="stroke-2" width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="none" />
</svg>
```

В данном примере обводка круга будет иметь толщину 2px.
