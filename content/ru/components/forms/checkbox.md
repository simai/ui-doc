---
title: "Флажок"
description: "Включает независимый параметр или выбирает несколько значений из списка."
profile: reference
---

# Флажок

Флажок включает независимый параметр или выбирает несколько значений из
списка. Для одного выбора из взаимоисключающих вариантов берите
[радиокнопку](/ru/components/forms/radio/), для мгновенного включения
настройки — [переключатель](/ru/components/forms/switch/).

## Пример

:::example {id="components/checkbox/overview" label="Флажок с подписью и пояснением"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-checkbox` → `sf-checkbox-box` с `<input type="checkbox">` и
`sf-icon` → `sf-checkbox-container` с подписью.

- Оболочка — `<label class="sf-checkbox">`: она даёт доступное имя и
  кликабельную область. Скрипт компонента находит флажки по `label.sf-checkbox`.
- Нативный `<input type="checkbox">` — источник `name`, `value`, `checked`,
  `disabled`, фокуса и отправки формы. Он лежит прямым потомком
  `sf-checkbox-box`: CSS скрывает только такой input, в другом месте он
  остаётся видимым браузерным флажком.
- `sf-icon` после input рисует отметку: скрипт пишет в него `check` для
  отмеченного и `remove` для смешанного состояния. Без него индикатор пуст.
- Текст — в `sf-checkbox-container`: подпись `sf-checkbox-label` внутри
  `sf-checkbox-top` или прямо в контейнере, пояснение —
  `sf-checkbox-description`.

## Варианты

### Размер

Три ступени — `sf-checkbox--size-1/2`, `sf-checkbox--size-1` и
`sf-checkbox--size-2`, как у полей форм, радиокнопки и переключателя. Размер
меняет индикатор, подпись и пояснение вместе. Берите ступень полей и кнопок
той же формы; в списке флажок берёт размер списка.

:::example {id="components/checkbox/sizes" label="Размеры флажка"}
:::

### Состав

Подпись обязательна: она даёт флажку доступное имя. Пояснение добавляет
`sf-checkbox-description`, значок подсказки — `sf-icon` в `sf-checkbox-top`
рядом с подписью; размер значка следует за размером флажка. Скрипт
компонента пояснение с input не связывает: дайте пояснению `id` и напишите
на input `aria-describedby` с этим `id` сами.

:::example {id="components/checkbox/composition" label="Подпись, пояснение и значок"}
:::

### Положение индикатора

Положение индикатора задаёт порядок двух частей внутри `<label>`. В начале
строки индикатор подходит обычным формам; в конце — строкам настроек, где
такая композиция едина для всего интерфейса.

:::example {id="components/checkbox/position" label="Положение индикатора"}
:::

## Состояния

Все состояния задаёт нативный input; класс на оболочке нужен только ошибке.
Наведение и нажатие компонент показывает сам.

### Отмечен

Нативный `checked` заливает индикатор основным цветом и ставит отметку.

:::example {id="components/checkbox/state-checked" label="Неотмеченный и отмеченный" preview=sandbox}
:::

### Смешанное

Смешанное состояние означает, что выбрана часть дочерних вариантов: индикатор
показывает черту вместо отметки. HTML-атрибута с таким поведением нет, и
третьего отправляемого значения оно не создаёт. Его задаёт свойство
`input.indeterminate = true` или атрибут `data-indeterminate`, который скрипт
компонента переносит в свойство один раз при подключении; дальше меняйте
состояние через JavaScript.

:::example {id="components/checkbox/state-indeterminate" label="Смешанное состояние"}
:::

### Недоступен

Нативный `disabled` приглушает индикатор и текст в любом состоянии отметки, в том числе в смешанном;
флажок не получает фокус и не отправляется с формой.

:::example {id="components/checkbox/state-disabled" label="Недоступные флажки"}
:::

### Ошибка

Класс `error` на оболочке окрашивает рамку индикатора цветом ошибки. Текст
ошибки кладите в пояснение и связывайте с input через `aria-describedby`,
сам input получает `aria-invalid="true"`.

:::example {id="components/checkbox/state-error" label="Флажок с ошибкой"}
:::

### Фокус

При переходе клавишей Tab индикатор получает кольцо фокуса по
`:focus-visible`. В примере фокус показан классом `focus-visible` на input,
который CSS компонента читает наравне с `:focus-visible`.

:::example {id="components/checkbox/state-focus" label="Флажок в фокусе"}
:::

## Доступность

- Видимая подпись лежит внутри того же `<label>`, что и input.
- Группу флажков оборачивайте в `<fieldset>` с `<legend>`: легенда называет
  общий вопрос и сообщает, что можно выбрать несколько вариантов. Каждый флажок
  группы отправляет собственное значение.
- Ошибку сообщайте текстом: одного цвета недостаточно.
- Не отмечайте варианты заранее без предметной причины.
- Флажок переключается пробелом; видимый фокус рисует компонент.
- Индикатор в начале строки стоит на логическом начале и зеркалится при
  письме справа налево.

:::example {id="components/checkbox/group" label="Группа флажков"}
:::

## JavaScript

`SF.Checkbox.setState(input, state)` меняет состояние нативного флажка и
перерисовывает индикатор:

```js
const input = document.querySelector('input[name="mixed"]');
SF.Checkbox.setState(input, {checked: false, indeterminate: true, disabled: false});
```

Функция принимает только `<input type="checkbox">` и поля `checked`,
`indeterminate`, `disabled`; для другого элемента она возвращает `false`.
Событие `change` она не создаёт: после изменения значения приложение само
отправляет нужное событие и обновляет свою модель данных.

Компонент регистрирует класс `Checkbox`, который собирает флажок из
параметров. `SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('Checkbox', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Checkbox', (Checkbox) => {
  const checkbox = new Checkbox({
    param: {name: 'updates', value: 'yes', title: 'Получать обновления', size: '1'},
  });
  document.querySelector('#settings').append(checkbox.render());
}));
```

Параметры: `title`, `description`, `help` (имя значка подсказки), `size`
(`1/2`, `1`, `2`), `name`, `value`, `checked`, `disabled`, `indeterminate`.
`attrs` переносятся на input, класс из `attrs.class` — на оболочку.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-checkbox` |
| Части | `sf-checkbox-box`, `sf-checkbox-container`, `sf-checkbox-description`, `sf-checkbox-label`, `sf-checkbox-top` |
| Размеры | `sf-checkbox--size-1`, `sf-checkbox--size-1/2`, `sf-checkbox--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-checkbox`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-checkbox-background-color` | Заливка квадрата без отметки; у отмеченного, ошибки и недоступного — своя. | `var(--sf-surface-0)` |
| `--sf-checkbox-border-color` | Рамка квадрата без отметки; у отмеченного, наведения, ошибки и недоступного — своя. | `var(--sf-outline)` |
| `--sf-checkbox-border-width` | Толщина рамки квадрата со всех сторон. | `var(--sf-px)` |
| `--sf-checkbox-radius` | Скругление углов квадрата. | `var(--sf-radius--ui)` |
| `--sf-checkbox-size` | Ширина и высота квадрата. | `var(--sf-text-height-1)`; зависит от размера |
| `--sf-checkbox-gap` | Промежуток между квадратом и подписью. | `var(--sf-ui-1--text-space-x)`; зависит от размера |

```css
.sf-checkbox {
  --sf-checkbox-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-checkbox`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-checkbox--gap` | не задана; задают модификаторы, например `.sf-checkbox--size-1/2`: `var(--sf-checkbox-gap, var(--sf-ui-1/2--text-space-x))` | `gap` |
| `--sf-checkbox-box--background-color` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-box`: `var(--sf-checkbox-background-color, var(--sf-surface-0))` | `background-color` |
| `--sf-checkbox-box--border` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-box`: `var(--sf-checkbox-border-width, var(--sf-px)) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-checkbox-box--border-color` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-box`: `var(--sf-checkbox-border-color, var(--sf-outline))` | `border-color` |
| `--sf-checkbox-box--border-end-end-radius` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-box`: `var(--sf-checkbox-radius, var(--sf-radius--ui))` | `border-end-end-radius` |
| `--sf-checkbox-box--border-end-start-radius` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-box`: `var(--sf-checkbox-radius, var(--sf-radius--ui))` | `border-end-start-radius` |
| `--sf-checkbox-box--border-start-end-radius` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-box`: `var(--sf-checkbox-radius, var(--sf-radius--ui))` | `border-start-end-radius` |
| `--sf-checkbox-box--border-start-start-radius` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-box`: `var(--sf-checkbox-radius, var(--sf-radius--ui))` | `border-start-start-radius` |
| `--sf-checkbox-box--box-shadow` | не задана; задают модификаторы, например `.sf-checkbox[:has(input:not(:disabled):not(.disabled).focus-visible)] .sf-checkbox-box`: `none` | `box-shadow` |
| `--sf-checkbox-box--height` | не задана; задают модификаторы, например `.sf-checkbox.sf-checkbox--size-1/2 .sf-checkbox-box`: `var(--sf-checkbox-size, var(--sf-text-height-1/2))` | `height` |
| `--sf-checkbox-box--width` | не задана; задают модификаторы, например `.sf-checkbox.sf-checkbox--size-1/2 .sf-checkbox-box`: `var(--sf-checkbox-size, var(--sf-text-height-1/2))` | `width` |
| `--sf-checkbox-container--background-color` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-container`: `transparent` | `background-color` |
| `--sf-checkbox-description--color` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-description`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-checkbox-description--font-family` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-description`: `var(--sf-text--family)` | `font-family` |
| `--sf-checkbox-description--font-size` | не задана; задают модификаторы, например `.sf-checkbox.sf-checkbox--size-1/2 .sf-checkbox-description`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-checkbox-description--font-weight` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-description`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-checkbox-description--line-height` | не задана; задают модификаторы, например `.sf-checkbox.sf-checkbox--size-1/2 .sf-checkbox-description`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-checkbox-label--background-color` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-label`: `transparent` | `background-color` |
| `--sf-checkbox-label--color` | не задана; задают модификаторы, например `.sf-checkbox:not(.error)[:has(input:not(:checked))] .sf-checkbox-label`: `var(--sf-on-surface)` | `color` |
| `--sf-checkbox-label--font-family` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-label`: `var(--sf-text--family)` | `font-family` |
| `--sf-checkbox-label--font-size` | не задана; задают модификаторы, например `.sf-checkbox.sf-checkbox--size-1/2 .sf-checkbox-label`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-checkbox-label--font-weight` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-label`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-checkbox-label--line-height` | не задана; задают модификаторы, например `.sf-checkbox.sf-checkbox--size-1/2 .sf-checkbox-label`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-checkbox-top--background-color` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-top`: `transparent` | `background-color` |
| `--sf-checkbox-top--gap` | не задана; задают модификаторы, например `.sf-checkbox .sf-checkbox-top`: `var(--sf-space-1/4)` | `gap` |

## См. также

- [Радиокнопки](/ru/components/forms/radio/)
- [Переключатель](/ru/components/forms/switch/)
- [Флажок — Smart-компонент](/ru/smart-components/forms/checkbox/)
