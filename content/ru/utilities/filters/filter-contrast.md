---
title: "Контрастность элемента"
description: "Повышает или снижает контрастность элемента вместе с содержимым."
---

# Контрастность элемента

Классы `contrast-*` меняют контрастность всего элемента. Берите их, чтобы
приглушить второстепенное изображение или сделать его чётче при наведении.

## Пример

### Шкала

`contrast-1` оставляет элемент как есть, ступени ниже снижают контраст, выше — повышают. `contrast-0` делает элемент сплошным серым.

:::example {id="utilities/filters/filter-contrast" label="Ступени контрастности"}
:::

### При наведении

Наведите указатель на изображение: контраст растёт.

:::example {id="utilities/filters/filter-contrast-hover" label="hover:contrast-4"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `contrast-0` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(0)` | — |
| `contrast-1/4` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(0.8)` | — |
| `contrast-1/3` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(0.9)` | — |
| `contrast-1/2` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(0.95)` | — |
| `contrast-1` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(1)` | — |
| `contrast-2` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(1.05)` | — |
| `contrast-3` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(1.1)` | — |
| `contrast-4` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-contrast: contrast(1.2)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:contrast-0`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Шкала

| Класс | Значение |
| :--- | ---: |
| `contrast-0` | 0 |
| `contrast-1/4` | 0.8 |
| `contrast-1/3` | 0.9 |
| `contrast-1/2` | 0.95 |
| `contrast-1` | 1 |
| `contrast-2` | 1.05 |
| `contrast-3` | 1.1 |
| `contrast-4` | 1.2 |

### Эффект при наведении

```html
<img class="contrast-1/4 hover:contrast-4 transition" src="photo.jpg" alt="Фотография">
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
- Любое значение, в том числе `contrast-1`, создаёт у элемента новый контекст
  наложения и содержащий блок для потомков с `position: fixed`.

## См. также

- [Яркость элемента](/ru/utilities/filters/filter-brightness/)
- [Насыщенность элемента](/ru/utilities/filters/filter-saturate/)
- [Контрастность фона элемента](/ru/utilities/backdrop-filter/backdrop-contrast/)
