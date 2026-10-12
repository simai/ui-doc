---
title: "Семейство шрифтов"
description: "Переключает текст на набор шрифтов без засечек, с засечками или моноширинный."
---

# Семейство шрифтов

Классы `sans`, `serif` и `mono` задают семейство шрифтов через токены темы.
Берите `mono` для кода, идентификаторов и чисел, которые сравнивают по
разрядам, а `serif` — для текста, которому нужен книжный вид.

## Пример

Подпись над образцом — класс, который на нём стоит.

:::example {id="utilities/typography/font-family" label="sans, serif, mono"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `sans` | `font-family: var(--sf-sans)` | — |
| `serif` | `font-family: var(--sf-serif)` | — |
| `mono` | `font-family: var(--sf-mono)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-sans` | `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` |
| `--sf-serif` | `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif` |
| `--sf-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace` |

## Применение

Каждый класс читает свой токен: `--sf-sans`, `--sf-serif`, `--sf-mono`.
Токен — это список шрифтов: браузер берёт первый установленный.

```html
<p>Команда сборки: <code class="mono">npm run build</code></p>
<blockquote class="serif italic">Цитата с книжным начертанием.</blockquote>
```

Чтобы подключить фирменный шрифт для всех таких мест сразу, переопределите
токен в теме проекта:

```css
:root {
  --sf-serif: "PT Serif", ui-serif, Georgia, serif;
}
```

## Ограничения

- Основной шрифт страницы задаёт тема (`--sf-text--family`), а не класс
  `sans`: `sans` берёт системный набор и может отличаться от шрифта
  остального текста.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Типографика](/ru/guide/fundamentals/typography/)
- [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/)
