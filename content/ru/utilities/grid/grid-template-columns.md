---
title: "Шаблон колонок сетки (grid-template-columns)"
description: "Шаблон колонок сетки (grid-template-columns)"
tags: [grid-template-columns, sm, md, lg, xl]
---

# Шаблон колонок сетки (grid-template-columns)

Модификаторы `grid-col-*` задают количество колонок и их размер, формируя базовый шаблон сетки.

## Таблица классов

| Класс            | Значение                                |
|:-----------------|:----------------------------------------|
| .grid-col-1 … 12 | grid-template-columns: repeat(n, minmax(0, 1fr)); |
| .grid-col-none   | grid-template-columns: none;            |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с указанного брейкпоинта (`sm`, `md`, `lg`, `xl`). Если не указана, действует всегда.
- Модификатор *(обязательный параметр)*: `grid-col-{n}` или `grid-col-none`.

## Пример

```html
<div class="grid grid-col-3 gap-2">
  <div class="border radius-1 bg-primary color-on-primary p-2">1</div>
  <div class="border radius-1 bg-secondary color-on-secondary p-2">2</div>
  <div class="border radius-1 bg-tertiary color-on-tertiary p-2">3</div>
</div>
```

## Адаптивность

```html
<div class="grid grid-col-2 md:grid-col-4">
  <!-- 2 колонки на мобильных, 4 на md и выше -->
</div>
```
## Пример
:::example {id="utilities/grid/grid-template-columns" label="Результат"}
:::

