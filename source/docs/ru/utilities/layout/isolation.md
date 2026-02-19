---
extends: _core._layouts.documentation
section: content
title: Контекст наложения (isolation)
description: Управление контекстом наложения и смешиванием слоёв
---

# Контекст наложения (isolation)

!rtags[isolate sm md lg xl]


`isolate` управляет созданием отдельного stacking context. Это важно, когда используются `mix-blend-*` и нужно ограничить их влияние пределами контейнера.

## Таблица классов

| Класс | Значение |
|:--|:--|
| `.isolate` | `isolation: isolate;` |
| `.isolation-auto` | `isolation: auto;` |
| `.mix-blend-{mode}` | `mix-blend-mode: ...;` |
{.table}

Поддерживаемые `mode`: `normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`.

## Синтаксис

- `isolate`
- `isolation-auto`
- `mix-blend-{mode}`

## Примеры

### isolate

```html
<div class="bg-success-tonal">
  <div class="isolate">
    <div class="mix-blend-multiply bg-warning-tonal">...</div>
  </div>
</div>
```

### isolation-auto

```html
<div class="bg-success-tonal">
  <div class="isolation-auto">
    <div class="mix-blend-multiply bg-warning-tonal">...</div>
  </div>
</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=layout&group=isolation"></iframe>
</div>
