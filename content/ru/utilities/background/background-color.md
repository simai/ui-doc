---
title: "Цвет фона"
description: "Заливает элемент цветовой ролью темы, чтобы фон сам подстраивался под светлую и тёмную тему."
---

# Цвет фона

Классы `bg-*` задают `background-color` через цветовые роли темы:
поверхности (`bg-surface-card`), акцентные и статусные роли (`bg-primary`,
`bg-info`, `bg-error-container`) и их состояния. Роль сама подстраивается под
светлую и тёмную тему. Классов для отдельных ступеней палитры нет: оттенок вне
ролей берут из [статической палитры](/ru/guide/colour/palettes/#статическая-палитра).

## Пример

### Поверхности

Поверхности по месту — страница, область, карточка, всплывающая панель и
вложенная в неё, — мягкий контейнер и инверсная поверхность.

:::example {id="utilities/background/background-color" label="Поверхности"}
:::

### Заливка акцентом и статусом

Насыщенная заливка роли; текст на ней берёт парную роль `color-on-*`. У
сведений (`info`) тот же набор, что у успеха, предупреждения и ошибки.

:::example {id="utilities/background/background-color-accent" label="bg-primary … bg-error и bg-surface-disabled"}
:::

### Контейнеры

Мягкая заливка роли для плашек и выделенных блоков; текст на ней —
`color-on-*-container`.

:::example {id="utilities/background/background-color-container" label="bg-*-container"}
:::

### Выбор и плотный слой

`-state-select` — лёгкий слой выбранной строки или пункта,
`-container-strong` — плотная плашка роли поверх содержимого.

:::example {id="utilities/background/background-color-transparent" label="bg-*-state-select и bg-*-container-strong"}
:::

### Состояния

Классы `hover:` и `active:` меняют оттенок той же роли при наведении и
нажатии. Наведите указатель на кнопку, нажмите и удерживайте её.

:::example {id="utilities/background/background-color-states" label="hover: и active:"}
:::

### Служебные значения

`bg-current` берёт цвет текста элемента, `bg-transparent` убирает заливку,
`bg-on-surface` и `bg-on-surface-variant` заливают цветом текста — для
полосок и меток.

:::example {id="utilities/background/background-color-palette" label="bg-transparent, bg-current, bg-on-surface"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-{значение}` | `background-color: var(--sf-{значение})` | `transparent`, `current`, `hue` |
| `bg-surface-2` | `background-color: var(--sf-surface-2); --sf-surface-place: var(--sf-surface-2); --sf-surface-place-solid: var(--sf-surface-2); --sf-surface-place-ground: var(--sf-surface-2); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-card-variant); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-3` | `background-color: var(--sf-surface-3); --sf-surface-place: var(--sf-surface-3); --sf-surface-place-solid: var(--sf-surface-3); --sf-surface-place-ground: var(--sf-surface-3); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-raised-variant); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-4` | `background-color: var(--sf-surface-4); --sf-surface-place: var(--sf-surface-4); --sf-surface-place-solid: var(--sf-surface-4); --sf-surface-place-ground: var(--sf-surface-4); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-popup-variant); --sf-on-surface-container-variant: var(--sf-place--popup-container-variant, light-dark(var(--sf-neutral-35), var(--sf-neutral-90))); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select); .bg-surface-4 > * { --sf-surface-popup: var(--sf-surface-popup-nested); --sf-on-surface-popup-variant: var(--sf-on-surface-popup-nested-variant); --sf-place--popup-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-95)); --sf-elevation-3--surface: var(--sf-surface-popup); --sf-on-elevation-3--variant: var(--sf-on-surface-popup-variant) }` | — |
| `bg-surface` | `background-color: var(--sf-surface-area); --sf-surface-place: var(--sf-surface-area); --sf-surface-place-solid: var(--sf-surface-area); --sf-surface-place-ground: var(--sf-surface-area); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: light-dark(var(--sf-neutral-40), var(--sf-neutral-70)); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-{значение}` | `background-color: var(--sf-surface-{значение})` | `inverse`, `veil`, `disabled` |
| `bg-surface-inverse-fixed` | `background-color: var(--sf-surface-inverse-fixed)` | — |
| `bg-surface-container` | `background-color: var(--sf-surface-container); --sf-on-surface-variant: var(--sf-on-surface-container-variant)` | — |
| `bg-on-surface` | `background-color: var(--sf-on-surface)` | — |
| `bg-on-surface-variant` | `background-color: var(--sf-on-surface-variant)` | — |
| `bg-primary` | `background-color: var(--sf-primary); :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-page { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-page { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-0 { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-0 { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-area { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-area { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-1 { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-1 { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-card { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-card { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-popup { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-popup { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-popup-nested { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-popup-nested { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-2 { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-2 { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-3 { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-3 { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip, .bg-primary-container, .bg-secondary-container, .bg-tertiary-container, .bg-info-container, .bg-success-container, .bg-warning-container, .bg-error-container, .sf-surface-media) .bg-surface-4 { --sf-outline-variant: light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24)) }; :where(.bg-primary, .bg-secondary, .bg-tertiary, .bg-info, .bg-success, .bg-warning, .bg-error, .sf-alert-bar--error .sf-alert-bar-row, .sf-alert-bar--error .sf-alert-bar-strip, .sf-alert-bar--danger .sf-alert-bar-row, .sf-alert-bar--danger .sf-alert-bar-strip, .sf-alert-bar--warning .sf-alert-bar-row, .sf-alert-bar--warning .sf-alert-bar-strip, .sf-alert-bar--info .sf-alert-bar-row, .sf-alert-bar--info .sf-alert-bar-strip) .bg-surface-4 { --sf-primary: var(--sf-place--outer-primary, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-hover: var(--sf-place--outer-primary-hover, light-dark(var(--sf-primary-35), var(--sf-primary-85))); --sf-primary-active: var(--sf-place--outer-primary-active, light-dark(var(--sf-primary-30), var(--sf-primary-90))); --sf-on-primary: var(--sf-place--outer-on-primary, light-dark(var(--sf-white), var(--sf-primary-20))); --sf-primary-container: var(--sf-place--outer-primary-container, light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))); --sf-primary-container-hover: var(--sf-place--outer-primary-container-hover, light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))); --sf-primary-container-active: var(--sf-place--outer-primary-container-active, light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))); --sf-on-primary-container: var(--sf-place--outer-on-primary-container, light-dark(var(--sf-primary-10), var(--sf-primary-90))); --sf-place--plate: initial; --sf-place--on-plate: initial; --sf-place--fill-placeholder: initial }; --sf-surface-place: var(--sf-primary); --sf-surface-place-solid: var(--sf-primary); --sf-surface-place-ground: var(--sf-primary); --sf-surface-underlay: initial; --sf-on-surface: var(--sf-on-primary); --sf-on-surface-variant: light-dark(var(--sf-white--alfa-80), var(--sf-primary-20--alfa-80)); --sf-on-surface-container-variant: light-dark(var(--sf-white--alfa-80), var(--sf-primary-20--alfa-80)); --sf-surface-state-hover: light-dark(var(--sf-white--alfa-4), var(--sf-primary-20--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-white--alfa-8), var(--sf-primary-20--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-white--alfa-12), var(--sf-primary-20--alfa-12)); --sf-surface-container: light-dark(var(--sf-white--alfa-12), var(--sf-primary-20--alfa-12)); --sf-surface-container-hover: light-dark(var(--sf-white--alfa-16), var(--sf-primary-20--alfa-16)); --sf-surface-container-active: light-dark(var(--sf-white--alfa-20), var(--sf-primary-20--alfa-20)); --sf-outline: light-dark(var(--sf-white--alfa-64), var(--sf-primary-20--alfa-64)); --sf-outline-variant: light-dark(var(--sf-white--alfa-24), var(--sf-primary-20--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-white--alfa-12), var(--sf-primary-20--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-white--alfa-64), var(--sf-primary-20--alfa-64)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select); --sf-place--outer-primary: var(--sf-primary); --sf-place--outer-primary-hover: var(--sf-primary-hover); --sf-place--outer-primary-active: var(--sf-primary-active); --sf-place--outer-on-primary: var(--sf-on-primary); --sf-place--outer-primary-container: var(--sf-primary-container); --sf-place--outer-primary-container-hover: var(--sf-primary-container-hover); --sf-place--outer-primary-container-active: var(--sf-primary-container-active); --sf-place--outer-on-primary-container: var(--sf-on-primary-container); .bg-primary > * { --sf-primary: light-dark(var(--sf-white), var(--sf-primary-20)); --sf-primary-hover: light-dark(var(--sf-primary-95), var(--sf-primary-25)); --sf-primary-active: light-dark(var(--sf-primary-90), var(--sf-primary-30)); --sf-on-primary: var(--sf-surface-place-solid, light-dark(var(--sf-primary-40), var(--sf-primary-80))); --sf-primary-container: light-dark(var(--sf-white--alfa-12), var(--sf-primary-20--alfa-12)); --sf-primary-container-hover: light-dark(var(--sf-white--alfa-8), var(--sf-primary-20--alfa-16)); --sf-primary-container-active: light-dark(var(--sf-white--alfa-4), var(--sf-primary-20--alfa-20)); --sf-on-primary-container: light-dark(var(--sf-white), var(--sf-primary-20)); --sf-place--plate: light-dark(var(--sf-white), var(--sf-primary-90)); --sf-place--on-plate: light-dark(var(--sf-primary-40), var(--sf-primary-20)); --sf-place--fill-placeholder: light-dark(var(--sf-white), var(--sf-primary-20)) }` | — |
| `bg-{значение}-container` | `background-color: var(--sf-{значение}-container); --sf-surface-place: var(--sf-{значение}-container); --sf-surface-place-solid: initial; --sf-surface-underlay: initial; --sf-surface-container: var(--sf-{значение}-container); --sf-surface-container-hover: var(--sf-{значение}-container-hover); --sf-surface-container-active: var(--sf-{значение}-container-active); --sf-surface-state-hover: var(--sf-{значение}-state-hover); --sf-surface-state-select: var(--sf-{значение}-state-select); --sf-surface-state-active: var(--sf-{значение}-state-active); --sf-outline: var(--sf-{значение}-outline); --sf-outline-variant: var(--sf-{значение}-container-strong); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `bg-{значение}` | `background-color: var(--sf-{значение}); --sf-surface-place: var(--sf-{значение}); --sf-surface-place-solid: var(--sf-{значение}); --sf-surface-place-ground: var(--sf-{значение}); --sf-surface-underlay: initial; --sf-on-surface: var(--sf-on-{значение}); --sf-on-surface-variant: light-dark(var(--sf-white--alfa-80), var(--sf-{значение}-20--alfa-80)); --sf-on-surface-container-variant: light-dark(var(--sf-white--alfa-80), var(--sf-{значение}-20--alfa-80)); --sf-surface-state-hover: light-dark(var(--sf-white--alfa-4), var(--sf-{значение}-20--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-white--alfa-8), var(--sf-{значение}-20--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-white--alfa-12), var(--sf-{значение}-20--alfa-12)); --sf-surface-container: light-dark(var(--sf-white--alfa-12), var(--sf-{значение}-20--alfa-12)); --sf-surface-container-hover: light-dark(var(--sf-white--alfa-16), var(--sf-{значение}-20--alfa-16)); --sf-surface-container-active: light-dark(var(--sf-white--alfa-20), var(--sf-{значение}-20--alfa-20)); --sf-outline: light-dark(var(--sf-white--alfa-64), var(--sf-{значение}-20--alfa-64)); --sf-outline-variant: light-dark(var(--sf-white--alfa-24), var(--sf-{значение}-20--alfa-24)); --sf-surface-disabled: light-dark(var(--sf-white--alfa-12), var(--sf-{значение}-20--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-white--alfa-64), var(--sf-{значение}-20--alfa-64)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select); --sf-place--outer-primary: var(--sf-primary); --sf-place--outer-primary-hover: var(--sf-primary-hover); --sf-place--outer-primary-active: var(--sf-primary-active); --sf-place--outer-on-primary: var(--sf-on-primary); --sf-place--outer-primary-container: var(--sf-primary-container); --sf-place--outer-primary-container-hover: var(--sf-primary-container-hover); --sf-place--outer-primary-container-active: var(--sf-primary-container-active); --sf-place--outer-on-primary-container: var(--sf-on-primary-container); .bg-{значение} > * { --sf-primary: light-dark(var(--sf-white), var(--sf-{значение}-20)); --sf-primary-hover: light-dark(var(--sf-{значение}-95), var(--sf-{значение}-25)); --sf-primary-active: light-dark(var(--sf-{значение}-90), var(--sf-{значение}-30)); --sf-on-primary: var(--sf-surface-place-solid, light-dark(var(--sf-{значение}-40), var(--sf-{значение}-80))); --sf-primary-container: light-dark(var(--sf-white--alfa-12), var(--sf-{значение}-20--alfa-12)); --sf-primary-container-hover: light-dark(var(--sf-white--alfa-8), var(--sf-{значение}-20--alfa-16)); --sf-primary-container-active: light-dark(var(--sf-white--alfa-4), var(--sf-{значение}-20--alfa-20)); --sf-on-primary-container: light-dark(var(--sf-white), var(--sf-{значение}-20)); --sf-place--plate: light-dark(var(--sf-white), var(--sf-{значение}-90)); --sf-place--on-plate: light-dark(var(--sf-{значение}-40), var(--sf-{значение}-20)); --sf-place--fill-placeholder: light-dark(var(--sf-white), var(--sf-{значение}-20)) }` | `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `bg-{значение}-state-select` | `background-color: var(--sf-{значение}-state-select)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-{значение}-container-strong` | `background-color: var(--sf-{значение}-container-strong)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `bg-surface-page` | `background-color: var(--sf-surface-page); --sf-surface-place: var(--sf-surface-page); --sf-surface-place-solid: var(--sf-surface-page); --sf-surface-place-ground: var(--sf-surface-page); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: light-dark(var(--sf-neutral-40), var(--sf-neutral-70)); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-area` | `background-color: var(--sf-surface-area); --sf-surface-place: var(--sf-surface-area); --sf-surface-place-solid: var(--sf-surface-area); --sf-surface-place-ground: var(--sf-surface-area); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: light-dark(var(--sf-neutral-40), var(--sf-neutral-70)); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-card` | `background-color: var(--sf-surface-card); --sf-surface-place: var(--sf-surface-card); --sf-surface-place-solid: var(--sf-surface-card); --sf-surface-place-ground: var(--sf-surface-card); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-card-variant); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-85)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-surface-popup` | `background-color: var(--sf-surface-popup); --sf-surface-place: var(--sf-surface-popup); --sf-surface-place-solid: var(--sf-surface-popup); --sf-surface-place-ground: var(--sf-surface-popup); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-popup-variant); --sf-on-surface-container-variant: var(--sf-place--popup-container-variant, light-dark(var(--sf-neutral-35), var(--sf-neutral-90))); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select); .bg-surface-popup > * { --sf-surface-popup: var(--sf-surface-popup-nested); --sf-on-surface-popup-variant: var(--sf-on-surface-popup-nested-variant); --sf-place--popup-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-95)); --sf-elevation-3--surface: var(--sf-surface-popup); --sf-on-elevation-3--variant: var(--sf-on-surface-popup-variant) }` | — |
| `bg-surface-popup-nested` | `background-color: var(--sf-surface-popup-nested); --sf-surface-place: var(--sf-surface-popup-nested); --sf-surface-place-solid: var(--sf-surface-popup-nested); --sf-surface-place-ground: var(--sf-surface-popup-nested); --sf-on-surface: light-dark(var(--sf-neutral-10), var(--sf-neutral-90)); --sf-on-surface-variant: var(--sf-on-surface-popup-nested-variant); --sf-on-surface-container-variant: light-dark(var(--sf-neutral-35), var(--sf-neutral-95)); --sf-surface-state-hover: light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4)); --sf-surface-state-select: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-state-active: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container: light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8)); --sf-surface-container-hover: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-surface-container-active: light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16)); --sf-outline: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-surface-disabled: light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12)); --sf-on-surface-disabled: light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48)); --sf-on-surface-muted: var(--sf-on-surface-disabled); --sf-surface-underlay: initial; --sf-disable: var(--sf-surface-disabled); --sf-on-disable: var(--sf-on-surface-disabled); --sf-on-surface-container--variant: var(--sf-on-surface-container-variant); --sf-surface-transparent-active: var(--sf-surface-state-active); --sf-surface-transparent-hover: var(--sf-surface-state-hover); --sf-surface-transparent-select: var(--sf-surface-state-select)` | — |
| `bg-scrim` | `background-color: var(--sf-scrim-color)` | — |
| `bg-hue-container` | `background-color: var(--sf-hue-container)` | — |
| `hover:bg-{значение}-container` (`.hover:bg-{значение}-container:hover`) | `background-color: var(--sf-{значение}-container-hover)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info`, `hue` |
| `hover:bg-on-surface` (`.hover:bg-on-surface:hover`) | `background-color: var(--sf-on-surface-hover)` | — |
| `hover:bg-{значение}` (`.hover:bg-{значение}:hover`) | `background-color: var(--sf-{значение}-hover)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `hover:bg-{значение}-state` (`.hover:bg-{значение}-state:hover`) | `background-color: var(--sf-{значение}-state-hover)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |
| `active:bg-{значение}-container` (`.active:bg-{значение}-container:active`) | `background-color: var(--sf-{значение}-container-active)` | `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info`, `hue` |
| `active:bg-on-surface` (`.active:bg-on-surface:active`) | `background-color: var(--sf-on-surface-active)` | — |
| `active:bg-{значение}` (`.active:bg-{значение}:active`) | `background-color: var(--sf-{значение}-active)` | `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info` |
| `active:bg-{значение}-state` (`.active:bg-{значение}-state:active`) | `background-color: var(--sf-{значение}-state-active)` | `info`, `surface`, `primary`, `secondary`, `tertiary`, `error`, `warning`, `success` |

Прежние имена работают до 2027-01-01: `active:bg-error-transparent` → `active:bg-error-state`, `active:bg-primary-transparent` → `active:bg-primary-state`, `active:bg-secondary-transparent` → `active:bg-secondary-state`, `active:bg-success-transparent` → `active:bg-success-state`, `active:bg-surface-transparent` → `active:bg-surface-state`, `active:bg-tertiary-transparent` → `active:bg-tertiary-state`, `active:bg-warning-transparent` → `active:bg-warning-state`, `bg-disable` → `bg-surface-disabled`, `bg-error-transparent-overlay` → `bg-error-container-strong`, `bg-error-transparent-select` → `bg-error-state-select`, `bg-primary-transparent-overlay` → `bg-primary-container-strong`, `bg-primary-transparent-select` → `bg-primary-state-select`, `bg-secondary-transparent-overlay` → `bg-secondary-container-strong`, `bg-secondary-transparent-select` → `bg-secondary-state-select`, `bg-success-transparent-overlay` → `bg-success-container-strong`, `bg-success-transparent-select` → `bg-success-state-select`, `bg-surface-0` → `bg-surface-page`, `bg-surface-1` → `bg-surface-area`, `bg-surface-transparent-overlay` → `bg-surface-container-strong`, `bg-surface-transparent-select` → `bg-surface-state-select`, `bg-tertiary-transparent-overlay` → `bg-tertiary-container-strong`, `bg-tertiary-transparent-select` → `bg-tertiary-state-select`, `bg-warning-transparent-overlay` → `bg-warning-container-strong`, `bg-warning-transparent-select` → `bg-warning-state-select`, `hover:bg-error-transparent` → `hover:bg-error-state`, `hover:bg-primary-transparent` → `hover:bg-primary-state`, `hover:bg-secondary-transparent` → `hover:bg-secondary-state`, `hover:bg-success-transparent` → `hover:bg-success-state`, `hover:bg-surface-transparent` → `hover:bg-surface-state`, `hover:bg-tertiary-transparent` → `hover:bg-tertiary-state`, `hover:bg-warning-transparent` → `hover:bg-warning-state`. Все замены — на странице [Как обновить проект](/ru/guide/connection/updating/).

Другие классы записи `utility-c17-legacy-palette-classes` журнала уходят и работают до 2027-01-01; замена — класс оттенка рядом с ролевым классом: `sf-hue-{оттенок} bg-hue` ([Как обновить проект](/ru/guide/connection/updating/)); в новой разметке их не пишите.

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`, `active:`. Например: `hover:bg-surface-container`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-area` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-surface-container-strong` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-primary-state-select` | `light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-90--alfa-8))` |
| `--sf-primary-container-strong` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-state-select` | `light-dark(var(--sf-secondary-50--alfa-8), var(--sf-secondary-90--alfa-8))` |
| `--sf-secondary-container-strong` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-state-select` | `light-dark(var(--sf-tertiary-50--alfa-8), var(--sf-tertiary-90--alfa-8))` |
| `--sf-tertiary-container-strong` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-state-select` | `light-dark(var(--sf-error-50--alfa-8), var(--sf-error-90--alfa-8))` |
| `--sf-error-container-strong` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-state-select` | `light-dark(var(--sf-warning-50--alfa-8), var(--sf-warning-90--alfa-8))` |
| `--sf-warning-container-strong` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-state-select` | `light-dark(var(--sf-success-50--alfa-8), var(--sf-success-90--alfa-8))` |
| `--sf-success-container-strong` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |
| `--sf-info` | `light-dark(var(--sf-info-40), var(--sf-info-80))` |
| `--sf-info-container` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-50--alfa-24))` |
| `--sf-info-state-select` | `light-dark(var(--sf-info-50--alfa-8), var(--sf-info-90--alfa-8))` |
| `--sf-info-container-strong` | `light-dark(var(--sf-info-50--alfa-24), var(--sf-info-90--alfa-24))` |
| `--sf-surface-card` | `light-dark(var(--sf-surface-page), var(--sf-surface-2))` |
| `--sf-surface-popup-nested` | `light-dark(var(--sf-surface-page), var(--sf-surface-5))` |
| `--sf-surface-veil` | `light-dark(var(--sf-black--alfa-8), var(--sf-white--alfa-8))` |
| `--sf-scrim-color` | `var(--sf-black--alfa-64)` |
| `--sf-hue` | задаётся темой |
| `--sf-hue-container` | задаётся темой |
| `--sf-neutral-10` | `#1a1b1f` |
| `--sf-neutral-90` | `#e3e2e7` |
| `--sf-neutral-40` | `#5d5e63` |
| `--sf-neutral-70` | `#ababb0` |
| `--sf-neutral-35` | `#515257` |
| `--sf-neutral-85` | `#d4d4d9` |
| `--sf-neutral-50--alfa-4` | `rgba(118,119,124,0.03922)` |
| `--sf-neutral-90--alfa-4` | `rgba(227,226,231,0.03922)` |
| `--sf-neutral-50--alfa-8` | `rgba(118,119,124,0.07843)` |
| `--sf-neutral-90--alfa-8` | `rgba(227,226,231,0.07843)` |
| `--sf-neutral-50--alfa-12` | `rgba(118,119,124,0.12157)` |
| `--sf-neutral-90--alfa-12` | `rgba(227,226,231,0.12157)` |
| `--sf-neutral-50--alfa-16` | `rgba(118,119,124,0.16078)` |
| `--sf-neutral-90--alfa-16` | `rgba(227,226,231,0.16078)` |
| `--sf-neutral-50--alfa-80` | `rgba(118,119,124,0.8)` |
| `--sf-neutral-90--alfa-48` | `rgba(227,226,231,0.47843)` |
| `--sf-neutral-50--alfa-24` | `rgba(118,119,124,0.23922)` |
| `--sf-neutral-90--alfa-24` | `rgba(227,226,231,0.23922)` |
| `--sf-primary-40` | `#005bbe` |
| `--sf-primary-80` | `#acc7ff` |
| `--sf-primary-35` | `#0050a7` |
| `--sf-primary-85` | `#c2d5ff` |
| `--sf-primary-30` | `#004491` |
| `--sf-primary-90` | `#d7e2ff` |
| `--sf-primary-20` | `#002f67` |
| `--sf-primary-50--alfa-12` | `rgba(0,115,237,0.12157)` |
| `--sf-primary-50--alfa-24` | `rgba(0,115,237,0.23922)` |
| `--sf-primary-50--alfa-16` | `rgba(0,115,237,0.16078)` |
| `--sf-primary-50--alfa-28` | `rgba(0,115,237,0.27843)` |
| `--sf-primary-50--alfa-20` | `rgba(0,115,237,0.2)` |
| `--sf-primary-50--alfa-32` | `rgba(0,115,237,0.32157)` |
| `--sf-primary-10` | `#001a40` |
| `--sf-on-surface-card-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-on-surface-popup-nested-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-neutral-95` | `#f1f0f6` |
| `--sf-neutral-50` | `#76777c` |
| `--sf-on-surface-raised-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-white--alfa-80` | `rgba(255,255,255,0.8)` |
| `--sf-primary-20--alfa-80` | `rgba(0,47,103,0.8)` |
| `--sf-white--alfa-4` | `rgba(255,255,255,0.03922)` |
| `--sf-primary-20--alfa-4` | `rgba(0,47,103,0.03922)` |
| `--sf-white--alfa-8` | `rgba(255,255,255,0.07843)` |
| `--sf-primary-20--alfa-8` | `rgba(0,47,103,0.07843)` |
| `--sf-white--alfa-12` | `rgba(255,255,255,0.12157)` |
| `--sf-primary-20--alfa-12` | `rgba(0,47,103,0.12157)` |
| `--sf-white--alfa-16` | `rgba(255,255,255,0.16078)` |
| `--sf-primary-20--alfa-16` | `rgba(0,47,103,0.16078)` |
| `--sf-white--alfa-20` | `rgba(255,255,255,0.2)` |
| `--sf-primary-20--alfa-20` | `rgba(0,47,103,0.2)` |
| `--sf-white--alfa-64` | `rgba(255,255,255,0.63922)` |
| `--sf-primary-20--alfa-64` | `rgba(0,47,103,0.63922)` |
| `--sf-white--alfa-24` | `rgba(255,255,255,0.23922)` |
| `--sf-primary-20--alfa-24` | `rgba(0,47,103,0.23922)` |
| `--sf-primary-state-hover` | `light-dark(var(--sf-primary-50--alfa-4), var(--sf-primary-90--alfa-4))` |
| `--sf-primary-state-active` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-90--alfa-12))` |
| `--sf-primary-outline` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-on-secondary` | `light-dark(var(--sf-white), var(--sf-secondary-20))` |
| `--sf-secondary-20--alfa-80` | `rgba(37,48,71,0.8)` |
| `--sf-secondary-20--alfa-4` | `rgba(37,48,71,0.03922)` |
| `--sf-secondary-20--alfa-8` | `rgba(37,48,71,0.07843)` |
| `--sf-secondary-20--alfa-12` | `rgba(37,48,71,0.12157)` |
| `--sf-secondary-20--alfa-16` | `rgba(37,48,71,0.16078)` |
| `--sf-secondary-20--alfa-20` | `rgba(37,48,71,0.2)` |
| `--sf-secondary-20--alfa-64` | `rgba(37,48,71,0.63922)` |
| `--sf-secondary-20--alfa-24` | `rgba(37,48,71,0.23922)` |
| `--sf-secondary-container-hover` | `light-dark(var(--sf-secondary-50--alfa-16), var(--sf-secondary-50--alfa-28))` |
| `--sf-secondary-container-active` | `light-dark(var(--sf-secondary-50--alfa-20), var(--sf-secondary-50--alfa-32))` |
| `--sf-secondary-state-hover` | `light-dark(var(--sf-secondary-50--alfa-4), var(--sf-secondary-90--alfa-4))` |
| `--sf-secondary-state-active` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-90--alfa-12))` |
| `--sf-secondary-outline` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-on-tertiary` | `light-dark(var(--sf-white), var(--sf-tertiary-20))` |
| `--sf-tertiary-20--alfa-80` | `rgba(74,30,84,0.8)` |
| `--sf-tertiary-20--alfa-4` | `rgba(74,30,84,0.03922)` |
| `--sf-tertiary-20--alfa-8` | `rgba(74,30,84,0.07843)` |
| `--sf-tertiary-20--alfa-12` | `rgba(74,30,84,0.12157)` |
| `--sf-tertiary-20--alfa-16` | `rgba(74,30,84,0.16078)` |
| `--sf-tertiary-20--alfa-20` | `rgba(74,30,84,0.2)` |
| `--sf-tertiary-20--alfa-64` | `rgba(74,30,84,0.63922)` |
| `--sf-tertiary-20--alfa-24` | `rgba(74,30,84,0.23922)` |
| `--sf-tertiary-container-hover` | `light-dark(var(--sf-tertiary-50--alfa-16), var(--sf-tertiary-50--alfa-28))` |
| `--sf-tertiary-container-active` | `light-dark(var(--sf-tertiary-50--alfa-20), var(--sf-tertiary-50--alfa-32))` |
| `--sf-tertiary-state-hover` | `light-dark(var(--sf-tertiary-50--alfa-4), var(--sf-tertiary-90--alfa-4))` |
| `--sf-tertiary-state-active` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-90--alfa-12))` |
| `--sf-tertiary-outline` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-on-info` | `light-dark(var(--sf-white), var(--sf-info-20))` |
| `--sf-info-20--alfa-80` | `var(--sf-blue-20--alfa-80)` |
| `--sf-info-20--alfa-4` | `var(--sf-blue-20--alfa-4)` |
| `--sf-info-20--alfa-8` | `var(--sf-blue-20--alfa-8)` |
| `--sf-info-20--alfa-12` | `var(--sf-blue-20--alfa-12)` |
| `--sf-info-20--alfa-16` | `var(--sf-blue-20--alfa-16)` |
| `--sf-info-20--alfa-20` | `var(--sf-blue-20--alfa-20)` |
| `--sf-info-20--alfa-64` | `var(--sf-blue-20--alfa-64)` |
| `--sf-info-20--alfa-24` | `var(--sf-blue-20--alfa-24)` |
| `--sf-info-container-hover` | `light-dark(var(--sf-info-50--alfa-16), var(--sf-info-50--alfa-28))` |
| `--sf-info-container-active` | `light-dark(var(--sf-info-50--alfa-20), var(--sf-info-50--alfa-32))` |
| `--sf-info-state-hover` | `light-dark(var(--sf-info-50--alfa-4), var(--sf-info-90--alfa-4))` |
| `--sf-info-state-active` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-90--alfa-12))` |
| `--sf-info-outline` | `light-dark(var(--sf-info-50), var(--sf-info-60))` |
| `--sf-on-success` | `light-dark(var(--sf-white), var(--sf-success-20))` |
| `--sf-success-20--alfa-80` | `var(--sf-green-20--alfa-80)` |
| `--sf-success-20--alfa-4` | `var(--sf-green-20--alfa-4)` |
| `--sf-success-20--alfa-8` | `var(--sf-green-20--alfa-8)` |
| `--sf-success-20--alfa-12` | `var(--sf-green-20--alfa-12)` |
| `--sf-success-20--alfa-16` | `var(--sf-green-20--alfa-16)` |
| `--sf-success-20--alfa-20` | `var(--sf-green-20--alfa-20)` |
| `--sf-success-20--alfa-64` | `var(--sf-green-20--alfa-64)` |
| `--sf-success-20--alfa-24` | `var(--sf-green-20--alfa-24)` |
| `--sf-success-container-hover` | `light-dark(var(--sf-success-50--alfa-16), var(--sf-success-50--alfa-28))` |
| `--sf-success-container-active` | `light-dark(var(--sf-success-50--alfa-20), var(--sf-success-50--alfa-32))` |
| `--sf-success-state-hover` | `light-dark(var(--sf-success-50--alfa-4), var(--sf-success-90--alfa-4))` |
| `--sf-success-state-active` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-90--alfa-12))` |
| `--sf-success-outline` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |
| `--sf-on-warning` | `light-dark(var(--sf-white), var(--sf-warning-20))` |
| `--sf-warning-20--alfa-80` | `var(--sf-amber-20--alfa-80)` |
| `--sf-warning-20--alfa-4` | `var(--sf-amber-20--alfa-4)` |
| `--sf-warning-20--alfa-8` | `var(--sf-amber-20--alfa-8)` |
| `--sf-warning-20--alfa-12` | `var(--sf-amber-20--alfa-12)` |
| `--sf-warning-20--alfa-16` | `var(--sf-amber-20--alfa-16)` |
| `--sf-warning-20--alfa-20` | `var(--sf-amber-20--alfa-20)` |
| `--sf-warning-20--alfa-64` | `var(--sf-amber-20--alfa-64)` |
| `--sf-warning-20--alfa-24` | `var(--sf-amber-20--alfa-24)` |
| `--sf-warning-container-hover` | `light-dark(var(--sf-warning-50--alfa-16), var(--sf-warning-50--alfa-28))` |
| `--sf-warning-container-active` | `light-dark(var(--sf-warning-50--alfa-20), var(--sf-warning-50--alfa-32))` |
| `--sf-warning-state-hover` | `light-dark(var(--sf-warning-50--alfa-4), var(--sf-warning-90--alfa-4))` |
| `--sf-warning-state-active` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-90--alfa-12))` |
| `--sf-warning-outline` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-on-error` | `light-dark(var(--sf-white), var(--sf-error-20))` |
| `--sf-error-20--alfa-80` | `var(--sf-red-20--alfa-80)` |
| `--sf-error-20--alfa-4` | `var(--sf-red-20--alfa-4)` |
| `--sf-error-20--alfa-8` | `var(--sf-red-20--alfa-8)` |
| `--sf-error-20--alfa-12` | `var(--sf-red-20--alfa-12)` |
| `--sf-error-20--alfa-16` | `var(--sf-red-20--alfa-16)` |
| `--sf-error-20--alfa-20` | `var(--sf-red-20--alfa-20)` |
| `--sf-error-20--alfa-64` | `var(--sf-red-20--alfa-64)` |
| `--sf-error-20--alfa-24` | `var(--sf-red-20--alfa-24)` |
| `--sf-error-container-hover` | `light-dark(var(--sf-error-50--alfa-16), var(--sf-error-50--alfa-28))` |
| `--sf-error-container-active` | `light-dark(var(--sf-error-50--alfa-20), var(--sf-error-50--alfa-32))` |
| `--sf-error-state-hover` | `light-dark(var(--sf-error-50--alfa-4), var(--sf-error-90--alfa-4))` |
| `--sf-error-state-active` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-90--alfa-12))` |
| `--sf-error-outline` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-on-surface-hover` | `light-dark(var(--sf-neutral-15), var(--sf-neutral-85))` |
| `--sf-secondary-hover` | `light-dark(var(--sf-secondary-35), var(--sf-secondary-85))` |
| `--sf-tertiary-hover` | `light-dark(var(--sf-tertiary-35), var(--sf-tertiary-85))` |
| `--sf-error-hover` | `light-dark(var(--sf-error-35), var(--sf-error-85))` |
| `--sf-warning-hover` | `light-dark(var(--sf-warning-35), var(--sf-warning-85))` |
| `--sf-success-hover` | `light-dark(var(--sf-success-35), var(--sf-success-85))` |
| `--sf-info-hover` | `light-dark(var(--sf-info-35), var(--sf-info-85))` |
| `--sf-hue-container-hover` | задаётся темой |
| `--sf-on-surface-active` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-80))` |
| `--sf-secondary-active` | `light-dark(var(--sf-secondary-30), var(--sf-secondary-90))` |
| `--sf-tertiary-active` | `light-dark(var(--sf-tertiary-30), var(--sf-tertiary-90))` |
| `--sf-error-active` | `light-dark(var(--sf-error-30), var(--sf-error-90))` |
| `--sf-warning-active` | `light-dark(var(--sf-warning-30), var(--sf-warning-90))` |
| `--sf-success-active` | `light-dark(var(--sf-success-30), var(--sf-success-90))` |
| `--sf-info-active` | `light-dark(var(--sf-info-30), var(--sf-info-90))` |
| `--sf-hue-container-active` | задаётся темой |
| `--sf-primary-95` | `#edf0ff` |
| `--sf-primary-25` | `#00397c` |
| `--sf-secondary-20` | `#253047` |
| `--sf-secondary-95` | `#edf0ff` |
| `--sf-secondary-25` | `#303b52` |
| `--sf-secondary-90` | `#d7e2ff` |
| `--sf-secondary-30` | `#3c475e` |
| `--sf-secondary-40` | `#535e77` |
| `--sf-secondary-80` | `#bbc6e3` |
| `--sf-tertiary-20` | `#4a1e54` |
| `--sf-tertiary-95` | `#ffebfd` |
| `--sf-tertiary-25` | `#562960` |
| `--sf-tertiary-90` | `#fdd6ff` |
| `--sf-tertiary-30` | `#63356c` |
| `--sf-tertiary-40` | `#7c4c86` |
| `--sf-tertiary-80` | `#ecb3f4` |
| `--sf-info-20` | `var(--sf-blue-20)` |
| `--sf-info-95` | `var(--sf-blue-95)` |
| `--sf-info-25` | `var(--sf-blue-25)` |
| `--sf-info-90` | `var(--sf-blue-90)` |
| `--sf-info-30` | `var(--sf-blue-30)` |
| `--sf-info-40` | `var(--sf-blue-40)` |
| `--sf-info-80` | `var(--sf-blue-80)` |
| `--sf-success-20` | `var(--sf-green-20)` |
| `--sf-success-95` | `var(--sf-green-95)` |
| `--sf-success-25` | `var(--sf-green-25)` |
| `--sf-success-90` | `var(--sf-green-90)` |
| `--sf-success-30` | `var(--sf-green-30)` |
| `--sf-success-40` | `var(--sf-green-40)` |
| `--sf-success-80` | `var(--sf-green-80)` |
| `--sf-warning-20` | `var(--sf-amber-20)` |
| `--sf-warning-95` | `var(--sf-amber-95)` |
| `--sf-warning-25` | `var(--sf-amber-25)` |
| `--sf-warning-90` | `var(--sf-amber-90)` |
| `--sf-warning-30` | `var(--sf-amber-30)` |
| `--sf-warning-40` | `var(--sf-amber-40)` |
| `--sf-warning-80` | `var(--sf-amber-80)` |
| `--sf-error-20` | `var(--sf-red-20)` |
| `--sf-error-95` | `var(--sf-red-95)` |
| `--sf-error-25` | `var(--sf-red-25)` |
| `--sf-error-90` | `var(--sf-red-90)` |
| `--sf-error-30` | `var(--sf-red-30)` |
| `--sf-error-40` | `var(--sf-red-40)` |
| `--sf-error-80` | `var(--sf-red-80)` |

