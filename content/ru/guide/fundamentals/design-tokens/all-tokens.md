---
title: "Все переменные"
description: "Полный список переменных, которые объявляет ядро SIMAI Framework, со значениями по умолчанию, кроме примитивов цвета и размера."
---

# Все переменные

562 переменных, которые объявляет ядро, со значениями по умолчанию.
Примитивы сюда не входят: ступени цвета, размера и прозрачности — это ряды
значений, у каждого ряда своя страница, и повторять их здесь значило бы
держать вторую копию.

Переменная, объявленная дважды, несёт по значению на тему или на ширину
экрана; показаны оба, через точку — сначала первое объявление, затем второе.

## Когда применять

Когда нужно узнать, есть ли во фреймворке переменная для нужного, и что она
даёт по умолчанию, — прежде чем заводить свою.

## Пример

Переопределяются они как обычные свойства, на любом уровне:

```css
.theme-light,
.theme-dark {
    --sf-radius--ui: var(--sf-radius-1\/2);
}
```

## Список

Страница собирается из байтов ядра: `node scripts/build-token-reference.mjs`.
Правка руками разойдётся с кодом при первой же пересборке.

### Цвет: роли поверхности и содержимого

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-on-error-container` | `light-dark(var(--sf-error-10), var(--sf-error-90))` |
| `--sf-on-error-container-graphic` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-on-info-container` | `light-dark(var(--sf-info-10), var(--sf-info-90))` |
| `--sf-on-info-container-graphic` | `light-dark(var(--sf-info-50), var(--sf-info-60))` |
| `--sf-on-neutral-container` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-neutral-container-graphic` | `light-dark(var(--sf-neutral-50), var(--sf-neutral-60))` |
| `--sf-on-primary-container` | `light-dark(var(--sf-primary-10), var(--sf-primary-90))` |
| `--sf-on-primary-container-graphic` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-on-secondary-container` | `light-dark(var(--sf-secondary-10), var(--sf-secondary-90))` |
| `--sf-on-secondary-container-graphic` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-on-success-container` | `light-dark(var(--sf-success-10), var(--sf-success-90))` |
| `--sf-on-success-container-graphic` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-surface-active` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-80))` |
| `--sf-on-surface-fixed` | `var(--sf-neutral-10)` |
| `--sf-on-surface-hover` | `light-dark(var(--sf-neutral-15), var(--sf-neutral-85))` |
| `--sf-on-surface-inverse` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-10))` |
| `--sf-on-surface-inverse-fixed` | `var(--sf-neutral-90)` |
| `--sf-on-surface-muted` | `light-dark(var(--sf-neutral-60), var(--sf-neutral-40))` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-on-tertiary-container` | `light-dark(var(--sf-tertiary-10), var(--sf-tertiary-90))` |
| `--sf-on-tertiary-container-graphic` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-on-warning-container` | `light-dark(var(--sf-warning-10), var(--sf-warning-90))` |
| `--sf-on-warning-container-graphic` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-surface-0` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-1` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-5` | `light-dark(var(--sf-neutral-80), var(--sf-neutral-30))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-50--alfa-24))` |
| `--sf-surface-container-active` | `light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-50--alfa-32))` |
| `--sf-surface-container-hover` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-50--alfa-28))` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-surface-overlay` | `light-dark(var(--sf-black--alfa-8), var(--sf-white--alfa-8))` |
| `--sf-surface-overlay--blur` | `var(--sf-d6)` |
| `--sf-surface-transparent-active` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` |
| `--sf-surface-transparent-hover` | `light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4))` |
| `--sf-surface-transparent-overlay` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-surface-transparent-select` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` |

