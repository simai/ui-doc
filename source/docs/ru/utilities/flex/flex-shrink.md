---
extends: _core._layouts.documentation
section: content
title: "Сжимаемость (flex-shrink)"
description: "Сжимаемость (flex-shrink)"
---

# Сжимаемость (flex-shrink)

!rtags[flex-shrink sm md lg xl]


В SIMAI Framework с помощью модификаторов можно управлять сжимаемостью элементов флексбокса.

## Таблица классов

| Класс        | Значение        |
|:-------------|:----------------|
| .shrink      | flex-shrink: 1; |
| .shrink-none | flex-shrink: 0; |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определённого размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `shrink` — разрешает сжиматься элементам флексбокса, уменьшая их размер при нехватке пространства.
    - `shrink-none` — запрещает элементам флексбокса сжиматься.

## Примеры использования

```html
<!-- Пример с shrink: центральный элемент будет сжиматься при нехватке места -->
<div class="flex">
  <div class="grow px-2 bg-neutral-10">Левый (может расти и сжиматься)</div>
  <div class="shrink px-2 bg-neutral-20 text-center">Центральный (сжимается)</div>
  <div class="grow px-2 bg-neutral-30">Правый (может расти и сжиматься)</div>
</div>
```

```html
<!-- Пример с shrink-none: центральный элемент не будет сжиматься ниже своего исходного размера -->
<div class="flex">
  <div class="shrink px-2 bg-neutral-10">Левый (может сжиматься)</div>
  <div class="shrink-none px-2 bg-neutral-20 text-center">Центральный (не сжимается)</div>
  <div class="shrink px-2 bg-neutral-30">Правый (может сжиматься)</div>
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
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=flex&group=flex-shrink"></iframe>
</div>
