---
title: "Шаблон колонок сетки"
description: "Делит грид-контейнер на заданное число колонок равной ширины."
---

# Шаблон колонок сетки

Классы `grid-col-*` задают `grid-template-columns`: сколько колонок у
грид-контейнера. Колонки получаются равной ширины, а элементы раскладываются
по ним слева направо. Берите их вместе с [`grid`](/ru/utilities/layout/display/)
для сеток карточек, форм и раскладок страницы.

## Пример

### Число колонок

Подпись над образцом — класс контейнера.

:::example {id="utilities/grid/grid-template-columns" label="grid-col-2, grid-col-3, grid-col-4, grid-col-6"}
:::

### Ширина экрана

С префиксом ширины класс действует от указанной ширины и шире. Меняйте ширину
окна просмотра: на узком экране одна колонка, с ширины `sm` — две, с ширины `lg`
— четыре.

:::example {id="utilities/grid/grid-template-columns-responsive" label="grid-col-1 sm:grid-col-2 lg:grid-col-4"}
:::

### Вложенная сетка

`grid-col-subgrid` берёт колонки у родительской сетки: элементы вложенного
блока встают точно по колонкам родителя.

:::example {id="utilities/grid/grid-template-columns-subgrid" label="grid-col-subgrid"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `grid-col-1` | `grid-template-columns: repeat(1, minmax(0, 1fr))` | — |
| `grid-col-2` | `grid-template-columns: repeat(2, minmax(0, 1fr))` | — |
| `grid-col-3` | `grid-template-columns: repeat(3, minmax(0, 1fr))` | — |
| `grid-col-4` | `grid-template-columns: repeat(4, minmax(0, 1fr))` | — |
| `grid-col-5` | `grid-template-columns: repeat(5, minmax(0, 1fr))` | — |
| `grid-col-6` | `grid-template-columns: repeat(6, minmax(0, 1fr))` | — |
| `grid-col-7` | `grid-template-columns: repeat(7, minmax(0, 1fr))` | — |
| `grid-col-8` | `grid-template-columns: repeat(8, minmax(0, 1fr))` | — |
| `grid-col-9` | `grid-template-columns: repeat(9, minmax(0, 1fr))` | — |
| `grid-col-10` | `grid-template-columns: repeat(10, minmax(0, 1fr))` | — |
| `grid-col-11` | `grid-template-columns: repeat(11, minmax(0, 1fr))` | — |
| `grid-col-12` | `grid-template-columns: repeat(12, minmax(0, 1fr))` | — |
| `grid-col-none` | `grid-template-columns: none` | — |
| `grid-col-subgrid` | `grid-template-columns: subgrid` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:grid-col-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Как выбрать

- `grid-col-1` … `grid-col-12` — колонки равной ширины. Элемент занимает
  несколько колонок с классами
  [`col-span-*`](/ru/utilities/grid/grid-column/).
- `grid-col-none` — снимает шаблон: колонки создаются автоматически, их
  ширину задают классы [`auto-cols-*`](/ru/utilities/grid/grid-auto-columns/).
- `grid-col-subgrid` — для блока, который сам лежит в сетке и занимает в ней
  несколько колонок.

### Сетка карточек

```html
<div class="grid grid-col-1 sm:grid-col-2 lg:grid-col-3 gap-2">
  <article>Карточка</article>
  <article>Карточка</article>
  <article>Карточка</article>
</div>
```

### Двенадцать колонок

```html
<div class="grid grid-col-12 gap-2">
  <aside class="col-span-12 md:col-span-3">Панель</aside>
  <main class="col-span-12 md:col-span-9">Содержимое</main>
</div>
```

## Ограничения

- Колонки задаются как `minmax(0, 1fr)`: длинное слово или широкая картинка
  не раздвигают колонку, а выходят за неё.
- Ширину колонок по отдельности классы не задают: все колонки шаблона равны.
- Колонки идут по направлению письма: при `dir="rtl"` первая колонка справа.

## См. также

- [Размер колонки сетки](/ru/utilities/grid/grid-column/)
- [Шаблон строк сетки](/ru/utilities/grid/grid-template-rows/)
- [Промежутки между элементами](/ru/utilities/grid-and-flexbox-utilities/gap/)
- [Метод отображения элемента](/ru/utilities/layout/display/)
