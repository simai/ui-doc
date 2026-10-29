---
title: "Toggle"
description: "Устаревший двоичный переключатель: как перенести его разметку на переключатель."
profile: reference
---

# Toggle

Toggle — устаревший компонент: тот же контрол, что и
[переключатель](/ru/components/forms/switch/), — нативный checkbox с
`role="switch"`, дорожка и бегунок. В новой разметке берите переключатель
`sf-switch`; эта страница показывает, как перенести на него разметку Toggle.

## Пример

Toggle «Компактный режим» после переноса — переключатель с той же подписью и
тем же полем формы:

:::example {id="components/toggle/overview" label="Toggle, перенесённый на переключатель"}
:::

## Разметка

Перенос сохраняет нативный `<input type="checkbox" role="switch">` с его
`name`, `value`, `checked` и `disabled`; меняются только классы оболочки и
частей. Части переключателя вложены так: `label.sf-switch` →
`sf-switch-toggler` с input и бегунком `sf-switch-inner` →
`sf-switch-container-wrap` с подписью. Полное описание — на странице
[переключателя](/ru/components/forms/switch/).

### Перенос классов

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
| `sf-toggle-text` | `sf-switch-text` внутри `sf-switch-container` в `sf-switch-container-wrap` |
| `SF.Toggle.setState` | `SF.Switch.setState` |

Размеры не совпадают один в один: дорожки Toggle меньше дорожек переключателя
той же ступени. После переноса сверьте форму на глаз.

### Где работает старая разметка

Выпуск поставляет компонент Toggle: загрузчик подключает его стили и скрипт,
когда на странице есть класс `sf-toggle`, а скрипт находит Toggle по
`label.sf-toggle`. Поэтому уже написанная разметка Toggle и
[смарт-компонент Toggle](/ru/smart-components/forms/toggle/) продолжают
работать. Классы и переменные ниже описывают эту разметку; новую разметку на
них не пишите.

## Доступность

- `role="switch"` на input сообщает экранному диктору, что это переключатель, и
  его состояние; при переносе этот атрибут остаётся.
- Подпись лежит внутри того же `<label>` и даёт доступное имя; переключатель
  без подписи получает `aria-label` на input.
- Бегунок скрыт от вспомогательных технологий: состояние передаёт input.

## JavaScript

`SF.Toggle.setState(input, state)` меняет поля `checked` и `disabled` input
внутри `label.sf-toggle` и перерисовывает оболочку. Для перенесённой разметки
вызывайте `SF.Switch.setState(input, state)` с тем же аргументом.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-toggle` |
| Части | `sf-toggle-container`, `sf-toggle-control`, `sf-toggle-inner`, `sf-toggle-inner-wrap`, `sf-toggle-text` |
| Модификаторы | `sf-toggle--icon`, `sf-toggle--short`, `sf-toggle--simple` |
| Размеры | `sf-toggle--size-1`, `sf-toggle--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-toggle`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-toggle-background-color` | Заливка дорожки в выключенном положении; у наведения, нажатия и выключенного состояния свои. | `var(--sf-surface-container)` |
| `--sf-toggle-checked-background-color` | Заливка и обводка дорожки во включённом положении (состояние checked). | `var(--sf-primary)` |
| `--sf-toggle-border-color` | Обводка дорожки в покое (outline, а не рамка); у включённого и выключенного состояния свои. | `var(--sf-outline)` |
| `--sf-toggle-color` | Цвет подписи; у нажатого и выключенного состояния свои. | `var(--sf-on-surface-variant)` |
| `--sf-toggle-gap` | Промежуток между дорожкой и подписью. | `var(--sf-space-1/3)`; зависит от размера |

```css
.sf-toggle {
  --sf-toggle-background-color: var(--sf-surface-container);
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-toggle`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-toggle--color` | `var(--sf-toggle-color, var(--sf-on-surface-variant))` | `color` |
| `--sf-toggle--font-size` | не задана; задают модификаторы, например `.sf-toggle--size-1`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-toggle--gap` | не задана; задают модификаторы, например `.sf-toggle--size-1`: `var(--sf-toggle-gap, var(--sf-space-1/3))` | `gap` |
| `--sf-toggle--line-height` | не задана; задают модификаторы, например `.sf-toggle--size-1`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-toggle-container--background-color` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-toggle-background-color, var(--sf-surface-container))` | `background-color` |
| `--sf-toggle-container--border-end-end-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-toggle-container--border-end-start-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-toggle-container--border-start-end-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-toggle-container--border-start-start-radius` | не задана; задают модификаторы, например `.sf-toggle .sf-toggle-container`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-toggle-container--height` | не задана; задают модификаторы, например `.sf-toggle.sf-toggle--short.sf-toggle--size-1 .sf-toggle-container`: `var(--sf-text-height-1/3)` | `height` |
| `--sf-toggle-container--outline-color` | не задана; задают модификаторы, например `.sf-toggle[:has(input:checked)][:not-has(input:disabled)].sf-toggle--short .sf-toggle-container`: `var(--sf-toggle-checked-background-color, var(--sf-primary))` | `outline` |
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
- [Toggle — смарт-компонент](/ru/smart-components/forms/toggle/)
