---
title: "Пагинация"
description: "Делит длинный список на страницы и даёт перейти к соседней или нужной странице."
profile: reference
---

# Пагинация

Пагинация делит длинный список результатов на страницы, показывает текущую и
даёт перейти к соседней или конкретной странице. Ставьте её сразу после
списка, которым она управляет.

## Пример

:::example {id="components/pagination/overview" label="Пагинация со счётчиком"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`<nav class="sf-pagination">` → `sf-pagination-main` → счётчик
`sf-pagination-total` и `sf-pagination-container` → список
`sf-pagination-list` → пункты `sf-pagination-item`.

- Корень — `<nav>` с `aria-label`. Строки и группы раскладывают утилиты
  `flex`, `items-cross-center`, `content-main-between`: CSS частей задаёт
  только отступы и цвета.
- Список `<ol class="sf-pagination-list">` с утилитами
  `list-none m-0 p-0`; в каждом пункте — одна страница или стрелка.
- Номер страницы — `sf-page-number` с формой `sf-page-number--square` или
  `sf-page-number--circle` и утилитами `flex items-cross-center
  content-main-center`. Он размером с элемент управления первой ступени.
- Стрелки «назад» и «вперёд» — кнопки с иконкой `sf-icon-button` и классом
  `sf-pagination-direction`: он разворачивает стрелку при письме справа
  налево.
- Скрипта у компонента нет: номера, адреса и переходы задаёт приложение или
  Smart-компонент.
- Остальные части из таблицы классов — выбор числа строк
  (`sf-pagination-count`), поле номера страницы, отметка выбранных строк —
  собирает Smart-пагинация.

На узком экране строка счётчика и строка номеров встают друг под другом, а
номера выравниваются по центру. В узкой колонке на широком экране — например,
в боковой панели — строка `sf-pagination-main` и группа
`sf-pagination-container` переносятся сами: часть, которой не хватает места,
начинает новую строку в своём размере, и элементы управления не наезжают друг
на друга.

## Варианты

### Форма номера

`sf-page-number--square` даёт номеру скругление элементов управления,
`sf-page-number--circle` — круг. В одном блоке держите одну форму; квадрат
подходит таблицам и плотным спискам, круг — карточкам и галереям.

:::example {id="components/pagination/shapes" label="Квадратные и круглые номера"}
:::

### Ссылки на страницы

Когда у каждой страницы свой адрес, номера и стрелки — ссылки `<a href>`:
так страницу можно открыть в новой вкладке и скопировать её адрес, а
переход работает без JavaScript. Кнопки берите, когда список переключает
скрипт без смены адреса.

:::example {id="components/pagination/links" label="Номера-ссылки"}
:::

### Длинный диапазон

В длинном диапазоне показывайте первую и последнюю страницы, текущую и её
соседей, а пропуски — многоточием `sf-page-number--ellipsis`. Многоточие —
текст, не действие: оно не получает фокус, и его пункт скрыт через
`aria-hidden="true"`.

:::example {id="components/pagination/long-range" label="Страницы с пропусками"}
:::

### Поле номера страницы

Для длинных списков, как в табличном представлении, номер страницы вводится в поле между стрелками: человек видит, где он, и переходит на любую страницу, набрав номер. Поле — `sf-pagination-page-field` с полем ввода `sf-input` и классом `sf-pagination-page-input`; стрелки «в начало», «назад», «вперёд», «в конец» — кнопки-иконки с классом `sf-pagination-direction`. Переход по введённому номеру выполняет ваш код. Smart-компонент [`<sf-pagination>`](/ru/smart-components/navigation/pagination/) собирает эту раскладку сам: считает число страниц по `total` и `page-size`, переходит по `Enter` и сообщает о переходе событием `sf-page-change`.

:::example {id="components/pagination/page-field" label="Поле номера страницы"}
:::

## Состояния

Наведение подсвечивает номер цветом `--sf-surface-container`; это состояние
компонент показывает сам.

### Текущая

Класс `selected` выделяет текущую страницу рамкой и фоном основного цвета.
Добавьте ей `aria-current="page"`.

:::example {id="components/pagination/state-current" label="Обычная и текущая страница"}
:::

### Недоступна

Класс `disabled` приглушает номер; кнопке ставьте и атрибут `disabled`,
чтобы она не получала фокус. Недоступную стрелку на первой или последней
странице выключайте атрибутом `disabled`, как в основном примере.

:::example {id="components/pagination/state-disabled" label="Недоступный номер"}
:::

### Фокус

Номер в фокусе получает кольцо по `:focus-visible`. В примере фокус показан
классом `focus-visible`, который CSS компонента читает наравне с
псевдоклассом.

:::example {id="components/pagination/state-focus" label="Номер в фокусе"}
:::

## Доступность

- Корень — `<nav>` с `aria-label`, например «Страницы результатов»; номера
  — список.
- Текущая страница — `selected` и `aria-current="page"`.
- Номерам дайте `aria-label` вида «Страница 4», стрелкам — «Предыдущая
  страница» и «Следующая страница»; иконки — `aria-hidden="true"`.
- Многоточие скрыто от экранного диктора и не входит в порядок Tab.
- Номера и стрелки срабатывают по Enter, кнопки — и по пробелу; кольцо
  фокуса рисует компонент.

## Классы

**`sf-pagination`**

| Что | Классы |
|:---|:---|
| Блок | `sf-pagination` |
| Части | `sf-pagination-actions`, `sf-pagination-actions-count`, `sf-pagination-actions-separator`, `sf-pagination-bottom`, `sf-pagination-container`, `sf-pagination-count`, `sf-pagination-direction`, `sf-pagination-item`, `sf-pagination-left`, `sf-pagination-list`, `sf-pagination-main`, `sf-pagination-marked`, `sf-pagination-marked-text`, `sf-pagination-more`, `sf-pagination-page-field`, `sf-pagination-page-input`, `sf-pagination-pages-label`, `sf-pagination-top`, `sf-pagination-total` |
| Размеры | `sf-pagination--size-1/2` |

**`sf-page-number`**

| Что | Классы |
|:---|:---|
| Блок | `sf-page-number` |
| Модификаторы | `sf-page-number--circle`, `sf-page-number--ellipsis`, `sf-page-number--square` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-pagination`, `.sf-page-number`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-pagination--block-size` | `calc(2 * var(--sf-pagination--padding-block) + var(--sf-pagination--control-height) + var(--sf-px))` | `min-height`, `min-block-size` |
| `--sf-pagination--control-height` | `var(--sf-ui-1--control-height)` | `--sf-pagination--block-size` |
| `--sf-pagination--padding-block` | `var(--sf-space-1)` | `--sf-pagination--block-size`, `--sf-pagination-main--padding-bottom`, `--sf-pagination-main--padding-top` |
| `--sf-pagination-actions--background-color` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-elevation-2--surface)` | `background-color` |
| `--sf-pagination-actions--border-color` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-outline-variant)` | `border-top`, `border-block-start` |
| `--sf-pagination-actions--gap` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-space-1)` | `gap` |
| `--sf-pagination-actions--padding-block` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-space-1)` | `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-pagination-actions--padding-inline` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-space-2)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-pagination-actions--radius` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-radius--surface)` | `border-radius` |
| `--sf-pagination-block-size-1` | не задана; задают модификаторы, например `:root`: `calc(2 * var(--sf-space-1) + var(--sf-ui-1--control-height) + var(--sf-px))` | — |
| `--sf-pagination-bottom--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-bottom`: `transparent` | `background-color` |
| `--sf-pagination-bottom--gap` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-bottom`: `var(--sf-space-1/2)` | `gap` |
| `--sf-pagination-bottom--padding-bottom` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-bottom`: `var(--sf-space-1)` | `padding-bottom` |
| `--sf-pagination-bottom--padding-top` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-bottom`: `var(--sf-space-1)` | `padding-top` |
| `--sf-pagination-container--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-container`: `transparent` | `background-color` |
| `--sf-pagination-container--font-size` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-pagination-container--gap` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-container`: `var(--sf-pagination-gap, var(--sf-space-1/3))` | `gap` |
| `--sf-pagination-container--line-height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-pagination-count--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-count`: `transparent` | `background-color` |
| `--sf-pagination-count--font-size` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-pagination-count--gap` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-count`: `var(--sf-space-1/3)` | `gap` |
| `--sf-pagination-count--line-height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-pagination-left--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-left`: `transparent` | `background-color` |
| `--sf-pagination-left--gap` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-left`: `var(--sf-space-1)` | `gap` |
| `--sf-pagination-main--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `transparent` | `background-color` |
| `--sf-pagination-main--border-bottom-width` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `var(--sf-px)` | `border-bottom-width` |
| `--sf-pagination-main--border-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `var(--sf-outline-variant)` | `border-color` |
| `--sf-pagination-main--border-style` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `solid` | `border-style` |
| `--sf-pagination-main--padding-bottom` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `var(--sf-pagination--padding-block)` | `padding-bottom` |
| `--sf-pagination-main--padding-top` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `var(--sf-pagination--padding-block)` | `padding-top` |
| `--sf-pagination-marked--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-marked`: `transparent` | `background-color` |
| `--sf-pagination-marked--gap` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-marked`: `var(--sf-space-1/3)` | `gap` |
| `--sf-pagination-marked-text--color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-marked-text:nth-child(1)`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-pagination-marked-text--font-family` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-marked-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-pagination-marked-text--font-size` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-pagination-marked-text--font-weight` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-marked-text:nth-child(1)`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-pagination-marked-text--line-height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-pagination-page-input--digits` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-page-field`: `1` | `width`, `inline-size` |
| `--sf-pagination-top--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-top`: `transparent` | `background-color` |
| `--sf-pagination-top--border-bottom-width` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-top`: `var(--sf-px)` | `border-bottom-width` |
| `--sf-pagination-top--border-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-top`: `var(--sf-pagination-divider-color, var(--sf-outline-variant))` | `border-color` |
| `--sf-pagination-top--border-style` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-top`: `solid` | `border-style` |
| `--sf-pagination-top--padding-bottom` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-top`: `calc(var(--sf-space-3) - var(--sf-space-1))` | `padding-bottom` |
| `--sf-pagination-total--background-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-total`: `transparent` | `background-color` |
| `--sf-pagination-total--font-size` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-pagination-total--gap` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-total`: `var(--sf-space-1/3)` | `gap` |
| `--sf-pagination-total--line-height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-page-number--background-color` | `var(--sf-pagination-page-background-color, var(--sf-surface-0))` | `background-color` |
| `--sf-page-number--border-bottom-width` | `var(--sf-px)` | `border-bottom-width`, `border-block-end-width` |
| `--sf-page-number--border-color` | не задана; задают модификаторы, например `.sf-page-number:not(:disabled):not(.disabled):active`: `var(--sf-primary-active)` | `border-color` |
| `--sf-page-number--border-end-end-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-end-end-radius` |
| `--sf-page-number--border-end-start-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-end-start-radius` |
| `--sf-page-number--border-inline-end-width` | `var(--sf-px)` | `border-inline-end-width` |
| `--sf-page-number--border-inline-start-width` | `var(--sf-px)` | `border-inline-start-width` |
| `--sf-page-number--border-start-end-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-start-end-radius` |
| `--sf-page-number--border-start-start-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-start-start-radius` |
| `--sf-page-number--border-style` | не задана; задают модификаторы, например `.sf-page-number:not(:disabled):not(.disabled):active`: `solid` | `border-style` |
| `--sf-page-number--border-top-width` | `var(--sf-px)` | `border-top-width`, `border-block-start-width` |
| `--sf-page-number--border-width` | не задана; задают модификаторы, например `.sf-page-number:not(:disabled):not(.disabled):active`: `var(--sf-px)` | `border-width` |
| `--sf-page-number--color` | `var(--sf-pagination-page-color, var(--sf-on-surface-variant))` | `color` |
| `--sf-page-number--font-size` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-page-number--font-weight` | не задана; задают модификаторы, например `.sf-page-number:not(:disabled):not(.disabled):active`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-page-number--height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-ui-1/2--control-height)` | `height`, `block-size` |
| `--sf-page-number--line-height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-page-number--width` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-ui-1/2--control-height)` | `width`, `inline-size` |

## См. также

- [Пагинация — Smart-компонент](/ru/smart-components/navigation/pagination/)
- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
