---
title: "Сжимаемость"
description: "Сжимаемость (flex-shrink)"
tags: [flex-shrink, sm, md, lg, xl, xxl]
---

# Сжимаемость

:badge[flex-shrink]{type=main scheme=on-surface size=1} :badge[sm]{type=tonal scheme=neutral size=1} :badge[md]{type=tonal scheme=neutral size=1} :badge[lg]{type=tonal scheme=neutral size=1} :badge[xl]{type=tonal scheme=neutral size=1} :badge[xxl]{type=tonal scheme=neutral size=1}

В SIMAI Framework с помощью модификаторов можно управлять сжимаемостью элементов флексбокса.

## Наглядный пример

:::example {id="utilities/flex/flex-shrink" label="Сжимаемость"}
:::

## Таблица классов

| Класс        | Значение        |
|:-------------|:----------------|
| `shrink` | `flex-shrink: 1;` |
| `shrink-none` | `flex-shrink: 0;` |

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`, `xxl`).
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `shrink` — разрешает сжиматься элементам флексбокса, уменьшая их размер при нехватке пространства.
    - `shrink-none` — запрещает элементам флексбокса сжиматься.

## Примеры использования

```html
<!-- Пример с shrink: центральный элемент будет сжиматься при нехватке места -->
<div class="flex">
  <div class="grow p-x-2 bg-surface-1">Левый (может расти и сжиматься)</div>
  <div class="shrink p-x-2 bg-surface-2 text-center">Центральный (сжимается)</div>
  <div class="grow p-x-2 bg-surface-3">Правый (может расти и сжиматься)</div>
</div>
```

```html
<!-- Пример с shrink-none: центральный элемент не будет сжиматься ниже своего исходного размера -->
<div class="flex">
  <div class="shrink p-x-2 bg-surface-1">Левый (может сжиматься)</div>
  <div class="shrink-none p-x-2 bg-surface-2 text-center">Центральный (не сжимается)</div>
  <div class="shrink p-x-2 bg-surface-3">Правый (может сжиматься)</div>
</div>
```

## Адаптивность

Для изменения сжимаемости элемента флексбокса при достижении определённой контрольной точки экрана, просто добавьте её к
модификатору:

```html
<div class="md:shrink">
  <!-- Начиная с md элемент будет сжиматься при нехватке пространства -->
</div>
```
