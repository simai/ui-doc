---
extends: _core._layouts.documentation
section: content
title: Вложение фона
description: Вложение фона
---

# Вложение фона

[https://dev.ru.simai.io/ru/ui/utility/background-image/background-origin.php](https://dev.ru.simai.io/ru/ui/utility/background-image/background-origin.php)

С помощью модификаторов `background-origin` вы можете управлять тем, относительно какой области будет позиционироваться
фоновое изображение.

## Таблица классов

| Класс              | Значение                        |
|:-------------------|:--------------------------------|
| .bg-origin-border  | background-origin: border-box;  |
| .bg-origin-padding | background-origin: padding-box; |
| .bg-origin-content | background-origin: content-box; |
{.table}

## Описание

Адаптивный модификатор `background-origin` определяет исходную область для позиционирования фона:

- `bg-origin-border` — фон позиционируется относительно границ элемента (border-box).
- `bg-origin-padding` — фон позиционируется относительно области отступов (padding-box).
- `bg-origin-content` — фон позиционируется относительно области содержимого (content-box).

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор, начиная с определенного размера области просмотра (sm, md, lg, xl).
- Модификатор *(обязательный параметр)*: `bg-origin-border`, `bg-origin-padding`, `bg-origin-content`.

## Примеры использования

```html
<!-- Фон относительно границ -->
<div class="bg-origin-border w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

```html
<!-- Фон относительно области отступов -->
<div class="bg-origin-padding w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

```html
<!-- Фон относительно области содержимого -->
<div class="bg-origin-content w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

## Адаптивность

Для изменения области позиционирования фона на разных размерах экрана используйте префикс контрольной точки:

```html
<!-- Для экранов от Medium и больше фон будет, например, относиться к content-box -->
<div class="md:bg-origin-content w-full h-e8 ...">
    <div class="h-f8"></div>
</div>
```
