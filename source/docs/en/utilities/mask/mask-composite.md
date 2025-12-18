---
extends: _core._layouts.documentation
section: content
title: Композиция маски
description: Композиция маски
---

# Композиция маски

[https://dev.ru.simai.io/ru/ui/utility/mask/mask-composite.php](https://dev.ru.simai.io/ru/ui/utility/mask/mask-composite.php)

С помощью модификаторов композиции маски можно комбинировать несколько слоев маски, определяя логику их взаимодействия
друг с другом.

## Таблица классов

| Класс           | Значение                   |
|:----------------|:---------------------------|
| .mask-add       | mask-composite: add;       |
| .mask-subtract  | mask-composite: subtract;  |
| .mask-intersect | mask-composite: intersect; |
| .mask-exclude   | mask-composite: exclude;   |
{.table}

## Описание

Модификаторы композиции маски определяют, каким образом объединяются несколько слоев маски:

- **mask-add** – текущий слой маски отображается под нижним слоем, их результирующая область суммируется.
- **mask-subtract** – отображаются только те части текущего слоя, которые не пересекаются с нижними слоями.
- **mask-intersect** – отображаются только те части текущего слоя, которые пересекаются с нижним слоем.
- **mask-exclude** – отображаются только непересекающиеся части текущего и нижнего слоя, исключая пересечения.

## Примеры использования

```html
<!-- Суммирование масок -->
<div class="mask-add">...</div>

<!-- Вычитание маски -->
<div class="mask-subtract">...</div>

<!-- Пересечение масок -->
<div class="mask-intersect">...</div>

<!-- Исключение пересечений -->
<div class="mask-exclude">...</div>
```
