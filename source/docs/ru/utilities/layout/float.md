---
extends: _core._layouts.documentation
section: content
title: Плавающий элемент (float)
description: Плавающий элемент (float)
---

# Плавающий элемент (float)

!rtags[float sm md lg xl]


Модификаторы `float` управляют обтеканием и используют логические стороны (`inline-start`, `inline-end`), чтобы работать в LTR/RTL.

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

Для применения стилей, начиная с определённой контрольной точки, добавьте префикс (`sm:`, `md:`, `lg:`, `xl:`, `xxl:`) к
модификатору.

Например, чтобы элемент «плавал» справа только на экранах размера Medium и больше:

```html
<div class="md:float-right"></div>
```
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=layout&group=float"></iframe>
</div>
