---
extends: _core._layouts.documentation
section: content
title: Цвет полос
description: Цвет полос
---

# Цвет полос


С помощью модификаторов `stripe-{color}` можно задать цвет полосок паттерна фона.  
Доступны следующие цвета:

- `stripe-transparent` для прозрачного цвета
- `stripe-current` для цвета, заданного свойством `color`
- `stripe-inherit` для наследования цвета от родителя
- `stripe-surface-transparent-overlay` для прозрачного наложения на основную поверхность
- `stripe-on-surface` для цвета текста на поверхности
- `stripe-primary` для основного (primary) цвета
- `stripe-primary-container` для основного цвета контейнера
- `stripe-secondary` для вторичного (secondary) цвета
- `stripe-secondary-container` для вторичного цвета контейнера
- `stripe-tertiary` для третичного (tertiary) цвета
- `stripe-tertiary-container` для третичного цвета контейнера

## Таблица классов

| Класс                               | Значение                                   |
|:------------------------------------|:---------------------------------------------------------------|
| .stripe-transparent                 | `--sf-stripe--color`: var(`--sf-transparent`);                 |
| .stripe-current                     | `--sf-stripe--color`: currentColor;                            |
| .stripe-inherit                     | `--sf-stripe--color`: inherit;                                 |
| .stripe-surface-transparent-overlay | `--sf-stripe--color`: var(`--sf-surface-transparent-overlay`); |
| .stripe-on-surface                  | `--sf-stripe--color`: var(`--sf-on-surface`);                  |
| .stripe-primary                     | `--sf-stripe--color`: var(`--sf-primary`);                     |
| .stripe-primary-container           | `--sf-stripe--color`: var(`--sf-primary-container`);           |
| .stripe-secondary                   | `--sf-stripe--color`: var(`--sf-secondary`);                   |
| .stripe-secondary-container         | `--sf-stripe--color`: var(`--sf-secondary-container`);         |
| .stripe-tertiary                    | `--sf-stripe--color`: var(`--sf-tertiary`);                    |
| .stripe-tertiary-container          | `--sf-stripe--color`: var(`--sf-tertiary-container`);          |

{.table}

## Описание

Модификаторы `stripe-{color}` устанавливают переменную `--sf-stripe--color`, определяющую цвет полосок в паттерне
фона.  
Это позволяет изменять цвет полос в сочетании с любым паттерном (`stripe-1`, `stripe-2` и т.д.).

## Пример использования

```html

<div class="stripe-1 stripe-primary p-3">Полоски primary цвета в стиле stripe-1</div>
<div class="stripe-2 stripe-on-surface p-3">Полоски on-surface цвета в стиле stripe-2</div>
<div class="stripe-3 stripe-tertiary-container p-3">Полоски tertiary-container цвета в стиле stripe-3</div>
<div class="stripe-4 stripe-surface-transparent-overlay p-3">Полоски surface-transparent-overlay цвета в стиле
    stripe-4
</div>
```
