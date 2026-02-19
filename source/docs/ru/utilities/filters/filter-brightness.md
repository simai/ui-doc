---
extends: _core._layouts.documentation
section: content
title: "Яркость элемента (filter-brightness)"
description: "Яркость элемента (filter-brightness)"
---

# Яркость элемента (filter-brightness)

!rtags[filter-brightness]



Данные модификаторы позволяют управлять яркостью элемента.

## Классы

| Старый класс                 | Новый класс    |
|:-----------------------------|:---------------|
| .brightness-1, .brightness-2 | brightness-1/4 |
| .brightness-3                | brightness-1/3 |
| .brightness-4                | brightness-1/2 |
| .brightness-5                | brightness-1   |
| .brightness-6                | brightness-2   |
| .brightness-7                | brightness-3   |
| .brightness-8, .brightness-9 | brightness-4   |
{.table}

## Новые классы и их значения

| Класс           | Значение                  |
|:----------------|:--------------------------|
| .brightness-0   | filter: brightness(0);    |
| .brightness-1/4 | filter: brightness(0.8);  |
| .brightness-1/3 | filter: brightness(0.9);  |
| .brightness-1/2 | filter: brightness(0.95); |
| .brightness-1   | filter: brightness(1);    |
| .brightness-2   | filter: brightness(1.05); |
| .brightness-3   | filter: brightness(1.1);  |
| .brightness-4   | filter: brightness(1.2);  |
{.table}

## Описание

Модификаторы `brightness-*` устанавливают яркость элемента.

- `brightness-1` соответствует нормальной яркости (1).
- Значения меньше `1` уменьшают яркость, а больше `1` — увеличивают.

Также можно использовать `hover:brightness-*` для изменения яркости при наведении курсора.

## Синтаксис

- `brightness-0`, `brightness-1/4`, `brightness-1/3`, `brightness-1/2`, `brightness-1`, `brightness-2`, `brightness-3`,
  `brightness-4` задают степень яркости.
- `hover:brightness-*` позволяет изменять яркость при наведении.

## Пример использования

````html
<!-- Нормальная яркость -->
<div class="brightness-1 p-4 bg-primary color-on-surface-inverse">Яркость нормальная</div>

```html

```html
<!-- Увеличение яркости при наведении -->
<div class="brightness-1 hover:brightness-3 p-4 bg-tertiary m-top-2 transition">Наведи, чтобы увеличить яркость</div>
````
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=filters&group=filter-brightness"></iframe>
</div>
