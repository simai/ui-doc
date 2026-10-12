---
title: "Разрыв внутри элемента"
description: "Разрешает или запрещает делить элемент между колонками или страницами."
---

# Разрыв внутри элемента

Классы `break-inside-*` задают свойство `break-inside`: разрешают или
запрещают делить элемент между колонками или страницами. Берите их для
карточек, таблиц и рисунков в многоколоночном блоке
([`layout-col-*`](/ru/utilities/layout-break/column/)) и при печати, чтобы
блок оставался целым.

## Пример

### Целая карточка

Без класса высокая карточка 2 разрезана между колонками. С
`break-inside-avoid` или `break-inside-avoid-column` она переходит в
следующую колонку целиком.

:::example {id="utilities/layout-break/break-inside" label="break-inside-avoid и break-inside-avoid-column"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `break-inside-auto` | `page-break-inside: auto; -webkit-column-break-inside: auto; -moz-column-break-inside: auto; break-inside: auto` | — |
| `break-inside-avoid` | `page-break-inside: avoid; -webkit-column-break-inside: avoid; -moz-column-break-inside: avoid; break-inside: avoid` | — |
| `break-inside-avoid-page` | `page-break-inside: avoid; break-inside: avoid-page` | — |
| `break-inside-avoid-column` | `-webkit-column-break-inside: avoid; -moz-column-break-inside: avoid; break-inside: avoid-column` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:break-inside-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Выбор значения

- `break-inside-avoid` — не делить элемент ни между колонками, ни между
  страницами.
- `break-inside-avoid-column` — не делить между колонками; при печати
  страница может разрезать элемент.
- `break-inside-avoid-page` — не делить между страницами при печати; в
  колонках элемент может разрезаться.
- `break-inside-auto` — решение за браузером; так элемент ведёт себя без
  класса.

### Карточки в колонках

```html
<div class="layout-col-3">
  <article class="break-inside-avoid">Карточка 1</article>
  <article class="break-inside-avoid">Карточка 2</article>
  <article class="break-inside-avoid">Карточка 3</article>
</div>
```

### Таблица при печати

```html
<table class="break-inside-avoid-page">
  <!-- строки таблицы -->
</table>
```

## Ограничения

- Классы действуют только внутри многоколоночного блока или при печати.
- Запрет разрыва — просьба к браузеру: элемент выше колонки или страницы всё
  равно разрезается.
- У семейства нет префиксов состояния.

## См. также

- [Разрыв до элемента](/ru/utilities/layout-break/break-before/)
- [Разрыв после колонки](/ru/utilities/layout-break/break-after/)
- [Колонки](/ru/utilities/layout-break/column/)
