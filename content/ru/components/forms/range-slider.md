---
title: "Слайдер диапазона"
description: "Выбирает одно значение или две границы на шкале с известными пределами."
profile: reference
---

# Слайдер диапазона

:badge[sf-range-slider]{variant=outline scheme=on-surface size=1/2} :badge[1.9.1]{variant=outline scheme=on-surface size=1/2}

Слайдер диапазона выбирает одно значение или две границы перетаскиванием ручки
по шкале. Подходит для приблизительной настройки цены, громкости или
расстояния с известными пределами; когда важно точное число, добавьте рядом
[поле количества](/ru/components/forms/quantity/) или
[текстовое поле](/ru/components/forms/inputs/).

## Пример

:::example {id="components/range-slider/overview" label="Слайдер громкости" preview=sandbox log="sf-range-slider-start sf-range-slider-end sf-range-slider-change change" log_console=true log_open=false}
:::

## Разметка

Минимальную разметку показывает пример выше: пустой
`<div class="sf-range-slider">` с настройками в атрибутах `data-*` и
доступным именем. Шкалу, заполнение и ручки строит скрипт компонента; он
находит слайдеры по `.sf-range-slider`.

- `data-min` и `data-max` — пределы шкалы (по умолчанию 0 и 100),
  `data-start` — начальное значение, для двух ручек — два числа через запятую.
- `data-step` — шаг; без него значение меняется непрерывно.
- Доступное имя — `aria-label` или `aria-labelledby` на блоке; скрипт
  переносит его на ручки. Для двух ручек задайте `data-lower-label` и
  `data-upper-label`.
- Текущее значение скрипт пишет в `data-value` на блоке.
- Направление шкалы берётся при подключении: при письме справа налево минимум
  стоит справа.

## Варианты

### Одно значение или диапазон

Без `data-multiple` у слайдера одна ручка. `data-multiple="true"` с двумя
числами в `data-start` даёт две ручки — нижнюю и верхнюю границу;
`data-margin` задаёт наименьшее расстояние между ними.

:::example {id="components/range-slider/multiple" label="Одна и две ручки"}
:::

### Подпись значения

Как у любого поля, над слайдером стоит видимое название, а текущее значение —
в конце строки названия: «от 5 000 – 20 000 ₽». Обёртка поля —
`sf-range-slider-group` со строкой `sf-range-slider-head`, в ней название
`sf-range-slider-name` и значение `sf-range-slider-output`; так её рисует
[смарт-слайдер](/ru/smart/forms/range-slider/). Атрибут `data-labelledby`
связывает ручки с этим названием. `data-prefix` и
`data-suffix` добавляют к значению единицы.

`data-label` выбирает, как ручка показывает значение во время работы: `none`
(по умолчанию) — без подписи, `tooltip` — подсказкой над ручкой, только пока
ручку тянут или она в фокусе с клавиатуры. `text` — постоянная подпись под
ручкой — остаётся для совместимости. Подписи не выходят за шкалу, а у двух
близких ручек сливаются в одну.

:::example {id="components/range-slider/labels" label="Подпись значения"}
:::

### Положение подписи

`data-tooltip-position` ставит подсказку над ручкой (`top`, по умолчанию)
или под ней (`bottom`).

:::example {id="components/range-slider/label-position" label="Положение подписи"}
:::

### Заполнение шкалы

У одной ручки шкала заполняется от минимума до ручки; `data-connect="upper"`
заполняет её от ручки до максимума — для настроек вида «не меньше». У двух
ручек заполнен отрезок между ними.

:::example {id="components/range-slider/connect" label="Заполнение шкалы"}
:::

### Шаг и точность

`data-step` задаёт шаг, в том числе в экспоненциальной записи (`1e-3`); число
знаков подписи берётся из шага. `data-precision` меняет только видимую
точность: значение в событиях и для вспомогательных технологий остаётся
полным. Число записывается по языку страницы, `data-locale` задаёт другой
язык, а `data-grouping="false"` убирает разделитель тысяч — для года или
кода.

