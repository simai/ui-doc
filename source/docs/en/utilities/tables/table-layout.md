---
extends: _core._layouts.documentation
section: content
title: Макет таблицы
description: Макет таблицы
---

# Макет таблицы

[https://dev.ru.simai.io/ru/ui/utility/table/table-layout.php](https://dev.ru.simai.io/ru/ui/utility/table/table-layout.php)

С помощью модификаторов можно управлять алгоритмом макета таблицы.

## Таблица классов

| Класс        | Значение             |
|:-------------|:---------------------|
| .table-auto  | table-layout: auto;  |
| .table-fixed | table-layout: fixed; |
{.table}

## Описание

- `table-auto` — позволяет таблице автоматически изменять ширину столбцов в зависимости от содержимого.
- `table-fixed` — таблица игнорирует содержимое столбцов и использует фиксированную ширину.

## Пример использования

```html
<!-- Авто макет таблицы -->
<table class="table table-auto">
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

```html
<!-- Фиксированный макет таблицы -->
<table class="table table-fixed">
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
