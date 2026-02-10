---
extends: _core._layouts.documentation
section: content
title: Ширина (width)
description: Ширина (width)
---

# Ширина (width)

[https://dev.ru.simai.io/ru/ui/utility/size/width.php](https://dev.ru.simai.io/ru/ui/utility/size/width.php)

В SIMAI Framework с помощью модификаторов можно задать ширину элемента. С помощью данных классов можно быстро определить
ширину блока, используя как фиксированные размеры, так и пропорциональные величины, зависящие от родительского элемента
или размера окна просмотра. Это позволяет гибко адаптировать макет интерфейса к различным условиям и обеспечивать
удобство при создании адаптивных дизайнов.

## Таблица классов

| Класс           | Значение                                        |
|:----------------|:--------------------------------------------------------------------|
| .w-auto         | width: auto;                                                        |
| .w-full         | width: 100%;                                                        |
| .w-screen       | width: 100vw;                                                       |
| .w-min          | width: min-content;                                                 |
| .w-max          | width: max-content;                                                 |
| .w-fit          | width: fit-content;                                                 |
| .w-1/2          | width: 50%;                                                         |
| .w-1/3          | width: 33.333333%;                                                  |
| .w-2/3          | width: 66.666667%;                                                  |
| .w-1/4          | width: 25%;                                                         |
| .w-2/4          | width: 50%;                                                         |
| .w-3/4          | width: 75%;                                                         |
| .w-1/5          | width: 20%;                                                         |
| .w-2/5          | width: 40%;                                                         |
| .w-3/5          | width: 60%;                                                         |
| .w-4/5          | width: 80%;                                                         |
| .w-1/6          | width: 16.666667%;                                                  |
| .w-2/6          | width: 33.333333%;                                                  |
| .w-3/6          | width: 50%;                                                         |
| .w-4/6          | width: 66.666667%;                                                  |
| .w-5/6          | width: 83.333333%;                                                  |
| .w-1/12         | width: 8.333333%;                                                   |
| .w-2/12         | width: 16.666667%;                                                  |
| .w-3/12         | width: 25%;                                                         |
| .w-4/12         | width: 33.333333%;                                                  |
| .w-5/12         | width: 41.666667%;                                                  |
| .w-6/12         | width: 50%;                                                         |
| .w-7/12         | width: 58.333333%;                                                  |
| .w-8/12         | width: 66.666667%;                                                  |
| .w-9/12         | width: 75%;                                                         |
| .w-10/12        | width: 83.333333%;                                                  |
| .w-11/12        | width: 91.666667%;                                                  |
| .w-px           | width: 1px;                                                         |
| .w-0            | width: 0;                                                           |
| .w-1 … .w-99    | width: 1% … 99% (шаг 1%);                                           |
| .w-a0 ... .w-i9 | width: var(--sf-\[a-i\]\[0-9\]); (фиксированные размеры фреймворка) |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка (необязательный параметр):  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор действует для всех размеров экрана.

- Модификатор (обязательный параметр):

    - `w-0` — ширина 0
    - `w-px` — ширина 1px
    - `w-1 … w-99` — проценты с шагом 1%
    - `w-a1 ... w-i9` — фиксированные размеры из системы размеров фреймворка
    - `w-1/2 ... w-11/12` — доли от ширины родительского элемента
    - `w-auto` — автоматическая ширина
    - `w-full` — ширина 100% родительского элемента
    - `w-screen` — ширина окна просмотра (viewport)
    - `w-min` — ширина по минимально необходимой для контента
    - `w-max` — ширина по длине всего контента без учёта ограничений родителя
    - `w-fit` — вычисляемая ширина fit-content

## Примеры

### **Фиксированная ширина:**

```html
<div class="w-c4"></div>
<div class="w-d4"></div>
<div class="w-e4"></div>
<div class="w-f4"></div>
```

### **Относительная ширина (доли родительского элемента):**

```html
<div class="flex">
  <div class="w-1/2">50%</div>
  <div class="w-1/2">50%</div>
  <div class="w-2/5">40%</div>
  <div class="w-3/5">60%</div>
  <div class="w-1/3">33.3333%</div>
  <div class="w-2/3">66.6667%</div>
  <div class="w-1/5">20%</div>
  <div class="w-4/5">80%</div>
  <div class="w-1/6">16.6667%</div>
  <div class="w-5/6">83.3333%</div>
  <div class="w-full">100%</div>
</div>
```

### **Минимальная ширина контента (w-min):**

```html
<div class="w-min">Lorem</div>
<div class="w-min">Lorem ipsum dolor sit amet, consectetur</div>
```

### **Максимальная ширина контента (w-max):**

### ```html
<div class="w-0">
  <div class="w-max">Lorem ipsum dolor sit amet, consectetur</div>
</div>
```

### **Автоматическая ширина (w-auto):**

```html
<div class="w-d6">
  <div class="w-auto">Lorem ipsum dolor sit amet, consectetur</div>
</div>
```

### **Ширина экрана (w-screen):**

```html
<div class="w-full">
  <div class="w-screen"></div>
</div>
```

## Адаптивность

Для адаптивного изменения ширины используйте префиксы контрольных точек:

```html
<div class="md:w-1/2"></div>
```

В этом примере ширина будет 50% (`w-1/2`) только при размерах экрана `md` и больше.
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=sizes&group=width"></iframe>
</div>