---
title: "Слайдер контента"
description: "Показывает равноправные слайды по одному со стрелками, точками и миниатюрами."
profile: reference
---

# Слайдер контента

:badge[sf-slider]{variant=outline scheme=on-surface size=1/2} :badge[2.2.0]{variant=outline scheme=on-surface size=1/2}

Слайдер контента показывает изображения, карточки или другие равноправные
слайды по одному и листает их стрелками и точками.
Подходит, когда все слайды не нужно видеть сразу; обычный список или сетку
слайдером не заменяют.

Что когда брать: слайдер на классах — для статической разметки и шаблонов
сервера; [смарт-слайдер](/ru/smart/content/slider/) `<sf-slider>` рисует ту же
разметку сам и добавляет галерею с миниатюрами; карусель `sf-carousel` —
[прежнее имя](/ru/components/overlays-media/carousel/) этого слайдера.
[Движок перелистывания](/ru/components/tools/swiper/) напрямую берут только
для своей ленты, которой не подходят ни стрелки, ни точки слайдера.

## Пример

:::example {id="components/slider/overview" label="Слайдер со стрелками"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-slider` → `sf-slider-main swiper` → `swiper-wrapper` → `swiper-slide` →
`sf-slider-slide`; рядом `sf-slider-controls` со стрелками `sf-slider-arrows`
и точками `sf-slider-dots`.

- Скрипт компонента находит слайдеры по `.sf-slider` и строит их на движке
  [движок перелистывания](/ru/components/tools/swiper/) из компонента `swiper`.
  Классы `swiper`, `swiper-wrapper` и `swiper-slide` нужны движку.
- Стрелки — кнопки с иконкой (`sf-icon-button`) с классами
  `sf-slider-button-prev` и `sf-slider-button-next` и своими `aria-label`.
- Точки — пустой `sf-slider-dots ... sf-slider-pagination`: кнопки точек
  `sf-slider-dots-dot` по числу слайдов добавляет скрипт.
- Мышь, палец и перо листают слайды протяжкой: если отпустить дальше 15 %
  слайда или смахнуть быстро, показывается соседний слайд, иначе лента
  возвращается. Вертикальное движение прокручивает страницу, протяжка не
  заканчивается щелчком по ссылке под ней, а поля внутри слайда сохраняют
  свои клавиши. `data-swiper-allow-touch-move="false"` выключает протяжку,
  `data-swiper-simulate-touch="false"` — только мышью.
- Слайды, которых не видно, скрипт делает недоступными (`inert`): ссылки и
  кнопки внутри них не получают фокус.
- Миниатюры `sf-slider-thumbnail` в ленте `sf-slider-thumbnails` — кнопки:
  имя каждой берётся из `alt` картинки, показанная отмечена `aria-current`.
  Лента — одна остановка клавиши Tab, стрелки, Home и End листают слайды.
  Готовую галерею с миниатюрами рисует [смарт-слайдер](/ru/smart/content/slider/).
- `data-ratio` (`16/9`, `4/3`, `3/2`, `1/1`, `21/9`) держит ленту со
  слайдами-картинками в этой пропорции.
- `data-autoplay` листает слайды сам, только если рядом показана кнопка паузы
  `sf-slider-rotation`; без неё слайдер не листается. Автопрокрутка встаёт,
  пока фокус внутри слайдера, и не включается при настройке «уменьшить
  движение». Подписи кнопки задают `data-pause-label` и `data-play-label`.

## Варианты

### Положение навигации

`sf-slider--content` • [справочник](#классы)

Без модификатора стрелки и точки лежат поверх слайдов — для изображений и
другой медиа. `sf-slider--content` переносит их одной строкой под слайды и
оставляет слайдам естественную высоту — для карточек с текстом и действиями.
Следующая карточка при этом выглядывает из-за края: видно 1,15 карточки, от
ширины `sm` — 2,2, если число не задано через `data-slides-per-view`.

:::example {id="components/slider/content" label="Положение навигации"}
:::

### Стрелки

`sf-slider-arrows`, `sf-slider-arrows--plate`, `sf-slider-arrows--light`, `sf-slider-arrows--dark` • [справочник](#классы)

`sf-slider-arrows` без модификатора — тихие стрелки без подложки, для
карточек на фоне страницы. `sf-slider-arrows--plate` кладёт каждую стрелку на
плашку всплывающего слоя с тенью, чтобы она читалась поверх любого
изображения. `sf-slider-arrows--light` — светлые круги с тёмными стрелками в
обеих темах: под стрелкой лежит светлая поверхность, наведение и нажатие
ложатся поверх неё. `sf-slider-arrows--dark` — тёмные круги.

:::example {id="components/slider/arrows" label="Стрелки"}
:::

### Точки и счётчик

`sf-slider-dots--plate`, `sf-slider-dots--bare` • [справочник](#классы)

Точки — 8 px при любом размере, текущая вытянута в полоску 24 × 8 основного
цвета.
`sf-slider-dots--plate` кладёт их на плашку поверх картинки,
`sf-slider-dots--bare` ставит в начало строки под карточками. Точки — одна
остановка клавиши Tab: дальше по слайдам ведут стрелки, Home и End. От восьми
слайдов вместо точек стоит счётчик «2 / 12» (`sf-slider-dots--count`).

:::example {id="components/slider/dots" label="Точки на плашке и под карточками"}
:::

### Положение внутри картинки

`data-indicator="inside"` • [Слайдер контента](/ru/smart/content/slider/)

У слайдера картинок и первого экрана атрибут `data-indicator="inside"` на
блоке ставит точки (`sf-slider-dots--bare`) и кнопку паузы поверх нижней части
картинки, на `--sf-slider-dots-offset-block` выше её края (по умолчанию
`--sf-space-2`), без подложки и затемнения; точки и кнопка стоят на одной
линии, счётчик «2 / 12» — в конечном углу. Без атрибута положение стоит под
картинкой. Слайдер карточек (`sf-slider--content`) и слайдер с миниатюрами
держат его под картинкой всегда.

Цвет точек слайдер выбирает сам: при каждой смене слайда, загрузке картинки и
изменении размера он измеряет полосу картинки под точками и берёт светлый цвет
`--sf-on-surface-media` или тёмный `--sf-surface-media-active` — тот, что
заметнее. Где картинку нельзя измерить (с другого сайта без CORS, видео,
фоновое изображение) или полоса слишком пёстрая, точки светлые с кольцом
1 px тёмного цвета. `data-indicator-ink="light"`, `"dark"` или `"outline"`
задают цвет без измерения, а переменная `--sf-slider-indicator-ink` сильнее
всех значений.

У [Слайдера контента](/ru/smart/content/slider/) то же задают атрибуты
`indicator="inside"` и `indicator-ink`; так собран пример.

:::example {id="components/slider/inside" label="Точки поверх картинки"}
:::

### Повтор

По умолчанию слайдер останавливается на первом и последнем слайде.
`data-loop="true"` замыкает ленту — только там, где явные начало и конец не
важны.

:::example {id="components/slider/loop" label="Слайдер с краями и по кругу"}
:::

### Автопрокрутка, пропорция и счётчик

Слайдер с `data-autoplay` листает сам только с кнопкой паузы
`sf-slider-rotation` в `sf-slider-rotation-place`: над картинкой она стоит в
верхнем конечном углу, на плашке. `data-ratio="16/9"` держит ленту в этой
пропорции: слайд заполняет рамку. От восьми слайдов вместо точек стоит
счётчик «2 / 12».

:::example {id="components/slider/autoplay" label="Восемь слайдов с паузой и пропорцией 16/9"}
:::

## Состояния

Состояния стрелок и точек ставит скрипт по положению ленты. Наведение
компонент показывает сам.

### На краю

На первом слайде стрелка «назад», на последнем — «вперёд» получает класс
`swiper-button-disabled` и приглушается; при `data-loop="true"` краёв нет.
Точка текущего слайда получает класс `active`.

:::example {id="components/slider/state-boundary" label="Слайдер на первом слайде"}
:::

### Фокус

При переходе клавишей Tab стрелка и точка получают кольцо фокуса по
`:focus-visible`. В примере фокус показан классом `focus-visible`.

:::example {id="components/slider/state-focus" label="Стрелка и точка в фокусе"}
:::

## Доступность

- Стрелкам нужны понятные `aria-label`: «Предыдущий слайд», «Следующий слайд».
  Точки получают имена «Перейти к слайду 1» и так далее на языке страницы,
  текущая точка — `aria-current="true"`.
- Слайдер — область (`role="region"`) с описанием «карусель» и именем:
  `aria-label` или `aria-labelledby` страницы, иначе `data-label`, иначе
  «Слайды».
- Каждый слайд — группа с описанием «слайд» и именем по месту: «2 из 5».
  Другие слова задают `data-slide-label` (`{n}`, `{count}`) и
  `data-slide-roledescription`.
- Порядок слайдов в разметке — порядок чтения. Важную информацию не прячьте
  только внутри слайдера.
- Видимые слайды остаются в порядке Tab, скрытые выходят из него.
- При `prefers-reduced-motion` слайды сменяются без анимации, а автопрокрутка
  выключается.
- Автопрокрутку (`data-autoplay="true"`) включайте только вместе с видимой
  кнопкой паузы: скрипт останавливает её при фокусе внутри слайдера и на
  скрытой вкладке. Кнопка меняет значок и имя: «Остановить прокрутку» и
  «Запустить прокрутку».

## JavaScript

Настройки читаются из атрибутов `data-*` на `sf-slider` или на
`sf-slider-main`:

| Атрибут | Что задаёт |
|:---|:---|
| `data-loop` | повтор по кругу |
| `data-slides-per-view` | сколько слайдов видно сразу (по умолчанию 1) |
| `data-speed` | длительность смены в миллисекундах; по умолчанию `--sf-slider--duration` |
| `data-autoplay`, `data-autoplay-delay` | автопрокрутка и пауза между слайдами (по умолчанию 3000) |
| `data-swiper-keyboard="true"` | стрелки клавиатуры листают слайды, когда фокус внутри ленты |
| `data-swiper-initial-slide` | номер слайда при открытии, с нуля |
| `data-swiper-options` | параметры движка JSON-объектом, например `breakpoints` |

`SF.Slider` управляет слайдером из кода; `root` — элемент `sf-slider`:

| Функция | Что делает |
|:---|:---|
| `SF.Slider.bind(root)` | подключает слайдер и возвращает экземпляр Swiper |
| `SF.Slider.refresh(root)` | пересчитывает слайдер после изменения слайдов |
| `SF.Slider.unbind(root)` | отключает слайдер |

`bind` возвращает `null`, пока движок Swiper не загружен; скрипт подключает
слайдер сам, как только движок загрузится. Экземпляр создаёт события
`slideChange`, `transitionEnd`, `autoplayStart` и `autoplayStop` и даёт
методы `slideTo(index)`, `slideNext()` и `slidePrev()`. В примере страница
ждёт экземпляр и подписывает текущий слайд по событию `slideChange`.

:::example {id="components/slider/slide-change" label="Номер слайда" preview=sandbox}
:::

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-slider` |
| Части | `sf-slider-arrows`, `sf-slider-arrows--dark`, `sf-slider-arrows--light`, `sf-slider-arrows--plate`, `sf-slider-button-next`, `sf-slider-button-prev`, `sf-slider-controls`, `sf-slider-dots`, `sf-slider-dots--bare`, `sf-slider-dots--clear`, `sf-slider-dots--count`, `sf-slider-dots--dark`, `sf-slider-dots--framed`, `sf-slider-dots--light`, `sf-slider-dots--plate`, `sf-slider-dots--primary`, `sf-slider-dots--size-1`, `sf-slider-dots--size-2`, `sf-slider-dots--timed`, `sf-slider-dots-current`, `sf-slider-dots-dot`, `sf-slider-dots-total`, `sf-slider-main`, `sf-slider-pagination`, `sf-slider-rotation-place`, `sf-slider-slide`, `sf-slider-thumbnail`, `sf-slider-thumbnails` |
| Модификаторы | `sf-slider--content` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-slider`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-slider-gap` | Расстояние между слайдами, кнопками управления и миниатюрами. | `var(--sf-space-1)` |
| `--sf-slider-arrow-offset-inline` | Насколько стрелки над картинкой отступают от её краёв (--sf-space-2 начиная с component.slider 2.0.0). | `var(--sf-space-2)` |
| `--sf-slider-dots-offset-block` | Насколько указатель позиции и кнопка паузы поднимаются над нижним краем картинки, когда стоят внутри неё (data-indicator="inside", component.slider 2.2.0). Под картинкой это расстояние — промежуток блока, --sf-slider-gap. | `var(--sf-space-2)` |
| `--sf-slider-thumbnail-size` | Сторона миниатюры. | `var(--sf-d2)` |
| `--sf-slider-thumbnail-radius` | Углы миниатюры. | `var(--sf-radius--ui)` |
| `--sf-slider-indicator-ink` | Цвет указателя позиции внутри картинки (data-indicator="inside"), заданный вручную; если он не задан, слайдер измеряет картинку и берёт --sf-on-surface-media или --sf-surface-media-active (component.slider 2.1.0). | `var(--sf-on-surface-media)`; зависит от indicator-ink, the measured picture |

```css
.sf-slider {
  --sf-slider-thumbnail-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-slider`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-slider--duration` | `var(--sf-duration-normal)` | — |
| `--sf-slider--ratio` | не задана; задают модификаторы, например `.sf-slider[data-ratio="16/9"]`: `16 / 9` | `aspect-ratio` |
| `--sf-slider--space-between` | `var(--sf-space-1/2)` | — |
| `--sf-slider-arrows--backdrop-filter` | не задана; задают модификаторы, например `.sf-slider-arrows--light`: `var(--sf-ui-blur-medium)` | `backdrop-filter` |
| `--sf-slider-arrows--box-shadow` | не задана; задают модификаторы, например `.sf-slider-arrows--light`: `var(--sf-shadow-raised)` | `box-shadow` |
| `--sf-slider-dots--backdrop-filter` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--clear.sf-slider-dots--framed.sf-slider-dots--dark`: `var(--sf-ui-blur-medium)` | `backdrop-filter` |
| `--sf-slider-dots--background-color` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-primary)` | `background-color` |
| `--sf-slider-dots--border-end-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-end-end-radius` |
| `--sf-slider-dots--border-end-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-end-start-radius` |
| `--sf-slider-dots--border-start-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-start-end-radius` |
| `--sf-slider-dots--border-start-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-start-start-radius` |
| `--sf-slider-dots--box-shadow` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--clear.sf-slider-dots--framed.sf-slider-dots--dark`: `var(--sf-shadow-raised)` | `box-shadow` |
| `--sf-slider-dots--fill-color` | не задана; задают модификаторы, например `.sf-slider[data-indicator=inside]:not(.sf-slider--content):not(:has(> .sf-slider-thumbnails)) .sf-slider-dots--timed.sf-slider-dots--bare`: `var(--sf-slider-indicator-ink, var(--sf-slider-indicator--ink))` | `background-color` |
| `--sf-slider-dots--gap` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-space-1/3)` | `gap`, `width`, `outline` |
| `--sf-slider-dots--padding-bottom` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-bottom` |
| `--sf-slider-dots--padding-inline-end` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-inline-end` |
| `--sf-slider-dots--padding-inline-start` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-inline-start` |
| `--sf-slider-dots--padding-top` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-top` |
| `--sf-slider-dots-dot--active-color` | не задана; задают модификаторы, например `.sf-slider-dots:is(.sf-slider-dots--plate, .sf-slider-dots--bare)`: `var(--sf-primary)` | `--sf-slider-dots-dot--background-color`, `--sf-slider-dots--fill-color`, `color` |
| `--sf-slider-dots-dot--active-width` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-c2)` | `width` |
| `--sf-slider-dots-dot--background-color` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `transparent` | `background-color` |
| `--sf-slider-dots-dot--border-end-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-slider-dots-dot--border-end-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-slider-dots-dot--border-start-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-slider-dots-dot--border-start-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-slider-dots-dot--color` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-on-surface)` | `--sf-slider-dots-dot--background-color`, `--sf-slider-dots--fill-color`, `--sf-slider-dots-dot--active-color`, `color` |
| `--sf-slider-dots-dot--height` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-a8)` | `padding-top`, `padding-bottom`, `height`, `inline-size` |
| `--sf-slider-dots-dot--target-size` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-ui-1/3--control-height)` | `padding-inline-start`, `padding-top`, `padding-inline-end`, `padding-bottom`, `height`, `margin-bottom`, `margin-block-end`, `min-height`, `min-block-size` |
| `--sf-slider-dots-dot--width` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-a8)` | `padding-inline-start`, `padding-inline-end`, `width` |
| `--sf-slider-indicator--dot-opacity` | не задана; задают модификаторы, например `.sf-slider[data-indicator=inside]:not(.sf-slider--content):not(:has(> .sf-slider-thumbnails))`: `var(--sf-opacity-80)` | `opacity` |
| `--sf-slider-indicator--ink` | не задана; задают модификаторы, например `.sf-slider[data-indicator=inside]:not(.sf-slider--content):not(:has(> .sf-slider-thumbnails))`: `var(--sf-slider-indicator--ink-light)` | `--sf-slider-dots-dot--color`, `--sf-slider-dots-dot--active-color`, `--sf-slider-dots--fill-color`, `--sf-slider-indicator--ring`, `--sf-slider-indicator--ink` |
| `--sf-slider-indicator--ink-dark` | не задана; задают модификаторы, например `.sf-slider[data-indicator=inside]:not(.sf-slider--content):not(:has(> .sf-slider-thumbnails))`: `var(--sf-surface-media-active)` | `--sf-slider-indicator--ring`, `--sf-slider-indicator--ink` |
| `--sf-slider-indicator--ink-light` | не задана; задают модификаторы, например `.sf-slider[data-indicator=inside]:not(.sf-slider--content):not(:has(> .sf-slider-thumbnails))`: `var(--sf-on-surface-media)` | `--sf-slider-indicator--ink` |
| `--sf-slider-indicator--ring` | не задана; задают модификаторы, например `.sf-slider[data-indicator=inside]:not(.sf-slider--content):not(:has(> .sf-slider-thumbnails))`: `var(--sf-slider-indicator--ink-dark)` | `box-shadow`, `text-shadow` |
| `--sf-slider-thumbnails--space-between` | `var(--sf-space-1/2)` | — |

## См. также

- [движок перелистывания](/ru/components/tools/swiper/)
- [Смарт-слайдер](/ru/smart/content/slider/)
