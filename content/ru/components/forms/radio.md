---
title: "Радиокнопки"
description: "Выбирает ровно один вариант из группы взаимоисключающих."
profile: reference
---

# Радиокнопки

Радиокнопки выбирают ровно один вариант из группы, когда все варианты нужно
показать сразу. Для независимых параметров берите
[флажки](/ru/components/forms/checkbox/), для длинного списка — выпадающий
список.

## Пример

:::example {id="components/radio/overview" label="Группа радиокнопок"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-radio-button` → `sf-radio-button-box` с `<input type="radio">` и
`sf-radio-button-mark` → `sf-radio-button-container` с подписью.

- Оболочка — `<label class="sf-radio-button">` с классом размера: она даёт
  доступное имя и кликабельную область. Скрипт компонента находит радиокнопки
  по `label.sf-radio-button`.
- Нативный `<input type="radio">` — источник `name`, `value`, `checked`,
  `disabled`, фокуса и отправки формы. Все кнопки группы получают одинаковый
  `name`. Input лежит прямым потомком `sf-radio-button-box`: CSS скрывает
  только такой input.
- `sf-radio-button-mark` рисует точку выбранной кнопки; он декоративный и
  получает `aria-hidden="true"`.
- Текст — в `sf-radio-button-container`: подпись `sf-radio-button-text` внутри
  `sf-radio-button-top` или прямо в контейнере, пояснение —
  `sf-radio-button-description`.

## Варианты

### Размер

Три ступени — `sf-radio-button--size-1/2`, `sf-radio-button--size-1` и
`sf-radio-button--size-2`, как у полей форм, флажка и переключателя. Размер
меняет индикатор, подпись и пояснение вместе. Берите ступень полей и кнопок той
же формы.

:::example {id="components/radio/sizes" label="Размеры радиокнопки"}
:::

### Состав

Подпись обязательна: она даёт кнопке доступное имя. Пояснение добавляет
`sf-radio-button-description`, значок подсказки — `sf-icon` в
`sf-radio-button-top` рядом с подписью; размер значка следует за размером
кнопки.

:::example {id="components/radio/composition" label="Подпись, пояснение и значок"}
:::

### Положение индикатора

Положение индикатора задаёт порядок частей внутри `<label>`. В начале строки
он подходит обычным формам; в конце — строкам настроек. Для положения в конце
поставьте `sf-radio-button-container` первым и добавьте оболочке
`content-main-between`.

:::example {id="components/radio/position" label="Индикатор в начале и в конце строки"}
:::

### Образцы шрифта

Вид `font` показывает варианты плитками с образцом текста вместо круглых
индикаторов — для выбора начертания или шрифта. Группу оборачивает
`sf-radio-button sf-radio-wrap--type-font` с классом размера; плитки лежат в
`sf-radio-group--font`, каждая — `label.sf-radio-button.sf-radio-button--type-font`
с образцом `sf-radio-text` и input.

- Input каждой плитки скрывается классом `sr-only` и получает `aria-label`:
  образец декоративный и имени не даёт.
- `data-sf-radio-descriptions` на обёртке — JSON-массив пояснений, а
  `data-sf-radio-font-index` на input — номер плитки. По ним скрипт ставит
  `active` на образец выбранной плитки и пишет её пояснение в
  `sf-radio-button-description`.

:::example {id="components/radio/types" label="Обычная радиокнопка и образцы шрифта"}
:::

## Состояния

Все состояния задаёт нативный input; класс на оболочке нужен только ошибке.
Скрипт компонента синхронизирует с input классы `active` и `disabled` на
оболочке. Наведение компонент показывает сам.

### Выбрана

Нативный `checked` заливает рамку основным цветом и ставит точку. Выбор одной
кнопки снимает его с остальных кнопок того же `name`.

:::example {id="components/radio/state-checked" label="Невыбранная и выбранная"}
:::

### Недоступна

Нативный `disabled` приглушает индикатор и текст в любом состоянии выбора;
кнопка не получает фокус и не отправляется с формой.

:::example {id="components/radio/state-disabled" label="Недоступные радиокнопки"}
:::

### Ошибка

Класс `error` на оболочке окрашивает рамку индикатора цветом ошибки. Текст
ошибки кладите в пояснение и связывайте с input через `aria-describedby`, сам
input получает `aria-invalid="true"`.

:::example {id="components/radio/state-error" label="Радиокнопка с ошибкой"}
:::

### Фокус

При переходе клавишей Tab индикатор получает кольцо фокуса по
`:focus-visible`. В примере фокус показан классом `focus-visible` на input,
который CSS компонента читает наравне с `:focus-visible`.

:::example {id="components/radio/state-focus" label="Радиокнопка в фокусе"}
:::

## Доступность

- Группу оборачивайте в `<fieldset>` с `<legend>`: легенда называет общий
  вопрос, как в примере выше.
- Видимая подпись лежит внутри того же `<label>`, что и input.
- Клавиша Tab переводит фокус в группу на выбранную кнопку, стрелки меняют
  выбор внутри группы — это поведение браузера для одного `name`.
- Ошибку сообщайте текстом: одного цвета недостаточно.
- Индикатор в начале строки стоит на логическом начале и зеркалится при письме
  справа налево. В режиме принудительных цветов индикатор рисуется системными
  цветами.

## JavaScript

`SF.Radio.setState(input, state)` меняет поля `checked` и `disabled` нативной
радиокнопки и перерисовывает всю её группу:

```js
const input = document.querySelector('input[name="delivery"][value="download"]');
SF.Radio.setState(input, {checked: true});
```

Функция принимает только `<input type="radio">`; для другого элемента она
возвращает `false`. Событие `change` она не создаёт. Сброс формы скрипт
отслеживает сам.

Компонент регистрирует класс `Radio`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Radio', callback)` передаёт
класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Radio', (Radio) => {
  const option = new Radio({param: {name: 'delivery', value: 'courier', title: 'Курьер', size: '1'}});
  document.querySelector('#delivery').append(option.render());
}));
```

Параметры: `title`, `description`, `help` (имя значка подсказки), `size`
(`1/2`, `1`, `2`), `name`, `value`, `checked`, `disabled`. С `type: 'font'`
класс собирает всю группу образцов: `count` — число плиток, `text` — образец,
`value` и `description` — массивы значений и пояснений, `checked` — номер
выбранной плитки. `attrs` переносятся на input, класс из `attrs.class` — на
оболочку.

## Классы

**`sf-radio-button`**

| Что | Классы |
|:---|:---|
| Блок | `sf-radio-button` |
| Части | `sf-radio-button-box`, `sf-radio-button-container`, `sf-radio-button-description`, `sf-radio-button-mark`, `sf-radio-button-text`, `sf-radio-button-top` |
| Модификаторы | `sf-radio-button--type-font` |
| Размеры | `sf-radio-button--size-1`, `sf-radio-button--size-1/2`, `sf-radio-button--size-2` |

**`sf-radio-wrap`**

| Что | Классы |
|:---|:---|
| Модификаторы | `sf-radio-wrap--type-font` |

**`sf-radio-group`**

| Что | Классы |
|:---|:---|
| Модификаторы | `sf-radio-group--font` |

**`sf-radio-text`**

| Что | Классы |
|:---|:---|
| Блок | `sf-radio-text` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-radio-button`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-radio-button-background-color` | Заливка кольца; у фокуса — своя. | `transparent` |
| `--sf-radio-button-border-color` | Цвет кольца без отметки; у отмеченного, наведения, ошибки и недоступного — свой. | `var(--sf-outline)` |
| `--sf-radio-button-border-width` | Толщина кольца. | `var(--sf-px)` |
| `--sf-radio-button-color` | Цвет подписи в покое; у недоступного — свой. | `var(--sf-on-surface)` |
| `--sf-radio-button-size` | Ширина и высота кольца. | `var(--sf-text-height-1)`; зависит от размера |
| `--sf-radio-button-gap` | Промежуток между кольцом и подписью. | `var(--sf-ui-1--text-space-x)`; зависит от размера |

```css
.sf-radio-button {
  --sf-radio-button-background-color: transparent;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-radio-button`, `.sf-radio-wrap`, `.sf-radio-group`, `.sf-radio-text`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-radio-button--background-color` | не задана; задают модификаторы, например `.sf-radio-wrap--type-font:hover`: `transparent` | `background-color` |
| `--sf-radio-button--gap` | не задана; задают модификаторы, например `.sf-radio-button--size-1/2`: `var(--sf-radio-button-gap, var(--sf-ui-1/2--text-space-x))` | `gap` |
| `--sf-radio-button-box--background-color` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-radio-button-background-color, transparent)` | `background-color` |
| `--sf-radio-button-box--border` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius`, `border-style`, `border-width` |
| `--sf-radio-button-box--border-color` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-radio-button-border-color, var(--sf-outline))` | `border-color` |
| `--sf-radio-button-box--border-end-end-radius` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-radio-button-box--border-end-start-radius` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-radio-button-box--border-start-end-radius` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-radio-button-box--border-start-start-radius` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-radio-button-box--border-style` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `solid` | `border-style` |
| `--sf-radio-button-box--border-width` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-radio-button-border-width, var(--sf-px))` | `border-width` |
| `--sf-radio-button-box--box-shadow` | не задана; задают модификаторы, например `.sf-radio-button[:has(input:not(:disabled):not(.disabled).focus-visible)] .sf-radio-button-box`: `none` | `box-shadow` |
| `--sf-radio-button-box--gap` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-box`: `var(--sf-a0)` | `gap` |
| `--sf-radio-button-box--height` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-box`: `var(--sf-radio-button-size, var(--sf-text-height-1/2))` | `height` |
| `--sf-radio-button-box--width` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-box`: `var(--sf-radio-button-size, var(--sf-text-height-1/2))` | `width` |
| `--sf-radio-button-container--background-color` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-container`: `transparent` | `background-color` |
| `--sf-radio-button-description--color` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-description`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-radio-button-description--font-family` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-description`: `var(--sf-text--family)` | `font-family` |
| `--sf-radio-button-description--font-size` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-description`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-radio-button-description--font-weight` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-description`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-radio-button-description--line-height` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-description`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-radio-button-mark--background-color` | не задана; задают модификаторы, например `.sf-radio-button[:has(input:checked)][:not-has(input:disabled)] .sf-radio-button-mark`: `var(--sf-primary)` | `background-color` |
| `--sf-radio-button-mark--border-radius` | не задана; задают модификаторы, например `.sf-radio-button[:has(input:checked)] .sf-radio-button-mark`: `var(--sf-radius-circle)` | `border-radius` |
| `--sf-radio-button-mark--height` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2[:has(input:checked)] .sf-radio-button-mark`: `var(--sf-b2)` | `height` |
| `--sf-radio-button-mark--width` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2[:has(input:checked)] .sf-radio-button-mark`: `var(--sf-b2)` | `width` |
| `--sf-radio-button-text--background-color` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-text`: `transparent` | `background-color` |
| `--sf-radio-button-text--color` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-text`: `var(--sf-radio-button-color, var(--sf-on-surface))` | `color` |
| `--sf-radio-button-text--font-family` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-radio-button-text--font-size` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-text`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-radio-button-text--font-weight` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-text`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-radio-button-text--line-height` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-text`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-radio-button-top--background-color` | не задана; задают модификаторы, например `.sf-radio-button .sf-radio-button-top`: `transparent` | `background-color` |
| `--sf-radio-button-top--gap` | не задана; задают модификаторы, например `.sf-radio-button.sf-radio-button--size-1/2 .sf-radio-button-top`: `var(--sf-space-1/4)` | `gap` |

## См. также

- [Флажок](/ru/components/forms/checkbox/)
- [Переключатель](/ru/components/forms/switch/)
- [Радиокнопки — Smart-компонент](/ru/smart-components/forms/radio/)
