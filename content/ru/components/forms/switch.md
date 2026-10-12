---
title: "Переключатель"
description: "Включает или выключает настройку сразу, без отправки формы."
profile: reference
---

# Переключатель

Переключатель включает или выключает настройку сразу после нажатия. Если
значение уходит вместе с формой после подтверждения, берите
[флажок](/ru/components/forms/checkbox/).

## Пример

:::example {id="components/switch/overview" label="Переключатель с подписью и пояснением"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-switch` → `sf-switch-toggler` с `<input type="checkbox">` и
`sf-switch-inner` → `sf-switch-container-wrap` с подписью и пояснением.

- Оболочка — `<label class="sf-switch">` с классом размера: она даёт доступное
  имя и кликабельную область. Скрипт компонента находит переключатели по
  `label.sf-switch`.
- Нативный `<input type="checkbox" role="switch">` внутри `sf-switch-toggler` —
  источник `name`, `value`, `checked`, `disabled`, фокуса и отправки формы.
  CSS делает его прозрачным и растягивает на всю дорожку.
- `sf-switch-inner` — бегунок. Он декоративный и получает `aria-hidden="true"`.
- Текст — в `sf-switch-container-wrap`: подпись `sf-switch-text` внутри
  `sf-switch-container` и `sf-switch-top`, пояснение — `sf-switch-description`.

## Варианты

### Размер

Три ступени — `sf-switch--size-1/2`, `sf-switch--size-1` и `sf-switch--size-2`,
как у полей форм, флажка и радиокнопки. Высота дорожки равна высоте строки
подписи своего размера. Берите ступень полей и кнопок той же формы.

:::example {id="components/switch/sizes" label="Размеры переключателя"}
:::

### Длина дорожки

Обычная дорожка вдвое длиннее своей высоты. `sf-switch--short` укорачивает её
до полутора высот — для плотных списков настроек.

:::example {id="components/switch/track" label="Обычная и короткая дорожка"}
:::

### Значок в бегунке

Значок кладут в `sf-switch-inner`, модификатор не нужен. Один `sf-icon` виден в
обоих положениях. Два значка с классами `sf-switch-icon--off` и
`sf-switch-icon--on` сменяют друг друга, когда переключатель включается. Значок
декоративный: настройку называет подпись.

:::example {id="components/switch/icons" label="Бегунок без значка, с одним и с двумя значками"}
:::

### Состав

Подпись обязательна: она даёт переключателю доступное имя. Пояснение добавляет
`sf-switch-description`, значок подсказки — `sf-icon` в `sf-switch-top` рядом с
подписью. Атрибуты `data-sf-switch-on-text` и `data-sf-switch-off-text` на
оболочке задают два текста пояснения: скрипт подставляет нужный при каждом
переключении. Оба атрибута нужны вместе.

:::example {id="components/switch/composition" label="Подпись, пояснение, подсказка и текст по состоянию"}
:::

### Положение

Положение переключателя задаёт порядок частей внутри `<label>`. В начале строки
он подходит обычным формам; в конце — строкам настроек. Для положения в конце
поставьте `sf-switch-container-wrap` первым и добавьте оболочке
`content-main-between`.

:::example {id="components/switch/position" label="Переключатель в начале и в конце строки"}
:::

## Состояния

Состояния задаёт нативный input. Скрипт компонента синхронизирует с ним классы
`active` и `disabled` на оболочке: по `active` бегунок сдвигается и меняются
значки. Наведение и нажатие компонент показывает сам.

### Включён

Нативный `checked` заливает дорожку основным цветом и сдвигает бегунок к
логическому концу.

:::example {id="components/switch/state-checked" label="Выключенный и включённый"}
:::

### Недоступен

Нативный `disabled` приглушает дорожку, бегунок и текст в любом положении;
переключатель не получает фокус и не отправляется с формой.

:::example {id="components/switch/state-disabled" label="Недоступные переключатели"}
:::

### Фокус

При переходе клавишей Tab дорожка получает кольцо фокуса по `:focus-visible`.
В примере фокус показан классом `focus-visible` на input, который CSS
компонента читает наравне с `:focus-visible`.

:::example {id="components/switch/state-focus" label="Переключатель в фокусе"}
:::

## Доступность

- `role="switch"` на input сообщает, что это переключатель: экранный диктор
  называет состояние «включено» или «выключено».
- Подпись называет настройку, а не действие: «Уведомления», а не «Включить
  уведомления». Она лежит внутри того же `<label>`, что и input.
- Переключатель меняет настройку сразу. Если изменение нужно подтвердить или
  отправить формой, берите флажок.
- Переключается пробелом; видимый фокус рисует компонент. В режиме
  принудительных цветов дорожка и бегунок рисуются системными цветами.
- Бегунок и значки скрыты от вспомогательных технологий: состояние передаёт
  input.
- При `prefers-reduced-motion` бегунок переходит без анимации. При письме справа
  налево он движется в обратную сторону.

## JavaScript

`SF.Switch.setState(input, state)` меняет состояние нативного переключателя и
перерисовывает оболочку:

```js
const input = document.querySelector('input[name="notifications"]');
SF.Switch.setState(input, {checked: true, disabled: false});
```

Функция принимает только `<input type="checkbox">` и поля `checked`,
`disabled`; для другого элемента она возвращает `false`. Событие `change` она
не создаёт. Сброс формы скрипт отслеживает сам.

Компонент регистрирует класс `Switch`, который собирает переключатель из
параметров. `SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('Switch', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Switch', (Switch) => {
  const control = new Switch({
    param: {name: 'autosave', title: 'Автосохранение', on: 'Включено', off: 'Выключено', size: '1'},
  });
  document.querySelector('#settings').append(control.render());
}));
```

Параметры: `title` (или `label`), `description`, `help` (имя значка подсказки),
`size` (`1/2`, `1`, `2`), `name`, `value`, `checked`, `disabled`, `on` и `off`
(тексты пояснения для двух положений, задаются вместе). `attrs` переносятся на
input, класс из `attrs.class` — на оболочку.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-switch` |
| Части | `sf-switch-container`, `sf-switch-container-wrap`, `sf-switch-description`, `sf-switch-icon--off`, `sf-switch-icon--on`, `sf-switch-inner`, `sf-switch-text`, `sf-switch-toggler`, `sf-switch-top` |
| Модификаторы | `sf-switch--short` |
| Размеры | `sf-switch--size-1`, `sf-switch--size-1/2`, `sf-switch--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-switch`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-switch--duration` | `var(--sf-duration-normal)` | `transition` |
| `--sf-switch--gap` | не задана; задают модификаторы, например `.sf-switch--size-1/2`: `var(--sf-ui-1/2--text-space-x)` | `gap` |
| `--sf-switch--ratio` | `2` | `--sf-switch-toggler--width`, `--sf-switch-inner--travel` |
| `--sf-switch--seat` | `var(--sf-a2)` | `--sf-switch-toggler--padding-bottom`, `--sf-switch-toggler--padding-inline-end`, `--sf-switch-toggler--padding-inline-start`, `--sf-switch-toggler--padding-top`, `--sf-switch-inner--height`, `--sf-switch-inner--width` |
| `--sf-switch--track-height` | не задана; задают модификаторы, например `.sf-switch.sf-switch--size-1/2`: `var(--sf-text-height-1/2)` | `--sf-switch-toggler--height`, `--sf-switch-toggler--width`, `--sf-switch-inner--height`, `--sf-switch-inner--width`, `--sf-switch-inner--travel` |
| `--sf-switch-container--background-color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-container`: `transparent` | `background-color` |
| `--sf-switch-container--color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-container`: `var(--sf-on-surface)` | `color` |
| `--sf-switch-container--font-size` | не задана; задают модификаторы, например `.sf-switch.sf-switch--size-1/2 .sf-switch-container`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-switch-container--gap` | не задана; задают модификаторы, например `.sf-switch .sf-switch-container`: `var(--sf-a0)` | `gap` |
| `--sf-switch-container--line-height` | не задана; задают модификаторы, например `.sf-switch.sf-switch--size-1/2 .sf-switch-container`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-switch-container-wrap--background-color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-container-wrap`: `transparent` | `background-color` |
| `--sf-switch-container-wrap--gap` | не задана; задают модификаторы, например `.sf-switch .sf-switch-container-wrap`: `var(--sf-space-0)` | `gap` |
| `--sf-switch-description--color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-description`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-switch-description--font-family` | не задана; задают модификаторы, например `.sf-switch .sf-switch-description`: `var(--sf-text--family)` | `font-family` |
| `--sf-switch-description--font-size` | не задана; задают модификаторы, например `.sf-switch.sf-switch--size-1/2 .sf-switch-description`: `var(--sf-text-size-1/3)` | `font-size` |
| `--sf-switch-description--font-weight` | не задана; задают модификаторы, например `.sf-switch .sf-switch-description`: `var(--sf-font-weight-regular)` | `font-weight` |
| `--sf-switch-description--line-height` | не задана; задают модификаторы, например `.sf-switch.sf-switch--size-1/2 .sf-switch-description`: `var(--sf-text-height-1/3)` | `line-height` |
| `--sf-switch-inner--background-color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-inner`: `var(--sf-on-surface-variant)` | `background-color` |
| `--sf-switch-inner--border-radius` | не задана; задают модификаторы, например `.sf-switch .sf-switch-inner`: `var(--sf-radius-circle)` | `border-radius` |
| `--sf-switch-inner--direction` | не задана; задают модификаторы, например `[dir=rtl] .sf-switch .sf-switch-inner`: `-1` | `transform` |
| `--sf-switch-inner--height` | не задана; задают модификаторы, например `.sf-switch .sf-switch-inner`: `calc(var(--sf-switch--track-height) - 2 * var(--sf-switch--seat))` | `height`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width` |
| `--sf-switch-inner--travel` | не задана; задают модификаторы, например `.sf-switch .sf-switch-inner`: `0px` | `transform` |
| `--sf-switch-inner--width` | не задана; задают модификаторы, например `.sf-switch .sf-switch-inner`: `calc(var(--sf-switch--track-height) - 2 * var(--sf-switch--seat))` | `width` |
| `--sf-switch-toggler--background-color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-surface-0)` | `background-color`, `--sf-icon--color` |
| `--sf-switch-toggler--border` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-px) solid` | `border`, `border-color`, `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius`, `border-style`, `border-width`, `--sf-switch-toggler--padding-bottom`, `--sf-switch-toggler--padding-inline-end`, `--sf-switch-toggler--padding-inline-start`, `--sf-switch-toggler--padding-top` |
| `--sf-switch-toggler--border-color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-outline)` | `border-color` |
| `--sf-switch-toggler--border-end-end-radius` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-switch-toggler--border-end-start-radius` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-switch-toggler--border-start-end-radius` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-switch-toggler--border-start-start-radius` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-switch-toggler--border-style` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `solid` | `border-style` |
| `--sf-switch-toggler--border-width` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-px)` | `border-width`, `--sf-switch-toggler--padding-bottom`, `--sf-switch-toggler--padding-inline-end`, `--sf-switch-toggler--padding-inline-start`, `--sf-switch-toggler--padding-top` |
| `--sf-switch-toggler--box-shadow` | не задана; задают модификаторы, например `.sf-switch[:has(input:not(:disabled):not(.disabled).focus-visible)] .sf-switch-toggler`: `none` | `box-shadow` |
| `--sf-switch-toggler--height` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `var(--sf-switch--track-height)` | `height` |
| `--sf-switch-toggler--padding-bottom` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `calc(var(--sf-switch--seat) - var(--sf-switch-toggler--border-width))` | `padding-bottom` |
| `--sf-switch-toggler--padding-inline-end` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `calc(var(--sf-switch--seat) - var(--sf-switch-toggler--border-width))` | `padding-inline-end` |
| `--sf-switch-toggler--padding-inline-start` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `calc(var(--sf-switch--seat) - var(--sf-switch-toggler--border-width))` | `padding-inline-start` |
| `--sf-switch-toggler--padding-top` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `calc(var(--sf-switch--seat) - var(--sf-switch-toggler--border-width))` | `padding-top` |
| `--sf-switch-toggler--width` | не задана; задают модификаторы, например `.sf-switch .sf-switch-toggler`: `calc(var(--sf-switch--track-height) * var(--sf-switch--ratio))` | `width` |
| `--sf-switch-top--background-color` | не задана; задают модификаторы, например `.sf-switch .sf-switch-top`: `transparent` | `background-color` |
| `--sf-switch-top--gap` | не задана; задают модификаторы, например `.sf-switch.sf-switch--size-1/2 .sf-switch-top`: `var(--sf-space-1/4)` | `gap` |

## См. также

- [Флажок](/ru/components/forms/checkbox/)
- [Toggle](/ru/components/forms/toggle/)
- [Switch — Smart-компонент](/ru/smart-components/forms/switch/)
