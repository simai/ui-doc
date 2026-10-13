---
title: "Монохромность элемента"
description: "Переводит элемент в оттенки серого и возвращает цвет."
---

# Монохромность элемента

Класс `grayscale` убирает цвет у всего элемента, `grayscale-none` возвращает
его. Берите их для неактивных логотипов, архивных записей и эффекта «цвет при
наведении».

## Пример

### Значения

:::example {id="utilities/filters/filter-grayscale" label="grayscale и grayscale-none"}
:::

### При наведении

Наведите указатель на изображение: возвращается цвет.

:::example {id="utilities/filters/filter-grayscale-hover" label="hover:grayscale-none"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `grayscale` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-grayscale: grayscale(1)` | — |
| `grayscale-none` | `--sf-blur:; --sf-brightness:; --sf-contrast:; --sf-grayscale:; --sf-hue-rotate:; --sf-invert:; --sf-saturate:; --sf-sepia:; --sf-drop-shadow:; filter: var(--sf-blur) var(--sf-brightness) var(--sf-contrast) var(--sf-grayscale) var(--sf-hue-rotate) var(--sf-invert) var(--sf-saturate) var(--sf-sepia) var(--sf-drop-shadow); --sf-grayscale: grayscale(0)` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:grayscale`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Цвет при наведении

Ряд логотипов партнёров выглядит спокойнее в оттенках серого; цвет
возвращается у того, на который наведён указатель:

```html
<img class="grayscale hover:grayscale-none transition" src="partner.svg" alt="Партнёр">
```

`grayscale-none` снимает фильтр, заданный классом с префиксом состояния или
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
- Любое значение, в том числе `grayscale-none`, создаёт у элемента новый контекст
  наложения и содержащий блок для потомков с `position: fixed`.
- Серый вариант не заменяет состояние «недоступно»: недоступный элемент
  нужно отметить в разметке (`disabled`, `aria-disabled`).

## См. также

- [Насыщенность элемента](/ru/utilities/filters/filter-saturate/)
- [Сепия элемента](/ru/utilities/filters/filter-sepia/)
- [Фон в оттенках серого элемента](/ru/utilities/backdrop-filter/backdrop-grayscale/)
