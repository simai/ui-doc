---
title: "Визуально скрытый контент"
description: "Прячет текст с экрана, оставляя его скринридерам, и возвращает его на экран."
---

# Визуально скрытый контент

Класс `sr-only` убирает элемент с экрана, но оставляет его в дереве
доступности: скринридер его читает. `not-sr-only` возвращает обычное
отображение. Берите их для подписей к кнопкам-значкам, заголовков разделов,
которые видны по оформлению, и пояснений для озвучивания.

## Пример

У первой кнопки на экране только «×», текст «Закрыть окно» скрыт классом
`sr-only`. У второй тот же текст возвращён на экран классом `not-sr-only`.

:::example {id="utilities/interactivity/sr-only" label="sr-only и not-sr-only"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `sr-only` | `position: absolute !important; width: var(--sf-px) !important; height: var(--sf-px) !important; padding: 0 !important; margin: calc(-1 * var(--sf-px)) !important; overflow: hidden !important; clip-path: inset(50%) !important; white-space: nowrap !important; border-width: 0 !important` | — |
| `not-sr-only` | `position: static !important; width: auto !important; height: auto !important; padding: 0 !important; margin: 0 !important; overflow: visible !important; clip-path: none !important; white-space: normal !important` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-px` | `1px` |

## Применение

`sr-only` сжимает элемент до одного пикселя, вырезает его содержимое и
выносит из потока, поэтому он не занимает места. Элемент остаётся в DOM и в
порядке чтения.

```html
<button type="button">
  <span aria-hidden="true">×</span>
  <span class="sr-only">Закрыть окно</span>
</button>
```

`not-sr-only` отменяет `sr-only` на том же элементе или на элементе, который
получил `sr-only` из общего шаблона.

| Задача | Класс |
| :--- | :--- |
| спрятать текст от глаз, оставить скринридеру | `sr-only` |
| спрятать от всех | [`hidden`](/ru/utilities/layout/display/) или атрибут `hidden` |
| спрятать от скринридера, оставить на экране | атрибут `aria-hidden="true"` |

## Ограничения

- У семейства нет префиксов ширины экрана и состояния: `focus:not-sr-only`
  нет. Ссылку «Перейти к содержимому», которая появляется при фокусе, делают
  своим правилом `:focus`.
- Не прячьте классом элементы, на которые можно перейти клавишей Tab: фокус
  попадёт на невидимую точку.
- Внутри компонента Framework класс может проиграть. Слой `sf.components`
  стоит после `sf.utilities`, поэтому правило компонента для той же части
  сильнее утилиты при любой специфичности: например, `.sf-button > *` задаёт
  `position: relative`, и скрытый текст прямо внутри `sf-button` остаётся в
  потоке. Доступное имя кнопке или другому контролу Framework давайте
  атрибутом `aria-label`, а `sr-only` берите в своей разметке.

## См. также

- [Метод отображения элемента](/ru/utilities/layout/display/)
- [Видимость элемента](/ru/utilities/layout/visibility/)
- [Фокус](/ru/guide/size-and-type/focus/)
