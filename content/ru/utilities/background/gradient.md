---
title: "Градиенты"
description: "Шесть готовых градиентов для мест страницы: сияние, оттенок, яркая плашка, обложка, затемнение под подписью и затухание края."
---

# Градиенты

Градиенты украшают место страницы, не мешая читать: сияние за первым экраном,
лёгкий оттенок под шапкой раздела, яркая плашка тарифа, обложка-заглушка без
фото, затемнение под подписью на картинке и затухание края длинного текста.
Каждый вид — один класс `gradient-<вид>`; цвета берутся только из тонов
палитры и шагов прозрачности, поэтому градиент сам подстраивается под светлую
и тёмную тему. Градиент всегда лежит поверх сплошного фона места.

Произвольные переходы из своих точек остаются на страницах
[Вид градиента](/ru/utilities/background/background-gradient-type/) и
[Точки градиента](/ru/utilities/background/background-gradient-stops/).

## Пример

### Шесть видов

:::example {id="utilities/background/gradient" label="gradient-glow, -tint, -duo, -cover, -scrim, -fade"}
:::

### Цвет и направление

Цвет задаёт `gradient-color-<оттенок>`, второй цвет — `gradient-to-<оттенок>`,
направление — `gradient-dir-<сторона>`. Без них берутся primary и tertiary
темы.

:::example {id="utilities/background/gradient-colour" label="gradient-color-*, gradient-to-*, gradient-dir-*"}
:::

### Сила

Сила прозрачных видов (`gradient-glow`, `gradient-tint`) — четыре ступени
прозрачности: 8, 12, 16 (по умолчанию) и 24. Под текстом берите 8 или 12.

:::example {id="utilities/background/gradient-strength" label="gradient-strength-*"}
:::

### Подпись на картинке

`gradient-scrim` затемняет низ картинки плавно, чтобы белая подпись читалась
на любом фото; `gradient-scrim-plate` — сплошная тёмная плашка под короткой
подписью.

:::example {id="utilities/background/gradient-scrim" label="gradient-scrim и gradient-scrim-plate"}
:::

## Классы

| Класс | Что делает |
|:---|:---|
| `gradient-glow` | два мягких пятна цвета в верхних углах, прозрачные; для первого экрана и пустых состояний |
| `gradient-glow-spot` | вместе с `gradient-glow`: одно круглое пятно (`--sf-gradient--spot-x`, `--sf-gradient--spot-y`, `--sf-gradient--spot-size`) |
| `gradient-tint` | прозрачный оттенок от края, гаснущий на `--sf-gradient--tint-size` |
| `gradient-duo` | сплошной переход двух тонов; текст, значки и кнопки внутри сами берут белый |
| `gradient-cover` | светлый (в тёмной теме — тёмный) переход одного оттенка с текстом его тона; для обложек-заглушек |
| `gradient-scrim` | затемнение под подписью на картинке, белый текст |
| `gradient-scrim-plate` | вместе с `gradient-scrim`: сплошная тёмная плашка вместо перехода |
| `gradient-fade` | маска: край элемента плавно исчезает на `--sf-gradient--fade-size` |
| `gradient-text` | градиент в буквах текста |
| `gradient-color-<оттенок>` | основной цвет: `primary`, `secondary`, `tertiary` или оттенок палитры (`red` … `gray`); то же — `sf-hue-<оттенок>` |
| `gradient-to-<оттенок>` | второй цвет перехода |
| `gradient-strength-8`, `-12`, `-16`, `-24` | сила прозрачных видов |
| `gradient-dir-t`, `-tr`, `-r`, `-br`, `-b`, `-bl`, `-l`, `-tl` | направление перехода |

## Переменные

| Переменная | Что задаёт |
|:---|:---|
| `--sf-gradient--angle` | угол перехода; классы `gradient-dir-*` меняют его |
| `--sf-gradient--strength` | сила прозрачных видов, по умолчанию 16 |
| `--sf-gradient--tint-size` | на каком расстоянии гаснет `gradient-tint` |
| `--sf-gradient--fade-size` | ширина затухания `gradient-fade` |
| `--sf-gradient--scrim-ramp` | высота плавной части `gradient-scrim` |
| `--sf-gradient--spot-x`, `--sf-gradient--spot-y`, `--sf-gradient--spot-size` | место и размер пятна `gradient-glow-spot` |

## Применение

| Задача | Класс |
|:---|:---|
| первый экран, пустое состояние | `gradient-glow` |
| шапка раздела, карточка настроек | `gradient-tint` |
| яркая плашка: тариф, призыв | `gradient-duo` |
| обложка без фото, заглушка от 64 px | `gradient-cover` |
| подпись поверх фото | `gradient-scrim` |
| «есть ещё» у обрезанного текста | `gradient-fade` |

```html
<section class="gradient-glow bg-surface-page p-6">…</section>
<div class="gradient-duo gradient-color-teal radius-2 p-4">…</div>
```

## Ограничения

- Градиент задаёт `background-image` и заменяет фоновую картинку того же
  элемента; фото кладите в отдельный элемент под `gradient-scrim`.
- Прозрачные виды рисуются поверх фона места: задайте элементу сплошной фон
  (`bg-surface-page`, `bg-surface-container`).
- Аватары остаются плоскими; `gradient-cover` — для заглушек от 64 px.

## См. также

- [Вид градиента](/ru/utilities/background/background-gradient-type/)
- [Точки градиента](/ru/utilities/background/background-gradient-stops/)
- [Цвет фона](/ru/utilities/background/background-color/)
