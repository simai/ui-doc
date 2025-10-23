---
extends: _core._layouts.documentation
section: content
title: "Размер колонки сетки (grid-column)"
description: "Размер колонки сетки (grid-column)"
---

# Размер колонки сетки (grid-column)

[https://dev.ru.simai.io/ru/ui/utility/grid/grid-column.php](https://dev.ru.simai.io/ru/ui/utility/grid/grid-column.php)

В SIMAI Framework с помощью модификаторов можно управлять параметрами размещения столбцов в сетке, регулируя их
положение и размер.

## Таблица классов

| Класс          | Значение    |
|:---------------|:--------------------------------|
| .col-auto      | grid-column: auto;              |
| .col-span-1    | grid-column: span 1 / span 1;   |
| .col-span-2    | grid-column: span 2 / span 2;   |
| .col-span-3    | grid-column: span 3 / span 3;   |
| .col-span-4    | grid-column: span 4 / span 4;   |
| .col-span-5    | grid-column: span 5 / span 5;   |
| .col-span-6    | grid-column: span 6 / span 6;   |
| .col-span-7    | grid-column: span 7 / span 7;   |
| .col-span-8    | grid-column: span 8 / span 8;   |
| .col-span-9    | grid-column: span 9 / span 9;   |
| .col-span-10   | grid-column: span 10 / span 10; |
| .col-span-11   | grid-column: span 11 / span 11; |
| .col-span-12   | grid-column: span 12 / span 12; |
| .col-span-full | grid-column: 1/-1;              |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `col-auto` — размер элемента определяется автоматически;
    - `col-span-{1...12}` — размер элемента устанавливается в указанное количество столбцов;
    - `col-span-full` — элемент занимает все доступные столбцы сетки.

## Пример использования

```html
<div class="grid grid-col-4 gap-1">
    <div class="col-auto">1</div>
    <div></div>
    <div class="col-span-2">2</div>
    <div class="col-span-full">3</div>
</div>
```

В данном примере:

- Первый элемент `col-auto` занимает автоматически определённый размер;
- Третий элемент `col-span-2` занимает 2 столбца;
- Четвёртый элемент `col-span-full` растягивается на все оставшиеся столбцы.

## Адаптивность

Для изменения параметров размещения столбцов начиная с определённого размера экрана используйте префикс контрольной
точки. Например:

```html
<div class="md:col-span-4">
    <!-- Начиная с размера экрана md и больше элемент будет занимать 4 столбца -->
</div>
```
