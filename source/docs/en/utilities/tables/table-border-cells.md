---
extends: _core._layouts.documentation
section: content
title: Границы вокруг ячеек
description: Границы вокруг ячеек
---

# Границы вокруг ячеек


С помощью модификаторов можно контролировать, должны ли границы таблицы  
«сворачиваться» или «разделяться» между ячейками.

## Таблица классов

| Класс            | Значение                   |
|:-----------------|:---------------------------|
| .border-collapse | border-collapse: collapse; |
| .border-separate | border-collapse: separate; |
{.table}

## Описание

- `border-collapse` — объединяет границы смежных ячеек в единую границу.
- `border-separate` — каждая ячейка отображает свои отдельные границы.

## Пример использования

```html
<!-- Объединение границ -->
<table class="border-collapse w-full bg-surface-0 shadow-2 border-1 border-surface-lowest m-bottom-0">
    <thead>
        <tr>
            <th class="w-1/2 p-1 left border-1 border-surface-lowest">Штат</th>
            <th class="w-1/2 p-1 left border-1 border-surface-lowest">Город</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border-1 border-surface-lowest">Индиана</td>
            <td class="p-4 border-1 border-surface-lowest">Индианаполис</td>
        </tr>
        <tr>
            <td class="p-4 border-1 border-surface-lowest">Огайо</td>
            <td class="p-4 border-1 border-surface-lowest">Колумбус</td>
        </tr>
        <tr>
            <td class="p-4 border-1 border-surface-lowest">Мичиган</td>
            <td class="p-4 border-1 border-surface-lowest">Детройт</td>
        </tr>
    </tbody>
</table>
```

```html
<!-- Разделение границ -->
<table class="border-separate w-full bg-surface-0 shadow-2 border-1 border-surface-lowest m-bottom-0">
    <thead>
        <tr>
            <th class="w-1/2 p-1 left border-1 border-surface-lowest">Штат</th>
            <th class="w-1/2 p-1 left border-1 border-surface-lowest">Город</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="p-4 border-1 border-surface-lowest">Индиана</td>
            <td class="p-4 border-1 border-surface-lowest">Индианаполис</td>
        </tr>
        <tr>
            <td class="p-4 border-1 border-surface-lowest">Огайо</td>
            <td class="p-4 border-1 border-surface-lowest">Колумбус</td>
        </tr>
        <tr>
            <td class="p-4 border-1 border-surface-lowest">Мичиган</td>
            <td class="p-4 border-1 border-surface-lowest">Детройт</td>
        </tr>
    </tbody>
</table>
```
