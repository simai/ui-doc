---
title: "Размытие элемента"
description: "Размытие элемента (filter-blur)"
tags: [filter-blur, hover]
---

# Размытие элемента

:badge[filter-blur]{type=main scheme=on-surface size=1}

Данные модификаторы позволяют задавать различную степень размытия элемента.

## Наглядный пример

:::example {id="utilities/filters/filter-blur" label="Размытие элемента"}
:::

## Классы

| Класс               | Значение           |
|:--------------------|:---------------------------------------|
| `blur-none` | `filter: blur(0);` |
| `blur-small` | `filter: blur(var(--sf-blur-small));` |
| `blur, blur-medium` | `filter: blur(var(--sf-blur-medium));` |
| `blur-large` | `filter: blur(var(--sf-blur-large));` |

## Переменные

| Переменная         | Значение       |
|:-------------------|:---------------|
| `--sf-blur-small`  | var(`--sf-a2`) |
| `--sf-blur-medium` | var(`--sf-a4`) |
| `--sf-blur-large`  | var(`--sf-a8`) |

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
