---
extends: _core._layouts.documentation
section: content
title: Активные строки и ячейки
description: Активные строки и ячейки
---

# Активные строки и ячейки


С помощью модификатора можно визуально выделять конкретные строки или ячейки таблицы, делая их «активными».

## Таблица классов

| Класс         | Значение                                                                  |
|:--------------|:----------------------------------------------------------------------------------------------|
| .table-active | `--sf-table-accent-bg`:var(`--sf-table-active-bg`);<br/> color:var(`--sf-table-active-color`) |
{.table}

## Описание

- `table-active` — при применении к строке или ячейке таблицы, она становится визуально выделенной, например, чтобы
  указать на активный или выбранный элемент.

## Пример использования

```html
<table class="table">
    <tbody>
        <tr class="table-active">
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
            <td class="table-active">Earth, Wind, and Fire</td>
            <td>1975</td>
        </tr>
    </tbody>
</table>
```
