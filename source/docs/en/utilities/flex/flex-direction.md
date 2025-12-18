---
extends: _core._layouts.documentation
section: content
title: "Направление размещения (flex-direction)"
description: "Направление размещения (flex-direction)"
---

# Направление размещения (flex-direction)

[https://dev.ru.simai.io/ru/ui/utility/flex/flex-direction.php](https://dev.ru.simai.io/ru/ui/utility/flex/flex-direction.php)

В SIMAI Framework с помощью модификаторов можно задать направление размещения элементов флексбокса, определяя ориентацию
и порядок элементов внутри контейнера.

## Таблица классов

| Класс             | Значение                        |
|:------------------|:--------------------------------|
| .flex-row         | flex-direction: row;            |
| .flex-col         | flex-direction: column;         |
| .flex-row-reverse | flex-direction: row-reverse;    |
| .flex-col-reverse | flex-direction: column-reverse; |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `flex-row` — элементы расположены в строку слева направо.
    - `flex-col` — элементы расположены в столбец сверху вниз.
    - `flex-row-reverse` — элементы расположены в строку справа налево.
    - `flex-col-reverse` — элементы расположены в столбец снизу вверх.

## Примеры использования

### Прямое размещение в строке:

```html
<div class="flex flex-row ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

### Обратное размещение в строке:

```html
<div class="flex flex-row-reverse ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

### Прямое размещение в столбце:

```html
<div class="flex flex-col ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

### Обратное размещение в столбце:

```html
<div class="flex flex-col-reverse ...">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

## Адаптивность

Для изменения направления флексбокса при достижении определённой контрольной точки экрана просто добавьте её к
модификатору:

```html
<div class="md:flex-row">
    <!-- Начиная с md элементы будут расположены в строку слева направо -->
</div>
```
