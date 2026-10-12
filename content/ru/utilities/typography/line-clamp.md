---
title: "Ограничение строк"
description: "Показывает не больше заданного числа строк текста и ставит многоточие в конце последней."
---

# Ограничение строк

Классы `line-clamp-*` показывают от одной до шести строк текста, а остальное
скрывают и ставят многоточие. Берите их для описаний в карточках и списках,
где у каждого элемента одинаковая высота.

## Пример

Один и тот же текст с разным числом строк. `line-clamp-none` снимает
ограничение.

:::example {id="utilities/typography/line-clamp" label="line-clamp-1 … line-clamp-none"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `line-clamp-1` | `display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 1` | — |
| `line-clamp-2` | `display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 2` | — |
| `line-clamp-3` | `display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 3` | — |
| `line-clamp-4` | `display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 4` | — |
| `line-clamp-5` | `display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 5` | — |
| `line-clamp-6` | `display: -webkit-box; overflow: hidden; -webkit-box-orient: vertical; -webkit-line-clamp: 6` | — |
| `line-clamp-none` | `display: block; overflow: visible; -webkit-box-orient: horizontal; -webkit-line-clamp: unset` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Класс ставят на блок с текстом. Для одной строки подходит и `truncate`: он
не меняет `display` элемента.

```html
<article class="flex flex-col gap-1">
  <h3 class="line-clamp-2">Название товара, которое может не поместиться в две строки</h3>
  <p class="line-clamp-3 color-on-surface-variant">Описание товара…</p>
</article>
```

## Ограничения

- Класс задаёт элементу `display: -webkit-box` и заменяет его собственный
  `display`: не ставьте его на флекс- или грид-контейнер, оберните текст.
- `line-clamp-none` задаёт `display: block`, а не исходное значение
  элемента.
- Скрытый текст остаётся в разметке: поиск по странице и программы чтения с
  экрана его находят. Дайте способ прочитать текст целиком — ссылку или
  раскрытие.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Обрезка текста](/ru/utilities/typography/text-overflow/)
- [Перенос текста](/ru/utilities/typography/text-wrap/)
