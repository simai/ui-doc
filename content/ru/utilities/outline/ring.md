---
title: "Фокусное кольцо"
description: "Создаёт заметное кольцо вокруг элемента и настраивает его толщину, цвет и отступ."
tags: [ring-width, ring-color, ring-offset-width, ring-offset-color, focus]
---

# Фокусное кольцо

:badge[ring-width]{type=main scheme=on-surface size=1} :badge[ring-color]{type=main scheme=on-surface size=1} :badge[ring-offset-width]{type=main scheme=on-surface size=1} :badge[ring-offset-color]{type=main scheme=on-surface size=1}

Кольцо выделяет элемент поверх макета и не меняет его размер. Чаще всего его
показывают при фокусе с клавиатуры.

## Пример

:::example {id="utilities/outline/ring" label="Толщина, цвет и отступ кольца"}
:::

## Как собрать кольцо

| Задача | Классы |
|:---|:---|
| Толщина | `ring-0` … `ring-4` |
| Цвет | `ring-primary`, `ring-error`, `ring-outline` и другие смысловые цвета |
| Расстояние от элемента | `ring-offset-0` … `ring-offset-4` |
| Цвет промежутка | `ring-offset-surface`, `ring-offset-primary` и другие смысловые цвета |

```html
<button class="focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface">
  Сохранить
</button>
```

Для внутреннего кольца используйте [`ring-inset`](/ru/utilities/outline/ring-inset/),
для прозрачности — [`ring-opacity-*`](/ru/utilities/outline/ring-opacity/).

