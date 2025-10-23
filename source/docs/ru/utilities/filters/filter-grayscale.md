---
extends: _core._layouts.documentation
section: content
title: "Монохромность элемента (filter-grayscale)"
description: "Монохромность элемента (filter-grayscale)"
---

# Монохромность элемента (filter-grayscale)

[https://dev.ru.simai.io/ru/ui/utility/filter/filter-grayscale.php](https://dev.ru.simai.io/ru/ui/utility/filter/filter-grayscale.php)

Данный модификатор позволяет управлять оттенком серого для элемента.  
Убираем адаптивность (`sm`, `md`, `lg`, `xl`), оставляем поддержку `hover`.

## Классы и их значения

| Класс           | Значение              |
|:----------------|:----------------------|
| .grayscale-none | filter: grayscale(0); |
| .grayscale      | filter: grayscale(1); |
{.table}

## Описание

Модификаторы `grayscale-none` и `grayscale` управляют тем, насколько элемент будет отображаться в оттенках серого:

- `grayscale-none` — элемент без преобразования, в исходных цветах.
- `grayscale` — элемент отображается полностью в оттенках серого.

Можно использовать `hover:grayscale` или `hover:grayscale-none` для изменения оттенка серого при наведении курсора.

## Синтаксис

- `grayscale-none` — убирает монохромность.
- `grayscale` — добавляет монохромность элементу.
- `hover:grayscale` или `hover:grayscale-none` — изменение при наведении.

## Пример использования

```html
<!-- Элемент без монохромности -->
<div class="grayscale-none p-4 bg-primary color-on-surface-inverse">Цветной элемент</div>
```

```html
<!-- Монохромный элемент при наведении -->
<div class="grayscale-none hover:grayscale p-4 bg-secondary transition">Наведи, чтобы стало монохромным</div>
```
