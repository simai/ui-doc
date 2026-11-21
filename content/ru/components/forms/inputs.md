---
title: "Текстовые поля"
description: "Принимает короткое однострочное значение: имя, почту, пароль, поисковый запрос."
profile: reference
---

# Текстовые поля

:badge[sf-input]{variant=outline scheme=on-surface size=1/2} :badge[1.14.2]{variant=outline scheme=on-surface size=1/2}

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
нативным `<input>` и подсказка `sf-input-hint-text-wrap`. Поле со знаком
«?» в подписи устроено иначе — см. [Поле с пояснением к подписи](#поле-с-пояснением-к-подписи).

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

`sf-input--bordered`, `sf-input--filled` • [справочник](#классы)

`sf-input--bordered` отделяет поле тонкой границей — для форм на фоне
страницы. `sf-input--filled` отделяет его тональной поверхностью — для плотных
форм и панелей. Пока фокус внутри поля с заливкой, оно получает фон
поверхности, как поле с границей. Поведение и состояния у видов одинаковы; в
одной форме держите один вид.

:::example {id="components/inputs/variants" label="Поле с границей и с заливкой"}
:::

### Размер

`sf-input--size-1/3`, `sf-input--size-1/2`, `sf-input--size-1`, `sf-input--size-2`, `sf-input--size-3` • [справочник](#классы)

Пять ступеней — `sf-input--size-1/3`, `sf-input--size-1/2`, `sf-input--size-1`,
`sf-input--size-2` и `sf-input--size-3`: на компьютере 28, 32, 40, 48 и 56 px,
как у кнопок тех же ступеней.
Высота поля совпадает с кнопкой той же ступени; размер меняет подпись, текст,
значки и подсказку вместе.

На сенсорном телефоне текст поля не меньше 16 px, чтобы iOS Safari не
увеличивал страницу при фокусе; высота строки и высота поля остаются
ступенью размера. Правило действует для всех полей Framework и для своих
`input`, `textarea` и `select` на странице.

:::example {id="components/inputs/sizes" label="Размеры текстового поля"}
:::

### Ширина

`sf-field--width-short`, `sf-field--width-medium`, `sf-field--width-long` • [справочник](#классы)

Ширину поля задают по значению, для которого оно сделано: `short` — 20 знаков
лестницы ширин (дата, число, код), `medium` — 28 (имя, телефон), `long` — 44
(путь, e-mail, адрес). Класс ставят на корень поля (`.sf-input`): поле не шире
этой ступени и не шире своего контейнера. Знаки следуют размеру текста,
плотности и телефону: 160, 224 и 352 px при тексте 16, 140, 196 и 308 px в
компактной плотности и на телефоне. Без класса поле занимает всю ширину
контейнера. Смарт-компонент `sf-input` пишет тот же класс настройкой
`width="short | medium | long"`, поэтому ширина одинакова с первого кадра.

:::example {id="components/inputs/width" label="Ширина поля по значению"}
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
поясняет назначение поля. Текст перед значением (код страны «+7», «https://»)
кладут в `sf-input-start`, текст после него — единицу или валюту — в
`sf-input-text` внутри `sf-input-right`: оба рисуются цветом пояснения, а не
цветом значения. Сочетание клавиш в конце поля — `sf-input-shortcut`.
`sf-icon sf-icon-hint` в конце рамки — значок подсказки, его обёртка —
`sf-input-hint`. Постоянное пояснение под полем — `sf-input-hint-text-wrap`.

Скругление поля меняют `sf-input--radius-rounded` (полностью круглые края,
значок остаётся на своём отступе) и `sf-input--radius-square` (прямые углы).

:::example {id="components/inputs/composition" label="Состав"}
:::

### Счётчик знаков

Счётчик стоит в конце строки под полем: строку собирает `sf-input-message`,
в ней пояснение `sf-input-hint-text-wrap` и счётчик `sf-input-count` с
цифрами одной ширины. Видимый счётчик скрыт от диктора (`aria-hidden="true"`);
для диктора число знаков пишут в невидимый `sf-input-count-said` с
`aria-live="polite"` сразу после оболочки. Смарт-поле обновляет его само, в
своей разметке это делает ваш скрипт. Когда текст длиннее предела, поставьте оболочке
`sf-input--over` вместе с `error`: первый красит счётчик цветом ошибки, второй
даёт рамку ошибки. Смарт-поле ставит оба класса само.

:::example {id="components/inputs/counter" label="Счётчик знаков"}
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

### Поле с пояснением к подписи

Пояснение к подписи по нажатию — [знак «?»](/ru/smart/feedback/help-mark/)
рядом с подписью. Внутри `<label>` знак стал бы его элементом управления, и
нажатие на подпись открывало бы пояснение вместо перехода в поле. Поэтому у
такого поля оболочка — `<div class="sf-input">`, подпись — `<label for>` с
классом `sf-input-text`, а знак стоит рядом с ней в `sf-input-label`.

Скрипт поля сам находит только `label.sf-input`, поэтому оболочку `div`
связывает вызов `SF.Input.setState(оболочка, {})` после `sf-loader-ready`: он
даёт полю `aria-labelledby` и `aria-describedby` к подсказке и с ними же
показывает ошибку. Передавайте ему саму оболочку: элемент внутри `div`
функция не поднимает до оболочки. Маску такое поле не получает.

:::example {id="components/inputs/help-mark" label="Поле со знаком «?» у подписи"}
:::

### Поле с кнопками действий

Кнопки после поля — «Копировать», «Обновить», «Удалить» — стоят с ним в одной
строке и берут ступень поля: у поля `sf-input--size-1` кнопки размера 1.
Строка `flex flex-wrap items-cross-end gap-1` переносится, а поле с `grow
basis-60` растёт и начинает с доли строки. Кнопки лежат в общей группе
`flex gap-1`, поэтому, когда им не хватает места, они уходят под поле все
вместе, а не по одной; `items-cross-end` ставит их по нижнему краю поля, а не
подписи.

:::example {id="components/inputs/with-actions" label="API-ключ с кнопками"}
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
скопировать значение; оно отправляется с формой. Подложки у такого поля нет
в обоих видах, рамка светлее (`--sf-outline-variant`): поле не выглядит
местом для ввода. Наведение и нажатие его не меняют.

:::example {id="components/inputs/state-readonly" label="Только чтение"}
:::

### Ошибка

Класс `error` на оболочке и на input окрашивает рамку и подсказку цветом
ошибки. Текст ошибки кладите в подсказку с `data-field-message="error"`:
скрипт отметит поле `aria-invalid="true"` и свяжет сообщение через
`aria-errormessage`.

:::example {id="components/inputs/state-error" label="Поле с ошибкой обоих видов"}
:::

### Фокус

Фокус одинаковый после нажатия мышью и после клавиши Tab: рамка поля
становится цветом фокуса и толщиной 2 px внутрь, снаружи кольца нет, поэтому
прокручиваемый контейнер его не обрезает и соседи не сдвигаются. Поле с
заливкой в фокусе получает фон поверхности, как поле с границей. Нажмите в
поле примера или перейдите в него клавишей Tab.

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
`label.sf-input` или любой элемент внутри неё, а у оболочки `div` — сама
оболочка. Поля состояния: `value`, `disabled`, `error` (или
`invalid`) и `errorMessage`. `value` меняет и поле с `readonly`: человек его
не правит, а код может. Текст ошибки скрипт пишет в подсказку и создаёт
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
| Части | `sf-input-count`, `sf-input-count-said`, `sf-input-field`, `sf-input-hint`, `sf-input-hint-text-wrap`, `sf-input-label`, `sf-input-left`, `sf-input-message`, `sf-input-required`, `sf-input-right`, `sf-input-shortcut`, `sf-input-start`, `sf-input-text` |
| Модификаторы | `sf-input--bordered`, `sf-input--filled`, `sf-input--over`, `sf-input--plain`, `sf-input--radius-rounded`, `sf-input--radius-square` |
| Размеры | `sf-input--size-1`, `sf-input--size-1/2`, `sf-input--size-1/3`, `sf-input--size-2`, `sf-input--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-input`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-input-background-color` | Заливка поля в спокойном состоянии; у фокуса, ошибки и недоступности своя. | `var(--sf-transparent)`; зависит от вида |
| `--sf-input-border-color` | Рамка поля в спокойном состоянии. | `var(--sf-outline)`; зависит от вида |
| `--sf-input-color` | Цвет введённого текста. | `inherit` |
| `--sf-input-radius` | Скругление углов поля. | `var(--sf-radius--ui)` |
| `--sf-input-padding-inline` | Внутренний отступ поля до и после содержимого по строчной оси. | `calc(var(--sf-space-1) - var(--sf-px))`; зависит от размера |
| `--sf-input-padding-block` | Внутренний отступ поля над и под содержимым. | `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))`; зависит от размера |
| `--sf-input-invalid-border-color` | Рамка поля при ошибке (вид с рамкой). | `var(--sf-error)` |

```css
.sf-input {
  --sf-input-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-input`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-input--inset` | `var(--sf-space-1)` | `--sf-input--value-inset`, `--sf-input-field--padding-inline-start`, `--sf-input-field--padding-inline-end`, `--sf-field-action--inset` |
| `--sf-input--line-radius` | `min(var(--sf-input--radius), var(--sf-ui-1--control-height) / 2)` | `--sf-input--value-inset` |
| `--sf-input--place-variant` | не задана; задают модификаторы, например `.sf-input.sf-input--filled`: `var(--sf-place--fill-placeholder, var(--sf-on-surface-variant))` | `--sf-input-placeholder--color` |
| `--sf-input--radius` | `var(--sf-input-radius, var(--sf-radius--ui))` | `--sf-input-field--border-end-end-radius`, `--sf-input-field--border-end-start-radius`, `--sf-input-field--border-start-end-radius`, `--sf-input-field--border-start-start-radius`, `--sf-input--line-radius` |
| `--sf-input--value-inset` | `calc(var(--sf-input--inset) + max(calc(var(--sf-px) * 0), var(--sf-input--line-radius) - var(--sf-radius-1/2)) / 2)` | `--sf-input-field--padding-inline-start`, `--sf-input-field--padding-inline-end` |
| `--sf-input-field--background-color` | не задана; задают модификаторы, например `.sf-input.error.sf-input--bordered .sf-input-field`: `var(--sf-transparent-for-focus)` | `background-color` |
| `--sf-input-field--border` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-px) solid` | `border`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius`, `border-color`, `border-bottom-color`, `border-block-end-color`, `--sf-input-field--line-color` |
| `--sf-input-field--border-color` | не задана; задают модификаторы, например `.sf-input.error.sf-input--bordered .sf-input-field`: `var(--sf-input-invalid-border-color, var(--sf-error))` | `border-color`, `border-bottom-color`, `border-block-end-color`, `--sf-input-field--line-color` |
| `--sf-input-field--border-end-end-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-end-end-radius` |
| `--sf-input-field--border-end-start-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-end-start-radius` |
| `--sf-input-field--border-start-end-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-start-end-radius` |
| `--sf-input-field--border-start-start-radius` | не задана; задают модификаторы, например `.sf-input .sf-input-field`: `var(--sf-input--radius)` | `border-start-start-radius` |
| `--sf-input-field--box-shadow` | не задана; задают модификаторы, например `.sf-input:has(input:not(:disabled):not(.disabled):focus) .sf-input-field`: `none` | `box-shadow` |
| `--sf-input-field--line-color` | не задана; задают модификаторы, например `.sf-input:not(.error).sf-input--filled:not(:has(input:disabled)) .sf-input-field`: `var(--sf-input-border-color, var(--sf-outline))` | `border-bottom-color`, `border-block-end-color` |
| `--sf-input-field--padding-bottom` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field`: `var(--sf-input-padding-block, calc(var(--sf-ui-1/3--space-y-tightness-default) - var(--sf-px)))` | `padding-bottom` |
| `--sf-input-field--padding-inline-end` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field`: `var(--sf-input-padding-inline, var(--sf-ui-1/3--space-x))` | `padding-inline-end` |
| `--sf-input-field--padding-inline-start` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field`: `var(--sf-input-padding-inline, var(--sf-ui-1/3--space-x))` | `padding-inline-start` |
| `--sf-input-field--padding-top` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field`: `var(--sf-input-padding-block, calc(var(--sf-ui-1/3--space-y-tightness-default) - var(--sf-px)))` | `padding-top` |
| `--sf-input-hint--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-hint`: `transparent` | `background-color` |
| `--sf-input-hint-text-wrap--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-hint-text-wrap`: `transparent` | `background-color` |
| `--sf-input-hint-text-wrap--color` | не задана; задают модификаторы, например `.sf-input.sf-input--bordered .sf-input-hint-text-wrap`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-input-hint-text-wrap--font-family` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-hint-text-wrap`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-hint-text-wrap--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-hint-text-wrap`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-input-hint-text-wrap--font-weight` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-hint-text-wrap`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-input-hint-text-wrap--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-hint-text-wrap`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-input-input--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-field input`: `transparent` | `background-color` |
| `--sf-input-input--color` | не задана; задают модификаторы, например `.sf-input.sf-input--bordered input`: `var(--sf-on-surface)` | `color`, `caret-color` |
| `--sf-input-input--font-family` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 input`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-input--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 input`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-input-input--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 input`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-input-input--padding-inline-end` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field input`: `var(--sf-ui-1/3--text-space-x)` | `padding-inline-end` |
| `--sf-input-input--padding-inline-start` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field input`: `var(--sf-ui-1/3--text-space-x)` | `padding-inline-start` |
| `--sf-input-label--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-label`: `transparent` | `background-color` |
| `--sf-input-label--gap` | не задана; задают модификаторы, например `.sf-input .sf-input-label`: `var(--sf-space-1/4)` | `margin-inline-start`, `gap` |
| `--sf-input-label--line` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-label`: `var(--sf-text-height-1/3)` | `height`, `block-size` |
| `--sf-input-left--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-left`: `transparent` | `background-color` |
| `--sf-input-placeholder--color` | не задана; задают модификаторы, например `.sf-input .sf-input-field input::-webkit-input-placeholder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-input-placeholder--font-family` | не задана; задают модификаторы, например `.sf-input .sf-input-field input::-webkit-input-placeholder`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-placeholder--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field input::-webkit-input-placeholder`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-input-placeholder--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field input::-webkit-input-placeholder`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-input-required--color` | не задана; задают модификаторы, например `.sf-input .sf-input-required`: `var(--sf-on-surface)` | `color` |
| `--sf-input-required--font-family` | не задана; задают модификаторы, например `.sf-input .sf-input-required`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-required--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-required`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-input-required--font-weight` | не задана; задают модификаторы, например `.sf-input .sf-input-required`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-input-required--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-required`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-input-right--background-color` | не задана; задают модификаторы, например `.sf-input .sf-input-right`: `transparent` | `background-color` |
| `--sf-input-right--padding-inline-end` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-right`: `var(--sf-ui-1/3--text-space-x)` | `padding-inline-end` |
| `--sf-input-right--padding-inline-start` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-right`: `var(--sf-ui-1/3--text-space-x)` | `padding-inline-start` |
| `--sf-input-text--color` | не задана; задают модификаторы, например `.sf-input .sf-input-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-input-text--font-family` | не задана; задают модификаторы, например `.sf-input .sf-input-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-input-text--font-size` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field .sf-input-right .sf-input-text`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-input-text--font-weight` | не задана; задают модификаторы, например `.sf-input .sf-input-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-input-text--line-height` | не задана; задают модификаторы, например `.sf-input.sf-input--size-1/3 .sf-input-field .sf-input-right .sf-input-text`: `var(--sf-text-height-1/3)` | `line-height` |

## См. также

- [Многострочное поле](/ru/components/forms/textarea/)
- [Количество](/ru/components/forms/quantity/)
- [Текстовое поле — смарт-компонент](/ru/smart/forms/inputs/)
