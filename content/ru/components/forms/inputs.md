---
title: "Текстовые поля"
description: "Принимает короткое однострочное значение: имя, почту, пароль, поисковый запрос."
profile: reference
---

# Текстовые поля

Текстовое поле принимает короткое значение в одну строку: имя, адрес почты,
пароль или поисковый запрос. Для текста с переносами строк берите
[многострочное поле](/ru/components/forms/textarea/), для числа с шагом —
[поле количества](/ru/components/forms/quantity/).

## Пример

:::example {id="components/inputs/overview" label="Поле почты с подсказкой"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-input` → подпись `sf-input-label`, рамка `sf-input-field` с
нативным `<input>` и подсказка `sf-input-hint-text-wrap`.

- Оболочка — `<label class="sf-input">` с классом размера, классом вида
  (`sf-input--bordered` или `sf-input--filled`) и утилитами `flex flex-col`.
  Скрипт компонента находит поля по `label.sf-input`.
- Подпись — `sf-input-text` внутри `sf-input-label`. Скрипт связывает её с
  полем через `aria-labelledby`, подсказку — через `aria-describedby` и выдаёт
  полю `id`, если его нет.
- `sf-input-field` рисует рамку и держит всё, что стоит в одной строке с
  input: значок в начале, текст `sf-input-right` в конце, значок подсказки.
- Нативный `<input>` хранит значение, `name`, тип, `required`, `readonly`,
  `disabled`, `autocomplete`, `inputmode`, `minlength`, `maxlength` и
  `pattern`; браузер проверяет и отправляет его без отдельного кода.
- Placeholder показывает пример формата, но не заменяет подпись.

## Варианты

### Вид

`sf-input--bordered` отделяет поле тонкой границей — для форм на фоне
страницы. `sf-input--filled` отделяет его тональной поверхностью — для плотных
форм и панелей. Пока фокус внутри поля с заливкой, оно получает фон
поверхности, как поле с границей. Поведение и состояния у видов одинаковы; в
одной форме держите один вид.

:::example {id="components/inputs/variants" label="Поле с границей и с заливкой"}
:::

### Размер

Три ступени — `sf-input--size-1/2`, `sf-input--size-1` и `sf-input--size-2`.
Высота поля совпадает с кнопкой той же ступени; размер меняет подпись, текст,
значки и подсказку вместе.

:::example {id="components/inputs/sizes" label="Размеры текстового поля"}
:::

### Тип значения

Тип задаёт нативный атрибут `type`: `text`, `email`, `password`, `search`,
`tel` или `url`. Вместе с `autocomplete` и `inputmode` он выбирает клавиатуру
на телефоне и подсказки автозаполнения; вид поля от типа не меняется.

:::example {id="components/inputs/types" label="Почта, пароль, поиск и телефон"}
:::

### Состав

Подпись обязательна. Звёздочка `sf-input-required` отмечает обязательное поле
и скрыта от вспомогательных технологий: обязательность передаёт `required` на
input, а при звёздочке скрипт ставит его сам. Значок `sf-icon` перед input
поясняет назначение поля, `sf-input-right` после input — единицу или
сочетание клавиш, `sf-icon sf-icon-hint` в конце рамки — значок подсказки.
Постоянное пояснение под полем — `sf-input-hint-text-wrap`.

:::example {id="components/inputs/composition" label="Обязательность, значок, текст справа и подсказка"}
:::

### Маска

`data-mask="true"` на `label.sf-input` или на его input включает маску, шаблон
задаёт `data-mask-pattern`, а полные настройки — JSON в `data-mask-options`
(`{"mask": "+{7}(000)000-00-00"}`). Настройки input важнее настроек
оболочки, а `data-mask-options` важнее `data-mask-pattern`.

Шаблон читается так:

- `0` — цифра, `a` — буква, `*` — любой символ;
- `{…}` — постоянная часть, которая входит в значение: `+{7}` показывает
  `+7`, и значение без маски начинается с `7`;
- `\` экранирует следующий символ; любой другой символ — постоянная часть,
  которая только показывается и в значение не входит;
- `[` и `]` принимаются и не учитываются: пока маска ленивая, любая позиция
  необязательна.

`data-mask-lazy="false"` показывает весь шаблон сразу, а
`data-mask-placeholder-char` задаёт символ пустой позиции (`_`). Числовая
маска — `{"mask": "Number"}` с настройками `scale` (знаков после запятой, по
умолчанию 2), `radix` (по умолчанию `,`), `thousandsSeparator`, `signed`,
`min`, `max`, `padFractionalZeros` и `normalizeZeros`: число группируется при
вводе, а при уходе из поля ограничивается пределами и дополняется нулями.

Маска не заменяет подходящий `type`, нативную и серверную проверку.

:::example {id="components/inputs/mask" label="Телефон с маской"}
:::

## Состояния

Состояния задают нативные атрибуты input; класс на оболочке нужен только
ошибке. Наведение и нажатие компонент показывает сам.

### Недоступно

Нативный `disabled` приглушает рамку, текст и подпись; поле не получает фокус
и не отправляется с формой.

:::example {id="components/inputs/state-disabled" label="Недоступное поле обоих видов"}
:::

### Только чтение

Нативный `readonly` оставляет поле в порядке фокуса и позволяет выделить и
скопировать значение; оно отправляется с формой. Фон рамки становится
приглушённым.

:::example {id="components/inputs/state-readonly" label="Поле только для чтения обоих видов"}
:::

### Ошибка

Класс `error` на оболочке и на input окрашивает рамку и подсказку цветом
ошибки. Текст ошибки кладите в подсказку с `data-field-message="error"`:
скрипт отметит поле `aria-invalid="true"` и свяжет сообщение через
`aria-errormessage`.

:::example {id="components/inputs/state-error" label="Поле с ошибкой обоих видов"}
:::

### Фокус

При переходе клавишей Tab рамка получает кольцо фокуса по `:focus-visible`.
При нажатии мышью скрипт ставит оболочке `sf-input--pointer-focus`, и кольцо
не рисуется. В примере фокус показан классом `focus-visible` на input; смену
заливки на фон поверхности даёт только настоящий фокус.

:::example {id="components/inputs/state-focus" label="Поле в фокусе"}
:::

## Доступность

- Видимая подпись обязательна: скрипт связывает её с полем. В компактной
  панели без видимой подписи задайте `aria-label` на input.
- Значки в рамке декоративные и получают `aria-hidden="true"`; смысл передают
  подпись и подсказка.
- Ошибку сообщайте текстом, который объясняет, как исправить значение: одного
  цвета недостаточно.
- Не кладите внутрь `<label>` кнопку, нажатие на которую не должно переводить
  фокус в поле.
- В режиме принудительных цветов кольцо фокуса рисуется системным цветом.
  Значок в начале и текст в конце стоят по порядку разметки и при письме справа
  налево меняются местами.

## JavaScript

`SF.Input.setState(target, state)` меняет состояние поля: `target` — оболочка
или любой элемент внутри неё. Поля состояния: `value`, `disabled`, `error` (или
`invalid`) и `errorMessage`. Текст ошибки скрипт пишет в подсказку и создаёт
её, если подсказки нет; пустая строка очищает подсказку, и прежний текст
подсказки возвращает приложение. После изменения `value` поле получает
всплывающее событие `input`.

```js
const field = document.querySelector('input[name="email"]');
SF.Input.setState(field, {invalid: true, errorMessage: 'Укажите рабочую почту'});
```

Функция возвращает `false`, если внутри оболочки нет input.

Компонент регистрирует класс `Inputs`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Inputs', callback)` передаёт
класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Inputs', (Inputs) => {
  const field = new Inputs({
    param: {label: 'Рабочая почта', name: 'email', inputType: 'email', autocomplete: 'email', required: false, placeholder: '', leftIcon: 'mail'},
  });
  document.querySelector('#form').append(field.render());
}));
```

Параметры: `label`, `name`, `value`, `placeholder`, `hint`, `size` (`1/2`, `1`,
`2`), `type` (`bordered` или `filled`), `inputType`, `required`, `disabled`,
`readonly`, `error` (или `invalid`) с `errorMessage`, `autocomplete`,
`inputMode`, `minLength`, `maxLength`, `pattern`, `leftIcon`, `rightText`,
`hintIcon`, `mask` с `maskPattern` или `maskOptions`. Класс по умолчанию делает
поле обязательным и ставит подпись `Label` и placeholder `placeholder`:
задавайте `label`, `required` и `placeholder` явно.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-input` |
| Части | `sf-input-field`, `sf-input-hint`, `sf-input-hint-text-wrap`, `sf-input-label`, `sf-input-left`, `sf-input-required`, `sf-input-right`, `sf-input-text` |
| Модификаторы | `sf-input--bordered`, `sf-input--filled`, `sf-input--pointer-focus` |
| Размеры | `sf-input--size-1`, `sf-input--size-1/2`, `sf-input--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-input`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-input--radius` | `var(--sf-radius--ui)` | `--sf-input-field--border-end-end-radius`, `--sf-input-field--border-end-start-radius`, `--sf-input-field--border-start-end-radius`, `--sf-input-field--border-start-start-radius` |
| `--sf-input-field--background-color` | не задана; задают модификаторы, например `.sf-input.error.sf-input--bordered .sf-input-field`: `var(--sf-transparent-for-focus)` | `background-color` |
| `--sf-input-field--border` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-input-field--border-color` | не задана; задают модификаторы, например `.sf-input.error.sf-input--bordered .sf-input-field`: `var(--sf-error)` | `border-color` |
| `--sf-input-field--border-end-end-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-end-end-radius` |
| `--sf-input-field--border-end-start-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-end-start-radius` |
| `--sf-input-field--border-start-end-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-start-end-radius` |
| `--sf-input-field--border-start-start-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-start-start-radius` |
| `--sf-input-field--box-shadow` | не задана; задают модификаторы, например `.sf-input:not(.sf-input--pointer-focus)[:has(input:not(:disabled):not(.disabled).focus-visible)] .sf-input-field`: `none` | `box-shadow` |
| `--sf-input-field--padding-bottom` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field`: `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))` | `padding-bottom` |
| `--sf-input-field--padding-inline-end` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field`: `var(--sf-ui-1--space-x)` | `padding-inline-end` |
| `--sf-input-field--padding-inline-start` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field`: `var(--sf-ui-1--space-x)` | `padding-inline-start` |
| `--sf-input-field--padding-top` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field`: `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))` | `padding-top` |
| `--sf-input-hint--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-hint`: `transparent` | `background-color` |
| `--sf-input-hint-text-wrap--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-hint-text-wrap`: `transparent` | `background-color` |
| `--sf-input-hint-text-wrap--color` | не задана; задают модификаторы, например `.sf-input.sf-input--bordered .sf-input-hint-text-wrap`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-input-hint-text-wrap--font-family` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-hint-text-wrap`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-hint-text-wrap--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-hint-text-wrap`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-input-hint-text-wrap--font-weight` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-hint-text-wrap`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-input-hint-text-wrap--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-hint-text-wrap`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-input-input--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-field input`: `transparent` | `background-color` |
| `--sf-input-input--color` | не задана; задают модификаторы, например `.sf-input.sf-input--bordered input`: `var(--sf-on-surface)` | `color` |
| `--sf-input-input--font-family` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 input`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-input--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 input`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-input-input--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 input`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-input-input--padding-inline-end` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-end` |
| `--sf-input-input--padding-inline-start` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field input`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start` |
| `--sf-input-label--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-label`: `transparent` | `background-color` |
| `--sf-input-label--gap` | не задана; задают модификаторы, например `.sf-input .sf-input-label`: `var(--sf-space-1/4)` | `gap` |
| `--sf-input-left--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-left`: `transparent` | `background-color` |
| `--sf-input-placeholder--color` | не задана; задают модификаторы, например `.sf-input .sf-input-field input::-webkit-input-placeholder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-input-placeholder--font-family` | не задана; задают модификаторы, например `.sf-input .sf-input-field input::-webkit-input-placeholder`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-placeholder--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field input::-webkit-input-placeholder`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-input-placeholder--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field input::-webkit-input-placeholder`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-input-required--color` | не задана; задают модификаторы, например `.sf-input .sf-input-required`: `var(--sf-error)` | `color` |
| `--sf-input-required--font-family` | не задана; задают модификаторы, например `.sf-input .sf-input-required`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-required--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-required`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-input-required--font-weight` | не задана; задают модификаторы, например `.sf-input .sf-input-required`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-input-required--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-required`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-input-right--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-right`: `transparent` | `background-color` |
| `--sf-input-right--padding-inline-end` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-right`: `var(--sf-ui-1--text-space-x)` | `padding-inline-end` |
| `--sf-input-right--padding-inline-start` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-right`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start` |
| `--sf-input-text--color` | не задана; задают модификаторы, например `.sf-input .sf-input-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-input-text--font-family` | не задана; задают модификаторы, например `.sf-input .sf-input-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-text--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field .sf-input-right .sf-input-text`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-input-text--font-weight` | не задана; задают модификаторы, например `.sf-input .sf-input-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-input-text--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1 .sf-input-field .sf-input-right .sf-input-text`: `var(--sf-text-height-1)` | `line-height` |

## См. также

- [Многострочное поле](/ru/components/forms/textarea/)
- [Количество](/ru/components/forms/quantity/)
- [Inputs — Smart-компонент](/ru/smart-components/forms/inputs/)