### Цвет: акцентные роли

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-code` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-code--background` | `var(--sf-tertiary-container)` |
| `--sf-code--color` | `var(--sf-tertiary)` |
| `--sf-code--font-family` | `var(--sf-mono)` |
| `--sf-code--radius` | `var(--sf-radius-1/3)` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-error-active` | `light-dark(var(--sf-error-30), var(--sf-error-90))` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-container-active` | `light-dark(var(--sf-error-50--alfa-20), var(--sf-error-50--alfa-32))` |
| `--sf-error-container-hover` | `light-dark(var(--sf-error-50--alfa-16), var(--sf-error-50--alfa-28))` |
| `--sf-error-hover` | `light-dark(var(--sf-error-35), var(--sf-error-85))` |
| `--sf-error-transparent-active` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-90--alfa-12))` |
| `--sf-error-transparent-hover` | `light-dark(var(--sf-error-50--alfa-4), var(--sf-error-90--alfa-4))` |
| `--sf-error-transparent-overlay` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-error-transparent-select` | `light-dark(var(--sf-error-50--alfa-8), var(--sf-error-90--alfa-8))` |
| `--sf-info` | `light-dark(var(--sf-info-40), var(--sf-info-80))` |
| `--sf-info-active` | `light-dark(var(--sf-info-30), var(--sf-info-90))` |
| `--sf-info-container` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-50--alfa-24))` |
| `--sf-info-container-active` | `light-dark(var(--sf-info-50--alfa-20), var(--sf-info-50--alfa-32))` |
| `--sf-info-container-hover` | `light-dark(var(--sf-info-50--alfa-16), var(--sf-info-50--alfa-28))` |
| `--sf-info-hover` | `light-dark(var(--sf-info-35), var(--sf-primary-85))` |
| `--sf-link` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-link--underline-dashed` | `var(--sf-a6)` |
| `--sf-link--underline-dotted` | `var(--sf-a3)` |
| `--sf-link--underline-weight` | `var(--sf-px)` |
| `--sf-link-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` |
| `--sf-link-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` |
| `--sf-link-visited` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-mark` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-mark--color` | `var(--sf-warning-transparent-overlay)` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-primary-container-active` | `light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))` |
| `--sf-primary-container-hover` | `light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))` |
| `--sf-primary-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` |
| `--sf-primary-transparent-active` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-90--alfa-12))` |
| `--sf-primary-transparent-hover` | `light-dark(var(--sf-primary-50--alfa-4), var(--sf-primary-90--alfa-4))` |
| `--sf-primary-transparent-overlay` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-primary-transparent-select` | `light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-90--alfa-8))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-active` | `light-dark(var(--sf-secondary-30), var(--sf-secondary-90))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-container-active` | `light-dark(var(--sf-secondary-50--alfa-20), var(--sf-secondary-50--alfa-32))` |
| `--sf-secondary-container-hover` | `light-dark(var(--sf-secondary-50--alfa-16), var(--sf-secondary-50--alfa-28))` |
| `--sf-secondary-hover` | `light-dark(var(--sf-secondary-35), var(--sf-secondary-85))` |
| `--sf-secondary-transparent-active` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-90--alfa-12))` |
| `--sf-secondary-transparent-hover` | `light-dark(var(--sf-secondary-50--alfa-4), var(--sf-secondary-90--alfa-4))` |
| `--sf-secondary-transparent-overlay` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-secondary-transparent-select` | `light-dark(var(--sf-secondary-50--alfa-8), var(--sf-secondary-90--alfa-8))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-success-active` | `light-dark(var(--sf-success-30), var(--sf-success-90))` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-container-active` | `light-dark(var(--sf-success-50--alfa-20), var(--sf-success-50--alfa-32))` |
| `--sf-success-container-hover` | `light-dark(var(--sf-success-50--alfa-16), var(--sf-success-50--alfa-28))` |
| `--sf-success-hover` | `light-dark(var(--sf-success-35), var(--sf-success-85))` |
| `--sf-success-transparent-active` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-90--alfa-12))` |
| `--sf-success-transparent-hover` | `light-dark(var(--sf-success-50--alfa-4), var(--sf-success-90--alfa-4))` |
| `--sf-success-transparent-overlay` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |
| `--sf-success-transparent-select` | `light-dark(var(--sf-success-50--alfa-8), var(--sf-success-90--alfa-8))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-active` | `light-dark(var(--sf-tertiary-30), var(--sf-tertiary-90))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-container-active` | `light-dark(var(--sf-tertiary-50--alfa-20), var(--sf-tertiary-50--alfa-32))` |
| `--sf-tertiary-container-hover` | `light-dark(var(--sf-tertiary-50--alfa-16), var(--sf-tertiary-50--alfa-28))` |
| `--sf-tertiary-hover` | `light-dark(var(--sf-tertiary-35), var(--sf-tertiary-85))` |
| `--sf-tertiary-transparent-active` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-90--alfa-12))` |
| `--sf-tertiary-transparent-hover` | `light-dark(var(--sf-tertiary-50--alfa-4), var(--sf-tertiary-90--alfa-4))` |
| `--sf-tertiary-transparent-overlay` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-tertiary-transparent-select` | `light-dark(var(--sf-tertiary-50--alfa-8), var(--sf-tertiary-90--alfa-8))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-warning-active` | `light-dark(var(--sf-warning-30), var(--sf-warning-90))` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-container-active` | `light-dark(var(--sf-warning-50--alfa-20), var(--sf-warning-50--alfa-32))` |
| `--sf-warning-container-hover` | `light-dark(var(--sf-warning-50--alfa-16), var(--sf-warning-50--alfa-28))` |
| `--sf-warning-hover` | `light-dark(var(--sf-warning-35), var(--sf-warning-85))` |
| `--sf-warning-transparent-active` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-90--alfa-12))` |
| `--sf-warning-transparent-hover` | `light-dark(var(--sf-warning-50--alfa-4), var(--sf-warning-90--alfa-4))` |
| `--sf-warning-transparent-overlay` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-warning-transparent-select` | `light-dark(var(--sf-warning-50--alfa-8), var(--sf-warning-90--alfa-8))` |

### Цвет: границы и отключённое

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-disable` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` |
| `--sf-focus` | `light-dark(var(--sf-primary-50), var(--sf-primary-90))` |
| `--sf-focus--color` | `var(--sf-focus)` |
| `--sf-focus--offset` | `var(--sf-a1)` |
| `--sf-focus--style` | `solid` |
| `--sf-focus--width` | `var(--sf-focus-outline-width)` |
| `--sf-focus-on-neutral` | `light-dark(rgba(255,255,255,0.25098), rgba(0,0,0,0.2))` |
| `--sf-focus-on-primary` | `light-dark(rgba(255,255,255,0.25098), rgba(0,0,0,0.2))` |
| `--sf-focus-on-transparency` | `light-dark(rgba(0,0,0,0.50196), rgba(255,255,255,0.50196))` |
| `--sf-focus-outline-width` | `var(--sf-a2)` |
| `--sf-on-disable` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50), var(--sf-neutral-60))` |
| `--sf-outline--alfa` | `1` |
| `--sf-outline-control` | `light-dark(color-mix(in srgb, var(--sf-neutral-50) 80%, transparent), color-mix(in srgb, var(--sf-neutral-60) 64%, transparent))` |
| `--sf-outline-disable` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` |
| `--sf-outline-error` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-outline-info` | `light-dark(var(--sf-info-50), var(--sf-info-60))` |
| `--sf-outline-primary` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-outline-secondary` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-outline-success` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |
| `--sf-outline-tertiary` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-outline-warning` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |

