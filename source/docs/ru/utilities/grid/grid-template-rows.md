---
extends: _core._layouts.documentation
section: content
title: "Шаблон строк сетки (grid-template-rows)"
description: "Шаблон строк сетки (grid-template-rows)"
---

# Шаблон строк сетки (grid-template-rows)

[https://dev.ru.simai.io/ru/ui/utility/grid/grid-template-rows.php](https://dev.ru.simai.io/ru/ui/utility/grid/grid-template-rows.php)

В SIMAI Framework с помощью модификаторов можно задать шаблон строк сетки, определяя количество одинаковых по высоте
строк. Это упрощает создание вертикальных макетов и адаптацию под разные размеры экранов.

## Таблица классов

| Класс          | Значение                   |
|:---------------|:-----------------------------------------------|
| .grid-row-1    | grid-template-rows: repeat(1, minmax(0, 1fr)); |
| .grid-row-2    | grid-template-rows: repeat(2, minmax(0, 1fr)); |
| .grid-row-3    | grid-template-rows: repeat(3, minmax(0, 1fr)); |
| .grid-row-4    | grid-template-rows: repeat(4, minmax(0, 1fr)); |
| .grid-row-5    | grid-template-rows: repeat(5, minmax(0, 1fr)); |
| .grid-row-6    | grid-template-rows: repeat(6, minmax(0, 1fr)); |
| .grid-row-none | grid-template-rows: none;                      |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `grid-row-{n}` — создаёт шаблон сетки с указанным количеством строк, где каждая строка имеет одинаковую высоту.
    - `grid-row-none` — отменяет ранее заданный шаблон строк, возвращая расположение к исходному состоянию.

## Пример использования

```html
<div class="grid grid-row-3 gap-1 grid-flow-col">
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

В данном примере используется класс `grid-row-3`, создающий сетку с тремя строками. Элементы будут размещены по
столбцам (из-за класса `grid-flow-col`), образуя три строки высотой в равные доли доступного пространства.

## Адаптивность

Для изменения количества строк в зависимости от размера экрана, добавьте контрольную точку. Например:

```html
<div class="md:grid-row-3">
    <!-- Начиная с md и больше будет три строки -->
</div>
```
