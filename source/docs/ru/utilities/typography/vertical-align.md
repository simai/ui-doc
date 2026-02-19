---
extends: _core._layouts.documentation
section: content
title: "Выравнивание по вертикали (vertical-align)"
description: "Выравнивание по вертикали (vertical-align)"
---

# Выравнивание по вертикали (vertical-align)

!rtags[vertical-align]



С помощью модификаторов вы можете выровнять строчные элементы (inline elements) по вертикали.

## Таблица классов

| Класс          | Значение                  |
|:---------------|:--------------------------|
| .text-baseline | vertical-align: baseline; |
| .text-top      | vertical-align: top;      |
| .text-middle   | vertical-align: middle;   |
| .text-bottom   | vertical-align: bottom;   |
| .text-sup      | vertical-align: super;    |
| .text-sub      | vertical-align: sub;      |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `text-baseline` – выравнивает элемент по базовой линии родителя
    - `text-top` – выравнивает верхний край элемента по верхнему краю строки
    - `text-middle` – выравнивает середину элемента по вертикальному центру строки
    - `text-bottom` – выравнивает нижний край элемента по нижнему краю строки
    - `text-sup` – отображение элемента как надстрочного индекса
    - `text-sub` – отображение элемента как подстрочного индекса

## Пример использования

```html
<span class="inline-block text-baseline">Базовая линия</span>

<span class="inline-block text-top">Верхний край</span>

<span class="inline-block text-middle">Центр строки</span>

<span class="inline-block text-bottom">Нижний край</span>

<span class="inline-block text-sup">Надстрочный индекс</span>

<span class="inline-block text-sub">Подстрочный индекс</span>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=typography&group=vertical-align"></iframe>
</div>
