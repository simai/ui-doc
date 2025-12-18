---
extends: _core._layouts.documentation
section: content
title: "Одновременное выравнивание по двум осям (flex-align)"
description: "Одновременное выравнивание по двум осям (flex-align)"
---

# Одновременное выравнивание по двум осям (flex-align)

[https://dev.ru.simai.io/ru/ui/utility/grid-flex/flex-align.php](https://dev.ru.simai.io/ru/ui/utility/grid-flex/flex-align.php)

Данные модификаторы позволяют задать одновременное выравнивание содержимого флексбокса сразу по основной и поперечной
оси, фактически комбинируя свойства `justify-content` и `align-items`.

## Таблица классов

| Класс          | Значение                          |
|:---------------|:------------------------------------------------------|
| .start-start   | justify-content: flex-start; align-items: flex-start; |
| .start-center  | justify-content: flex-start; align-items: center;     |
| .start-end     | justify-content: flex-start; align-items: flex-end;   |
| .center-start  | justify-content: center; align-items: flex-start;     |
| .center-center | justify-content: center; align-items: center;         |
| .center-end    | justify-content: center; align-items: flex-end;       |
| .end-start     | justify-content: flex-end; align-items: flex-start;   |
| .end-center    | justify-content: flex-end; align-items: center;       |
| .end-end       | justify-content: flex-end; align-items: flex-end;     |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор, начиная с определённой ширины экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*: Направления `start`, `center`, `end` применяются по обеим осям.  
  Формат: `{основная ось}-{поперечная ось}`, где каждая ось может быть `start`, `center` или `end`.

## Пример использования

```html
<div class="flex start-start">
  <div>Элемент прижат к началу по обеим осям</div>
</div>
```

```html
<div class="flex center-center">
  <div>Элемент выровнен по центру по обеим осям</div>
</div>
```

## Адаптивность

Для адаптивного изменения выравнивания, начиная с определённого размера экрана, добавьте контрольную точку:

```html
<div class="md:center-center">
  <!-- Начиная с md элементы будут по центру по обеим осям -->
</div>
```
