---
title: "Карусель"
description: "Показывает материалы по одному с кнопками перелистывания, пагинацией и автопрокруткой."
profile: reference
---

# Карусель

Карусель показывает материалы по одному в области постоянной высоты: баннеры,
новости, изображения. Она добавляет к движку
[Swiper](/ru/components/overlays-media/swiper/) готовые переключатели,
пагинацию, автопрокрутку с кнопкой паузы и доступную разметку слайдов. Не
прячьте в слайды сведения, без которых нельзя закончить основную задачу.

## Пример

:::example {id="components/carousel/overview" label="Карусель с переключателями и пагинацией"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-carousel` → `sf-carousel-slider swiper` → `swiper-wrapper` → слайды
`swiper-slide sf-carousel-slide`; рядом со слайдером в `sf-carousel` —
переключатели `sf-carousel-switch`, пагинация `sf-carousel-pagination` и
кнопка автопрокрутки `sf-carousel-rotation`.

- Высота карусели постоянна; её задаёт переменная `--sf-carousel--block-size`.
  Ленте `swiper-wrapper` добавьте `h-full`, чтобы слайды заняли эту высоту.
- Переключатели — кнопки с классами `sf-carousel-switch--prev` и
  `sf-carousel-switch--next`; они стоят по краям, в начале и в конце строки с
  учётом направления письма. `sf-carousel-switch--left` и
  `sf-carousel-switch--right` — другие имена тех же классов.
- Пагинацию — пустой `sf-carousel-pagination` — скрипт заполняет кнопками по
  числу слайдов.
- Скрипт компонента находит блоки `.sf-carousel` при загрузке страницы и в
  добавленной позже разметке. Ему нужен движок
  [Swiper](/ru/components/overlays-media/swiper/): карусель ждёт его сама.
- Атрибуты блока: `data-label` — имя карусели, `data-loop="true"` — после
  последнего слайда переходить к первому, `data-speed` — длительность
  перелистывания в миллисекундах.

## Варианты

### Переключатели

Цвет переключателей по умолчанию — основной.
`sf-carousel-switch--secondary-container`, `sf-carousel-switch--surface-zero`
и `sf-carousel-switch--surface-inverse` дают вторичный, светлый и инверсный
фон — выбирайте тот, что читается поверх слайдов. `sf-carousel-switch--big`
увеличивает кнопку до высоты элемента управления ступени `2`.

:::example {id="components/carousel/switches" label="Цвета и размер переключателей"}
:::

### Пагинация

Фон пагинации по умолчанию — основной цвет.
`sf-carousel-pagination--primary-container`,
`sf-carousel-pagination--surface-2`, `sf-carousel-pagination--surface-inverse`
и `sf-carousel-pagination--no-background` меняют фон и цвет точек.
`sf-carousel-pagination--big` увеличивает область нажатия каждой точки до
высоты элемента управления.

:::example {id="components/carousel/pagination" label="Фон и размер пагинации"}
:::

### Автопрокрутка

Автопрокрутку включает `data-autoplay="true"`, но только вместе с кнопкой
`sf-carousel-rotation` и атрибутами `data-play-label` и `data-pause-label` —
именами кнопки в двух состояниях. Без них карусель не прокручивается сама.
`data-delay` задаёт паузу между слайдами в миллисекундах (от 1000, по
умолчанию 5000). Наведение указателя и фокус внутри карусели останавливают
прокрутку, кнопка останавливает и запускает её.

:::example {id="components/carousel/autoplay" label="Автопрокрутка с кнопкой паузы"}
:::

## Доступность

- Скрипт ставит на блок `aria-roledescription="carousel"` и роль `region`,
  если задано имя (`data-label` или `aria-label`), иначе — `group`. Задавайте
  имя всегда.
- Каждый слайд получает `role="group"`, `aria-roledescription="slide"` и имя
  вида «2 / 3»; скрытые слайды — `aria-hidden="true"` и `inert`, поэтому их
  ссылки и кнопки не получают фокус.
- Переключателям нужны доступные имена: «Предыдущий слайд», «Следующий
  слайд». Иконка внутри них — `aria-hidden="true"`.
- Пока автопрокрутка идёт, область слайдов не объявляет смену слайда; на
  паузе — объявляет вежливо (`aria-live="polite"`). Кнопка автопрокрутки
  получает `aria-pressed` и имя из `data-play-label` или `data-pause-label`.
- При системной настройке уменьшения движения слайды сменяются без анимации, а
  автопрокрутка не запускается.

## JavaScript

При каждой смене слайда и запуске или остановке автопрокрутки на блоке
возникает всплывающее событие `sf:carousel-change` с полями `index` (номер
слайда с нуля) и `playing` в `detail`.

```js
document.addEventListener('sf:carousel-change', (event) => {
  console.log(event.detail.index, event.detail.playing);
});
```

Функции `SF.Carousel` принимают блок `.sf-carousel`:

| Функция | Что делает |
|:---|:---|
| `next(root)`, `previous(root)` | перелистывает на слайд вперёд или назад |
| `goTo(root, index)` | показывает слайд с номером `index`, с нуля |
| `play(root)`, `pause(root)` | запускает и останавливает автопрокрутку |
| `getState(root)` | возвращает `{index, playing}` |
| `refresh(root)` | пересчитывает карусель после добавления или удаления слайдов |
| `bind(root)`, `unbind(root)` | подключает карусель к разметке и снимает её |

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-carousel` |
| Части | `sf-carousel-pagination`, `sf-carousel-pagination--big`, `sf-carousel-pagination--no-background`, `sf-carousel-pagination--primary-container`, `sf-carousel-pagination--surface-2`, `sf-carousel-pagination--surface-inverse`, `sf-carousel-pagination-item`, `sf-carousel-pagination-item--active`, `sf-carousel-rotation`, `sf-carousel-slide`, `sf-carousel-slider`, `sf-carousel-switch`, `sf-carousel-switch--big`, `sf-carousel-switch--left`, `sf-carousel-switch--next`, `sf-carousel-switch--prev`, `sf-carousel-switch--right`, `sf-carousel-switch--secondary-container`, `sf-carousel-switch--surface-inverse`, `sf-carousel-switch--surface-zero` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-carousel`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-carousel--block-size` | `var(--sf-g3)` | `height`, `block-size` |
| `--sf-carousel-control--background-color` | `var(--sf-primary)` | `background-color` |
| `--sf-carousel-control--color` | `var(--sf-on-primary)` | `color` |
| `--sf-carousel-pagination--background-color` | `var(--sf-primary)` | `background-color` |
| `--sf-carousel-pagination-item--color` | `var(--sf-on-primary)` | `color` |

## См. также

- [Swiper](/ru/components/overlays-media/swiper/)
- [Слайдер контента](/ru/components/forms/slider/)
