---
title: "Видимость элемента при печати"
description: "Делает элемент невидимым или видимым только на печати, не меняя экран."
---

# Видимость элемента при печати

Классы `print-hidden` и `print-visible` задают свойство `visibility` только
при печати; на экране элемент не меняется. Берите их, чтобы убрать с бумаги
меню, кнопки и пояснения, не сдвигая остальную раскладку.

## Пример

### Скрытие с сохранением места

На экране видно всё. Откройте предпросмотр печати
(`Ctrl`+`P` или `Cmd`+`P`): элемент 2 с
`print-hidden` исчезает, но его место остаётся пустым. Во втором образце рамка
с `print-hidden` исчезает целиком, кроме потомка с `print-visible`.

:::example {id="utilities/print/display-visibility" label="print-hidden и print-visible"}
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

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Скрыть на печати

`print-hidden` делает элемент и его потомков невидимыми на бумаге.
`print-visible-none` — второе имя `print-hidden` с тем же значением.

```html
<header>
  <nav class="print-hidden">Меню сайта</nav>
</header>
```

### Показать потомка скрытого блока

`print-visible` возвращает видимость потомку блока с `print-hidden`: на бумаге
остаётся только он.

```html
<aside class="print-hidden">
  <p>Пояснение для экрана</p>
  <p class="print-visible">Реквизиты для печати</p>
</aside>
```

## Ограничения

- Невидимый элемент сохраняет своё место на странице. Классы семейства,
  которые меняют `display` (`print-block` и другие), скрывают элемент на
  экране — см. [Отображение элемента при печати](/ru/utilities/print/display-print/).
- Префиксов ширины экрана и состояния у семейства нет.

## См. также

- [Отображение элемента при печати](/ru/utilities/print/display-print/)
- [Видимость элемента](/ru/utilities/layout/visibility/)
