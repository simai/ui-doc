---
title: "Перенос текста"
description: "Управляет переносом строк, балансировкой заголовков и читаемостью абзацев."
tags: [text-wrap, text-nowrap, text-balance, text-pretty]
---

# Перенос текста

:badge[text-wrap]{type=main scheme=on-surface size=1} :badge[современные браузеры]{type=tonal scheme=neutral size=1}

Утилиты группы `text-wrap` управляют визуальным переносом текста. Они не
добавляют символы перевода строки и не меняют копируемое содержимое.

## Пример

:::example {id="utilities/typography/text-wrap" label="Режимы переноса"}
:::

## Классы

| Класс | Значение | Когда использовать |
|:---|:---|:---|
| `text-wrap` | `text-wrap: wrap;` | Обычный перенос по ширине области |
| `text-nowrap` | `text-wrap: nowrap;` | Одна строка; при необходимости добавьте управление переполнением |
| `text-balance` | `text-wrap: balance;` | Короткие заголовки и лиды с более ровными строками |
| `text-pretty` | `text-wrap: pretty;` | Абзацы, где браузер может улучшить последнюю строку и избежать неудачных переносов |

```html
<h2 class="text-balance">Длинный заголовок из нескольких строк</h2>
<p class="text-pretty">Абзац с улучшенным распределением слов...</p>
<code class="text-nowrap overflow-auto">npm run build --configuration production</code>
```

Для исходного кода `text-nowrap` обычно сохраняет горизонтальную прокрутку.
Включайте `text-wrap` только как визуальный режим просмотра, когда перенос
длинных строк полезнее сохранения их экранной геометрии.
