---
extends: _core._layouts.documentation
section: content
title: Закругление границ
description: Закругление границ
---

# Закругление границ

Для закругления углов элементов во фреймворке используются переменные радиуса. Значения могут отличаться для мобильной и десктопной версий.

| Переменная | Значение (mobile) |  | Значение (desktop) |  |
|:--|:--|:--|:--|:--|
| `--sf-radius-1/3` | `--sf-a2` | 2px | `--sf-a4` | 4px |
| `--sf-radius-1/2` | `--sf-a6` | 6px | `--sf-a8` | 8px |
| `--sf-radius-1` | `--sf-a8` | 8px | `--sf-b2` | 12px |
| `--sf-radius-2` | `--sf-b6` | 16px | `--sf-c2` | 24px |
| `--sf-radius-3` | `--sf-c6` | 32px | `--sf-d2` | 48px |
| `--sf-radius-default` | `--sf-a4` | 4px | `--sf-a4` | 4px |
| `--sf-radius-square` | `0` | 0px | `0` | 0px |
| `--sf-radius-rounded` | `1000px` |  | `1000px` |  |
| `--sf-radius-round` | алиас `--sf-radius-rounded` |  | алиас `--sf-radius-rounded` |  |
{.table}