:::example {id="components/range-slider/precision" label="Шаг и точность"}
:::

### Управление с клавиатуры

По умолчанию ручка получает фокус и двигается стрелками на шаг, Home и End —
к краям шкалы, PageUp, PageDown и стрелки с Shift — на крупный шаг: десять
шагов или значение `data-page-step`.
`data-keyboard="false"` убирает ручку из порядка фокуса — только если
приложение даёт другой способ ввести то же значение с клавиатуры, например
поле рядом.

:::example {id="components/range-slider/keyboard" label="Ручка с клавиатурой и без"}
:::

### Отметки шага

`data-ticks="true"` ставит на шкалу точку на каждом шаге — когда шагов не
больше двадцати. Отметки декоративные и скрыты от вспомогательных
технологий.

:::example {id="components/range-slider/ticks" label="Отметки шага"}
:::

## Состояния

Недоступность задаёт атрибут на блоке, фокус и перетаскивание — сам
компонент. Наведение компонент показывает сам.

### Недоступен

Атрибут `disabled` или класс `disabled` на блоке приглушает шкалу и ручки;
ручки получают `aria-disabled="true"` и выходят из порядка фокуса. Скрипт
читает недоступность при подключении: чтобы включить или выключить её позже,
переподключите слайдер через `SF.RangeSlider.unbind` и `SF.RangeSlider.bind`.

:::example {id="components/range-slider/state-disabled" label="Недоступные слайдеры"}
:::

### Только чтение

Атрибут `readonly`, класс `readonly` или `data-readonly="true"` на блоке
оставляет ручки в порядке фокуса, но значение не меняется ни мышью, ни
клавишами; ручки получают `aria-readonly="true"`.

:::example {id="components/range-slider/state-readonly" label="Только чтение"}
:::

### Фокус

При переходе клавишей Tab ручка получает кольцо фокуса по `:focus-visible`.
Ручку строит скрипт, поэтому в примере класс `focus-visible` ставит на неё
небольшой скрипт.

:::example {id="components/range-slider/state-focus" label="Ручка в фокусе"}
:::

## Доступность

- Каждая ручка — `role="slider"` с `aria-valuemin`, `aria-valuemax`,
  `aria-valuenow` и `aria-valuetext` с префиксом и суффиксом. У двух ручек
  границы каждой учитывают соседнюю ручку и `data-margin`.
- Слайдеру нужно доступное имя: `aria-label` или `aria-labelledby` на блоке,
  а у двух ручек — `data-lower-label` и `data-upper-label`.
- Стрелки меняют значение на шаг (при письме справа налево стрелки
  влево-вправо меняются местами), Home и End ставят ручку на границу.
- Слайдер не подходит для точного ввода: дайте рядом поле.
- При `prefers-reduced-motion` ручки двигаются без анимации; в режиме
  принудительных цветов шкала и ручки рисуются системными цветами.

## JavaScript

Слайдер сообщает о движении событиями на блоке; все всплывают. `detail`
содержит `value` (число или массив из двух чисел), `values` (всегда массив),
`handle` (номер ручки) и `component` (блок).

| Событие | Когда |
|:---|:---|
| `sf-range-slider-start` | ручку начали двигать |
| `sf-range-slider-update` | значение меняется во время движения |
| `sf-range-slider-end` | движение закончено |
| `sf-range-slider-set`, `sf-range-slider-change` | значение установлено |
| `change` | значение установил человек; `setValue` его не создаёт |

```js
const slider = document.querySelector('.sf-range-slider');
slider.addEventListener('change', (event) => applyFilter(event.detail.value));
```

`SF.RangeSlider` управляет слайдером из кода:

