---
extends: _core._layouts.documentation
section: content
title: Переполнение элемента (overflow)
description: Переполнение элемента (overflow)
---

# Переполнение элемента (overflow)

!rtags[overflow sm md lg xl]


Модификаторы `overflow` управляют тем, как содержимое элемента отображается при его переполнении. Вы можете управлять
вертикальной (`overflow-y`), горизонтальной (`overflow-x`) или обеими осями одновременно.

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

    - `overflow-auto` — поведение определяется браузером автоматически;
    - `overflow-hidden` — контент обрезается, без предоставления прокрутки;
    - `overflow-visible` — содержимое не обрезается, может отображаться за пределами контейнера;
    - `overflow-scroll` — содержимое обрезается и всегда появляется полоса прокрутки;
    - `overflow-x-auto` — по оси X поведение определяется браузером автоматически;
    - `overflow-y-auto` — по оси Y поведение определяется браузером автоматически;
    - `overflow-x-hidden` — по оси X контент обрезается, без предоставления прокрутки;
    - `overflow-y-hidden` — по оси Y контент обрезается, без предоставления прокрутки;
    - `overflow-x-visible` — по оси X содержимое не обрезается;
    - `overflow-y-visible` — по оси Y содержимое не обрезается;
    - `overflow-x-scroll` — по оси X содержимое обрезается и всегда доступна прокрутка;
    - `overflow-y-scroll` — по оси Y содержимое обрезается и всегда доступна прокрутка.

## Примеры

### **overflow-auto**  
Поведение определяется браузером автоматически.

```html
<div class="h-d5 overflow-auto ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

### **overflow-hidden**  
Контент обрезается, без предоставления прокрутки.

```html
<div class="h-d5 overflow-hidden ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

### **overflow-visible**  
Содержимое не обрезается, может отображаться снаружи блока.

```html
<div class="h-d5 overflow-visible ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

### **overflow-scroll**  
Содержимое обрезается и всегда появляется полоса прокрутки.

```html
<div class="h-d5 overflow-scroll ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

### **overflow-x-auto / overflow-y-auto**  
По соответствующей оси поведение определяется браузером автоматически.

```html
<div class="h-d5 overflow-x-auto ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

```html
<div class="h-d5 overflow-y-auto ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

### **overflow-x-hidden / overflow-y-hidden**  
Контент обрезается по соответствующей оси, без предоставления прокрутки.

```html
<div class="h-d5 overflow-x-hidden ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

```html
<div class="h-d5 overflow-y-hidden ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

### **overflow-x-visible / overflow-y-visible**  
Содержимое не обрезается по соответствующей оси.

```html
<div class="h-d5 overflow-x-visible ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

```html
<div class="h-d5 overflow-y-visible ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

### **overflow-x-scroll / overflow-y-scroll**  
Содержимое обрезается и всегда доступна полоса прокрутки по соответствующей оси.

```html
<div class="h-d5 overflow-x-scroll ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

```html
<div class="h-d5 overflow-y-scroll ...">
  Lorem ipsum dolor sit amet, ...
</div>
```

## Адаптивность

Для применения стилей, начиная с определённой контрольной точки, добавьте префикс (`sm:`, `md:`, `lg:`, `xl:`, `xxl:`) к
модификатору.

Например, чтобы обрезать контент без прокрутки только на экранах medium и больше:

```html
<div class="md:overflow-hidden"></div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=layout&group=overflow"></iframe>
</div>
