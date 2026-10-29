---
title: "Бейджи"
description: "Показывает рядом с объектом короткий статус, категорию или счётчик."
profile: reference
---

# Бейджи

Бейдж показывает короткий статус, категорию или счётчик рядом с объектом. Он
дополняет основное содержимое и не заменяет кнопку, фильтр или
[уведомление](/ru/components/feedback/alerts/); для статуса без текста
подходит [точка состояния](/ru/components/feedback/dot/).

## Пример

:::example {id="components/badges/basic" label="Бейдж статуса"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-badge` → `sf-badge-text-container` → `sf-badge-text`; иконка — `sf-icon`
в `sf-badge-icon-container`.

- На блоке `sf-badge` — один класс вида, один класс цвета и размер. Без
  классов вида и цвета бейдж залит вспомогательным цветом текста, без размера
  берёт ступень `1/3`.
- Текст — в `sf-badge-text`: он не переносится и обрезается многоточием, если
  бейджу не хватает места.
- Иконка необязательна и ставится до или после текста.

## Варианты

### Вид

Вид задаёт выраженность: `sf-badge--main` — сплошная заливка, самый заметный
акцент; `sf-badge--tonal` — спокойная тональная заливка; `sf-badge--outline` —
только граница. Вид меняет вес бейджа, а не смысл.

:::example {id="components/badges/types" label="Виды бейджа"}
:::

### Цвет

Цвет берётся из ролей темы: `sf-badge--neutral`, `sf-badge--primary`,
`sf-badge--secondary`, `sf-badge--tertiary`, `sf-badge--on-surface` и статусы
`sf-badge--info`, `sf-badge--success`, `sf-badge--warning`, `sf-badge--error`.
Статус выбирайте по смыслу, а не по желаемому цвету. У `on-surface` нет
тонального вида. `sf-badge--danger` — другое имя `error`.

:::example {id="components/badges/overview" label="Цвета бейджа в каждом виде"}
:::

### Размер

Три ступени — `sf-badge--size-1/3`, `sf-badge--size-1/2` и `sf-badge--size-1`
— меняют кегль, отступы и иконку вместе. Берите ступень окружающих элементов
управления.

:::example {id="components/badges/sizes" label="Размеры бейджа"}
:::

### В строке текста

Классы `sf-badge--line-1/2`, `sf-badge--line-1` и `sf-badge--line-2` ставят
бейдж в строку текста той же ступени: бейдж получает высоту строки, а надпись —
кегль на ступень меньше и не добавляет вертикальных отступов. Так строка
таблицы или ряд полей сохраняет свою высоту.

:::example {id="components/badges/line" label="Бейдж в строке текста"}
:::

### Иконки

Иконка в `sf-badge-icon-container` стоит в логическом начале или конце бейджа
и берёт цвет и размер бейджа. Бейдж из одной иконки и сокращённый счётчик
получают полный текст в `sr-only`.

:::example {id="components/badges/icons" label="Бейджи с иконками"}
:::

### Бейдж на якоре

Счётчик или точку ставят внутрь якоря, и Framework сам ставит их на место:
утилиты положения не нужны. Якорь — аватар `sf-avatar`, кнопка-иконка
`sf-icon-button` или обёртка `sf-badge-anchor` вокруг иконки или любого
другого элемента. Бейдж — прямой потомок якоря:
`<span class="sf-badge sf-badge--anchored" data-count="3"></span>`.

Центр бейджа лежит в верхнем конце якоря (справа, при письме справа налево —
слева). У круглого якоря это точка окружности под 45°, у скруглённого — та же
точка дуги угла, у квадратного — сам угол. Бейдж перекрывает якорь и выходит
за него не больше чем на половину своего размера. Индикатор статуса аватара
остаётся в нижнем конце.

:::example {id="components/badges/anchored" label="Счётчик и точка на кнопках-иконках"}
:::

Иконку оборачивают в `sf-badge-anchor`: текст глифа — его лигатура, поэтому
бейдж не ставят внутрь `sf-icon`. Шаг обёртки — `sf-badge-anchor--size-1/3`,
`--size-1/2`, `--size-1`, `--size-2` или `--size-3` (без класса — `1`); форма —
`sf-badge-anchor--square` (по умолчанию), `--rounded` (радиус элементов
управления) или `--round`. Так же обёртка служит якорем для элемента пакета.

:::example {id="components/badges/anchor-wrapper" label="Обёртка sf-badge-anchor вокруг иконки"}
:::

| Атрибут | Что делает |
|:---|:---|
| `data-count` | Целое число. `0`, пустое или отрицательное значение прячет бейдж. |
| `data-dot` | Точка без числа: есть новое. Показывается, когда `data-count` не задан. |
| `data-cap` | Порог, по умолчанию `99`: число больше порога показывается как `99+`. |
| `data-label` | Свои слова. Для точки — её текстовый эквивалент, для счёта — формы множественного числа через `\|` с `{count}` на месте числа: `{count} заявка\|{count} заявки\|{count} заявок`. |

Скрипт компонента `SF.AnchoredBadge` следит за такими бейджами сам, в том числе
за добавленными и изменёнными позже: странице достаточно менять атрибуты.
`SF.AnchoredBadge.init(scope)` обрабатывает поддерево сразу, `update(badge)` —
один бейдж. На странице работает один такой скрипт, сколько бы элементов его ни
подключали: имя владельца пишется, только когда меняется, и фраза не
дописывается второй раз.

Размер бейджа задаёт шаг якоря:

| Шаг якоря | Счётчик | Точка | Кольцо |
|:---|:---|:---|:---|
| `1/3` | рисуется точкой | 6px | 1px |
| `1/2` | рисуется точкой | 8px | 2px |
| `1` | высота 16px | 10px | 2px |
| `2` | высота 20px | 12px | 2px |
| `3` | высота 24px | 14px | 2px |

Значения — при корневом размере шрифта 16px. Шаг кнопки-иконки и обёртки —
её размер `--size-N`. Аватары `1/4` и `1/3` и аватары по строке текста
`--line-1/2` и `--line-1` получают шаг `1/3`, аватар `1/2` и `--line-2` — шаг
`1/2`. Число на якоре `1/3` и `1/2` рисуется точкой и остаётся в доступном
имени и во всплывающей подсказке. Цифры табличные: один знак — круг, два и три
— бейдж растёт вширь.

По умолчанию счётчик и точка окрашены ролью ошибки — заливка `--sf-error`, цифры
`--sf-on-error`, тот же цвет, что у `sf-badge--main sf-badge--error`, в светлой
и тёмной теме. Другой цвет задают обычные классы цвета бейджа со сплошной
заливкой: `sf-badge--main` и роль — `sf-badge--primary`, `sf-badge--success`,
`sf-badge--neutral` и другие. Тональный вид полупрозрачен и на якоре
теряется, поэтому для счётчика берите `sf-badge--main`.

:::example {id="components/badges/anchored-colours" label="Цвет бейджа на якоре: по умолчанию и с классами цвета"}
:::

От якоря бейдж отделяет кольцо
цвета поверхности под якорем. Цвет кольца — `--sf-badge-ring-color`, если её
задала страница; иначе цвет поднятой поверхности Framework — выпадающего
списка, контекстного меню, подменю, панели админ-меню, шторки, поповера,
модального окна или тоста; иначе поверхность страницы `--sf-surface-0`.
Кольцо верно в светлой и тёмной теме.

Смарт-элементы [Аватар](/ru/smart-components/content/avatar/),
[Иконки](/ru/smart-components/content/icons/) и
[Кнопки с иконкой](/ru/smart-components/actions/icon-buttons/) рисуют такой бейдж
по входам `badge-count`, `badge-dot`, `badge-cap` и `badge-label`. В
компактном [меню](/ru/components/navigation/menu/#счётчик-и-компактное-меню)
счётчик строки переходит на её иконку.

## Доступность

- Бейдж — неинтерактивный текст: он не получает фокус и не имеет роли.
- Смысл передаёт текст; цвет его только поддерживает.
- Декоративную иконку скрывайте через `aria-hidden="true"`. У бейджа из одной
  иконки или сокращения вроде «99+» полный текст лежит в `sr-only`, а видимая
  часть скрыта от экранного диктора.
- Счётчику нужен контекст: «3 новых сообщения», а не «3». Задайте его соседним
  текстом или через `sr-only`.
- Бейдж на якоре называет себя сам: цифры и точка скрыты от экранного
  диктора, а фраза добавляется к `aria-label` якоря или ссылки и кнопки вокруг:
  «Анна Белова, 3 непрочитанных». Точка читается «есть новое», на английской
  странице — "3 unread" и "new". В имени всегда точное число, и при `99+`.
- Если значение меняется на глазах у пользователя, объявление задаёт
  окружающая область с `aria-live` или `role="status"`.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-badge` |
| Части | `sf-badge-anchor`, `sf-badge-anchor--round`, `sf-badge-anchor--rounded`, `sf-badge-anchor--size-1`, `sf-badge-anchor--size-1/2`, `sf-badge-anchor--size-1/3`, `sf-badge-anchor--size-2`, `sf-badge-anchor--size-3`, `sf-badge-anchor--square`, `sf-badge-anchored-text`, `sf-badge-icon-container`, `sf-badge-text`, `sf-badge-text-container` |
| Модификаторы | `sf-badge--anchored`, `sf-badge--dot`, `sf-badge--error`, `sf-badge--info`, `sf-badge--line-1`, `sf-badge--line-1/2`, `sf-badge--line-2`, `sf-badge--main`, `sf-badge--neutral`, `sf-badge--on-surface`, `sf-badge--outline`, `sf-badge--primary`, `sf-badge--secondary`, `sf-badge--success`, `sf-badge--tertiary`, `sf-badge--tonal`, `sf-badge--warning` |
| Размеры | `sf-badge--size-1`, `sf-badge--size-1/2`, `sf-badge--size-1/3` |
| Устаревшие | `sf-badge--danger` → `sf-badge--error` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-badge`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-badge-background-color` | Заливка бейджа. | `var(--sf-on-surface-variant)`; зависит от вида, схемы, статуса |
| `--sf-badge-color` | Цвет текста и иконки. | `var(--sf-on-surface-inverse)`; зависит от вида, схемы, статуса |
| `--sf-badge-border-color` | Цвет рамки; виден при ненулевой ширине рамки. | `transparent`; зависит от вида, схемы, статуса |
| `--sf-badge-border-width` | Ширина рамки со всех сторон. | `0`; зависит от вида |
| `--sf-badge-radius` | Скругление углов. | `var(--sf-radius-circle)` |
| `--sf-badge-padding-inline` | Отступ до и после текста по строчной оси. | `var(--sf-ui-1/3--text-space-x)`; зависит от размера |
| `--sf-badge-padding-block` | Отступ над и под текстом. | `var(--sf-ui-1/3--space-y-tightness-low)`; зависит от размера |
| `--sf-badge-gap` | Промежуток между иконкой и текстом. | `var(--sf-space-1/4)` |
| `--sf-badge-ring-color` | Кольцо, которое отделяет бейдж на аватаре, иконке или кнопке-иконке от якоря: цвет поверхности, на которой стоит якорь. Поверхности Framework (меню, списки, шторки, модальные окна, тосты) задают свой; задайте её там, где страница рисует собственную поверхность. | `var(--sf-surface-0)` |

```css
.sf-badge {
  --sf-badge-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-badge`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-badge--anchor-border` | не задана; задают модификаторы, например `.sf-avatar > .sf-badge--anchored`: `var(--sf-avatar--border-top-width, var(--sf-a0))` | `--sf-badge--anchored-inset`, `top`, `inset-block-start`, `inset-inline-start` |
| `--sf-badge--anchor-radius` | не задана; задают модификаторы, например `.sf-avatar > .sf-badge--anchored`: `var(--sf-avatar--border-top-right-radius, var(--sf-avatar-radius, var(--sf-radius-circle)))` | `--sf-badge--anchored-inset` |
| `--sf-badge--anchored-count` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `var(--sf-b6)` | `--sf-badge--anchored-size` |
| `--sf-badge--anchored-dot` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `var(--sf-b0)` | `--sf-badge--anchored-size`, `--sf-badge--anchored-max` |
| `--sf-badge--anchored-font-size` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `var(--sf-text-size-1/4)` | `font-size` |
| `--sf-badge--anchored-inset` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `calc(min(var(--sf-badge--anchor-radius), 50% + var(--sf-badge--anchor-border)) * 0.29289)` | `top`, `inset-block-start`, `inset-inline-start` |
| `--sf-badge--anchored-max` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `none` | `max-width`, `max-inline-size` |
| `--sf-badge--anchored-padding` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `var(--sf-a4)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-badge--anchored-size` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `var(--sf-badge--anchored-count)` | `height`, `block-size`, `min-height`, `min-block-size`, `min-width`, `min-inline-size`, `line-height` |
| `--sf-badge--background-color` | `var(--sf-badge-background-color, var(--sf-on-surface-variant))` | `background-color` |
| `--sf-badge--border-bottom-width` | `var(--sf-badge-border-width, 0)` | `border-bottom-width` |
| `--sf-badge--border-color` | `var(--sf-badge-border-color, transparent)` | `border-color` |
| `--sf-badge--border-inline-end-width` | `var(--sf-badge-border-width, 0)` | `border-inline-end-width` |
| `--sf-badge--border-inline-start-width` | `var(--sf-badge-border-width, 0)` | `border-inline-start-width` |
| `--sf-badge--border-style` | не задана; задают модификаторы, например `.sf-badge--outline`: `solid` | `border-style` |
| `--sf-badge--border-top-width` | `var(--sf-badge-border-width, 0)` | `border-top-width` |
| `--sf-badge--color` | `var(--sf-badge-color, var(--sf-on-surface-inverse))` | `color`, `--sf-icon--color`, `--sf-badge-text--color` |
| `--sf-badge--font-size` | `var(--sf-text-size-1/3)` | `font-size`, `--sf-icon--font-size`, `--sf-badge-text--font-size` |
| `--sf-badge--gap` | `var(--sf-badge-gap, var(--sf-space-1/4))` | `gap` |
| `--sf-badge--line-height` | `var(--sf-text-height-1/3)` | `line-height`, `--sf-badge--min-size`, `--sf-badge-text--line-height` |
| `--sf-badge--min-size` | `calc(var(--sf-badge--line-height) + 2 * var(--sf-badge--padding-block))` | `min-height`, `min-block-size`, `min-width`, `min-inline-size` |
| `--sf-badge--padding-block` | `var(--sf-badge-padding-block, var(--sf-ui-1/3--space-y-tightness-low))` | `padding-top`, `padding-bottom`, `padding-block`, `--sf-badge--min-size` |
| `--sf-badge--padding-inline-end` | `var(--sf-badge-padding-inline, var(--sf-ui-1/3--text-space-x))` | `padding-inline-end` |
| `--sf-badge--padding-inline-start` | `var(--sf-badge-padding-inline, var(--sf-ui-1/3--text-space-x))` | `padding-inline-start` |
| `--sf-badge--ring` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `var(--sf-badge-ring-color, var(--sf-badge--surface, var(--sf-surface-0)))` | `box-shadow`, `outline` |
| `--sf-badge--ring-width` | не задана; задают модификаторы, например `.sf-badge.sf-badge--anchored`: `var(--sf-a2)` | `box-shadow`, `outline` |
| `--sf-badge-anchor--radius` | не задана; задают модификаторы, например `.sf-badge-anchor`: `var(--sf-radius-square)` | `--sf-badge--anchor-radius` |
| `--sf-badge-text--color` | не задана; задают модификаторы, например `.sf-badge.sf-badge--tonal .sf-badge-text`: `var(--sf-badge-color, var(--sf-badge--color))` | `color` |
| `--sf-badge-text--font-size` | не задана; задают модификаторы, например `.sf-badge--size-1 .sf-badge-text`: `var(--sf-badge--font-size)` | `font-size` |
| `--sf-badge-text--line-height` | не задана; задают модификаторы, например `.sf-badge--size-1 .sf-badge-text`: `var(--sf-badge--line-height)` | `line-height` |

## См. также

- [Точка состояния](/ru/components/feedback/dot/)
- [Уведомления](/ru/components/feedback/alerts/)
- [Бейджи — смарт-компонент](/ru/smart-components/feedback/badges/)
