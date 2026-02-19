---
extends: _core._layouts.documentation
section: content
title: "Размытие элемента (filter-blur)"
description: "Размытие элемента (filter-blur)"
---

# Размытие элемента (filter-blur)


Данные модификаторы позволяют задавать различную степень размытия элемента.

## Классы

| Класс               | Значение           |
|:--------------------|:---------------------------------------|
| .blur-none          | filter: blur(0);                       |
| .blur-small         | filter: blur(var(`--sf-blur-small`));  |
| .blur, .blur-medium | filter: blur(var(`--sf-blur-medium`)); |
| .blur-large         | filter: blur(var(`--sf-blur-large`));  |
{.table}

## Переменные 

| Переменная         | Значение       |
|:-------------------|:---------------|
| `--sf-blur-small`  | var(`--sf-a2`) |
| `--sf-blur-medium` | var(`--sf-a4`) |
| `--sf-blur-large`  | var(`--sf-a8`) |
{.table}

## Описание

Модификаторы `blur-none`, `blur-small`, `blur` (или `blur-medium`) и `blur-large` устанавливают степень размытия
элемента. При отсутствии модификатора размытия нет. При необходимости можно изменить степень размытия при наведении с
помощью `hover:blur-{small|medium|large}`.

- `blur-none` убирает размытие.
- `blur-small` задает слабое размытие.
- `blur` или `blur-medium` задает среднее размытие.
- `blur-large` задает сильное размытие.

## Синтаксис

- `blur-none` — отсутствие размытия.
- `blur-small` — слабое размытие.
- `blur` или `blur-medium` — среднее размытие.
- `blur-large` — сильное размытие.

Для изменения степени размытия при наведении можно использовать `hover:blur-*`.

## Пример использования

```html 
<!-- Элемент без размытия -->
<div class="blur-none p-4 bg-surface">Без размытия</div>

<!-- Элемент со слабым размытием -->
<div class="blur-small p-4 bg-surface m-top-2">Слабое размытие</div>

<!-- Элемент со средним размытием -->
<div class="blur p-4 bg-surface m-top-2">Среднее размытие</div>

<!-- Элемент с сильным размытием при наведении -->
<div class="hover:blur-large p-4 bg-surface m-top-2 transition">Наведи для сильного размытия</div>
```

## Замена с предыдущей версии

| Старый класс    | Новый класс              |
|:------------------------------------|:-------------------------|
| .blur-1, .blur-2                    | .blur-small              |
| .blur-3                             | .blur-medium (или .blur) |
| .blur-4, .blur-5, .blur-6, .blur-7  | .blur-large              |
{.table}

Используйте данные соответствия, чтобы перейти с предыдущей версии на новую.
