---
extends: _core._layouts.documentation
section: content
title: "Максимальная ширина (max-width)"
description: "Максимальная ширина (max-width)"
---

# Максимальная ширина (max-width)

!rtags[max-width sm md lg xl]


В SIMAI Framework модификаторы `max-width` ограничивают максимальную ширину элемента, чтобы избежать растягивания контента и сохранить удобочитаемость.

## Таблица классов

| Класс              | Значение                                          |
|:-------------------|:--------------------------------------------------|
| .max-w-full        | max-width: 100%;                                  |
| .max-w-screen      | max-width: 100vw;                                 |
| .max-w-min         | max-width: min-content;                           |
| .max-w-max         | max-width: max-content;                           |
| .max-w-fit         | max-width: fit-content;                           |
| .max-w-prose       | max-width: 65ch;                                  |
| .max-w-none        | max-width: none;                                  |
| .max-w-0           | max-width: 0;                                     |
| .max-w-sm          | max-width: 520px;                                 |
| .max-w-md          | max-width: 720px;                                 |
| .max-w-lg          | max-width: 960px;                                 |
| .max-w-xl          | max-width: 1140px;                                |
| .max-w-a0 ... i9   | max-width: var(--sf-...); фиксированные размеры из системы фреймворка |
{.table}
## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка (необязательный параметр):  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор действует для всех размеров экрана.

- Модификатор *(обязательный параметр)*: `max-w-full`, `max-w-screen`, `max-w-min`, `max-w-max`, `max-w-fit`, `max-w-prose`, `max-w-none`, `max-w-0`, `max-w-(sm|md|lg|xl)`, `max-w-a0 ... max-w-i9`.

## Примеры

**Фиксированная максимальная ширина:**

```html
<div class="flex">
	<div class="max-w-e4 grow"></div>
	<div class="max-w-e8 grow"></div>
	<div class="max-w-f2 grow"></div>
	<div class="max-w-f6 grow"></div>
</div>
```

### **На всю ширину (max-w-full):**

```html
<div class="max-w-full"></div>
```

### **Минимальная ширина контента (max-w-min):**

```html
<div class="max-w-min">Lorem</div>
<div class="max-w-min">Lorem ipsum dolor sit amet, consectetur</div>
```

### **Максимальная ширина контента (max-w-max):**

```html
<div class="w-d0">
	<div class="max-w-max">Lorem ipsum dolor sit amet, consectetur</div>
</div>
```

### **Ширина экрана (max-w-screen):**

```html
<div class="w-full">
	<div class="max-w-screen"></div>
</div>
```

## Адаптивность

Для установки максимальной ширины, начиная с определенного размера области просмотра, добавьте префикс контрольной точки
к модификатору:

```html
<div class="md:max-w-full"></div>
```

В этом примере максимальная ширина будет 100% (`max-w-full`) только при размерах экрана `md` и больше.
## Playground

<div class="sf-playground overflow-hidden border">
<iframe src="https://play.simai.io/embed.html?component=sizes&group=max-width"></iframe>
</div>
