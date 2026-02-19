---
extends: _core._layouts.documentation
section: content
title: "Заполнение объектом (object-fit)"
description: "Заполнение объектом (object-fit)"
---

# Заполнение объектом (object-fit)

!rtags[object-fit sm md lg xl]



Модификатор `object-fit` в SIMAI Framework позволяет управлять тем, как элемент (например, изображение или видео)
масштабируется и вписывается в контейнер. Это особенно полезно для адаптивных макетов, где контент должен корректно
отображаться на различных размерах экрана.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка (необязательный параметр):  
  Применяет модификатор начиная с определённого размера области просмотра (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор действует для всех размеров области просмотра.

- Модификатор (обязательный параметр):

    - `object-contain` — масштабирует содержимое так, чтобы оно целиком помещалось в контейнер, сохраняя пропорции.
    - `object-cover` — масштабирует содержимое так, чтобы контейнер был заполнен целиком, при этом часть содержимого
      может быть обрезана.
    - `object-fill` — масштабирует содержимое, чтобы заполнить контейнер без сохранения пропорций.
    - `object-none` — отображает содержимое в исходном размере без масштабирования.
    - `object-scale-down` — отображает содержимое в исходном размере или уменьшает его до размеров контейнера, если
      содержимое больше контейнера.

## Примеры

### `object-contain`:

```html
<div class="bg-primary-container ...">
  <img class="object-contain h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-cover`:

```html
<div class="bg-primary-container ...">
  <img class="object-cover h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-fill`:

```html
<div class="bg-primary-container ...">
  <img class="object-fill h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-none`:

```html
<div class="bg-primary-container ...">
  <img class="object-none h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

### `object-scale-down`:

```html
<div class="bg-primary-container ...">
  <img class="object-scale-down h-e4 w-full ..." src="image.jpg" alt="Описание">
</div>
```

## Адаптивность

Чтобы применять эти модификаторы только с определённого размера экрана, используйте префиксы контрольных точек.
Например, `md:object-fill` будет использоваться при ширине экрана, соответствующей средней контрольной точке, и выше.

```html
<div class="md:object-fill"></div>
```

Таким образом, модификаторы `object-fit` упрощают работу с различными типами медиа, обеспечивая корректное и эстетичное
масштабирование содержимого под контейнеры любого размера.
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=objects&group=object-fit"></iframe>
</div>
