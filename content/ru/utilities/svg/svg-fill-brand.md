---
title: "Брендовая SVG-заливка"
description: "Заливает значок SVG фирменным цветом социальной сети или сервиса."
---

# Брендовая SVG-заливка

Классы этой группы задают `fill` фирменным цветом сервиса: `fill-telegram`,
`fill-vk`, `fill-youtube` и другие. Берите их для значков ссылок на
социальные сети.

## Пример

### Цвета

:::example {id="utilities/svg/svg-fill-brand" label="Фирменные цвета"}
:::

### При наведении

Наведите указатель на значок: нейтральный значок принимает фирменный цвет.

:::example {id="utilities/svg/svg-fill-brand-hover" label="hover:fill-* фирменного цвета"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `fill-fb` | `fill: #2B74E1` | — |
| `fill-youtube` | `fill: #F60D00` | — |
| `fill-whatsapp` | `fill: #30B944` | — |
| `fill-wechat` | `fill: #2CAD19` | — |
| `fill-tiktok` | `fill: #000000` | — |
| `fill-sinaweibo` | `fill: #E32429` | — |
| `fill-qq` | `fill: #000000` | — |
| `fill-telegram` | `fill: #36A7E7` | — |
| `fill-snapchat` | `fill: #FDFC02` | — |
| `fill-kuaishou` | `fill: #F74908` | — |
| `fill-qzone` | `fill: #FACE00` | — |
| `fill-pinterest` | `fill: #CD0900` | — |
| `fill-twitter` | `fill: #349AEF` | — |
| `fill-reddit` | `fill: #F74502` | — |
| `fill-quora` | `fill: #B92C26` | — |
| `fill-msteams` | `fill: #2C3794` | — |
| `fill-linkedin` | `fill: #2466C2` | — |
| `fill-vk` | `fill: #0077FF` | — |
| `fill-viber` | `fill: #7360F2` | — |
| `fill-vimeo` | `fill: #1AB7EA` | — |
| `fill-ok` | `fill: #EE8208` | — |
| `fill-tumblr` | `fill: #001935` | — |
| `fill-behance` | `fill: #0057FF` | — |
| `fill-soundcloud` | `fill: #FF5500` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:fill-fb`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

### Нейтральный значок с цветом при наведении

Ряд значков соцсетей спокойнее в нейтральном цвете; фирменный цвет появляется
при наведении:

```html
<a href="https://t.me/…" aria-label="Telegram">
  <svg class="svg-3 fill-on-surface-variant hover:fill-telegram transition" viewBox="0 0 24 24" aria-hidden="true">…</svg>
</a>
```

Цвет фона кнопки соцсети задают классы
[фирменного цвета фона](/ru/utilities/background/background-color-brand/).

## Ограничения

- Фирменные цвета заданы числом и не меняются вместе с темой. `fill-tiktok` и
  `fill-qq` — чёрные, `fill-tumblr` — почти чёрный: на тёмной поверхности они
  не видны. Для тёмной темы дайте значку подложку или нейтральный цвет роли.
- У значка-ссылки без текста нужна подпись: `aria-label` у ссылки.
- Префиксов ширины экрана у семейства нет.

## См. также

- [Цвет заливки](/ru/utilities/svg/svg-fill-color/)
- [Фирменный цвет фона](/ru/utilities/background/background-color-brand/)
