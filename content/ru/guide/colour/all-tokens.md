---
title: "Все переменные"
description: "Полный список переменных, которые объявляет ядро SIMAI Framework, со значениями по умолчанию, кроме примитивов цвета и размера."
---

# Все переменные

634 переменных, которые объявляет ядро, со значениями по умолчанию.
Примитивы сюда не входят: ступени цвета, размера и прозрачности — это ряды
значений, у каждого ряда своя страница, и повторять их здесь значило бы
держать вторую копию.

Переменная, объявленная дважды, несёт по значению на тему или на ширину
экрана; показаны оба, через точку — сначала первое объявление, затем второе.

Дробные ступени записаны в именах с косой чертой (`--sf-radius-1/2`); в CSS
её экранируют: `var(--sf-radius-1\/2)`. В столбце значений имена уже
записаны так, как их пишут в CSS.

Пометка «не читается» стоит у переменной, которую ядро объявляет, но не
читает ни один файл поставки: её значение ничего не меняет. Прежние имена,
которые ещё работают до даты удаления, здесь не показаны: их таблица — на
странице [Как обновить проект](/ru/guide/connection/updating/#прежние-имена-переменных).

## Когда применять

Когда нужно узнать, есть ли во фреймворке переменная для нужного, и что она
даёт по умолчанию, — прежде чем заводить свою.

## Пример

Свои значения проект объявляет на `:root` в собственном каскадном слое
после `core.css` ([Как переопределять правильно](/ru/guide/colour/cascade-layers/#как-переопределять-правильно)):

```css
@layer project {
  :root {
    --sf-radius--ui: var(--sf-radius-1\/2);
  }
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
| `--sf-on-hue-container` | `light-dark(var(--sf-red-10), var(--sf-red-90))` · `light-dark(var(--sf-orange-10), var(--sf-orange-90))` · `light-dark(var(--sf-amber-10), var(--sf-amber-90))` · `light-dark(var(--sf-yellow-10), var(--sf-yellow-90))` · `light-dark(var(--sf-lime-10), var(--sf-lime-90))` · `light-dark(var(--sf-green-10), var(--sf-green-90))` · `light-dark(var(--sf-teal-10), var(--sf-teal-90))` · `light-dark(var(--sf-cyan-10), var(--sf-cyan-90))` · `light-dark(var(--sf-sky-10), var(--sf-sky-90))` · `light-dark(var(--sf-blue-10), var(--sf-blue-90))` · `light-dark(var(--sf-indigo-10), var(--sf-indigo-90))` · `light-dark(var(--sf-violet-10), var(--sf-violet-90))` · `light-dark(var(--sf-purple-10), var(--sf-purple-90))` · `light-dark(var(--sf-pink-10), var(--sf-pink-90))` · `light-dark(var(--sf-brown-10), var(--sf-brown-90))` · `light-dark(var(--sf-gray-10), var(--sf-gray-90))` · `light-dark(var(--sf-primary-10), var(--sf-primary-90))` · `light-dark(var(--sf-secondary-10), var(--sf-secondary-90))` · `light-dark(var(--sf-tertiary-10), var(--sf-tertiary-90))` |
| `--sf-on-hue-container-graphic` | `light-dark(var(--sf-red-50), var(--sf-red-60))` · `light-dark(var(--sf-orange-50), var(--sf-orange-60))` · `light-dark(var(--sf-amber-50), var(--sf-amber-60))` · `light-dark(var(--sf-yellow-50), var(--sf-yellow-60))` · `light-dark(var(--sf-lime-50), var(--sf-lime-60))` · `light-dark(var(--sf-green-50), var(--sf-green-60))` · `light-dark(var(--sf-teal-50), var(--sf-teal-60))` · `light-dark(var(--sf-cyan-50), var(--sf-cyan-60))` · `light-dark(var(--sf-sky-50), var(--sf-sky-60))` · `light-dark(var(--sf-blue-50), var(--sf-blue-60))` · `light-dark(var(--sf-indigo-50), var(--sf-indigo-60))` · `light-dark(var(--sf-violet-50), var(--sf-violet-60))` · `light-dark(var(--sf-purple-50), var(--sf-purple-60))` · `light-dark(var(--sf-pink-50), var(--sf-pink-60))` · `light-dark(var(--sf-brown-50), var(--sf-brown-60))` · `light-dark(var(--sf-gray-50), var(--sf-gray-60))` · `light-dark(var(--sf-primary-50), var(--sf-primary-60))` · `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` · `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
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
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` · `var(--sf-on-surface-media)` |
| `--sf-on-surface-active` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-80))` |
| `--sf-on-surface-card-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` |
| `--sf-on-surface-container-variant` | `light-dark(var(--sf-neutral-35), var(--sf-neutral-85))` · `var(--sf-white--alfa-80)` |
| `--sf-on-surface-disabled` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` · `var(--sf-white--alfa-64)` |
| `--sf-on-surface-fixed` | `var(--sf-neutral-10)` |
| `--sf-on-surface-hover` | `light-dark(var(--sf-neutral-15), var(--sf-neutral-85))` |
| `--sf-on-surface-inverse` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-10))` |
| `--sf-on-surface-inverse-fixed` | `var(--sf-neutral-90)` |
| `--sf-on-surface-media` | `var(--sf-white)` |
| `--sf-on-surface-muted` | `light-dark(var(--sf-neutral-60), var(--sf-neutral-40))` |
| `--sf-on-surface-popup-nested-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-on-surface-popup-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-on-surface-raised-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-60))` · `var(--sf-white--alfa-80)` |
| `--sf-on-tertiary-container` | `light-dark(var(--sf-tertiary-10), var(--sf-tertiary-90))` |
| `--sf-on-tertiary-container-graphic` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-on-warning-container` | `light-dark(var(--sf-warning-10), var(--sf-warning-90))` |
| `--sf-on-warning-container-graphic` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-5` | `light-dark(var(--sf-neutral-80), var(--sf-neutral-30))` |
| `--sf-surface-area` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-card` | `light-dark(var(--sf-surface-page), var(--sf-surface-2))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` · `var(--sf-white--alfa-16)` |
| `--sf-surface-container-active` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` · `var(--sf-white--alfa-24)` |
| `--sf-surface-container-hover` | `light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20))` · `var(--sf-white--alfa-20)` |
| `--sf-surface-container-strong` | `light-dark(var(--sf-neutral-50--alfa-32), var(--sf-neutral-90--alfa-32))` |
| `--sf-surface-disabled` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` · `var(--sf-white--alfa-12)` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-surface-inverse-hover` | `light-dark(var(--sf-neutral-25), var(--sf-neutral-85))` |
| `--sf-surface-media` | `var(--sf-black--alfa-48)` |
| `--sf-surface-media-active` | `var(--sf-black--alfa-80)` |
| `--sf-surface-media-hover` | `var(--sf-black--alfa-64)` |
| `--sf-surface-overlay--blur` | `var(--sf-d6)` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` |
| `--sf-surface-place` | `var(--sf-surface-page)` · `var(--sf-surface-media)` |
| `--sf-surface-popup` | `light-dark(var(--sf-surface-page), var(--sf-surface-4))` |
| `--sf-surface-popup-nested` | `light-dark(var(--sf-surface-page), var(--sf-surface-5))` |
| `--sf-surface-raised` | `light-dark(var(--sf-surface-page), var(--sf-surface-3))` |
| `--sf-surface-state-active` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` · `var(--sf-white--alfa-12)` |
| `--sf-surface-state-hover` | `light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4))` · `var(--sf-white--alfa-4)` |
| `--sf-surface-state-select` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` · `var(--sf-white--alfa-8)` |
| `--sf-surface-veil` | `light-dark(var(--sf-black--alfa-8), var(--sf-white--alfa-8))` |
| `--sf-surface-well` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-5))` |

### Цвет: акцентные роли

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-code` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-code--background` | `var(--sf-surface-container)` |
| `--sf-code--color` | `var(--sf-on-surface)` |
| `--sf-code--font-family` | `var(--sf-mono)` |
| `--sf-code--font-size` | `85%` |
| `--sf-code--padding` | `0.2em 0.4em` |
| `--sf-code--radius` | `var(--sf-a6)` |
| `--sf-error` | `light-dark(var(--sf-error-40), var(--sf-error-80))` |
| `--sf-error-active` | `light-dark(var(--sf-error-30), var(--sf-error-90))` |
| `--sf-error-container` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-50--alfa-24))` |
| `--sf-error-container-active` | `light-dark(var(--sf-error-50--alfa-20), var(--sf-error-50--alfa-32))` |
| `--sf-error-container-hover` | `light-dark(var(--sf-error-50--alfa-16), var(--sf-error-50--alfa-28))` |
| `--sf-error-container-strong` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-error-hover` | `light-dark(var(--sf-error-35), var(--sf-error-85))` |
| `--sf-error-outline` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-error-state-active` | `light-dark(var(--sf-error-50--alfa-12), var(--sf-error-90--alfa-12))` |
| `--sf-error-state-hover` | `light-dark(var(--sf-error-50--alfa-4), var(--sf-error-90--alfa-4))` |
| `--sf-error-state-select` | `light-dark(var(--sf-error-50--alfa-8), var(--sf-error-90--alfa-8))` |
| `--sf-info` | `light-dark(var(--sf-info-40), var(--sf-info-80))` |
| `--sf-info-active` | `light-dark(var(--sf-info-30), var(--sf-info-90))` |
| `--sf-info-container` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-50--alfa-24))` |
| `--sf-info-container-active` | `light-dark(var(--sf-info-50--alfa-20), var(--sf-info-50--alfa-32))` |
| `--sf-info-container-hover` | `light-dark(var(--sf-info-50--alfa-16), var(--sf-info-50--alfa-28))` |
| `--sf-info-container-strong` | `light-dark(var(--sf-info-50--alfa-24), var(--sf-info-90--alfa-24))` |
| `--sf-info-hover` | `light-dark(var(--sf-info-35), var(--sf-info-85))` |
| `--sf-info-outline` | `light-dark(var(--sf-info-50), var(--sf-info-60))` |
| `--sf-info-state-active` | `light-dark(var(--sf-info-50--alfa-12), var(--sf-info-90--alfa-12))` |
| `--sf-info-state-hover` | `light-dark(var(--sf-info-50--alfa-4), var(--sf-info-90--alfa-4))` |
| `--sf-info-state-select` | `light-dark(var(--sf-info-50--alfa-8), var(--sf-info-90--alfa-8))` |
| `--sf-link` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-link--underline-dashed` | `var(--sf-a6)` |
| `--sf-link--underline-dotted` | `var(--sf-a3)` |
| `--sf-link--underline-weight` | `var(--sf-px)` |
| `--sf-link-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` |
| `--sf-link-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` |
| `--sf-link-visited` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-mark` | `light-dark(var(--sf-yellow-50--alfa-24), var(--sf-yellow-90--alfa-24))` |
| `--sf-mark--color` | `var(--sf-mark)` |
| `--sf-neutral` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-neutral-active` | `light-dark(var(--sf-neutral-30), var(--sf-neutral-90))` |
| `--sf-neutral-container` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-30))` |
| `--sf-neutral-container-active` | `light-dark(var(--sf-neutral-80), var(--sf-neutral-40))` |
| `--sf-neutral-container-hover` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-35))` |
| `--sf-neutral-hover` | `light-dark(var(--sf-neutral-35), var(--sf-neutral-85))` |
| `--sf-on-error` | `light-dark(var(--sf-white), var(--sf-error-20))` |
| `--sf-on-info` | `light-dark(var(--sf-white), var(--sf-info-20))` |
| `--sf-on-neutral` | `light-dark(var(--sf-white), var(--sf-neutral-20))` |
| `--sf-on-primary` | `light-dark(var(--sf-white), var(--sf-primary-20))` |
| `--sf-on-secondary` | `light-dark(var(--sf-white), var(--sf-secondary-20))` |
| `--sf-on-success` | `light-dark(var(--sf-white), var(--sf-success-20))` |
| `--sf-on-tertiary` | `light-dark(var(--sf-white), var(--sf-tertiary-20))` |
| `--sf-on-warning` | `light-dark(var(--sf-white), var(--sf-warning-20))` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` |
| `--sf-primary-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-primary-container-active` | `light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))` |
| `--sf-primary-container-hover` | `light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))` |
| `--sf-primary-container-strong` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-primary-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` |
| `--sf-primary-outline` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-primary-state-active` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-90--alfa-12))` |
| `--sf-primary-state-hover` | `light-dark(var(--sf-primary-50--alfa-4), var(--sf-primary-90--alfa-4))` |
| `--sf-primary-state-select` | `light-dark(var(--sf-primary-50--alfa-8), var(--sf-primary-90--alfa-8))` |
| `--sf-secondary` | `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` |
| `--sf-secondary-active` | `light-dark(var(--sf-secondary-30), var(--sf-secondary-90))` |
| `--sf-secondary-container` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` |
| `--sf-secondary-container-active` | `light-dark(var(--sf-secondary-50--alfa-20), var(--sf-secondary-50--alfa-32))` |
| `--sf-secondary-container-hover` | `light-dark(var(--sf-secondary-50--alfa-16), var(--sf-secondary-50--alfa-28))` |
| `--sf-secondary-container-strong` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-secondary-hover` | `light-dark(var(--sf-secondary-35), var(--sf-secondary-85))` |
| `--sf-secondary-outline` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-secondary-state-active` | `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-90--alfa-12))` |
| `--sf-secondary-state-hover` | `light-dark(var(--sf-secondary-50--alfa-4), var(--sf-secondary-90--alfa-4))` |
| `--sf-secondary-state-select` | `light-dark(var(--sf-secondary-50--alfa-8), var(--sf-secondary-90--alfa-8))` |
| `--sf-success` | `light-dark(var(--sf-success-40), var(--sf-success-80))` |
| `--sf-success-active` | `light-dark(var(--sf-success-30), var(--sf-success-90))` |
| `--sf-success-container` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-50--alfa-24))` |
| `--sf-success-container-active` | `light-dark(var(--sf-success-50--alfa-20), var(--sf-success-50--alfa-32))` |
| `--sf-success-container-hover` | `light-dark(var(--sf-success-50--alfa-16), var(--sf-success-50--alfa-28))` |
| `--sf-success-container-strong` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |
| `--sf-success-hover` | `light-dark(var(--sf-success-35), var(--sf-success-85))` |
| `--sf-success-outline` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |
| `--sf-success-state-active` | `light-dark(var(--sf-success-50--alfa-12), var(--sf-success-90--alfa-12))` |
| `--sf-success-state-hover` | `light-dark(var(--sf-success-50--alfa-4), var(--sf-success-90--alfa-4))` |
| `--sf-success-state-select` | `light-dark(var(--sf-success-50--alfa-8), var(--sf-success-90--alfa-8))` |
| `--sf-tertiary` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-tertiary-active` | `light-dark(var(--sf-tertiary-30), var(--sf-tertiary-90))` |
| `--sf-tertiary-container` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-tertiary-container-active` | `light-dark(var(--sf-tertiary-50--alfa-20), var(--sf-tertiary-50--alfa-32))` |
| `--sf-tertiary-container-hover` | `light-dark(var(--sf-tertiary-50--alfa-16), var(--sf-tertiary-50--alfa-28))` |
| `--sf-tertiary-container-strong` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-tertiary-hover` | `light-dark(var(--sf-tertiary-35), var(--sf-tertiary-85))` |
| `--sf-tertiary-outline` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-tertiary-state-active` | `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-90--alfa-12))` |
| `--sf-tertiary-state-hover` | `light-dark(var(--sf-tertiary-50--alfa-4), var(--sf-tertiary-90--alfa-4))` |
| `--sf-tertiary-state-select` | `light-dark(var(--sf-tertiary-50--alfa-8), var(--sf-tertiary-90--alfa-8))` |
| `--sf-warning` | `light-dark(var(--sf-warning-40), var(--sf-warning-80))` |
| `--sf-warning-active` | `light-dark(var(--sf-warning-30), var(--sf-warning-90))` |
| `--sf-warning-container` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-50--alfa-24))` |
| `--sf-warning-container-active` | `light-dark(var(--sf-warning-50--alfa-20), var(--sf-warning-50--alfa-32))` |
| `--sf-warning-container-hover` | `light-dark(var(--sf-warning-50--alfa-16), var(--sf-warning-50--alfa-28))` |
| `--sf-warning-container-strong` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-warning-hover` | `light-dark(var(--sf-warning-35), var(--sf-warning-85))` |
| `--sf-warning-outline` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-warning-state-active` | `light-dark(var(--sf-warning-50--alfa-12), var(--sf-warning-90--alfa-12))` |
| `--sf-warning-state-hover` | `light-dark(var(--sf-warning-50--alfa-4), var(--sf-warning-90--alfa-4))` |
| `--sf-warning-state-select` | `light-dark(var(--sf-warning-50--alfa-8), var(--sf-warning-90--alfa-8))` |

