---
title: "Контекстное меню"
description: "Показывает короткий список действий над выбранным объектом рядом с ним."
profile: reference
---

# Контекстное меню

:badge[sf-context-menu]{variant=tonal scheme=primary size=1/2} :badge[1.8.1]{variant=outline scheme=on-surface size=1/2}

Контекстное меню — приподнятая панель с коротким списком действий над
выбранным объектом: строкой таблицы, файлом, карточкой. Ширина панели
подстраивается под самый длинный пункт. Для выбора значения в форме берите
[выпадающий список](/ru/components/navigation/dropdown/).

## Пример

:::example {id="components/context-menu/overview" label="Меню действий"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-context-menu` → `relative` → панель `sf-context-menu-content`.

- Корень `sf-context-menu` даёт тень.
- Промежуточная обёртка с утилитой `relative` обязательна: по ней CSS
  ограничивает размер панели.
- Панель `sf-context-menu-content` с утилитами `flex flex-col` даёт фон,
  радиус и прокрутку, если пунктов больше, чем помещается.
- Пункты — кнопки `sf-button` прямыми потомками `sf-context-menu-content`.
  Меню выравнивает их подписи по началу строки и подгоняет отступы к размеру
  кнопки; подпись пункта не переносится.
  Обычно берут вид `sf-button--ghost` со схемой `sf-button--on-surface`.
- Компонент — только оформление. Открыть меню у объекта, поставить его рядом,
  закрыть по Escape и вернуть фокус — задача вызывающего кода или
  смарт-компонента `<sf-menu-context>`.

## Варианты

### Размер пунктов

Размер задают сами кнопки: `sf-button--size-1/2`, `sf-button--size-1` или
`sf-button--size-2`. Меню сдвигает подписи пунктов на ту же линию, где
начинается текст поля такого же размера, поэтому меню под полем выровнено с
ним. В одном меню держите пункты одного размера.

:::example {id="components/context-menu/sizes" label="Пункты трёх размеров"}
:::

### Поиск

`sf-context-menu-content--search` • [справочник](#классы)

В меню с поиском панель получает модификатор `sf-context-menu-content--search`
и сама больше не прокручивается. Сверху стоит поле `sf-context-menu-search` с
полем ввода `sf-context-menu-search-input`, под ним — `sf-context-menu-list`,
своя область прокрутки для пунктов и пояснения «ничего не найдено». Поле
остаётся на месте, а полоса прокрутки начинается под ним. Вокруг поля — 8 px
(`--sf-space-1/3`), как и отступ панели, у обоих размеров меню; у
списка — отступ панели по бокам и снизу, поэтому пункты стоят там же, где без
поиска. Высоту меню в примере задаёт обёртка `h-f6`; меню у кнопки
ограничивает высота окна.

:::example {id="components/context-menu/search" label="Поиск"}
:::

## Состояния

### Выбранная строка

`sf-context-menu-item--chosen` • [справочник](#классы)

`sf-context-menu-item--chosen` отмечает выбранную строку списка, где выбирают
одно: мягкая заливка `--sf-secondary-container` (ступень 12 в светлой теме, 24
в тёмной), при наведении — следующая ступень. Галочки и места под неё в конце
строки нет, поэтому значение `sf-context-menu-item-value` кончается у правого
отступа панели. Если отметить можно несколько, галочка
`sf-context-menu-item-check` стоит слева, в колонке иконок
`sf-context-menu-item-lead`; колонку получают все строки, чтобы подписи
начинались на одной линии.

:::example {id="components/context-menu/chosen" label="Выбранная строка"}
:::

## Доступность

- Статическая разметка `sf-context-menu` не задаёт ролей. Не ставьте ей
  `role="menu"`, если не реализуете клавиатурную модель меню целиком.
- Для плоского списка действий берите смарт-компонент `<sf-menu-context>` с
  `aria-label`: он даёт прямым кнопкам и ссылкам роль `menuitem`, оставляет в
  порядке Tab один пункт и переводит фокус клавишами со стрелками вверх и
  вниз, Home и End.
- Кнопка, которая открывает меню, сообщает его состояние через
  `aria-expanded`; после закрытия фокус возвращается на неё.
- Заливка `sf-context-menu-item--chosen` видна только глазу: выбранной строке
  нужен `aria-checked="true"` с ролью `menuitemradio`, а строке с галочкой —
  `menuitemcheckbox`. Эти роли и клавиши даёт `<sf-menu-context>`.
- Не прячьте в контекстное меню единственный путь к основному действию.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-context-menu` |
| Части | `sf-context-menu-back`, `sf-context-menu-body`, `sf-context-menu-choice`, `sf-context-menu-choice--band`, `sf-context-menu-choice--icons`, `sf-context-menu-choice-option`, `sf-context-menu-close`, `sf-context-menu-content`, `sf-context-menu-content--scrollbar`, `sf-context-menu-content--search`, `sf-context-menu-drill-head`, `sf-context-menu-footer`, `sf-context-menu-frame`, `sf-context-menu-group`, `sf-context-menu-head`, `sf-context-menu-header`, `sf-context-menu-header-avatar`, `sf-context-menu-header-caption`, `sf-context-menu-header-name`, `sf-context-menu-header-text`, `sf-context-menu-heading`, `sf-context-menu-item`, `sf-context-menu-item--chosen`, `sf-context-menu-item--current`, `sf-context-menu-item--danger`, `sf-context-menu-item--switch`, `sf-context-menu-item-avatar`, `sf-context-menu-item-caption`, `sf-context-menu-item-check`, `sf-context-menu-item-chevron`, `sf-context-menu-item-icon`, `sf-context-menu-item-label`, `sf-context-menu-item-lead`, `sf-context-menu-item-switch`, `sf-context-menu-item-switch-thumb`, `sf-context-menu-item-text`, `sf-context-menu-item-under`, `sf-context-menu-item-value`, `sf-context-menu-level-title`, `sf-context-menu-list`, `sf-context-menu-list--scrollbar`, `sf-context-menu-note`, `sf-context-menu-range`, `sf-context-menu-range-input`, `sf-context-menu-range-value`, `sf-context-menu-row`, `sf-context-menu-row-text`, `sf-context-menu-search`, `sf-context-menu-search-icon`, `sf-context-menu-search-input`, `sf-context-menu-separator`, `sf-context-menu-tabs`, `sf-context-menu-tile`, `sf-context-menu-tile--on`, `sf-context-menu-tile-icon`, `sf-context-menu-tile-name`, `sf-context-menu-tile-value`, `sf-context-menu-tiles`, `sf-context-menu-tiles--1`, `sf-context-menu-tiles--2`, `sf-context-menu-tooltip`, `sf-context-menu-top`, `sf-context-menu-value-row` |
| Модификаторы | `sf-context-menu--drill`, `sf-context-menu--entries`, `sf-context-menu--open`, `sf-context-menu--panel` |
| Размеры | `sf-context-menu--size-1` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-context-menu`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-context-menu-background-color` | Заливка меню вместе с закреплённым подвалом. | `var(--sf-surface-popup)` |
| `--sf-context-menu-color` | Цвет подписи строки в покое; у текущей, опасной и недоступной строки — свой. | `var(--sf-on-surface)` |
| `--sf-context-menu-border-color` | Цвет тонкой линии вокруг меню. | `var(--sf-outline-variant)` |
| `--sf-context-menu-border-width` | Толщина линии вокруг меню. | `var(--sf-px)` |
| `--sf-context-menu-radius` | Скругление углов меню и его тени. | `var(--sf-radius--surface)` |
| `--sf-context-menu-padding-inline` | Отступ от края меню до подсветки строки слева и справа; по нему же стоят текст шапки поиска и зазоры полосы прокрутки по сторонам ползунка. | `var(--sf-space-1/4)` |
| `--sf-context-menu-padding-block` | Отступ над подсветкой первой строки и под последней; шапка поиска — высота строки и этот отступ сверху и снизу. | `var(--sf-space-1/4)` |
| `--sf-context-menu-row-radius` | Скругление подсветки строки — при наведении, у выбранной и текущей; по умолчанию как у элементов управления. | `var(--sf-radius--ui)` |
| `--sf-context-menu-gap` | Промежуток между строками. | `var(--sf-px)` |
| `--sf-context-menu-inline-size` | Постоянная ширина панели с переходами (`submenu="drill"`), собственная ширина панели настроек: она не растёт ни от самого длинного слова уровня, ни от значения. По умолчанию — `--sf-popup-menu-max-width`, наибольшая ширина меню, которая следует плотности. | `var(--sf-popup-menu-max-width)` |

```css
.sf-context-menu {
  --sf-context-menu-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-context-menu`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-context-menu--block-space` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/3)` | `padding-bottom`, `padding-block-end`, `padding` |
| `--sf-context-menu--box-shadow` | не задана; задают модификаторы, например `.sf-context-menu[data-sf-sheet]`: `var(--sf-shadow-modal)` | `box-shadow` |
| `--sf-context-menu--field-space-x` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-ui-1/2--space-x)` | — |
| `--sf-context-menu--inner-height` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-ui-1/3--control-height)` | `--sf-context-menu-choice--option-height` |
| `--sf-context-menu--inner-line` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-text-height-1/3)` | `line-height`, `--sf-icon--font-size`, `--sf-icon--width`, `--sf-icon--height` |
| `--sf-context-menu--inner-space-x` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-ui-1/3--space-x)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-context-menu--inner-text-size` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-context-menu--inset-end` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--row-padding)` | `padding-right`, `padding-left`, `padding-inline`, `padding`, `margin-right`, `margin-left`, `margin-inline` |
| `--sf-context-menu--inset-start` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--row-padding)` | `padding-left`, `padding-right`, `padding-inline`, `padding`, `margin-left`, `margin-right`, `margin-inline` |
| `--sf-context-menu--item-inset-end-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--row-padding)` | `--sf-button--padding-inline-end` |
| `--sf-context-menu--item-inset-end-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--row-padding)` | `--sf-button--padding-inline-end` |
| `--sf-context-menu--item-inset-start-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--row-padding)` | `--sf-button--padding-inline-start` |
| `--sf-context-menu--item-inset-start-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu--row-padding)` | `--sf-button--padding-inline-start` |
| `--sf-context-menu--label-inset-1` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-context-menu--item-inset-start-1) + var(--sf-ui-1--text-space-x))` | — |
| `--sf-context-menu--label-inset-2` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `calc(var(--sf-context-menu--item-inset-start-2) + var(--sf-ui-2--text-space-x))` | — |
| `--sf-context-menu--line` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-text-height-1/2)` | `line-height`, `--sf-icon--font-size`, `--sf-icon--width`, `--sf-icon--height`, `padding-top`, `padding-bottom`, `padding-block`, `width`, `inline-size`, `height`, `block-size`, `margin-inline-start`, `--sf-context-menu-switch--track`, `min-width`, `min-inline-size` |
| `--sf-context-menu--row-height` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-ui-1/2--control-height)` | `min-height`, `min-block-size`, `padding-top`, `padding-bottom`, `padding-block`, `--sf-context-menu-choice--option-height`, `--sf-context-menu--row-step` |
| `--sf-context-menu--row-padding` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/2)` | `--sf-context-menu--inset-start`, `--sf-context-menu--inset-end`, `padding-left`, `padding-right`, `padding-inline` |
| `--sf-context-menu--row-radius` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu-row-radius, var(--sf-radius--ui))` | `border-radius` |
| `--sf-context-menu--row-step` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `max(var(--sf-context-menu--row-height), var(--sf-d1))` | `padding-top`, `padding-bottom`, `padding-block` |
| `--sf-context-menu--screen-inline-size` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content[data-sf-width=list]`: `var(--sf-context-menu-available-inline-size, calc(100vi - var(--sf-space-1)))` | `min-width`, `min-inline-size`, `max-width`, `max-inline-size` |
| `--sf-context-menu--space-y` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-ui-1/2--space-y)` | `padding`, `min-width`, `min-inline-size` |
| `--sf-context-menu--text-size` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-context-menu--thumb` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-space-1/4)` | `--sf-context-menu--track` |
| `--sf-context-menu--track` | не задана; задают модификаторы, например `.sf-context-menu:not(.sf-context-menu--panel) .sf-context-menu-content`: `calc(2 * var(--sf-context-menu-content--padding-inline-end) + var(--sf-context-menu--thumb))` | `width`, `height`, `border-radius` |
| `--sf-context-menu-choice--option-height` | не задана; задают модификаторы, например `.sf-context-menu-choice-option.sf-context-menu-item`: `min(var(--sf-context-menu--inner-height), calc(var(--sf-context-menu--row-height) - 2 * var(--sf-a2)))` | `min-height`, `min-block-size`, `width`, `inline-size` |
| `--sf-context-menu-content--background-color` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu-background-color, var(--sf-surface-popup))` | `--sf-surface-place`, `--sf-surface-place-solid`, `--sf-surface-place-ground`, `background-color` |
| `--sf-context-menu-content--border-radius` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu-radius, var(--sf-radius--surface))` | `border-radius` |
| `--sf-context-menu-content--padding-bottom` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu-padding-block, var(--sf-space-1/4))` | `padding-bottom`, `min-height`, `min-block-size`, `padding-block`, `bottom`, `inset-block-end`, `margin-bottom`, `margin-block-end`, `padding-block-end` |
| `--sf-context-menu-content--padding-inline-end` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu-padding-inline, var(--sf-space-1/4))` | `padding-inline-end`, `padding-inline`, `margin-inline`, `--sf-context-menu--track`, `border` |
| `--sf-context-menu-content--padding-inline-start` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu-padding-inline, var(--sf-space-1/4))` | `padding-inline-start`, `padding-inline`, `margin-inline` |
| `--sf-context-menu-content--padding-top` | не задана; задают модификаторы, например `.sf-context-menu .sf-context-menu-content`: `var(--sf-context-menu-padding-block, var(--sf-space-1/4))` | `padding-top`, `min-height`, `min-block-size`, `padding-block`, `margin-top`, `margin-block-start` |
| `--sf-context-menu-drill--inline-size` | не задана; задают модификаторы, например `.sf-context-menu.sf-context-menu--drill .sf-context-menu-content`: `var(--sf-context-menu-inline-size, var(--sf-popup-menu-max-width))` | `width`, `inline-size`, `max-width`, `max-inline-size` |
| `--sf-context-menu-panel--inline-size` | не задана; задают модификаторы, например `.sf-context-menu.sf-context-menu--panel .sf-context-menu-content`: `max(var(--sf-context-menu-trigger-inline-size, var(--sf-a0)), var(--sf-popup-panel-width))` | `width`, `inline-size` |
| `--sf-context-menu-switch--direction` | не задана; задают модификаторы, например `.sf-context-menu-item-switch:dir(rtl)`: `-1` | `transform` |
| `--sf-context-menu-switch--seat` | не задана; задают модификаторы, например `.sf-context-menu-item-switch`: `var(--sf-a2)` | `--sf-context-menu-switch--thumb`, `padding` |
| `--sf-context-menu-switch--thumb` | не задана; задают модификаторы, например `.sf-context-menu-item-switch`: `calc(var(--sf-context-menu-switch--track) - 2 * var(--sf-context-menu-switch--seat))` | `width`, `inline-size`, `height`, `block-size` |
| `--sf-context-menu-switch--track` | не задана; задают модификаторы, например `.sf-context-menu-item-switch`: `var(--sf-context-menu--line)` | `--sf-context-menu-switch--thumb`, `width`, `inline-size`, `height`, `block-size`, `transform` |
| `--sf-context-menu-tail-corner-offset` | `0px` | — |
| `--sf-context-menu-tail-half` | `0px` | — |
| `--sf-context-menu-tail-size` | `0px` | — |
| `--sf-context-menu-viewport-space` | `var(--sf-space-1/2)` | — |

## См. также

- [Выпадающий список](/ru/components/navigation/dropdown/)
- [Кнопки](/ru/components/actions/buttons/)
- [Контекстное меню — смарт-компонент](/ru/smart/navigation/context-menu/)
