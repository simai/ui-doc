---
title: "Промежутки"
description: "Задаёт одинаковое расстояние между соседними дочерними элементами, не трогая крайние."
---

# Промежутки

Классы `space-x-*` и `space-y-*` ставятся на родителя и дают каждому
дочернему элементу, кроме первого, внешний отступ со стороны предыдущего
соседа. Берите их, когда между элементами нужен ровный шаг в обычном потоке блоков.

## Пример

### По строке

`space-x-*` добавляет отступ в начале строки каждому элементу, кроме
первого. Подпись над образцом — класс на пунктирном родителе.

:::example {id="utilities/indents/space" label="space-x-0 … space-x-4"}
:::

### По вертикали

`space-y-*` добавляет отступ сверху каждому элементу, кроме первого.

:::example {id="utilities/indents/space-y" label="space-y-1/4 … space-y-3"}
:::

### Обратный порядок

Когда флекс-контейнер разворачивает порядок (`flex-row-reverse`,
`flex-col-reverse`), первый элемент в разметке оказывается последним на
экране, и отступ встаёт не с той стороны. `space-x-reverse` и
`space-y-reverse` переносят отступ на другую сторону элемента.

:::example {id="utilities/indents/space-reverse" label="space-x-reverse и space-y-reverse"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `space-x-0` (`.space-x-0 > * + *`) | `--sf-space--reverse-x: 0; margin-inline-end: calc(var(--sf-space-0) * var(--sf-space--reverse-x)); margin-inline-start: calc(var(--sf-space-0) * (1 - var(--sf-space--reverse-x)))` | — |
| `space-y-0` (`.space-y-0 > * + *`) | `--sf-space--reverse-y: 0; margin-top: calc(var(--sf-space-0) * (1 - var(--sf-space--reverse-y))); margin-bottom: calc(var(--sf-space-0) * var(--sf-space--reverse-y))` | — |
| `space-x-{значение}` (`.space-x-{значение} > * + *`) | `--sf-space--reverse-x: 0; margin-inline-end: calc(var(--sf-space-{значение}) * var(--sf-space--reverse-x)); margin-inline-start: calc(var(--sf-space-{значение}) * (1 - var(--sf-space--reverse-x)))` | `1/4`, `1/3`, `1/2`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `space-y-{значение}` (`.space-y-{значение} > * + *`) | `--sf-space--reverse-y: 0; margin-top: calc(var(--sf-space-{значение}) * (1 - var(--sf-space--reverse-y))); margin-bottom: calc(var(--sf-space-{значение}) * var(--sf-space--reverse-y))` | `1/4`, `1/3`, `1/2`, `2`, `3`, `4`, `5`, `6`, `7`, `8` |
| `space-x-1` (`.space-x-1 > * + *`) | `--sf-space--reverse-x: 0; margin-inline-end: calc(var(--sf-space-1) * var(--sf-space--reverse-x)); margin-inline-start: calc(var(--sf-space-1) * (1 - var(--sf-space--reverse-x)))` | — |
| `space-y-1` (`.space-y-1 > * + *`) | `--sf-space--reverse-y: 0; margin-top: calc(var(--sf-space-1) * (1 - var(--sf-space--reverse-y))); margin-bottom: calc(var(--sf-space-1) * var(--sf-space--reverse-y))` | — |
| `space-x-reverse` (`.space-x-reverse > * + *`) | `--sf-space--reverse-x: 1` | — |
| `space-y-reverse` (`.space-y-reverse > * + *`) | `--sf-space--reverse-y: 1` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:space-x-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-space-0` | `0` |
| `--sf-space-1/4` | `0.25rem; от ширины lg: var(--sf-a4)` |
| `--sf-space-1/3` | `0.5rem; от ширины lg: var(--sf-a8)` |
| `--sf-space-1/2` | `0.5rem; от ширины lg: 0.75rem` |
| `--sf-space-1` | `var(--sf-b2); от ширины lg: var(--sf-b6)` |
| `--sf-space-2` | `var(--sf-b6); от ширины lg: var(--sf-c0)` |
| `--sf-space-3` | `var(--sf-b6); от ширины lg: var(--sf-c2)` |
| `--sf-space-4` | `var(--sf-c2); от ширины lg: var(--sf-c6)` |
| `--sf-space-5` | `var(--sf-c6); от ширины lg: var(--sf-d0)` |
| `--sf-space-6` | `var(--sf-c6); от ширины lg: var(--sf-d2)` |
| `--sf-space-7` | `var(--sf-d0); от ширины lg: var(--sf-d6)` |
| `--sf-space-8` | `var(--sf-d2); от ширины lg: var(--sf-e0)` |

## Применение

### Промежутки или gap

Во флекс- и грид-контейнере для того же результата удобнее `gap-*`: он не
меняет отступы самих элементов и правильно работает при переносе строк.
`space-*` подходит для обычного потока блоков и для контейнеров, где
отступы нужны только по одной оси.

```html
<article class="space-y-2">
  <h2>Заголовок</h2>
  <p>Первый абзац</p>
  <p>Второй абзац</p>
</article>
```

### Обратный порядок

Класс `space-*-reverse` ставится вместе с размером на того же родителя:

```html
<div class="flex flex-row-reverse space-x-2 space-x-reverse">
  <button type="button">Отмена</button>
  <button type="button">Сохранить</button>
</div>
```

### Ширина экрана

Шкала совпадает с `m-*` и `p-*` (`--sf-space-*`) и подрастает от ширины
`lg`. С префиксом ширины промежуток меняется от указанной ширины и шире:
`space-y-1 md:space-y-3`.

## Ограничения

- Промежуток — это внешний отступ дочерних элементов. Собственный отступ
  ребёнка по той же стороне (`m-top-*` при `space-y-*`) с ним конфликтует.
- При переносе строк (`flex-wrap`) первый элемент новой строки тоже получает
  отступ в начале строки, и края рядов не выравниваются. Здесь берите `gap-*`.
- Класс размера с префиксом ширины сбрасывает обратный порядок: к
  `space-x-reverse md:space-x-3` добавьте `md:space-x-reverse`.
- У семейства нет префиксов состояния.

## См. также

- [Внешний отступ](/ru/utilities/indents/margin/)
- [Внутренний отступ](/ru/utilities/indents/padding/)
- [Промежутки во флексе и гриде](/ru/utilities/grid-and-flexbox-utilities/gap/)
