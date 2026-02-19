---
extends: _core._layouts.documentation
section: content
title: Толщина границы
description: Толщина границы
---

# Толщина границы

!rtags[border-width sm md lg xl]


С помощью модификаторов толщины границы в SIMAI Framework вы можете задавать толщину для всех сторон, по осям или для отдельных сторон.

## Классы и значения

| Класс | Значение |
|:--|:--|
| `.border-{n}` | `border-width: var(--sf-*)` |
| `.border-x-{n}` | `border-inline-start-width` + `border-inline-end-width` |
| `.border-y-{n}` | `border-top-width` + `border-bottom-width` |
| `.border-inline-start-{n}` | `border-inline-start-width` |
| `.border-inline-end-{n}` | `border-inline-end-width` |
| `.border-top-{n}` | `border-top-width` |
| `.border-bottom-{n}` | `border-bottom-width` |

{.table}

`n`: `0..10`

## Описание

- `border-{n}` задаёт толщину границы со всех сторон.
- `border-x-{n}` и `border-y-{n}` задают толщину по осям.
- `border-inline-start-{n}`, `border-inline-end-{n}`, `border-top-{n}`, `border-bottom-{n}` задают толщину на конкретной стороне.

> В текущей версии используются логические стороны (`inline-start` / `inline-end`) вместо физических (`left` / `right`).

## Синтаксис

- `{модификатор}` — для всех размеров экрана.
- `{контрольная точка}:{модификатор}` — адаптивно (`sm`, `md`, `lg`, `xl`), например `md:border-4`.

## Примеры

```html
<div class="border-2">border-2</div>
<div class="border-x-4">border-x-4</div>
<div class="border-y-3">border-y-3</div>
<div class="border-inline-start-6">border-inline-start-6</div>
<div class="border-inline-end-1">border-inline-end-1</div>
<div class="border-top-10">border-top-10</div>
<div class="md:border-bottom-5">md:border-bottom-5</div>
```
## Playground

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=border&group=border-width"></iframe>
</div>
