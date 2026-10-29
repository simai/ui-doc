---
title: "Спиннер"
description: "Показывает, что операция выполняется, когда её длительность и процент неизвестны."
profile: reference
---

# Спиннер

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
`sf-loader--loading-indicator` с SVG, в котором нарисованы все четыре вида, и
подпись `sf-loader--text`. Часть `sf-loader--circles`, написанная в
разметке, читается как вид `dots`.

- `data-infinite="true"` повторяет анимацию, пока спиннер на странице. Без
  него анимация проходит один цикл и останавливается, поэтому для ожидания
  неизвестной длительности атрибут обязателен.
- `data-label` — видимая подпись под изображением. Пустой `data-label` или его
  отсутствие скрывает спиннер от экранного диктора.
- Блок выравнивает содержимое по центру своей ширины.
- Размер задаёт класс ступени `sf-loader--size-…`; без него спиннер
  ступени `1`.
- `data-variant` — вид этого спиннера: `arc`, `breathing`, `comet` или
  `dots`. Без него спиннер берёт [вид страницы](#вид-страницы).
- Тонкая настройка вида точек: `data-dots` (число точек, от 3 до 32, по
  умолчанию 8), `data-filled` (число ярких точек, по умолчанию 3),
  `data-direction` (`clockwise` или `counterclockwise`). Размер точек задаёт
  ступень.

### Устаревшие атрибуты

`data-width`, `data-height`, `data-stroke-width` и `data-dot-radius` (и
параметры конструктора `width`, `height`, `strokeWidth`, `dotRadius`) задают
размеры в пикселях. Они устарели и читаются до 2026-12-01: спиннер с любым
из них рисуется в пикселях и попадает в `SF.deprecations.list()`. Уберите их
и задайте ступень классом `sf-loader--size-…`; линия идёт вместе со
ступенью, цвет — из текста или `--sf-loader--color`.

## Варианты

### Вид

Четыре вида нарисованы на одном кольце и на одной лестнице размеров, поэтому
у каждого коробка равна иконке кнопки той же ступени, а цвет — цвету текста:

- `arc` — дуга постоянной длины, около трети кольца, равномерно вращается,
  один оборот в секунду; вид по умолчанию;
- `breathing` — дуга растёт и сжимается, пока кольцо вращается; длина дуги
  меняется, этим вид и отличается от `arc`;
- `comet` — вращающаяся дуга с гаснущим хвостом;
- `dots` — кольцо точек, по которому бежит волна яркости.

Здесь у каждого спиннера свой `data-variant`, чтобы показать виды рядом. На
сайте вид задают один раз для всей страницы.

:::example {id="components/spinner/variant" label="Четыре вида на трёх ступенях рядом с кнопкой"}
:::

### Вид страницы

Один вид во всём интерфейсе: выберите его один раз для сайта и не меняйте от
раздела к разделу. Вид задаёт атрибут `data-sf-spinner` на `html` (или
`body`): `<html lang="ru" data-sf-spinner="comet">`.

Его получают все спиннеры, которые рисует SIMAI Framework: блоки
`sf-loader-container`, `<sf-spinner>`, кнопки и кнопки с иконкой в
загрузке, варианты группы кнопок, подсчёт в пагинации и загрузка содержимого
модального окна.

Атрибут наследуется, как свойство CSS: блок со своим `data-sf-spinner` задаёт
вид для всего, что внутри него, и побеждает ближайший такой предок. Смена
атрибута во время работы страницы сразу меняет все спиннеры, уже нарисованные
и будущие.

Тот же выбор можно сделать в настройках загрузки, до подключения
SIMAI Framework: `window.SF_BOOT_CONFIG = {spinner: 'comet'}` записывает
`data-sf-spinner` на `html`, если страница не задала атрибут сама.

Какой вид победит:

1. Свой вид спиннера — `data-variant` (у `<sf-spinner>` — `kind`).
2. Ближайший предок с `data-sf-spinner`.
3. `data-sf-spinner` на `html` или `body`.
4. `arc`, если вид нигде не задан.

Неизвестное значение означает `arc`; пустое `data-sf-spinner=""` ничего не
задаёт, и блок берёт вид предка.

:::example {id="components/spinner/page-look" label="Вид на html, свой вид блока и свой вид спиннера"}
:::

Заставка с логотипом SIMAI, которую Framework показывает при загрузке
страницы, — не вид спиннера, и `data-sf-spinner` её не меняет.

### Размер

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

:::example {id="components/spinner/sizes" label="Спиннер рядом с кнопкой той же ступени"}
:::

### Цвет

Спиннер рисуется текущим цветом текста (`currentColor`): в обычном тексте он
цвета текста, внутри кнопки — цвета её подписи. Чтобы задать другой цвет,
поставьте цвет текста на предка или задайте публичную переменную
`--sf-loader--color` на спиннере или любом предке.

:::example {id="components/spinner/color" label="Цвет спиннера"}
:::

## Доступность

- Область, которая ждёт данных, получает `aria-busy="true"` до окончания
  загрузки.
- Спиннер с подписью читается как обычный текст. Чтобы подпись объявлялась
  при появлении, задайте `data-announce="true"`: скрипт поставит
  `role="status"` и `aria-live="polite"`.
- Спиннер без подписи скрыт от экранного диктора; тогда о загрузке сообщает
  соседний текст или `aria-busy`.
- При системной настройке уменьшения движения анимация останавливается в
  каждом виде, и спиннер показывает неподвижный кадр: дугу `arc` в те же 30%
  кольца, дугу `breathing` в четверть кольца, комету на месте или точки с
  выделенными яркими.

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

Параметры повторяют атрибуты: `variant`, `label`, `infinite`, `announce`,
`dots`, `filled`, `direction`. Без `variant` конструктор не пишет
`data-variant`, и спиннер берёт вид страницы. Подпись по умолчанию — на
языке страницы, «Загрузка…» на русской; задайте свою. Диаметр и линию собранного спиннера задаёт класс ступени
`sf-loader--size-…` на нём или его ступень `1` по умолчанию. Событий
компонент не отправляет.

## Классы

| Что | Классы |
|:---|:---|
| Части | `sf-loader-comet`, `sf-loader-comet-segment`, `sf-loader-container`, `sf-loader-dot`, `sf-loader-dot--active`, `sf-loader-dots`, `sf-loader-ring-accent`, `sf-loader-ring-filled`, `sf-loader-svg` |
| Модификаторы | `sf-loader--circles`, `sf-loader--infinite`, `sf-loader--loading-indicator`, `sf-loader--pixel-geometry`, `sf-loader--text` |
| Размеры | `sf-loader--size-1`, `sf-loader--size-1/2`, `sf-loader--size-1/3`, `sf-loader--size-2`, `sf-loader--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-loader-container`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-spinner-color` | Дуга, точки или комета: текущий цвет текста, если не задано. | `currentColor` |
| `--sf-spinner-track-color` | Кольцо под дугой. | `var(--sf-surface-container)` |
| `--sf-spinner-size` | Рамка рисунка; по умолчанию — значок кнопки того же размера. | `var(--sf-text-height-1)`; зависит от размера |
| `--sf-spinner-stroke-width` | Толщина кольца в единицах сетки значка из 24 единиц. | `2` |
| `--sf-spinner-gap` | Расстояние между рисунком и его словами. | `var(--sf-space-1/2)`; зависит от размера |
| `--sf-spinner-text-color` | Слова под рисунком. | `var(--sf-on-surface)` |

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
| `--sf-loader-breath-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 3)` | `--sf-loader--look-motion-duration` |
| `--sf-loader-comet-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 2)` | `--sf-loader--look-spin-duration` |
| `--sf-loader-cycle-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 6)` | `--sf-loader--look-motion-duration`, `animation-duration` |
| `--sf-loader-dot-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 3)` | `animation`, `animation-delay` |
| `--sf-loader-spin-duration` | не задана; задают модификаторы, например `.sf-loader-container`: `calc(var(--sf-duration-slow) * 4)` | `--sf-loader--look-spin-duration` |
| `--sf-loader-stroke-width` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-stroke-width, 2)` | `stroke-width` |
| `--sf-loader-svg-height` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-size, var(--sf-text-height-1))` | `height` |
| `--sf-loader-svg-width` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-size, var(--sf-text-height-1))` | `width` |
| `--sf-loader-text-gap` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-gap, var(--sf-space-1/2))` | `gap` |
| `--sf-loader-text-size` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-loader-track-color` | не задана; задают модификаторы, например `.sf-loader-container`: `var(--sf-spinner-track-color, var(--sf-surface-container))` | `stroke` |

## См. также

- [Прогресс](/ru/components/feedback/progress-bar/)
- [Скелетон](/ru/components/feedback/skeleton/)
- [Спиннер — смарт-компонент](/ru/smart-components/feedback/spinner/)
