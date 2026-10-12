---
title: "Многострочное поле"
description: "Принимает комментарий, описание или другой текст в несколько строк."
profile: reference
---

# Многострочное поле

Многострочное поле принимает комментарий, описание или другой свободный текст с
переносами строк. Для короткого значения в одну строку берите
[поле ввода](/ru/components/forms/inputs/).

## Пример

:::example {id="components/textarea/overview" label="Поле комментария с подсказкой"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-textarea` → подпись `sf-textarea-label`, нативный `<textarea>` и
подсказка `sf-textarea-hint-text-wrap`.

- Оболочка — `<label class="sf-textarea">` с классом размера и классом вида
  (`sf-textarea--bordered` или `sf-textarea--filled`) и утилитами
  `flex flex-col`. Скрипт компонента находит поля по `label.sf-textarea`.
- Подпись — `sf-textarea-text` внутри `sf-textarea-label`. Скрипт связывает её
  с полем через `aria-labelledby`, а подсказку — через `aria-describedby`,
  и выдаёт полю `id`, если его нет.
- Нативный `<textarea>` хранит значение, `name`, `rows`, `maxlength`,
  `minlength`, `placeholder`, `autocomplete`, `inputmode`, `spellcheck` и
  `wrap`; браузер проверяет и отправляет его без отдельного кода. Число видимых
  строк задаёт `rows`.
- Подсказка необязательна. Placeholder не заменяет подпись: он исчезает при
  вводе.

## Варианты

### Вид

`sf-textarea--bordered` отделяет поле тонкой границей — для форм на фоне
страницы. `sf-textarea--filled` отделяет его тональной поверхностью — для
плотных форм внутри карточек. Пока фокус внутри поля с заливкой, оно получает
фон поверхности, как поле с границей. Поведение и состояния у видов одинаковы;
в одной форме держите один вид.

:::example {id="components/textarea/variants" label="Поле с границей и с заливкой"}
:::

### Размер

Три ступени — `sf-textarea--size-1/2`, `sf-textarea--size-1` и
`sf-textarea--size-2`, как у поля ввода и других полей форм. Размер меняет
подпись, текст, подсказку и отступы вместе. Берите ступень полей и кнопок той
же формы.

:::example {id="components/textarea/sizes" label="Размеры многострочного поля"}
:::

### Состав

Подпись обязательна. Звёздочка `sf-textarea-required` в подписи отмечает
обязательное поле и скрыта от вспомогательных технологий: обязательность
передаёт атрибут `required` на `<textarea>`. Если в подписи есть звёздочка,
скрипт ставит `required` сам. Постоянное пояснение под полем —
`sf-textarea-hint-text-wrap`.

:::example {id="components/textarea/composition" label="Подпись, обязательность и подсказка"}
:::

### Изменение размера

По умолчанию пользователь растягивает поле только по высоте: ширину держит
контейнер. Утилиты `resize-none`, `resize-x` и `resize` на `<textarea>` меняют
режим. `resize-none` подходит для заранее рассчитанной области; изменение по
ширине — только в контейнере, который принимает новую ширину.

:::example {id="components/textarea/resize" label="Режимы изменения размера"}
:::

### Маска

Маска нужна редким многострочным форматам. `data-mask="true"` и
`data-mask-pattern` на `<textarea>` включают её: `0` в шаблоне — цифра,
остальные символы, в том числе перенос строки `&#10;`, маска вставляет сама.
Для свободного текста маска не нужна.

:::example {id="components/textarea/mask" label="Поле с маской из двух строк"}
:::

## Состояния

Состояния задают нативные атрибуты `<textarea>`; класс на оболочке нужен только
ошибке. Наведение компонент показывает сам.

### Недоступно

Нативный `disabled` приглушает поле и текст; поле не получает фокус и не
отправляется с формой.

:::example {id="components/textarea/state-disabled" label="Недоступное поле обоих видов"}
:::

### Только чтение

Нативный `readonly` оставляет поле в порядке фокуса и позволяет выделить и
скопировать текст; значение отправляется с формой. Фон поля становится
приглушённым.

:::example {id="components/textarea/state-readonly" label="Поле только для чтения обоих видов"}
:::

### Ошибка

Класс `error` на оболочке и на `<textarea>` окрашивает границу и подсказку
цветом ошибки. Текст ошибки кладите в подсказку с `data-field-message="error"`:
скрипт отметит поле `aria-invalid="true"` и свяжет сообщение через
`aria-errormessage`.

:::example {id="components/textarea/state-error" label="Поле с ошибкой обоих видов"}
:::

### Фокус

При переходе клавишей Tab поле получает кольцо фокуса по `:focus-visible`. При
нажатии мышью скрипт ставит оболочке `sf-textarea--pointer-focus`, и кольцо не
рисуется. В примере фокус показан классом `focus-visible` на `<textarea>`;
смену заливки на фон поверхности даёт только настоящий фокус.

:::example {id="components/textarea/state-focus" label="Поле в фокусе"}
:::

## Доступность

- Видимая подпись обязательна: скрипт связывает её с полем. Если подписи нет,
  задайте `aria-label` на `<textarea>`.
- Подсказку и ошибку скрипт связывает с полем через `aria-describedby`; ошибку
  формулируйте так, чтобы она объясняла, как исправить значение.
- Ограничение длины показывайте в подсказке, а не только через `maxlength`:
  браузер молча обрезает ввод.
- Ошибку сообщайте текстом: одного цвета недостаточно. В режиме
  принудительных цветов кольцо фокуса рисуется системным цветом.
- Клавиша Enter переносит строку, а не отправляет форму.

## JavaScript

`SF.Textarea.setState(target, state)` меняет состояние поля: `target` —
оболочка или любой элемент внутри неё. Поля состояния: `value`, `disabled`,
`error` (или `invalid`) и `errorMessage`. Текст ошибки скрипт пишет в
подсказку и создаёт её, если подсказки нет; пустая строка возвращает подсказку
в обычный вид. После изменения `value` поле получает событие `input`.

```js
const field = document.querySelector('textarea[name="comment"]');
SF.Textarea.setState(field, {error: true, errorMessage: 'Добавьте не менее десяти символов'});
```

Функция возвращает `false`, если внутри оболочки нет `<textarea>`.

Компонент регистрирует класс `Textarea`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Textarea', callback)` передаёт
класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Textarea', (Textarea) => {
  const field = new Textarea({
    param: {label: 'Комментарий', name: 'comment', required: false, placeholder: '', hint: 'До 500 символов', maxLength: 500},
  });
  document.querySelector('#form').append(field.render());
}));
```

Параметры: `label`, `name`, `value`, `placeholder`, `hint`, `size` (`1/2`, `1`,
`2`), `type` (`bordered` или `filled`), `rows`, `required`, `disabled`,
`readonly`, `error` (или `invalid`) с `errorMessage`, `autocomplete`,
`inputMode`, `minLength`, `maxLength`, `spellcheck`, `wrap`, `mask` с
`maskPattern` или `maskOptions`. Класс по умолчанию делает поле обязательным и
ставит подпись `Label` и placeholder `placeholder`: задавайте `label`,
`required` и `placeholder` явно.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-textarea` |
| Части | `sf-textarea-hint-text-wrap`, `sf-textarea-label`, `sf-textarea-required`, `sf-textarea-text` |
| Модификаторы | `sf-textarea--bordered`, `sf-textarea--filled`, `sf-textarea--pointer-focus` |
| Размеры | `sf-textarea--size-1`, `sf-textarea--size-1/2`, `sf-textarea--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-textarea`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-textarea--radius` | `var(--sf-radius--ui)` | `--sf-textarea-textarea--border-end-end-radius`, `--sf-textarea-textarea--border-end-start-radius`, `--sf-textarea-textarea--border-start-end-radius`, `--sf-textarea-textarea--border-start-start-radius` |
| `--sf-textarea-hint-text-wrap--background-color` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-hint-text-wrap`: `transparent` | `background-color` |
| `--sf-textarea-hint-text-wrap--color` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--bordered .sf-textarea-hint-text-wrap`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-textarea-hint-text-wrap--font-family` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered .sf-textarea-hint-text-wrap`: `var(--sf-text--family)` | `font-family` |
| `--sf-textarea-hint-text-wrap--font-size` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered .sf-textarea-hint-text-wrap`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-textarea-hint-text-wrap--font-weight` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered .sf-textarea-hint-text-wrap`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-textarea-hint-text-wrap--line-height` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered .sf-textarea-hint-text-wrap`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-textarea-label--background-color` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-label`: `transparent` | `background-color` |
| `--sf-textarea-label--gap` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-label`: `var(--sf-space-1/4)` | `gap` |
| `--sf-textarea-placeholder--color` | не задана; задают модификаторы, например `.sf-textarea textarea::-webkit-input-placeholder`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-textarea-placeholder--font-family` | не задана; задают модификаторы, например `.sf-textarea textarea::-webkit-input-placeholder`: `var(--sf-text--family)` | `font-family` |
| `--sf-textarea-placeholder--font-size` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 textarea::-webkit-input-placeholder`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-textarea-placeholder--line-height` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 textarea::-webkit-input-placeholder`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-textarea-required--color` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-required`: `var(--sf-error)` | `color` |
| `--sf-textarea-required--font-family` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-required`: `var(--sf-text--family)` | `font-family` |
| `--sf-textarea-required--font-size` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 .sf-textarea-required`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-textarea-required--font-weight` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-required`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-textarea-required--line-height` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 .sf-textarea-required`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-textarea-text--color` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-text`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-textarea-text--font-family` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-text`: `var(--sf-text--family)` | `font-family` |
| `--sf-textarea-text--font-size` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 .sf-textarea-text`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-textarea-text--font-weight` | не задана; задают модификаторы, например `.sf-textarea .sf-textarea-text`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-textarea-text--line-height` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 .sf-textarea-text`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-textarea-textarea--background-color` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--bordered textarea`: `var(--sf-surface-0)` | `background-color` |
| `--sf-textarea-textarea--border` | не задана; задают модификаторы, например `.sf-textarea textarea`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-textarea-textarea--border-color` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--bordered textarea`: `var(--sf-outline)` | `border-color` |
| `--sf-textarea-textarea--border-end-end-radius` | не задана; задают модификаторы, например `.sf-textarea textarea`: `var(--sf-textarea--radius)` | `border-end-end-radius` |
| `--sf-textarea-textarea--border-end-start-radius` | не задана; задают модификаторы, например `.sf-textarea textarea`: `var(--sf-textarea--radius)` | `border-end-start-radius` |
| `--sf-textarea-textarea--border-start-end-radius` | не задана; задают модификаторы, например `.sf-textarea textarea`: `var(--sf-textarea--radius)` | `border-start-end-radius` |
| `--sf-textarea-textarea--border-start-start-radius` | не задана; задают модификаторы, например `.sf-textarea textarea`: `var(--sf-textarea--radius)` | `border-start-start-radius` |
| `--sf-textarea-textarea--box-shadow` | не задана; задают модификаторы, например `.sf-textarea:not(.sf-textarea--pointer-focus) textarea:not(:disabled):not(.disabled).focus-visible`: `none` | `box-shadow` |
| `--sf-textarea-textarea--color` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--bordered textarea`: `var(--sf-on-surface)` | `color` |
| `--sf-textarea-textarea--font-family` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered textarea`: `var(--sf-text--family)` | `font-family` |
| `--sf-textarea-textarea--font-size` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered textarea`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-textarea-textarea--font-weight` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered textarea`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-textarea-textarea--line-height` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1.sf-textarea--bordered textarea`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-textarea-textarea--padding-bottom` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 textarea`: `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))` | `padding-bottom` |
| `--sf-textarea-textarea--padding-inline-end` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 textarea`: `calc(var(--sf-ui-1--space-x) + var(--sf-ui-1--text-space-x))` | `padding-inline-end` |
| `--sf-textarea-textarea--padding-inline-start` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 textarea`: `calc(var(--sf-ui-1--space-x) + var(--sf-ui-1--text-space-x))` | `padding-inline-start` |
| `--sf-textarea-textarea--padding-top` | не задана; задают модификаторы, например `.sf-textarea.sf-textarea--size-1 textarea`: `calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-px))` | `padding-top` |

## См. также

- [Поле ввода](/ru/components/forms/inputs/)
- [Textarea — Smart-компонент](/ru/smart-components/forms/textarea/)