## Применение

### Как выбрать

| Задача | Классы |
| :--- | :--- |
| Фон страницы и крупных блоков | `bg-surface-page`, `bg-surface-area`, `bg-surface-card`, `bg-surface-popup` |
| Мягкая подложка без смысла | `bg-surface-container` |
| Главное действие, акцент | `bg-primary`, `bg-secondary`, `bg-tertiary` |
| Статус | `bg-info`, `bg-success`, `bg-warning`, `bg-error` |
| Плашка статуса или акцента | `bg-*-container` |
| Выбранная строка, плотная плашка | `bg-*-state-select`, `bg-*-container-strong` |
| Тёмная плашка на светлой теме и наоборот | `bg-surface-inverse` |

### Парный цвет текста

Заливке роли нужен текст своей пары, иначе контраст не гарантирован:

| Фон | Текст |
| :--- | :--- |
| `bg-surface*`, `bg-surface-container` | `color-on-surface`, `color-on-surface-variant` |
| `bg-primary` | `color-on-primary` |
| `bg-primary-container` | `color-on-primary-container` |
| `bg-surface-inverse` | `color-on-surface-inverse` |
| `bg-info` | `color-on-info` |
| `bg-info-container` | `color-on-info-container` |
| `bg-surface-disabled` | `color-on-surface-disabled` |

```html
<div class="bg-error-container color-on-error-container p-2 radius-ui">
  Платёж не прошёл
</div>
```

### Состояния кнопки

Класс состояния не заменяет основной: `hover:bg-primary` даёт оттенок
наведения роли `primary`, поэтому его ставят рядом с `bg-primary`. Для
кнопки без заливки основного класса нет — заливка появляется только при
наведении.

```html
<button class="bg-primary color-on-primary hover:bg-primary active:bg-primary">Сохранить</button>
<button class="color-primary hover:bg-primary-state active:bg-primary-state">Отмена</button>
```

`hover:` и `active:` есть у ролей `surface-container`, `on-surface`,
`surface-state` и у каждой акцентной и статусной роли в трёх видах:
заливка, `-container`, `-state`.

## Ограничения

- Префиксов ширины экрана у семейства нет.
- Цвет фона не сообщает смысл программам экранного доступа: статус
  дублируйте текстом или значком.

## См. также

- [Цвет текста](/ru/utilities/text-formatting/text-color/)
- [Брендовые цвета фона](/ru/utilities/background/background-color-brand/)
- [Цветовые роли](/ru/guide/colour/colour-roles/)
- [Высота](/ru/utilities/shadows/elevation/)
