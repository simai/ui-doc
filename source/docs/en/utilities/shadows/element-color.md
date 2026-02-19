---
extends: _core._layouts.documentation
section: content
title: Цвет тени
description: Цвет тени
---

# Цвет тени


Данные модификаторы устанавливают цвет тени элемента через специальную переменную `--sf-shadow--color`. Это позволяет
гибко настраивать визуальное восприятие тени. Используя состояние `hover`, можно изменять цвет тени при наведении
курсора, подчеркивая интерактивность элемента.

## Классы

| Класс              | Значение                 |
|:-------------------|:---------------------------------------------|
| .shadow-primary    | `--sf-shadow--color`: var(`--sf-primary`)    |
| .shadow-secondary  | `--sf-shadow--color`: var(`--sf-secondary`)  |
| .shadow-tertiary   | `--sf-shadow--color`: var(`--sf-tertiary`)   |
| .shadow-error      | `--sf-shadow--color`: var(`--sf-error`)      |
| .shadow-warning    | `--sf-shadow--color`: var(`--sf-warning`)    |
| .shadow-success    | `--sf-shadow--color`: var(`--sf-success`)    |
| .shadow-on-surface | `--sf-shadow--color`: var(`--sf-on-surface`) |
{.table}

## Описание

Данные модификаторы (`shadow-{color}`) устанавливают цвет тени через переменную `--sf-shadow--color`. Это позволяет
гибко управлять визуальным видом тени элемента. При использовании состояния `hover` можно менять цвет тени при наведении
на элемент, что подчеркивает его интерактивность.

## Синтаксис

- `shadow-{color}` — задать цвет тени.
- `hover:shadow-{color}` — задать цвет тени при наведении.

## Пример использования тени

```html
<!-- Элемент с тенью основного цвета -->
<div class="shadow-primary shadow-3 p-4 radius-1/3">
    Элемент с основной тенью
</div>

<!-- При наведении тень меняет цвет на “error” -->
<button class="shadow-secondary hover:shadow-error shadow-2 p-2 radius-1/2">
    Наведи на меня
</button>
```
