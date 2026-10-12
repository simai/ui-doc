---
title: "Размер строки сетки"
description: "Задаёт, сколько строк сетки занимает элемент."
---

# Размер строки сетки

Классы `row-span-*` задают `grid-row`: сколько строк грид-контейнера занимает
элемент. Берите их, чтобы вытянуть карточку, картинку или боковой блок на
высоту нескольких соседних элементов.

## Пример

### Число строк

Сетка из трёх колонок. На выделенном элементе написан его класс.
`row-span-full` работает в сетке с шаблоном строк — здесь `grid-row-3`.

:::example {id="utilities/grid/grid-row" label="row-span-2, row-span-3 и row-span-full"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `row-auto` | `grid-row: auto` | — |
| `grid-row-auto` | `grid-row: auto` | — |
| `row-span-1` | `grid-row: span 1 / span 1` | — |
| `grid-row-span-1` | `grid-row: span 1 / span 1` | — |
| `row-span-2` | `grid-row: span 2 / span 2` | — |
| `grid-row-span-2` | `grid-row: span 2 / span 2` | — |
| `row-span-3` | `grid-row: span 3 / span 3` | — |
| `grid-row-span-3` | `grid-row: span 3 / span 3` | — |
| `row-span-4` | `grid-row: span 4 / span 4` | — |
| `grid-row-span-4` | `grid-row: span 4 / span 4` | — |
| `row-span-5` | `grid-row: span 5 / span 5` | — |
| `grid-row-span-5` | `grid-row: span 5 / span 5` | — |
| `row-span-6` | `grid-row: span 6 / span 6` | — |
| `grid-row-span-6` | `grid-row: span 6 / span 6` | — |
| `row-span-full` | `grid-row: 1 / -1` | — |
| `grid-row-span-full` | `grid-row: 1 / -1` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:row-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `row-span-1` … `row-span-6` — элемент занимает столько строк, начиная с
  места, куда его поставила раскладка.
- `row-span-full` — от первой до последней строки шаблона
  [`grid-row-*`](/ru/utilities/grid/grid-template-rows/).
- `row-auto` — снимает размер: элемент занимает одну строку.

Где элемент начинается и заканчивается, задают классы
[`row-start-*`](/ru/utilities/grid/grid-row-start/) и
[`row-end-*`](/ru/utilities/grid/grid-row-end/).

### Крупная карточка в галерее

```html
<div class="grid grid-col-3 gap-2">
  <figure class="row-span-2">Главное фото</figure>
  <figure>Фото</figure>
  <figure>Фото</figure>
  <figure>Фото</figure>
  <figure>Фото</figure>
</div>
```

### Второе имя

У каждого класса есть второе имя с приставкой `grid-`: `grid-row-span-2`,
`grid-row-span-full`, `grid-row-auto`. Значения те же. В разметке пишите
короткие имена — они соответствуют колоночным `col-span-*`.

## Ограничения

- `row-span-full` охватывает только строки шаблона; в сетке без шаблона
  элемент займёт одну строку.
- Не путайте `row-span-2` с `grid-row-2`: второй класс задаёт шаблон строк
  контейнера, а не размер элемента.

## См. также

- [Шаблон строк сетки](/ru/utilities/grid/grid-template-rows/)
- [Начальное положение строки сетки](/ru/utilities/grid/grid-row-start/)
- [Конечное положение строки сетки](/ru/utilities/grid/grid-row-end/)
- [Размер колонки сетки](/ru/utilities/grid/grid-column/)
