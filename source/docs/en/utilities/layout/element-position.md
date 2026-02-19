---
extends: _core._layouts.documentation
section: content
title: "Позиция элемента (element-position)"
description: "Позиция элемента (element-position)"
---

# Позиция элемента (element-position)


Модификаторы позиционирования управляют расположением элемента внутри его родительского контейнера. Применение данных
модификаторов эффективно при использовании свойств позиционирования (
`position: relative; position: absolute; position: fixed; position: sticky;`).

## Синтаксис

Использование: `{условие действия}:{модификатор}`

- Условие действия (необязательный параметр):  
  Может принимать значения:

    - `sm` — для экранов шириной от 540px и больше;
    - `md` — для экранов шириной от 768px и больше;
    - `lg` — для экранов шириной от 960px и больше;
    - `xl` — для экранов шириной от 1140px и больше;
    - `xxl` — для экранов шириной от 1320px и больше.

  Если условие действия не указано, модификатор применяется ко всем размерам.

- Модификатор (обязательный параметр): определяет отступы от соответствующих сторон родительского контейнера.

## Описание

Эффект модификаторов зависит от значения свойства `position`:

- При `position: absolute` или `position: fixed`:  
  Свойства `top`, `right`, `bottom`, `left` определяют расстояние от соответствующей стороны элемента до стороны
  родительского контейнера (или области просмотра для fixed).

- При `position: relative`: Свойства `top`, `right`, `bottom`, `left` смещают элемент от его нормальной позиции.

- При `position: sticky`: Свойства `top`, `right`, `bottom`, `left` работают, как при `position: relative` внутри
  области просмотра, и как при `position: fixed` при выходе из видимой области.

- При `position: static`: Свойства `top`, `right`, `bottom`, `left` не влияют на позиционирование.

## Примеры модификаторов

- `inset-0` — `top:0; right:0; bottom:0; left:0;`
- `inset-x-0` — `left:0; right:0;`
- `inset-y-0` — `top:0; bottom:0;`
- `inset-center` — `left: 50%; top: 50%;`
- `top-1/2` — `top: 50%;`
- `right-1/3` — `right: 33.333333%;`
- `bottom-a1` — `bottom: var(--sf-a1);`
- `-left-b2` — `left: calc(0rem - var(--sf-b2));`

Множество классов для позиций рассчитаны в процентах (от 1/2 до 1/12 с шагом), а также на основе системы размеров (a, b,
c, d, e, f, g, h, i), что позволяет гибко управлять позиционированием.

## Пример

### **Позиционирование по верхнему краю:**

```html
<div class="relative h-d6 ...">
  <div class="absolute top-0 inset-x-0 h-d1 ...">1</div>
</div>
```

### **Позиционирование по правому краю:**

```html
<div class="relative h-d6 ...">
  <div class="absolute right-0 inset-y-0 w-d1 ...">2</div>
</div>
```

### **Позиционирование по нижнему краю:**

```html
<div class="relative h-d6 ...">
  <div class="absolute bottom-0 inset-x-0 h-d1 ...">3</div>
</div>
```

### **Позиционирование по левому краю:**

```html
<div class="relative h-d6 ...">
  <div class="absolute left-0 inset-y-0 w-d1 ...">4</div>
</div>
```

### **Позиционирование по всем сторонам:**

```html
<div class="relative h-d6 ...">
  <div class="absolute inset-0 ...">5</div>
</div>
```

### **Позиционирование по углам:**

```html
<div class="relative h-d6 ...">
  <div class="absolute left-0 top-0 h-d1 w-d1 ...">6</div>
</div>
```

```html
<div class="relative h-d6 ...">
  <div class="absolute top-0 right-0 h-d1 w-d1 ...">7</div>
</div>
```

```html
<div class="relative h-d6 ...">
  <div class="absolute right-0 bottom-0 h-d1 w-d1 ...">8</div>
</div>
```

```html
<div class="relative h-d6 ...">
  <div class="absolute bottom-0 left-0 h-d1 w-d1 ...">9</div>
</div>
```

## Адаптивность

Для применения позиционирования элемента только начиная с определённой контрольной точки, добавьте префикс (`sm:`,
`md:`, `lg:`, `xl:`, `xxl:`) перед модификатором.

Например, чтобы установить элемент по верхнему краю только при ширине экрана medium (768px) и больше:

```html
<div class="md:top-0"></div>
```