| Функция | Что делает |
|:---|:---|
| `SF.RangeSlider.getValue(root)` | возвращает значение: число или массив из двух чисел |
| `SF.RangeSlider.setValue(root, value)` | ставит значение: число, массив или строку `"20,80"` |
| `SF.RangeSlider.bind(root)` | подключает слайдер заново, например после `unbind`, и возвращает его |
| `SF.RangeSlider.unbind(root)` | отключает слайдер и очищает его разметку |

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-range-slider` |
| Части | `sf-range-slider-base`, `sf-range-slider-field`, `sf-range-slider-field-box`, `sf-range-slider-field-dash`, `sf-range-slider-field-input`, `sf-range-slider-field-ruler`, `sf-range-slider-field-unit`, `sf-range-slider-field-word`, `sf-range-slider-group`, `sf-range-slider-group--field`, `sf-range-slider-group--size-1`, `sf-range-slider-group--size-1/2`, `sf-range-slider-group--size-2`, `sf-range-slider-handle`, `sf-range-slider-handle--dragging`, `sf-range-slider-handle-lower`, `sf-range-slider-handle-upper`, `sf-range-slider-head`, `sf-range-slider-hint`, `sf-range-slider-label`, `sf-range-slider-labels`, `sf-range-slider-labels--bottom`, `sf-range-slider-labels--merged`, `sf-range-slider-labels--top`, `sf-range-slider-line`, `sf-range-slider-name`, `sf-range-slider-name-unit`, `sf-range-slider-origin`, `sf-range-slider-output`, `sf-range-slider-progress`, `sf-range-slider-progress-line`, `sf-range-slider-scale`, `sf-range-slider-scale-mark`, `sf-range-slider-scale-mark--end`, `sf-range-slider-scale-mark--start`, `sf-range-slider-tick`, `sf-range-slider-ticks`, `sf-range-slider-touch-area`, `sf-range-slider-track`, `sf-range-slider-track-column`, `sf-range-slider-visual` |
| Размеры | `sf-range-slider--size-1`, `sf-range-slider--size-1/2`, `sf-range-slider--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-range-slider`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-range-slider-track-color` | Заливка дорожки вне выбранной части. | `var(--sf-outline)` |
| `--sf-range-slider-fill-color` | Заливка выбранной части дорожки. | `var(--sf-primary)` |
| `--sf-range-slider-handle-color` | Круг ручки в покое; у отключённой — свой. | `var(--sf-primary)` |
| `--sf-range-slider-handle-inner-color` | Середина полой ручки. Не задана — ручка сплошной круг; цвет рисует в ней середину. | `transparent` |
| `--sf-range-slider-value-color` | Цвет значения, показанного текстом или в подсказке. | `var(--sf-on-surface)` |

```css
.sf-range-slider {
  --sf-range-slider-track-color: var(--sf-outline);
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-range-slider`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-range-slider--hit` | не задана; задают модификаторы, например `.sf-range-slider .sf-range-slider-touch-area`: `max(var(--sf-range-slider--row, var(--sf-ui-1--control-height)), var(--sf-ui-2--control-height))` | `top`, `bottom`, `inset-block`, `left`, `right`, `inset-inline` |
| `--sf-range-slider--label-height` | не задана; задают модификаторы, например `.sf-range-slider-group--size-1/2`: `var(--sf-text-height-1/3)` | `line-height`, `height`, `block-size` |
| `--sf-range-slider--label-size` | не задана; задают модификаторы, например `.sf-range-slider-group--size-1/2`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-range-slider--row` | не задана; задают модификаторы, например `.sf-range-slider-group--size-1/2`: `var(--sf-ui-1/2--control-height)` | `min-height`, `min-block-size`, `--sf-range-slider--hit`, `height`, `block-size` |
| `--sf-range-slider--space-x` | не задана; задают модификаторы, например `.sf-range-slider-group--size-1/2`: `var(--sf-ui-1/2--space-x)` | `padding-left`, `padding-right`, `padding-inline` |
| `--sf-range-slider--text-height` | не задана; задают модификаторы, например `.sf-range-slider-group--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-range-slider--text-size` | не задана; задают модификаторы, например `.sf-range-slider-group--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |

## См. также

- [Слайдер диапазона — смарт-компонент](/ru/smart/forms/range-slider/)
