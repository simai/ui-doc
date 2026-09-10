---
title: "Контейнерные запросы"
description: "Объявляет обычный или именованный контейнер для адаптации вложенного макета."
tags: [query-container, container-query, sidebar]
---

# Контейнерные запросы

:badge[query-container]{type=main scheme=on-surface size=1} :badge[CSS Container Queries]{type=tonal scheme=neutral size=1}

Утилита `query-container` делает элемент источником ширины для контейнерных
модификаторов `cq-*`. Вложенный интерфейс реагирует на размер своего блока, а
не всего окна браузера — это удобно для карточек, боковых панелей и составных
Smart-компонентов.

## Классы

| Класс | Значение | Назначение |
|:---|:---|:---|
| `query-container` | `container-type: inline-size;` | Обычный контейнер |
| `query-container/sidebar` | `container-type: inline-size;` и `container-name: sidebar;` | Именованный контейнер `sidebar` |

## Пример

:::example {id="utilities/layout/query-container" label="Обычный и именованный контейнер"}
:::

## Как использовать

Разместите `query-container` на оболочке, а модификатор `cq-sm:*`, `cq-md:*`,
`cq-lg:*` или `cq-xl:*` — на вложенном элементе. Для именованного варианта
используйте форму `cq-sm/sidebar:*`.

```html
<section class="query-container">
  <div class="grid grid-col-1 cq-sm:grid-col-2">...</div>
</section>

<aside class="query-container/sidebar">
  <div class="flex flex-col cq-sm/sidebar:flex-row">...</div>
</aside>
```

Контейнерный модификатор действует только внутри соответствующего контейнера.
Он не заменяет экранные префиксы `sm:`, `md:`, `lg:` и `xl:`, когда условие
должно зависеть именно от окна браузера.
