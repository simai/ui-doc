---
extends: _core._layouts.documentation
section: content
title: Чередование строки и столбцов
description: Чередование строки и столбцов
---

# Чередование строки и столбцов

[https://dev.ru.simai.io/ru/ui/utility/table/table-stripe.php](https://dev.ru.simai.io/ru/ui/utility/table/table-stripe.php)

С помощью модификаторов можно задать чередование цветов для строк или столбцов в таблице.

## Таблица классов

| Класс                              | Значение                                                                 |
|:-------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| table-stripe > tbody > tr:nth-of-type(odd) > *         | `--sf-table-accent-bg`:var(`--sf-table-stripe-bg`);<br/>color:var(`--sf-table-stripe-color`) |
| table-stripe-col > :not(caption) > tr > :nth-child(2n) | `--sf-table-accent-bg`:var(`--sf-table-stripe-bg`);<br/>color:var(`--sf-table-stripe-color`) |
{.table}

## Описание

- `table-stripe` — задаёт чередование фона для строк таблицы.
- `table-stripe-col` — задаёт чередование фона для столбцов таблицы.

## Пример использования

### Чередование по строкам

```html
<table class="table table-stripe">
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

### Чередование по столбцам

```html
<table class="table table-stripe-col">
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
