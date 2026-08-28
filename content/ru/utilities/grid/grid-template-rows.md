---
title: "Шаблон строк сетки (grid-template-rows)"
description: "Шаблон строк сетки (grid-template-rows)"
tags: [grid-template-rows, sm, md, lg, xl]
---

# Шаблон строк сетки (grid-template-rows)

Модификаторы `grid-row-*` задают количество строк в сетке и их базовый размер.

## Таблица классов

| Класс           | Значение                                 |
|:----------------|:-----------------------------------------|
| .grid-row-1 … 12| grid-template-rows: repeat(n, minmax(0, 1fr)); |
| .grid-row-none  | grid-template-rows: none;                |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: применяет модификатор начиная с указанного брейкпоинта (`sm`, `md`, `lg`, `xl`). Если не указана, действует для всех размеров.
- Модификатор *(обязательный параметр)*: `grid-row-{n}` или `grid-row-none`.

## Пример

```html
<div class="grid grid-row-3 gap-2 h-e8">
  <div class="border radius-1 bg-primary color-on-primary p-2">Short</div>
  <div class="border radius-1 bg-secondary color-on-secondary p-2">Two<br/>lines</div>
  <div class="border radius-1 bg-tertiary color-on-tertiary p-2">Three<br/>lines<br/>here</div>
</div>
```

## Адаптивность

```html
<div class="grid grid-row-2 md:grid-row-4">
  <!-- 2 строки на мобильных, 4 на md и выше -->
</div>
```
## Пример
:::example {id="utilities/grid/grid-template-rows" label="Результат"}
:::

