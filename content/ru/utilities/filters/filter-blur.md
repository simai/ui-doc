---
title: "Размытие элемента"
description: "Размывает элемент вместе с содержимым — слабо, средне или сильно."
---

# Размытие элемента

Классы `blur-*` размывают весь элемент: изображение, текст и фон. Берите их
для заглушки на месте загружаемого изображения, для приглушённого фона под
диалогом или для эффекта при наведении.

## Пример

### Шкала

Три степени размытия и нулевое значение. `blur` и `blur-medium` дают одно и то же.

:::example {id="utilities/filters/filter-blur" label="Степени размытия"}
:::

### При наведении

Наведите указатель на изображение: оно становится чётким.

:::example {id="utilities/filters/filter-blur-hover" label="hover:blur-none"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `blur-small` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-blur: blur(var(--sf-blur-small))` | — |
| `blur` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-blur: blur(var(--sf-blur-medium))` | — |
| `blur-medium` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-blur: blur(var(--sf-blur-medium))` | — |
| `blur-large` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-blur: blur(var(--sf-blur-large))` | — |
| `blur-none` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-blur: blur(var(--sf-blur-none))` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:blur-small`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-blur-small` | `var(--sf-a2)` |
| `--sf-blur-medium` | `var(--sf-a4)` |
| `--sf-blur-large` | `var(--sf-a8)` |
| `--sf-blur-none` | `var(--sf-a0)` |

## Применение

### Как выбрать степень

| Класс | Токен | Радиус |
| :--- | :--- | ---: |
| `blur-none` | `--sf-blur-none` | 0 |
| `blur-small` | `--sf-blur-small` | 2px |
| `blur`, `blur-medium` | `--sf-blur-medium` | 4px |
| `blur-large` | `--sf-blur-large` | 8px |

Значения приведены при `1rem = 16px`. Те же токены читают классы
[размытия фона](/ru/utilities/backdrop-filter/backdrop-blur/): изменённый
токен меняет оба семейства.

### Эффект при наведении

Класс `transition` делает смену фильтра плавной:

```html
<img class="blur-large hover:blur-none transition" src="photo.jpg" alt="Фотография">
```

`blur-none` нужен, чтобы снять размытие, заданное классом с префиксом
состояния или ширины экрана.

## Ограничения

- На элементе действует один класс фильтра. Каждый класс семейств фильтра
  (`blur-*`, `brightness-*`, `contrast-*`, `grayscale`, `hue-rotate-*`,
  `invert`, `saturate-*`, `sepia`) задаёт свойство `filter` целиком и
  сбрасывает функции остальных семейств, поэтому из `blur-small grayscale`
  остаётся только тот класс, чьё правило стоит в CSS позже. Чтобы сложить два
  фильтра, поставьте второй класс на обёртку.
- Класс с `hover:` тоже задаёт фильтр целиком: при наведении он заменяет
  фильтр элемента, а не добавляется к нему.
- Любое значение, в том числе `blur-none`, создаёт у элемента новый контекст
  наложения и содержащий блок для потомков с `position: fixed`.

## См. также

- [Размытие фона элемента](/ru/utilities/backdrop-filter/backdrop-blur/)
- [Прозрачность](/ru/utilities/filters/opacity/)
- [Смешивание цветов](/ru/utilities/filters/mix-blend-mode/)
