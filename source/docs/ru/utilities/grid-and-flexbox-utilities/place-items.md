---
extends: _core._layouts.documentation
section: content
title: "Размещение элементов по обеим осям (place-items)"
description: "Размещение элементов по обеим осям (place-items)"
---

# Размещение элементов по обеим осям (place-items)

[https://dev.ru.simai.io/ru/ui/utility/grid-flex/place-items.php](https://dev.ru.simai.io/ru/ui/utility/grid-flex/place-items.php)

Модификаторы из этого раздела задают одновременное выравнивание элементов сетки или флексбокса в ячейках относительно
обеих осей одновременно.

## Таблица классов

| Класс          | Значение              |
|:---------------|:----------------------|
| .items-start   | place-items: start;   |
| .items-end     | place-items: end;     |
| .items-center  | place-items: center;  |
| .items-stretch | place-items: stretch; |
{.table}

*(Обратите внимание, что в исходном коде был класс `items-text-center`, но по описанию это `items-center`.)*

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `items-start` – элементы выравниваются в начале ячеек по обеим осям;
    - `items-end` – элементы выравниваются в конце ячеек по обеим осям;
    - `items-center` – элементы выравниваются по центру ячеек по обеим осям;
    - `items-stretch` – элементы растягиваются, занимая всё доступное пространство ячеек по обеим осям.

## Пример использования

```html
<div class="grid grid-col-3 items-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

В данном примере элементы будут выровнены по центру ячеек сразу по обеим осям.

## Адаптивность

Для адаптивного изменения выравнивания элементов, начиная с определённого размера экрана, добавьте контрольную точку:

```html
<div class="md:items-start">
  <!-- Начиная с md элементы будут прижаты к началу ячеек по обеим осям -->
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=grid-and-flexbox-utilities&group=place-items"></iframe>
</div>