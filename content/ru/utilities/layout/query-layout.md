---
title: "Адаптация по размеру контейнера"
description: "Меняет display, направление, сетку, выравнивание и промежутки по ширине родительского контейнера."
tags: [query-layout, cq-sm, cq-md, cq-lg, cq-xl]
---

# Адаптация по размеру контейнера

:badge[query-layout]{type=main scheme=on-surface size=1} :badge[cq-sm · cq-md · cq-lg · cq-xl]{type=tonal scheme=neutral size=1}

Префиксы `cq-*` применяют макетные утилиты по ширине ближайшего
`query-container`. Это позволяет одному блоку по-разному выглядеть в основной
области, колонке и боковой панели без привязки к ширине экрана.

## Пример

:::example {id="utilities/layout/query-layout" label="Макет внутри контейнера"}
:::

## Контрольные точки

| Префикс | Минимальная ширина контейнера |
|:---|:---|
| `cq-sm:` | `32.5rem` |
| `cq-md:` | `45rem` |
| `cq-lg:` | `60rem` |
| `cq-xl:` | `71.25rem` |

Для именованного контейнера `sidebar` добавьте его имя после контрольной точки:
`cq-sm/sidebar:`.

## Поддерживаемые группы

После префикса доступны согласованные утилиты отображения, Flexbox, Grid,
выравнивания и промежутков: например `cq-sm:flex`, `cq-sm:flex-row`,
`cq-sm:grid-col-2`, `cq-sm:justify-between`, `cq-sm:items-cross-center`,
`cq-sm:gap-2`, `cq-sm:row-gap-2` и `cq-sm:col-gap-2`.

```html
<section class="query-container">
  <div class="grid grid-col-1 cq-sm:grid-col-2 gap-2">...</div>
</section>

<aside class="query-container/sidebar">
  <div class="flex flex-col cq-sm/sidebar:flex-row gap-2">...</div>
</aside>
```

`cq-*` — самостоятельный префикс контейнерного условия. Не соединяйте его с
экранным префиксом в одном имени класса.
