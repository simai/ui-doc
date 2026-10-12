---
title: "Цвет подложки прокрутки"
description: "Окрашивает дорожку полосы прокрутки — прозрачно, цветом текста или полупрозрачным тоном роли."
---

# Цвет подложки прокрутки

Классы `scroll-bg-*` задают цвет подложки — дорожки, по которой ходит
ползунок полосы прокрутки. Берите их, когда прокручиваемая область должна
показывать, где у неё полоса, или когда подложку нужно согласовать с цветом
блока.

## Пример

Подпись — класс подложки; на всех образцах ползунок окрашен классом
`scroll-thumb-surface`, чтобы его было видно.

:::example {id="utilities/overscroll/scroll-backdrop-color" label="Цвета подложки"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `scroll-bg-transparent` | `--sf-scroll-bg-track: var(--sf-transparent)` | — |
| `scroll-bg-current` | `--sf-scroll-bg-track: var(--sf-current)` | — |
| `scroll-bg-surface` | `--sf-scroll-bg-track: var(--sf-surface-transparent-overlay)` | — |
| `scroll-bg-primary` | `--sf-scroll-bg-track: var(--sf-primary-transparent-overlay)` | — |
| `scroll-bg-secondary` | `--sf-scroll-bg-track: var(--sf-secondary-transparent-overlay)` | — |
| `scroll-bg-tertiary` | `--sf-scroll-bg-track: var(--sf-tertiary-transparent-overlay)` | — |
| `scroll-bg-error` | `--sf-scroll-bg-track: var(--sf-error-transparent-overlay)` | — |
| `scroll-bg-warning` | `--sf-scroll-bg-track: var(--sf-warning-transparent-overlay)` | — |
| `scroll-bg-success` | `--sf-scroll-bg-track: var(--sf-success-transparent-overlay)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-surface-transparent-overlay` | `light-dark(var(--sf-neutral-50--alfa-32), var(--sf-neutral-90--alfa-32))` |
| `--sf-primary-transparent-overlay` | `light-dark(var(--sf-primary-50--alfa-24), var(--sf-primary-90--alfa-24))` |
| `--sf-secondary-transparent-overlay` | `light-dark(var(--sf-secondary-50--alfa-24), var(--sf-secondary-90--alfa-24))` |
| `--sf-tertiary-transparent-overlay` | `light-dark(var(--sf-tertiary-50--alfa-24), var(--sf-tertiary-90--alfa-24))` |
| `--sf-error-transparent-overlay` | `light-dark(var(--sf-error-50--alfa-24), var(--sf-error-90--alfa-24))` |
| `--sf-warning-transparent-overlay` | `light-dark(var(--sf-warning-50--alfa-24), var(--sf-warning-90--alfa-24))` |
| `--sf-success-transparent-overlay` | `light-dark(var(--sf-success-50--alfa-24), var(--sf-success-90--alfa-24))` |

## Применение

### Выбор цвета

По умолчанию подложка прозрачна. Классы ролей дают полупрозрачный тон роли
(`--sf-<роль>-transparent-overlay`), поэтому подложка читается и на светлом,
и на тёмном фоне. `scroll-bg-current` берёт цвет текста элемента,
`scroll-bg-transparent` возвращает прозрачность.

```html
<div class="max-h-f4 overflow-auto scroll-bg-surface">
  <!-- длинный список -->
</div>
```

### Вместе с ползунком

Подложку настраивают вместе с ползунком: цвет ползунка задают
[классы цвета ползунка](/ru/utilities/overscroll/scroll-slider-color/),
толщину полосы —
[классы толщины подложки](/ru/utilities/overscroll/scroll-backdrop-width/).

```html
<div class="overflow-auto scroll-bg-primary scroll-thumb-surface scroll-bg-3">…</div>
```

## Ограничения

- Классы задают переменные, которые читают псевдоэлементы `::-webkit-scrollbar`.
  Их поддерживают Chrome, Edge, Safari и другие браузеры на их движках;
  Firefox рисует свою полосу прокрутки и классы не учитывает.
- Если у элемента задано `scrollbar-color` или `scrollbar-width` (например,
  классом `scroll-subtle`), Chrome и Edge рисуют стандартную полосу и
  игнорируют эти классы.
- Ставьте класс на сам прокручиваемый элемент. Базовые стили задают
  переменные полосы каждому элементу заново, поэтому класс не переходит на
  вложенные области. Для полосы страницы ставьте класс на `<html>`.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Цвет ползунка прокрутки](/ru/utilities/overscroll/scroll-slider-color/)
- [Толщина подложки прокрутки](/ru/utilities/overscroll/scroll-backdrop-width/)
- [Радиус границы подложки прокрутки](/ru/utilities/overscroll/scroll-backdrop-radius/)
- [Ненавязчивая полоса прокрутки](/ru/utilities/overscroll/scroll-subtle/)