### Текст

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-display--family` | `"Inter Variable", "Inter Fallback", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Segoe UI", sans-serif` |
| `--sf-display--weight` | `var(--sf-weight--light)` · `300` |
| `--sf-display-1--height` | `var(--sf-title--height-12)` |
| `--sf-display-1--size` | `var(--sf-text--size-12)` |
| `--sf-display-2--height` | `var(--sf-title--height-11)` |
| `--sf-display-2--size` | `var(--sf-text--size-11)` |
| `--sf-display-3--height` | `var(--sf-title--height-10)` |
| `--sf-display-3--size` | `var(--sf-text--size-10)` |
| `--sf-display-4--height` | `var(--sf-title--height-9)` |
| `--sf-display-4--size` | `var(--sf-text--size-9)` |
| `--sf-display-5--height` | `var(--sf-title--height-8)` |
| `--sf-display-5--size` | `var(--sf-text--size-8)` |
| `--sf-display-6--height` | `var(--sf-title--height-7)` |
| `--sf-display-6--size` | `var(--sf-text--size-7)` |
| `--sf-font-weight-bold` | `700` |
| `--sf-font-weight-light` | `300` |
| `--sf-font-weight-medium` | `500` |
| `--sf-font-weight-regular` | `400` |
| `--sf-heading--family` | `"Inter Variable", "Inter Fallback", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Segoe UI", sans-serif` |
| `--sf-heading--font-family` | `inherit` |
| `--sf-heading--font-style` | `normal` |
| `--sf-heading--font-weight` | `600` |
| `--sf-heading--margin` | `var(--sf-heading--space-top)` |
| `--sf-heading--space-bottom` | `var(--sf-content--space-text)` |
| `--sf-heading--space-top` | `var(--sf-content--space-section)` |
| `--sf-heading--weight` | `var(--sf-weight--bold)` · `700` |
| `--sf-heading-1--height` | `var(--sf-title--height-6)` |
| `--sf-heading-1--size` | `var(--sf-text--size-6)` |
| `--sf-heading-2--height` | `var(--sf-title--height-5)` |
| `--sf-heading-2--size` | `var(--sf-text--size-5)` |
| `--sf-heading-3--height` | `var(--sf-title--height-4)` |
| `--sf-heading-3--size` | `var(--sf-text--size-4)` |
| `--sf-heading-4--height` | `var(--sf-title--height-3)` |
| `--sf-heading-4--size` | `var(--sf-text--size-3)` |
| `--sf-heading-5--height` | `var(--sf-title--height-2)` |
| `--sf-heading-5--size` | `var(--sf-text--size-2)` |
| `--sf-heading-6--height` | `var(--sf-title--height-1)` |
| `--sf-heading-6--size` | `var(--sf-text--size-1)` |
| `--sf-label-large--height` | `var(--sf-c0)` |
| `--sf-label-large--size` | `var(--sf-b4)` |
| `--sf-label-medium--height` | `var(--sf-text--height-1/3)` |
| `--sf-label-medium--size` | `var(--sf-text--size-1/3)` |
| `--sf-label-small--height` | `var(--sf-text--height-1/4)` |
| `--sf-label-small--size` | `var(--sf-text--size-1/4)` |
| `--sf-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace` |
| `--sf-text--family` | `"Inter Variable", "Inter Fallback", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Segoe UI", sans-serif` |
| `--sf-text--font-weight-1` | `100` |
| `--sf-text--font-weight-2` | `200` |
| `--sf-text--font-weight-3` | `300` |
| `--sf-text--font-weight-4` | `400` |
| `--sf-text--font-weight-5` | `500` |
| `--sf-text--font-weight-6` | `600` |
| `--sf-text--font-weight-7` | `700` |
| `--sf-text--font-weight-8` | `800` |
| `--sf-text--font-weight-9` | `900` |
| `--sf-text--height` | `var(--sf-text--height-1)` |
| `--sf-text--height-1` | `var(--sf-c0)` · `var(--sf-c2)` |
| `--sf-text--height-10` | `var(--sf-d5)` · `var(--sf-e2)` |
| `--sf-text--height-11` | `var(--sf-d6)` · `var(--sf-e3)` |
| `--sf-text--height-12` | `var(--sf-d8)` · `var(--sf-e5)` |
| `--sf-text--height-1/2` | `1rem` · `var(--sf-b6)` · `1.25rem` · `var(--sf-c0)` |
| `--sf-text--height-1/3` | `1rem` · `var(--sf-b6)` |
| `--sf-text--height-1/4` | `0.75rem` · `var(--sf-b2)` |
| `--sf-text--height-2` | `var(--sf-c2)` · `var(--sf-c4)` |
| `--sf-text--height-3` | `var(--sf-c2)` · `var(--sf-c8)` |
| `--sf-text--height-4` | `var(--sf-c4)` · `var(--sf-d0)` |
| `--sf-text--height-5` | `var(--sf-c6)` · `var(--sf-d2)` |
| `--sf-text--height-6` | `var(--sf-c8)` · `var(--sf-d3)` |
| `--sf-text--height-7` | `var(--sf-d0)` · `var(--sf-d5)` |
| `--sf-text--height-8` | `var(--sf-d2)` · `var(--sf-d8)` |
| `--sf-text--height-9` | `var(--sf-d3)` · `var(--sf-e0)` |
| `--sf-text--line-height-loose` | `2` |
| `--sf-text--line-height-none` | `1` |
| `--sf-text--line-height-normal` | `1.5` |
| `--sf-text--line-height-relaxed` | `1.625` |
| `--sf-text--line-height-snug` | `1.375` |
| `--sf-text--line-height-tight` | `1.25` |
| `--sf-text--margin` | `var(--sf-space-1)` |
| `--sf-text--measure` | `65ch` |
| `--sf-text--measure-narrow` | `45ch` |
| `--sf-text--measure-wide` | `80ch` |
| `--sf-text--size` | `var(--sf-text--size-1)` |
| `--sf-text--size-1` | `var(--sf-b4)` · `var(--sf-b6)` |
| `--sf-text--size-10` | `var(--sf-d0)` · `var(--sf-d6)` |
| `--sf-text--size-11` | `var(--sf-d1)` · `var(--sf-d8)` |
| `--sf-text--size-12` | `var(--sf-d2)` · `var(--sf-e0)` |
| `--sf-text--size-1/2` | `0.75rem` · `var(--sf-b2)` · `0.875rem` · `var(--sf-b4)` |
| `--sf-text--size-1/3` | `0.75rem` · `var(--sf-b2)` |
| `--sf-text--size-1/4` | `0.625rem` · `var(--sf-b0)` |
| `--sf-text--size-1/5` | `0.5rem` · `var(--sf-a8)` |
| `--sf-text--size-1/6` | `0.375rem` · `var(--sf-a6)` |
| `--sf-text--size-1/7` | `0.25rem` · `var(--sf-a4)` |
| `--sf-text--size-2` | `var(--sf-b6)` · `var(--sf-c0)` |
| `--sf-text--size-3` | `var(--sf-b8)` · `var(--sf-c2)` |
| `--sf-text--size-4` | `var(--sf-c0)` · `var(--sf-c4)` |
| `--sf-text--size-5` | `var(--sf-c1)` · `var(--sf-c6)` |
| `--sf-text--size-6` | `var(--sf-c2)` · `var(--sf-c8)` |
| `--sf-text--size-7` | `var(--sf-c4)` · `var(--sf-d0)` |
| `--sf-text--size-8` | `var(--sf-c6)` · `var(--sf-d2)` |
| `--sf-text--size-9` | `var(--sf-c8)` · `var(--sf-d4)` |
| `--sf-text--space-bottom` | `var(--sf-content--space-text)` |
| `--sf-text--style` | `inherit` |
| `--sf-text--tracking` | `inherit` |
| `--sf-text--tracking-no-tracking` | `0em` |
| `--sf-text--tracking-tight` | `-0.025em` |
| `--sf-text--tracking-tighter` | `-0.05em` |
| `--sf-text--tracking-wide` | `0.025em` |
| `--sf-text--tracking-wider` | `0.05em` |
| `--sf-text--tracking-widest` | `0.1em` |
| `--sf-text--weight` | `var(--sf-font-weight-regular)` · `400` |
| `--sf-text-height-1` | `var(--sf-text--height-1)` |
| `--sf-text-height-10` | `var(--sf-text--height-10)` |
| `--sf-text-height-11` | `var(--sf-text--height-11)` |
| `--sf-text-height-12` | `var(--sf-text--height-12)` |
| `--sf-text-height-1/2` | `var(--sf-text--height-1/2)` |
| `--sf-text-height-1/3` | `var(--sf-text--height-1/3)` |
| `--sf-text-height-1/4` | `var(--sf-text--height-1/4)` |
| `--sf-text-height-2` | `var(--sf-text--height-2)` |
| `--sf-text-height-3` | `var(--sf-text--height-3)` |
| `--sf-text-height-4` | `var(--sf-text--height-4)` |
| `--sf-text-height-5` | `var(--sf-text--height-5)` |
| `--sf-text-height-6` | `var(--sf-text--height-6)` |
| `--sf-text-height-7` | `var(--sf-text--height-7)` |
| `--sf-text-height-8` | `var(--sf-text--height-8)` |
| `--sf-text-height-9` | `var(--sf-text--height-9)` |
| `--sf-text-large--height` | `var(--sf-text--height-2)` |
| `--sf-text-large--size` | `var(--sf-text--size-2)` |
| `--sf-text-medium--height` | `var(--sf-text--height-1)` |
| `--sf-text-medium--size` | `var(--sf-text--size-1)` |
| `--sf-text-size-1` | `var(--sf-text--size-1)` |
| `--sf-text-size-10` | `var(--sf-text--size-10)` |
| `--sf-text-size-11` | `var(--sf-text--size-11)` |
| `--sf-text-size-12` | `var(--sf-text--size-12)` |
| `--sf-text-size-1/2` | `var(--sf-text--size-1/2)` |
| `--sf-text-size-1/3` | `var(--sf-text--size-1/3)` |
| `--sf-text-size-1/4` | `var(--sf-text--size-1/4)` |
| `--sf-text-size-1/5` | `var(--sf-text--size-1/5)` |
| `--sf-text-size-1/6` | `var(--sf-text--size-1/6)` |
| `--sf-text-size-1/7` | `var(--sf-text--size-1/7)` |
| `--sf-text-size-2` | `var(--sf-text--size-2)` |
| `--sf-text-size-3` | `var(--sf-text--size-3)` |
| `--sf-text-size-4` | `var(--sf-text--size-4)` |
| `--sf-text-size-5` | `var(--sf-text--size-5)` |
| `--sf-text-size-6` | `var(--sf-text--size-6)` |
| `--sf-text-size-7` | `var(--sf-text--size-7)` |
| `--sf-text-size-8` | `var(--sf-text--size-8)` |
| `--sf-text-size-9` | `var(--sf-text--size-9)` |
| `--sf-text-small--height` | `var(--sf-text--height-1/2)` |
| `--sf-text-small--size` | `var(--sf-text--size-1/2)` |
| `--sf-title--height-1` | `var(--sf-b6)` · `var(--sf-b8)` |
| `--sf-title--height-10` | `var(--sf-d2)` · `var(--sf-d9)` |
| `--sf-title--height-11` | `var(--sf-d3)` · `var(--sf-e0)` |
| `--sf-title--height-12` | `var(--sf-d4)` · `var(--sf-e2)` |
| `--sf-title--height-2` | `var(--sf-b8)` · `var(--sf-c2)` |
| `--sf-title--height-3` | `var(--sf-c0)` · `var(--sf-c4)` |
| `--sf-title--height-4` | `var(--sf-c2)` · `var(--sf-c6)` |
| `--sf-title--height-5` | `var(--sf-c3)` · `var(--sf-c8)` |
| `--sf-title--height-6` | `var(--sf-c4)` · `var(--sf-d0)` |
| `--sf-title--height-7` | `var(--sf-c6)` · `var(--sf-d2)` |
| `--sf-title--height-8` | `var(--sf-c8)` · `var(--sf-d4)` |
| `--sf-title--height-9` | `var(--sf-d0)` · `var(--sf-d6)` |
| `--sf-title-height-1` | `var(--sf-title--height-1)` |
| `--sf-title-height-10` | `var(--sf-title--height-10)` |
| `--sf-title-height-11` | `var(--sf-title--height-11)` |
| `--sf-title-height-12` | `var(--sf-title--height-12)` |
| `--sf-title-height-2` | `var(--sf-title--height-2)` |
| `--sf-title-height-3` | `var(--sf-title--height-3)` |
| `--sf-title-height-4` | `var(--sf-title--height-4)` |
| `--sf-title-height-5` | `var(--sf-title--height-5)` |
| `--sf-title-height-6` | `var(--sf-title--height-6)` |
| `--sf-title-height-7` | `var(--sf-title--height-7)` |
| `--sf-title-height-8` | `var(--sf-title--height-8)` |
| `--sf-title-height-9` | `var(--sf-title--height-9)` |
| `--sf-weight--black` | `900` |
| `--sf-weight--bold` | `700` |
| `--sf-weight--extra-bold` | `800` |
| `--sf-weight--extra-light` | `200` |
| `--sf-weight--light` | `300` |
| `--sf-weight--medium` | `500` |
| `--sf-weight--regular` | `400` |
| `--sf-weight--semi-bold` | `600` |
| `--sf-weight--thin` | `100` |

