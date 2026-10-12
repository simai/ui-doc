---
title: "Текст по умолчанию"
description: "Как ядро оформляет текст без классов: переменные шрифта, отступы абзацев и заголовков, роли текста и переменные, из которых они берут размер."
---

# Текст по умолчанию

Ядро оформляет текст ещё до того, как на нём появился класс: `body` берёт
шрифт, кегль и высоту строки из переменных, абзацы и списки получают нижний
отступ, заголовки `h1`–`h6` — свою роль. Чтобы изменить текст во всём проекте,
меняйте эти переменные, а не правила элементов.

## Когда применять

Откройте эту страницу, когда текст без классов выглядит не так, как ожидалось,
или когда проект меняет шрифт, вес заголовков или отступы между абзацами сразу
на всех страницах. Как выбирать роль текста по назначению, сказано в разделе
[«Типографика»](/ru/guide/fundamentals/typography/).

## Переменные текста

`body` читает шесть переменных: стиль, кегль, высоту строки, вес, семейство и
межбуквенный интервал. Всё, что лежит внутри и не задаёт своё, наследует их.

| Переменная | Значение по умолчанию | Что задаёт |
| :--- | :--- | :--- |
| `--sf-text--size` | `var(--sf-text--size-1)` | кегль основного текста |
| `--sf-text--height` | `var(--sf-text--height-1)` | высоту строки основного текста |
| `--sf-text--family` | `"Inter Variable", "Inter Fallback", system-ui, …` | семейство основного текста |
| `--sf-text--weight` | `400` | вес основного текста |
| `--sf-text--style` | `inherit` | начертание: прямое или курсив |
| `--sf-text--tracking` | `inherit` | межбуквенный интервал |
| `--sf-heading--family` | тот же набор шрифтов, что у текста | семейство заголовков |
| `--sf-heading--weight` | `700` | вес заголовков |
| `--sf-display--family` | тот же набор шрифтов, что у текста | семейство крупных надписей |
| `--sf-display--weight` | `300` | вес крупных надписей |

Семейства заголовков и крупных надписей — отдельные переменные со своим
значением, а не ссылки на семейство текста. Если проект меняет шрифт,
задайте все три.

Кегль и высота строки адаптивны: `--sf-text--size-1` и `--sf-text--height-1`
сами меняются с шириной экрана, поэтому текст без классов растёт на широком
экране без условий в разметке.

## Отступы текста

Абзацы, списки, таблицы, цитаты и заголовки отбиваются друг от друга
переменными интервалов. Значения ступеней — в разделе
[«Интервалы»](/ru/guide/fundamentals/spacing/).

| Элементы | Сверху | Снизу |
| :--- | :--- | :--- |
| `p`, `table`, `ol`, `ul`, `q`, `blockquote` | — | `--sf-text--space-bottom` |
| `h1`, `.sf-h-1` | `0` | `--sf-heading--space-bottom` |
| `h2`–`h6`, `.sf-h-2` … `.sf-h-6` | `--sf-heading--space-top` | `--sf-heading--space-bottom` |
| `.sf-display-1` … `.sf-display-6` | `0` | `--sf-heading--space-bottom` |
| `.sf-body-large`, `.sf-body-medium`, `.sf-body-small` | `0` | `--sf-text--space-bottom` |

`--sf-text--space-bottom` и `--sf-heading--space-bottom` равны
`--sf-content--space-text`, а `--sf-heading--space-top` —
`--sf-content--space-section`: перед заголовком раздела отступ крупнее, чем
между абзацами.

## Роли текста

Роль задаёт кегль и высоту строки одним классом. Заголовки `h1`–`h6`
получают роль без класса, остальные роли ставятся классом.

| Класс или тег | Кегль | Высота строки |
| :--- | :--- | :--- |
| `h1`, `.sf-h-1` | `--sf-heading-1--size` | `--sf-heading-1--height` |
| `h2`–`h6`, `.sf-h-2` … `.sf-h-6` | `--sf-heading-{n}--size` | `--sf-heading-{n}--height` |
| `.sf-display-1` … `.sf-display-6` | `--sf-display-{n}--size` | `--sf-display-{n}--height` |
| `.sf-body-large`, `.text-large` | `--sf-text-large--size` | `--sf-text-large--height` |
| `.sf-body-medium`, `.text`, `.text-medium` | `--sf-text-medium--size` | `--sf-text-medium--height` |
| `.sf-body-small`, `.text-small` | `--sf-text-small--size` | `--sf-text-small--height` |
| `.sf-label-large`, `.label-large` | `--sf-label-large--size` | `--sf-label-large--height` |
| `.sf-label-medium`, `.label`, `.label-medium` | `--sf-label-medium--size` | `--sf-label-medium--height` |
| `.sf-label-small`, `.label-small` | `--sf-label-small--size` | `--sf-label-small--height` |

Полные классы `.sf-…` ставят ещё семейство и вес: заголовки — переменные
заголовков, крупные надписи — переменные крупных надписей, `body` и `label` —
семейство текста и вес `400`. Классы `body` вдобавок дают нижний отступ
абзаца. Короткие классы — `.text-*` и `.label-*` — меняют только кегль и
высоту строки, а семейство и вес наследуют от окружения.

Для крупных надписей у ядра есть и короткие имена: `.display1` … `.display6`
и `.d1` … `.d6` равны `.sf-display-1` … `.sf-display-6`.

Переменные ролей берут значения из общей шкалы:

| Роль | Кегль | Высота строки |
| :--- | :--- | :--- |
| `heading-1` … `heading-6` | `--sf-text--size-6` … `--sf-text--size-1` | `--sf-title--height-6` … `--sf-title--height-1` |
| `display-1` … `display-6` | `--sf-text--size-12` … `--sf-text--size-7` | `--sf-title--height-12` … `--sf-title--height-7` |
| `text-large` | `--sf-text--size-2` | `--sf-text--height-2` |
| `text-medium` | `--sf-text--size-1` | `--sf-text--height-1` |
| `text-small` | `--sf-text--size-1/2` | `--sf-text--height-1/2` |
| `label-large` | `--sf-b4` | `--sf-c0` |
| `label-medium` | `--sf-text--size-1/3` | `--sf-text--height-1/3` |
| `label-small` | `--sf-text--size-1/4` | `--sf-text--height-1/4` |

У ролей нет вариантов с префиксами ширины экрана и состояния. Зависимость от
ширины экрана уже заложена в переменные шкалы: заголовки, крупные надписи и
`body` растут на широком экране сами, а подписи `label` от ширины не зависят.

## Пример

Текст без классов и роли текста на одном экране:

:::example {id="guide/fundamentals/default-text" label="Текст без классов и роли"}
:::

Замена шрифта и веса заголовков во всём проекте — несколько переменных на
`:root`:

```css
:root {
    --sf-text--family: "Golos Text", system-ui, sans-serif;
    --sf-heading--family: "Golos Text", system-ui, sans-serif;
    --sf-display--family: "Golos Text", system-ui, sans-serif;
    --sf-heading--weight: var(--sf-weight--semi-bold);
}
```

Роль на элементе, который не является заголовком:

```html
<p class="sf-h-4">Подзаголовок карточки</p>
<span class="label-small">Обновлено вчера</span>
```
