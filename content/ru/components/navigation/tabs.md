---
title: "Вкладки"
description: "Переключает связанные разделы содержимого на одной странице без перехода."
profile: reference
---

# Вкладки

:badge[sf-tabs]{variant=outline scheme=on-surface size=1/2} :badge[1.5.2]{variant=outline scheme=on-surface size=1/2}

Вкладки показывают один из нескольких связанных разделов на месте, без
перехода на другую страницу. Пункты короткие и относятся к одному объекту;
для этапов процесса с порядком берите [шаги](/ru/components/navigation/step/).

## Пример

:::example {id="components/tabs/overview" label="Вкладки с подчёркиванием"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-tabs` → `sf-tabs-top-container` → список `sf-tabs-top` с пунктами, и
рядом — `sf-tabs-main-container` с панелями `sf-tabs-main-tab`.

- Корень `sf-tabs` с видом `sf-tabs--{вид}` и утилитами `flex flex-col`.
- `sf-tabs-top-container` (утилита `flex`) рисует нижнюю линию под пунктами.
- `sf-tabs-top` с утилитой `flex` и `aria-label` — список пунктов; пункты
  стоят прямо в нём.
- Пункт — кнопка `sf-button` (или `sf-icon-button`) с видом, схемой и
  размером кнопки, обычно `sf-button--default sf-button--primary
  sf-button--size-1`; подпись — в `sf-button-text-container`. Вид вкладок
  перекрашивает кнопки сам.
- Панели `sf-tabs-main-tab` в `sf-tabs-main-container` связываются с
  пунктами по порядку: пунктов и панелей поровну.
- Строка пунктов не переносится: если пункты не помещаются, она
  прокручивается по горизонтали.

## Варианты

### Вид

`sf-tabs--underline`, `sf-tabs--pills`, `sf-tabs--full` • [справочник](#классы)

Без модификатора пункты — залитые кнопки, выбранный темнее остальных.
`sf-tabs--underline` — текстовые пункты с линией под выбранным; основной
вид для разделов страницы и карточки. `sf-tabs--pills` — округлые кнопки,
подходят фильтрам и переключению периода; залита только выбранная, остальные
— текст без заливки и рамки, который подсвечивается лишь под указателем. `sf-tabs--full` — сегменты в
общей рамке на всю ширину; списку `sf-tabs-top` добавьте утилиту `flex-1`.

:::example {id="components/tabs/appearance" label="Четыре вида вкладок"}
:::

### Расположение

`sf-tabs--vertical` • [справочник](#классы)

По умолчанию пункты стоят строкой над панелями. `sf-tabs--vertical` ставит
их столбцом рядом с панелью — для настроек с длинным списком разделов. Корню
дайте утилиты `flex flex-row`, списку — `flex flex-col`; стрелки клавиатуры
тогда работают вверх и вниз.

:::example {id="components/tabs/orientation" label="Расположение"}
:::

### Только иконки

Пункт может быть кнопкой-иконкой `sf-icon-button` — для компактной панели
инструментов. У каждой обязателен `aria-label`, иконка скрыта через
`aria-hidden="true"`.

:::example {id="components/tabs/icons" label="Вкладки-иконки"}
:::

## Состояния

### Выбрана

Выбранный пункт и его панель получают класс `selected`, остальные панели —
`hidden`. Начальную вкладку задаёт атрибут `data-active-index` на корне —
номер с нуля — или класс `selected` на пункте; без них открыта первая.
Скрипт держит `data-active-index` равным открытой вкладке, а смена атрибута
переключает её.

:::example {id="components/tabs/state-selected" label="Открыта вторая вкладка"}
:::

### Недоступна

Атрибут `disabled` на кнопке (или класс `disabled`, или
`aria-disabled="true"`) запрещает выбирать пункт: клик и стрелки его
пропускают.

:::example {id="components/tabs/disabled" label="Недоступная вкладка"}
:::

### Фокус

Пункт в фокусе получает кольцо кнопки по `:focus-visible`. В примере фокус
показан классом `focus-visible`, который CSS кнопки читает наравне с
псевдоклассом.

:::example {id="components/tabs/state-focus" label="Пункт в фокусе"}
:::

## Применение

### Прежняя вкладка

Одиночная вкладка на списке пунктов (класс `sf-tab`, `SF.Tab`) устарела:
её заменяют вкладки с этой страницы. Класс `sf-tab` и `SF.Tab` работают до
2027-01-01 и отмечаются в `SF.deprecations`; прежний адрес её страницы
ведёт сюда.

## Доступность

Скрипт расставляет роли и связи сам:

- `sf-tabs-top` получает `role="tablist"` и `aria-orientation`
  (`vertical` у `sf-tabs--vertical`); `aria-label` с корня переносится на
  список, если у списка его нет;
- пункты получают `role="tab"`, `aria-selected`, `aria-controls` и имя из
  подписи, панели — `role="tabpanel"`, `aria-labelledby` и `tabindex="0"`;
- в порядке Tab остаётся только выбранный пункт.

Клавиши: стрелки влево и вправо (у вертикальных — вверх и вниз) выбирают
соседний доступный пункт и сразу открывают его, при письме справа налево —
зеркально; Home и End — первый и последний; Enter и пробел нажимают кнопку.
Каждой группе вкладок дайте своё имя через `aria-label`.

## JavaScript

Скрипт подключается сам и обслуживает каждый `.sf-tabs`, в том числе
добавленный позже. Он следит за пунктами и панелями: новые пары можно
добавлять без повторной инициализации. Корни, которые отрисовал
смарт-компонент `<sf-tabs>`, он пропускает. Событий переключения скрипт не
отправляет; событие `sf-tabs-change` даёт смарт-компонент.

:::example {id="components/tabs/dynamic" label="Добавление вкладки"}
:::

`SF.Tabs.activate(root, index)` открывает вкладку по номеру,
`SF.Tabs.init(target)` подключает корни внутри `target` и пересчитывает
изменённую разметку. Компонент регистрирует класс `Tabs`: `SF.Loader`
появляется к событию `sf-loader-init` на `window`, а
`SF.Loader.ready('Tabs', callback)` вызывает `callback`, когда скрипт
загружен.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Tabs', () => {
  SF.Tabs.activate(document.querySelector('#project-tabs'), 2);
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-tabs` |
| Части | `sf-tabs-count`, `sf-tabs-errors`, `sf-tabs-main-container`, `sf-tabs-more`, `sf-tabs-more-errors`, `sf-tabs-name`, `sf-tabs-overflowed`, `sf-tabs-said`, `sf-tabs-settings`, `sf-tabs-settings-handle`, `sf-tabs-settings-label`, `sf-tabs-settings-list`, `sf-tabs-settings-pin`, `sf-tabs-settings-row`, `sf-tabs-squeezed`, `sf-tabs-top`, `sf-tabs-top-container`, `sf-tabs-top-container--tools` |
| Модификаторы | `sf-tabs--overflow-more`, `sf-tabs--overflow-wrap`, `sf-tabs--pills`, `sf-tabs--sticky`, `sf-tabs--underline`, `sf-tabs--vertical` |
| Размеры | `sf-tabs--size-1`, `sf-tabs--size-1-2`, `sf-tabs--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-tabs`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-tabs-color` | Цвет подписи и значка вкладки в покое у видов `underline` и `full`; у выбранной вкладки — свой. | `var(--sf-on-surface)`; зависит от вида |
| `--sf-tabs-indicator-color` | Цвет линии под выбранной вкладкой у вида `underline`. | `var(--sf-primary)`; зависит от вида |
| `--sf-tabs-indicator-width` | Толщина линии под буквами выбранной вкладки в виде underline; высота вкладки не меняется. | `calc(var(--sf-px) * 2)`; зависит от вида, размера |
| `--sf-tabs-border-color` | Цвет разделителя под рядом вкладок; у видов `pills`, `full` и вертикальных вкладок его нет. | `var(--sf-outline-variant)`; зависит от вида |
| `--sf-tabs-border-width` | Толщина разделителя под рядом вкладок; ряд `underline` стоит на нём. | `var(--sf-px)`; зависит от вида |
| `--sf-tabs-gap` | Промежуток между вкладками: в виде «линия» нет — вкладки стоят вплотную, между плашками --sf-space-1, между строками вертикальных вкладок --sf-space-1/4. | `var(--sf-space-0)`; зависит от вида, размера |
| `--sf-tabs-padding-inline` | Боковой отступ вкладки в видах «линия» и vertical; у подписи его нет, поэтому линия шириной с буквы. Линия: отступ кнопки размера вкладок (--sf-ui-N--space-x, где N — размер); у первой вкладки нет отступа в начале, у последней — в конце, если строка не делится поровну (fit). Vertical: --sf-space-1, как у колонки меню. | `var(--sf-ui-1--space-x)`; зависит от вида, размера |
| `--sf-tabs-sticky-top` | На каком расстоянии от верха окна останавливается прилипающий ряд вкладок (sticky): высота закреплённой шапки над ним. | `var(--sf-0)` |

```css
.sf-tabs {
  --sf-tabs-color: var(--sf-on-surface);
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-tabs`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-tabs--focus-ink` | не задана; задают модификаторы, например `.sf-tabs-top .sf-button`: `var(--sf-on-surface)` | `--sf-focus--color` |
| `--sf-tabs--icon-gap` | не задана; задают модификаторы, например `.sf-tabs.sf-tabs--size-1-2.sf-tabs--underline > .sf-tabs-top-container > .sf-tabs-top .sf-button`: `var(--sf-ui-1/2--text-space-x)` | `-moz-column-gap`, `column-gap` |
| `--sf-tabs--icon-line` | не задана; задают модификаторы, например `.sf-tabs--underline.sf-tabs--size-1-2 > .sf-tabs-top-container > .sf-tabs-top .sf-icon-button`: `var(--sf-text-height-1/2)` | `width`, `inline-size` |
| `--sf-tabs--line-drop` | не задана; задают модификаторы, например `.sf-tabs.sf-tabs--underline:not(.does-not-exist) > .sf-tabs-top-container > .sf-tabs-top .sf-button`: `var(--sf-button--padding-bottom)` | `bottom`, `inset-block-end` |
| `--sf-tabs--narrow` | не задана; задают модификаторы, например `.sf-tabs-top-container > .sf-tabs-top`: `1` | — |
| `--sf-tabs--padding-inline` | не задана; задают модификаторы, например `.sf-tabs--underline > .sf-tabs-top-container > .sf-tabs-top .sf-button`: `var(--sf-tabs-padding-inline, var(--sf-ui-1--space-x))` | `--sf-button--padding-inline-start`, `--sf-button--padding-inline-end` |
| `--sf-tabs-top--gap` | не задана; задают модификаторы, например `.sf-tabs.sf-tabs--full > .sf-tabs-top-container > .sf-tabs-top`: `0` | `gap` |
| `--sf-tabs-top--margin` | не задана; задают модификаторы, например `.sf-tabs--underline > .sf-tabs-top-container > .sf-tabs-top`: `0 0 calc(var(--sf-tabs-border-width, var(--sf-tabs--border-width, var(--sf-px))) * -1) 0` | `margin` |
| `--sf-tabs-top-container--border-color` | не задана; задают модификаторы, например `.sf-tabs--pills > .sf-tabs-top-container`: `transparent` | `border-color` |
| `--sf-tabs-top-container--border-width` | не задана; задают модификаторы, например `.sf-tabs--pills > .sf-tabs-top-container`: `0` | `border-width` |

## См. также

- [Шаги](/ru/components/navigation/step/)
- [Вкладки](/ru/smart/navigation/tabs/)
