---
title: "Полоса прокрутки при наведении"
description: "Прячет полосу прокрутки области и показывает её, пока над областью указатель."
---

# Полоса прокрутки при наведении

Класс `scroll-hover` прячет полосу прокрутки области и показывает её, пока
над областью находится указатель мыши. Берите его для небольших панелей и
списков, где постоянная полоса загромождает интерфейс, а прокрутка нужна
изредка.

## Пример

Наведите указатель на правую область: полоса появляется. Левая область —
для сравнения, без класса.

:::example {id="utilities/overscroll/scroll-hover" label="Полоса прокрутки при наведении"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `scroll-hover` | `scrollbar-width: none; .scroll-hover::-webkit-scrollbar { width: 0; height: 0 }; .scroll-hover:hover { scrollbar-width: thin; scrollbar-color: var(--sf-scroll-bg-thumb) var(--sf-transparent) }; .scroll-hover:hover::-webkit-scrollbar { width: var(--sf-scroll-bg-width); height: var(--sf-scroll-bg-width) }; .scroll-hover:hover::-webkit-scrollbar-thumb { height: var(--sf-scroll-thumb-width); height: var(--sf-scroll-thumb-size, var(--sf-scroll-thumb-width)); border: var(--sf-scroll-thumb-inset) solid var(--sf-transparent); background-clip: padding-box; border-radius: var(--sf-scroll-radius); background-color: var(--sf-scroll-bg-thumb) }; .scroll-hover:hover::-webkit-scrollbar-track { background-color: var(--sf-scroll-bg-track); border: var(--sf-scroll-thumb-inset) solid var(--sf-transparent); background-clip: padding-box; border-radius: var(--sf-scroll-radius) }; transition: var(--sf-duration-normal) var(--sf-animation); .scroll-hover::-webkit-scrollbar { transition: var(--sf-duration-normal) var(--sf-animation) }; .scroll-hover::-webkit-scrollbar-thumb { transition: var(--sf-duration-normal) var(--sf-animation) }; .scroll-hover::-webkit-scrollbar-track { transition: var(--sf-duration-normal) var(--sf-animation) }` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-scroll-bg-thumb` | задаётся темой |
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-scroll-bg-width` | задаётся темой |
| `--sf-scroll-thumb-width` | задаётся темой |
| `--sf-scroll-thumb-size` | задаётся темой |
| `--sf-scroll-thumb-inset` | задаётся темой |
| `--sf-scroll-radius` | задаётся темой |
| `--sf-scroll-bg-track` | задаётся темой |
| `--sf-duration-normal` | `0.3S` |
| `--sf-animation` | `cubic-bezier(.25, .8, .25, 1)` |

## Применение

### Вид полосы

При наведении полоса берёт толщину, цвета и радиус из тех же переменных, что
и обычная полоса, поэтому её настраивают теми же классами:
[толщина](/ru/utilities/overscroll/scroll-backdrop-width/),
[цвет подложки](/ru/utilities/overscroll/scroll-backdrop-color/),
[цвет ползунка](/ru/utilities/overscroll/scroll-slider-color/).

```html
<aside class="max-h-f4 overflow-auto scroll-hover scroll-thumb-surface">
  <!-- список -->
</aside>
```

В Firefox полоса скрыта через `scrollbar-width: none` и при наведении
становится тонкой стандартной полосой цвета ползунка.

## Ограничения

- На сенсорных экранах наведения нет: полоса не появляется, хотя область
  прокручивается пальцем. Человек может не понять, что содержимое не
  закончилось, — оставляйте видимую подсказку, например обрезанный последний
  пункт.
- Полоса не появляется при фокусе с клавиатуры; область прокручивается
  стрелками, если на ней или внутри неё есть фокус.
- Класс нужен только прокручиваемому элементу с `overflow-auto` или
  `overflow-scroll`.
- Префиксов ширины экрана и состояния у класса нет: наведение встроено в сам
  класс.

## См. также

- [Ненавязчивая полоса прокрутки](/ru/utilities/overscroll/scroll-subtle/)
- [Цвет ползунка прокрутки](/ru/utilities/overscroll/scroll-slider-color/)
- [Толщина подложки прокрутки](/ru/utilities/overscroll/scroll-backdrop-width/)
