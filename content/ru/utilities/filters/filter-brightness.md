---
title: "Яркость элемента"
description: "Затемняет или осветляет элемент вместе с содержимым."
---

# Яркость элемента

Классы `brightness-*` меняют яркость всего элемента. Берите их, чтобы слегка
приглушить изображение под текстом или подсветить карточку при наведении.

## Пример

### Шкала

`brightness-1` оставляет элемент как есть, ступени ниже затемняют, выше — осветляют. `brightness-0` делает элемент чёрным.

:::example {id="utilities/filters/filter-brightness" label="Ступени яркости"}
:::

### При наведении

Наведите указатель на изображение: оно становится ярче.

:::example {id="utilities/filters/filter-brightness-hover" label="hover:brightness-4"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `brightness-0` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(0)` | — |
| `brightness-1/4` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(0.8)` | — |
| `brightness-1/3` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(0.9)` | — |
| `brightness-1/2` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(0.95)` | — |
| `brightness-1` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(1)` | — |
| `brightness-2` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(1.05)` | — |
| `brightness-3` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(1.1)` | — |
| `brightness-4` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-brightness: brightness(1.2)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:brightness-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Шкала

Ступени около единицы мелкие: они нужны для оттенков интерфейса, а не для
обработки фотографий.

| Класс | Значение |
| :--- | ---: |
| `brightness-0` | 0 |
| `brightness-1/4` | 0.8 |
| `brightness-1/3` | 0.9 |
| `brightness-1/2` | 0.95 |
| `brightness-1` | 1 |
| `brightness-2` | 1.05 |
| `brightness-3` | 1.1 |
| `brightness-4` | 1.2 |

### Эффект при наведении

```html
<img class="brightness-1/4 hover:brightness-4 transition" src="photo.jpg" alt="Фотография">
```

Для затемнения изображения под текстом надёжнее слой поверх изображения с
полупрозрачным фоном: он не меняет само изображение и одинаково работает в
светлой и тёмной теме.

## Ограничения

- На элементе действует один класс фильтра. Каждый класс семейств фильтра
  (`blur-*`, `brightness-*`, `contrast-*`, `grayscale`, `hue-rotate-*`,
  `invert`, `saturate-*`, `sepia`) задаёт свойство `filter` целиком и
  сбрасывает функции остальных семейств, поэтому из `blur-small grayscale`
  остаётся только тот класс, чьё правило стоит в CSS позже. Чтобы сложить два
  фильтра, поставьте второй класс на обёртку.
- Класс с `hover:` тоже задаёт фильтр целиком: при наведении он заменяет
  фильтр элемента, а не добавляется к нему.
- Любое значение, в том числе `brightness-1`, создаёт у элемента новый контекст
  наложения и содержащий блок для потомков с `position: fixed`.

## См. также

- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
- [Контрастность элемента](/ru/utilities/filters/filter-contrast/)
- [Яркость фона элемента](/ru/utilities/backdrop-filter/backdrop-brightness/)
