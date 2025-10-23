---
extends: _core._layouts.documentation
section: content
title: "Шаблон колонок сетки (grid-template-columns)"
description: "Шаблон колонок сетки (grid-template-columns)"
---

# Шаблон колонок сетки (grid-template-columns)

[https://dev.ru.simai.io/ru/ui/utility/grid/grid-template-columns.php](https://dev.ru.simai.io/ru/ui/utility/grid/grid-template-columns.php)

В SIMAI Framework с помощью модификаторов можно создать сетку с определённым количеством равных по ширине колонок.

## Таблица классов

| Класс          | Значение                       |
|:---------------|:---------------------------------------------------|
| .grid-col-1    | grid-template-columns: repeat(1, minmax(0, 1fr));  |
| .grid-col-2    | grid-template-columns: repeat(2, minmax(0, 1fr));  |
| .grid-col-3    | grid-template-columns: repeat(3, minmax(0, 1fr));  |
| .grid-col-4    | grid-template-columns: repeat(4, minmax(0, 1fr));  |
| .grid-col-5    | grid-template-columns: repeat(5, minmax(0, 1fr));  |
| .grid-col-6    | grid-template-columns: repeat(6, minmax(0, 1fr));  |
| .grid-col-7    | grid-template-columns: repeat(7, minmax(0, 1fr));  |
| .grid-col-8    | grid-template-columns: repeat(8, minmax(0, 1fr));  |
| .grid-col-9    | grid-template-columns: repeat(9, minmax(0, 1fr));  |
| .grid-col-10   | grid-template-columns: repeat(10, minmax(0, 1fr)); |
| .grid-col-11   | grid-template-columns: repeat(11, minmax(0, 1fr)); |
| .grid-col-12   | grid-template-columns: repeat(12, minmax(0, 1fr)); |
| .grid-col-none | grid-template-columns: none;                       |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `grid-col-{1...12}` — задаёт количество колонок сетки;
    - `grid-col-none` — отменяет шаблон сетки.

## Пример использования

```html
<div class="grid grid-col-3 gap-1">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
</div>
```

## Адаптивность

Для изменения количества колонок начиная с определённого размера экрана используйте префикс контрольной точки. Например:

```html
<div class="md:grid-col-4">
    <!-- Начиная с размера экрана md и больше будет 4 колонки -->
</div>
```
