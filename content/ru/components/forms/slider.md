---
title: "Слайдер контента"
description: "Показывает равноправные слайды по одному со стрелками, точками и миниатюрами."
profile: reference
---

# Слайдер контента

Слайдер контента показывает изображения, карточки или другие равноправные
слайды по одному и листает их стрелками и точками.
Подходит, когда все слайды не нужно видеть сразу; обычный список или сетку
слайдером не заменяют.

## Пример

:::example {id="components/slider/overview" label="Слайдер со стрелками и точками"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-slider` → `sf-slider-main swiper` → `swiper-wrapper` → `swiper-slide` →
`sf-slider-slide`; рядом `sf-slider-controls` со стрелками `sf-slider-arrows`
и точками `sf-slider-dots`.

- Скрипт компонента находит слайдеры по `.sf-slider` и строит их на движке
  [Swiper](/ru/components/overlays-media/swiper/) из компонента `swiper`.
  Классы `swiper`, `swiper-wrapper` и `swiper-slide` нужны движку.
- Стрелки — кнопки с иконкой (`sf-icon-button`) с классами
  `sf-slider-button-prev` и `sf-slider-button-next` и своими `aria-label`.
- Точки — пустой `sf-slider-dots ... sf-slider-pagination`: кнопки точек
  `sf-slider-dots-dot` по числу слайдов добавляет скрипт.
- Стрелки и точки необязательны, но без них слайды листаются только из кода
  или клавишами (см. JavaScript): перетаскивания жестом движок не знает.
- Слайды, которых не видно, скрипт делает недоступными (`inert`): ссылки и
  кнопки внутри них не получают фокус.
- В CSS есть классы ленты миниатюр `sf-slider-thumbnails` и
  `sf-slider-thumbnail`, но движок выпуска не связывает миниатюры со
  слайдами: нажатие на миниатюру слайд не меняет.

## Варианты

### Положение навигации

Без модификатора стрелки и точки лежат поверх слайдов — для изображений и
другой медиа. `sf-slider--content` переносит их под слайды и оставляет слайдам
естественную высоту — для карточек с текстом и действиями.

:::example {id="components/slider/content" label="Навигация поверх слайдов и под ними"}
:::

### Стрелки

`sf-slider-arrows` без модификатора — стрелки без подложки. `--light` и
`--dark` добавляют размытый фон и тень, чтобы стрелки читались поверх любого
изображения: `--light` со светлыми кнопками, `--dark` с тёмными.

:::example {id="components/slider/arrows" label="Стрелки без подложки, светлые и тёмные"}
:::

### Цвет точек

`sf-slider-dots--primary` красит точки основным цветом — для слайдера на фоне
страницы. `sf-slider-dots--clear` — нейтральным цветом текста.

:::example {id="components/slider/dots" label="Основные и нейтральные точки"}
:::

### Подложка точек

`sf-slider-dots--framed` кладёт точки на подложку со скруглением; `--light` и
`--dark` выбирают светлую или тёмную подложку. Подложка нужна точкам поверх
изображения.

:::example {id="components/slider/dots-framed" label="Точки на светлой и тёмной подложке"}
:::

### Размер точек

Две ступени — `sf-slider-dots--size-1` и `sf-slider-dots--size-2`. Область
нажатия у точки больше самой точки.

:::example {id="components/slider/dots-sizes" label="Размеры точек"}
:::

### Повтор

По умолчанию слайдер останавливается на первом и последнем слайде.
`data-loop="true"` замыкает ленту — только там, где явные начало и конец не
важны.

:::example {id="components/slider/loop" label="Слайдер с краями и по кругу"}
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
- Каждый слайд получает `role="group"` и имя «1 / 3»; скрытые слайды —
  `aria-hidden="true"`.
- Порядок слайдов в разметке — порядок чтения. Важную информацию не прячьте
  только внутри слайдера.
- Видимые слайды остаются в порядке Tab, скрытые выходят из него.
- При `prefers-reduced-motion` слайды сменяются без анимации, а автопрокрутка
  выключается.
- Автопрокрутку (`data-autoplay="true"`) включайте только вместе с видимой
  кнопкой паузы: скрипт останавливает её при фокусе внутри слайдера и на
  скрытой вкладке.

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

```js
const root = document.querySelector('.sf-slider');
const swiper = SF.Slider.bind(root);
swiper?.on('slideChange', () => console.log(swiper.realIndex));
```

`bind` возвращает `null`, пока движок Swiper не загружен; скрипт подключает
слайдер сам, когда он появится. Экземпляр создаёт события `slideChange`,
`transitionEnd`, `autoplayStart` и `autoplayStop` и даёт методы
`slideTo(index)`, `slideNext()` и `slidePrev()`.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-slider` |
| Части | `sf-slider-arrows`, `sf-slider-arrows--dark`, `sf-slider-arrows--light`, `sf-slider-button-next`, `sf-slider-button-prev`, `sf-slider-controls`, `sf-slider-dots`, `sf-slider-dots--clear`, `sf-slider-dots--dark`, `sf-slider-dots--framed`, `sf-slider-dots--light`, `sf-slider-dots--primary`, `sf-slider-dots--size-1`, `sf-slider-dots--size-2`, `sf-slider-dots-dot`, `sf-slider-main`, `sf-slider-pagination`, `sf-slider-slide`, `sf-slider-thumbnail`, `sf-slider-thumbnails` |
| Модификаторы | `sf-slider--content` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-slider`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-slider-gap` | Расстояние между слайдами, кнопками управления и миниатюрами. | `var(--sf-space-1)` |
| `--sf-slider-arrow-offset-inline` | Насколько стрелки отстоят от краёв. | `var(--sf-space-1)` |
| `--sf-slider-dots-offset-block` | Насколько точки отстоят от нижнего края. | `var(--sf-space-1)` |
| `--sf-slider-thumbnail-size` | Сторона миниатюры. | `var(--sf-d2)` |
| `--sf-slider-thumbnail-radius` | Углы миниатюры. | `var(--sf-radius-square)` |

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
| `--sf-slider--space-between` | `var(--sf-space-1)` | — |
| `--sf-slider-arrows--backdrop-filter` | не задана; задают модификаторы, например `.sf-slider-arrows--light`: `var(--sf-ui-blur-medium)` | `backdrop-filter` |
| `--sf-slider-arrows--box-shadow` | не задана; задают модификаторы, например `.sf-slider-arrows--light`: `var(--sf-blur-medium)` | `box-shadow` |
| `--sf-slider-dots--backdrop-filter` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--clear.sf-slider-dots--framed.sf-slider-dots--dark`: `var(--sf-ui-blur-medium)` | `backdrop-filter` |
| `--sf-slider-dots--background-color` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-primary)` | `background-color` |
| `--sf-slider-dots--border-end-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-end-end-radius` |
| `--sf-slider-dots--border-end-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-end-start-radius` |
| `--sf-slider-dots--border-start-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-start-end-radius` |
| `--sf-slider-dots--border-start-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots--framed`: `var(--sf-radius-3)` | `border-start-start-radius` |
| `--sf-slider-dots--box-shadow` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--clear.sf-slider-dots--framed.sf-slider-dots--dark`: `var(--sf-blur-medium)` | `box-shadow` |
| `--sf-slider-dots--gap` | не задана; задают модификаторы, например `.sf-slider-dots--size-1`: `var(--sf-space-1/2)` | `gap`, `outline` |
| `--sf-slider-dots--padding-bottom` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-bottom` |
| `--sf-slider-dots--padding-inline-end` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-inline-end` |
| `--sf-slider-dots--padding-inline-start` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-inline-start` |
| `--sf-slider-dots--padding-top` | не задана; задают модификаторы, например `.sf-slider-dots.sf-slider-dots--size-1.sf-slider-dots--primary.sf-slider-dots--framed.sf-slider-dots--light`: `var(--sf-ui-1--space-y)` | `padding-top` |
| `--sf-slider-dots-dot--background-color` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `transparent` | `background-color` |
| `--sf-slider-dots-dot--border-end-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-end-end-radius` |
| `--sf-slider-dots-dot--border-end-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-end-start-radius` |
| `--sf-slider-dots-dot--border-start-end-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-start-end-radius` |
| `--sf-slider-dots-dot--border-start-start-radius` | не задана; задают модификаторы, например `.sf-slider-dots .sf-slider-dots-dot`: `var(--sf-radius-circle)` | `border-start-start-radius` |
| `--sf-slider-dots-dot--color` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-on-surface)` | `color`, `--sf-slider-dots-dot--background-color` |
| `--sf-slider-dots-dot--height` | не задана; задают модификаторы, например `.sf-slider-dots--size-1`: `var(--sf-a8)` | `padding-top`, `padding-bottom`, `height` |
| `--sf-slider-dots-dot--target-size` | не задана; задают модификаторы, например `.sf-slider-dots`: `var(--sf-ui-1/3--control-height)` | `gap`, `padding-inline-start`, `padding-top`, `padding-inline-end`, `padding-bottom`, `width`, `height` |
| `--sf-slider-dots-dot--width` | не задана; задают модификаторы, например `.sf-slider-dots--size-1`: `var(--sf-a8)` | `gap`, `padding-inline-start`, `padding-inline-end`, `width` |
| `--sf-slider-thumbnails--space-between` | `var(--sf-space-1/2)` | — |

## См. также

- [Swiper](/ru/components/overlays-media/swiper/)
- [Slider — Smart-компонент](/ru/smart-components/forms/slider/)
