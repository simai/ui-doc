---
title: "Перенос текста"
description: "Управляет переносом строк, балансировкой заголовков и читаемостью абзацев."
---

# Перенос текста

Классы задают, как браузер разбивает текст на строки. Берите `text-balance`
для заголовков, чтобы строки были близки по длине, `text-pretty` — для
абзацев, чтобы последняя строка не состояла из одного слова, и `text-nowrap`,
чтобы текст остался в одной строке.

## Пример

Подпись над образцом — класс, который на нём стоит. Классы не добавляют
символы перевода строки и не меняют копируемый текст.

:::example {id="utilities/typography/text-wrap" label="text-wrap, text-balance, text-pretty, text-nowrap"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `text-wrap` | `text-wrap: wrap` | — |
| `text-nowrap` | `text-wrap: nowrap` | — |
| `text-balance` | `text-wrap: balance` | — |
| `text-pretty` | `text-wrap: pretty` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

| Класс | Где |
|:---|:---|
| `text-wrap` | обычный перенос по ширине блока |
| `text-balance` | короткие заголовки и лиды в несколько строк |
| `text-pretty` | абзацы |
| `text-nowrap` | кнопки, метки, команды и строки кода |

```html
<h2 class="text-balance">Длинный заголовок из нескольких строк</h2>
<p class="text-pretty">Абзац с аккуратной последней строкой…</p>
<code class="text-nowrap overflow-auto">npm run build -- --configuration production</code>
```

Строке с `text-nowrap` нужно решение для переполнения: прокрутка
`overflow-auto` или обрезка `truncate`.

## Ограничения

- `text-balance` браузеры применяют только к блокам в несколько строк, длинный
  текст они не балансируют.
- `text-balance` и `text-pretty` действуют там, где браузер их поддерживает;
  в остальных браузерах текст переносится обычным образом.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Обработка пробелов](/ru/utilities/typography/white-space/)
- [Перенос строк](/ru/utilities/typography/word-break/)
- [Обрезка текста](/ru/utilities/typography/text-overflow/)
