---
title: "Ненавязчивая полоса прокрутки"
description: "Показывает тонкую нейтральную полосу прокрутки, которая становится заметнее при наведении и фокусе."
---

# Ненавязчивая полоса прокрутки

Класс `scroll-subtle` делает полосу прокрутки тонкой и полупрозрачной в
цвете текста поверхности. В покое она почти не отвлекает, а при наведении
указателя или фокусе внутри области становится заметнее. Берите его для
боковых панелей, списков и областей редактора с собственной прокруткой.

## Пример

Прокрутите список, наведите на него указатель или перейдите в него клавишей
Tab.

:::example {id="utilities/overscroll/scroll-subtle" label="Ненавязчивая прокрутка"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `scroll-subtle` | `--sf-scroll-thumb-subtle: color-mix(
      in srgb,
      var(--sf-on-surface) 10%,
      var(--sf-transparent)
    ); --sf-scroll-thumb-subtle-interactive: color-mix(
      in srgb,
      var(--sf-on-surface) 20%,
      var(--sf-transparent)
    ); --sf-scroll-bg-track: var(--sf-transparent); --sf-scroll-bg-thumb: var(--sf-scroll-thumb-subtle); scrollbar-gutter: auto; scrollbar-width: thin; scrollbar-color: var(--sf-scroll-thumb-subtle) var(--sf-transparent); .scroll-subtle:hover { --sf-scroll-bg-thumb: var(--sf-scroll-thumb-subtle-interactive); scrollbar-color: var(--sf-scroll-thumb-subtle-interactive) var(--sf-transparent) }; .scroll-subtle[focus-within] { --sf-scroll-bg-thumb: var(--sf-scroll-thumb-subtle-interactive); scrollbar-color: var(--sf-scroll-thumb-subtle-interactive) var(--sf-transparent) }; .scroll-subtle:focus-within { --sf-scroll-bg-thumb: var(--sf-scroll-thumb-subtle-interactive); scrollbar-color: var(--sf-scroll-thumb-subtle-interactive) var(--sf-transparent) }; (forced-colors: active): scrollbar-color: auto; .scroll-subtle:hover { (forced-colors: active): scrollbar-color: auto }; .scroll-subtle[focus-within] { (forced-colors: active): scrollbar-color: auto }; .scroll-subtle:focus-within { (forced-colors: active): scrollbar-color: auto }` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-on-surface` | `light-dark(var(--sf-neutral-10), var(--sf-neutral-90))` |
| `--sf-transparent` | `rgba(255,255,255,0)` |

## Применение

### Подключение

Сначала ограничьте размер области и включите прокрутку, затем добавьте
класс:

```html
<aside class="max-h-f4 overflow-auto scroll-subtle">
  <!-- список -->
</aside>
```

Ползунок занимает 10% цвета `--sf-on-surface`, при наведении и фокусе
внутри — 20%; подложка прозрачная. Полоса задана стандартными свойствами
`scrollbar-width: thin` и `scrollbar-color`; браузер без их поддержки рисует
её через `::-webkit-scrollbar` теми же цветами.

## Ограничения

- Классы толщины, радиуса и цвета полосы (`scroll-bg-*`, `scroll-thumb-*`) на
  элементе с `scroll-subtle` в Chrome, Edge и Firefox не действуют:
  стандартные свойства полосы отменяют оформление через
  `::-webkit-scrollbar`.
- Цвет рассчитан на области с фоном поверхности. На залитом фоне роли
  (`bg-primary` и подобных) полоса может потеряться.
- В режиме повышенной контрастности браузер рисует полосу системными цветами,
  чтобы ползунок оставался различимым.
- Префиксов ширины экрана и состояния у класса нет: наведение и фокус
  встроены в сам класс.

## См. также

- [Полоса прокрутки при наведении](/ru/utilities/overscroll/scroll-hover/)
- [Цвет ползунка прокрутки](/ru/utilities/overscroll/scroll-slider-color/)
