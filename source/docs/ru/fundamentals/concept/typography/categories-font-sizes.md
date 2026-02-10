---
extends: _core._layouts.documentation
section: content
title: Категории размеров шрифтов
description: Категории размеров шрифтов
---

# Категории размеров шрифтов

Размеры шрифтов условно делятся на три категории:

* **Малые шрифты (¼-½):** разница между размерами составляет 0.125rem (2px).
* **Стандартные шрифты (1-6):** разница между размерами составляет 0.25rem (4px).
* **Крупные шрифты (7-12):** разница между размерами составляет 0.5rem (8px).

Такое разделение упрощает работу с типографикой, делая размеры шрифтов более предсказуемыми и удобными при
масштабировании.

| Переменная            | Значение (mobile) |      | Значение (desktop) |      |
|:----------------------|-------------------|:-----|--------------------|:-----|
| `--sf-text-size-1/4` | `--sf-b0`         | 10px | `--sf-b0`          | 10px |
| `--sf-text-size-1/3` | `--sf-b2`         | 12px | `--sf-b2`          | 12px |
| `--sf-text-size-1/2` | `--sf-b2`         | 12px | `--sf-b4`          | 14px |
| `--sf-text-size-1`   | `--sf-b4`         | 14px | `--sf-b6`          | 16px |
| `--sf-text-size-2`   | `--sf-b6`         | 16px | `--sf-c0`          | 20px |
| `--sf-text-size-3`   | `--sf-b8`         | 18px | `--sf-c2`          | 24px |
| `--sf-text-size-4`   | `--sf-c0`         | 20px | `--sf-c4`          | 28px |
| `--sf-text-size-5`   | `--sf-c1`         | 22px | `--sf-c6`          | 32px |
| `--sf-text-size-6`   | `--sf-c2`         | 24px | `--sf-c8`          | 36px |
| `--sf-text-size-7`   | `--sf-c4`         | 28px | `--sf-d0`          | 40px |
| `--sf-text-size-8`   | `--sf-c6`         | 32px | `--sf-d2`          | 48px |
| `--sf-text-size-9`   | `--sf-c8`         | 36px | `--sf-d4`          | 56px |
| `--sf-text-size-10`  | `--sf-d0`         | 40px | `--sf-d6`          | 64px |
| `--sf-text-size-11`  | `--sf-d1`         | 44px | `--sf-d8`          | 72px |
| `--sf-text-size-12`  | `--sf-d2`         | 48px | `--sf-e0`          | 80px |
{.table}

Для роли **label** используются переменные размера текста:

| Переменная                | Значение              |
|:--------------------------|:----------------------|
| `--sf-label-small--size`  | `--sf-text-size-1/4` |
| `--sf-label-medium--size` | `--sf-text-size-1/3` |
| `--sf-label-large--size`  | `--sf-text-size-1/2` |
{.table}

Для роли **body-text** используются переменные размера текста:

| Переменная               | Значение              |
|:-------------------------|:----------------------|
| `--sf-text-small--size`  | `--sf-text-size-1/2` |
| `--sf-text-medium--size` | `--sf-text-size-1`   |
| `--sf-text-large--size`  | `--sf-text-size-2`   |
{.table}

Для роли **heading** используются переменные размера текста:

| Переменная             | Значение            |
|:-----------------------|:--------------------|
| `--sf-heading-1--size` | `--sf-text-size-6` |
| `--sf-heading-2--size` | `--sf-text-size-5` |
| `--sf-heading-3--size` | `--sf-text-size-4` |
| `--sf-heading-4--size` | `--sf-text-size-3` |
| `--sf-heading-5--size` | `--sf-text-size-2` |
| `--sf-heading-6--size` | `--sf-text-size-1` |
{.table}

Для роли **display** используются переменные размера текста:

| Переменная             | Значение             |
|:-----------------------|:---------------------|
| `--sf-display-1--size` | `--sf-text-size-12` |
| `--sf-display-2--size` | `--sf-text-size-11` |
| `--sf-display-3--size` | `--sf-text-size-10` |
| `--sf-display-4--size` | `--sf-text-size-9`  |
| `--sf-display-5--size` | `--sf-text-size-8`  |
| `--sf-display-6--size` | `--sf-text-size-7`  |
{.table}
