---
extends: _core._layouts.documentation
section: content
title: "Базисный размер (flex-basis)"
description: "Базисный размер (flex-basis)"
---

# Базисный размер (flex-basis)

!rtags[flex-basis sm md lg xl]


В SIMAI Framework с помощью модификаторов можно задать начальный размер флекс-элемента, определяя, сколько места он
займёт до распределения оставшегося пространства.

## Таблица классов

| Класс                   | Значение                |
|:------------------------|:------------------------|
| .basis-auto  | flex-basis: auto;         |
| .basis-full  | flex-basis: 100%;         |
| .basis-1/1   | flex-basis: 100%;         |
| .basis-1/2   | flex-basis: 50%;          |
| .basis-1/3   | flex-basis: 33.333333%;   |
| .basis-2/3   | flex-basis: 66.666667%;   |
| .basis-1/4   | flex-basis: 25%;          |
| .basis-2/4   | flex-basis: 50%;          |
| .basis-3/4   | flex-basis: 75%;          |
| .basis-1/5   | flex-basis: 20%;          |
| .basis-2/5   | flex-basis: 40%;          |
| .basis-3/5   | flex-basis: 60%;          |
| .basis-4/5   | flex-basis: 80%;          |
| .basis-1/6   | flex-basis: 16.666667%;   |
| .basis-2/6   | flex-basis: 33.333333%;   |
| .basis-3/6   | flex-basis: 50%;          |
| .basis-4/6   | flex-basis: 66.666667%;   |
| .basis-5/6   | flex-basis: 83.333333%;   |
| .basis-1/12  | flex-basis: 8.333333%;    |
| .basis-2/12  | flex-basis: 16.666667%;   |
| .basis-3/12  | flex-basis: 25%;          |
| .basis-4/12  | flex-basis: 33.333333%;   |
| .basis-5/12  | flex-basis: 41.666667%;   |
| .basis-6/12  | flex-basis: 50%;          |
| .basis-7/12  | flex-basis: 58.333333%;   |
| .basis-8/12  | flex-basis: 66.666667%;   |
| .basis-9/12  | flex-basis: 75%;          |
| .basis-10/12 | flex-basis: 83.333333%;   |
| .basis-11/12 | flex-basis: 91.666667%;   |
| .basis-px    | flex-basis: 1px;          |
| .basis-0     | flex-basis: 0;            |
| .basis-1 ... .basis-100 | flex-basis: {1..100}%; |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `basis-{auto|full|1/1|1/2|1/3|2/3|1/4|2/4|3/4|1/5|2/5|3/5|4/5|1/6...5/6|1/12...11/12|1..100|px|0}` — задаёт базовый размер
      флекс‑элемента в процентах (включая целые 1–100), долях, пикселях или автоматически. Относительные значения удобны для адаптивных интерфейсов.

## Пример использования

```html
<div class="flex">
    <div class="basis-1/2"></div>
    <div class="basis-1/2"></div>
    <div class="basis-2/5"></div>
    <div class="basis-3/5"></div>
</div>
```

В данном примере первые два элемента займут по 50% доступной ширины, а следующие — 40% и 60% соответственно.

## Адаптивность

Для установки начального размера, начиная с определённого размера экрана, просто добавьте контрольную точку:

```html
<div class="md:basis-1/2">
    <!-- Начиная с md элемент будет иметь начальный размер 50% -->
</div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=flex&group=flex-basis"></iframe>
</div>
