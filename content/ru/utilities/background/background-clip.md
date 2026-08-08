---
title: "Обрезка фона"
description: "Обрезка фона"
---

# Обрезка фона

!rtags[background-clip sm md lg xl]



С помощью модификаторов `background-clip` вы можете управлять тем, как фон распределяется под границами элемента и его
содержимым.

## Таблица классов

| Класс            | Значение                      |
|:-----------------|:------------------------------|
| .bg-clip-border  | background-clip: border-box;  |
| .bg-clip-padding | background-clip: padding-box; |
| .bg-clip-content | background-clip: content-box; |
| .bg-clip-text    | background-clip: text;        |
{.table}

## Описание

Адаптивный модификатор `background-clip` определяет, до каки
 границ элемент будет "обрезаться" фон.

- `bg-clip-border` — фон распространяется под границы. Фон "у
одит" до внешнего края border-box.
- `bg-clip-padding` — фон ограничивается полем отступа (padding-box). Под границей фон не рисуется.
- `bg-clip-content` — фон ограничивается полем содержимого (content-box).
- `bg-clip-text` — фон отображается только в граница
 текста, делая его "фон" внутри букв.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор, начиная с определенного размера области просмотра (sm, md, lg, xl).
- Модификатор *(обязательный параметр)*: `bg-clip-border`, `bg-clip-padding`, `bg-clip-content`, или `bg-clip-text`.

## Примеры использования

```html
<!-- Фон под границей -->
<div class="bg-clip-border p-3 radius-1/3 bg-primary border-4 border-error border-dashed bold color-on-surface-inverse flex items-cross-center content-main-center">
    <span class="p-top-1/2 p-bottom-1/2">bg-clip-border</span>
</div>
```

```html
<!-- Фон ограничен полем отступа -->
<div class="bg-clip-padding p-3 radius-1/3 bg-primary border-4 border-error border-dashed bold color-on-surface-inverse flex items-cross-center content-main-center">
    <span class="p-top-1/2 p-bottom-1/2">bg-clip-padding</span>
</div>
```

```html
<!-- Фон ограничен полем содержимого -->
<div class="bg-clip-content p-3 radius-1/3 bg-primary border-4 border-error border-dashed bold color-on-surface-inverse flex items-cross-center content-main-center">
    <span class="p-top-1/2 p-bottom-1/2">bg-clip-content</span>
</div>
```

```html
<!-- Фон внутри текста -->
<div class="text-center text-9 bold">
    <span class="bg-clip-text color-transparent gr-line-2 bg-gradient-to-r gr1-warning gr2-tertiary">
        Hello world
    </span>
</div>
```

## Адаптивность

Для изменения поведения обрезки фона на разны
 размера
 экрана используйте префикс контрольной точки:

```html
<!-- Для экранов от Medium и больше фон будет, например, ограничен content-box -->
<div class="md:bg-clip-content p-3 ...">
    <span>Адаптивный пример</span>
</div>
```
## Playground

&lt;div class="sf-playground overflow-hidden"&gt;
&lt;iframe title="Пример в Playground" loading="lazy" src="https://play.simai.io/embed.html?component=background&group=background-clip"&gt;&lt;/iframe&gt;
&lt;/div&gt;
