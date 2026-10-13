---
title: "Насыщенность элемента"
description: "Снижает или повышает насыщенность цветов элемента."
---

# Насыщенность элемента

Классы `saturate-*` меняют насыщенность цветов всего элемента. Берите их,
чтобы приглушить яркое изображение или сделать его сочнее при наведении.

## Пример

### Шкала

`saturate-1` оставляет цвета как есть, `saturate-0` убирает цвет полностью, ступени выше единицы усиливают его.

:::example {id="utilities/filters/filter-saturate" label="Ступени насыщенности"}
:::

### При наведении

Наведите указатель на изображение: цвет появляется и становится сочнее.

:::example {id="utilities/filters/filter-saturate-hover" label="hover:saturate-4"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `saturate-0` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(0)` | — |
| `saturate-1/4` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(0.25)` | — |
| `saturate-1/3` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(0.5)` | — |
| `saturate-1/2` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(0.75)` | — |
| `saturate-1` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(1)` | — |
| `saturate-2` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(1.25)` | — |
| `saturate-3` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(1.5)` | — |
| `saturate-4` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-saturate: saturate(1.75)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:saturate-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Шкала

У насыщенности ступени крупнее, чем у яркости и контраста: шаг — четверть.

| Класс | Значение |
| :--- | ---: |
| `saturate-0` | 0 |
| `saturate-1/4` | 0.25 |
| `saturate-1/3` | 0.5 |
| `saturate-1/2` | 0.75 |
| `saturate-1` | 1 |
| `saturate-2` | 1.25 |
| `saturate-3` | 1.5 |
| `saturate-4` | 1.75 |

`saturate-0` даёт тот же результат, что [`grayscale`](/ru/utilities/filters/filter-grayscale/).

```html
<img class="saturate-0 hover:saturate-4 transition" src="photo.jpg" alt="Фотография">
```

## Ограничения

- На элементе действует один класс фильтра. Каждый класс семейств фильтра
  (`blur-*`, `brightness-*`, `contrast-*`, `grayscale`, `hue-rotate-*`,
  `invert`, `saturate-*`, `sepia`) задаёт свойство `filter` целиком и
  сбрасывает функции остальных семейств, поэтому из `blur-small grayscale`
  остаётся только тот класс, чьё правило стоит в CSS позже. Чтобы сложить два
  фильтра, поставьте второй класс на обёртку.
- Класс с `hover:` тоже задаёт фильтр целиком: при наведении он заменяет
  фильтр элемента, а не добавляется к нему.
- Любое значение, в том числе `saturate-1`, создаёт у элемента новый контекст
  наложения и содержащий блок для потомков с `position: fixed`.

## См. также

- [Монохромность элемента](/ru/utilities/filters/filter-grayscale/)
- [Контрастность элемента](/ru/utilities/filters/filter-contrast/)
- [Насыщенность подложки](/ru/utilities/backdrop-filter/backdrop-saturate/)
