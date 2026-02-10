---
extends: _core._layouts.documentation
section: content
title: "Начертание цифр (font-variant-numeric)"
description: "Начертание цифр (font-variant-numeric)"
---

# Начертание цифр (font-variant-numeric)

[https://dev.ru.simai.io/ru/ui/utility/typography/font-variant-numeric.php](https://dev.ru.simai.io/ru/ui/utility/typography/font-variant-numeric.php)

Модификаторы начертания цифр позволяют изменить отображение чисел и некоторых их особенностей (например, дробей).

## Таблица классов

| Класс                   | Значение              |
|:------------------------|:------------------------------------------|
| .num-normal             | font-variant-numeric: normal;             |
| .num-ordinal            | font-variant-numeric: ordinal;            |
| .num-slashed-zero       | font-variant-numeric: slashed-zero;       |
| .num-lining             | font-variant-numeric: lining-nums;        |
| .num-oldstyle           | font-variant-numeric: oldstyle-nums;      |
| .num-proportional       | font-variant-numeric: proportional-nums;  |
| .num-tabular            | font-variant-numeric: tabular-nums;       |
| .num-diagonal-fractions | font-variant-numeric: diagonal-fractions; |
| .num-stacked-fractions  | font-variant-numeric: stacked-fractions;  |
{.table}

## Пример использования

Модификаторы начертания цифр можно комбинировать для одновременной активации нескольких стилей чисел:

```html
<p class="num-ordinal num-slashed-zero num-tabular">1234567890</p>
```

### **Порядковый номер (num-ordinal)**  
Активирует специальные глифы для порядковых числительных (1st, 2nd и т.п.) в шрифтах, поддерживающих данную особенность:

```html
<p class="num-ordinal">1st</p>
```

### **Перечёркнутый ноль (num-slashed-zero)**  
Помогает чётко отличать цифру 0 от буквы O:

```html
<p class="num-slashed-zero">0</p>
```

### **Заглавные цифры (num-lining)**  
Равно высокие цифры, стоящие на опорной линии текста:

```html
<p class="num-lining">1234567890</p>
```

### **Строчные цифры (num-oldstyle)**  
Минускульные цифры с нижними выносными элементами:

```html
<p class="num-oldstyle">1234567890</p>
```

### **Пропорциональные цифры (num-proportional)**  
Цифры разной ширины:

```html
<p class="num-proportional">1111</p>
<p class="num-proportional">0000</p>
```

### **Моноширинные цифры (num-tabular)**  
Цифры одинаковой ширины, упрощающие выравнивание в таблицах:

```html
<p class="num-tabular">1111</p>
<p class="num-tabular">0000</p>
```

### **Диагональные дроби (num-diagonal-fractions)**  
Числитель и знаменатель уменьшены и разделены косой чертой:

```html
<p class="num-diagonal-fractions">1/2 3/4 5/6</p>
```

### **Вертикальные дроби (num-stacked-fractions)**  
Числитель и знаменатель уменьшены, расположены друг над другом и разделены горизонтальной линией:

```html
<p class="num-stacked-fractions">1/2 3/4 5/6</p>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=typography&group=font-variant-numeric"></iframe>
</div>