### Размеры и интервалы

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-breakpoint-lg` | `var(--sf-h5)` |
| `--sf-breakpoint-md` | `var(--sf-h2)` |
| `--sf-breakpoint-sm` | `var(--sf-h1)` |
| `--sf-breakpoint-xl` | `var(--sf-h8)` |
| `--sf-breakpoint-xxl` | `var(--sf-i2)` |
| `--sf-container-1--size-max` | `var(--sf-h5)` |
| `--sf-container-2--size-max` | `var(--sf-h6)` |
| `--sf-container-3--size-max` | `var(--sf-h8)` |
| `--sf-container-4--size-max` | `var(--sf-i0)` |
| `--sf-container-5--size-max` | `var(--sf-i1)` |
| `--sf-container-6--size-max` | `var(--sf-i2)` |
| `--sf-container-7--size-max` | `var(--sf-i3)` |
| `--sf-container-8--size-max` | `var(--sf-i4)` |
| `--sf-icon-size-1` | `1rem` |
| `--sf-icon-size-1/2` | `0.875rem` |
| `--sf-icon-size-1/3` | `0.75rem` |
| `--sf-icon-size-1/4` | `0.625rem` |
| `--sf-icon-size-2` | `1.25rem` |
| `--sf-icon-size-3` | `1.5rem` |
| `--sf-icon-size-4` | `1.75rem` |
| `--sf-icon-size-5` | `2rem` |
| `--sf-icon-size-6` | `2.25rem` |
| `--sf-icon-size-7` | `2.5rem` |
| `--sf-space-0` | `0` |
| `--sf-space-1` | `var(--sf-b2)` · `var(--sf-b6)` |
| `--sf-space-1/2` | `0.5rem` · `var(--sf-a8)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-space-1/3` | `0.5rem` · `var(--sf-a8)` |
| `--sf-space-1/4` | `0.25rem` · `var(--sf-a4)` |
| `--sf-space-2` | `var(--sf-b6)` · `var(--sf-c0)` |
| `--sf-space-3` | `var(--sf-b6)` · `var(--sf-c2)` |
| `--sf-space-4` | `var(--sf-c2)` · `var(--sf-c6)` |
| `--sf-space-5` | `var(--sf-c6)` · `var(--sf-d0)` |
| `--sf-space-6` | `var(--sf-c6)` · `var(--sf-d2)` |
| `--sf-space-7` | `var(--sf-d0)` · `var(--sf-d6)` |
| `--sf-space-8` | `var(--sf-d2)` · `var(--sf-e0)` |
| `--sf-space-auto` | `auto` |

### Границы, радиусы и тени

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-border--alfa` | `1` |
| `--sf-border--color` | `var(--sf-transparent)` |
| `--sf-border--style` | `solid` |
| `--sf-border--width` | `0` |
| `--sf-divider--alfa` | `1` |
| `--sf-elevation-1--shadow` | `var(--sf-ui-shadow-1), var(--sf-shadow--rim)` |
| `--sf-elevation-1--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-2))` |
| `--sf-elevation-2--shadow` | `var(--sf-ui-shadow-2), var(--sf-shadow--rim)` |
| `--sf-elevation-2--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-3))` |
| `--sf-elevation-3--shadow` | `var(--sf-ui-shadow-3), var(--sf-shadow--rim)` |
| `--sf-elevation-3--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-4))` |
| `--sf-elevation-4--shadow` | `var(--sf-ui-shadow-4), var(--sf-shadow--rim)` |
| `--sf-elevation-4--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-5))` |
| `--sf-elevation-5--shadow` | `var(--sf-ui-shadow-5), var(--sf-shadow--rim)` |
| `--sf-elevation-5--surface` | `light-dark(var(--sf-surface-0), var(--sf-surface-5))` |
| `--sf-radius--surface` | `var(--sf-radius-1)` |
| `--sf-radius--ui` | `var(--sf-radius-1/2)` |
| `--sf-radius-0` | `var(--sf-a0)` |
| `--sf-radius-1` | `var(--sf-a8)` |
| `--sf-radius-1/2` | `0.25rem` · `var(--sf-a4)` |
| `--sf-radius-1/3` | `0.125rem` · `var(--sf-a2)` |
| `--sf-radius-2` | `var(--sf-b2)` · `var(--sf-b6)` |
| `--sf-radius-3` | `var(--sf-b6)` · `var(--sf-c2)` |
| `--sf-radius-4` | `var(--sf-c2)` · `var(--sf-c6)` |
| `--sf-radius-circle` | `1000px` |
| `--sf-radius-default` | `var(--sf-a4)` |
| `--sf-radius-round` | `var(--sf-radius-rounded)` |
| `--sf-radius-rounded` | `1000px` |
| `--sf-radius-square` | `0` |
| `--sf-shadow--alfa` | `1` |
| `--sf-shadow--color-fill` | `var(--sf-black--alfa-12)` · `color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color, var(--sf-black, #000)) var(--sf-shadow--alfa-fill))` |
| `--sf-shadow--color-outline` | `var(--sf-black--alfa-8)` · `color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color, var(--sf-black, #000)) var(--sf-shadow--alfa-outline))` |
| `--sf-shadow--color-shade` | `var(--sf-shadow--color-shading)` |
| `--sf-shadow--color-shading` | `var(--sf-black--alfa-4)` · `color-mix(in srgb, var(--sf-transparent), var(--sf-shadow--color, var(--sf-black, #000)) var(--sf-shadow--alfa-shade))` |
| `--sf-shadow--level-ratio` | `1` |
| `--sf-shadow--rim` | `0 0 0 0 transparent` |

