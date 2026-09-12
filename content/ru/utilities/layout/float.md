---
title: "Плавающий элемент"
description: "Размещает элемент у логического края и позволяет тексту обтекать его."
tags: [float, sm, md, lg, xl, xxl]
---

# Плавающий элемент

:badge[float]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

Модификаторы `float` управляют обтеканием и используют логические стороны (`inline-start`, `inline-end`), чтобы работать в LTR/RTL.

## Пример

Одинаковое изображение размещено у начала и конца строки, чтобы направление обтекания было видно без дополнительных пояснений.

:::example {id="utilities/layout/float" label="Обтекание изображения"}
:::

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

- Модификатор (обязательный параметр):

    - `float-inline-end` — «плавание» по логической правой стороне;
    - `float-inline-start` — «плавание» по логической левой стороне;
    - `float-none` — элемент не «плавает».

## Примеры

### **float-inline-end**
Элемент «плавает» по логической правой стороне.

```html
<img class="float-inline-end ... " alt="Picture">
<p>Lorem ipsum dolor sit amet, ...</p>
```

### **float-inline-start**
Элемент «плавает» по логической левой стороне.

```html
<img class="float-inline-start ... " alt="Picture">
<p>Lorem ipsum dolor sit amet, ...</p>
```

### **float-none**
С помощью `float-none` элемент не «плавает».

```html
<img class="float-none ... " alt="Picture">
<p>Lorem ipsum dolor sit amet, ...</p>
```

## Адаптивность

Для применения стилей, начиная с определённой контрольной точки, добавьте префикс (`sm:`, `md:`, `lg:`, `xl:`, `xxl:`, `xxl:`) к
модификатору.

Например, чтобы элемент «плавал» справа только на экранах размера Medium и больше:

```html
<div class="md:float-inline-end"></div>
```
