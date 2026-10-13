---
title: "Значения вертикальных размеров"
description: "Пары значений mobile и desktop для типографики, интервалов и элементов управления: что выдаёт адаптивная система в числах."
---

# Значения вертикальных размеров

Числа, которые выдаёт система, описанная в
[«Адаптивных размерах»](/ru/guide/size-and-type/adaptive-sizing/).

Числа совпадают с токенами выпуска: кегль — `--sf-text--size-*`, высота
строки — `--sf-text--height-*`, интервалы — `--sf-space-*`. Полный список
значений — на странице [«Все переменные»](/ru/guide/colour/all-tokens/).

## Шкала примитивов A–I

| Диапазон | Начало | Шаг | Количество | Последнее значение |
| --- | --- | --- | --- | --- |
| A | 0 px | 1 px | 10 | 9 px |
| B | 10 px | 1 px | 10 | 19 px |
| C | 20 px | 2 px | 10 | 38 px |
| D | 40 px | 4 px | 10 | 76 px |
| E | 80 px | 8 px | 10 | 152 px |
| F | 160 px | 16 px | 10 | 304 px |
| G | 320 px | 32 px | 10 | 608 px |
| H | 640 px | 64 px | 10 | 1216 px |
| I | 1280 px | 128 px | 10 | 2432 px |

## Типографика

Порядок в каждой паре: `mobile / desktop`.

| Роль | Размер | Высота строки |
| --- | --- | --- |
| 1/7 | a4 (4 px) / a4 (4 px) | не назначена |
| 1/6 | a6 (6 px) / a6 (6 px) | не назначена |
| 1/5 | a8 (8 px) / a8 (8 px) | не назначена |
| 1/4 | b0 (10 px) / b0 (10 px) | b2 (12 px) / b2 (12 px) |
| 1/3 | b2 (12 px) / b2 (12 px) | b6 (16 px) / b6 (16 px) |
| 1/2 | b2 (12 px) / b4 (14 px) | b6 (16 px) / c0 (20 px) |
| 1 | b4 (14 px) / b6 (16 px) | c0 (20 px) / c2 (24 px) |
| 2 | b6 (16 px) / c0 (20 px) | c2 (24 px) / c4 (28 px) |
| 3 | b8 (18 px) / c2 (24 px) | c2 (24 px) / c8 (36 px) |
| 4 | c0 (20 px) / c4 (28 px) | c4 (28 px) / d0 (40 px) |
| 5 | c1 (22 px) / c6 (32 px) | c6 (32 px) / d2 (48 px) |
| 6 | c2 (24 px) / c8 (36 px) | c8 (36 px) / d3 (52 px) |
| 7 | c4 (28 px) / d0 (40 px) | d0 (40 px) / d5 (60 px) |
| 8 | c6 (32 px) / d2 (48 px) | d2 (48 px) / d8 (72 px) |
| 9 | c8 (36 px) / d4 (56 px) | d3 (52 px) / e0 (80 px) |
| 10 | d0 (40 px) / d6 (64 px) | d5 (60 px) / e2 (96 px) |
| 11 | d1 (44 px) / d8 (72 px) | d6 (64 px) / e3 (104 px) |
| 12 | d2 (48 px) / e0 (80 px) | d8 (72 px) / e5 (120 px) |

## Вертикальные интервалы

| Роль | Значение mobile / desktop |
| --- | --- |
| 0 | zero (0 px) / zero (0 px) |
| 1/4 | a4 (4 px) / a4 (4 px) |
| 1/3 | a8 (8 px) / a8 (8 px) |
| 1/2 | a8 (8 px) / b2 (12 px) |
| 1 | b2 (12 px) / b6 (16 px) |
| 2 | b6 (16 px) / c0 (20 px) |
| 3 | b6 (16 px) / c2 (24 px) |
| 4 | c2 (24 px) / c6 (32 px) |
| 5 | c6 (32 px) / d0 (40 px) |
| 6 | c6 (32 px) / d2 (48 px) |
| 7 | d0 (40 px) / d6 (64 px) |
| 8 | d2 (48 px) / e0 (80 px) |

## Высоты элементов управления

Высота — это высота строки плюс два отступа по вертикали; рамка входит в
итоговую высоту. Плотность задают классы `spacing-*` компонента.

| Плотность | Размер | Отступ по вертикали mobile / desktop | Высота mobile / desktop |
| --- | --- | --- | --- |
| `spacing-compact` | 1/3 | a2 (2 px) / a4 (4 px) | 20 px / 24 px |
| `spacing-compact` | 1/2 | a4 (4 px) / a4 (4 px) | 24 px / 28 px |
| `spacing-compact` | 1 | a4 (4 px) / a4 (4 px) | 28 px / 32 px |
| `spacing-compact` | 2 | a6 (6 px) / a6 (6 px) | 36 px / 40 px |
| `spacing-compact` | 3 | b0 (10 px) / a6 (6 px) | 44 px / 48 px |
| обычная | 1/3 | a4 (4 px) / a4 (4 px) | 24 px / 24 px |
| обычная | 1/2 | a6 (6 px) / a6 (6 px) | 28 px / 32 px |
| обычная | 1 | a8 (8 px) / a8 (8 px) | 36 px / 40 px |
| обычная | 2 | b0 (10 px) / b0 (10 px) | 44 px / 48 px |
| обычная | 3 | b4 (14 px) / b0 (10 px) | 52 px / 56 px |
| `spacing-comfortable` | 1/3 | a6 (6 px) / a8 (8 px) | 28 px / 32 px |
| `spacing-comfortable` | 1/2 | b0 (10 px) / b0 (10 px) | 36 px / 40 px |
| `spacing-comfortable` | 1 | b2 (12 px) / b2 (12 px) | 44 px / 48 px |
| `spacing-comfortable` | 2 | b4 (14 px) / b4 (14 px) | 52 px / 56 px |
| `spacing-comfortable` | 3 | c0 (20 px) / b6 (16 px) | 64 px / 68 px |
| `spacing-spacious` | 1/3 | b0 (10 px) / b2 (12 px) | 36 px / 40 px |
| `spacing-spacious` | 1/2 | b4 (14 px) / b4 (14 px) | 44 px / 48 px |
| `spacing-spacious` | 1 | b6 (16 px) / b6 (16 px) | 52 px / 56 px |
| `spacing-spacious` | 2 | c0 (20 px) / c0 (20 px) | 64 px / 68 px |
| `spacing-spacious` | 3 | c3 (26 px) / c1 (22 px) | 76 px / 80 px |
