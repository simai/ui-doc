---
title: "Цвет ползунка прокрутки"
description: "Окрашивает ползунок полосы прокрутки цветом текста роли, чтобы он читался на фоне блока."
---

# Цвет ползунка прокрутки

Классы `scroll-thumb-*` задают цвет ползунка полосы прокрутки. Цвет берётся
из роли «текст на …» (`--sf-on-<роль>`), поэтому класс выбирают по фону
прокручиваемого блока: на фоне `bg-primary` — `scroll-thumb-primary`.

## Пример

Каждая область залита цветом роли, а её ползунок — цветом текста этой роли.
Подпись — класс ползунка; у `scroll-thumb-current` ползунок повторяет цвет
текста области.

:::example {id="utilities/overscroll/scroll-slider-color" label="Цвет ползунка на фонах ролей"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `scroll-transparent` | `--sf-scroll-bg-thumb: var(--sf-transparent)` | — |
| `scroll-thumb-transparent` | `--sf-scroll-bg-thumb: var(--sf-transparent)` | — |
| `scroll-current` | `--sf-scroll-bg-thumb: var(--sf-current)` | — |
| `scroll-thumb-current` | `--sf-scroll-bg-thumb: var(--sf-current)` | — |
| `scroll-surface` | `--sf-scroll-bg-thumb: var(--sf-on-surface)` | — |
| `scroll-thumb-surface` | `--sf-scroll-bg-thumb: var(--sf-on-surface)` | — |
| `scroll-primary` | `--sf-scroll-bg-thumb: var(--sf-on-primary)` | — |
| `scroll-thumb-primary` | `--sf-scroll-bg-thumb: var(--sf-on-primary)` | — |
| `scroll-secondary` | `--sf-scroll-bg-thumb: var(--sf-on-secondary)` | — |
| `scroll-thumb-secondary` | `--sf-scroll-bg-thumb: var(--sf-on-secondary)` | — |
| `scroll-tertiary` | `--sf-scroll-bg-thumb: var(--sf-on-tertiary)` | — |
| `scroll-thumb-tertiary` | `--sf-scroll-bg-thumb: var(--sf-on-tertiary)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-current` | `currentColor` |
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-on-primary` | `light-dark(var(--sf-white), var(--sf-primary-20))` |
| `--sf-on-secondary` | `light-dark(var(--sf-white), var(--sf-secondary-20))` |
| `--sf-on-tertiary` | `light-dark(var(--sf-white), var(--sf-tertiary-20))` |

## Применение

### Выбор цвета

| Класс | Цвет ползунка | Для фона |
| :--- | :--- | :--- |
| `scroll-thumb-surface` | `--sf-on-surface` | поверхности: `bg-surface`, `bg-surface-container` |
| `scroll-thumb-primary` | `--sf-on-primary` | `bg-primary` |
| `scroll-thumb-secondary` | `--sf-on-secondary` | `bg-secondary` |
| `scroll-thumb-tertiary` | `--sf-on-tertiary` | `bg-tertiary` |
| `scroll-thumb-current` | цвет текста элемента | любой, где цвет текста уже подобран |
| `scroll-thumb-transparent` | прозрачный | ползунок не виден |

Ползунок по умолчанию светлый (`--sf-surface-1`) и на светлых поверхностях
почти не виден; на таких фонах ставьте `scroll-thumb-surface`.

```html
<div class="max-h-f4 overflow-auto bg-primary color-on-primary scroll-thumb-primary">…</div>
```

### Другие имена

`scroll-transparent`, `scroll-current`, `scroll-surface`,
`scroll-primary`, `scroll-secondary` и `scroll-tertiary` — вторые имена
тех же классов с тем же действием.

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
- `scroll-thumb-transparent` прячет ползунок, но не полосу: область
  по-прежнему прокручивается, а человек не видит, где он находится.
- У семейства нет префиксов ширины экрана и состояния.

## См. также

- [Цвет подложки прокрутки](/ru/utilities/overscroll/scroll-backdrop-color/)
- [Толщина ползунка прокрутки](/ru/utilities/overscroll/scroll/)
- [Ненавязчивая полоса прокрутки](/ru/utilities/overscroll/scroll-subtle/)
