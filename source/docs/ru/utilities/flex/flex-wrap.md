---
extends: _core._layouts.documentation
section: content
title: "Перенос элементов (flex-wrap)"
description: "Перенос элементов (flex-wrap)"
---

# Перенос элементов (flex-wrap)

[https://dev.ru.simai.io/ru/ui/utility/flex/flex-wrap.php](https://dev.ru.simai.io/ru/ui/utility/flex/flex-wrap.php)

В SIMAI Framework с помощью модификаторов можно управлять тем, переносятся ли элементы флексбокса на новую линию или
продолжаются в одной.

## Таблица классов

| Класс              | Значение                 |
|:-------------------|:-------------------------|
| .flex-wrap         | flex-wrap: wrap;         |
| .flex-wrap-reverse | flex-wrap: wrap-reverse; |
| .flex-nowrap       | flex-wrap: nowrap;       |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `flex-wrap` — элементы флексбокса могут переноситься на новую строку.
    - `flex-wrap-reverse` — элементы флексбокса могут переноситься на новую строку в обратном порядке.
    - `flex-nowrap` — элементы флексбокса не переносятся, все остаются в одной линии.

## Примеры использования

### Прямой перенос:

```html
<div class="flex flex-wrap">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
</div>
```

### Обратный перенос:

```html
<div class="flex flex-wrap-reverse">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
</div>
```

### Без переноса:

```html
<div class="flex flex-nowrap">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
</div>
```

## Адаптивность

Для изменения поведения переноса флекс-элементов при достижении определённой контрольной точки экрана, просто добавьте
её к модификатору:

```html
<div class="md:flex-wrap">
    <!-- Начиная с md элементы будут переноситься на новую строку -->
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=flex&group=flex-wrap"></iframe>
</div>