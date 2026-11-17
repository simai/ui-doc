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
| `grid-col-{значение}` | `grid-template-columns: repeat({значение}, minmax(0, 1fr))` | `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |
| `grid-col-none` | `grid-template-columns: none` | — |
| `grid-col-subgrid` | `grid-template-columns: subgrid` | — |
| `grid-col-fit` | `grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--sf-f2)), 1fr))` | — |
| `grid-col-fit-{значение}` | `grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--sf-{значение})), 1fr))` | `f0`, `f2`, `f6`, `g0`, `g2`, `g6` |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:grid-col-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-f2` | `12rem` |
| `--sf-f0` | `10rem` |
| `--sf-f6` | `16rem` |
| `--sf-g0` | `20rem` |
| `--sf-g2` | `24rem` |
| `--sf-g6` | `32rem` |

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
