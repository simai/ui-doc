---
title: "Все переменные"
description: "Полный список переменных, которые объявляет ядро SIMAI Framework, со значениями по умолчанию, кроме примитивов цвета и размера."
---

# Все переменные

Переменные, которые объявляет ядро, со значениями по умолчанию.
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
| `--sf-on-error-container` | `light-dark(var(--sf-error-10), var(--sf-error-90))` · `var(--sf-white)` |
| `--sf-on-error-container-graphic` | `light-dark(var(--sf-error-50), var(--sf-error-70))` · `var(--sf-white)` |
| `--sf-on-hue-container` | `light-dark(var(--sf-red-10), var(--sf-red-90))` · `light-dark(var(--sf-orange-10), var(--sf-orange-90))` · `light-dark(var(--sf-amber-10), var(--sf-amber-90))` · `light-dark(var(--sf-yellow-10), var(--sf-yellow-90))` · `light-dark(var(--sf-lime-10), var(--sf-lime-90))` · `light-dark(var(--sf-green-10), var(--sf-green-90))` · `light-dark(var(--sf-teal-10), var(--sf-teal-90))` · `light-dark(var(--sf-cyan-10), var(--sf-cyan-90))` · `light-dark(var(--sf-sky-10), var(--sf-sky-90))` · `light-dark(var(--sf-blue-10), var(--sf-blue-90))` · `light-dark(var(--sf-indigo-10), var(--sf-indigo-90))` · `light-dark(var(--sf-violet-10), var(--sf-violet-90))` · `light-dark(var(--sf-purple-10), var(--sf-purple-90))` · `light-dark(var(--sf-pink-10), var(--sf-pink-90))` · `light-dark(var(--sf-brown-10), var(--sf-brown-90))` · `light-dark(var(--sf-gray-10), var(--sf-gray-90))` · `light-dark(var(--sf-primary-10), var(--sf-primary-90))` · `light-dark(var(--sf-secondary-10), var(--sf-secondary-90))` · `light-dark(var(--sf-tertiary-10), var(--sf-tertiary-90))` |
| `--sf-on-hue-container-graphic` | `light-dark(var(--sf-red-50), var(--sf-red-70))` · `light-dark(var(--sf-orange-50), var(--sf-orange-70))` · `light-dark(var(--sf-amber-50), var(--sf-amber-70))` · `light-dark(var(--sf-yellow-50), var(--sf-yellow-70))` · `light-dark(var(--sf-lime-50), var(--sf-lime-70))` · `light-dark(var(--sf-green-50), var(--sf-green-70))` · `light-dark(var(--sf-teal-50), var(--sf-teal-70))` · `light-dark(var(--sf-cyan-50), var(--sf-cyan-70))` · `light-dark(var(--sf-sky-50), var(--sf-sky-70))` · `light-dark(var(--sf-blue-50), var(--sf-blue-70))` · `light-dark(var(--sf-indigo-50), var(--sf-indigo-70))` · `light-dark(var(--sf-violet-50), var(--sf-violet-70))` · `light-dark(var(--sf-purple-50), var(--sf-purple-70))` · `light-dark(var(--sf-pink-50), var(--sf-pink-70))` · `light-dark(var(--sf-brown-50), var(--sf-brown-70))` · `light-dark(var(--sf-gray-50), var(--sf-gray-70))` · `light-dark(var(--sf-primary-50), var(--sf-primary-70))` · `light-dark(var(--sf-secondary-50), var(--sf-secondary-70))` · `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-70))` |
| `--sf-on-info-container` | `light-dark(var(--sf-info-10), var(--sf-info-90))` · `var(--sf-white)` |
| `--sf-on-info-container-graphic` | `light-dark(var(--sf-info-50), var(--sf-info-70))` · `var(--sf-white)` |
| `--sf-on-neutral-container` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` · `var(--sf-white)` |
| `--sf-on-neutral-container-graphic` | `light-dark(var(--sf-neutral-50), var(--sf-neutral-70))` · `var(--sf-white)` |
| `--sf-on-primary-container` | `light-dark(var(--sf-primary-10), var(--sf-primary-90))` · `var(--sf-white)` |
| `--sf-on-primary-container-graphic` | `light-dark(var(--sf-primary-50), var(--sf-primary-70))` · `var(--sf-white)` |
| `--sf-on-secondary-container` | `light-dark(var(--sf-secondary-10), var(--sf-secondary-90))` · `var(--sf-white)` |
| `--sf-on-secondary-container-graphic` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-70))` · `var(--sf-white)` |
| `--sf-on-success-container` | `light-dark(var(--sf-success-10), var(--sf-success-90))` · `var(--sf-white)` |
| `--sf-on-success-container-graphic` | `light-dark(var(--sf-success-50), var(--sf-success-70))` · `var(--sf-white)` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` · `var(--sf-on-surface-media)` |
| `--sf-on-surface-active` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-80))` · `var(--sf-on-surface-media)` |
| `--sf-on-surface-card-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` · `var(--sf-on-surface)` |
| `--sf-on-surface-container-variant` | `light-dark(var(--sf-neutral-35), var(--sf-neutral-85))` · `var(--sf-white--alfa-80)` · `var(--sf-on-surface)` |
| `--sf-on-surface-disabled` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` · `var(--sf-white--alfa-64)` |
| `--sf-on-surface-fixed` | `var(--sf-neutral-10)` |
| `--sf-on-surface-hover` | `light-dark(var(--sf-neutral-15), var(--sf-neutral-85))` · `var(--sf-on-surface-media)` |
| `--sf-on-surface-icon` | `light-dark(var(--sf-neutral-25), var(--sf-neutral-80))` · `var(--sf-on-surface-media)` · `var(--sf-on-surface)` |
| `--sf-on-surface-inverse` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-10))` |
| `--sf-on-surface-inverse-fixed` | `var(--sf-neutral-90)` |
| `--sf-on-surface-media` | `var(--sf-white)` |
| `--sf-on-surface-popup-nested-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` · `var(--sf-on-surface)` |
| `--sf-on-surface-popup-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` · `var(--sf-on-surface)` |
| `--sf-on-surface-raised-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` · `var(--sf-on-surface)` |
| `--sf-on-surface-variant` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` · `var(--sf-white--alfa-80)` · `var(--sf-on-surface)` |
| `--sf-on-tertiary-container` | `light-dark(var(--sf-tertiary-10), var(--sf-tertiary-90))` · `var(--sf-white)` |
| `--sf-on-tertiary-container-graphic` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-70))` · `var(--sf-white)` |
| `--sf-on-warning-container` | `light-dark(var(--sf-warning-10), var(--sf-warning-90))` · `var(--sf-white)` |
| `--sf-on-warning-container-graphic` | `light-dark(var(--sf-warning-50), var(--sf-warning-70))` · `var(--sf-white)` |
| `--sf-surface-2` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-15))` |
| `--sf-surface-3` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-20))` |
| `--sf-surface-4` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-25))` |
| `--sf-surface-5` | `light-dark(var(--sf-neutral-80), var(--sf-neutral-30))` |
| `--sf-surface-area` | `light-dark(var(--sf-neutral-98), var(--sf-neutral-10))` |
| `--sf-surface-card` | `light-dark(var(--sf-surface-page), var(--sf-surface-2))` |
| `--sf-surface-container` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` · `var(--sf-white--alfa-12)` |
| `--sf-surface-container-active` | `light-dark(var(--sf-neutral-50--alfa-20), var(--sf-neutral-90--alfa-20))` · `var(--sf-white--alfa-20)` |
| `--sf-surface-container-hover` | `light-dark(var(--sf-neutral-50--alfa-16), var(--sf-neutral-90--alfa-16))` · `var(--sf-white--alfa-16)` |
| `--sf-surface-container-strong` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` |
| `--sf-surface-disabled` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` · `var(--sf-white--alfa-8)` |
| `--sf-surface-inverse` | `light-dark(var(--sf-neutral-20), var(--sf-neutral-90))` |
| `--sf-surface-inverse-fixed` | `var(--sf-neutral-20)` |
| `--sf-surface-inverse-hover` | `light-dark(var(--sf-neutral-25), var(--sf-neutral-85))` |
| `--sf-surface-media` | `var(--sf-black--alfa-64)` · `var(--sf-black--alfa-80)` |
| `--sf-surface-media-active` | `var(--sf-black--alfa-80)` · `var(--sf-black)` |
| `--sf-surface-media-hover` | `var(--sf-black--alfa-80)` · `var(--sf-black)` |
| `--sf-surface-overlay--blur` | `var(--sf-d6)` · `var(--sf-blur-none)` |
| `--sf-surface-page` | `light-dark(var(--sf-white), var(--sf-neutral-5))` · `var(--sf-scheme-ground)` |
| `--sf-surface-place` | `var(--sf-surface-page)` · `var(--sf-surface-media)` |
| `--sf-surface-place-fill` | `initial` |
| `--sf-surface-place-ground` | `var(--sf-surface-page)` · `var(--sf-black)` |
| `--sf-surface-place-solid` | `var(--sf-surface-page)` · `initial` |
| `--sf-surface-popup` | `light-dark(var(--sf-surface-page), var(--sf-surface-4))` |
| `--sf-surface-popup-nested` | `light-dark(var(--sf-surface-page), var(--sf-surface-4))` |
| `--sf-surface-raised` | `light-dark(var(--sf-surface-page), var(--sf-surface-3))` |
| `--sf-surface-state-active` | `light-dark(var(--sf-neutral-50--alfa-12), var(--sf-neutral-90--alfa-12))` · `var(--sf-white--alfa-12)` |
| `--sf-surface-state-hover` | `light-dark(var(--sf-neutral-50--alfa-4), var(--sf-neutral-90--alfa-4))` · `var(--sf-white--alfa-4)` |
| `--sf-surface-state-select` | `light-dark(var(--sf-neutral-50--alfa-8), var(--sf-neutral-90--alfa-8))` · `var(--sf-white--alfa-8)` |
| `--sf-surface-underlay` | `initial` |
| `--sf-surface-veil` | `light-dark(var(--sf-black--alfa-8), var(--sf-white--alfa-8))` |
| `--sf-surface-well` | `light-dark(var(--sf-neutral-95), var(--sf-neutral-5))` |

