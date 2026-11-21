---
title: "Пагинация"
description: "Делит длинный список на страницы и даёт перейти к соседней или нужной странице."
profile: reference
---

# Пагинация

:badge[sf-pagination]{variant=outline scheme=on-surface size=1/2} :badge[1.7.0]{variant=outline scheme=on-surface size=1/2}

Пагинация делит длинный список результатов на страницы, показывает текущую и
даёт перейти к соседней или конкретной странице. Ставьте её сразу после
списка, которым она управляет.

Классы рисуют строку номеров и поле номера страницы. Готовые виды целиком —
у [смарт-пагинации](/ru/smart/navigation/pagination/) (атрибут
`appearance`):

| Вид | Как выглядит | Где |
|:---|:---|:---|
| `field` | `⇤ ‹ [3] из 12 › ⇥` | плотная таблица |
| `numbers` | `‹ 1 … 4 [5] 6 … 12 ›` | сайт, каталог, результаты поиска |
| `arrows` | `‹ Назад · Страница 3 · Далее ›` | число страниц неизвестно или примерно |
| `cursor` | `В начало · Дальше ›` | список без номеров и без последней страницы |
| `more` | `Показать ещё 20` | лента, выбор в окне |

Там же счётчик «41–60 из 240» и выбор «По 20 ▾».

## Пример

:::example {id="components/pagination/overview" label="Страницы под списком и диапазон рядом"}
:::

## Разметка

Минимальную разметку показывает пример выше: `<nav class="sf-pagination">` →
список `sf-pagination-list` → пункты `sf-pagination-item`.

- Корень — `<nav>` с `aria-label`. Пагинация — только переход по
  страницам: диапазон «41–60 из 96» и выбор «По 20 ▾» относятся к списку и
  стоят рядом простой строкой, не внутри `<nav>`.
- Список `<ol class="sf-pagination-list">` с утилитами
  `list-none m-0 p-0`; в каждом пункте — одна страница или стрелка.
  Элементы строки стоят в 8 px друг от друга (в компактной плотности — в 4).
- Номер страницы — `sf-page-number` с утилитами `flex items-cross-center
  content-main-center`. Он размером с элемент управления первой ступени:
  квадрат или шире, если цифр в номере больше.
- Стрелки «назад» и «вперёд» — кнопки с иконкой `sf-icon-button` вида
  `sf-icon-button--ghost` со схемой `sf-icon-button--on-surface` и классом
  `sf-pagination-direction`: он разворачивает стрелку при письме справа
  налево.
- Скрипта у компонента нет: номера, адреса и переходы задаёт приложение или
  смарт-компонент.
- Остальные части из таблицы классов — выбор числа строк
  (`sf-pagination-count`), отметка выбранных строк, диапазон — собирает
  смарт-пагинация.

В узкой колонке — на телефоне или в боковой панели — номера сужаются до
своего числа, а строка остаётся одной строкой.

Линия под строкой закрывает список, который стоит прямо на странице. Внутри
места — карточки, серой подложки, блока `bg-surface-*`, пристёгнутой
панели, всплывающего окна — список закрывает край или фон самого места,
поэтому линия там прозрачна и не рисует второй черты в пикселе над рамкой.
Пиксель остаётся, и высота строки не меняется. Цвет этой линии и линии строки
«Показать ещё» задаёт публичная переменная `--sf-pagination-divider-color`;
своя рамка страницы, которая не является местом, ставит её в `transparent`:

```css
.list-box { border: var(--sf-px) solid var(--sf-outline-variant); --sf-pagination-divider-color: transparent; }
```

## Варианты

### Размер

