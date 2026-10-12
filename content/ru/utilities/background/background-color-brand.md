---
title: "Брендовые цвета фона"
description: "Заливает элемент фирменным цветом соцсети или сервиса — для кнопок «поделиться» и ссылок на профили."
---

# Брендовые цвета фона

Классы `bg-{сервис}` заливают элемент фирменным цветом соцсети или
мессенджера. Берите их для кнопок «поделиться» и ссылок на профили, где
узнаваемый цвет сервиса важнее цвета темы.

## Пример

### Цвета сервисов

Под каждым образцом — класс, который его заливает.

:::example {id="utilities/background/background-color-brand" label="Брендовые цвета"}
:::

### Цвет при наведении

С префиксом `hover:` цвет сервиса появляется при наведении указателя.

:::example {id="utilities/background/background-color-brand-hover" label="hover:bg-whatsapp и hover:bg-telegram"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `bg-fb` | `background-color: #2B74E1` | — |
| `bg-fb-messenger` | `background-color: linear-gradient(to bottom, #e72c83 0%, #a742c6 100%)` | — |
| `bg-youtube` | `background-color: #F60D00` | — |
| `bg-whatsapp` | `background-color: #30B944` | — |
| `bg-instagram` | `background-color: #d6249f; background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)` | — |
| `bg-wechat` | `background-color: #2CAD19` | — |
| `bg-tiktok` | `background-color: #000000` | — |
| `bg-sinaweibo` | `background-color: #E32429` | — |
| `bg-qq` | `background-color: #000000` | — |
| `bg-telegram` | `background-color: #36A7E7` | — |
| `bg-snapchat` | `background-color: #FDFC02` | — |
| `bg-kuaishou` | `background-color: #F74908` | — |
| `bg-qzone` | `background-color: #FACE00` | — |
| `bg-pinterest` | `background-color: #CD0900` | — |
| `bg-twitter` | `background-color: #349AEF` | — |
| `bg-reddit` | `background-color: #F74502` | — |
| `bg-quora` | `background-color: #B92C26` | — |
| `bg-skype` | `background-color: #00aff0; background: linear-gradient(#88d9f8, #00aff0)` | — |
| `bg-msteams` | `background-color: #2C3794` | — |
| `bg-linkedin` | `background-color: #2466C2` | — |
| `bg-vk` | `background-color: #0077FF` | — |
| `bg-viber` | `background-color: #7360F2` | — |
| `bg-vimeo` | `background-color: #1AB7EA` | — |
| `bg-ok` | `background-color: #EE8208` | — |
| `bg-tumblr` | `background-color: #001935` | — |
| `bg-behance` | `background-color: #0057FF` | — |
| `bg-soundcloud` | `background-color: #FF5500` | — |

Условия ([что это](/ru/guide/fundamentals/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:bg-fb`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Применение

Брендовый цвет не меняется вместе с темой. Цвет текста и значка на нём
подбирайте сами и проверяйте контраст: на светлых цветах (`bg-snapchat`,
`bg-qzone`) нужен тёмный текст, на остальных — светлый.

```html
<a class="inline-flex items-center gap-1 p-x-3 p-y-2 radius-ui bg-telegram color-white"
   href="https://t.me/share/url?url=…">Telegram</a>
```

Для спокойного ряда кнопок держите нейтральную заливку и показывайте цвет
сервиса только при наведении:

```html
<a class="p-x-3 p-y-2 radius-ui bg-surface-container color-on-surface hover:bg-vk" href="…">VK</a>
```

## Ограничения

- `bg-fb-messenger` в выпуске не закрашивает элемент: класс записывает
  градиент в свойство `background-color`, и браузер отбрасывает это значение.
- `bg-instagram` и `bg-skype` задают градиент свойством `background`; такой
  класс сбрасывает фоновое изображение, размер и положение, заданные другими
  классами.
- Префиксов ширины экрана у семейства нет; из состояний есть только `hover:`.

## См. также

- [Цвет фона](/ru/utilities/background/background-color/)
- [Цвет текста](/ru/utilities/text-formatting/text-color/)
