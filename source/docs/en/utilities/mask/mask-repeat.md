---
extends: _core._layouts.documentation
section: content
title: Повтор маски
description: Повтор маски
---

# Повтор маски


С помощью модификаторов повтора маски можно управлять тем, как будет повторяться маска внутри элемента.

## Таблица классов

| Класс              | Значение                |
|:-------------------|:------------------------|
| .mask-repeat       | mask-repeat: repeat;    |
| .mask-repeat-none  | mask-repeat: no-repeat; |
| .mask-repeat-x     | mask-repeat: repeat-x;  |
| .mask-repeat-y     | mask-repeat: repeat-y;  |
| .mask-repeat-round | mask-repeat: round;     |
| .mask-repeat-space | mask-repeat: space;     |
{.table}

## Описание

Модификаторы повторения маски определяют, как изображение маски будет заполнять доступное пространство:

- **mask-repeat** – маска повторяется по горизонтали и вертикали.
- **mask-repeat-none** – маска отображается один раз, без повторения.
- **mask-repeat-x** – маска повторяется только по оси X (горизонтально).
- **mask-repeat-y** – маска повторяется только по оси Y (вертикально).
- **mask-repeat-round** – маска повторяется с возможным искажением пропорций, чтобы целиком заполнить область.
- **mask-repeat-space** – маска повторяется целыми изображениями без искажения, возможны промежутки между ними.

## Примеры использования

```html
<!-- Повтор маски по обеим осям -->
<div class="mask-repeat"></div>
```

```html
<!-- Маска без повторения -->
<div class="mask-repeat-none"></div>
```

```html
<!-- Повтор маски по оси X -->
<div class="mask-repeat-x"></div>
```

```html
<!-- Повтор маски по оси Y -->
<div class="mask-repeat-y"></div>
```

```html
<!-- Повтор маски с искажением для заполнения области -->
<div class="mask-repeat-round"></div>
```

```html
<!-- Повтор маски с возможными промежутками -->
<div class="mask-repeat-space"></div>
```
