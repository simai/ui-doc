---
title: "Разрыв после колонки"
description: "Задаёт, начинается ли после элемента новая колонка или страница."
---

# Разрыв после колонки

Классы `break-after-*` задают свойство `break-after`: разрешают, запрещают или
требуют разрыв колонки или страницы сразу после элемента. Берите их в
многоколоночном блоке ([`layout-col-*`](/ru/utilities/layout-break/column/)) и
при печати, когда раздел должен заканчивать колонку или страницу.

## Пример

### Разрыв колонки

Слева колонки заполняются сами; справа после элемента 2 стоит
`break-after-column`, и элемент 3 начинает вторую колонку.

:::example {id="utilities/layout-break/break-after" label="break-after-column"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `break-after-auto` | `page-break-after: auto; -webkit-column-break-after: auto; -moz-column-break-after: auto; break-after: auto` | — |
| `break-after-avoid` | `page-break-after: avoid; -webkit-column-break-after: avoid; -moz-column-break-after: avoid; break-after: avoid` | — |
| `break-after-all` | `page-break-after: all; -webkit-column-break-after: all; -moz-column-break-after: all; break-after: all` | — |
| `break-after-avoid-page` | `page-break-after: avoid; -webkit-column-break-after: avoid; -moz-column-break-after: avoid; break-after: avoid-page` | — |
| `break-after-page` | `page-break-after: always; -webkit-column-break-after: page; -moz-column-break-after: page; break-after: page` | — |
| `break-after-left` | `page-break-after: left; -webkit-column-break-after: left; -moz-column-break-after: left; break-after: left` | — |
| `break-after-right` | `page-break-after: right; -webkit-column-break-after: right; -moz-column-break-after: right; break-after: right` | — |
| `break-after-column` | `-webkit-column-break-after: column; -moz-column-break-after: column; break-after: column` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — `sm:`, `md:`, `lg:`, `xl:`, `xxl:`; состояния — нет. Например: `sm:break-after-auto`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Колонки

`break-after-column` заканчивает колонку после элемента: следующий элемент
начинает новую колонку, даже если в текущей ещё есть место.

```html
<div class="layout-col-2">
  <section class="break-after-column">Первая часть</section>
  <section>Вторая часть — с новой колонки</section>
</div>
```

### Печать

`break-after-page` начинает новую страницу после элемента. `break-after-left`
и `break-after-right` добавляют одну или две страницы так, чтобы следующая
страница была левой или правой — при двусторонней печати. `break-after-all`
разрывает все вложенные области сразу: и колонку, и страницу. Действие видно в
предпросмотре печати.

```html
<section class="break-after-page">Глава 1</section>
<section>Глава 2 — с новой страницы</section>
```

### Запрет разрыва

`break-after-avoid` просит не разрывать ни колонку, ни страницу после
элемента — например, после заголовка, чтобы он не остался без текста.
`break-after-avoid-page` запрещает только разрыв страницы. `break-after-auto`
возвращает решение браузеру.

```html
<h2 class="break-after-avoid">Заголовок раздела</h2>
<p>Первый абзац раздела</p>
```

## Ограничения

- Классы действуют только внутри многоколоночного блока или при печати; во
  флекс- и грид-контейнерах разрыва нет.
- Запрет разрыва — просьба к браузеру: если элемент не помещается, разрыв всё
  равно случится. Поддержка `avoid` в колонках у браузеров неполная.
- У семейства нет префиксов состояния.

## См. также

- [Разрыв до элемента](/ru/utilities/layout-break/break-before/)
- [Разрыв внутри элемента](/ru/utilities/layout-break/break-inside/)
- [Колонки](/ru/utilities/layout-break/column/)
- [Отображение элемента при печати](/ru/utilities/print/display-print/)
