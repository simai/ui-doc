---
title: "Промежутки между элементами"
description: "Промежутки между элементами (gap)"
tags: [gap, sm, md, lg, xl]
---

# Промежутки между элементами

:badge[gap]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1}

Этот модификатор задает расстояние между элементами внутри сетки (grid) или флексбокса (flex), упрощая управление
горизонтальными и вертикальными промежутками.

Канонические имена: `gap-*` для обеих осей, `col-gap-*` для колонок и
`row-gap-*` для строк. Ранее опубликованные `g-*`, `gap-x-*` и `gap-y-*`
остаются совместимыми, но считаются устаревающими псевдонимами.

## Наглядный пример

:::example {id="utilities/grid-and-flexbox-utilities/gap" label="Промежутки между элементами"}
:::

## Таблица классов

| Класс    | Значение                           |
|:---------|:-----------------------------------|
| `gap-0` | `gap: var(--sf-space-0);` |
| `col-gap-0` | `column-gap: var(--sf-space-0);` |
| `row-gap-0` | `row-gap: var(--sf-space-0);` |
| `gap-1/4` | `gap: var(--sf-space-1/4);` |
| `col-gap-1/4` | `column-gap: var(--sf-space-1/4);` |
| `row-gap-1/4` | `row-gap: var(--sf-space-1/4);` |
| `gap-1/3` | `gap: var(--sf-space-1/3);` |
| `col-gap-1/3` | `column-gap: var(--sf-space-1/3);` |
| `row-gap-1/3` | `row-gap: var(--sf-space-1/3);` |
| `gap-1/2` | `gap: var(--sf-space-1/2);` |
| `col-gap-1/2` | `column-gap: var(--sf-space-1/2);` |
| `row-gap-1/2` | `row-gap: var(--sf-space-1/2);` |
| `gap-1` | `gap: var(--sf-space-1);` |
| `col-gap-1` | `column-gap: var(--sf-space-1);` |
| `row-gap-1` | `row-gap: var(--sf-space-1);` |
| `gap-2` | `gap: var(--sf-space-2);` |
| `col-gap-2` | `column-gap: var(--sf-space-2);` |
| `row-gap-2` | `row-gap: var(--sf-space-2);` |
| `gap-3` | `gap: var(--sf-space-3);` |
| `col-gap-3` | `column-gap: var(--sf-space-3);` |
| `row-gap-3` | `row-gap: var(--sf-space-3);` |
| `gap-4` | `gap: var(--sf-space-4);` |
| `col-gap-4` | `column-gap: var(--sf-space-4);` |
| `row-gap-4` | `row-gap: var(--sf-space-4);` |
| `gap-5` | `gap: var(--sf-space-5);` |
| `col-gap-5` | `column-gap: var(--sf-space-5);` |
| `row-gap-5` | `row-gap: var(--sf-space-5);` |
| `gap-6` | `gap: var(--sf-space-6);` |
| `col-gap-6` | `column-gap: var(--sf-space-6);` |
| `row-gap-6` | `row-gap: var(--sf-space-6);` |
| `gap-7` | `gap: var(--sf-space-7);` |
| `col-gap-7` | `column-gap: var(--sf-space-7);` |
| `row-gap-7` | `row-gap: var(--sf-space-7);` |
| `gap-8` | `gap: var(--sf-space-8);` |
| `col-gap-8` | `column-gap: var(--sf-space-8);` |
| `row-gap-8` | `row-gap: var(--sf-space-8);` |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `gap-{0...8}` — устанавливает одинаковые промежутки по горизонтали и вертикали.
    - `col-gap-{0...8}` — устанавливает промежутки только между колонками.
    - `row-gap-{0...8}` — устанавливает промежутки только между строками.

Адаптивные формы сохраняют тот же порядок: `sm:gap-2`, `md:col-gap-3`,
`lg:row-gap-4`.

## Пример использования

```html
<!-- Пример: одинаковый промежуток -->
<div class="grid grid-col-2 gap-1">
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
</div>
```

```html
<!-- Пример: разный промежуток по горизонтали и вертикали -->
<div class="grid grid-col-2 row-gap-3 col-gap-6">
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
  <div class="h-d1 radius-1/3 text-center bg-primary"></div>
</div>
```

## Адаптивность

Для изменения промежутка, начиная с определённого размера экрана, просто добавьте контрольную точку. Например:

```html
<div class="md:gap-4">
    <!-- Начиная с md: промежуток будет var(--sf-space-1) (старый p-8) -->
</div>
```