### Цвет: акцентные роли

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-code` | `var(--sf-surface-container)` |
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
| `--sf-link` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` · `var(--sf-white)` · `var(--sf-scheme-link)` |
| `--sf-link--underline-dashed` | `var(--sf-a6)` |
| `--sf-link--underline-dotted` | `var(--sf-a3)` |
| `--sf-link--underline-ink` | `48%` |
| `--sf-link--underline-weight` | `var(--sf-px)` |
| `--sf-link-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` · `var(--sf-neutral-90)` · `var(--sf-scheme-link)` |
| `--sf-link-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` · `var(--sf-neutral-95)` · `var(--sf-scheme-link)` |
| `--sf-link-visited` | `light-dark(var(--sf-tertiary-40), var(--sf-tertiary-80))` · `var(--sf-white--alfa-80)` · `var(--sf-scheme-link)` |
| `--sf-mark` | `light-dark(var(--sf-yellow-50--alfa-24), var(--sf-yellow-90--alfa-24))` · `color-mix(in srgb, var(--sf-transparent), var(--sf-scheme-text) 24%)` |
| `--sf-mark--color` | `var(--sf-mark)` |
| `--sf-neutral` | `light-dark(var(--sf-neutral-40), var(--sf-neutral-80))` |
| `--sf-neutral-active` | `light-dark(var(--sf-neutral-30), var(--sf-neutral-90))` |
| `--sf-neutral-container` | `light-dark(var(--sf-neutral-90), var(--sf-neutral-30))` |
| `--sf-neutral-container-active` | `light-dark(var(--sf-neutral-80), var(--sf-neutral-40))` |
| `--sf-neutral-container-hover` | `light-dark(var(--sf-neutral-85), var(--sf-neutral-35))` |
| `--sf-neutral-hover` | `light-dark(var(--sf-neutral-35), var(--sf-neutral-85))` |
| `--sf-on-error` | `light-dark(var(--sf-white), var(--sf-error-20))` · `var(--sf-scheme-ground)` |
| `--sf-on-info` | `light-dark(var(--sf-white), var(--sf-info-20))` · `var(--sf-scheme-ground)` |
| `--sf-on-neutral` | `light-dark(var(--sf-white), var(--sf-neutral-20))` · `var(--sf-scheme-ground)` |
| `--sf-on-primary` | `light-dark(var(--sf-white), var(--sf-primary-20))` · `var(--sf-black)` · `var(--sf-scheme-ground)` |
| `--sf-on-secondary` | `light-dark(var(--sf-white), var(--sf-secondary-20))` · `var(--sf-scheme-ground)` |
| `--sf-on-success` | `light-dark(var(--sf-white), var(--sf-success-20))` · `var(--sf-scheme-ground)` |
| `--sf-on-tertiary` | `light-dark(var(--sf-white), var(--sf-tertiary-20))` · `var(--sf-scheme-ground)` |
| `--sf-on-warning` | `light-dark(var(--sf-white), var(--sf-warning-20))` · `var(--sf-scheme-ground)` |
| `--sf-primary` | `light-dark(var(--sf-primary-40), var(--sf-primary-80))` · `var(--sf-white)` |
| `--sf-primary-active` | `light-dark(var(--sf-primary-30), var(--sf-primary-90))` · `var(--sf-neutral-90)` |
| `--sf-primary-container` | `light-dark(var(--sf-primary-50--alfa-12), var(--sf-primary-50--alfa-24))` · `var(--sf-white--alfa-12)` |
| `--sf-primary-container-active` | `light-dark(var(--sf-primary-50--alfa-20), var(--sf-primary-50--alfa-32))` · `var(--sf-white--alfa-20)` |
| `--sf-primary-container-hover` | `light-dark(var(--sf-primary-50--alfa-16), var(--sf-primary-50--alfa-28))` · `var(--sf-white--alfa-16)` |
| `--sf-primary-container-strong` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-primary-hover` | `light-dark(var(--sf-primary-35), var(--sf-primary-85))` · `var(--sf-neutral-95)` |
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
| `--sf-focus` | `light-dark(var(--sf-primary-50), var(--sf-primary-90))` · `var(--sf-white)` · `var(--sf-scheme-link)` |
| `--sf-focus--color` | `var(--sf-focus)` · `var(--sf-scheme-link)` |
| `--sf-focus--offset` | `var(--sf-px)` |
| `--sf-focus--style` | `solid` |
| `--sf-focus--width` | `calc(var(--sf-px) * 2)` |
| `--sf-focus-room` | `var(--sf-space-1\/4)` |
| `--sf-outline` | `light-dark(var(--sf-neutral-50--alfa-80), var(--sf-neutral-90--alfa-48))` · `var(--sf-white--alfa-64)` · `var(--sf-scheme-text)` · `light-dark(var(--sf-neutral-40), var(--sf-neutral-70))` |
| `--sf-outline--alfa` | `1` |
| `--sf-outline-disabled` | `light-dark(var(--sf-neutral-50--alfa-48), var(--sf-neutral-60--alfa-48))` |
| `--sf-outline-variant` | `light-dark(var(--sf-neutral-50--alfa-24), var(--sf-neutral-90--alfa-24))` · `var(--sf-white--alfa-24)` · `var(--sf-scheme-text)` · `light-dark(var(--sf-neutral-50), var(--sf-neutral-60))` |

### Текст

| Переменная | Значение по умолчанию |
| :--- | :--- |
| `--sf-display--family` | `"Inter Variable", "Inter Fallback", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Segoe UI", sans-serif` · `var(--sf-sans)` · `var(--sf-serif)` |
| `--sf-display--weight` | `var(--sf-weight--light)` |
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
| `--sf-heading--family` | `"Inter Variable", "Inter Fallback", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Segoe UI", sans-serif` · `var(--sf-sans)` · `var(--sf-serif)` |
| `--sf-heading--margin` | `var(--sf-heading--space-top)` |
| `--sf-heading--space-bottom` | `var(--sf-content--space-text)` |
| `--sf-heading--space-top` | `var(--sf-content--space-section)` |
| `--sf-heading--weight` | `var(--sf-weight--bold)` |
| `--sf-heading-1--height` | `var(--sf-title--height-6)` |
| `--sf-heading-1--size` | `var(--sf-text--size-6)` · `var(--sf-c8)` |
| `--sf-heading-2--height` | `var(--sf-title--height-5)` |
| `--sf-heading-2--size` | `var(--sf-text--size-5)` · `var(--sf-c6)` |
| `--sf-heading-3--height` | `var(--sf-title--height-4)` · `var(--sf-title--height-3)` |
| `--sf-heading-3--size` | `var(--sf-text--size-3)` · `var(--sf-c2)` |
| `--sf-heading-4--height` | `var(--sf-title--height-2)` |
| `--sf-heading-4--size` | `var(--sf-text--size-2)` · `var(--sf-c0)` |
| `--sf-heading-5--height` | `var(--sf-title--height-1)` |
| `--sf-heading-5--size` | `var(--sf-text--size-1)` · `var(--sf-b6)` |
| `--sf-heading-6--height` | `var(--sf-title--height-1)` |
| `--sf-heading-6--size` | `var(--sf-text--size-1)` · `var(--sf-b6)` |
| `--sf-label-large--height` | `var(--sf-c0)` |
| `--sf-label-large--size` | `var(--sf-b4)` |
| `--sf-label-medium--height` | `var(--sf-text--height-1\/3)` |
| `--sf-label-medium--size` | `var(--sf-text--size-1\/3)` |
| `--sf-label-small--height` | `var(--sf-text--height-1\/4)` |
| `--sf-label-small--size` | `var(--sf-text--size-1\/4)` |
| `--sf-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |
| `--sf-text--family` | `"Inter Variable", "Inter Fallback", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Segoe UI", sans-serif` · `var(--sf-sans)` · `var(--sf-serif)` |
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
| `--sf-text--weight` | `var(--sf-weight--regular)` |
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
| `--sf-title--height-card` | `var(--sf-c0)` · `var(--sf-c2)` |
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
| `--sf-icon-size-1/4` | `0.75rem` · `var(--sf-b2)` |
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
| `--sf-radius--inner` | `max(var(--sf-a4), calc(var(--sf-radius--surface) - var(--sf-inset--plate)))` |
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
| `--sf-shadow-overlay-filter` | `drop-shadow(0 var(--sf-a2) var(--sf-a4) var(--sf-shadow-key-color)) drop-shadow(0 var(--sf-a8) var(--sf-b6) var(--sf-shadow-ambient-color))` |
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
| `--sf-blur-large` | `var(--sf-a8)` · `var(--sf-blur-none)` |
| `--sf-blur-medium` | `var(--sf-a4)` · `var(--sf-blur-none)` |
| `--sf-blur-none` | `var(--sf-a0)` |
| `--sf-blur-small` | `var(--sf-a2)` · `var(--sf-blur-none)` |
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
| `--sf-scroll--gap-content` | `var(--sf-scroll-thumb-inset)` |
| `--sf-scroll--gap-edge` | `var(--sf-scroll-thumb-inset)` |
| `--sf-scroll--thumb-hover` | `var(--sf-on-surface)` |
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
| `--sf-ui-focus` | `0 0 0 var(--sf-focus--width) var(--sf-focus)` |
| `--sf-ui-focus-inset` | `inset 0 0 0 var(--sf-focus--width) var(--sf-focus)` |
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
| `--sf-accordion--box-all` | `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/3--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-ui-3--control-height)` |
| `--sf-accordion--box-gap` | `calc(var(--sf-px) * 0)` · `var(--sf-space-2)` |
| `--sf-accordion--box-header` | `var(--sf-ui-3--control-height)` · `var(--sf-ui-1\/3--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-1--control-height)` · `var(--sf-ui-2--control-height)` |
| `--sf-accordion--box-inset` | `var(--sf-space-3)` · `var(--sf-ui-1\/3--space-x)` · `max(var(--sf-space-1\/2), var(--sf-b2))` · `var(--sf-space-1)` · `var(--sf-space-2)` · `var(--sf-ui-3--space-x)` |
| `--sf-accordion--box-line` | `var(--sf-text--height)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1)` · `var(--sf-text-height-2)` · `var(--sf-text-height-3)` |
| `--sf-accordion--box-text` | `var(--sf-text--size)` · `var(--sf-text-size-1\/3)` · `var(--sf-text-size-1\/2)` · `var(--sf-text-size-1)` · `var(--sf-text-size-2)` · `var(--sf-text-size-3)` |
| `--sf-avatar--box` | `var(--sf-ui-1--control-height)` · `var(--sf-b6)` · `calc(var(--sf-text-height-1\/3) + 2 * var(--sf-ui-1\/3--space-y-tightness-low))` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-ui-3--control-height)` · `var(--sf-icon-size-3)` · `calc(var(--sf-text-height-1\/2) + var(--sf-space-1\/2))` · `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1)` · `var(--sf-text-height-2)` |
| `--sf-avatar--box-description` | `0` · `1` |
| `--sf-avatar--box-heading` | `0` · `1` |
| `--sf-avatar--box-line` | `var(--sf-text-height-1)` · `var(--sf-text-height-1\/4)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1\/2)` · `var(--sf-text-height-2)` · `var(--sf-text-height-3)` |
| `--sf-color--alfa` | `1` |
| `--sf-current` | `currentColor` |
| `--sf-decoration--alfa` | `1` |
| `--sf-drop-shadow--alfa` | `1` |
| `--sf-empty` | `` |
| `--sf-first-paint-bar--end` | `min(var(--sf-radius--ui), calc(var(--sf-first-paint-bar--height) / 2))` |
| `--sf-first-paint-bar--height` | `calc(0.727em)` · `round(nearest, 0.727em, var(--sf-a2))` |
| `--sf-first-paint-bar--mask-band` | `linear-gradient(black, black)` |
| `--sf-first-paint-bar--mask-dot` | `radial-gradient(circle closest-side, black 98%, transparent)` |
| `--sf-first-paint-bar--top` | `calc(0.6055em - var(--sf-first-paint-bar--height) / 2)` |
| `--sf-gallery--columns` | `2` · `3` · `1` |
| `--sf-gallery--gap` | `var(--sf-space-1\/3)` |
| `--sf-gallery--tile` | `var(--sf-f0)` · `var(--sf-e2)` · `var(--sf-f5)` |
| `--sf-gap--actions` | `var(--sf-space-1\/3)` |
| `--sf-gap--groups` | `var(--sf-space-1)` |
| `--sf-gap--icon-inline` | `var(--sf-space-1\/4)` |
| `--sf-gap--icon-text` | `var(--sf-space-1\/2)` |
| `--sf-gap--tags` | `var(--sf-space-1\/4)` |
| `--sf-gap--toolbar` | `var(--sf-space-1\/4)` |
| `--sf-gradient--angle` | `90deg` |
| `--sf-hit--min` | `var(--sf-c2)` |
| `--sf-hit--touch` | `var(--sf-d1)` |
| `--sf-icon--font-size` | `1em` |
| `--sf-icon--height` | `1lh` |
| `--sf-icon--width` | `1em` |
| `--sf-inherit` | `inherit` |
| `--sf-input--box-control` | `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/3--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-ui-3--control-height)` |
| `--sf-input--box-gap` | `var(--sf-input--gap, var(--sf-space-1\/4))` |
| `--sf-input--box-label` | `0` · `1` |
| `--sf-input--box-line` | `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1\/4)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1)` · `var(--sf-text-height-2)` |
| `--sf-input--box-message` | `0` · `1` |
| `--sf-inset--panel` | `var(--sf-space-2)` |
| `--sf-inset--plate` | `var(--sf-space-1\/4)` |
| `--sf-language--box` | `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/3--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-ui-3--control-height)` |
| `--sf-language--field` | `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` |
| `--sf-language--field-box` | `calc(var(--sf-language--field-label) + var(--sf-space-1\/4) + var(--sf-language--field))` |
| `--sf-language--field-label` | `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1)` |
| `--sf-language--line` | `var(--sf-text-height-1)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1\/2)` · `var(--sf-text-height-2)` · `var(--sf-text-height-3)` |
| `--sf-language--space-x` | `var(--sf-button-padding-inline, var(--sf-ui-1--space-x))` · `var(--sf-button-padding-inline, var(--sf-ui-1\/3--space-x))` · `var(--sf-button-padding-inline, var(--sf-ui-1\/2--space-x))` · `var(--sf-button-padding-inline, var(--sf-ui-2--space-x))` · `var(--sf-button-padding-inline, var(--sf-ui-3--space-x))` |
| `--sf-language--text-x` | `var(--sf-ui-1--text-space-x)` · `var(--sf-ui-1\/3--text-space-x)` · `var(--sf-ui-1\/2--text-space-x)` · `var(--sf-ui-2--text-space-x)` · `var(--sf-ui-3--text-space-x)` |
| `--sf-language--trigger` | `calc(2 * var(--sf-language--space-x) + 2 * var(--sf-language--text-x) + 3 * var(--sf-language--line))` |
| `--sf-layer--base` | `var(--sf-z-index-0)` |
| `--sf-layer--message` | `var(--sf-z-index-layer)` |
| `--sf-layer--popover` | `var(--sf-z-index-9)` |
| `--sf-layer--sticky` | `var(--sf-z-index-5)` |
| `--sf-layer--window` | `var(--sf-z-index-layer)` |
| `--sf-layout-floating-panel-height` | `calc(var(--sf-h0) + var(--sf-d0))` |
| `--sf-layout-floating-panel-width` | `calc(var(--sf-g2) + var(--sf-b6))` |
| `--sf-layout-reading-width` | `var(--sf-h2)` |
| `--sf-line--border` | `var(--sf-px)` |
| `--sf-line--indicator` | `calc(2 * var(--sf-px))` |
| `--sf-list-item--box-caption-line` | `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1)` · `var(--sf-text-height-2)` |
| `--sf-list-item--box-caption-size` | `var(--sf-text-size-1\/2)` · `var(--sf-text-size-1\/3)` · `var(--sf-text-size-1)` · `var(--sf-text-size-2)` |
| `--sf-list-item--box-caption-step` | `var(--sf-ui-1\/2--control-height)` · `max(var(--sf-ui-1\/2--control-height), var(--sf-d1))` |
| `--sf-list-item--box-control` | `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/3--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-ui-3--control-height)` |
| `--sf-list-item--box-handle` | `0px` · `var(--sf-list-item--box-line)` |
| `--sf-list-item--box-inset` | `var(--sf-space-1)` · `var(--sf-ui-1\/3--space-x)` · `max(var(--sf-space-1\/2), var(--sf-b2))` · `var(--sf-space-2)` · `var(--sf-ui-3--space-x)` |
| `--sf-list-item--box-line` | `var(--sf-text-height-1)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1\/2)` · `var(--sf-text-height-2)` · `var(--sf-text-height-3)` |
| `--sf-list-item--box-next` | `var(--sf-ui-2--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-1--control-height)` · `var(--sf-ui-3--control-height)` |
| `--sf-list-item--box-picture` | `0px` · `calc(var(--sf-list-item--box-line) + var(--sf-space-1\/2))` |
| `--sf-list-item--box-size` | `var(--sf-text-size-1)` · `var(--sf-text-size-1\/3)` · `var(--sf-text-size-1\/2)` · `var(--sf-text-size-2)` · `var(--sf-text-size-3)` |
| `--sf-list-item--box-two-line` | `max(var(--sf-list-item--box-next), calc(var(--sf-list-item--box-caption-step) + var(--sf-text-height-1\/3)))` · `var(--sf-list-item--box-next)` |
| `--sf-micro--badge-1` | `var(--sf-b2)` |
| `--sf-micro--badge-1/2` | `0.75rem` · `var(--sf-b2)` |
| `--sf-micro--badge-1/3` | `0.5rem` · `var(--sf-a8)` |
| `--sf-micro--badge-1/4` | `0.5rem` · `var(--sf-a8)` |
| `--sf-micro--badge-2` | `var(--sf-b6)` |
| `--sf-micro--badge-3` | `var(--sf-b6)` |
| `--sf-micro--count-1` | `var(--sf-b6)` |
| `--sf-micro--count-2` | `var(--sf-b6)` |
| `--sf-micro--count-3` | `var(--sf-b6)` |
| `--sf-micro--cross-1` | `var(--sf-b2)` |
| `--sf-micro--cross-1/2` | `0.5rem` · `var(--sf-a8)` |
| `--sf-micro--cross-1/3` | `0.5rem` · `var(--sf-a8)` |
| `--sf-micro--cross-2` | `var(--sf-b2)` |
| `--sf-micro--cross-3` | `var(--sf-b2)` · `var(--sf-b6)` |
| `--sf-micro--dot-1` | `var(--sf-a8)` |
| `--sf-micro--dot-1/2` | `0.375rem` · `var(--sf-a6)` |
| `--sf-micro--dot-1/3` | `0.375rem` · `var(--sf-a6)` |
| `--sf-micro--dot-2` | `var(--sf-a8)` |
| `--sf-micro--dot-3` | `var(--sf-b2)` |
| `--sf-micro--point-1` | `var(--sf-b2)` |
| `--sf-micro--point-1/2` | `0.5rem` · `var(--sf-a8)` |
| `--sf-micro--point-1/3` | `0.375rem` · `var(--sf-a6)` |
| `--sf-micro--point-1/4` | `0.375rem` · `var(--sf-a6)` |
| `--sf-micro--point-2` | `var(--sf-b2)` |
| `--sf-micro--point-3` | `var(--sf-b6)` |
| `--sf-micro--ring-1` | `var(--sf-a2)` |
| `--sf-micro--ring-1/2` | `0.125rem` · `var(--sf-a2)` |
| `--sf-micro--ring-1/3` | `0.0625rem` · `var(--sf-a1)` |
| `--sf-micro--ring-1/4` | `0.0625rem` · `var(--sf-a1)` |
| `--sf-micro--ring-2` | `var(--sf-a2)` |
| `--sf-micro--ring-3` | `var(--sf-a2)` |
| `--sf-micro--tick` | `var(--sf-a4)` |
| `--sf-on-paper` | `var(--sf-neutral-10)` · `var(--sf-scheme-text)` |
| `--sf-page-header--box` | `calc(var(--sf-page-header--box-path) + max(var(--sf-page-header--box-line), var(--sf-page-header--box-actions)) + var(--sf-page-header--box-tabs) + var(--sf-page-header--box-pad))` |
| `--sf-page-header--box-actions` | `calc(var(--sf-px) * 0)` · `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` |
| `--sf-page-header--box-line` | `max(var(--sf-heading-4--height), var(--sf-ui-1\/2--control-height))` |
| `--sf-page-header--box-pad` | `calc(var(--sf-px) * 0)` · `calc(var(--sf-space-1) + var(--sf-space-2))` · `var(--sf-space-1)` |
| `--sf-page-header--box-path` | `calc(var(--sf-px) * 0)` · `calc(var(--sf-ui-1\/3--control-height) + var(--sf-page-header-gap, var(--sf-space-1\/2)))` |
| `--sf-page-header--box-tabs` | `calc(var(--sf-px) * 0)` · `calc(var(--sf-page-header-gap, var(--sf-space-1\/2)) + var(--sf-page-header--box-tabs-strip))` |
| `--sf-page-header--box-tabs-strip` | `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` |
| `--sf-paper` | `var(--sf-white)` · `var(--sf-scheme-ground)` |
| `--sf-paper-hover` | `var(--sf-primary-50--alfa-4)` |
| `--sf-paper-outline` | `var(--sf-neutral-50)` |
| `--sf-paper-primary` | `var(--sf-primary-40)` · `var(--sf-scheme-text)` |
| `--sf-paper-select` | `var(--sf-primary-50--alfa-8)` |
| `--sf-place--container-outline` | `var(--sf-outline)` |
| `--sf-place--fill-surface` | `initial` |
| `--sf-place--ink` | `var(--sf-on-surface-media)` |
| `--sf-place--ink-variant` | `var(--sf-white--alfa-80)` |
| `--sf-place--outer-focus` | `var(--sf-focus)` |
| `--sf-place--outer-focus--color` | `var(--sf-focus--color)` |
| `--sf-place--outer-link` | `var(--sf-link)` |
| `--sf-place--outer-link-active` | `var(--sf-link-active)` |
| `--sf-place--outer-link-hover` | `var(--sf-link-hover)` |
| `--sf-place--outer-link-visited` | `var(--sf-link-visited)` |
| `--sf-place--outer-on-error-container` | `var(--sf-on-error-container)` |
| `--sf-place--outer-on-error-container-graphic` | `var(--sf-on-error-container-graphic)` |
| `--sf-place--outer-on-info-container` | `var(--sf-on-info-container)` |
| `--sf-place--outer-on-info-container-graphic` | `var(--sf-on-info-container-graphic)` |
| `--sf-place--outer-on-neutral-container` | `var(--sf-on-neutral-container)` |
| `--sf-place--outer-on-neutral-container-graphic` | `var(--sf-on-neutral-container-graphic)` |
| `--sf-place--outer-on-primary` | `var(--sf-on-primary)` |
| `--sf-place--outer-on-primary-container` | `var(--sf-on-primary-container)` |
| `--sf-place--outer-on-primary-container-graphic` | `var(--sf-on-primary-container-graphic)` |
| `--sf-place--outer-on-secondary-container` | `var(--sf-on-secondary-container)` |
| `--sf-place--outer-on-secondary-container-graphic` | `var(--sf-on-secondary-container-graphic)` |
| `--sf-place--outer-on-success-container` | `var(--sf-on-success-container)` |
| `--sf-place--outer-on-success-container-graphic` | `var(--sf-on-success-container-graphic)` |
| `--sf-place--outer-on-tertiary-container` | `var(--sf-on-tertiary-container)` |
| `--sf-place--outer-on-tertiary-container-graphic` | `var(--sf-on-tertiary-container-graphic)` |
| `--sf-place--outer-on-warning-container` | `var(--sf-on-warning-container)` |
| `--sf-place--outer-on-warning-container-graphic` | `var(--sf-on-warning-container-graphic)` |
| `--sf-place--outer-primary` | `var(--sf-primary)` |
| `--sf-place--outer-primary-active` | `var(--sf-primary-active)` |
| `--sf-place--outer-primary-container` | `var(--sf-primary-container)` |
| `--sf-place--outer-primary-container-active` | `var(--sf-primary-container-active)` |
| `--sf-place--outer-primary-container-hover` | `var(--sf-primary-container-hover)` |
| `--sf-place--outer-primary-hover` | `var(--sf-primary-hover)` |
| `--sf-popup--window-form-width` | `var(--sf-g8)` · `var(--sf-g6)` |
| `--sf-popup--window-wide-width` | `var(--sf-h2)` · `var(--sf-h1)` |
| `--sf-popup-form-wide-width` | `var(--sf-g2)` · `var(--sf-g1)` |
| `--sf-popup-form-width` | `var(--sf-g0)` · `var(--sf-f8)` |
| `--sf-popup-list-max-width` | `var(--sf-g0)` · `var(--sf-f8)` |
| `--sf-popup-menu-max-width` | `var(--sf-f8)` · `var(--sf-f6)` |
| `--sf-popup-menu-min-width` | `var(--sf-f0)` · `var(--sf-e8)` |
| `--sf-popup-panel-width` | `var(--sf-g0)` · `var(--sf-f8)` |
| `--sf-popup-question-width` | `var(--sf-g4)` · `var(--sf-g3)` |
| `--sf-px` | `1px` |
| `--sf-reference-link--box` | `var(--sf-ui-3--control-height)` · `var(--sf-ui-1--control-height)` · `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-text-height-1)` · `calc(var(--sf-ui-1--control-height) - 2 * var(--sf-px))` · `calc(var(--sf-ui-1\/2--control-height) - 2 * var(--sf-px))` · `calc(var(--sf-ui-2--control-height) - 2 * var(--sf-px))` · `var(--sf-text-height-1\/2)` · `var(--sf-text-height-2)` |
| `--sf-reference-link--box-line` | `var(--sf-text-height-1)` |
| `--sf-reference-link--box-pad` | `calc(2 * var(--sf-space-1) + 2 * var(--sf-px))` · `calc(var(--sf-px) * 0)` |
| `--sf-reference-link--box-route` | `0` · `1` |
| `--sf-sans` | `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |
| `--sf-scheme-ground` | `var(--sf-white)` · `var(--sf-black)` · `var(--sf-sky-90)` · `var(--sf-yellow-95)` |
| `--sf-scheme-link` | `var(--sf-blue-30)` · `var(--sf-sky-85)` · `var(--sf-white)` |
| `--sf-scheme-text` | `var(--sf-black)` · `var(--sf-white)` · `var(--sf-yellow-85)` · `var(--sf-blue-10)` · `var(--sf-brown-10)` |
| `--sf-serif` | `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif` |
| `--sf-site-header--box` | `var(--sf-site-header-block-size, calc(var(--sf-ui-1--control-height) + 2 * var(--sf-space-1) + var(--sf-px)))` · `var(--sf-site-header-block-size, calc(var(--sf-ui-1\/2--control-height) + 2 * var(--sf-space-1) + var(--sf-px)))` |
| `--sf-skeleton-bar` | `calc(var(--sf-text-size-1) * 0.727)` · `round(nearest, calc(var(--sf-text-size-1) * 0.727), var(--sf-a2))` |
| `--sf-skeleton-base` | `var(--sf-surface-container)` |
| `--sf-skeleton-line` | `var(--sf-text-height-1)` |
| `--sf-skeleton-row` | `calc(var(--sf-text-height-1) + 2 * var(--sf-space-1))` |
| `--sf-skeleton-row-bar` | `calc(var(--sf-text-size-1) * 0.727)` · `round(nearest, calc(var(--sf-text-size-1) * 0.727), var(--sf-a2))` |
| `--sf-slider--peek` | `1.15` · `2.2` |
| `--sf-tag--box-control` | `var(--sf-ui-1\/2--control-height)` · `var(--sf-ui-1\/3--control-height)` · `var(--sf-ui-1--control-height)` · `var(--sf-ui-2--control-height)` · `var(--sf-ui-3--control-height)` · `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1)` · `var(--sf-text-height-2)` · `var(--sf-c2)` |
| `--sf-tag--box-cross` | `var(--sf-micro--cross-1\/2)` · `var(--sf-micro--cross-1\/3)` · `var(--sf-micro--cross-1)` · `var(--sf-micro--cross-2)` · `var(--sf-micro--cross-3)` |
| `--sf-tag--box-cross-on` | `0` · `1` |
| `--sf-tag--box-edge` | `var(--sf-b2)` · `var(--sf-a8)` · `var(--sf-b6)` · `var(--sf-c0)` · `var(--sf-ui-3--space-x)` · `var(--sf-space-1\/3)` |
| `--sf-tag--box-gap` | `var(--sf-ui-1\/2--text-space-x)` · `var(--sf-ui-1\/3--text-space-x)` · `var(--sf-ui-1--text-space-x)` · `var(--sf-ui-2--text-space-x)` · `var(--sf-ui-3--text-space-x)` · `var(--sf-space-1\/3)` |
| `--sf-tag--box-lead` | `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1)` · `var(--sf-text-height-2)` · `var(--sf-text-height-3)` · `calc(var(--sf-tag--box-control) - 2 * var(--sf-space-1\/4))` · `var(--sf-micro--point-1\/2)` · `var(--sf-micro--point-1\/3)` · `var(--sf-micro--point-1)` · `var(--sf-micro--point-2)` · `var(--sf-micro--point-3)` |
| `--sf-tag--box-lead-on` | `0` · `1` |
| `--sf-tag--box-line` | `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1)` · `var(--sf-text-height-2)` · `var(--sf-text-height-3)` |
| `--sf-tag--box-text` | `var(--sf-text-size-1\/2)` · `var(--sf-text-size-1\/3)` · `var(--sf-text-size-1)` · `var(--sf-text-size-2)` · `var(--sf-text-size-3)` |
| `--sf-tile-metric--box-badge` | `calc(var(--sf-c0) + 2 * var(--sf-a4))` · `calc(var(--sf-b6) + 2 * var(--sf-a4))` · `calc(var(--sf-c2) + 2 * var(--sf-a4))` · `calc(var(--sf-text-height-1\/2) + 2 * var(--sf-ui-1\/2--space-y-tightness-low))` · `calc(var(--sf-text-height-1\/3) + 2 * var(--sf-ui-1\/3--space-y-tightness-low))` · `calc(var(--sf-text-height-1) + 2 * var(--sf-ui-1--space-y-tightness-low))` |
| `--sf-tile-metric--box-bar` | `var(--sf-a8)` · `var(--sf-a4)` |
| `--sf-tile-metric--box-change` | `1` · `0` |
| `--sf-tile-metric--box-gap` | `var(--sf-ui-1--text-space-x)` · `var(--sf-ui-1\/2--text-space-x)` · `var(--sf-ui-2--text-space-x)` |
| `--sf-tile-metric--box-line` | `var(--sf-text-height-1\/2)` · `var(--sf-text-height-1\/3)` · `var(--sf-text-height-1)` |
| `--sf-tile-metric--box-meter` | `0` · `1` |
| `--sf-tile-metric--box-space` | `var(--sf-ui-1--space-x)` · `var(--sf-ui-1\/2--space-x)` · `var(--sf-ui-2--space-x)` |
| `--sf-tile-metric--box-status` | `0` · `1` |
| `--sf-tile-metric--box-value` | `var(--sf-text-height-3)` · `var(--sf-text-height-2)` · `var(--sf-text-height-4)` |
| `--sf-transparent-for-focus` | `var(--sf-transparent)` |
| `--sf-wizard--box-control` | `var(--sf-ui-1--control-height)` |
| `--sf-wizard--box-frame` | `calc(var(--sf-space-2) - var(--sf-px))` |
| `--sf-wizard--box-gap` | `var(--sf-space-3)` |
| `--sf-wizard--box-related` | `var(--sf-space-1)` |
| `--sf-wizard--box-why` | `calc(var(--sf-px) * 0)` · `calc(var(--sf-wizard--box-related) + var(--sf-text-height-1))` |
| `--sf-workspace--layout` | `narrow` · `split` · `wide` |
| `--sf-workspace--list-edge` | `0` |