### Цвет: оттенки и графики

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-chart-1` | `light-dark(var(--sf-blue-50), var(--sf-blue-60))` |
| `--sf-chart-1-fill` | `light-dark(var(--sf-blue-50--alfa-12), var(--sf-blue-50--alfa-24))` |
| `--sf-chart-1-fill-active` | `light-dark(var(--sf-blue-50--alfa-20), var(--sf-blue-50--alfa-32))` |
| `--sf-chart-1-fill-hover` | `light-dark(var(--sf-blue-50--alfa-16), var(--sf-blue-50--alfa-28))` |
| `--sf-chart-2` | `light-dark(var(--sf-amber-50), var(--sf-amber-60))` |
| `--sf-chart-2-fill` | `light-dark(var(--sf-amber-50--alfa-12), var(--sf-amber-50--alfa-24))` |
| `--sf-chart-2-fill-active` | `light-dark(var(--sf-amber-50--alfa-20), var(--sf-amber-50--alfa-32))` |
| `--sf-chart-2-fill-hover` | `light-dark(var(--sf-amber-50--alfa-16), var(--sf-amber-50--alfa-28))` |
| `--sf-chart-3` | `light-dark(var(--sf-teal-30), var(--sf-teal-85))` |
| `--sf-chart-3-fill` | `light-dark(var(--sf-teal-50--alfa-12), var(--sf-teal-50--alfa-24))` |
| `--sf-chart-3-fill-active` | `light-dark(var(--sf-teal-50--alfa-20), var(--sf-teal-50--alfa-32))` |
| `--sf-chart-3-fill-hover` | `light-dark(var(--sf-teal-50--alfa-16), var(--sf-teal-50--alfa-28))` |
| `--sf-chart-4` | `light-dark(var(--sf-violet-30), var(--sf-violet-85))` |
| `--sf-chart-4-fill` | `light-dark(var(--sf-violet-50--alfa-12), var(--sf-violet-50--alfa-24))` |
| `--sf-chart-4-fill-active` | `light-dark(var(--sf-violet-50--alfa-20), var(--sf-violet-50--alfa-32))` |
| `--sf-chart-4-fill-hover` | `light-dark(var(--sf-violet-50--alfa-16), var(--sf-violet-50--alfa-28))` |
| `--sf-chart-5` | `light-dark(var(--sf-yellow-30), var(--sf-yellow-85))` |
| `--sf-chart-5-fill` | `light-dark(var(--sf-yellow-50--alfa-12), var(--sf-yellow-50--alfa-24))` |
| `--sf-chart-5-fill-active` | `light-dark(var(--sf-yellow-50--alfa-20), var(--sf-yellow-50--alfa-32))` |
| `--sf-chart-5-fill-hover` | `light-dark(var(--sf-yellow-50--alfa-16), var(--sf-yellow-50--alfa-28))` |
| `--sf-chart-6` | `light-dark(var(--sf-pink-50), var(--sf-pink-60))` |
| `--sf-chart-6-fill` | `light-dark(var(--sf-pink-50--alfa-12), var(--sf-pink-50--alfa-24))` |
| `--sf-chart-6-fill-active` | `light-dark(var(--sf-pink-50--alfa-20), var(--sf-pink-50--alfa-32))` |
| `--sf-chart-6-fill-hover` | `light-dark(var(--sf-pink-50--alfa-16), var(--sf-pink-50--alfa-28))` |
| `--sf-chart-7` | `light-dark(var(--sf-green-50), var(--sf-green-60))` |
| `--sf-chart-7-fill` | `light-dark(var(--sf-green-50--alfa-12), var(--sf-green-50--alfa-24))` |
| `--sf-chart-7-fill-active` | `light-dark(var(--sf-green-50--alfa-20), var(--sf-green-50--alfa-32))` |
| `--sf-chart-7-fill-hover` | `light-dark(var(--sf-green-50--alfa-16), var(--sf-green-50--alfa-28))` |
| `--sf-chart-8` | `light-dark(var(--sf-red-30), var(--sf-red-85))` |
| `--sf-chart-8-fill` | `light-dark(var(--sf-red-50--alfa-12), var(--sf-red-50--alfa-24))` |
| `--sf-chart-8-fill-active` | `light-dark(var(--sf-red-50--alfa-20), var(--sf-red-50--alfa-32))` |
| `--sf-chart-8-fill-hover` | `light-dark(var(--sf-red-50--alfa-16), var(--sf-red-50--alfa-28))` |
| `--sf-chart-brand` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-chart-brand-fill` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` |
| `--sf-chart-brand-fill-active` | `light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))` |
| `--sf-chart-brand-fill-hover` | `light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))` |
| `--sf-chart-cool-1` | `light-dark(var(--sf-blue-30), var(--sf-blue-85))` |
| `--sf-chart-cool-2` | `light-dark(var(--sf-teal-30), var(--sf-teal-85))` |
| `--sf-chart-cool-3` | `light-dark(var(--sf-violet-50), var(--sf-violet-60))` |
| `--sf-chart-cool-4` | `light-dark(var(--sf-cyan-50), var(--sf-cyan-60))` |
| `--sf-chart-cool-5` | `light-dark(var(--sf-indigo-40), var(--sf-indigo-70))` |
| `--sf-chart-cool-6` | `light-dark(var(--sf-green-50), var(--sf-green-60))` |
| `--sf-chart-diverging-bad` | `light-dark(var(--sf-red-30), var(--sf-red-80))` |
| `--sf-chart-diverging-good` | `light-dark(var(--sf-blue-30), var(--sf-blue-80))` |
| `--sf-chart-diverging-high` | `light-dark(var(--sf-teal-30), var(--sf-teal-80))` |
| `--sf-chart-diverging-low` | `light-dark(var(--sf-purple-30), var(--sf-purple-80))` |
| `--sf-chart-midpoint` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-chart-warm-1` | `light-dark(var(--sf-red-30), var(--sf-red-85))` |
| `--sf-chart-warm-2` | `light-dark(var(--sf-orange-50), var(--sf-orange-60))` |
| `--sf-chart-warm-3` | `light-dark(var(--sf-amber-40), var(--sf-amber-80))` |
| `--sf-chart-warm-4` | `light-dark(var(--sf-pink-50), var(--sf-pink-60))` |
| `--sf-chart-warm-5` | `light-dark(var(--sf-brown-50), var(--sf-brown-60))` |
| `--sf-chart-warm-6` | `light-dark(var(--sf-yellow-50), var(--sf-yellow-60))` |
| `--sf-hue` | `light-dark(var(--sf-red-40), var(--sf-red-80))` · `light-dark(var(--sf-orange-40), var(--sf-orange-80))` · `light-dark(var(--sf-amber-40), var(--sf-amber-80))` · `light-dark(var(--sf-yellow-40), var(--sf-yellow-80))` · `light-dark(var(--sf-lime-40), var(--sf-lime-80))` · `light-dark(var(--sf-green-40), var(--sf-green-80))` · `light-dark(var(--sf-teal-40), var(--sf-teal-80))` · `light-dark(var(--sf-cyan-40), var(--sf-cyan-80))` · `light-dark(var(--sf-sky-40), var(--sf-sky-80))` · `light-dark(var(--sf-blue-40), var(--sf-blue-80))` · `light-dark(var(--sf-indigo-40), var(--sf-indigo-80))` · `light-dark(var(--sf-violet-40), var(--sf-violet-80))` · `light-dark(var(--sf-purple-40), var(--sf-purple-80))` · `light-dark(var(--sf-pink-40), var(--sf-pink-80))` · `light-dark(var(--sf-brown-40), var(--sf-brown-80))` · `light-dark(var(--sf-gray-40), var(--sf-gray-80))` · `light-dark(var(--sf-primary-40), var(--sf-primary-80))` · `light-dark(var(--sf-secondary-40), var(--sf-secondary-80))` · `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` |
| `--sf-hue-container` | `light-dark(var(--sf-red-50--alfa-12), var(--sf-red-50--alfa-24))` · `light-dark(var(--sf-orange-50--alfa-12), var(--sf-orange-50--alfa-24))` · `light-dark(var(--sf-amber-50--alfa-12), var(--sf-amber-50--alfa-24))` · `light-dark(var(--sf-yellow-50--alfa-12), var(--sf-yellow-50--alfa-24))` · `light-dark(var(--sf-lime-50--alfa-12), var(--sf-lime-50--alfa-24))` · `light-dark(var(--sf-green-50--alfa-12), var(--sf-green-50--alfa-24))` · `light-dark(var(--sf-teal-50--alfa-12), var(--sf-teal-50--alfa-24))` · `light-dark(var(--sf-cyan-50--alfa-12), var(--sf-cyan-50--alfa-24))` · `light-dark(var(--sf-sky-50--alfa-12), var(--sf-sky-50--alfa-24))` · `light-dark(var(--sf-blue-50--alfa-12), var(--sf-blue-50--alfa-24))` · `light-dark(var(--sf-indigo-50--alfa-12), var(--sf-indigo-50--alfa-24))` · `light-dark(var(--sf-violet-50--alfa-12), var(--sf-violet-50--alfa-24))` · `light-dark(var(--sf-purple-50--alfa-12), var(--sf-purple-50--alfa-24))` · `light-dark(var(--sf-pink-50--alfa-12), var(--sf-pink-50--alfa-24))` · `light-dark(var(--sf-brown-50--alfa-12), var(--sf-brown-50--alfa-24))` · `light-dark(var(--sf-gray-50--alfa-12), var(--sf-gray-50--alfa-24))` · `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` · `light-dark(var(--sf-secondary-50--alfa-12), var(--sf-secondary-50--alfa-24))` · `light-dark(var(--sf-tertiary-50--alfa-12), var(--sf-tertiary-50--alfa-24))` |
| `--sf-hue-container-active` | `light-dark(var(--sf-red-50--alfa-20), var(--sf-red-50--alfa-32))` · `light-dark(var(--sf-orange-50--alfa-20), var(--sf-orange-50--alfa-32))` · `light-dark(var(--sf-amber-50--alfa-20), var(--sf-amber-50--alfa-32))` · `light-dark(var(--sf-yellow-50--alfa-20), var(--sf-yellow-50--alfa-32))` · `light-dark(var(--sf-lime-50--alfa-20), var(--sf-lime-50--alfa-32))` · `light-dark(var(--sf-green-50--alfa-20), var(--sf-green-50--alfa-32))` · `light-dark(var(--sf-teal-50--alfa-20), var(--sf-teal-50--alfa-32))` · `light-dark(var(--sf-cyan-50--alfa-20), var(--sf-cyan-50--alfa-32))` · `light-dark(var(--sf-sky-50--alfa-20), var(--sf-sky-50--alfa-32))` · `light-dark(var(--sf-blue-50--alfa-20), var(--sf-blue-50--alfa-32))` · `light-dark(var(--sf-indigo-50--alfa-20), var(--sf-indigo-50--alfa-32))` · `light-dark(var(--sf-violet-50--alfa-20), var(--sf-violet-50--alfa-32))` · `light-dark(var(--sf-purple-50--alfa-20), var(--sf-purple-50--alfa-32))` · `light-dark(var(--sf-pink-50--alfa-20), var(--sf-pink-50--alfa-32))` · `light-dark(var(--sf-brown-50--alfa-20), var(--sf-brown-50--alfa-32))` · `light-dark(var(--sf-gray-50--alfa-20), var(--sf-gray-50--alfa-32))` · `light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))` · `light-dark(var(--sf-secondary-50--alfa-20), var(--sf-secondary-50--alfa-32))` · `light-dark(var(--sf-tertiary-50--alfa-20), var(--sf-tertiary-50--alfa-32))` |
| `--sf-hue-container-hover` | `light-dark(var(--sf-red-50--alfa-16), var(--sf-red-50--alfa-28))` · `light-dark(var(--sf-orange-50--alfa-16), var(--sf-orange-50--alfa-28))` · `light-dark(var(--sf-amber-50--alfa-16), var(--sf-amber-50--alfa-28))` · `light-dark(var(--sf-yellow-50--alfa-16), var(--sf-yellow-50--alfa-28))` · `light-dark(var(--sf-lime-50--alfa-16), var(--sf-lime-50--alfa-28))` · `light-dark(var(--sf-green-50--alfa-16), var(--sf-green-50--alfa-28))` · `light-dark(var(--sf-teal-50--alfa-16), var(--sf-teal-50--alfa-28))` · `light-dark(var(--sf-cyan-50--alfa-16), var(--sf-cyan-50--alfa-28))` · `light-dark(var(--sf-sky-50--alfa-16), var(--sf-sky-50--alfa-28))` · `light-dark(var(--sf-blue-50--alfa-16), var(--sf-blue-50--alfa-28))` · `light-dark(var(--sf-indigo-50--alfa-16), var(--sf-indigo-50--alfa-28))` · `light-dark(var(--sf-violet-50--alfa-16), var(--sf-violet-50--alfa-28))` · `light-dark(var(--sf-purple-50--alfa-16), var(--sf-purple-50--alfa-28))` · `light-dark(var(--sf-pink-50--alfa-16), var(--sf-pink-50--alfa-28))` · `light-dark(var(--sf-brown-50--alfa-16), var(--sf-brown-50--alfa-28))` · `light-dark(var(--sf-gray-50--alfa-16), var(--sf-gray-50--alfa-28))` · `light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))` · `light-dark(var(--sf-secondary-50--alfa-16), var(--sf-secondary-50--alfa-28))` · `light-dark(var(--sf-tertiary-50--alfa-16), var(--sf-tertiary-50--alfa-28))` |
| `--sf-hue-outline` | `light-dark(var(--sf-red-50), var(--sf-red-60))` · `light-dark(var(--sf-orange-50), var(--sf-orange-60))` · `light-dark(var(--sf-amber-50), var(--sf-amber-60))` · `light-dark(var(--sf-yellow-50), var(--sf-yellow-60))` · `light-dark(var(--sf-lime-50), var(--sf-lime-60))` · `light-dark(var(--sf-green-50), var(--sf-green-60))` · `light-dark(var(--sf-teal-50), var(--sf-teal-60))` · `light-dark(var(--sf-cyan-50), var(--sf-cyan-60))` · `light-dark(var(--sf-sky-50), var(--sf-sky-60))` · `light-dark(var(--sf-blue-50), var(--sf-blue-60))` · `light-dark(var(--sf-indigo-50), var(--sf-indigo-60))` · `light-dark(var(--sf-violet-50), var(--sf-violet-60))` · `light-dark(var(--sf-purple-50), var(--sf-purple-60))` · `light-dark(var(--sf-pink-50), var(--sf-pink-60))` · `light-dark(var(--sf-brown-50), var(--sf-brown-60))` · `light-dark(var(--sf-gray-50), var(--sf-gray-60))` · `light-dark(var(--sf-primary-50), var(--sf-primary-60))` · `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` · `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-on-hue` | `light-dark(var(--sf-white), var(--sf-red-20))` · `light-dark(var(--sf-white), var(--sf-orange-20))` · `light-dark(var(--sf-white), var(--sf-amber-20))` · `light-dark(var(--sf-white), var(--sf-yellow-20))` · `light-dark(var(--sf-white), var(--sf-lime-20))` · `light-dark(var(--sf-white), var(--sf-green-20))` · `light-dark(var(--sf-white), var(--sf-teal-20))` · `light-dark(var(--sf-white), var(--sf-cyan-20))` · `light-dark(var(--sf-white), var(--sf-sky-20))` · `light-dark(var(--sf-white), var(--sf-blue-20))` · `light-dark(var(--sf-white), var(--sf-indigo-20))` · `light-dark(var(--sf-white), var(--sf-violet-20))` · `light-dark(var(--sf-white), var(--sf-purple-20))` · `light-dark(var(--sf-white), var(--sf-pink-20))` · `light-dark(var(--sf-white), var(--sf-brown-20))` · `light-dark(var(--sf-white), var(--sf-gray-20))` · `light-dark(var(--sf-white), var(--sf-primary-20))` · `light-dark(var(--sf-white), var(--sf-secondary-20))` · `light-dark(var(--sf-white), var(--sf-tertiary-20))` |

