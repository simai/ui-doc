---
extends: _core._layouts.documentation
section: content
title: Перенос после плавающих элементов (clear)
description: Перенос после плавающих элементов (clear)
---

# Перенос после плавающих элементов (clear)

[https://dev.ru.simai.io/ru/ui/utility/layout/clear.php](https://dev.ru.simai.io/ru/ui/utility/layout/clear.php)

Модификаторы `clear` управляют тем, как контент располагается относительно плавающих элементов. Используются логические стороны (`inline-start`, `inline-end`), чтобы корректно работать в LTR/RTL.

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

    - `clear-inline-start` — очистка плавающих по логической левой стороне.
    - `clear-inline-end` — очистка плавающих по логической правой стороне.
    - `clear-both` — очистка по обеим сторонам.
    - `clear-none` — без очистки.

## Примеры

### **clear-left**  
Используйте `clear-left` для смещения элемента вниз под плавающими слева элементами.

```html
<div class="clear-left ..."></div>
<p>Lorem ipsum dolor ...</p>
```

### **clear-right**  
Используйте `clear-right` для смещения элемента вниз под плавающими справа элементами.

```html
<div class="clear-right ..."></div>
<p>Lorem ipsum dolor ...</p>
```

### **clear-both**  
Используйте `clear-both` для смещения элемента вниз под плавающими слева и справа элементами.

```html
<div class="clear-both ..."></div>
<p>Lorem ipsum dolor ...</p>
```

### **clear-none**  
Используйте `clear-none` чтобы элемент не смещался под плавающими элементами.

```html
<div class="clear-none ..."></div>
<p>Lorem ipsum dolor ...</p>
```

## Адаптивность

Для применения стилей, начиная с определённой контрольной точки, добавьте префикс (`sm:`, `md:`, `lg:`, `xl:`, `xxl:`) к
модификатору.

Например, чтобы смещать элемент вниз под плавающими справа элементами только на экранах размера Medium и больше:

```html
<div class="md:clear-right"></div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=layout&group=clear"></iframe>
</div>