### Движение

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-animation` | `cubic-bezier(.25, .8, .25, 1)` |
| `--sf-duration-fast` | `0.1S` |
| `--sf-duration-normal` | `0.3S` |
| `--sf-duration-slow` | `0.5S` |
| `--sf-transition--delay` | `0ms` |
| `--sf-transition--duration` | `300ms` |
| `--sf-transition--property` | `all` |
| `--sf-transition--timing-function` | `ease-in` |

### Слои и прозрачность

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-alfa` | `1` |
| `--sf-blur-large` | `var(--sf-a8)` |
| `--sf-blur-medium` | `var(--sf-a4)` |
| `--sf-blur-none` | `var(--sf-a0)` |
| `--sf-blur-small` | `var(--sf-a2)` |
| `--sf-floating-active-1-space-y` | `var(--sf-a8)` · `var(--sf-a6)` |
| `--sf-floating-active-1/2-space-y` | `0.5rem` · `var(--sf-a8)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-floating-active-1/3-space-y` | `0.25rem` · `var(--sf-a4)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-floating-active-2-space-y` | `var(--sf-b2)` · `var(--sf-a8)` |
| `--sf-floating-active-3-space-y` | `var(--sf-c1)` · `var(--sf-b0)` |
| `--sf-floating-the-others-1-space-y` | `var(--sf-b6)` |
| `--sf-floating-the-others-1/2-space-y` | `1rem` · `var(--sf-b6)` · `0.875rem` · `var(--sf-b4)` |
| `--sf-floating-the-others-1/3-space-y` | `0.625rem` · `var(--sf-b0)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-floating-the-others-2-space-y` | `var(--sf-c1)` · `var(--sf-c0)` |
| `--sf-floating-the-others-3-space-y` | `var(--sf-c6)` · `var(--sf-c1)` |
| `--sf-opacity-10` | `10%` |
| `--sf-opacity-20` | `20%` |
| `--sf-opacity-30` | `30%` |
| `--sf-opacity-40` | `40%` |
| `--sf-opacity-50` | `50%` |
| `--sf-opacity-60` | `60%` |
| `--sf-opacity-70` | `70%` |
| `--sf-opacity-80` | `80%` |
| `--sf-opacity-90` | `90%` |
| `--sf-scroll--alfa` | `1` |
| `--sf-scroll-bg-thumb` | `var(--sf-surface-1)` |
| `--sf-scroll-bg-track` | `var(--sf-transparent)` |
| `--sf-scroll-bg-width` | `var(--sf-b4)` |
| `--sf-scroll-radius` | `var(--sf-d6)` |
| `--sf-scroll-thumb--alfa` | `1` |
| `--sf-scroll-thumb-inset` | `var(--sf-a4)` |
| `--sf-scroll-thumb-size` | `var(--sf-a6)` |
| `--sf-scroll-thumb-width` | `var(--sf-scroll-thumb-size)` |
| `--sf-scroll-track--alfa` | `1` |
| `--sf-z-index--1` | `-1` |
| `--sf-z-index-0` | `0` |
| `--sf-z-index-1` | `10` |
| `--sf-z-index-2` | `20` |
| `--sf-z-index-3` | `30` |
| `--sf-z-index-4` | `40` |
| `--sf-z-index-5` | `50` |
| `--sf-z-index-6` | `60` |
| `--sf-z-index-7` | `70` |
| `--sf-z-index-8` | `80` |
| `--sf-z-index-9` | `90` |

