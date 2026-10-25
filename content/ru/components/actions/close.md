---
title: "Закрытие"
description: "Рисует знак закрытия для кнопки, которая закрывает окно, панель или уведомление."
profile: reference
---

# Закрытие

`sf-close` рисует знак закрытия — крестик из маски, без иконочного шрифта.
Сам знак декоративный: действие выполняет нативная кнопка
[`sf-icon-button`](/ru/components/actions/icon-buttons/) с модификатором
`sf-icon-button--close`. Берите его для кнопки, которая закрывает окно,
панель, уведомление или тег.

## Пример

:::example {id="components/close/overview" label="Кнопка закрытия"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`button.sf-icon-button.sf-icon-button--close` → `span.sf-close` →
`span.sf-close-icon`.

- Кнопка — нативный `<button type="button">` с классами кнопки с иконкой:
  вид, схема, размер и `sf-icon-button--close`, который окрашивает знак
  цветом схемы.
- `sf-close` с `aria-hidden="true"` — оболочка знака с отступами;
  `sf-close-icon` внутри неё рисует крестик.
- Размер знака `sf-close--size-*` совпадает с размером кнопки
  `sf-icon-button--size-*`.
- Закрытие и возврат фокуса выполняет компонент-владелец: модальное окно,
  уведомление или ваш скрипт. У компонента `sf-close` нет своего
  JavaScript.

## Варианты

### Размер

Кнопка закрытия берёт размеры кнопки с иконкой `1/3`, `1/2`, `1`, `2` и `3`.
Выбирайте размер по соседним элементам управления: в заголовке окна — как у
кнопок окна, в теге — меньше.

:::example {id="components/close/sizes" label="Размеры кнопки закрытия"}
:::

### Вид

Вид кнопки задают классы кнопки с иконкой. Чаще всего закрытие — лёгкое
действие `sf-icon-button--link`; `tonal`, `outline` и `default` нужны, когда
кнопке нужна видимая граница или заливка, `surface` — поверх изображения или
цветного фона.

:::example {id="components/close/appearance" label="Виды кнопки закрытия"}
:::

### Размер знака

Сам знак поддерживает шкалу от `1/4` до `7`. Крупные знаки нужны особой
композиции, например большой области просмотра; область нажатия всё равно
задаёт кнопка.

:::example {id="components/close/glyph-sizes" label="Размеры знака закрытия"}
:::

## Состояния

Наведение и нажатие кнопка показывает сама.

### Недоступна

Нативный `disabled` приглушает кнопку и знак: кнопка не получает фокус и не
срабатывает.

:::example {id="components/close/state-disabled" label="Доступная и недоступные кнопки закрытия"}
:::

### Фокус

При переходе клавишей Tab кнопка получает кольцо фокуса по `:focus-visible`.
В примере фокус показан классом `focus-visible`, который CSS читает наравне с
`:focus-visible`.

:::example {id="components/close/state-focus" label="Кнопки закрытия в фокусе"}
:::

## Доступность

- Кнопка получает имя через `aria-label` и называет, что закрывается:
  «Закрыть окно», «Закрыть уведомление». Если на странице несколько таких
  кнопок, имя отличает их друг от друга.
- Знак скрыт от вспомогательных технологий (`aria-hidden="true"`): фокус,
  состояние и действие принадлежат кнопке.
- После закрытия верните фокус на элемент, который открыл окно или панель.
- В режиме высокой контрастности знак рисуется системным цветом текста, у
  недоступной кнопки — цветом `GrayText`.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-close` |
| Части | `sf-close-icon` |
| Размеры | `sf-close--size-1`, `sf-close--size-1/2`, `sf-close--size-1/3`, `sf-close--size-1/4`, `sf-close--size-2`, `sf-close--size-3`, `sf-close--size-4`, `sf-close--size-5`, `sf-close--size-6`, `sf-close--size-7` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-close`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-close--padding-bottom` | не задана; задают модификаторы, например `.sf-close--size-1`: `var(--sf-a4)` | `padding-bottom` |
| `--sf-close--padding-inline-end` | не задана; задают модификаторы, например `.sf-close--size-1`: `var(--sf-a4)` | `padding-inline-end` |
| `--sf-close--padding-inline-start` | не задана; задают модификаторы, например `.sf-close--size-1`: `var(--sf-a4)` | `padding-inline-start` |
| `--sf-close--padding-top` | не задана; задают модификаторы, например `.sf-close--size-1`: `var(--sf-a4)` | `padding-top` |
| `--sf-close-icon---webkit-mask-image` | не задана; задают модификаторы, например `.sf-close.sf-close--size-1 .sf-close-icon`: `url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M15.998%201.41504L9.41309%208L15.998%2014.5859L14.584%2016.001L7.99902%209.41504L1.41406%2016.001L0%2014.5859L6.58398%208L0%201.41504L1.41406%200.000976562L7.99805%206.58594L14.584%200L15.998%201.41504Z%22%20fill%3D%22%2376777C%22%2F%3E%0A%3C%2Fsvg%3E%0A")` | — |
| `--sf-close-icon---webkit-mask-repeat` | не задана; задают модификаторы, например `.sf-close .sf-close-icon`: `no-repeat` | — |
| `--sf-close-icon---webkit-mask-size` | не задана; задают модификаторы, например `.sf-close .sf-close-icon`: `contain` | — |
| `--sf-close-icon--background-color` | не задана; задают модификаторы, например `.sf-close .sf-close-icon`: `var(--sf-on-surface-variant)` | `background-color` |
| `--sf-close-icon--font-size` | не задана; задают модификаторы, например `.sf-close.sf-close--size-1 .sf-close-icon`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-close-icon--height` | не задана; задают модификаторы, например `.sf-close.sf-close--size-1 .sf-close-icon`: `var(--sf-text-size-1)` | `height` |
| `--sf-close-icon--mask-image` | не задана; задают модификаторы, например `.sf-close.sf-close--size-1 .sf-close-icon`: `url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M15.998%201.41504L9.41309%208L15.998%2014.5859L14.584%2016.001L7.99902%209.41504L1.41406%2016.001L0%2014.5859L6.58398%208L0%201.41504L1.41406%200.000976562L7.99805%206.58594L14.584%200L15.998%201.41504Z%22%20fill%3D%22%2376777C%22%2F%3E%0A%3C%2Fsvg%3E%0A")` | `mask-image` |
| `--sf-close-icon--mask-repeat` | не задана; задают модификаторы, например `.sf-close .sf-close-icon`: `no-repeat` | `mask-repeat` |
| `--sf-close-icon--mask-size` | не задана; задают модификаторы, например `.sf-close .sf-close-icon`: `contain` | `mask-size` |
| `--sf-close-icon--width` | не задана; задают модификаторы, например `.sf-close.sf-close--size-1 .sf-close-icon`: `var(--sf-text-size-1)` | `width` |

## См. также

- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
- [Закрытие — Smart-компонент](/ru/smart-components/actions/close/)
