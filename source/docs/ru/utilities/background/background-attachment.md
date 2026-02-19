---
extends: _core._layouts.documentation
section: content
title: Вложение фона
description: Вложение фона
---

# Вложение фона

!rtags[background-attachment sm md lg xl]



С помощью модификаторов вложения фона (`background-attachment`) вы можете управлять поведением фонового изображения при
прокрутке страницы или контейнера.

## Таблица классов

| Класс      | Значение                       |
|:-----------|:-------------------------------|
| .bg-fixed  | background-attachment: fixed;  |
| .bg-local  | background-attachment: local;  |
| .bg-scroll | background-attachment: scroll; |
{.table}

## Описание

Адаптивный модификатор `background-attachment` позволяет определять, как фоновое изображение будет реагировать на
прокрутку страницы или элемента-контейнера.

- `bg-fixed` — фоновое изображение зафиксировано относительно области просмотра и не прокручивается вместе со страницей.
- `bg-local` — фоновое изображение прокручивается вместе с контейнером (локально).
- `bg-scroll` — фоновое изображение прокручивается вместе со страницей (по умолчанию).

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*: Применяет модификатор, начиная с определенного размера области
  просмотра (sm, md, lg, xl).
- Модификатор *(обязательный параметр)*: `bg-fixed`, `bg-local` или `bg-scroll`.

## Пример использования

```html
<!-- Фоновое изображение зафиксировано относительно области просмотра -->
<div class="bg-fixed w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>

```

```html
<!-- Фоновое изображение прокручивается вместе с контейнером -->
<div class="bg-local w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>

```

```html
<!-- Фоновое изображение прокручивается вместе с областью просмотра -->
<div class="bg-scroll w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```

## Адаптивность

Для изменения поведения фонового изображения при прокрутке на разных размерах экрана используйте префикс контрольной
точки:

```html
<!-- Для экранов от Medium и больше фоновое изображение фиксировано -->
<div class="md:bg-fixed w-full h-e8 bg-cover bg-top overflow-y-scroll" style="background-image:url('../../../image/picture.svg');">
    <div class="h-f8"></div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=background&group=background-attachment"></iframe>
</div>
