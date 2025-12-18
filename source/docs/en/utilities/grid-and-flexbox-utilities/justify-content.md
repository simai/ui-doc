---
extends: _core._layouts.documentation
section: content
title: "Выравнивание содержимого по основной оси (justify-content)"
description: "Выравнивание содержимого по основной оси (justify-content)"
---

# Выравнивание содержимого по основной оси (justify-content)

[https://dev.ru.simai.io/ru/ui/utility/grid-flex/justify-content.php](https://dev.ru.simai.io/ru/ui/utility/grid-flex/justify-content.php)

Этот модификатор определяет, как именно элементы внутри контейнера (флексбокса или сетки) выравниваются вдоль основной
оси. Основная ось зависит от направления (`flex-direction`). Если `row` (строка) — основная ось горизонтальная. Если
`column` (столбец) — вертикальная.

## Таблица классов

| Класс                 | Значение                        |
|:----------------------|:--------------------------------|
| .content-main-start   | justify-content: flex-start;    |
| .content-main-end     | justify-content: flex-end;      |
| .content-main-center  | justify-content: center;        |
| .content-main-between | justify-content: space-between; |
| .content-main-around  | justify-content: space-around;  |
| .content-main-evenly  | justify-content: space-evenly;  |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `content-main-start` – элементы прижаты к началу основной оси;
    - `content-main-end` – элементы прижаты к концу основной оси;
    - `content-main-center` – элементы выравнены по центру основной оси;
    - `content-main-between` – элементы распределены равномерно с первым и последним элементом прижатыми к краям;
    - `content-main-around` – элементы равномерно распределены так, что отступ от краёв вдвое меньше отступов между
      элементами;
    - `content-main-evenly` – элементы распределены с равными отступами между собой и от краёв.

## Пример использования

```html
<div class="flex content-main-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

В этом примере все элементы будут выровнены по центру основной оси.

## Адаптивность

Чтобы применить выравнивание, начиная с определённого размера экрана, добавьте контрольную точку. Например:

```html
<div class="md:content-main-start">
    <!-- Начиная с md выравнивание элементов будет flex-start -->
</div>
```