### Цвет: границы и отключённое

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-focus` | `light-dark(var(--sf-primary-50), var(--sf-primary-90))` |
| `--sf-focus--color` | `var(--sf-focus)` |
| `--sf-focus--offset` | `var(--sf-px)` |
| `--sf-focus--style` | `solid` |
| `--sf-focus--width` | `var(--sf-focus-outline-width)` |
| `--sf-focus-outline-width` | `calc(var(--sf-px) * 2)` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` · `var(--sf-white--alfa-64)` |
| `--sf-outline--alfa` | `1` |
| `--sf-outline-disabled` | `light-dark(var(--sf-neutral-50--alfa-48), var(--sf-neutral-60--alfa-48))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` · `var(--sf-white--alfa-24)` |

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
| `--sf-heading--margin` | `var(--sf-heading--space-top)` |
| `--sf-heading--space-bottom` | `var(--sf-content--space-text)` |
| `--sf-heading--space-top` | `var(--sf-content--space-section)` |
| `--sf-heading--weight` | `var(--sf-weight--bold)` · `700` |
| `--sf-heading-1--height` | `var(--sf-title--height-6)` |
| `--sf-heading-1--size` | `var(--sf-text--size-6)` |
| `--sf-heading-2--height` | `var(--sf-title--height-5)` |
| `--sf-heading-2--size` | `var(--sf-text--size-5)` |
| `--sf-heading-3--height` | `var(--sf-title--height-3)` |
| `--sf-heading-3--size` | `var(--sf-text--size-3)` |
| `--sf-heading-4--height` | `var(--sf-title--height-2)` |
| `--sf-heading-4--size` | `var(--sf-text--size-2)` |
| `--sf-heading-5--height` | `var(--sf-title--height-1)` |
| `--sf-heading-5--size` | `var(--sf-text--size-1)` |
| `--sf-heading-6--height` | `var(--sf-title--height-1)` |
| `--sf-heading-6--size` | `var(--sf-text--size-1)` |
| `--sf-label-large--height` | `var(--sf-c0)` |
| `--sf-label-large--size` | `var(--sf-b4)` |
| `--sf-label-medium--height` | `var(--sf-text--height-1\/3)` |
| `--sf-label-medium--size` | `var(--sf-text--size-1\/3)` |
| `--sf-label-small--height` | `var(--sf-text--height-1\/4)` |
| `--sf-label-small--size` | `var(--sf-text--size-1\/4)` |
| `--sf-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |
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
| `--sf-text--height-3` | `var(--sf-c2)` · `var(--sf-c8)` · `var(--sf-c4)` |
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
| `--sf-text--size-2` | `var(--sf-b6)` · `var(--sf-c0)` |
| `--sf-text--size-3` | `var(--sf-b8)` · `var(--sf-c2)` · `var(--sf-c0)` |
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
| `--sf-text-height-1/2` | `var(--sf-text--height-1\/2)` |
| `--sf-text-height-1/3` | `var(--sf-text--height-1\/3)` |
| `--sf-text-height-1/4` | `var(--sf-text--height-1\/4)` |
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
| `--sf-text-size-1/2` | `var(--sf-text--size-1\/2)` |
| `--sf-text-size-1/3` | `var(--sf-text--size-1\/3)` |
| `--sf-text-size-1/4` | `var(--sf-text--size-1\/4)` |
| `--sf-text-size-1/5` | `var(--sf-text--size-1\/5)` |
| `--sf-text-size-1/6` | `var(--sf-text--size-1\/6)` |
| `--sf-text-size-1/7` | `var(--sf-text--size-1\/7)` |
| `--sf-text-size-2` | `var(--sf-text--size-2)` |
| `--sf-text-size-3` | `var(--sf-text--size-3)` |
| `--sf-text-size-4` | `var(--sf-text--size-4)` |
| `--sf-text-size-5` | `var(--sf-text--size-5)` |
| `--sf-text-size-6` | `var(--sf-text--size-6)` |
| `--sf-text-size-7` | `var(--sf-text--size-7)` |
| `--sf-text-size-8` | `var(--sf-text--size-8)` |
| `--sf-text-size-9` | `var(--sf-text--size-9)` |
| `--sf-text-small--height` | `var(--sf-text--height-1\/2)` |
| `--sf-text-small--size` | `var(--sf-text--size-1\/2)` |
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
| `--sf-breakpoint-md` | `var(--sf-h1)` |
| `--sf-breakpoint-sm` | `var(--sf-g6)` |
| `--sf-breakpoint-xl` | `var(--sf-h8)` |
| `--sf-breakpoint-xxl` | `var(--sf-i0)` |
| `--sf-container-1--size-max` | `var(--sf-h5)` |
| `--sf-container-2--size-max` | `var(--sf-h6)` |
| `--sf-container-3--size-max` | `var(--sf-h8)` |
| `--sf-container-4--size-max` | `var(--sf-i0)` |
| `--sf-container-5--size-max` | `var(--sf-i1)` |
| `--sf-container-6--size-max` | `var(--sf-i2)` |
| `--sf-container-7--size-max` | `var(--sf-i3)` |
| `--sf-container-8--size-max` | `var(--sf-i4)` |
| `--sf-icon-size-1` | `var(--sf-b6)` · `var(--sf-b4)` |
| `--sf-icon-size-1/2` | `0.875rem` · `var(--sf-b4)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-icon-size-1/3` | `0.75rem` · `var(--sf-b2)` |
| `--sf-icon-size-1/4` | `0.625rem` · `var(--sf-b0)` |
| `--sf-icon-size-2` | `var(--sf-c0)` · `var(--sf-b6)` |
| `--sf-icon-size-3` | `var(--sf-c2)` · `var(--sf-c0)` |
| `--sf-icon-size-4` | `var(--sf-c4)` · `var(--sf-c2)` |
| `--sf-icon-size-5` | `var(--sf-c6)` · `var(--sf-c4)` |
| `--sf-icon-size-6` | `var(--sf-c8)` · `var(--sf-c6)` |
| `--sf-icon-size-7` | `var(--sf-d0)` · `var(--sf-c8)` |
| `--sf-space-0` | `0` |
| `--sf-space-1` | `var(--sf-b2)` · `var(--sf-b6)` |
| `--sf-space-1/2` | `0.5rem` · `var(--sf-a8)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-space-1/3` | `0.5rem` · `var(--sf-a8)` · `0.25rem` · `var(--sf-a4)` |
| `--sf-space-1/4` | `0.25rem` · `var(--sf-a4)` |
| `--sf-space-2` | `var(--sf-b6)` · `var(--sf-c0)` |
| `--sf-space-3` | `var(--sf-b6)` · `var(--sf-c2)` · `var(--sf-c0)` |
| `--sf-space-4` | `var(--sf-c2)` · `var(--sf-c6)` |
| `--sf-space-5` | `var(--sf-c6)` · `var(--sf-d0)` |
| `--sf-space-6` | `var(--sf-c6)` · `var(--sf-d2)` · `var(--sf-d0)` |
| `--sf-space-7` | `var(--sf-d0)` · `var(--sf-d6)` · `var(--sf-d2)` |
| `--sf-space-8` | `var(--sf-d2)` · `var(--sf-e0)` · `var(--sf-d6)` |
| `--sf-space-auto` | `auto` |

### Границы, радиусы и тени

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-border--alfa` | `1` |
| `--sf-border--color` | `var(--sf-transparent)` |
| `--sf-border--style` | `solid` |
| `--sf-border--width` | `0` |
| `--sf-divider--alfa` | `1` |
| `--sf-radius--surface` | `var(--sf-radius-1)` |
| `--sf-radius--ui` | `var(--sf-radius-1\/2)` |
| `--sf-radius-0` | `var(--sf-a0)` |
| `--sf-radius-1` | `var(--sf-a8)` |
| `--sf-radius-1/2` | `0.25rem` · `var(--sf-a4)` |
| `--sf-radius-1/3` | `0.125rem` · `var(--sf-a2)` |
| `--sf-radius-2` | `var(--sf-b2)` · `var(--sf-b6)` |
| `--sf-radius-3` | `var(--sf-b6)` · `var(--sf-c2)` |
| `--sf-radius-4` | `var(--sf-c2)` · `var(--sf-c6)` |
| `--sf-radius-circle` | `1000px` |
| `--sf-radius-rounded` | `1000px` |
| `--sf-radius-square` | `0` |
| `--sf-scrim-color` | `var(--sf-black--alfa-64)` |
| `--sf-scrim-opacity` | `1` |
| `--sf-shadow--alfa` | `1` |
| `--sf-shadow-ambient-color` | `light-dark(var(--sf-black--alfa-8), var(--sf-transparent))` |
| `--sf-shadow-flat` | `none` |
| `--sf-shadow-key-color` | `light-dark(var(--sf-black--alfa-16), var(--sf-black--alfa-28))` |
| `--sf-shadow-modal` | `0 var(--sf-a4) var(--sf-a8) var(--sf-shadow-key-color), 0 var(--sf-b6) var(--sf-c6) var(--sf-shadow-ambient-color)` |
| `--sf-shadow-overlay` | `0 var(--sf-a2) var(--sf-a4) var(--sf-shadow-key-color), 0 var(--sf-a8) var(--sf-b6) var(--sf-shadow-ambient-color)` |
| `--sf-shadow-raised` | `0 var(--sf-px) var(--sf-a2) var(--sf-shadow-key-color), 0 var(--sf-a2) var(--sf-a8) var(--sf-shadow-ambient-color)` |

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
| `--sf-scroll-bg-thumb` | `var(--sf-outline)` |
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
| `--sf-z-index-layer` | `9000` |
| `--sf-z-index-layer-step` | `2` |

