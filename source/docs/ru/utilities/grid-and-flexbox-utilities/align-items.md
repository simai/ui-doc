---
extends: _core._layouts.documentation
section: content
title: "Выравнивание каждого элемента в ячейках по поперечной оси (align-items)"
description: "Выравнивание каждого элемента в ячейках по поперечной оси (align-items)"
---

# Выравнивание каждого элемента в ячейках по поперечной оси (align-items)

[https://dev.ru.simai.io/ru/ui/utility/grid-flex/align-items.php](https://dev.ru.simai.io/ru/ui/utility/grid-flex/align-items.php)

Данные модификаторы определяют, как каждый элемент внутри ячейки сетки или флексбокса будет выравниваться относительно
поперечной оси.

## Таблица классов

| Класс                | Значение              |
|:---------------------|:----------------------|
| .items-cross-start   | align-items: start;   |
| .items-cross-end     | align-items: end;     |
| .items-cross-center  | align-items: center;  |
| .items-cross-baseline| align-items: baseline;|
| .items-cross-stretch | align-items: stretch; |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `items-cross-start` – каждый элемент прижимается к началу ячейки по поперечной оси;
    - `items-cross-end` – каждый элемент прижимается к концу ячейки по поперечной оси;
    - `items-cross-center` – каждый элемент выравнивается по центру ячейки по поперечной оси;
    - `items-cross-baseline` – выравнивание по базовой линии текста элементов;
    - `items-cross-stretch` – каждый элемент растягивается, заполняя ячейку по поперечной оси.

## Пример использования

```html
<div class="grid grid-col-3 items-cross-center">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>
```

Здесь каждый элемент будет выравнен по центру ячейки относительно поперечной оси.

## Адаптивность

Для изменения выравнивания элементов, начиная с определённого размера экрана, добавьте контрольную точку. Например:

```html
<div class="md:items-cross-start">
  <!-- Начиная с md каждый элемент будет прижат к началу ячейки по поперечной оси -->
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=grid-and-flexbox-utilities&group=align-items"></iframe>
</div>