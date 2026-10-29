---
title: "Код страны"
description: "Принимает номер телефона с кодом, флагом и маской выбранной страны."
profile: reference
---

# Код страны

Поле кода страны принимает номер телефона вместе с международным кодом: флаг
показывает страну, список позволяет её сменить, маска форматирует номер по
правилам страны. Для телефона одной заранее известной страны достаточно
[текстового поля](/ru/components/forms/inputs/) с маской.

## Пример

:::example {id="components/country-code/overview" label="Телефон с выбором страны"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-country-code` → подпись `sf-country-code-label`, рамка
`sf-country-code-field` с кнопкой страны `sf-country-code-left` и
`<input type="tel">`, подсказка `sf-country-code-hint`.

- Оболочка — `<label class="sf-country-code">` с классом размера и утилитами
  `flex flex-col`; на ней же настройки в атрибутах `data-*`. Скрипт компонента
  находит поля по `.sf-country-code`.
- `sf-country-code-left` с пустым `sf-country-code-flag-icon` и значком
  `expand_more` — кнопка выбора страны. Флаг скрипт рисует сам, а кнопке ставит
  роль `button` и доступное имя.
- Нативный `<input type="tel">` хранит номер вместе с кодом, `name` и
  `required` и участвует в `FormData`, проверке и сбросе формы. Код страны в
  начале значения скрипт держит на месте при вводе.
- Список стран `sf-country-code-list` скрипт строит сам из справочника на 243
  страны; названия берутся на языке `data-locale` или на языке страницы.
- `data-iso2` задаёт начальную страну (код ISO 3166-1, например `RU`),
  `data-max-items` — сколько стран из справочника показать в списке.

## Варианты

### Выбор страны

`data-multi-country="true"` (по умолчанию) открывает список стран по нажатию
на флаг. `data-multi-country="false"` фиксирует страну из `data-iso2` или
`data-dial-code`: скрипт убирает стрелку, ставит оболочке класс
`sf-country-code--fixed-dial-code`, и флаг перестаёт быть кнопкой. Берите
фиксированную страну, когда номер другой страны принять нельзя.

:::example {id="components/country-code/modes" label="Выбор страны и фиксированная страна"}
:::

### Размер

Три ступени — `sf-country-code--size-1/2`, `sf-country-code--size-1` и
`sf-country-code--size-2`, как у текстового поля. Размер меняет подпись,
рамку, флаг и список вместе.

:::example {id="components/country-code/sizes" label="Размеры поля кода страны"}
:::

### Маска

Без маски номер остаётся таким, как его ввели. `data-use-mask="true"`
форматирует номер по маске выбранной страны; при смене страны маска меняется,
а набранная часть номера сохраняется. `data-mask-style="brackets"` берёт
оператора или город в скобки. Своя маска для всех стран задаётся в
`data-mask-pattern` вместе с `data-use-country-masks="false"`.

:::example {id="components/country-code/masks" label="Без маски, маска страны и маска со скобками"}
:::

### Свой список стран

Чтобы ограничить выбор, положите в оболочку свой список: `sf-country-code-list`
→ `sf-country-code-items` → пункты `sf-country-code-item` с `data-iso2`,
`data-code` и необязательной маской `data-mask-pattern`. Видимый текст пункта
становится его доступным именем. В маске `0` — цифра; цифры кода страны в
маске тоже пишите нулями, как в справочнике: маска заменяет нули цифрами из
значения по порядку. Список ограничивает выбор, но не проверяет номер:
допустимость страны проверяет сервер.

:::example {id="components/country-code/countries" label="Список из двух стран"}
:::

## Состояния

Недоступность и фокус задаёт нативное поле, открытый список — класс `open`,
который скрипт ставит сам. Наведение компонент показывает сам.

### Список открыт

Нажатие на флаг, Enter, пробел или стрелка на кнопке страны открывают список;
оболочка получает класс `open`. Выбор страны, Escape, нажатие вне поля или уход
фокуса закрывают его.

:::example {id="components/country-code/state-open" label="Открытый список стран"}
:::

### Недоступно

Нативный `disabled` на поле приглушает рамку, флаг и текст; скрипт ставит
оболочке класс `disabled` и выключает кнопку страны.

:::example {id="components/country-code/state-disabled" label="Недоступное поле"}
:::

### Фокус

При переходе клавишей Tab рамка получает кольцо фокуса по `:focus-visible`. В
примере фокус показан классом `focus-visible` на поле.

:::example {id="components/country-code/state-focus" label="Поле в фокусе"}
:::

## Доступность

- Кнопка страны — `role="button"` с `aria-haspopup="listbox"`,
  `aria-expanded` и именем «страна: выбранная страна»; список —
  `role="listbox"`, пункты — `role="option"` с `aria-selected`.
- Стрелки, Home и End переводят фокус по списку, набор букв ищет страну по
  названию, Enter или пробел выбирают её, Escape закрывает список и
  возвращает фокус на кнопку.
- Видимая подпись называет поле; скрипт связывает с ним подпись и подсказку.
- Обязательное поле с одним кодом страны браузер считает незаполненным: скрипт
  ставит сообщение проверки, пока в номере нет цифр после кода.
- Звёздочка и стрелка скрыты от вспомогательных технологий.

## JavaScript

Выбор страны меняет значение поля и создаёт на нём всплывающие события
`input` и `change`. Сброс формы возвращает исходные номер и страну и закрывает
список без лишних событий.

:::example {id="components/country-code/form" label="Поле в форме: проверка и сброс"}
:::

`SF.CountryCode.setState(target, state)` меняет поле: `target` — оболочка или
элемент внутри неё. Поля состояния: `value`, `disabled`, `open`, `iso2` или
`dialCode` (выбрать страну). Изменение `value` и страны создаёт `input` и
`change`.

```js
const field = document.querySelector('input[name="phone"]');
SF.CountryCode.setState(field, {iso2: 'KZ'});
```

Компонент регистрирует класс `CountryCode`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('CountryCode', callback)`
передаёт класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('CountryCode', (CountryCode) => {
  const field = new CountryCode({
    param: {label: 'Телефон', name: 'phone', iso2: 'RU', useMask: true, placeholder: ''},
  });
  document.querySelector('#contacts').append(field.render());
}));
```

Параметры: `label`, `name`, `value`, `placeholder`, `hint`, `size` (`1/2`, `1`,
`2`), `required`, `disabled`, `open`, `locale`, `iso2`, `dialCode`,
`multiCountry`, `useMask`, `useCountryMasks`, `maskPattern`, `maskStyle`
(`native` или `brackets`), `showCode`, `maxItems`, `countries` (свой список:
`iso2`, `dialCode`, `maskPattern`, `label`), `flagBase`. Класс по умолчанию
ставит подпись `Label` и российский placeholder: задавайте их явно.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-country-code` |
| Части | `sf-country-code-field`, `sf-country-code-flag`, `sf-country-code-flag-icon`, `sf-country-code-hint`, `sf-country-code-item`, `sf-country-code-items`, `sf-country-code-label`, `sf-country-code-left`, `sf-country-code-list`, `sf-country-code-required`, `sf-country-code-text` |
| Модификаторы | `sf-country-code--fixed-dial-code` |
| Размеры | `sf-country-code--size-1`, `sf-country-code--size-1/2`, `sf-country-code--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-country-code`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-country-code-background-color` | Заливка поля в покое. | `var(--sf-surface-0)` |
| `--sf-country-code-border-color` | Граница поля в покое; у наведения, фокуса, ошибки и выключенного состояния свои. | `var(--sf-outline)` |
| `--sf-country-code-radius` | Скругление углов поля. | `var(--sf-ui-radius-default)` |
| `--sf-country-code-color` | Цвет номера в покое; у выключенного состояния свой. | `var(--sf-on-surface)` |
| `--sf-country-code-list-background-color` | Заливка открытого списка стран. | `var(--sf-elevation-3--surface)` |

```css
.sf-country-code {
  --sf-country-code-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-country-code`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-country-code-field--background-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field`: `var(--sf-country-code-background-color, var(--sf-surface-0))` | `background-color` |
| `--sf-country-code-field--border` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-country-code-field--border-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field`: `var(--sf-country-code-border-color, var(--sf-outline))` | `border-color` |
| `--sf-country-code-field--border-end-end-radius` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field`: `var(--sf-country-code-radius, var(--sf-ui-radius-default))` | `border-end-end-radius` |
| `--sf-country-code-field--border-end-start-radius` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field`: `var(--sf-country-code-radius, var(--sf-ui-radius-default))` | `border-end-start-radius` |
| `--sf-country-code-field--border-start-end-radius` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field`: `var(--sf-country-code-radius, var(--sf-ui-radius-default))` | `border-start-end-radius` |
| `--sf-country-code-field--border-start-start-radius` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field`: `var(--sf-country-code-radius, var(--sf-ui-radius-default))` | `border-start-start-radius` |
| `--sf-country-code-field--padding-bottom` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-field`: `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))` | `padding-bottom` |
| `--sf-country-code-field--padding-inline-end` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-field`: `var(--sf-ui-1--space-x)` | `padding-inline-end` |
| `--sf-country-code-field--padding-inline-start` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-field`: `var(--sf-ui-1--space-x)` | `padding-inline-start` |
| `--sf-country-code-field--padding-top` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-field`: `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))` | `padding-top` |
| `--sf-country-code-flag--background-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-flag`: `transparent` | `background-color` |
| `--sf-country-code-flag--font-size` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-flag`: `var(--sf-text-size-3)` | `font-size` |
| `--sf-country-code-flag--height` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-flag`: `var(--sf-text-height-1/3)` | `height` |
| `--sf-country-code-flag--width` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-flag`: `var(--sf-text-size-3)` | `width` |
| `--sf-country-code-flag-icon--background-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-flag-icon`: `transparent` | `background-color` |
| `--sf-country-code-flag-icon--font-size` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-flag-icon`: `var(--sf-text-size-6)` | `font-size` |
| `--sf-country-code-flag-icon--height` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-flag-icon`: `calc(var(--sf-text-height-1) * 3 / 4)` | `height` |
| `--sf-country-code-flag-icon--opacity` | не задана; задают модификаторы, например `.sf-country-code[:has(input:disabled)] .sf-country-code-flag-icon`: `var(--sf-opacity-60)` | `opacity` |
| `--sf-country-code-flag-icon--width` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-flag-icon`: `calc(var(--sf-text-height-1) * 3 / 4 * 1.4)` | `width` |
| `--sf-country-code-hint--color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-hint`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-country-code-hint--font-family` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-hint`: `var(--sf-text--family)` | `font-family` |
| `--sf-country-code-hint--font-size` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-hint`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-country-code-hint--font-weight` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-hint`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-country-code-hint--line-height` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-hint`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-country-code-input--background-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field input`: `transparent` | `background-color` |
| `--sf-country-code-input--color` | не задана; задают модификаторы, например `.sf-country-code input`: `var(--sf-country-code-color, var(--sf-on-surface))` | `color` |
| `--sf-country-code-input--font-family` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 input`: `var(--sf-text--family)` | `font-family` |
| `--sf-country-code-input--font-size` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 input`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-country-code-input--font-weight` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 input`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-country-code-input--line-height` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 input`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-country-code-input--padding-inline-end` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-end` |
| `--sf-country-code-input--padding-inline-start` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start` |
| `--sf-country-code-item--background-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-item`: `transparent` | `background-color` |
| `--sf-country-code-item--color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-item`: `var(--sf-on-surface)` | `color` |
| `--sf-country-code-item--font-family` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-text--family)` | `font-family` |
| `--sf-country-code-item--font-size` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-country-code-item--font-weight` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-country-code-item--gap` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-item`: `var(--sf-space-1/3)` | `gap` |
| `--sf-country-code-item--line-height` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-country-code-item--padding-bottom` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-ui-1/2--space-y)` | `padding-bottom` |
| `--sf-country-code-item--padding-inline-end` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-ui-1/2--space-y)` | `padding-inline-end` |
| `--sf-country-code-item--padding-inline-start` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-ui-1/2--space-y)` | `padding-inline-start` |
| `--sf-country-code-item--padding-top` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-item`: `var(--sf-ui-1/2--space-y)` | `padding-top` |
| `--sf-country-code-label--background-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-label`: `transparent` | `background-color` |
| `--sf-country-code-label--gap` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-label`: `var(--sf-space-1/4)` | `gap` |
| `--sf-country-code-left--background-color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-left`: `transparent` | `background-color` |
| `--sf-country-code-list--background-color` | не задана; задают модификаторы, например `.sf-country-code.open .sf-country-code-list`: `var(--sf-country-code-list-background-color, var(--sf-elevation-3--surface))` | `background-color` |
| `--sf-country-code-list--box-shadow` | не задана; задают модификаторы, например `.sf-country-code.open .sf-country-code-list`: `var(--sf-elevation-3--shadow)` | `box-shadow` |
| `--sf-country-code-list--padding-bottom` | не задана; задают модификаторы, например `.sf-country-code.open .sf-country-code-list`: `var(--sf-space-1/3)` | `padding-bottom` |
| `--sf-country-code-list--padding-inline-end` | не задана; задают модификаторы, например `.sf-country-code.open .sf-country-code-list`: `var(--sf-space-1/3)` | `padding-inline-end`, `--sf-country-code-item--padding-inline-end` |
| `--sf-country-code-list--padding-inline-start` | не задана; задают модификаторы, например `.sf-country-code.open .sf-country-code-list`: `var(--sf-space-1/3)` | `padding-inline-start`, `--sf-country-code-item--padding-inline-start` |
| `--sf-country-code-list--padding-top` | не задана; задают модификаторы, например `.sf-country-code.open .sf-country-code-list`: `var(--sf-space-1/3)` | `padding-top` |
| `--sf-country-code-placeholder--color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field input::-webkit-input-placeholder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-country-code-placeholder--font-family` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-field input::-webkit-input-placeholder`: `var(--sf-text--family)` | `font-family` |
| `--sf-country-code-placeholder--font-size` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-field input::-webkit-input-placeholder`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-country-code-placeholder--line-height` | не задана; задают модификаторы, например `.sf-country-code--size-1 .sf-country-code-field input::-webkit-input-placeholder`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-country-code-required--color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-required`: `var(--sf-error)` | `color` |
| `--sf-country-code-required--font-family` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-required`: `var(--sf-text--family)` | `font-family` |
| `--sf-country-code-required--font-size` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-required`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-country-code-required--font-weight` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-required`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-country-code-required--line-height` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-required`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-country-code-text--color` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-country-code-text--font-family` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-country-code-text--font-size` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-text`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-country-code-text--font-weight` | не задана; задают модификаторы, например `.sf-country-code .sf-country-code-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-country-code-text--line-height` | не задана; задают модификаторы, например `.sf-country-code.sf-country-code--size-1 .sf-country-code-text`: `var(--sf-text-height-1/2)` | `line-height` |

## См. также

- [Текстовые поля](/ru/components/forms/inputs/)
- [Флаг](/ru/components/content/flag/)
- [Country Code — Smart-компонент](/ru/smart-components/forms/country-code/)
