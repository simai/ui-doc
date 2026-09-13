---
title: "Прозрачность"
description: "Меняет прозрачность всего элемента вместе с его содержимым."
tags: [opacity, hover]
---

# Прозрачность

:badge[opacity]{type=main scheme=on-surface size=1} :badge[hover]{type=tonal scheme=neutral size=1}

Классы `opacity-*` делают прозрачным весь элемент: фон, текст, границу и
дочернее содержимое. Используйте их для приглушённых или плавно появляющихся
элементов.

## Пример

:::example {id="utilities/filters/opacity" label="Уровни прозрачности"}
:::

## Значения

| Класс | Прозрачность |
|:---|:---|
| `opacity-0` | 0%, элемент невидим |
| `opacity-1` … `opacity-9` | 10% … 90% |
| `opacity-full` | 100% |

```html
<button class="opacity-6 hover:opacity-full">Подробнее</button>
```

Прозрачный элемент продолжает занимать место и принимать события. Чтобы
отключить взаимодействие, дополнительно используйте
[`pointer-events-none`](/ru/utilities/forms/pointer-events/).

Утилита [`filter-opacity-*`](/ru/utilities/filters/filter-opacity/) меняет
прозрачность через CSS-фильтр. Для обычного интерфейса проще использовать
`opacity-*`.

