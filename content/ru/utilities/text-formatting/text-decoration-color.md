---
title: "Цвет линий оформления"
description: "Окрашивает подчёркивание и другие линии оформления текста цветовой ролью темы."
---

# Цвет линий оформления

Классы `decoration-*` задают цвет линии оформления текста отдельно от цвета
самого текста. Берите их, когда линия должна выделяться акцентом или статусом,
а текст остаётся обычного цвета.

## Пример

### Роли

Акцентные и статусные роли на подчёркнутом тексте.

:::example {id="utilities/text-formatting/text-decoration-color" label="Акцентные и статусные роли"}
:::

### Служебные значения

`decoration-current` красит линию в цвет текста, `decoration-transparent`
делает её невидимой, не меняя раскладку.

:::example {id="utilities/text-formatting/text-decoration-color-keywords" label="decoration-current, decoration-transparent"}
:::

### Состояния

Префикс меняет цвет линии только в состоянии. Наведите указатель на первую
ссылку, переведите фокус на вторую клавишей Tab, нажмите и удерживайте третью.

:::example {id="utilities/text-formatting/text-decoration-color-states" label="hover:, focus: и active:"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `decoration-inherit` | `text-decoration-color: var(--sf-inherit)` | — |
| `decoration-current` | `text-decoration-color: var(--sf-currentColor)` | — |
| `decoration-transparent` | `text-decoration-color: var(--sf-transparent)` | — |
| `decoration-primary` | `text-decoration-color: var(--sf-outline-primary)` | — |
| `decoration-secondary` | `text-decoration-color: var(--sf-outline-secondary)` | — |
| `decoration-tertiary` | `text-decoration-color: var(--sf-outline-tertiary)` | — |
| `decoration-error` | `text-decoration-color: var(--sf-outline-error)` | — |
| `decoration-warning` | `text-decoration-color: var(--sf-outline-warning)` | — |
| `decoration-success` | `text-decoration-color: var(--sf-outline-success)` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `active:`, `focus:`, `hover:`. Например: `active:decoration-inherit`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/fundamentals/design-tokens/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-inherit` | `inherit` |
| `--sf-currentColor` | задаётся темой |
| `--sf-transparent` | `rgba(255,255,255,0)` |
| `--sf-outline-primary` | `light-dark(var(--sf-primary-50), var(--sf-primary-60))` |
| `--sf-outline-secondary` | `light-dark(var(--sf-secondary-50), var(--sf-secondary-60))` |
| `--sf-outline-tertiary` | `light-dark(var(--sf-tertiary-50), var(--sf-tertiary-60))` |
| `--sf-outline-error` | `light-dark(var(--sf-error-50), var(--sf-error-60))` |
| `--sf-outline-warning` | `light-dark(var(--sf-warning-50), var(--sf-warning-60))` |
| `--sf-outline-success` | `light-dark(var(--sf-success-50), var(--sf-success-60))` |

## Применение

Класс цвета не рисует линию: добавьте его к элементу, у которого линия уже
есть, — к ссылке или к элементу с `underline`. Роли берутся из группы
`outline`: это цвет линий и графики, а не текста.

```html
<a class="underline decoration-primary hover:decoration-current" href="/ru/">Документация</a>
<span class="underline decoration-wavy decoration-error">опечатка</span>
```

`decoration-transparent` вместе с `hover:decoration-*` прячет линию и
показывает её только при наведении.

## Ограничения

- `decoration-inherit` не берёт цвет линии родителя: переменная
  `--sf-inherit` со значением `inherit` не передаёт значение в свойство, и
  линия получает цвет текста.
- `decoration-current` читает токен `--sf-currentColor`, которого тема не
  объявляет. Линия всё равно получает цвет текста: это значение свойства по
  умолчанию.
- Цвет линии не должен быть единственным признаком смысла: ошибку
  подтверждайте текстом или значком.

## См. также

- [Линии оформления текста](/ru/utilities/text-formatting/text-decoration/)
- [Цвет текста](/ru/utilities/text-formatting/text-color/)
- [Цветовые роли](/ru/guide/fundamentals/colour-roles/)
