---
title: "Вкладки"
description: "Переключает связанные разделы содержимого на одной странице без перехода."
profile: reference
---

# Вкладки

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

Без модификатора пункты — залитые кнопки, выбранный темнее остальных.
`sf-tabs--underline` — текстовые пункты с линией под выбранным; основной
вид для разделов страницы и карточки. `sf-tabs--pills` — округлые кнопки,
подходят фильтрам и переключению периода. `sf-tabs--full` — сегменты в
общей рамке на всю ширину; списку `sf-tabs-top` добавьте утилиту `flex-1`.

:::example {id="components/tabs/appearance" label="Четыре вида вкладок"}
:::

### Расположение

По умолчанию пункты стоят строкой над панелями. `sf-tabs--vertical` ставит
их столбцом рядом с панелью — для настроек с длинным списком разделов. Корню
дайте утилиты `flex flex-row`, списку — `flex flex-col`; стрелки клавиатуры
тогда работают вверх и вниз.

:::example {id="components/tabs/orientation" label="Горизонтальные и вертикальные вкладки"}
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
Smart-компонент `<sf-tabs>`, он пропускает. Событий переключения скрипт не
отправляет; событие `sf-tab-change` даёт Smart-компонент.

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
| Части | `sf-tabs-main-container`, `sf-tabs-top`, `sf-tabs-top-container` |
| Модификаторы | `sf-tabs--full`, `sf-tabs--pills`, `sf-tabs--underline`, `sf-tabs--vertical` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-tabs`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-tabs--focus-ink` | не задана; задают модификаторы, например `.sf-tabs-top .sf-button`: `var(--sf-on-surface)` | `--sf-focus--color` |
| `--sf-tabs-top--gap` | не задана; задают модификаторы, например `.sf-tabs.sf-tabs--full > .sf-tabs-top-container > .sf-tabs-top`: `0` | `gap` |
| `--sf-tabs-top--margin` | не задана; задают модификаторы, например `.sf-tabs--underline > .sf-tabs-top-container > .sf-tabs-top`: `0 0 calc(var(--sf-tabs--border-width, var(--sf-px)) * -1) 0` | `margin` |
| `--sf-tabs-top-container--border-color` | не задана; задают модификаторы, например `.sf-tabs--pills > .sf-tabs-top-container`: `transparent` | `border-color` |
| `--sf-tabs-top-container--border-width` | не задана; задают модификаторы, например `.sf-tabs--pills > .sf-tabs-top-container`: `0` | `border-width` |

## См. также

- [Вкладка (совместимость)](/ru/components/navigation/tab/)
- [Шаги](/ru/components/navigation/step/)
- [Smart-вкладки](/ru/smart-components/navigation/tabs/)
