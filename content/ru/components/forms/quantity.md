---
title: "Количество"
description: "Вводит число напрямую или меняет его кнопками на заданный шаг."
profile: reference
---

# Количество

Поле количества принимает число с клавиатуры или меняет его кнопками «минус» и
«плюс» на заданный шаг. Подходит для количества товаров, мест, участников и
других ограниченных числовых величин; для произвольного текста берите
[текстовое поле](/ru/components/forms/inputs/).

## Пример

:::example {id="components/quantity/overview" label="Поле количества мест"}
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
  кнопки с иконкой (`sf-icon-button`) с `type="button"` и собственным
  `aria-label`.
- `<input type="text">` с `inputmode="numeric"` или `"decimal"` хранит значение
  и `name`; `min`, `max` и `step` задают диапазон и шаг. Тип `text` выбран
  потому, что поле показывает число в формате языка страницы.

## Варианты

### Размер

Три ступени — `sf-quantity--size-1/2`, `sf-quantity--size-1` и
`sf-quantity--size-2`, как у текстового поля. Размер меняет подпись, поле и
кнопки вместе.

:::example {id="components/quantity/sizes" label="Размеры поля количества"}
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

:::example {id="components/quantity/state-boundary" label="Значение на нижней и на верхней границе"}
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

Класс `error` на оболочке окрашивает рамку и кнопки цветом ошибки. Своего узла
для сообщения у компонента нет: добавьте текст ошибки под полем и свяжите его с
input через `aria-describedby`, сам input получает `aria-invalid="true"`.

:::example {id="components/quantity/state-error" label="Поле с ошибкой"}
:::

### Фокус

При переходе клавишей Tab рамка поля или кнопка получает кольцо фокуса по
`:focus-visible`. При нажатии мышью скрипт ставит оболочке
`sf-quantity--pointer-focus`, и кольцо не рисуется. В примере фокус показан
классом `focus-visible` на input.

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
`incrementIcon`. Класс по умолчанию делает поле обязательным, ставит подпись
`Label` и английские подписи кнопок: задавайте их явно.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-quantity` |
| Части | `sf-quantity-count`, `sf-quantity-label`, `sf-quantity-required`, `sf-quantity-text`, `sf-quantity-wrap` |
| Модификаторы | `sf-quantity--pointer-focus` |
| Размеры | `sf-quantity--size-1`, `sf-quantity--size-1/2`, `sf-quantity--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-quantity`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-quantity-input--background-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap input`: `transparent` | `background-color` |
| `--sf-quantity-input--color` | не задана; задают модификаторы, например `.sf-quantity input`: `var(--sf-on-surface)` | `color` |
| `--sf-quantity-input--font-family` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-input--font-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-quantity-input--font-weight` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-quantity-input--line-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-quantity-input--padding-inline-end` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-end` |
| `--sf-quantity-input--padding-inline-start` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start` |
| `--sf-quantity-label--background-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-label`: `transparent` | `background-color` |
| `--sf-quantity-label--gap` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-label`: `var(--sf-space-1/4)` | `gap` |
| `--sf-quantity-placeholder--color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-quantity-placeholder--font-family` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-placeholder--font-size` | не задана; задают модификаторы, например `.sf-quantity--size-1 .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-quantity-placeholder--line-height` | не задана; задают модификаторы, например `.sf-quantity--size-1 .sf-quantity-wrap input::-webkit-input-placeholder`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-quantity-required--color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-required`: `var(--sf-error)` | `color` |
| `--sf-quantity-required--font-family` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-required`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-required--font-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-required`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-quantity-required--font-weight` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-required`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-quantity-required--line-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-required`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-quantity-text--color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-quantity-text--font-family` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-quantity-text--font-size` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-text`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-quantity-text--font-weight` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-quantity-text--line-height` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-text`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-quantity-wrap--background-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-surface-0)` | `background-color` |
| `--sf-quantity-wrap--border` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-quantity-wrap--border-color` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-outline)` | `border-color` |
| `--sf-quantity-wrap--border-end-end-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-radius--ui)` | `border-end-end-radius` |
| `--sf-quantity-wrap--border-end-start-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-radius--ui)` | `border-end-start-radius` |
| `--sf-quantity-wrap--border-start-end-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-radius--ui)` | `border-start-end-radius` |
| `--sf-quantity-wrap--border-start-start-radius` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-radius--ui)` | `border-start-start-radius` |
| `--sf-quantity-wrap--box-shadow` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--pointer-focus .sf-quantity-wrap`: `none` | `box-shadow` |
| `--sf-quantity-wrap--gap` | не задана; задают модификаторы, например `.sf-quantity .sf-quantity-wrap`: `var(--sf-space-2)` | `gap` |
| `--sf-quantity-wrap--padding-bottom` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-bottom` |
| `--sf-quantity-wrap--padding-inline-end` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-ui-1--space-x)` | `padding-inline-end` |
| `--sf-quantity-wrap--padding-inline-start` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-ui-1--space-x)` | `padding-inline-start` |
| `--sf-quantity-wrap--padding-top` | не задана; задают модификаторы, например `.sf-quantity.sf-quantity--size-1 .sf-quantity-wrap`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-top` |

## См. также

- [Текстовые поля](/ru/components/forms/inputs/)
- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
