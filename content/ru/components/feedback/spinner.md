---
title: "Спиннер"
description: "Показывает, что операция выполняется, когда её длительность и процент неизвестны."
profile: reference
---

# Спиннер

:badge[sf-loader]{variant=outline scheme=on-surface size=1/2} :badge[1.5.1]{variant=outline scheme=on-surface size=1/2}

Спиннер показывает, что операция выполняется, когда процент завершения
неизвестен. Если процент известен, берите
[индикатор прогресса](/ru/components/feedback/progress-bar/); для формы или
карточки с предсказуемой геометрией лучше подходит
[скелетон](/ru/components/feedback/skeleton/).

Спиннер — единственный индикатор загрузки SIMAI Framework. На каждой ступени
размера он равен иконке кнопки той же ступени, поэтому встаёт на место
иконки без подгонки; так его показывает
[кнопка в загрузке](/ru/components/actions/buttons/#загрузка).

## Пример

:::example {id="components/spinner/basic" label="Спиннер с подписью"}
:::

## Разметка

Минимальная разметка — один пустой блок `sf-loader-container` с атрибутами.
Изображение и подпись скрипт компонента достраивает сам: часть
`sf-loader--loading-indicator` с SVG-дугой и подпись `sf-loader--text`.

- `data-infinite="true"` повторяет анимацию, пока спиннер на странице. Без
  него анимация проходит один цикл и останавливается, поэтому для ожидания
  неизвестной длительности атрибут обязателен.
- `data-label` — видимая подпись под изображением. Пустой `data-label` или его
  отсутствие скрывает спиннер от экранного диктора.
- `data-label-hidden="true"` убирает подпись с экрана и оставляет её
  экранному диктору — см. [Подпись только для диктора](#подпись-только-для-диктора).
- `data-delay` — задержка показа в миллисекундах — см. [Задержка показа](#задержка-показа).
- Блок выравнивает содержимое по центру своей ширины.
- Размер задаёт класс ступени `sf-loader--size-…`; без него спиннер
  ступени `1`.

Вид у спиннера один — дуга постоянной длины, около трети кольца, которая
равномерно вращается, один оборот в секунду. Прежние виды `breathing`,
`comet` и `dots` в `data-variant`, часть `sf-loader--circles` и атрибут
`data-sf-spinner` на странице работают до 1 января 2027 года и рисуют ту же
дугу; в новой разметке их не пишут. Заставка с логотипом SIMAI, которую
Framework показывает при загрузке страницы, — не спиннер.

## Варианты

### Размер

`sf-loader--size-1/3`, `sf-loader--size-1/2`, `sf-loader--size-1` • [справочник](#классы)

Пять ступеней общей лестницы размеров — `sf-loader--size-1/3`,
`sf-loader--size-1/2`, `sf-loader--size-1`, `sf-loader--size-2` и
`sf-loader--size-3`. На каждой ступени диаметр спиннера равен иконке
`sf-button` того же размера, а толщина линии — толщине линии этой иконки.
Класс меняет и кегль подписи.

| Ступень | Диаметр на узком экране | Диаметр на экране шире 60rem |
|:---|:---|:---|
| `1/3` | 16 | 16 |
| `1/2` | 16 | 20 |
| `1` | 20 | 24 |
| `2` | 24 | 28 |
| `3` | 24 | 36 |

Берите ступень того элемента, рядом с которым стоит спиннер: кнопки, поля,
строки списка. Для ожидания целой области подходят `2` и `3`.

:::example {id="components/spinner/sizes" label="Размеры спиннера"}
:::

### Цвет

Отдельный спиннер рисуется тихим цветом места — `on-surface-variant`, тише
текста рядом; подпись под ним того же цвета. Цвет текста на предке его не
меняет. Спиннер внутри кнопки, кнопки с иконкой, бейджа или модального окна
берёт цвет этого элемента. Другой цвет задаёт утилита цвета на самом спиннере
(`color-primary`) или переменная `--sf-spinner-color`. На цветной плашке
задайте цвет её текста, например `color-on-primary`: серая дуга на ней не
видна.

:::example {id="components/spinner/color" label="Цвет спиннера"}
:::

## Состояния

### Задержка показа

`data-delay` — через сколько миллисекунд после появления спиннер становится
виден, от 0 до 60000. Пока задержка не прошла, спиннер держит своё место, но
не виден: короткое ожидание обходится без мелькания. С `data-delay` без
числа — через секунду, `data-delay="0"` показывает сразу. Без атрибута
спиннер виден сразу. Нажмите кнопку примера: оба спиннера появляются в
разметке одновременно.

:::example {id="components/spinner/delay" label="Задержка показа"}
:::

### Подпись только для диктора

`data-label-hidden="true"` вместе с `data-label` убирает подпись с экрана, а
экранный диктор её по-прежнему читает. Так спиннер без видимых слов не
остаётся безымянным.

:::example {id="components/spinner/label-hidden" label="Подпись видна и скрыта"}
:::

## Доступность

- Область, которая ждёт данных, получает `aria-busy="true"` до окончания
  загрузки.
- Спиннер с подписью читается как обычный текст. Чтобы подпись объявлялась
  при появлении, задайте `data-announce="true"`: скрипт поставит
  `role="status"` и `aria-live="polite"`.
- Спиннер без подписи скрыт от экранного диктора; тогда о загрузке сообщает
  соседний текст или `aria-busy`.
- При системной настройке уменьшения движения анимация останавливается, и
  спиннер показывает неподвижную дугу в те же 30 % кольца.

## JavaScript

Скрипт компонента находит блоки `.sf-loader-container` при загрузке страницы
и в добавленной позже разметке. После изменения атрибутов перерисуйте
спиннер через `SF.Spinner.render(element)`.

Компонент регистрирует класс `Spinner`. `SF.Loader` появляется к событию
`sf-loader-init` на `window`; `SF.Loader.ready('Spinner', callback)` передаёт
класс, когда он зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Spinner', (Spinner) => {
  const spinner = new Spinner({param: {label: 'Загрузка', infinite: true}});
  document.querySelector('#results').append(spinner.render());
}));
```

Параметры повторяют атрибуты: `label`, `infinite`, `announce`,
`labelHidden` и `delay`. Собранный так спиннер по умолчанию показывается
через секунду (`delay: 1000`); `delay: 0` показывает его сразу. Подпись по умолчанию — на
языке страницы, «Загрузка…» на русской; задайте свою. Диаметр и линию собранного спиннера задаёт класс ступени
`sf-loader--size-…` на нём или его ступень `1` по умолчанию. Событий
компонент не отправляет.

## Классы

| Что | Классы |
|:---|:---|
| Части | `sf-loader-comet`, `sf-loader-comet-segment`, `sf-loader-container`, `sf-loader-dot`, `sf-loader-dot--active`, `sf-loader-dots`, `sf-loader-ring-accent`, `sf-loader-ring-filled`, `sf-loader-svg` |
| Модификаторы | `sf-loader--circles`, `sf-loader--infinite`, `sf-loader--label-hidden`, `sf-loader--loading-indicator`, `sf-loader--pixel-geometry`, `sf-loader--text` |
| Размеры | `sf-loader--size-1`, `sf-loader--size-1/2`, `sf-loader--size-1/3`, `sf-loader--size-2`, `sf-loader--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-loader-container`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-spinner-color` | Дуга, точки или комета: текущий цвет текста, если не задано. | `currentColor` |
| `--sf-spinner-track-color` | Кольцо под дугой — цвет и прозрачность вместе: своей прозрачности у кольца нет. | `color-mix(in srgb, currentColor 16%, transparent)` |
| `--sf-spinner-size` | Рамка рисунка; по умолчанию — значок кнопки того же размера. | `var(--sf-text-height-1)`; зависит от размера |
| `--sf-spinner-stroke-width` | Толщина кольца в единицах сетки значка из 24 единиц. | `2` |
| `--sf-spinner-gap` | Расстояние между рисунком и его словами. | `var(--sf-space-1/2)`; зависит от размера |
| `--sf-spinner-text-color` | Слова под рисунком: цвет самого индикатора (currentColor) — on-surface-variant у отдельного индикатора и цвет элемента внутри кнопки или другого элемента управления. | `currentColor` |

```css
.sf-loader-container {
  --sf-spinner-color: currentColor;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-loader`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-loader--look-accent` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `inline` | `display` |
| `--sf-loader--look-comet` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `none` | `display` |
| `--sf-loader--look-dash` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `30 70` | `stroke-dasharray` |
| `--sf-loader--look-dots` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `none` | `display` |
| `--sf-loader--look-motion` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `none` | `animation-name`, `animation-duration`, `animation-timing-function` |
| `--sf-loader--look-motion-duration` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `var(--sf-loader-cycle-duration)` | `animation-duration` |
| `--sf-loader--look-motion-easing` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `linear` | `animation-timing-function` |
| `--sf-loader--look-spin` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `sf-loader-svg-rotate` | `animation-name`, `animation-duration` |
| `--sf-loader--look-spin-duration` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `var(--sf-loader-arc-duration)` | `animation-duration` |
| `--sf-loader--look-track` | не задана; задают модификаторы, например `:where([data-sf-spinner]:not([data-sf-spinner=""]))`: `inline` | `display` |
| `--sf-loader-arc-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 2)` | `--sf-loader--look-spin-duration`, `animation-duration` |
| `--sf-loader-breath-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 3)` | — |
| `--sf-loader-comet-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 2)` | — |
| `--sf-loader-cycle-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 6)` | `--sf-loader--look-motion-duration`, `animation-duration` |
| `--sf-loader-dot-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 3)` | `animation`, `animation-delay` |
| `--sf-loader-spin-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 4)` | — |
| `--sf-loader-stroke-width` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-stroke-width, 2)` | `stroke-width` |
| `--sf-loader-svg-height` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-size, var(--sf-text-height-1))` | `height` |
| `--sf-loader-svg-width` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-size, var(--sf-text-height-1))` | `width` |
| `--sf-loader-text-gap` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-gap, var(--sf-space-1/2))` | `gap` |
| `--sf-loader-text-line` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-loader-text-size` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-loader-track-color` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-track-color, color-mix(in srgb, currentColor 16%, transparent))` | `stroke` |

## См. также

- [Прогресс](/ru/components/feedback/progress-bar/)
- [Скелетон](/ru/components/feedback/skeleton/)
- [Спиннер — смарт-компонент](/ru/smart/feedback/spinner/)
