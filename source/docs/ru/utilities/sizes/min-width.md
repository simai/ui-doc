---
extends: _core._layouts.documentation
section: content
title: "Минимальная ширина (min-width)"
description: "Минимальная ширина (min-width)"
---

# Минимальная ширина (min-width)

[https://dev.ru.simai.io/ru/ui/utility/size/min-width.php](https://dev.ru.simai.io/ru/ui/utility/size/min-width.php)

В SIMAI Framework с помощью модификаторов можно задать минимальную ширину элемента. Это особенно полезно при создании
адаптивных макетов, когда необходимо гарантировать, что элемент не станет уже заданного порога ширины даже при
ограничениях окружающего контейнера или содержимого.

## Таблица классов

| Класс       | Значение                |
|:------------|:------------------------|
| .min-w-min  | min-width: min-content; |
| .min-w-max  | min-width: max-content; |
| .min-w-fit  | min-width: fit-content; |
| .min-w-full | min-width: 100%;        |
| .min-w-0    | min-width: 0;           |
{.table}
## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка (необязательный параметр):  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор действует для всех размеров экрана.

- Модификатор (обязательный параметр):

    - `min-w-full` — минимальная ширина 100% родительского элемента
    - `min-w-min` — минимальная ширина равна длине самого длинного слова (min-content)
    - `min-w-max` — минимальная ширина равна длине всего контента без учёта ограничений родителя (max-content)
    - `min-w-fit` — минимальная ширина определена как fit-content
    - `min-w-0` — минимальная ширина 0

## Примеры

### **На всю ширину (min-w-full):**

```html
<div class="min-w-full"></div>
```

### **Минимальная ширина контента (min-w-min):**

```html
<div class="w-0">
    <div class="min-w-min">Lorem ipsum dolor sit amet, consectetur</div>
</div>
```

### **Максимальная ширина контента (min-w-max):**

```html
<div class="w-0">
	<div class="min-w-max">Lorem ipsum dolor sit amet, consectetur</div>
</div>
```

### **По содержимому (min-w-fit):**

```html
<div class="w-0">
	<div class="min-w-fit">Lorem ipsum dolor sit amet, consectetur</div>
</div>
```

## Адаптивность

Для установки минимальной ширины, начиная с определенного размера области просмотра, добавьте префикс контрольной точки
к модификатору:

```html
<div class="md:min-w-full"></div>
```

В этом примере минимальная ширина будет 100% (`min-w-full`) только при размерах экрана `md` и больше.
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=sizes&group=min-width"></iframe>
</div>