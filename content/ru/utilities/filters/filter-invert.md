---
title: "Инвертирование цвета элемента"
description: "Инвертирует цвета элемента и возвращает исходные."
---

# Инвертирование цвета элемента

Класс `invert` заменяет каждый цвет элемента противоположным, `invert-none`
возвращает исходные. Берите их для одноцветных значков и схем, которые должны
читаться на светлом и тёмном фоне.

## Пример

### Значения

:::example {id="utilities/filters/filter-invert" label="invert и invert-none"}
:::

### При наведении

Наведите указатель на изображение: цвета возвращаются.

:::example {id="utilities/filters/filter-invert-hover" label="hover:invert-none"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `invert` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-invert: invert(1)` | — |
| `invert-none` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-invert: invert(0)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:invert`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Одноцветная графика

Чёрная схема или значок, нарисованные без цветов темы, становятся белыми:

```html
<img class="invert" src="diagram-black.svg" alt="Схема">
```

Для собственных SVG надёжнее цвета темы: [цвет заливки](/ru/utilities/svg/svg-fill-color/)
и [цвет обводки](/ru/utilities/svg/svg-stroke-color/) сами меняются вместе с темой.

## Ограничения

- На элементе действует один класс фильтра. Каждый класс семейств фильтра
  (`blur-*`, `brightness-*`, `contrast-*`, `grayscale`, `hue-rotate-*`,
  `invert`, `saturate-*`, `sepia`) задаёт свойство `filter` целиком и
  сбрасывает функции остальных семейств, поэтому из `blur-small grayscale`
  остаётся только тот класс, чьё правило стоит в CSS позже. Чтобы сложить два
  фильтра, поставьте второй класс на обёртку.
- Класс с `hover:` тоже задаёт фильтр целиком: при наведении он заменяет
  фильтр элемента, а не добавляется к нему.
- Любое значение, в том числе `invert-none`, создаёт у элемента новый контекст
  наложения и содержащий блок для потомков с `position: fixed`.
- Инверсия не следует за темой: класс действует одинаково в светлой и тёмной
  теме. Чтобы инвертировать только в одной теме, задайте фильтр в CSS темы
  проекта.

## См. также

- [Цвет заливки](/ru/utilities/svg/svg-fill-color/)
- [Инвертирование цвета фона элемента](/ru/utilities/backdrop-filter/backdrop-invert/)
