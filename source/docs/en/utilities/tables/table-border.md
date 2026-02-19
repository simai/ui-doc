---
extends: _core._layouts.documentation
section: content
title: Границы таблицы
description: Границы таблицы
---

# Границы таблицы


С помощью модификатора можно добавить границы к таблице, чтобы визуально  
отделить её содержимое.

## Таблица классов

| Класс         | Значение                     |
|:--------------|:-----------------------------|
| .table-border | Отображает границы у таблицы |
{.table}

## Описание

- `table-border` — добавляет внешние границы и границы между ячейками.

## Пример использования

```html
<table class="table table-border">
    <thead>
        <tr>
            <th>Песня</th>
            <th>Артист</th>
            <th>Год</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
        </tr>
        <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
        </tr>
        <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>
```
