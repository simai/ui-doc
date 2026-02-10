---
extends: _core._layouts.documentation
section: content
title: "Позиция элемента (element-position)"
description: "Позиция элемента (element-position)"
---

# Позиция элемента (element-position)

[https://dev.ru.simai.io/ru/ui/utility/layout/element-position.php](https://dev.ru.simai.io/ru/ui/utility/layout/element-position.php)

Модификаторы позиционирования управляют расположением элемента внутри родительского контейнера. Работают в сочетании с
`position: relative/absolute/fixed/sticky`.

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

- Модификатор *(обязательный параметр)*: определяет отступы от соответствующих логических сторон (inline-start/end, top, bottom).

## Описание

Эффект зависит от `position`:
- `absolute` / `fixed`: отступы задают координаты элемента относительно контейнера (или вьюпорта для fixed).
- `relative`: смещение от нормального положения.
- `sticky`: ведёт себя как relative, пока не «прилипнет», далее как fixed.

## Примеры модификаторов

- `inset-0` — `top:0; inline-end:0; bottom:0; inline-start:0;`
- `inset-x-0` — `inline-start:0; inline-end:0;`
- `inset-y-0` — `top:0; bottom:0;`
- `inset-center` — `inline-start:50%; top:50%;`
- `top-1/2` — `top: 50%;`
- `inline-end-1/3` — `inset-inline-end: 33.333333%;`
- `bottom-a1` — `bottom: var(--sf-a1);`
- `-inline-start-b2` — `inset-inline-start: calc(0rem - var(--sf-b2));`

Множество классов для позиций рассчитаны в процентах (от 1/2 до 1/12 с шагом), а также на основе системы размеров (a, b,
c, d, e, f, g, h, i), что позволяет гибко управлять позиционированием.

## Пример

### **Позиционирование по верхнему краю:**

```html
<div class="relative h-d6 ...">
  <div class="absolute top-0 inset-x-0 h-d1 ...">1</div>
</div>
```

### **Позиционирование по логической «правой» стороне:**

```html
<div class="relative h-d6 ...">
  <div class="absolute inline-end-0 inset-y-0 w-d1 ...">2</div>
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
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=layout&group=element-position"></iframe>
</div>