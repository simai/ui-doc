---
extends: _core._layouts.documentation
section: content
title: "Выравнивание привязки прокрутки (scroll-snap-align)"
description: "Выравнивание привязки прокрутки (scroll-snap-align)"
---

# Выравнивание привязки прокрутки (scroll-snap-align)

[https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-snap-align.php](https://dev.ru.simai.io/ru/ui/utility/scroll/scroll-snap-align.php)

Модификаторы из пакета `scroll-snap-align` позволяют управлять тем, как элементы выравниваются при остановке прокрутки
внутри контейнера с привязкой прокрутки.

## Краткое описание

При использовании привязки прокрутки (`scroll-snap`), элементы могут "прилипать" к определенным позициям при завершении
прокрутки. С помощью данных модификаторов вы можете указать, как элемент будет выравниваться (по началу, концу или
центру).

## Классы и их значения

| Класс            | Значение                   |
|:-----------------|:---------------------------|
| .snap-start      | scroll-snap-align: start;  |
| .snap-end        | scroll-snap-align: end;    |
| .snap-center     | scroll-snap-align: center; |
| .snap-align-none | scroll-snap-align: none;   |
{.table}

## Описание

Модификаторы управляют тем, где будет находиться элемент после того, как пользователь закончит прокручивать область.
Например, `snap-center` расположит элемент по центру области просмотра, `snap-start` выровняет элемент по началу (левому
или верхнему краю), а `snap-end` — по концу (правому или нижнему краю).

## Синтаксис

Использование модификаторов: `{snap-модификатор}`

Например:

```html
<div class="snap-x overflow-auto w-full ...">
  <div class="snap-center inline-block w-... bg-surface-1 p-2 ...">Элемент 1</div>
  <div class="snap-center inline-block w-... bg-surface-1 p-2 ...">Элемент 2</div>
  <div class="snap-center inline-block w-... bg-surface-1 p-2 ...">Элемент 3</div>
</div>
```

## Пример использования

```html
<div class="snap-x overflow-auto w-full ...">
  <div class="snap-start inline-block bg-surface-1 p-2 ..."><img src="./image.jpg" alt="Изображение 1"></div>
  <div class="snap-center inline-block bg-surface-1 p-2 ..."><img src="./image.jpg" alt="Изображение 2"></div>
  <div class="snap-end inline-block bg-surface-1 p-2 ..."><img src="./image.jpg" alt="Изображение 3"></div>
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll-snap-align"></iframe>
</div>