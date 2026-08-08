---
title: "Цвет фона"
description: "Цвет фона"
---

# Цвет фона

!rtags[background-color]



С помощью модификаторов цвета фона можно задать фон элемента, включая состояния при наведении (`hover``) и при активном
состоянии (`active`).

## Таблица классов

| Класс                             | Значение                                |
|:----------------------------------|:------------------------------------------------------------|
| .bg-transparent                   | background-color: var(`--sf-transparent`)                   |
| .bg-current                       | background-color: currentColor                              |
| .bg-surface-0                     | background-color: var(`--sf-surface-0`)                     |
| .bg-surface-1                     | background-color: var(`--sf-surface-1`)                     |
| .bg-surface-2                     | background-color: var(`--sf-surface-2`)                     |
| .bg-surface-3                     | background-color: var(`--sf-surface-3`)                     |
| .bg-surface-4                     | background-color: var(`--sf-surface-4`)                     |
| .bg-surface                       | background-color: var(`--sf-surface-1`)                     |
| .bg-surface-inverse               | background-color: var(`--sf-surface-inverse`)               |
| .bg-surface-inverse-fixed         | background-color: var(`--sf-surface-inverse-fixed`)         |
| .bg-surface-container             | background-color: var(`--sf-surface-container`)             |
| .hover:bg-surface-container       | background-color: var(`--sf-surface-container-hover`)       |
| .active:bg-surface-container      | background-color: var(`--sf-surface-container-active`)      |
| .bg-on-surface                    | background-color: var(`--sf-on-surface`)                    |
| .hover:bg-on-surface              | background-color: var(`--sf-on-surface-hover`)              |
| .active:bg-on-surface             | background-color: var(`--sf-on-surface-active`)             |
| .bg-on-surface-variant            | background-color: var(`--sf-on-surface-variant`)            |
| .hover:bg-surface-transparent     | background-color: var(`--sf-surface-transparent-hover`)     |
| .active:bg-surface-transparent    | background-color: var(`--sf-surface-transparent-active`)    |
| .bg-surface-transparent-select    | background-color: var(`--sf-surface-transparent-select`)    |
| .bg-surface-transparent-overlay   | background-color: var(`--sf-surface-transparent-overlay`)   |
| .bg-disable                       | background-color: var(`--sf-disable`)                       |
| .bg-primary                       | background-color: var(`--sf-primary`)                       |
| .hover:bg-primary                 | background-color: var(`--sf-primary-hover`)                 |
| .active:bg-primary                | background-color: var(`--sf-primary-active`)                |
| .bg-primary-container             | background-color: var(`--sf-primary-container`)             |
| .hover:bg-primary-container       | background-color: var(`--sf-primary-container-hover`)       |
| .active:bg-primary-container      | background-color: var(`--sf-primary-container-active`)      |
| .hover:bg-primary-transparent     | background-color: var(`--sf-primary-transparent-hover`)     |
| .active:bg-primary-transparent    | background-color: var(`--sf-primary-transparent-active`)    |
| .bg-primary-transparent-select    | background-color: var(`--sf-primary-transparent-select`)    |
| .bg-primary-transparent-overlay   | background-color: var(`--sf-primary-transparent-overlay`)   |
| .bg-secondary                     | background-color: var(`--sf-secondary`)                     |
| .hover:bg-secondary               | background-color: var(`--sf-secondary-hover`)               |
| .active:bg-secondary              | background-color: var(`--sf-secondary-active`)              |
| .bg-secondary-container           | background-color: var(`--sf-secondary-container`)           |
| .hover:bg-secondary-container     | background-color: var(`--sf-secondary-container-hover`)     |
| .active:bg-secondary-container    | background-color: var(`--sf-secondary-container-active`)    |
| .hover:bg-secondary-transparent   | background-color: var(`--sf-secondary-transparent-hover`)   |
| .active:bg-secondary-transparent  | background-color: var(`--sf-secondary-transparent-active`)  |
| .bg-secondary-transparent-select  | background-color: var(`--sf-secondary-transparent-select`)  |
| .bg-secondary-transparent-overlay | background-color: var(`--sf-secondary-transparent-overlay`) |
| .bg-tertiary                      | background-color: var(`--sf-tertiary`)                      |
| .hover:bg-tertiary                | background-color: var(`--sf-tertiary-hover`)                |
| .active:bg-tertiary               | background-color: var(`--sf-tertiary-active`)               |
| .bg-tertiary-container            | background-color: var(`--sf-tertiary-container`)            |
| .hover:bg-tertiary-container      | background-color: var(`--sf-tertiary-container-hover`)      |
| .active:bg-tertiary-container     | background-color: var(`--sf-tertiary-container-active`)     |
| .hover:bg-tertiary-transparent    | background-color: var(`--sf-tertiary-transparent-hover`)    |
| .active:bg-tertiary-transparent   | background-color: var(`--sf-tertiary-transparent-active`)   |
| .bg-tertiary-transparent-select   | background-color: var(`--sf-tertiary-transparent-select`)   |
| .bg-tertiary-transparent-overlay  | background-color: var(`--sf-tertiary-transparent-overlay`)  |
| .bg-error                         | background-color: var(`--sf-error`)                         |
| .hover:bg-error                   | background-color: var(`--sf-error-hover`)                   |
| .active:bg-error                  | background-color: var(`--sf-error-active`)                  |
| .bg-error-container               | background-color: var(`--sf-error-container`)               |
| .hover:bg-error-container         | background-color: var(`--sf-error-container-hover`)         |
| .active:bg-error-container        | background-color: var(`--sf-error-container-active`)        |
| .hover:bg-error-transparent       | background-color: var(`--sf-error-transparent-hover`)       |
| .active:bg-error-transparent      | background-color: var(`--sf-error-transparent-active`)      |
| .bg-error-transparent-select      | background-color: var(`--sf-error-transparent-select`)      |
| .bg-error-transparent-overlay     | background-color: var(`--sf-error-transparent-overlay`)     |
| .bg-warning                       | background-color: var(`--sf-warning`)                       |
| .hover:bg-warning                 | background-color: var(`--sf-warning-hover`)                 |
| .active:bg-warning                | background-color: var(`--sf-warning-active`)                |
| .bg-warning-container             | background-color: var(`--sf-warning-container`)             |
| .hover:bg-warning-container       | background-color: var(`--sf-warning-container-hover`)       |
| .active:bg-warning-container      | background-color: var(`--sf-warning-container-active`)      |
| .hover:bg-warning-transparent     | background-color: var(`--sf-warning-transparent-hover`)     |
| .active:bg-warning-transparent    | background-color: var(`--sf-warning-transparent-active`)    |
| .bg-warning-transparent-select    | background-color: var(`--sf-warning-transparent-select`)    |
| .bg-warning-transparent-overlay   | background-color: var(`--sf-warning-transparent-overlay`)   |
| .bg-success                       | background-color: var(`--sf-success`)                       |
| .hover:bg-success                 | background-color: var(`--sf-success-hover`)                 |
| .active:bg-success                | background-color: var(`--sf-success-active`)                |
| .bg-success-container             | background-color: var(`--sf-success-container`)             |
| .hover:bg-success-container       | background-color: var(`--sf-success-container-hover`)       |
| .active:bg-success-container      | background-color: var(`--sf-success-container-active`)      |
| .hover:bg-success-transparent     | background-color: var(`--sf-success-transparent-hover`)     |
| .active:bg-success-transparent    | background-color: var(`--sf-success-transparent-active`)    |
| .bg-success-transparent-select    | background-color: var(`--sf-success-transparent-select`)    |
| .bg-success-transparent-overlay   | background-color: var(`--sf-success-transparent-overlay`)   |

{.table}

## Описание

Модификаторы цвета фона позволяют задать фоновый цвет для элемента, а также для состояний при наведении (`hover``) и при
активном состоянии (`active`). Основной цвет можно изменять с помощью ролей (primary, secondary, tertiary, etc.).

## Пример использования

```html
<!-- Кнопка с основным цветом фона -->
<button class="p-top-1/2 p-bottom-1/2 p-inline-end-1 p-inline-start-1 bg-primary color-on-surface-inverse radius-1/3 shadow-2 focus:outline-0">
    Click me
</button>
```

```html
<!-- Кнопка с фоном при наведении -->
<button class="p-top-1/2 p-bottom-1/2 p-inline-end-1 p-inline-start-1 bg-primary hover:bg-primary-container color-on-surface-inverse radius-1/3 shadow-2 focus:outline-0 transition">
    Hover me
</button>
```

```html
<!-- Поле ввода с фоном при фокусе -->
<input class="transition border-1 border-outline-variant bg-surface-container focus:border-surface-0 color-primary appearance-none inline-block w-full radius-1/3 p-top-1 p-bottom-1 p-inline-end-1 p-inline-start-1 focus:outline-0"
       placeholder="Focus me">
```

## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=background&group=background-color"&gt;&lt;/iframe&gt;
&lt;/div&gt;
