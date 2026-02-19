---
extends: _core._layouts.documentation
section: content
title: "Выравнивание содержимого по поперечной оси (align-content)"
description: "Выравнивание содержимого по поперечной оси (align-content)"
---

# Выравнивание содержимого по поперечной оси (align-content)

!rtags[align-content sm md lg xl]


Данные модификаторы определяют, как содержимое сетки или флексбокса будет выравниваться относительно поперечной оси.

## Таблица классов

| Класс                  | Значение                      |
|:-----------------------|:------------------------------|
| .content-cross-start   | align-content: flex-start;    |
| .content-cross-end     | align-content: flex-end;      |
| .content-cross-center  | align-content: center;        |
| .content-cross-between | align-content: space-between; |
| .content-cross-around  | align-content: space-around;  |
| .content-cross-evenly  | align-content: space-evenly;  |
| .content-cross-stretch | align-content: stretch;       |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `content-cross-start` – содержимое прижимается к началу по поперечной оси;
    - `content-cross-end` – содержимое прижимается к концу по поперечной оси;
    - `content-cross-center` – содержимое выравнивается по центру по поперечной оси;
    - `content-cross-between` – содержимое распределяется с равными интервалами, первый элемент прижат к началу,
      последний – к концу;
    - `content-cross-around` – содержимое распределяется с равными интервалами, причём промежутки между крайними
      элементами и границами контейнера вдвое меньше промежутков между элементами;
    - `content-cross-evenly` – содержимое распределяется равномерно, интервалы одинаковы между всеми элементами и
      границами контейнера;
    - `content-cross-stretch` – содержимое растягивается, чтобы занять всё доступное пространство по поперечной оси.

## Пример использования

```html
<div class="flex content-cross-center">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>
```

Здесь элементы будут выравнены по центру относительно поперечной оси.

## Адаптивность

Для изменения выравнивания содержимого, начиная с определённого размера экрана, добавьте контрольную точку. Например:

```html
<div class="md:content-cross-start">
  <!-- Начиная с md элементы будут прижаты к началу по поперечной оси -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=grid-and-flexbox-utilities&group=align-content"></iframe>
</div>
