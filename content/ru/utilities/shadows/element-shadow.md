---
title: "Тень элемента (box-shadow)"
description: "Глубина тени элемента и состояния hover"
tags: [box-shadow, hover]
---

# Тень элемента (box-shadow)

Утилиты `shadow-*` задают уровень тени через `--sf-shadow--level-ratio`.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.shadow-0` | тень отключена |
| `.shadow-1` | `--sf-shadow--level-ratio: 1` |
| `.shadow-2` | `--sf-shadow--level-ratio: 2` |
| `.shadow-3` | `--sf-shadow--level-ratio: 4` |
| `.shadow-4` | `--sf-shadow--level-ratio: 8` |
| `.shadow-5` | `--sf-shadow--level-ratio: 16` |
| `.hover:shadow-0 ... .hover:shadow-5` | уровень тени в `:hover` |

## Синтаксис

- `shadow-{0...5}`
- `hover:shadow-{0...5}`

## Пример

:::example {id="utilities/shadows/element-shadow" label="Результат"}
:::

