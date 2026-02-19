---
extends: _core._layouts.documentation
section: content
title: "Позиционирование объекта (object-position)"
description: "Позиционирование объекта (object-position)"
---

# Позиционирование объекта (object-position)


Модификаторы `object-position` в SIMAI Framework позволяют управлять положением объекта (например, изображения или
видео) внутри контейнера. Это особенно полезно, когда важно, чтобы часть контента отображалась в определенной области
контейнера, независимо от его размера.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка (необязательный параметр):  
  Применяет модификатор начиная с определённого размера области просмотра (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор действует для всех размеров области просмотра.

- Модификатор (обязательный параметр):

    - `object-bottom` — располагает объект в нижней части контейнера.
    - `object-center` — располагает объект по центру контейнера.
    - `object-left` — располагает объект в левой части контейнера.
    - `object-left-bottom` — располагает объект в левом нижнем углу контейнера.
    - `object-left-top` — располагает объект в левом верхнем углу контейнера.
    - `object-right` — располагает объект в правой части контейнера.
    - `object-right-bottom` — располагает объект в правом нижнем углу контейнера.
    - `object-right-top` — располагает объект в правом верхнем углу контейнера.
    - `object-top` — располагает объект в верхней части контейнера.

## Примеры

### `object-bottom`:

```html
<div class="bg-primary-container ...">
  <img class="object-bottom object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-center`:

```html
<div class="bg-primary-container ...">
  <img class="object-center object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-left`:

```html
<div class="bg-primary-container ...">
  <img class="object-left object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-left-bottom`:

```html
<div class="bg-primary-container ...">
  <img class="object-left-bottom object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-left-top`:

```html
<div class="bg-primary-container ...">
  <img class="object-left-top object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-right`:

```html
<div class="bg-primary-container ...">
  <img class="object-right object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-right-bottom`:

```html
<div class="bg-primary-container ...">
  <img class="object-right-bottom object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-right-top`:

```html
<div class="bg-primary-container ...">
  <img class="object-right-top object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-top`:

```html
<div class="bg-primary-container ...">
  <img class="object-top object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

## Адаптивность

Чтобы применять эти модификаторы только с определённого размера экрана, используйте префиксы контрольных точек.
Например, `md:object-center` будет применять позиционирование по центру для размеров экрана от `md` и выше.

```html
<div class="md:object-center"></div>
```

Таким образом, модификаторы `object-position` предоставляют гибкие возможности для точной настройки расположения
медиа-содержимого внутри контейнера.
