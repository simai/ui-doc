---
extends: _core._layouts.documentation
section: content
title: Положение фона
description: Положение фона
---

# Положение фона


С помощью модификаторов `background-position` вы можете управлять положением фонового изображения в пределах элемента.

## Таблица классов

| Класс            | Значение                           |
|:-----------------|:-----------------------------------|
| .bg-bottom       | background-position: bottom;       |
| .bg-center       | background-position: center;       |
| .bg-left         | background-position: left;         |
| .bg-left-bottom  | background-position: left bottom;  |
| .bg-left-top     | background-position: left top;     |
| .bg-right        | background-position: right;        |
| .bg-right-bottom | background-position: right bottom; |
| .bg-right-top    | background-position: right top;    |
| .bg-top          | background-position: top;          |
{.table}

## Описание

Адаптивный модификатор `background-position` позволяет контролировать положение фонового изображения в зависимости от
размера области просмотра:

- `bg-bottom` — расположение фона снизу.
- `bg-center` — расположение фона по центру.
- `bg-left` — расположение фона слева.
- `bg-left-bottom` — расположение фона слева снизу.
- `bg-left-top` — расположение фона слева сверху.
- `bg-right` — расположение фона справа.
- `bg-right-bottom` — расположение фона справа снизу.
- `bg-right-top` — расположение фона справа сверху.
- `bg-top` — расположение фона сверху.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор, начиная с определенного размера экрана (sm, md, lg, xl).
- Модификатор *(обязательный параметр)*: один из классов таблицы выше (например, `bg-center`).

## Примеры использования

```html
<!-- Фон снизу -->
<div class="bg-bottom w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

```html
<!-- Фон по центру -->
<div class="bg-center w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

```html
<!-- Фон справа -->
<div class="bg-right w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

## Адаптивность

Для изменения положения фона на разных размерах экрана используйте префикс контрольной точки:

```html
<!-- Для экранов от Medium и больше фон будет располагаться по центру -->
<div class="md:bg-center w-full h-e8 ...">
    <div class="h-f8"></div>
</div>
```
