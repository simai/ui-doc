---
title: "Количество"
description: "Вводит число напрямую или меняет его кнопками на заданный шаг."
profile: reference
---

# Количество

:badge[sf-quantity]{variant=outline scheme=on-surface size=1/2} :badge[1.9.2]{variant=outline scheme=on-surface size=1/2}

Поле количества принимает число с клавиатуры или меняет его кнопками «минус» и
«плюс» на заданный шаг. Подходит для количества товаров, мест, участников и
других ограниченных числовых величин; для произвольного текста берите
[текстовое поле](/ru/components/forms/inputs/).
Простое числовое поле без кнопок, с единицей в поле, рисуют классы
`sf-quantity--steppers-none` (строка `sf-quantity-row`, единица
`sf-quantity-unit` после числа); собирает такое поле
[смарт-поле количества](/ru/smart/forms/quantity/) (`steppers="none"`). Там
же режим строки корзины `removable`: на нижней границе вместо «−» стоит
корзина, а страница предлагает «Вернуть».

## Пример

:::example {id="components/quantity/overview" label="Поле количества мест" preview=sandbox log="change" log_console=true log_open=false}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-quantity` → подпись `sf-quantity-label` и `sf-quantity-wrap` с
кнопкой уменьшения, нативным `<input>` и кнопкой увеличения.

- Оболочка — `<label class="sf-quantity">` с классом размера и утилитами
  `flex flex-col`. Скрипт компонента находит поля по `.sf-quantity`.
- Подпись — `sf-quantity-text` внутри `sf-quantity-label`; звёздочка
  `sf-quantity-required` отмечает обязательное поле. Скрипт связывает подпись с
  полем через `aria-labelledby`.
- Две кнопки `sf-quantity-count` — первая уменьшает, вторая увеличивает. Это
  тихие нейтральные кнопки с иконкой без подложки: `sf-icon-button--icon
  sf-icon-button--ghost sf-icon-button--on-surface
  sf-icon-button--on-surface-variant`, с `type="button"` и собственным
  `aria-label`. Подложка появляется только под указателем. Размер кнопок
  задаёт `sf-quantity`: они на ступень ниже поля, какой бы класс размера ни
  стоял в разметке.
- `<input type="text">` с `inputmode="numeric"` или `"decimal"` хранит значение
  и `name`; `min`, `max` и `step` задают диапазон и шаг. Тип `text` выбран
  потому, что поле показывает число в формате языка страницы.

## Варианты

### Размер

`sf-quantity--size-1/3`, `sf-quantity--size-1/2`, `sf-quantity--size-1`, `sf-quantity--size-2`, `sf-quantity--size-3` • [справочник](#классы)

Пять ступеней, как у текстового поля: на компьютере 28, 32, 40, 48 и 56 px.
Высота поля совпадает с текстовым полем той же ступени; размер меняет
подпись, поле и кнопки вместе.

:::example {id="components/quantity/sizes" label="Размеры поля количества"}
:::

### Вид

`sf-quantity--filled` • [справочник](#классы)

По умолчанию поле отделено тонкой границей. `sf-quantity--filled` отделяет
его тональной поверхностью без рамки, с линией снизу — как
`sf-input--filled`: для плотных форм и панелей. Под указателем заливка
темнеет на шаг, пока в поле печатают, оно получает обычную границу, у
ошибки и недоступного поля — свои заливки. В одной форме держите один вид.

:::example {id="components/quantity/variants" label="Поле с границей и с заливкой"}
:::

### Границы и шаг

`min`, `max` и `step` на input задают диапазон и шаг кнопок. Кнопка
становится недоступной, когда значение дошло до своей границы. Введённое
вручную значение при потере фокуса ограничивается диапазоном, но не
округляется до шага. Пустое поле остаётся пустым. Число знаков после
разделителя по умолчанию берётся из `step`.

:::example {id="components/quantity/bounds" label="Целый и дробный шаг"}
:::

### Формат числа

Поле показывает число в формате языка страницы. `data-locale` задаёт другую
локаль в формате `Intl.NumberFormat`, `data-precision` — число знаков после
разделителя, `data-grouping="false"` выключает группировку разрядов.

:::example {id="components/quantity/formatting" label="Русский и английский формат"}
:::

### Режим ввода

По умолчанию поле убирает из ввода всё, что не может быть числом.
`data-input-mode="strict"` не даёт напечатать или вставить недопустимый символ.
`data-allow-negative="true"` разрешает минус, `data-allow-decimal="true"` —
дробную часть; без него дробная часть разрешена, когда точность больше нуля.
`data-mask="true"` подключает числовую маску Framework: она держит значение в
границах `min` и `max` и с нужным числом знаков, но разряды не группирует.

:::example {id="components/quantity/input-modes" label="Строгий ввод и числовая маска"}
:::

## Состояния

Состояния задают нативные атрибуты input; класс на оболочке нужен только
ошибке. Доступность кнопок скрипт выставляет сам по состоянию input и
значению. Наведение компонент показывает сам.

### На границе

Когда значение равно `min`, недоступна кнопка уменьшения; когда равно `max` —
кнопка увеличения.

:::example {id="components/quantity/state-boundary" label="На границе"}
:::

### Только чтение

Нативный `readonly` оставляет значение в порядке фокуса и доступным для
копирования, обе кнопки становятся недоступными.

:::example {id="components/quantity/state-readonly" label="Поле только для чтения"}
:::

### Недоступно

Нативный `disabled` приглушает всё поле и отключает обе кнопки; значение не
отправляется с формой.

:::example {id="components/quantity/state-disabled" label="Недоступное поле"}
:::

### Ошибка

Класс `error` на оболочке окрашивает рамку цветом ошибки; кнопки «минус» и
«плюс» остаются своего цвета. Текст ошибки кладите в строку под полем
`sf-quantity-hint-text-wrap` с `data-field-message="error"`: она красится
цветом ошибки, а скрипт сам отмечает input `aria-invalid="true"` и связывает
с ним сообщение (`aria-describedby` и `aria-errormessage`). Без ошибки та же
строка — постоянное пояснение под полем.

:::example {id="components/quantity/state-error" label="Поле с ошибкой"}
:::

### Фокус

`sf-quantity--pointer-focus` • [справочник](#классы)

При переходе клавишей Tab рамка поля или кнопка получает кольцо фокуса по
`:focus-visible`. При нажатии мышью скрипт ставит оболочке
`sf-quantity--pointer-focus`, и кольцо не рисуется. Перейдите в поле примера
клавишей Tab.

:::example {id="components/quantity/state-focus" label="Поле в фокусе"}
:::

## Доступность

- Видимая подпись называет поле, а каждая кнопка получает свой `aria-label`,
  который говорит, что она меняет: «Уменьшить количество мест».
- Кнопки и поле стоят в порядке фокуса; значение меняется вводом с клавиатуры
  или нажатием кнопки пробелом и Enter.
- Недоступную на границе кнопку экранный диктор объявляет недоступной; границы
  диапазона назовите в подписи или подсказке.
- Ошибку сообщайте текстом: одного цвета недостаточно. Серверная проверка
  значения остаётся задачей приложения.
- В режиме принудительных цветов кольцо фокуса рисуется системным цветом.

## JavaScript

Нажатие кнопки меняет значение на шаг и создаёт на input всплывающее событие
`change`; ввод с клавиатуры создаёт обычные `input` и `change`. Внутри формы
сброс возвращает начальное значение input; отменённый обработчиком reset
значение не меняет.

:::example {id="components/quantity/reset" label="Сброс формы"}
:::

```js
document.querySelector('input[name="places"]').addEventListener('change', (event) => {
  updateTotal(event.target.value);
});
```

Компонент регистрирует класс `Quantity`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Quantity', callback)` передаёт
класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Quantity', (Quantity) => {
  const field = new Quantity({
    param: {label: 'Количество мест', name: 'places', value: 2, min: 1, max: 10, required: false,
      decrementLabel: 'Уменьшить количество мест', incrementLabel: 'Увеличить количество мест'},
  });
  document.querySelector('#order').append(field.render());
}));
```

Параметры: `label`, `name`, `value`, `placeholder`, `size` (`1/2`, `1`, `2`),
`min`, `max`, `step`, `precision`, `grouping`, `locale`, `inputMode` (`soft`
или `strict`), `allowNegative`, `allowDecimal`, `mask`, `required`,
`disabled`, `readonly`, `decrementLabel`, `incrementLabel`, `decrementIcon`,
`incrementIcon`. Без параметров поле не обязательное и без подписи: задайте
`label`, а `required` — когда значение нужно. Кнопки называются «Уменьшить
значение» и «Увеличить значение» на языке страницы; `decrementLabel` и
`incrementLabel` уточняют, что меняется.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-quantity` |
| Части | `sf-quantity-count`, `sf-quantity-hint-text-wrap`, `sf-quantity-inherited`, `sf-quantity-label`, `sf-quantity-required`, `sf-quantity-row`, `sf-quantity-text`, `sf-quantity-unit`, `sf-quantity-wrap` |
| Модификаторы | `sf-quantity--filled`, `sf-quantity--pointer-focus`, `sf-quantity--steppers-none` |
| Размеры | `sf-quantity--size-1`, `sf-quantity--size-1/2`, `sf-quantity--size-1/3`, `sf-quantity--size-2`, `sf-quantity--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-quantity`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-quantity-background-color` | Заливка поля в покое; у ошибки своя. | `var(--sf-transparent)` |
| `--sf-quantity-border-color` | Рамка поля в покое; у наведения, нажатия, ошибки и недоступного поля своя. | `var(--sf-outline)` |
| `--sf-quantity-border-width` | Толщина рамки поля со всех сторон. | `var(--sf-px)` |
| `--sf-quantity-radius` | Скругление углов поля. | `var(--sf-radius--ui)` |
| `--sf-quantity-color` | Цвет числа в поле; у недоступного поля свой. | `var(--sf-on-surface)` |
| `--sf-quantity-padding-inline` | Отступ внутри поля перед «−» и после «+»: по умолчанию равен зазору кнопок сверху и снизу, поэтому они стоят на одном расстоянии от всех краёв. | `calc((var(--sf-ui-1--control-height) - var(--sf-ui-1\/2--control-height)) / 2 - var(--sf-px))`; зависит от размера |
| `--sf-quantity-padding-block` | Внутренний отступ поля над и под содержимым. | `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))`; зависит от размера |
| `--sf-quantity-gap` | Промежуток между кнопками и числом. Значение классового компонента; у sf-input-quantity — 0, кнопки стоят вплотную к числу. | `var(--sf-space-2)` |
| `--sf-quantity-stepper-radius` | Скругление углов кнопок «−» и «+». | `var(--sf-radius-1\/2)` |
| `--sf-quantity-invalid-border-color` | Рамка поля при ошибке. | `var(--sf-error)` |

```css
.sf-quantity {
  --sf-quantity-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-quantity`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-quantity--inset` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--steppers-none.sf-quantity--size-1/3`: `max(var(--sf-space-1/2), var(--sf-b2))` | `--sf-quantity--value-inset` |
| `--sf-quantity--line-radius` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--steppers-none.sf-quantity--size-1/3`: `min(var(--sf-quantity-radius, var(--sf-radius--ui)), var(--sf-ui-1/3--control-height) / 2)` | `--sf-quantity--value-inset` |
| `--sf-quantity--number-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1`: `calc(var(--sf-ui-1--control-height) - 2 * var(--sf-space-1/4))` | `--sf-quantity-wrap--padding-inline-end`, `--sf-quantity-wrap--padding-inline-start`, `--sf-icon-button--padding-bottom`, `--sf-icon-button--padding-inline-end`, `--sf-icon-button--padding-inline-start`, `--sf-icon-button--padding-top`, `height`, `block-size` |
| `--sf-quantity--place-variant` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--filled`: `var(--sf-place--fill-placeholder, var(--sf-on-surface-variant))` | `--sf-quantity-placeholder--color` |
| `--sf-quantity--value-inset` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--steppers-none.sf-quantity--size-1/3 .sf-quantity-row > .sf-quantity-wrap`: `calc(var(--sf-quantity--inset) + max(calc(var(--sf-px) * 0), var(--sf-quantity--line-radius) - var(--sf-radius-1/2)) / 2)` | `--sf-quantity-wrap--padding-inline-start`, `--sf-quantity-wrap--padding-inline-end` |
| `--sf-quantity-hint-text-wrap--color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-hint-text-wrap`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-quantity-hint-text-wrap--font-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-hint-text-wrap`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-quantity-hint-text-wrap--line-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-hint-text-wrap`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-quantity-input--background-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap input`: `transparent` | `background-color` |
| `--sf-quantity-input--color` | не задана; задают модификаторы, например `.sf-quantity input`: `var(--sf-quantity-color, var(--sf-on-surface))` | `color` |
| `--sf-quantity-input--font-family` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-input--font-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-quantity-input--font-weight` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-quantity-input--line-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-quantity-input--padding-inline-end` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-end`, `width`, `inline-size` |
| `--sf-quantity-input--padding-inline-start` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start`, `width`, `inline-size` |
| `--sf-quantity-label--background-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-label`: `transparent` | `background-color` |
| `--sf-quantity-label--gap` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-label`: `var(--sf-space-1/4)` | `gap` |
| `--sf-quantity-placeholder--color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-quantity-placeholder--font-family` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-placeholder--font-size` | не задана; задают модификаторы, например `.sf-quantity--size-1 .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-quantity-placeholder--line-height` | не задана; задают модификаторы, например `.sf-quantity--size-1 .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-quantity-required--color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-required`: `var(--sf-on-surface)` | `color` |
| `--sf-quantity-required--font-family` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-required`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-required--font-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-required`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-quantity-required--font-weight` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-required`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-quantity-required--line-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-required`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-quantity-text--color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-text`: `var(--sf-on-surface)` | `color` |
| `--sf-quantity-text--font-family` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-text--font-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-text`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-quantity-text--font-weight` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-quantity-text--line-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-text`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-quantity-wrap--background-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-background-color, var(--sf-transparent))` | `background-color` |
| `--sf-quantity-wrap--block-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-ui-1--control-height)` | `height`, `block-size` |
| `--sf-quantity-wrap--border` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-border-width, var(--sf-px)) solid` | `border`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius`, `border-color`, `border-bottom-color`, `border-block-end-color`, `--sf-quantity-wrap--line-color` |
| `--sf-quantity-wrap--border-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-border-color, var(--sf-outline))` | `border-color`, `border-bottom-color`, `border-block-end-color`, `--sf-quantity-wrap--line-color` |
| `--sf-quantity-wrap--border-end-end-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-radius, var(--sf-radius--ui))` | `border-end-end-radius` |
| `--sf-quantity-wrap--border-end-start-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-radius, var(--sf-radius--ui))` | `border-end-start-radius` |
| `--sf-quantity-wrap--border-start-end-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-radius, var(--sf-radius--ui))` | `border-start-end-radius` |
| `--sf-quantity-wrap--border-start-start-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-radius, var(--sf-radius--ui))` | `border-start-start-radius` |
| `--sf-quantity-wrap--box-shadow` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--pointer-focus .sf-quantity-wrap`: `none` | `box-shadow` |
| `--sf-quantity-wrap--gap` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-quantity-gap, var(--sf-space-2))` | `gap` |
| `--sf-quantity-wrap--line-color` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--filled:not(.error):has(input:enabled:not(:-moz-read-only)) .sf-quantity-wrap`: `var(--sf-quantity-border-color, var(--sf-outline))` | `border-bottom-color`, `border-block-end-color` |
| `--sf-quantity-wrap--padding-bottom` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-quantity-padding-block, calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px)))` | `padding-bottom` |
| `--sf-quantity-wrap--padding-inline-end` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-quantity-padding-inline, calc((var(--sf-ui-1--control-height) - var(--sf-quantity--number-height)) / 2 - var(--sf-px)))` | `padding-inline-end`, `inset-inline-end` |
| `--sf-quantity-wrap--padding-inline-start` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-quantity-padding-inline, calc((var(--sf-ui-1--control-height) - var(--sf-quantity--number-height)) / 2 - var(--sf-px)))` | `padding-inline-start`, `top`, `bottom`, `inset-block`, `inset-inline-start` |
| `--sf-quantity-wrap--padding-top` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-quantity-padding-block, calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px)))` | `padding-top` |

## См. также

- [Текстовые поля](/ru/components/forms/inputs/)
- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
