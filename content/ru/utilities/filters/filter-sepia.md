---
title: "Сепия элемента"
description: "Окрашивает элемент в тёплые коричневые тона и возвращает исходные цвета."
---

# Сепия элемента

Класс `sepia` переводит элемент в коричневые тона старой фотографии,
`sepia-none` возвращает исходные цвета. Берите их для архивных изображений и
декоративного эффекта при наведении.

## Пример

### Значения

:::example {id="utilities/filters/filter-sepia" label="sepia и sepia-none"}
:::

### При наведении

Наведите указатель на изображение: возвращаются исходные цвета.

:::example {id="utilities/filters/filter-sepia-hover" label="hover:sepia-none"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `sepia` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-sepia: sepia(1)` | — |
| `sepia-none` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-sepia: sepia(0)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:sepia`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Архивное изображение

```html
<img class="sepia hover:sepia-none transition" src="archive.jpg" alt="Архивная фотография">
```

`sepia-none` снимает фильтр, заданный классом с префиксом состояния или
ширины экрана.

## Ограничения

- На элементе действует один класс фильтра. Каждый класс семейств фильтра
  (`blur-*`, `brightness-*`, `contrast-*`, `grayscale`, `hue-rotate-*`,
  `invert`, `saturate-*`, `sepia`) задаёт свойство `filter` целиком и
  сбрасывает функции остальных семейств, поэтому из `blur-small grayscale`
  остаётся только тот класс, чьё правило стоит в CSS позже. Чтобы сложить два
  фильтра, поставьте второй класс на обёртку.
- Класс с `hover:` тоже задаёт фильтр целиком: при наведении он заменяет
  фильтр элемента, а не добавляется к нему.
- Любое значение, в том числе `sepia-none`, создаёт у элемента новый контекст
  наложения и содержащий блок для потомков с `position: fixed`.

## См. также

- [Монохромность элемента](/ru/utilities/filters/filter-grayscale/)
- [Сепия подложки](/ru/utilities/backdrop-filter/backdrop-sepia/)
