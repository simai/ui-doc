---
extends: _core._layouts.documentation
section: content
title: "Ограничитель прокрутки (scroll-snap-stop)"
description: "Ограничитель прокрутки (scroll-snap-stop)"
---

# Ограничитель прокрутки (scroll-snap-stop)

!rtags[scroll-snap-stop]



Данные модификаторы из пакета `scroll-snap-stop` позволяют управлять тем, как контейнер прокрутки будет останавливаться
на элементах, имеющих привязку прокрутки. Они задают, возможно ли "проскочить" мимо возможных позиций привязки или
контейнер будет всегда останавливаться на каждом элементе.

## Краткое описание

С помощью данных модификаторов можно указать, будет ли пользователь при прокрутке останавливаться на каждом элементе (
snap-always) или сможет "проскользнуть" мимо определенных позиций (snap-normal).

## Классы и их значения

| Класс        | Значение                  |
|:-------------|:--------------------------|
| .snap-normal | scroll-snap-stop: normal; |
| .snap-always | scroll-snap-stop: always; |
{.table}

## Описание

- **snap-normal**: Контейнер может пропускать потенциальные позиции привязки, позволяя пользователю прокручивать дальше
  без остановки на каждом элементе.
- **snap-always**: Контейнер обязан останавливаться на каждом элементе с привязкой, прежде чем пользователь может
  прокрутить к следующему.

## Синтаксис

Использование модификаторов: `{snap-модификатор}`

Например:

```html
<div class="snap-x overflow-auto w-full ...">
  <div class="snap-always snap-center inline-block w-... bg-surface-1 p-2 ...">
    Элемент с обязательной остановкой
  </div>
  <div class="snap-normal snap-center inline-block w-... bg-surface-1 p-2 ...">
    Элемент, который можно проскочить
  </div>
</div>
```

## Пример использования

```html
<div class="snap-x overflow-auto w-full ...">
  <div class="snap-always snap-center inline-block bg-surface-1 p-2 ...">
    <img src="./image.jpg" alt="Изображение 1">
  </div>
  <div class="snap-normal snap-center inline-block bg-surface-1 p-2 ...">
    <img src="./image.jpg" alt="Изображение 2">
  </div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=overscroll&group=scroll-snap-stop"></iframe>
</div>
