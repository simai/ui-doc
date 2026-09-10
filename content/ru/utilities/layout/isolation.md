---
title: "Контекст наложения"
description: "Управление контекстом наложения и смешиванием слоёв"
tags: [isolate]
---

# Контекст наложения

:badge[isolate]{type=main scheme=on-surface size=1}

`isolate` управляет созданием отдельного stacking context. Это важно, когда используются `mix-blend-*` и нужно ограничить их влияние пределами контейнера.

## Пример

Сравнение показывает, как отдельный контекст наложения ограничивает смешивание цветных слоёв пределами контейнера.

:::example {id="utilities/layout/isolation" label="Изоляция смешивания"}
:::

## Таблица классов

| Класс | Значение |
|:--|:--|
| `isolate` | `isolation: isolate;` |
| `auto` | `isolation: auto;` |
| `mix-blend-{mode}` | `mix-blend-mode: ...;` |

Поддерживаемые `mode`: `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`.

## Синтаксис

- `isolate`
- `auto`
- `mix-blend-{mode}`

## Примеры

### isolate

```html
<div class="bg-success-container">
  <div class="isolate">
    <div class="mix-blend-multiply bg-warning-container">...</div>
  </div>
</div>
```

### auto

```html
<div class="bg-success-container">
  <div class="auto">
    <div class="mix-blend-multiply bg-warning-container">...</div>
  </div>
</div>
```
