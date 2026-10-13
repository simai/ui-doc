---
title: "Внутреннее кольцо"
description: "Переносит кольцо внутрь элемента, чтобы его не обрезал контейнер со скрытым переполнением."
---

# Внутреннее кольцо

Класс `ring-inset` рисует [кольцо](/ru/utilities/outline/ring/) внутри
элемента, а не снаружи. Берите его для пунктов списка, ячеек и вкладок внутри
контейнера с `overflow-hidden`: внешнее кольцо такой контейнер обрезает.

## Пример

Пункт 2 выделен кольцом в контейнере со скрытым переполнением. Снаружи
кольцо обрезано по краям контейнера, внутри — видно целиком.

:::example {id="utilities/outline/ring-inset" label="ring-2 и ring-2 ring-inset"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `ring-inset` | `--sf-ring-inset: inset` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `focus-visible:`, `focus:`, `hover:`. Например: `focus-visible:ring-inset`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

`ring-inset` меняет только положение кольца; толщину и цвет задают классы
`ring-{n}` и `ring-{цвет}`. С префиксом состояния кольцо уходит внутрь только
в этом состоянии.

```html
<ul class="overflow-hidden radius-surface border border-outline-variant">
  <li tabindex="0" class="p-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">Пункт</li>
</ul>
```

## Ограничения

- Внутреннее кольцо ложится поверх внутренних отступов и может закрыть край
  содержимого без отступа.
- Префиксов ширины экрана у семейства нет; есть состояния `hover:`, `focus:`
  и `focus-visible:`.

## См. также

- [Фокусное кольцо](/ru/utilities/outline/ring/)
- [Переполнение](/ru/utilities/layout/overflow/)
