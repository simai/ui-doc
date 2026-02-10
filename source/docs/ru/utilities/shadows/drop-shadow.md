---
extends: _core._layouts.documentation
section: content
title: "Падающая тень (drop-shadow)"
description: "Падающая тень (drop-shadow)"
---

# Падающая тень (drop-shadow)

[https://dev.ru.simai.io/ru/ui/utility/shadow/drop-shadow.php](https://dev.ru.simai.io/ru/ui/utility/shadow/drop-shadow.php)

Данные модификаторы позволяют задать уровень падающей тени для элемента, используя переменную
`--sf-shadow--level-ratio`. От традиционного `box-shadow` падающая тень отличается тем, что отбрасывается только от
элементов, имеющих контур или заливку. Поэтому во многих случаях удобнее использовать обычную тень (`box-shadow`).

## Классы

| Класс          | Значение                       |
|:---------------|:-------------------------------|
| .drop-shadow-0 | `--sf-shadow--level-ratio`: 0  |
| .drop-shadow-1 | `--sf-shadow--level-ratio`: 1  |
| .drop-shadow-2 | `--sf-shadow--level-ratio`: 2  |
| .drop-shadow-3 | `--sf-shadow--level-ratio`: 4  |
| .drop-shadow-4 | `--sf-shadow--level-ratio`: 8  |
| .drop-shadow-5 | `--sf-shadow--level-ratio`: 16 |
{.table}

## Описание

Модификаторы `drop-shadow-{0...5}` задают уровень падающей тени. Чем выше число, тем более выразительна тень.

- Используйте `drop-shadow-0` для отключения падающей тени.
- `drop-shadow-1`, `drop-shadow-2`, ... `drop-shadow-5` для повышения глубины тени.

Также можно применять состояние `hover` для изменения тени при наведении курсора.

## Синтаксис

- `drop-shadow-{0...5}` — задать уровень падающей тени.
- `hover:drop-shadow-{0...5}` — задать уровень падающей тени при наведении.

## Пример использования

```html
<!-- Элемент без тени -->
<div class="drop-shadow-0 p-4 radius-1/3 bg-surface">
    Без тени
</div>

<!-- Элемент с небольшим уровнем тени -->
<div class="drop-shadow-1 p-4 radius-1/3 bg-surface m-top-2">
    С небольшой тенью
</div>

<!-- Элемент с глубокой тенью при наведении -->
<button class="drop-shadow-2 hover:drop-shadow-4 p-2 radius-1/2 bg-primary color-on-surface-inverse m-top-2">
    Наведи на меня
</button>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=shadows&group=drop-shadow"></iframe>
</div>