---
extends: _core._layouts.documentation
section: content
title: Высота (height)
description: Высота (height)
---

# Высота (height)

[https://dev.ru.simai.io/ru/ui/utility/size/height.php](https://dev.ru.simai.io/ru/ui/utility/size/height.php)

В SIMAI Framework с помощью модификаторов можно задать высоту элемента, адаптируя её под различные размеры экрана или
особенности дизайна.  
Вы можете использовать фиксированные значения из системы размеров, относительные пропорции, высоту экрана или
автоматическую высоту, зависящую от контента.

## Таблица классов

| Класс           | Значение                                      |
|:----------------|:------------------------------------------------------------------|
| .h-auto         | height: auto;                                                     |
| .h-1/2          | height: 50%;                                                      |
| .h-1/3          | height: 33.333333%;                                               |
| .h-2/3          | height: 66.666667%;                                               |
| .h-1/4          | height: 25%;                                                      |
| .h-2/4         | height: 50%;                                                      |
| .h-3/4          | height: 75%;                                                      |
| .h-1/5          | height: 20%;                                                      |
| .h-2/5          | height: 40%;                                                      |
| .h-3/5          | height: 60%;                                                      |
| .h-4/5          | height: 80%;                                                      |
| .h-1/6          | height: 16.666667%;                                               |
| .h-2/6          | height: 33.333333%;                                               |
| .h-3/6          | height: 50%;                                                      |
| .h-4/6          | height: 66.666667%;                                               |
| .h-5/6          | height: 83.333333%;                                               |
| .h-full         | height: 100%;                                                     |
| .h-screen       | height: 100vh;                                                    |
| .h-screen-1/2   | height: 50vh;                                                     |
| .h-screen-1/3   | height: 33.333333vh;                                              |
| .h-screen-2/3   | height: 66.666667vh;                                              |
| .h-screen-1/4   | height: 25vh;                                                     |
| .h-screen-2/4   | height: 50vh;                                                     |
| .h-screen-3/4   | height: 75vh;                                                     |
| .h-min          | height: min-content;                                              |
| .h-max          | height: max-content;                                              |
| .h-fit          | height: fit-content;                                              |
| .h-px           | height: 1px;                                                      |
| .h-0            | height: 0;                                                        |
| .h-a0 ... .h-i9 | height: var(--sf-\*); фиксированные размеры по системе фреймворка |
{.table}

(Пример фиксированных размеров: h-c4, h-d4, h-e4 и т.д.)

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка (необязательный параметр):  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор действует для всех размеров экрана.

- Модификатор (обязательный параметр):

    - `h-0` \- высота равна нулю
    - `h-px` \- высота равна 1px
    - `h-a0 ... h-i9` \- фиксированные размеры из системы фреймворка
    - `h-1/2 ... h-5/6` \- доли высоты родительского элемента
    - `h-auto` \- автоматическая высота (по контенту)
    - `h-full` \- 100% высоты родительского элемента
    - `h-screen` \- 100% высоты экрана
    - `h-screen-1/2 ... h-screen-3/4` \- доли высоты экрана
    - `h-min` \- внутренняя минимальная высота контента
    - `h-max` \- внутренняя максимальная высота контента
    - `h-fit` \- fit-content по высоте

## Примеры

### **Фиксированная высота:**

```html
<div class="h-c1"></div>
<div class="h-c4"></div>
<div class="h-c7"></div>
<div class="h-d1"></div>
<div class="h-d4"></div>
<div class="h-d7"></div>
<div class="h-e1"></div>
```

### **Относительная высота (например, 50%):**

```html
<div class="flex">
	<div class="h-1/2"></div>
	<div class="h-1/2"></div>
</div>
```

### **Автоматическая высота (по контенту):**

```html
<div class="w-d6">
	<div class="h-auto">Lorem ipsum dolor sit amet, consectetur</div>
</div>
```

### **Высота экрана (например, h-screen-1/2):**

```html
<div class="h-screen-1/3"></div>
<div class="h-screen-1/2"></div>
<div class="h-screen-2/3"></div>
<div class="h-screen-3/4"></div>
<div class="h-screen"></div>
```

## Адаптивность

Для установки высоты начиная с определенного размера области просмотра, используйте контрольную точку:

```html
<div class="md:h-1/2"></div>
```

В этом примере высота будет 50% (`h-1/2`) при `md` и больше.
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=sizes&group=height"></iframe>
</div>