### Геометрия элементов управления

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-ui-1--control-height` | `calc(var(--sf-text--height-1) + 2 * var(--sf-ui-1--space-y-tightness-default))` |
| `--sf-ui-1--space-x` | `var(--sf-b4)` · `var(--sf-b6)` |
| `--sf-ui-1--space-y` | `var(--sf-a4)` · `var(--sf-a8)` |
| `--sf-ui-1--space-y-tightness-default` | `var(--sf-a8)` |
| `--sf-ui-1--space-y-tightness-high` | `var(--sf-b2)` |
| `--sf-ui-1--space-y-tightness-highest` | `var(--sf-b6)` |
| `--sf-ui-1--space-y-tightness-low` | `var(--sf-a4)` |
| `--sf-ui-1--text-space-x` | `var(--sf-a6)` · `var(--sf-a8)` |
| `--sf-ui-1/2--control-height` | `calc(var(--sf-text--height-1/2) + 2 * var(--sf-ui-1/2--space-y-tightness-default))` |
| `--sf-ui-1/2--space-x` | `0.75rem` · `var(--sf-b2)` · `0.875rem` · `var(--sf-b4)` |
| `--sf-ui-1/2--space-y` | `0.25rem` · `var(--sf-a4)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-1/2--space-y-tightness-default` | `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-1/2--space-y-tightness-high` | `0.625rem` · `var(--sf-b0)` |
| `--sf-ui-1/2--space-y-tightness-highest` | `0.875rem` · `var(--sf-b4)` |
| `--sf-ui-1/2--space-y-tightness-low` | `0.25rem` · `var(--sf-a4)` |
| `--sf-ui-1/2--text-space-x` | `0.375rem` · `var(--sf-a6)` · `0.4375rem` · `var(--sf-a7)` |
| `--sf-ui-1/3--control-height` | `calc(var(--sf-text--height-1/3) + 2 * var(--sf-ui-1/3--space-y-tightness-default))` |
| `--sf-ui-1/3--space-x` | `0.625rem` · `var(--sf-b0)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-ui-1/3--space-y` | `0.25rem` · `var(--sf-a4)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-1/3--space-y-tightness-default` | `0.25rem` · `var(--sf-a4)` |
| `--sf-ui-1/3--space-y-tightness-high` | `0.375rem` · `var(--sf-a6)` · `0.5rem` · `var(--sf-a8)` |
| `--sf-ui-1/3--space-y-tightness-highest` | `0.625rem` · `var(--sf-b0)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-ui-1/3--space-y-tightness-low` | `0.125rem` · `var(--sf-a2)` · `0.25rem` · `var(--sf-a4)` |
| `--sf-ui-1/3--text-space-x` | `0.3125rem` · `var(--sf-a5)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-2--control-height` | `calc(var(--sf-text--height-2) + 2 * var(--sf-ui-2--space-y-tightness-default))` |
| `--sf-ui-2--space-x` | `var(--sf-b8)` · `var(--sf-c0)` |
| `--sf-ui-2--space-y` | `var(--sf-a6)` · `var(--sf-b0)` |
| `--sf-ui-2--space-y-tightness-default` | `var(--sf-b0)` |
| `--sf-ui-2--space-y-tightness-high` | `var(--sf-b4)` |
| `--sf-ui-2--space-y-tightness-highest` | `var(--sf-c0)` |
| `--sf-ui-2--space-y-tightness-low` | `var(--sf-a6)` |
| `--sf-ui-2--text-space-x` | `var(--sf-a8)` · `var(--sf-b0)` |
| `--sf-ui-3--control-height` | `calc(var(--sf-text--height-3) + 2 * var(--sf-ui-3--space-y-tightness-default))` |
| `--sf-ui-3--space-x` | `var(--sf-c1)` · `var(--sf-c2)` |
| `--sf-ui-3--space-y` | `var(--sf-a6)` · `var(--sf-b0)` |
| `--sf-ui-3--space-y-tightness-default` | `var(--sf-b4)` · `var(--sf-b0)` |
| `--sf-ui-3--space-y-tightness-high` | `var(--sf-c0)` · `var(--sf-b6)` |
| `--sf-ui-3--space-y-tightness-highest` | `var(--sf-c3)` · `var(--sf-c1)` |
| `--sf-ui-3--space-y-tightness-low` | `var(--sf-b0)` · `var(--sf-a6)` |
| `--sf-ui-3--text-space-x` | `var(--sf-b0)` · `var(--sf-b2)` |
| `--sf-ui-blur-large` | `blur(var(--sf-blur-large))` |
| `--sf-ui-blur-medium` | `blur(var(--sf-blur-medium))` |
| `--sf-ui-blur-small` | `blur(var(--sf-blur-small))` |
| `--sf-ui-blur-surface-overlay` | `blur(var(--sf-surface-overlay--blur))` |
| `--sf-ui-focus` | `0px 0px 0px var(--sf-focus-outline-width) var(--sf-focus)` |
| `--sf-ui-focus-inset` | `inset 0 0 0 var(--sf-focus-outline-width) var(--sf-focus)` |
| `--sf-ui-gradient-dark` | `linear-gradient(0deg, rgba(58, 59, 64, 1) 0%, rgba(36, 38, 42, 1) 100%)` |
| `--sf-ui-gradient-light` | `linear-gradient(0deg, rgba(212, 212, 217, 1) 0%, rgba(241, 240, 246, 1) 100%)` |
| `--sf-ui-radius-default` | `var(--sf-radius--ui)` |
| `--sf-ui-shadow-1` | `0px 2px 4px 1px var(--sf-shadow--color-shading), 0px 1px 3px 0px var(--sf-shadow--color-outline), 0px 2px 2px -1px var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-2` | `0px 4px 8px 2px var(--sf-shadow--color-shading), 0px 2px 6px 0px var(--sf-shadow--color-outline), 0px 4px 4px -2px var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-3` | `0px 8px 16px 4px var(--sf-shadow--color-shading), 0px 4px 12px 0px var(--sf-shadow--color-outline), 0px 8px 8px -4px var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-4` | `0px 16px 32px 4px var(--sf-shadow--color-shading), 0px 8px 24px 0px var(--sf-shadow--color-outline), 0px 16px 16px -8px var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-5` | `0px 32px 64px 8px var(--sf-shadow--color-shading), 0px 16px 48px 0px var(--sf-shadow--color-outline), 0px 32px 32px -16px var(--sf-shadow--color-fill)` |
| `--sf-ui-shadow-top` | `0px 0px 0.5px 0px var(--sf-shadow--color-fill), 0px -4px 10px 4px var(--sf-shadow--color-outline), 0px -2px 3px 1px var(--sf-shadow--color-shading)` |
| `--sf-ui-skeleton` | `linear-gradient(179.99999990539914deg, rgba(204, 204, 204, 0.5) 0%, rgba(136, 136, 136, 0.5) 100%)` |

### Поток содержимого

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-accent--alfa` | `1` |
| `--sf-auto` | `auto` |
| `--sf-bg--alfa` | `1` |
| `--sf-caret--alfa` | `1` |
| `--sf-composition-region-gap` | `var(--sf-space-4, 1rem)` |
| `--sf-composition-region-side` | `minmax(0, 16rem)` |
| `--sf-content--space-block` | `var(--sf-space-3)` |
| `--sf-content--space-related` | `var(--sf-space-2)` |
| `--sf-content--space-section` | `var(--sf-space-4)` |
| `--sf-content--space-text` | `var(--sf-space-1)` |
| `--sf-ease-enter` | `cubic-bezier(.19, 1, .22, 1)` |
| `--sf-ease-exit` | `cubic-bezier(.65, 0, .4, 1)` |
| `--sf-ease-move` | `cubic-bezier(.65, 0, .35, 1)` |
| `--sf-ring--alfa` | `1` |
| `--sf-ring-color` | `` |
| `--sf-stripe--alfa` | `1` |
| `--sf-stripe--color` | `var(--sf-surface-inverse)` |
| `--sf-stripe--size` | `var(--sf-a1, 1px)` |
| `--sf-viewport-height-dynamic` | `100vh` · `100dvh` |
| `--sf-viewport-height-large` | `100vh` · `100lvh` |
| `--sf-viewport-height-small` | `100vh` · `100svh` |
| `--sf-viewport-width-dynamic` | `100vw` · `100dvw` |
| `--sf-viewport-width-large` | `100vw` · `100lvw` |
| `--sf-viewport-width-small` | `100vw` · `100svw` |

