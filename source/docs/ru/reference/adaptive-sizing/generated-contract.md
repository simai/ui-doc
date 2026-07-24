---
extends: _core._layouts.documentation
section: content
title: Справочник вертикальных размеров
description: Сгенерированные пары mobile и desktop для типографики, интервалов и controls.
---

# Справочник вертикальных размеров

> Этот файл сгенерирован командой `npm run tokens:sync`. Не меняйте числа
> вручную. Источник: `simai.vertical-sizing@1.1.0`,
> SHA-256 `333d78f0f3abe6f47c9caa1fc3c53c4d2894e122a922a400804383266cbd72f5`.

## Primitive scale A–I

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

## Высоты controls

Высота вычисляется как `line-height + 2 × block-padding`. Структурная рамка
учитывается внутри итоговой высоты.

| Tightness | Size | Block padding mobile / desktop | Высота mobile / desktop |
| --- | --- | --- | --- |
| low | 1/3 | a2 (2 px) / a4 (4 px) | 20 px / 24 px |
| low | 1/2 | a4 (4 px) / a4 (4 px) | 24 px / 28 px |
| low | 1 | a4 (4 px) / a4 (4 px) | 28 px / 32 px |
| low | 2 | a6 (6 px) / a6 (6 px) | 36 px / 40 px |
| low | 3 | b0 (10 px) / a6 (6 px) | 44 px / 48 px |
| default | 1/3 | a4 (4 px) / a4 (4 px) | 24 px / 24 px |
| default | 1/2 | a6 (6 px) / a6 (6 px) | 28 px / 32 px |
| default | 1 | a8 (8 px) / a8 (8 px) | 36 px / 40 px |
| default | 2 | b0 (10 px) / b0 (10 px) | 44 px / 48 px |
| default | 3 | b4 (14 px) / b0 (10 px) | 52 px / 56 px |
| high | 1/3 | a6 (6 px) / a8 (8 px) | 28 px / 32 px |
| high | 1/2 | b0 (10 px) / b0 (10 px) | 36 px / 40 px |
| high | 1 | b2 (12 px) / b2 (12 px) | 44 px / 48 px |
| high | 2 | b4 (14 px) / b4 (14 px) | 52 px / 56 px |
| high | 3 | c0 (20 px) / b6 (16 px) | 64 px / 68 px |
| highest | 1/3 | b0 (10 px) / b2 (12 px) | 36 px / 40 px |
| highest | 1/2 | b4 (14 px) / b4 (14 px) | 44 px / 48 px |
| highest | 1 | b6 (16 px) / b6 (16 px) | 52 px / 56 px |
| highest | 2 | c0 (20 px) / c0 (20 px) | 64 px / 68 px |
| highest | 3 | c3 (26 px) / c1 (22 px) | 76 px / 80 px |

## Граница контракта

В контракт входят root/rem policy, viewport mode, typography, control height,
block padding и вертикальный rhythm. Межкомпонентное горизонтальное
выравнивание, menu nesting, inline padding и container gutters не входят.