### Геометрия элементов управления

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-ui-1--control-height` | `calc(var(--sf-text--height-1) + 2 * var(--sf-ui-1--space-y-tightness-default))` |
| `--sf-ui-1--space-x` | `var(--sf-b4)` · `var(--sf-b6)` |
| `--sf-ui-1--space-y` | `var(--sf-a4)` · `var(--sf-a8)` · `var(--sf-a6)` |
| `--sf-ui-1--space-y-tightness-default` | `var(--sf-a8)` · `var(--sf-a6)` |
| `--sf-ui-1--space-y-tightness-high` | `var(--sf-b2)` · `var(--sf-b0)` |
| `--sf-ui-1--space-y-tightness-highest` | `var(--sf-b6)` · `var(--sf-b4)` |
| `--sf-ui-1--space-y-tightness-low` | `var(--sf-a4)` |
| `--sf-ui-1--text-space-x` | `var(--sf-a6)` · `var(--sf-a8)` · `var(--sf-a7)` |
| `--sf-ui-1/2--control-height` | `calc(var(--sf-text--height-1\/2) + 2 * var(--sf-ui-1\/2--space-y-tightness-default))` |
| `--sf-ui-1/2--space-x` | `0.75rem` · `var(--sf-b2)` · `0.875rem` · `var(--sf-b4)` |
| `--sf-ui-1/2--space-y` | `0.25rem` · `var(--sf-a4)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-1/2--space-y-tightness-default` | `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-1/2--space-y-tightness-high` | `0.625rem` · `var(--sf-b0)` · `0.5rem` · `var(--sf-a8)` |
| `--sf-ui-1/2--space-y-tightness-highest` | `0.875rem` · `var(--sf-b4)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-ui-1/2--space-y-tightness-low` | `0.25rem` · `var(--sf-a4)` |
| `--sf-ui-1/2--text-space-x` | `0.375rem` · `var(--sf-a6)` · `0.4375rem` · `var(--sf-a7)` |
| `--sf-ui-1/3--control-height` | `calc(var(--sf-text--height-1\/3) + 2 * var(--sf-ui-1\/3--space-y-tightness-default))` |
| `--sf-ui-1/3--space-x` | `0.625rem` · `var(--sf-b0)` · `0.75rem` · `var(--sf-b2)` |
| `--sf-ui-1/3--space-y` | `0.25rem` · `var(--sf-a4)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-1/3--space-y-tightness-default` | `0.25rem` · `var(--sf-a4)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-1/3--space-y-tightness-high` | `0.375rem` · `var(--sf-a6)` · `0.5rem` · `var(--sf-a8)` |
| `--sf-ui-1/3--space-y-tightness-highest` | `0.625rem` · `var(--sf-b0)` · `0.75rem` · `var(--sf-b2)` · `0.5rem` · `var(--sf-a8)` |
| `--sf-ui-1/3--space-y-tightness-low` | `0.125rem` · `var(--sf-a2)` · `0.25rem` · `var(--sf-a4)` |
| `--sf-ui-1/3--text-space-x` | `0.3125rem` · `var(--sf-a5)` · `0.375rem` · `var(--sf-a6)` |
| `--sf-ui-2--control-height` | `calc(var(--sf-text--height-2) + 2 * var(--sf-ui-2--space-y-tightness-default))` |
| `--sf-ui-2--space-x` | `var(--sf-b8)` · `var(--sf-c0)` · `var(--sf-b6)` |
| `--sf-ui-2--space-y` | `var(--sf-a6)` · `var(--sf-b0)` · `var(--sf-a8)` |
| `--sf-ui-2--space-y-tightness-default` | `var(--sf-b0)` · `var(--sf-a8)` |
| `--sf-ui-2--space-y-tightness-high` | `var(--sf-b4)` · `var(--sf-b2)` |
| `--sf-ui-2--space-y-tightness-highest` | `var(--sf-c0)` · `var(--sf-b6)` |
| `--sf-ui-2--space-y-tightness-low` | `var(--sf-a6)` · `var(--sf-a4)` |
| `--sf-ui-2--text-space-x` | `var(--sf-a8)` · `var(--sf-b0)` |
| `--sf-ui-3--control-height` | `calc(var(--sf-text--height-3) + 2 * var(--sf-ui-3--space-y-tightness-default))` |
| `--sf-ui-3--space-x` | `var(--sf-c1)` · `var(--sf-c2)` · `var(--sf-c0)` |
| `--sf-ui-3--space-y` | `var(--sf-a6)` · `var(--sf-b0)` |
| `--sf-ui-3--space-y-tightness-default` | `var(--sf-b4)` · `var(--sf-b0)` |
| `--sf-ui-3--space-y-tightness-high` | `var(--sf-c0)` · `var(--sf-b6)` · `var(--sf-b4)` |
| `--sf-ui-3--space-y-tightness-highest` | `var(--sf-c3)` · `var(--sf-c1)` · `var(--sf-c0)` |
| `--sf-ui-3--space-y-tightness-low` | `var(--sf-b0)` · `var(--sf-a6)` |
| `--sf-ui-3--text-space-x` | `var(--sf-b0)` · `var(--sf-b2)` |
| `--sf-ui-blur-large` | `blur(var(--sf-blur-large))` |
| `--sf-ui-blur-medium` | `blur(var(--sf-blur-medium))` |
| `--sf-ui-blur-small` | `blur(var(--sf-blur-small))` |
| `--sf-ui-blur-surface-overlay` | `blur(var(--sf-surface-overlay--blur))` |
| `--sf-ui-focus` | `0 0 0 var(--sf-focus-outline-width) var(--sf-focus)` |
| `--sf-ui-focus-inset` | `inset 0 0 0 var(--sf-focus-outline-width) var(--sf-focus)` |
| `--sf-ui-radius-default` | `var(--sf-radius--ui)` |
| `--sf-ui-skeleton` | `var(--sf-surface-container)` |

### Поток содержимого

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-accent--alfa` | `1` |
| `--sf-auto` | `auto` |
| `--sf-bg--alfa` | `1` |
| `--sf-caret--alfa` | `1` |
| `--sf-composition-region-gap` | `var(--sf-space-4)` |
| `--sf-composition-region-side` | `minmax(0, var(--sf-f6))` |
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
| `--sf-stripe--size` | `var(--sf-a1)` |
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
| `--sf-button--background-color` | `var(--sf-button-background-color, var(--sf-on-primary))` · `var(--sf-primary-container)` |
| `--sf-button--border-color` | `var(--sf-button-border-color, var(--sf-on-primary))` |
| `--sf-button-text-container--color` | `var(--sf-button-color, var(--sf-primary))` · `var(--sf-button-color, var(--sf-on-primary))` |
| `--sf-color--alfa` | `1` |
| `--sf-current` | `currentColor` |
| `--sf-decoration--alfa` | `1` |
| `--sf-drop-shadow--alfa` | `1` |
| `--sf-empty` | `` |
| `--sf-gradient--angle` | `90deg` |
| `--sf-icon--color` | `var(--sf-primary)` · `var(--sf-on-primary)` |
| `--sf-inherit` | `inherit` |
| `--sf-language--box` | `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/3--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-ui-3--control-height)` |
| `--sf-layout-floating-panel-height` | `calc(var(--sf-h0) + var(--sf-d0))` |
| `--sf-layout-floating-panel-width` | `calc(var(--sf-g2) + var(--sf-b6))` |
| `--sf-layout-reading-width` | `var(--sf-h2)` |
| `--sf-on-paper` | `var(--sf-neutral-10)` |
| `--sf-paper` | `var(--sf-white)` |
| `--sf-paper-hover` | `var(--sf-primary-50--alfa-4)` |
| `--sf-paper-outline` | `var(--sf-neutral-50)` |
| `--sf-paper-primary` | `var(--sf-primary-40)` |
| `--sf-paper-select` | `var(--sf-primary-50--alfa-8)` |
| `--sf-px` | `1px` |
| `--sf-sans` | `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |
| `--sf-serif` | `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif` |
| `--sf-skeleton-bar` | `var(--sf-text-size-1)` |
| `--sf-skeleton-base` | `var(--sf-surface-container)` |
| `--sf-skeleton-line` | `var(--sf-text-height-1)` |
| `--sf-skeleton-row` | `calc(var(--sf-text-height-1) + 2 * var(--sf-space-1))` |
| `--sf-transparent-for-focus` | `var(--sf-transparent)` |
| `--sf-workspace--layout` | `narrow` · `split` · `wide` |
| `--sf-workspace--list-edge` | `0` |
