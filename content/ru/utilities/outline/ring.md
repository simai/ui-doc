---
title: "Фокусное кольцо"
description: "Создаёт заметное кольцо вокруг элемента и настраивает его толщину, цвет и отступ."
tags: [ring-width, ring-color, ring-offset-width, ring-offset-color, focus]
---

# Фокусное кольцо

:badge[ring-width]{type=main scheme=on-surface size=1} :badge[ring-color]{type=main scheme=on-surface size=1} :badge[ring-offset-width]{type=main scheme=on-surface size=1} :badge[ring-offset-color]{type=main scheme=on-surface size=1}

Кольцо выделяет элемент поверх макета и не меняет его размер. Показывают его при
фокусе с клавиатуры — для этого есть вариант `focus-visible:`.

Сами компоненты Framework рисуют фокус иначе — как `outline` из токенов
`--sf-focus--*`, см. [Focus](/ru/guide/fundamentals/colors-and-themes/roles/focus/). Кольцо на
утилитах нужно для собственной разметки проекта; если рядом стоит компонент
Framework, берите токены, чтобы фокус выглядел одинаково.

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
<button class="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
  Сохранить
</button>
```

## Когда кольцо появляется

| Префикс | Когда срабатывает | Что выбрать |
|:---|:---|:---|
| `focus-visible:` | только при работе с клавиатуры | это и нужно для фокуса |
| `focus:` | и с клавиатуры, и при щелчке мышью | устаревший, сохранён для совместимости |

Щелчок мышью уже сообщает человеку, куда он попал; кольцо в этот момент — шум.
Поэтому `focus:` помечен как устаревший: он продолжает работать, но в новой
разметке используйте `focus-visible:`.

Для внутреннего кольца используйте [`ring-inset`](/ru/utilities/outline/ring-inset/),
для прозрачности — [`ring-opacity-*`](/ru/utilities/outline/ring-opacity/).

