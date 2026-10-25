---
title: "Календарь"
description: "Классы поверхности календаря: дни, выбранная дата, период, месяцы и годы."
profile: reference
---

# Календарь

Календарь — набор классов поверхности, на которой показывают дни месяца,
выбранную дату или период. Поведения у него нет: перелистывание, выбор даты и
клавиатуру даёт [Smart-компонент Календарь](/ru/smart-components/forms/datepicker/),
который рисует эту же поверхность. Классы нужны, чтобы показать календарь,
собранный своим кодом или на сервере.

## Пример

:::example {id="components/datepicker/overview" label="Месяц с выбранным днём"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-datepicker` → шапка `sf-datepicker-top`, строка дней недели
`sf-datepicker-row` с `sf-datepicker-weekday` и `sf-datepicker-main` со
строкой дней `sf-datepicker-row`.

- `sf-datepicker` — поверхность календаря: приподнятый фон, тень, скругление и
  ширина на семь дней. Дайте ей `role="group"` и `aria-label` с месяцем.
- `sf-datepicker-top` с утилитами `grid items-cross-center` делит шапку на три
  колонки: кнопка назад, `sf-datepicker-period` с названием месяца, кнопка
  вперёд.
- Дни недели — `sf-datepicker-weekday` в строке `grid grid-col-7`; строку
  скрывайте от вспомогательных технологий: полную дату называет кнопка дня.
- День — `<button type="button" class="sf-datepicker-day">` с числом в
  `sf-datepicker-day-date` и полной датой в `aria-label`.
- Для выбора месяца или года поверх дней кладут `sf-datepicker-context` с
  кнопками `sf-datepicker-text`.

## Варианты

### Вид дня

`sf-datepicker-day-off` окрашивает число выходного дня; выходной остаётся
доступным для выбора. `sf-datepicker-another-month` приглушает дни соседнего
месяца в первой и последней неделе. `sf-datepicker-day-info` под числом
показывает короткую подпись дня: число мест, событий или цену.

:::example {id="components/datepicker/day-kinds" label="Выходные, дни соседнего месяца и подпись дня"}
:::

### Ячейки месяца и года

`sf-datepicker-text` — ячейка месяца или года для выбора без дней. Ячейки
принимают те же состояния, что и дни: `active`, `disabled` и период
`sf-datepicker-text-start`, `sf-datepicker-text-selected`,
`sf-datepicker-text-end`. Ячейки периода ставьте в сетку без промежутка
(`grid grid-col-3` без класса `gap-*`): промежуток разрывает полосу периода.
Каждая ячейка периода, включая средние, получает `aria-pressed="true"`.

:::example {id="components/datepicker/text-cells" label="Ячейки месяцев в разных состояниях"}
:::

## Состояния

Состояния дня задают классы и нативный `disabled` на кнопке. Наведение и
нажатие компонент показывает сам.

### Выбран

Класс `active` заливает день основным цветом, в том числе выходной. Сообщите
выбор и в `aria-pressed="true"` или в `aria-label`.

:::example {id="components/datepicker/state-active" label="Выбранный день"}
:::

### Период

Период отмечают три класса: `sf-datepicker-day-start` на первом дне,
`sf-datepicker-day-selected` на днях внутри и `sf-datepicker-day-end` на
последнем. Начало и конец заливаются основным цветом и скругляются с внешней
стороны, середина — светлой заливкой.

:::example {id="components/datepicker/state-range" label="Период с 14 по 18 сентября"}
:::

### Недоступен

Нативный `disabled` на кнопке или класс `disabled` приглушает число и
подпись; недоступный выходной теряет цвет выходного. Нативный `disabled`
к тому же убирает день из порядка фокуса.

:::example {id="components/datepicker/state-disabled" label="Недоступные дни"}
:::

### Фокус

При переходе клавишей Tab день получает кольцо фокуса по `:focus-visible`. В
примере фокус показан классом `focus-visible`, который CSS компонента читает
наравне с `:focus-visible`.

:::example {id="components/datepicker/state-focus" label="День в фокусе"}
:::

## Доступность

- Кнопке дня нужна полная дата в `aria-label`: «15 сентября 2026». Число
  без месяца и года экранный диктор прочтёт без контекста.
- Выбор, период, выходной и недоступность передавайте не только цветом:
  `aria-pressed`, `disabled` и текст в `aria-label`.
- Сегодняшний день отмечайте `aria-current="date"`.
- Клавиатурную навигацию по дням (стрелки, Home, End, листание месяцев) классы
  не дают: её даёт Smart Datepicker или ваш код.
- В режиме принудительных цветов выбранные и недоступные дни рисуются
  системными цветами.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-datepicker` |
| Части | `sf-datepicker-another-month`, `sf-datepicker-container`, `sf-datepicker-context`, `sf-datepicker-day`, `sf-datepicker-day-date`, `sf-datepicker-day-end`, `sf-datepicker-day-info`, `sf-datepicker-day-off`, `sf-datepicker-day-selected`, `sf-datepicker-day-start`, `sf-datepicker-main`, `sf-datepicker-period`, `sf-datepicker-preset`, `sf-datepicker-presets`, `sf-datepicker-row`, `sf-datepicker-text`, `sf-datepicker-text-end`, `sf-datepicker-text-selected`, `sf-datepicker-text-start`, `sf-datepicker-top`, `sf-datepicker-weekday` |
| Модификаторы | `sf-datepicker--presets` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-datepicker`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-datepicker--inline-size` | `calc(var(--sf-ui-1--control-height) * 7 + var(--sf-space-1))` | `width`, `inline-size` |
| `--sf-datepicker-another-month--opacity` | не задана; задают модификаторы, например `.sf-datepicker-day.sf-datepicker-another-month:not(:disabled):not(.active):not(.disabled):not(.sf-datepicker-day-selected)`: `1` | `opacity` |
| `--sf-datepicker-context--background-color` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-context`: `var(--sf-datepicker--background-color, var(--sf-elevation-3--surface))` | `background` |
| `--sf-datepicker-day--background-color` | не задана; задают модификаторы, например `.sf-datepicker-day`: `var(--sf-transparent)` | `background-color` |
| `--sf-datepicker-day--border-end-end-radius` | не задана; задают модификаторы, например `.sf-datepicker-day.sf-datepicker-day-start:not(.sf-datepicker-day.sf-datepicker-day-end)`: `0` | `border-end-end-radius` |
| `--sf-datepicker-day--border-end-start-radius` | не задана; задают модификаторы, например `.sf-datepicker-day.sf-datepicker-day-end:not(.sf-datepicker-day.sf-datepicker-day-start)`: `0` | `border-end-start-radius` |
| `--sf-datepicker-day--border-start-end-radius` | не задана; задают модификаторы, например `.sf-datepicker-day.sf-datepicker-day-start:not(.sf-datepicker-day.sf-datepicker-day-end)`: `0` | `border-start-end-radius` |
| `--sf-datepicker-day--border-start-start-radius` | не задана; задают модификаторы, например `.sf-datepicker-day.sf-datepicker-day-end:not(.sf-datepicker-day.sf-datepicker-day-start)`: `0` | `border-start-start-radius` |
| `--sf-datepicker-day-date--color` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-date`: `var(--sf-on-surface)` | `color` |
| `--sf-datepicker-day-date--font-family` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-date`: `var(--sf-text--family)` | `font-family` |
| `--sf-datepicker-day-date--font-size` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-date`: `var(--sf-text--size)` | `font-size` |
| `--sf-datepicker-day-date--font-weight` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-date`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-datepicker-day-date--line-height` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-date`: `var(--sf-text--height)` | `line-height`, `top`, `inset-block` |
| `--sf-datepicker-day-info--color` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-info`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-datepicker-day-info--font-family` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-info`: `var(--sf-text--family)` | `font-family` |
| `--sf-datepicker-day-info--font-size` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-info`: `var(--sf-text-size-1/4)` | `font-size` |
| `--sf-datepicker-day-info--font-weight` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-info`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-datepicker-day-info--line-height` | не задана; задают модификаторы, например `.sf-datepicker-day .sf-datepicker-day-info`: `var(--sf-text-height-1/4)` | `line-height` |
| `--sf-datepicker-main--background-color` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-main`: `var(--sf-transparent)` | `background-color` |
| `--sf-datepicker-presets--inline-size` | не задана; задают модификаторы, например `.sf-datepicker.sf-datepicker--presets`: `calc(var(--sf-ui-1--control-height) * 5)` | `width`, `inline-size`, `flex` |
| `--sf-datepicker-row--background-color` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-row`: `var(--sf-transparent)` | `background-color` |
| `--sf-datepicker-text--background-color` | не задана; задают модификаторы, например `.sf-datepicker-text`: `var(--sf-surface-0)` | `background-color` |
| `--sf-datepicker-text--border-end-end-radius` | не задана; задают модификаторы, например `.sf-datepicker-text.sf-datepicker-text-start`: `var(--sf-radius-square)` | `border-end-end-radius` |
| `--sf-datepicker-text--border-end-start-radius` | не задана; задают модификаторы, например `.sf-datepicker-text.sf-datepicker-text-end`: `var(--sf-radius-square)` | `border-end-start-radius` |
| `--sf-datepicker-text--border-start-end-radius` | не задана; задают модификаторы, например `.sf-datepicker-text.sf-datepicker-text-start`: `var(--sf-radius-square)` | `border-start-end-radius` |
| `--sf-datepicker-text--border-start-start-radius` | не задана; задают модификаторы, например `.sf-datepicker-text.sf-datepicker-text-end`: `var(--sf-radius-square)` | `border-start-start-radius` |
| `--sf-datepicker-text--color` | не задана; задают модификаторы, например `.sf-datepicker-text`: `var(--sf-on-surface)` | `color` |
| `--sf-datepicker-top--background-color` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-top`: `var(--sf-elevation-3--surface)` | `background-color` |
| `--sf-datepicker-top--padding-bottom` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-top`: `var(--sf-space-1)` | `padding-bottom` |
| `--sf-datepicker-top--padding-inline-end` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-top`: `var(--sf-space-1/3)` | `padding-inline-end` |
| `--sf-datepicker-top--padding-inline-start` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-top`: `var(--sf-space-1/3)` | `padding-inline-start` |
| `--sf-datepicker-top--padding-top` | не задана; задают модификаторы, например `.sf-datepicker .sf-datepicker-top`: `var(--sf-space-1)` | `padding-top` |

## См. также

- [Календарь — Smart-компонент](/ru/smart-components/forms/datepicker/)
