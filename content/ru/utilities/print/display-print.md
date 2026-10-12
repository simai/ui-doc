---
title: "Отображение элемента при печати"
description: "Скрывает элемент на экране и показывает его только на печати."
---

# Отображение элемента при печати

Классы `print-{значение}` скрывают элемент на экране (`display: none`) и при
печати задают ему `display` с выбранным значением. Берите их для того, что
нужно только на бумаге: адреса страницы, реквизитов, строки для подписи.

## Пример

### Только на бумаге

На экране в рамках видны лишь пояснения. Откройте предпросмотр печати
(`Ctrl`+`P` или `Cmd`+`P`): пояснения с
`print-hidden` исчезают, а элементы с `print-block`, `print-inline`,
`print-flex` и `print-table` появляются.

:::example {id="utilities/print/display-print" label="print-block, print-inline, print-flex, print-table"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `print-block` | `display: none; при печати: display: block` | — |
| `print-inline-block` | `display: none; при печати: display: inline-block` | — |
| `print-inline` | `display: none; при печати: display: inline` | — |
| `print-flex` | `display: none; при печати: display: flex` | — |
| `print-inline-flex` | `display: none; при печати: display: inline-flex` | — |
| `print-table` | `display: none; при печати: display: table` | — |
| `print-visible` | `при печати: visibility: visible` | — |
| `print-hidden` | `при печати: visibility: hidden` | — |
| `print-visible-none` | `при печати: visibility: hidden` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Выбор значения

Значение после `print-` — тот `display`, который элемент получает на печати:
`print-block` для блока, `print-inline` и `print-inline-block` для части
строки, `print-flex` и `print-inline-flex` для строки элементов, `print-table`
для табличной раскладки.

```html
<footer class="print-block">Документ напечатан с сайта example.com</footer>

<p>Адрес страницы<span class="print-inline">: https://example.com/order/42</span></p>
```

### Скрытие на печати

`print-visible`, `print-hidden` и `print-visible-none` из этого же семейства
меняют `visibility` только на печати и не трогают экран — о них страница
[Видимость элемента при печати](/ru/utilities/print/display-visibility/).

```html
<nav class="print-hidden">Меню сайта</nav>
```

## Ограничения

- Класс скрывает элемент на экране всегда: показать элемент и на экране, и на
  печати с другим `display` нельзя.
- Убрать элемент из раскладки только на печати классом нельзя: `print-hidden`
  делает его невидимым, но место остаётся.
- Скрытое на экране содержимое недоступно и программам экранного доступа.
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Видимость элемента при печати](/ru/utilities/print/display-visibility/)
- [Метод отображения элемента](/ru/utilities/layout/display/)
- [Разрыв до элемента](/ru/utilities/layout-break/break-before/)
