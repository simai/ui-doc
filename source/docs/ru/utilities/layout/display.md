---
extends: _core._layouts.documentation
section: content
title: Метод отображения элемента (display)
description: Метод отображения элемента (display)
---

# Метод отображения элемента (display)

!rtags[display sm md lg xl]


Модификатор `display` управляет методом отображения элемента и может применяться как самостоятельно, так и в сочетании с
адаптивными префиксами, определяющими область применения на определённых размерах экранов.

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

- Модификатор (обязательный параметр): определяет способ отображения элемента.

## Классы и значения

| Класс               | Значение                     |
|:--------------------|:-----------------------------|
| .block              | display: block;              |
| .inline-block       | display: inline-block;       |
| .inline             | display: inline;             |
| .flex               | display: flex;               |
| .inline-flex        | display: inline-flex;        |
| .table              | display: table;              |
| .inline-table       | display: inline-table;       |
| .table-caption      | display: table-caption;      |
| .table-cell         | display: table-cell;         |
| .table-column       | display: table-column;       |
| .table-column-group | display: table-column-group; |
| .table-footer-group | display: table-footer-group; |
| .table-header-group | display: table-header-group; |
| .table-row-group    | display: table-row-group;    |
| .table-row          | display: table-row;          |
| .flow-root          | display: flow-root;          |
| .grid               | display: grid;               |
| .inline-grid        | display: inline-grid;        |
| .content            | display: contents;           |
| .list-item          | display: list-item;          |
| .hidden             | display: none;               |
{.table}

## Примеры использования

### **block**  
Отображение элемента как блочного контейнера.

```html
<div class="block ...">Содержимое</div>
```

### **inline-block**  
Отображение элемента как строчного блока.

```html
<div class="inline-block ...">Содержимое</div>
```

### **inline**  
Отображение элемента как строчного элемента.

```html
<div class="inline ...">Содержимое</div>
```

### **flex**  
Отображение элемента как флекс-контейнер.

```html
<div class="flex ...">
    <span class="flex-1 ...">Элемент 1</span>
    <span class="flex-1 ...">Элемент 2</span>
    <span class="flex-1 ...">Элемент 3</span>
</div>
```

### **inline-flex**  
Отображение элемента как строчного флекс-контейнера.

```html
<div class="inline-flex ...">
    <span class="flex-1 ...">Элемент 1</span>
    <span class="flex-1 ...">Элемент 2</span>
    <span class="flex-1 ...">Элемент 3</span>
</div>
```

### **table, inline-table, table-cell и др.**  
Отображение элементов как частей таблицы.

```html
<div class="table w-full ...">
    <div class="table-row-group">
        <div class="table-row">
            <div class="table-cell ...">Ячейка 1</div>
            <div class="table-cell ...">Ячейка 2</div>
        </div>
    </div>
</div>
```

### **grid**  
Отображение элемента как контейнер сетки.

```html
<div class="grid gap-1 grid-col-3 ...">
    <!-- Элементы сетки -->
</div>
```

### **inline-grid**  
Отображение элемента как строчной сетки.

```html
<div class="inline-grid gap-1 grid-col-3 ...">
    <!-- Элементы сетки -->
</div>
```

### **content (contents)**  
Отображение элемента как «фантомного» контейнера, в результате чего дочерние элементы становятся как бы прямыми
дочерними родителя.

```html
<div class="flex gap-1 ...">
    <div class="flex-1 ...">1</div>
    <div class="content">
        <div class="flex-1 ...">2</div>
        <div class="flex-1 ...">3</div>
    </div>
    <div class="flex-1 ...">4</div>
</div>
```

### **hidden**  
Скрытие элемента (display: none), элемент не участвует в потоке документа.

```html
<div class="flex space-x-4 ...">
    <div class="hidden">Элемент скрыт</div>
    <div>Элемент видим</div>
</div>
```

## Адаптивность

Адаптивность доступна с помощью префиксов `sm:`, `md:`, `lg:`, `xl:`, `xxl:`. Например, чтобы скрыть элемент только на
экранах от Medium (768px) и больше, используйте:

```html
<div class="md:hidden">Скрывается на экранах от md и больше</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=layout&group=display"></iframe>
</div>
