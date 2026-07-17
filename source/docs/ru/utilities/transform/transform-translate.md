---
extends: _core._layouts.documentation
section: content
title: "Смещение (transform-translate)"
description: "Классы смещения transform-translate"
---

# Смещение (transform-translate)

!rtags[transform-translate hover]

`transform-translate` сдвигает элемент по оси `x` и/или `y`.

Классы по X и Y можно комбинировать на одном элементе. Утилита хранит значения в CSS-переменных `--sf-translate-x` и `--sf-translate-y`, а итоговый `transform` собирается как `translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0))`.

## Классы

| Класс                                 | Значение переменной            |
| :------------------------------------ | :----------------------------- |
| `.translate-x-0 ... .translate-x-9`   | `--sf-translate-x`             |
| `.translate-y-0 ... .translate-y-9`   | `--sf-translate-y`             |
| `.-translate-x-0 ... .-translate-x-9` | отрицательное `--sf-translate-x` |
| `.-translate-y-0 ... .-translate-y-9` | отрицательное `--sf-translate-y` |
| `.translate-x-half`                   | `--sf-translate-x: 50%`        |
| `.translate-y-half`                   | `--sf-translate-y: 50%`        |
| `.-translate-x-half`                  | `--sf-translate-x: -50%`       |
| `.-translate-y-half`                  | `--sf-translate-y: -50%`       |
| `.translate-x-full`                   | `--sf-translate-x: 100%`       |
| `.translate-y-full`                   | `--sf-translate-y: 100%`       |
| `.-translate-x-full`                  | `--sf-translate-x: -100%`      |
| `.-translate-y-full`                  | `--sf-translate-y: -100%`      |

{.table}

## Синтаксис

- `translate-x-{value}`, `translate-y-{value}`
- `-translate-x-{value}`, `-translate-y-{value}`
- `translate-x-half`, `translate-y-half`
- `-translate-x-half`, `-translate-y-half`
- `translate-x-full`, `translate-y-full`
- `-translate-x-full`, `-translate-y-full`

Для `value` доступны базовые токены `0...9`.

Все классы `transform-translate` задают одну из переменных и одновременно применяют общий transform:

```css
transform: translate(var(--sf-translate-x, 0), var(--sf-translate-y, 0));
```

Классы `*-half` используются, когда элемент нужно сдвинуть на 50% его собственного размера. Положительный вариант сдвигает элемент вправо или вниз, отрицательный — влево или вверх.

Классы `*-full` используются, когда элемент нужно сдвинуть на 100% его собственного размера, например для выезда панели или скрытия элемента за пределы контейнера.

Пример одновременного смещения по двум осям:

```html
<div class="translate-x-half translate-y-half"></div>
```

Итоговый сдвиг будет `translate(50%, 50%)`.

Для hover-состояния доступны соответствующие варианты:

- `hover:translate-x-half`, `hover:translate-y-half`
- `-hover:translate-x-half`, `-hover:translate-y-half`
- `hover:translate-x-full`, `hover:translate-y-full`
- `-hover:translate-x-full`, `-hover:translate-y-full`

## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=transform&group=transform-translate"></iframe>
</div>
