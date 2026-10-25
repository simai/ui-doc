---
title: "Выпадающий список"
description: "Даёт выбрать одно или несколько значений из скрытого списка вариантов."
profile: reference
---

# Выпадающий список

Выпадающий список экономит место и даёт выбрать одно или несколько значений
из набора вариантов; видимая подпись пункта отделена от его машинного
значения. Для небольшого набора, который помещается на экране, удобнее
[радиокнопки](/ru/components/forms/radio/) или
[флажки](/ru/components/forms/checkbox/).

## Пример

:::example {id="components/dropdown/overview" label="Выбор города"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-dropdown` → подпись `sf-dropdown-label`, поле `sf-dropdown-field` и
список `sf-list`.

- Корень `sf-dropdown` с размером `sf-dropdown--size-{размер}`, видом поля
  (`sf-dropdown--outlined` или `sf-dropdown--filled`), отображением выбора
  (`sf-dropdown--text` или `sf-dropdown--tag`) и утилитами `flex flex-col`.
  Атрибут `value` задаёт начальный выбор — машинные значения через запятую.
- Подпись поля — `sf-dropdown-label` с текстом в `sf-dropdown-text`.
- Поле `sf-dropdown-field` с утилитами `cursor-pointer items-cross-center
  transition flex relative` содержит скрытый `input` типа `hidden` с классом
  `sf-dropdown-hidden-input` и атрибутом `name` — он отправляет выбор с
  формой, — текстовый `input` с `placeholder` и кнопку раскрытия
  `sf-icon-button … absolute` со стрелкой `keyboard_arrow_down`.
- Список `sf-list` → `sf-list-container-wrap` → `sf-list-container` → пункты
  `sf-list-item`. Машинное значение пункта — в `data-value`, подпись — в
  `sf-list-item-container`.
- Скрипт связывает кнопку со списком, ставит роли и состояния, выводит
  выбранное в поле и отправляет события; ничего вызывать не нужно.

## Варианты

### Вид поля

`sf-dropdown--outlined` — поле с рамкой, `sf-dropdown--filled` — с тональной
заливкой. Поле берёт радиус элементов управления (`--sf-radius--ui`), панель
списка — радиус крупных поверхностей (`--sf-radius--surface`). Пока список
с заливкой открыт или в нём фокус, поле выглядит как поле с рамкой. Берите
вид, которым оформлены остальные поля формы.

:::example {id="components/dropdown/variants" label="Поле с рамкой и с заливкой"}
:::

### Отображение выбора

`sf-dropdown--text` показывает выбранные подписи строкой,
`sf-dropdown--tag` — отдельными тегами. Множественный выбор включает
атрибут `multiple` (у `sf-dropdown--tag` он включён по умолчанию); скрытое
поле тогда отправляет значения строкой через запятую.

Тег снимается крестиком на самом теге или повторным выбором его пункта в
списке. Длинная подпись тега сокращается многоточием, теги переносятся
строками и не перекрывают кнопку раскрытия.

:::example {id="components/dropdown/tags" label="Подписи строкой и теги"}
:::

### Размер

Три ступени, как у полей форм: `sf-dropdown--size-1/2`,
`sf-dropdown--size-1` и `sf-dropdown--size-2`. Размер меняет высоту,
отступы, текст, пункты списка и кнопку раскрытия вместе; пунктам ставьте
размер списка `sf-list-item--size-…` той же ступени. Значения `1/3` и `3`
выпуск читает как `1/2` и `2` и пишет предупреждение в консоль.

:::example {id="components/dropdown/sizes" label="Размеры 1/2, 1 и 2"}
:::

### Пункты списка

Пункт содержит текст (`sf-list-item--text`), иконку (`sf-list-item--icon`),
флажок (`sf-list-item--checkbox`), аватар (`sf-list-item--avatar`) или
цветовую метку (`sf-list-item--color`). Вложенная графика декоративна:
фокус и выбор принадлежат всему пункту. Пункт — не самостоятельная кнопка
или флажок: роль, клавиатуру и `aria-selected` задаёт выпадающий список.

:::example {id="components/dropdown/options" label="Типы пунктов"}
:::

### Флаги в пунктах

Флаг [Flag](/ru/components/content/flag/) встаёт в пункт `sf-list-item--icon`
на место иконки: элемент `sf-flag sf-flag--rect` с кодом страны в
`data-country` и `aria-hidden="true"`. Выбранный флаг повторяется в поле.
Название языка пишите на самом языке и отметьте пункт атрибутом `lang`.
Флаг обозначает страну, а не язык: при нескольких странах одного языка
уточните вариант в подписи, например «English (UK)».

:::example {id="components/dropdown/language" label="Выбор языка"}
:::

### Поиск

Поле поиска `sf-input` в начале `sf-list` фильтрует пункты по видимой
подписи. Машинные значения поиск не меняет.

:::example {id="components/dropdown/search" label="Список с поиском"}
:::

### Группы

Строка `sf-list-heading` с текстом в `sf-list-heading-container` начинает
группу: пункты под ней читаются вместе, и название группы не повторяется в
каждом пункте. Заголовок не выбирается и не получает фокус.

:::example {id="components/dropdown/groups" label="Пункты по группам"}
:::

### Свой триггер

Вместо поля список может открывать другой элемент — кнопка-иконка в шапке
группы, «+» на панели. Поставьте его в `sf-dropdown-trigger` на место
`sf-dropdown-field`: компонент берёт у него только нажатие, вид остаётся
вашим. `sf-list--free-width` даёт списку свою ширину вместо ширины
триггера.

В примере список ещё и разложен сеткой: `sf-list-container--grid` ставит
пункты по шесть в ряд (число задаёт `--sf-list-container--columns`), а
высоту прокручиваемой сетки — `--sf-dropdown--grid-height`. В сетке пункт
показывает картинку, а подпись остаётся его именем для поиска и подсказкой
`title`.

:::example {id="components/dropdown/trigger" label="Список за кнопкой-иконкой, сеткой"}
:::

### Размещение списка

Открытый список выходит в верхний слой страницы (native Popover), поэтому
обрезающие контейнеры и модальные окна ему не мешают. Он открывается под
полем, переворачивается вверх, если снизу не помещается, сдвигается внутрь
экрана у края и ограничивает высоту видимой областью. Атрибут
`portal="false"` оставляет список в потоке страницы.

:::example {id="components/dropdown/portal" label="Список в обрезающем контейнере"}
:::

## Состояния

### Выбран, недоступен, обязателен

Выбранный пункт получает класс `selected` и `aria-selected="true"`; скрипт
ставит их сам по атрибуту `value` или по выбору. Атрибут `disabled` на
корне (или класс `disabled`) выключает весь список, класс `disabled` на
пункте — один пункт. Атрибут `required` отмечает обязательное поле;
звёздочку в подписи оформляет `sf-dropdown-required`. Сброс формы
возвращает выбор, заданный при подключении.

:::example {id="components/dropdown/states" label="Обязательный и недоступный список"}
:::

## Доступность

- Видимая подпись `sf-dropdown-label` — имя поля; скрипт связывает с ней
  кнопку и список. `placeholder` — только приглашение к выбору, не подпись.
- Кнопка раскрытия получает `aria-haspopup="listbox"`, `aria-expanded` и
  `aria-controls`; список — `role="listbox"` и `aria-multiselectable`,
  пункты — `role="option"`, `aria-selected` и `aria-disabled`.
- Кнопка раскрытия — точка Tab. Стрелки вниз и вверх, Enter и пробел на ней
  открывают список; в списке стрелки переходят по пунктам, Home и End — к
  первому и последнему, Enter и пробел выбирают пункт, Escape закрывает
  список, Tab закрывает его и продолжает обход страницы.
- Иконки, флаги и флажки внутри пунктов скрыты через `aria-hidden="true"`.

## JavaScript

Скрипт подключается сам и обслуживает каждый `.sf-dropdown`, в том числе
добавленный позже. Корни, которые отрисовал Smart-компонент
`<sf-dropdown>`, он пропускает.

При выборе корень отправляет всплывающее событие `change`. В `detail`:
`value` и `label` выбранного пункта, `values` — все выбранные значения,
`item`, `root` и `multiple`. Снятие тега крестиком отправляет то же событие
с пустыми `value`, `label` и `item: null`. Одновременно уходит
`sf-dropdown:change` с тем же `detail` — его выпуск оставляет для
совместимости, слушайте `change`.

```js
document.querySelector('.sf-dropdown').addEventListener('change', (event) => {
  console.log(event.detail.values);
});
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-dropdown` |
| Части | `sf-dropdown-field`, `sf-dropdown-field-visual`, `sf-dropdown-label`, `sf-dropdown-placeholder`, `sf-dropdown-required`, `sf-dropdown-tag-container`, `sf-dropdown-text`, `sf-dropdown-trigger`, `sf-dropdown-value` |
| Модификаторы | `sf-dropdown--filled`, `sf-dropdown--outlined`, `sf-dropdown--tag`, `sf-dropdown--text` |
| Размеры | `sf-dropdown--size-1`, `sf-dropdown--size-1/2`, `sf-dropdown--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-dropdown`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-dropdown-field--background-color` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--outlined.sf-dropdown--text[:not-has(%3E%20.sf-dropdown-field%20%3E%20:disabled)] .sf-dropdown-field`: `var(--sf-surface-0)` | `background-color` |
| `--sf-dropdown-field--border` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-field`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-dropdown-field--border-color` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--outlined.sf-dropdown--text[:not-has(%3E%20.sf-dropdown-field%20%3E%20:disabled)] .sf-dropdown-field`: `var(--sf-outline)` | `border-color` |
| `--sf-dropdown-field--gap` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1/2 .sf-dropdown-field`: `var(--sf-space-1/4)` | `gap` |
| `--sf-dropdown-field--padding-bottom` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1/2 .sf-dropdown-field`: `calc(var(--sf-ui-1/2--space-y-tightness-default) - var(--sf-px))` | `padding-bottom` |
| `--sf-dropdown-field--padding-inline-end` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1/2 .sf-dropdown-field`: `var(--sf-ui-1/2--space-x)` | `padding-inline-end`, `inset-inline-end` |
| `--sf-dropdown-field--padding-inline-start` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1/2 .sf-dropdown-field`: `var(--sf-ui-1/2--space-x)` | `padding-inline-start` |
| `--sf-dropdown-field--padding-top` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1/2 .sf-dropdown-field`: `calc(var(--sf-ui-1/2--space-y-tightness-default) - var(--sf-px))` | `padding-top` |
| `--sf-dropdown-input--color` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--outlined.sf-dropdown--text input`: `var(--sf-on-surface)` | `color` |
| `--sf-dropdown-input--font-family` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text input`: `var(--sf-text--family)` | `font-family` |
| `--sf-dropdown-input--font-size` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text input`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-dropdown-input--font-weight` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text input`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-dropdown-input--line-height` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text input`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-dropdown-input--padding-inline-end` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text .sf-dropdown-field input`: `var(--sf-text-size-4)` | `padding-inline-end` |
| `--sf-dropdown-input--padding-inline-start` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text .sf-dropdown-field input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start` |
| `--sf-dropdown-label--background-color` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-label`: `transparent` | `background-color` |
| `--sf-dropdown-label--gap` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-label`: `var(--sf-space-1/4)` | `gap` |
| `--sf-dropdown-placeholder--color` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--outlined.sf-dropdown--text .sf-dropdown-field input::-webkit-input-placeholder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-dropdown-placeholder--font-family` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--text .sf-dropdown-field input::-webkit-input-placeholder`: `var(--sf-text--family)` | `font-family` |
| `--sf-dropdown-placeholder--font-size` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text .sf-dropdown-field input::-webkit-input-placeholder`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-dropdown-placeholder--line-height` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1.sf-dropdown--outlined.sf-dropdown--text .sf-dropdown-field input::-webkit-input-placeholder`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-dropdown-required--color` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-required`: `var(--sf-error)` | `color` |
| `--sf-dropdown-required--font-family` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-required`: `var(--sf-text--family)` | `font-family` |
| `--sf-dropdown-required--font-size` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1 .sf-dropdown-required`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-dropdown-required--font-weight` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-required`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-dropdown-required--line-height` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1 .sf-dropdown-required`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-dropdown-tag-container--gap` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--tag .sf-dropdown-tag-container`: `var(--sf-space-1/3)` | `gap` |
| `--sf-dropdown-tag-line--box` | `var(--sf-dropdown-tag-line--height)` | `--sf-tag--line`, `height`, `block-size`, `width`, `inline-size`, `max-height`, `max-block-size`, `--sf-flag--size`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width`, `--sf-avatar--height`, `--sf-avatar--width`, `--sf-avatar--font-size`, `--sf-avatar--line-height`, `--sf-tag-color-icon--height`, `--sf-tag-color-icon--width` |
| `--sf-dropdown-tag-line--height` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1/2`: `var(--sf-text-height-1/2)` | `--sf-dropdown-tag-line--box` |
| `--sf-dropdown-text--color` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-dropdown-text--font-family` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-dropdown-text--font-size` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1 .sf-dropdown-text`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-dropdown-text--font-weight` | не задана; задают модификаторы, например `.sf-dropdown .sf-dropdown-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-dropdown-text--line-height` | не задана; задают модификаторы, например `.sf-dropdown.sf-dropdown--size-1 .sf-dropdown-text`: `var(--sf-text-height-1/2)` | `line-height` |

## См. также

- [Контекстное меню](/ru/components/navigation/context-menu/)
- [Выпадающий список — Smart-компонент](/ru/smart-components/navigation/dropdown/)
