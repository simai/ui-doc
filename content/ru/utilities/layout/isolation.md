---
title: "Контекст наложения (isolation)"
description: "Управление контекстом наложения и смешиванием слоёв"
---

# Контекст наложения (isolation)

!rtags[isolate]


`isolate` управляет созданием отдельного stacking context. Это важно, когда используются `mix-blend-*` и нужно ограничить их влияние пределами контейнера.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.isolate` | `isolation: isolate;` |
| `.auto` | `isolation: auto;` |
| `.mix-blend-{mode}` | `mix-blend-mode: ...;` |

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
## Пример
:::example {id="utilities/layout/isolation" label="Результат"}
:::

