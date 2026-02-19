---
extends: _core._layouts.documentation
section: content
title: Повтор фона
description: Повтор фона
---

# Повтор фона

!rtags[background-repeat sm md lg xl]



С помощью модификаторов `background-repeat` вы можете управлять тем, как будет повторяться фоновое изображение внутри
элемента.

## Таблица классов

| Класс            | Значение                      |
|:-----------------|:------------------------------|
| .bg-repeat       | background-repeat: repeat;    |
| .bg-repeat-none  | background-repeat: no-repeat; |
| .bg-repeat-x     | background-repeat: repeat-x;  |
| .bg-repeat-y     | background-repeat: repeat-y;  |
| .bg-repeat-round | background-repeat: round;     |
| .bg-repeat-space | background-repeat: space;     |
{.table}

## Описание

Адаптивный модификатор `background-repeat` позволяет контролировать повтор фонового изображения в зависимости от размера
области просмотра:

- `bg-repeat` — фон будет повторяться по обеим осям.
- `bg-repeat-none` — фоновое изображение не будет повторяться.
- `bg-repeat-x` — фон повторяется только по горизонтали.
- `bg-repeat-y` — фон повторяется только по вертикали.
- `bg-repeat-round` — фон повторяется, чтобы заполнить элемент целыми изображениями, масштабируя их при необходимости.
- `bg-repeat-space` — фон повторяется так, чтобы изображения не деформировались, между ними могут оставаться промежутки.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: Применяет модификатор, начиная с определенной ширины экрана (sm, md,
  lg, xl).
- Модификатор *(обязательный параметр)*: один из классов, приведенных в таблице выше.

## Примеры использования

```html
<!-- Фон повторяется по всем осям -->
<div class="bg-repeat w-full h-e8 bg-cover bg-top" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

```html
<!-- Фон не повторяется -->
<div class="bg-repeat-none w-full h-e8 bg-cover bg-top" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

## Адаптивность

Для установки поведения повторения фонового изображения, начиная с определенных размеров экрана, используйте префиксы
контрольных точек:

```html
<!-- Для экранов от Medium и больше фон начнет повторяться -->
<div class="md:bg-repeat w-full h-e8 ...">
    <div class="h-f8"></div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=background&group=background-repeat"></iframe>
</div>