`sf-pagination--size-1/2` • [справочник](#классы)

Без модификатора номера и стрелки — элементы управления первой ступени
(40 px). `sf-pagination--size-1/2` уменьшает всю строку до ступени 1/2
(32 px, иконка 20): так пагинация стоит под плотной таблицей. Стрелки
пишите `sf-icon-button--size-1` — модификатор строки уменьшит и их.

:::example {id="components/pagination/sizes" label="Размеры 1 и 1/2"}
:::

### Ссылки на страницы

Когда у каждой страницы свой адрес, номера и стрелки — ссылки `<a href>`:
так страницу можно открыть в новой вкладке и скопировать её адрес, а
переход работает без JavaScript. Стрелки — те же кнопки-иконки, но ссылками
с `rel="prev"` и `rel="next"`; на первой и последней странице у стрелки нет
адреса, и она получает `aria-disabled="true"`. Кнопки берите, когда список переключает
скрипт без смены адреса. В примере нажатие не уходит со страницы
документации: скрипт примера только переносит текущую страницу.

:::example {id="components/pagination/links" label="Номера-ссылки"}
:::

### Длинный диапазон

`sf-page-number--ellipsis` • [справочник](#классы)

В длинном диапазоне показывайте первую и последнюю страницы, текущую и её
соседей, а пропуски — многоточием `sf-page-number--ellipsis`. Многоточие —
текст, не действие: оно не получает фокус, и его пункт скрыт через
`aria-hidden="true"`.

:::example {id="components/pagination/long-range" label="Страницы с пропусками"}
:::

### Поле номера страницы

Для длинных списков, как в табличном представлении, номер страницы вводится в поле между стрелками: человек видит, где он, и переходит на любую страницу, набрав номер. Поле — `sf-pagination-page-field` с полем ввода `sf-input` и классом `sf-pagination-page-input`, после поля — тихий текст `sf-pagination-of` «из 12», если число страниц известно точно; стрелки «в начало», «назад», «вперёд», «в конец» — кнопки-иконки с классом `sf-pagination-direction`. Переход по введённому номеру выполняет ваш код. Смарт-компонент [`<sf-pagination>`](/ru/smart/navigation/pagination/) собирает эту раскладку сам: считает число страниц по `total` и `page-size`, переходит по `Enter` и сообщает о переходе событием `sf-page-change`.

:::example {id="components/pagination/page-field" label="Поле номера страницы"}
:::

## Состояния

Номер выглядит как прозрачная кнопка: в покое без плашки, под указателем
и при нажатии — заливки кнопки. Эти состояния компонент показывает сам.

### Текущая

Класс `selected` (или `aria-current="page"`) выделяет текущую страницу
мягкой заливкой основного цвета `--sf-primary-container`, без рамки.
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

## Применение

### Прежние имена

`sf-page-number--circle` — прежнее имя: круга больше нет, класс рисует
квадрат до 2027-01-01 и отмечается в `SF.deprecations`. Класс
`sf-page-number--square` можно оставить или убрать — квадрат единственная
форма. Счётчик «Найдено: …» внутри `<nav>` (`sf-pagination-total`) замените
диапазоном рядом со строкой.

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
| Части | `sf-pagination-actions`, `sf-pagination-actions-count`, `sf-pagination-actions-separator`, `sf-pagination-bottom`, `sf-pagination-container`, `sf-pagination-count`, `sf-pagination-gap`, `sf-pagination-item`, `sf-pagination-item-field`, `sf-pagination-left`, `sf-pagination-link`, `sf-pagination-list`, `sf-pagination-main`, `sf-pagination-marked`, `sf-pagination-marked-text`, `sf-pagination-more`, `sf-pagination-of`, `sf-pagination-page`, `sf-pagination-page-field`, `sf-pagination-page-input`, `sf-pagination-pages-label`, `sf-pagination-place`, `sf-pagination-progress`, `sf-pagination-range`, `sf-pagination-shown`, `sf-pagination-slot`, `sf-pagination-top`, `sf-pagination-total` |
| Модификаторы | `sf-pagination--footer`, `sf-pagination--more` |
| Размеры | `sf-pagination--size-1/2` |

**`sf-page-number`**

| Что | Классы |
|:---|:---|
| Блок | `sf-page-number` |
| Модификаторы | `sf-page-number--ellipsis`, `sf-page-number--square` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид смарт-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-pagination`, `.sf-page-number`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-pagination--block-size` | `calc(2 * var(--sf-pagination--padding-block) + var(--sf-pagination--control-height) + var(--sf-px))` | `min-height`, `min-block-size` |
| `--sf-pagination--control-height` | `var(--sf-ui-1--control-height)` | `--sf-pagination--block-size`, `flex`, `min-width`, `min-inline-size`, `--sf-page-number--width`, `height`, `block-size` |
| `--sf-pagination--padding-block` | `var(--sf-space-1)` | `--sf-pagination--block-size`, `--sf-pagination-main--padding-bottom`, `--sf-pagination-main--padding-top` |
| `--sf-pagination--place-x` | `var(--sf-ui-1--text-space-x)` | `min-width`, `min-inline-size`, `--sf-button--padding-inline-start`, `--sf-button--padding-inline-end`, `--sf-page-number--space-x` |
| `--sf-pagination--space-x` | `var(--sf-ui-1--space-x)` | `flex` |
| `--sf-pagination--text-height` | `var(--sf-text-height-1)` | `line-height` |
| `--sf-pagination--text-size` | `var(--sf-text-size-1)` | `font-size` |
| `--sf-pagination-actions--background-color` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-surface-raised)` | `background-color` |
| `--sf-pagination-actions--border-color` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-outline-variant)` | `border-top-color`, `border-block-start-color` |
| `--sf-pagination-actions--gap` | не задана; задают модификаторы, например `.sf-pagination-actions`: `var(--sf-gap--groups)` | `gap` |
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
| `--sf-pagination-main--border-color` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `var(--sf-pagination-divider-color, var(--sf-pagination-main--line-on-place, var(--sf-outline-variant)))` | `border-color` |
| `--sf-pagination-main--border-style` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `solid` | `border-style` |
| `--sf-pagination-main--line-on-place` | не задана; задают модификаторы, например `.sf-pagination .sf-pagination-main`: `color-mix(in srgb, transparent, var(--sf-place--ink-variant) 0%)` | `--sf-pagination-main--border-color` |
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
| `--sf-page-number--background-color` | `var(--sf-pagination-page-background-color, transparent)` | `background-color` |
| `--sf-page-number--border-end-end-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-end-end-radius` |
| `--sf-page-number--border-end-start-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-end-start-radius` |
| `--sf-page-number--border-start-end-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-start-end-radius` |
| `--sf-page-number--border-start-start-radius` | не задана; задают модификаторы, например `.sf-page-number--square`: `var(--sf-pagination-page-radius, var(--sf-radius--ui))` | `border-start-start-radius` |
| `--sf-page-number--border-width` | не задана; задают модификаторы, например `.sf-page-number--ellipsis`: `0` | `border-width` |
| `--sf-page-number--color` | `var(--sf-pagination-page-color, var(--sf-on-surface))` | `color` |
| `--sf-page-number--font-size` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-page-number--font-weight` | не задана; задают модификаторы, например `.sf-page-number--ellipsis`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-page-number--height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-ui-1/2--control-height)` | `height`, `block-size` |
| `--sf-page-number--line-height` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-page-number--space-x` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-ui-1/2--space-x)` | `padding-left`, `padding-right`, `padding-inline`, `min-width`, `min-inline-size` |
| `--sf-page-number--width` | не задана; задают модификаторы, например `.sf-pagination.sf-pagination--size-1/2`: `var(--sf-ui-1/2--control-height)` | `min-width`, `min-inline-size` |

## См. также

- [Пагинация — смарт-компонент](/ru/smart/navigation/pagination/)
- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
