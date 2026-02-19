---
extends: _core._layouts.documentation
section: content
title: "Максимальный размер контейнера (max-container)"
description: "Максимальный размер контейнера (max-container)"
---

# Максимальный размер контейнера (max-container)

!rtags[max-container]


Данный модификатор позволяет изменить максимальную ширину контейнера при достижении определённой контрольной точки. В
новой версии фреймворка размеры привязаны к переменным масштабирования из системы размеров. По умолчанию, данные
модификаторы начинают действовать начиная с контрольной точки `desktop` (≥ var(--sf-breakpoint-lg)).

## Переменные максимальной ширины контейнера

| Переменная     {.wrap-normal} | Значение  | Размер |
|:------------------------------|:----------|:-------|
| `--sf-container-1--size-max`  | `--sf-h5` | 960px  |
| `--sf-container-2--size-max`  | `--sf-h6` | 1024px |
| `--sf-container-3--size-max`  | `--sf-h8` | 1152px |
| `--sf-container-4--size-max`  | `--sf-i0` | 1280px |
| `--sf-container-5--size-max`  | `--sf-i1` | 1408px |
| `--sf-container-6--size-max`  | `--sf-i2` | 1536px |
| `--sf-container-7--size-max`  | `--sf-i3` | 1664px |
| `--sf-container-8--size-max`  | `--sf-i4` | 1792px |
{.table}

## Классы и значения

| Класс            | Контрольная точка | Значение    {.wrap-normal}                    |
|:-----------------|:------------------|:----------------------------------------------|
| .max-container-1 | desktop           | max-width: var(`--sf-container-1--size-max`); |
| .max-container-2 | desktop           | max-width: var(`--sf-container-2--size-max`); |
| .max-container-3 | desktop           | max-width: var(`--sf-container-3--size-max`); |
| .max-container-4 | desktop           | max-width: var(`--sf-container-4--size-max`); |
| .max-container-5 | desktop           | max-width: var(`--sf-container-5--size-max`); |
| .max-container-6 | desktop           | max-width: var(`--sf-container-6--size-max`); |
| .max-container-7 | desktop           | max-width: var(`--sf-container-7--size-max`); |
| .max-container-8 | desktop           | max-width: var(`--sf-container-8--size-max`); |
{.table}

## Пример использования

```html
<div class="max-container-5">
    <div class="container">
        ... ваш контент ...
    </div>
</div>
```

В данном примере, начиная с контрольной точки `desktop`, максимальная ширина вложенного контейнера будет ограничена
значением `var(--sf-container-5--size-max)` (примерно 1408px). До достижения этой ширины ограничение действовать не
будет, и контейнер будет вести себя по умолчанию.

Это позволяет создавать более сложные, адаптивные сетки с чётко заданными максимальными размерами, что особенно полезно
для крупноформатных дисплеев и высоких разрешений.
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=layout&group=max-container"></iframe>
</div>
