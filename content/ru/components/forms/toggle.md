---
title: "Toggle"
description: "Устаревший двоичный переключатель: как читать его разметку и перенести её на переключатель."
profile: reference
---

# Toggle

Toggle — устаревший компонент: тот же контрол, что и
[переключатель](/ru/components/forms/switch/), — нативный checkbox с
`role="switch"`, дорожка и бегунок. Выпуск сохраняет его для уже написанной
разметки; в новой разметке берите переключатель.

## Пример

:::example {id="components/toggle/overview" label="Toggle с подписью"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-toggle` → `sf-toggle-control` с `<input type="checkbox">` и
`sf-toggle-container` → `sf-toggle-inner-wrap` → `sf-toggle-inner`; подпись
`sf-toggle-text` идёт после `sf-toggle-control`.

- На оболочке `<label class="sf-toggle">` — класс вида и класс размера. Скрипт
  компонента находит Toggle по `label.sf-toggle`.
- Нативный `<input type="checkbox" role="switch">` — источник `name`, `value`,
  `checked`, `disabled`, фокуса и отправки формы.
- Скрипт ставит на `sf-toggle-container` класс `content-main-start` или
  `content-main-end` по состоянию input: так бегунок встаёт к нужному краю.

### Перенос на переключатель

| Toggle | Переключатель |
|:---|:---|
| `sf-toggle` | `sf-switch` |
| `sf-toggle--size-1`, `sf-toggle--size-2` | `sf-switch--size-1`, `sf-switch--size-2` |
| `sf-toggle--simple` | без класса: это обычный переключатель |
| `sf-toggle--icon` | без класса: значок кладётся в `sf-switch-inner` |
| `sf-toggle--short` | `sf-switch--short` |
| `sf-toggle-control` | `sf-switch-toggler` |
| `sf-toggle-container`, `sf-toggle-inner-wrap` | не нужны: бегунок лежит прямо в дорожке |
| `sf-toggle-inner` | `sf-switch-inner` |
| `sf-toggle-text` | `sf-switch-text` внутри `sf-switch-container-wrap` |
| `SF.Toggle.setState` | `SF.Switch.setState` |

Размеры не совпадают один в один: дорожки Toggle меньше дорожек переключателя
той же ступени. После переноса сверьте форму на глаз.

## Варианты

### Размер

Две ступени — `sf-toggle--size-1` и `sf-toggle--size-2`; размер меняет дорожку
и подпись вместе.

:::example {id="components/toggle/sizes" label="Размеры Toggle"}
:::

### Вид

`sf-toggle--simple` — дорожка с круглым бегунком, `sf-toggle--icon` — бегунок
со значком внутри (`sf-icon` в `sf-toggle-inner-wrap`), `sf-toggle--short` —
короткая дорожка. Класс вида обязателен: без него дорожка не получает размеров.

:::example {id="components/toggle/kinds" label="Виды Toggle"}
:::

## Состояния

Состояния задаёт нативный input; скрипт синхронизирует с ним классы `active` и
`disabled` на оболочке.

### Включён

Нативный `checked` заливает дорожку основным цветом и переводит бегунок к
логическому концу.

:::example {id="components/toggle/state-checked" label="Выключенный и включённый Toggle"}
:::

### Недоступен

Нативный `disabled` приглушает дорожку и подпись; Toggle не получает фокус и не
отправляется с формой.

:::example {id="components/toggle/state-disabled" label="Недоступный Toggle"}
:::

### Фокус

При переходе клавишей Tab дорожка получает кольцо фокуса по `:focus-visible`.
В примере фокус показан классом `focus-visible` на input.

:::example {id="components/toggle/state-focus" label="Toggle в фокусе"}
:::

## Доступность

- `role="switch"` на input сообщает экранному диктору, что это переключатель, и
  его состояние.
- Подпись `sf-toggle-text` лежит внутри того же `<label>`: она даёт доступное
  имя. Toggle без подписи получает `aria-label` на input.
- Переключается пробелом; видимый фокус рисует компонент.
- Бегунок скрыт от вспомогательных технологий: состояние передаёт input.

## JavaScript

`SF.Toggle.setState(input, state)` меняет поля `checked` и `disabled` нативного
input и перерисовывает оболочку; для другого элемента возвращает `false`.
Событие `change` она не создаёт.

Компонент регистрирует класс `Toggle`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Toggle', callback)` передаёт
класс, когда он зарегистрирован. Параметры: `type` (`simple`, `icon`,
`short`), `size` (`1`, `2`), `label`, `icon` (имя значка для `icon`), `name`,
`value`, `checked`, `disabled`.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Toggle', (Toggle) => {
  const control = new Toggle({param: {type: 'simple', size: '1', label: 'Компактный режим', name: 'compact'}});
  document.querySelector('#settings').append(control.render());
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-toggle` |
| Части | `sf-toggle-container`, `sf-toggle-control`, `sf-toggle-inner`, `sf-toggle-inner-wrap`, `sf-toggle-text` |
| Модификаторы | `sf-toggle--icon`, `sf-toggle--short`, `sf-toggle--simple` |
| Размеры | `sf-toggle--size-1`, `sf-toggle--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-toggle`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-toggle--color` | `var(--sf-on-surface-variant)` | `color` |
| `--sf-toggle--font-size` | не задана; задают модификаторы, например `.sf-toggle--size-1`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-toggle--gap` | не задана; задают модификаторы, например `.sf-toggle--size-1`: `var(--sf-space-1/3)` | `gap` |
| `--sf-toggle--line-height` | не задана; задают модификаторы, например `.sf-toggle--size-1`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-toggle-container--background-color` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-surface-container)` | `background-color` |
| `--sf-toggle-container--border-end-end-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-toggle-container--border-end-start-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-toggle-container--border-start-end-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-toggle-container--border-start-start-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-toggle-container--height` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--short.sf-toggle--size-1 .sf-toggle-container`: `var(--sf-text-height-1/3)` | `height` |
| `--sf-toggle-container--outline-color` | не задана; задают модификаторы, например `.sf-toggle.active[:not-has(input:disabled)].sf-toggle--short .sf-toggle-container`: `var(--sf-primary)` | `outline` |
| `--sf-toggle-container--padding-bottom` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple.sf-toggle--size-1 .sf-toggle-container`: `var(--sf-a2)` | `padding-bottom` |
| `--sf-toggle-container--padding-inline-end` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple.sf-toggle--size-1 .sf-toggle-container`: `var(--sf-a2)` | `padding-inline-end` |
| `--sf-toggle-container--padding-inline-start` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple.sf-toggle--size-1 .sf-toggle-container`: `var(--sf-a2)` | `padding-inline-start` |
| `--sf-toggle-container--padding-top` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple.sf-toggle--size-1 .sf-toggle-container`: `var(--sf-a2)` | `padding-top` |
| `--sf-toggle-container--width` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple.sf-toggle--size-1 .sf-toggle-container`: `var(--sf-text-size-7)` | `width` |
| `--sf-toggle-inner--background-color` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple .sf-toggle-inner`: `var(--sf-on-surface-variant)` | `background-color` |
| `--sf-toggle-inner--border-end-end-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple .sf-toggle-inner`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-toggle-inner--border-end-start-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple .sf-toggle-inner`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-toggle-inner--border-start-end-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple .sf-toggle-inner`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-toggle-inner--border-start-start-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple .sf-toggle-inner`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-toggle-inner--height` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple.sf-toggle--size-1 .sf-toggle-inner`: `var(--sf-text-size-1)` | `height` |
| `--sf-toggle-inner--width` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--simple.sf-toggle--size-1 .sf-toggle-inner`: `var(--sf-text-size-1)` | `width` |
| `--sf-toggle-inner-wrap--background-color` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--icon .sf-toggle-inner-wrap`: `var(--sf-on-surface-variant)` | `background-color` |
| `--sf-toggle-inner-wrap--border-end-end-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--icon .sf-toggle-inner-wrap`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-toggle-inner-wrap--border-end-start-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--icon .sf-toggle-inner-wrap`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-toggle-inner-wrap--border-start-end-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--icon .sf-toggle-inner-wrap`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-toggle-inner-wrap--border-start-start-radius` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--icon .sf-toggle-inner-wrap`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-toggle-inner-wrap--padding-bottom` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--short .sf-toggle-inner-wrap`: `var(--sf-a2)` | `padding-bottom` |
| `--sf-toggle-inner-wrap--padding-inline-end` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--short .sf-toggle-inner-wrap`: `var(--sf-a2)` | `padding-inline-end` |
| `--sf-toggle-inner-wrap--padding-inline-start` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--short .sf-toggle-inner-wrap`: `var(--sf-a2)` | `padding-inline-start` |
| `--sf-toggle-inner-wrap--padding-top` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--short .sf-toggle-inner-wrap`: `var(--sf-a2)` | `padding-top` |

## См. также

- [Переключатель](/ru/components/forms/switch/)
- [Toggle — Smart-компонент](/ru/smart-components/forms/toggle/)
