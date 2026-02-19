---
extends: _core._layouts.documentation
section: content
title: Оформление таблицы
description: Оформление таблицы
---

# Оформление таблицы


С помощью модификаторов можно управлять внешним видом таблиц в SIMAI Framework.

## Таблица классов

| Класс        | Значение                       |
|:-------------|:-------------------------------|
| .table       | стандартное оформление таблицы |
| .table-small | уменьшенный размер таблицы     |
{.table}

## Описание

Модификатор `table` задаёт базовое оформление таблицы, а `table-small` уменьшает её размеры и отступы.

## Пример использования

### Оформление по умолчанию

```html
<table class="table">
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

### Уменьшенная таблица

```html
<table class="table table-small">
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
