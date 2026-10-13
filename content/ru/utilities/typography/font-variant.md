---
title: "Начертание шрифта (капитель)"
description: "Показывает строчные буквы капителью — прописными уменьшенного размера."
---

# Начертание шрифта (капитель)

Класс `small-caps` показывает строчные буквы капителью — прописными высотой
со строчную. Берите его для аббревиатур в тексте, подписей и заголовков в
книжной типографике. `small-caps-none` снимает капитель.

## Пример

`small-caps-none` возвращает обычные строчные внутри текста с капителью.

:::example {id="utilities/typography/font-variant" label="small-caps и small-caps-none"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `small-caps` | `font-feature-settings: "smcp"; font-variant: small-caps` | — |
| `small-caps-none` | `font-feature-settings: "kern" off; font-variant: none` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — нет.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

```html
<p>Документ согласован в <span class="small-caps">мвд</span> и Минфине.</p>
```

Если у шрифта нет капители, браузер строит её из уменьшенных прописных —
они выглядят тоньше остального текста.

## Ограничения

- `small-caps-none` кроме капители отключает кернинг (`font-feature-settings:
  "kern" off`): пары букв у текста с этим классом стоят без поправок.
- У семейства нет префиксов ширины экрана и состояний.

## См. также

- [Оформление текста](/ru/utilities/text-formatting/text-formatting-text/)
- [Начертание цифр](/ru/utilities/typography/font-variant-numeric/)