### Прочее

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-0` | `0` |
| `--sf-color--alfa` | `1` |
| `--sf-current` | `currentColor` |
| `--sf-decoration--alfa` | `1` |
| `--sf-drop-shadow--alfa` | `1` |
| `--sf-empty` | `` |
| `--sf-gradient--angle` | `90deg` |
| `--sf-inherit` | `inherit` |
| `--sf-neutral` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-neutral-active` | `light-dark(var(--sf-neutral-30), var(--sf-neutral-90))` |
| `--sf-neutral-container` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-30))` |
| `--sf-neutral-container-active` | `light-dark(var(--sf-neutral-80), var(--sf-neutral-40))` |
| `--sf-neutral-container-hover` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-35))` |
| `--sf-neutral-hover` | `light-dark(var(--sf-neutral-35), var(--sf-neutral-85))` |
| `--sf-on-elevation-1--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-on-elevation-2--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-on-elevation-3--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-on-elevation-4--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-on-elevation-5--variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-on-error` | `light-dark(var(--sf-white), var(--sf-error-20))` |
| `--sf-on-info` | `light-dark(var(--sf-white), var(--sf-info-20))` |
| `--sf-on-neutral` | `light-dark(var(--sf-white), var(--sf-neutral-20))` |
| `--sf-on-primary` | `light-dark(var(--sf-white), var(--sf-primary-20))` |
| `--sf-on-secondary` | `light-dark(var(--sf-white), var(--sf-secondary-20))` |
| `--sf-on-success` | `light-dark(var(--sf-white), var(--sf-success-20))` |
| `--sf-on-tertiary` | `light-dark(var(--sf-white), var(--sf-tertiary-20))` |
| `--sf-on-warning` | `light-dark(var(--sf-white), var(--sf-warning-20))` |
| `--sf-px` | `1px` |
| `--sf-sans` | `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |
| `--sf-serif` | `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif` |
| `--sf-transparent-for-focus` | `rgba(255,255,255,0)` |
