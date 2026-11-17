---
title: "Карусель"
description: "Показывает материалы по одному с кнопками перелистывания, пагинацией и автопрокруткой."
profile: reference
---

# Карусель

:badge[sf-carousel]{variant=outline scheme=on-surface size=1/2} :badge[1.4.0]{variant=outline scheme=on-surface size=1/2}

`sf-carousel` — прежнее имя [слайдера контента](/ru/components/overlays-media/slider/).
Во Framework теперь один слайдер: `sf-slider`. Карусель работает до
2027-01-01, а при первом подключении один раз записывается в
`SF.deprecations`. Для новой разметки берите слайдер.

## Пример

:::example {id="components/carousel/overview" label="Карусель"}
:::

## Разметка

Разметку карусели переносят на слайдер так:

| Было | Стало |
|:---|:---|
| `sf-carousel` | `sf-slider` |
| кнопки `sf-carousel-switch` | стрелки слайдера |
| пагинация `sf-carousel-pagination` | точки слайдера и счётчик |
| кнопка `sf-carousel-rotation` | автопрокрутка слайдера с паузой |

## Доступность

Доступность карусели — та же, что у слайдера: область с именем, слайды с
номером «2 из 5», одна остановка клавиши Tab у точек и кнопка паузы у
автопрокрутки. Подробнее — на странице [слайдера](/ru/components/overlays-media/slider/#доступность).

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-carousel` |
| Части | `sf-carousel-pagination`, `sf-carousel-pagination--big`, `sf-carousel-pagination--no-background`, `sf-carousel-pagination--primary`, `sf-carousel-pagination-item`, `sf-carousel-pagination-item--active`, `sf-carousel-rotation`, `sf-carousel-slide`, `sf-carousel-slider`, `sf-carousel-switch`, `sf-carousel-switch--big`, `sf-carousel-switch--left`, `sf-carousel-switch--media`, `sf-carousel-switch--next`, `sf-carousel-switch--prev`, `sf-carousel-switch--primary`, `sf-carousel-switch--right` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид смарт-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-carousel`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-carousel--block-size` | `var(--sf-g3)` | `height`, `block-size` |
| `--sf-carousel-control--backdrop` | `blur(var(--sf-blur-large))` | `backdrop-filter` |
| `--sf-carousel-control--background-color` | `var(--sf-surface-media)` | `background-color` |
| `--sf-carousel-control--color` | `var(--sf-on-surface-media)` | `color` |
| `--sf-carousel-control--radius` | `var(--sf-radius-rounded)` | `border-radius` |
| `--sf-carousel-pagination--backdrop` | не задана; задают модификаторы, например `.sf-carousel-pagination--primary`: `none` | `backdrop-filter` |
| `--sf-carousel-pagination--background-color` | `var(--sf-surface-media)` | `background-color` |
| `--sf-carousel-pagination--radius` | `var(--sf-radius-rounded)` | `border-radius` |
| `--sf-carousel-pagination-item--color` | `var(--sf-on-surface-media)` | `color` |

## См. также

- [движок перелистывания](/ru/components/tools/swiper/)
- [Слайдер контента](/ru/components/overlays-media/slider/)
