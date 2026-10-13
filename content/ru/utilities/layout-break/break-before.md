---
title: "Разрыв до элемента"
description: "Задаёт, начинает ли элемент новую колонку или страницу."
---

# Разрыв до элемента

Классы `break-before-*` задают свойство `break-before`: разрешают, запрещают
или требуют разрыв колонки или страницы перед элементом. Берите их в
многоколоночном блоке ([`layout-col-*`](/ru/utilities/layout-break/column/)) и
при печати, когда раздел должен начинаться с новой колонки или страницы.

## Пример

### Разрыв колонки

Слева колонки заполняются сами; справа на элементе 2 стоит
`break-before-column`, и он начинает вторую колонку вместе со всеми
следующими элементами.

:::example {id="utilities/layout-break/break-before" label="break-before-column"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `break-before-auto` | `page-break-before: auto; -webkit-column-break-before: auto; -moz-column-break-before: auto; break-before: auto` | — |
| `break-before-avoid` | `page-break-before: avoid; -webkit-column-break-before: avoid; -moz-column-break-before: avoid; break-before: avoid` | — |
| `break-before-all` | `page-break-before: all; -webkit-column-break-before: all; -moz-column-break-before: all; break-before: all` | — |
| `break-before-avoid-page` | `page-break-before: avoid; -webkit-column-break-before: avoid; -moz-column-break-before: avoid; break-before: avoid-page` | — |
| `break-before-page` | `page-break-before: always; -webkit-column-break-before: page; -moz-column-break-before: page; break-before: page` | — |
| `break-before-left` | `page-break-before: left; -webkit-column-break-before: left; -moz-column-break-before: left; break-before: left` | — |
| `break-before-right` | `page-break-before: right; -webkit-column-break-before: right; -moz-column-break-before: right; break-before: right` | — |
| `break-before-column` | `-webkit-column-break-before: column; -moz-column-break-before: column; break-before: column` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:break-before-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Колонки

`break-before-column` начинает с элемента новую колонку, даже если в
предыдущей ещё есть место.

```html
<div class="layout-col-2">
  <section>Первая часть</section>
  <section class="break-before-column">Вторая часть — с новой колонки</section>
</div>
```

### Печать

`break-before-page` начинает элемент с новой страницы. `break-before-left` и
`break-before-right` добавляют одну или две страницы так, чтобы элемент начал
левую или правую страницу — при двусторонней печати. `break-before-all`
разрывает все вложенные области сразу: и колонку, и страницу. Действие видно в
предпросмотре печати.

```html
<section>Глава 1</section>
<section class="break-before-page">Глава 2 — с новой страницы</section>
```

### Запрет разрыва

`break-before-avoid` просит не разрывать ни колонку, ни страницу перед
элементом — например, перед подписью к рисунку. `break-before-avoid-page`
запрещает только разрыв страницы. `break-before-auto` возвращает решение
браузеру.

```html
<figure>
  <img src="chart.png" alt="График">
  <figcaption class="break-before-avoid">Подпись к графику</figcaption>
</figure>
```

## Ограничения

- Классы действуют только внутри многоколоночного блока или при печати; во
  флекс- и грид-контейнерах разрыва нет.
- Запрет разрыва — просьба к браузеру: если элемент не помещается, разрыв всё
  равно случится. Поддержка `avoid` в колонках у браузеров неполная.
- У семейства нет префиксов состояния.

## См. также

- [Разрыв после колонки](/ru/utilities/layout-break/break-after/)
- [Разрыв внутри элемента](/ru/utilities/layout-break/break-inside/)
- [Колонки](/ru/utilities/layout-break/column/)
- [Отображение элемента при печати](/ru/utilities/print/display-print/)
