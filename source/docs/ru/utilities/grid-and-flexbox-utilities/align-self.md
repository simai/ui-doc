---
extends: _core._layouts.documentation
section: content
title: "Выравнивание отдельного элемента по поперечной оси (align-self)"
description: "Выравнивание отдельного элемента по поперечной оси (align-self)"
---

# Выравнивание отдельного элемента по поперечной оси (align-self)

!rtags[align-self sm md lg xl]


Данные модификаторы определяют, как отдельно взятый элемент в сетке или флексбоксе будет выравнен внутри своей ячейки
относительно поперечной оси.

## Таблица классов

| Класс               | Значение             |
|:--------------------|:---------------------|
| .self-cross-auto    | align-self: auto;    |
| .self-cross-start   | align-self: start;   |
| .self-cross-end     | align-self: end;     |
| .self-cross-center  | align-self: center;  |
| .self-cross-stretch | align-self: stretch; |
| .self-cross-baseline| align-self: baseline;|
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `self-cross-auto` – элемент выравнивается согласно настройкам родительской области (например, `align-items`);
    - `self-cross-start` – элемент прижимается к началу ячейки по поперечной оси;
    - `self-cross-end` – элемент прижимается к концу ячейки по поперечной оси;
    - `self-cross-center` – элемент выравнивается по центру ячейки по поперечной оси;
    - `self-cross-stretch` – элемент растягивается, занимая всё доступное пространство по поперечной оси;
    - `self-cross-baseline` – выравнивание по базовой линии текста элемента.

## Пример использования

```html
<div class="grid grid-col-3">
  <div>Элемент 1</div>
  <div class="self-cross-center">Элемент 2</div>
  <div>Элемент 3</div>
</div>
```

В данном примере второй элемент будет выравнен по центру ячейки относительно поперечной оси.

## Адаптивность

Для изменения выравнивания отдельного элемента, начиная с определённого размера экрана, добавьте контрольную точку.
Например:

```html
<div class="md:self-cross-start">
  <!-- Начиная с md элемент будет прижат к началу ячейки по поперечной оси -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=grid-and-flexbox-utilities&group=align-self"></iframe>
</div>
