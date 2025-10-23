---
extends: _core._layouts.documentation
section: content
title: Закругление границ
description: Закругление границ
---

# Закругление границ

[https://dev.ru.simai.io/ru/ui/utility/border/border-radius.php](https://dev.ru.simai.io/ru/ui/utility/border/border-radius.php)

С помощью модификаторов закругления границ в SIMAI Framework вы можете задать радиус скругления для всех сторон элемента
или только для отдельных его углов и сторон.

![][image30]

## Таблица классов

| Класс        | Значение            |
|:-------------|:----------------------------------------|
| .radius-0    | border-radius: var(`--sf-0`);           |
| .radius-1/3  | border-radius: var(`--sf-radius-1/3`);  |
| .radius-1/2  | border-radius: var(`--sf-radius-1/2`);  |
| .radius-1    | border-radius: var(`--sf-radius-1`);    |
| .radius-2    | border-radius: var(`--sf-radius-2`);    |
| .radius-3    | border-radius: var(`--sf-radius-3`);    |
| .radius-full | border-radius: var(`--sf-radius-full`); |
{.table}

Для каждого размера доступны варианты `radius-top-`, `radius-bottom-`, `radius-left-`,  
`radius-right-`, а также `radius-top-left-`, `radius-top-right-`, `radius-bottom-left-`,  
`radius-bottom-right-` для закругления отдельных сторон или углов.

## Описание

Модификаторы позволяют задавать радиус закругления границ с использованием  
стандартизированных размеров:

- `0` — отсутствие закругления.
- `1/3` — небольшой радиус.
- `1/2` — средний радиус.
- `1` — стандартный радиус.
- `2` — увеличенный радиус.
- `3` — ещё больший радиус.
- `full` — максимально возможный радиус (превращение квадрата в круг).

Вы можете комбинировать модификаторы для отдельных сторон и углов, например:  
`radius-top-1/2`, `radius-bottom-right-1`, и т.д.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или `{модификатор}`

- Контрольная точка *(необязательный параметр)*: Применяет модификатор начиная с определённого размера экрана (sm, md,
  lg, xl).

- Модификатор *(обязательный параметр)*: Например: `radius-1/3`, `radius-top-1/2`, `radius-bottom-right-1`,
  `radius-full`.

## Примеры использования

```html
<!-- Закругление со всех сторон -->
<div class="radius-1/3">Небольшое закругление</div>
<div class="radius-full">Полное закругление</div>

<!-- Закругление одной стороны -->
<div class="radius-left-1/2">Закругление слева</div>
<div class="radius-bottom-1">Закругление снизу</div>

<!-- Закругление одного угла -->
<div class="radius-top-left-2">Закругление верхнего левого угла</div>
```

## Адаптивность

Для установки радиуса закругления, начиная с определенного размера экрана, добавьте  
префикс контрольной точки (sm, md, lg, xl):

```html
<div class="md:radius-1/2 ..."></div>
```

## Замена классов

В новой версии используются стандартизированные размеры. Для перехода с предыдущей версии  
используйте следующую таблицу:

| Старый класс           | Новый класс              |
|:-----------------------|:-------------------------|
| .radius-1              | .radius-1/3              |
| .radius-top-1          | .radius-top-1/3          |
| .radius-bottom-1       | .radius-bottom-1/3       |
| .radius-left-1         | .radius-left-1/3         |
| .radius-right-1        | .radius-right-1/3        |
| .radius-top-left-1     | .radius-top-left-1/3     |
| .radius-top-right-1    | .radius-top-right-1/3    |
| .radius-bottom-left-1  | .radius-bottom-left-1/3  |
| .radius-bottom-right-1 | .radius-bottom-right-1/3 |
| .radius-2              | .radius-1/3              |
| .radius-3              | .radius-1/2              |
| .radius-4              | .radius-1/2              |
| .radius-5              | .radius-1                |
| .radius-6              | .radius-1                |
| .radius-7              | .radius-1                |
| .radius-8              | .radius-2                |
| .radius-9              | .radius-3                |
{.table}

*(Для полного списка замен см. описание выше.)*

[image30]: /assets/build/img/b64/bbbccbb8ce1f5530.png
