---
extends: _core._layouts.documentation
section: content
title: Размер полосок
description: Размер полосок
---

# Размер полосок

!rtags[stripe-width sm md lg xl]






С помощью модификаторов `stripe-size-{1...4}` можно изменить размер полосок в паттерне фона. Каждый модификатор
устанавливает переменную `--sf-stripe--size` в определенное значение, что влияет на размер повторяющихся полос.

## Таблица классов

| Класс          | Значение                           |
|:---------------|:-----------------------------------|
| .stripe-size-1 | `--sf-stripe--size: var(--sf-a1);` |
| .stripe-size-2 | `--sf-stripe--size: var(--sf-a2);` |
| .stripe-size-3 | `--sf-stripe--size: var(--sf-a3);` |
| .stripe-size-4 | `--sf-stripe--size: var(--sf-a4);` |
{.table}

## Описание

Модификаторы `stripe-size-1`, `stripe-size-2`, `stripe-size-3`, `stripe-size-4` задают величину полос, используемых в
различных паттернах (например, `stripe-1`, `stripe-2` и т.д.).  
Изменение размера полосок позволяет подобрать необходимый визуальный эффект.

## Пример использования

```html
<div class="stripe-size-1 stripe-1 p-3">Полоски размера 1 в стиле stripe-1</div>
<div class="stripe-size-2 stripe-2 p-3">Полоски размера 2 в стиле stripe-2</div>
<div class="stripe-size-3 stripe-3 p-3">Полоски размера 3 в стиле stripe-3</div>
<div class="stripe-size-4 stripe-4 p-3">Полоски размера 4 в стиле stripe-4</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=stripes&group=stripes-size"></iframe>
</div>
