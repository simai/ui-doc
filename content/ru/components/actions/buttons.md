---
title: "Кнопки"
description: "Запускает действие на странице: сохраняет, отправляет форму, подтверждает выбор."
profile: reference
---

# Кнопки

Кнопка запускает действие на текущей странице: сохраняет изменения, отправляет
форму или подтверждает выбор. Для перехода на другую страницу берите ссылку, для
действия без подписи — [кнопку с иконкой](/ru/components/actions/icon-buttons/).

## Пример

:::example {id="components/buttons/basic" label="Базовая кнопка"}
:::

## Разметка

Минимальную разметку показывает пример выше. Обязательны две части:

1. Нативный `<button>` с классами блока `sf-button`, вида
   (`sf-button--default`), схемы (`sf-button--primary`) и размера
   (`sf-button--size-1`).
2. `<span class="sf-button-text-container">` с видимой подписью.

- `type="button"` защищает кнопку от случайной отправки формы. Для основной
  кнопки формы пишите `type="submit"`, для сброса — `type="reset"`.
- Иконка `<i class="sf-icon" aria-hidden="true">` ставится до или после
  контейнера подписи.
- Класс `sf-button` — маркер для Loader: по нему подключаются CSS и
  JavaScript компонента.

### Кнопка или другой элемент

| Задача | Элемент |
|:---|:---|
| Запустить действие на текущей странице | `<button>` с `sf-button` |
| Перейти на другую страницу или к разделу | ссылка `<a href>`; если переход должен выглядеть как кнопка — та же ссылка с классами и частями `sf-button` ([пример](/ru/guide/components/surfaces-and-accessibility/#доступность-что-компонент-даёт-и-что-остаётся-за-автором)) |
| Показать действие только иконкой | [кнопка с иконкой](/ru/components/actions/icon-buttons/) с доступным именем |
| Включать и выключать один параметр | кнопка-переключатель с `aria-pressed` |

Не заменяйте ссылку кнопкой ради внешнего вида: правильный элемент сохраняет
ожидаемую работу клавиатуры, браузера и вспомогательных технологий.

## Варианты

Кнопку описывают независимые оси: вид, схема, размер, иконки, плотность,
радиус и сегменты. На каждой оси кнопка берёт одно значение.

### Вид

Вид задаёт вес действия классом `sf-button--{вид}`: `default` — главное
действие экрана, обычно одно; `tonal` — важное, но не главное; `outline` —
второстепенное, например «Отмена»; `link` — самое лёгкое, в строке таблицы или
рядом с текстом. `surface` нужен на цветном фоне или поверх изображения: его
заливка и граница — полупрозрачные ступени
[нейтральной шкалы](/ru/guide/colour/palettes/), поэтому одна
запись верна в обеих темах и на любом фоне.

:::example {id="components/buttons/variants" label="Виды кнопки"}
:::

### Схема

Схема задаёт цвет классом `sf-button--{схема}`: `primary` — акцентное действие,
`on-surface` — нейтральное, `error` — необратимое или опасное, например
«Удалить». `secondary` есть только у вида `tonal`, `error` нет у вида
`surface`; прочерк в таблице — сочетание, которого нет.

:::example {id="components/buttons/schemes" label="Сочетания вида и схемы"}
:::

Вторичная палитра почти нейтральна, и рядом с `tonal on-surface` кнопка
`tonal secondary` выглядит так же серой. Для мягкой цветной кнопки берите
`tonal primary`.

### Размер

Размеры `1/3`, `1/2`, `1`, `2` и `3` согласованно меняют высоту, внутренние
отступы, текст и иконку. Размер `1` — основной для форм и панелей; размер
кнопки совпадает с размером полей той же строки.

:::example {id="components/buttons/sizes" label="Размеры кнопки"}
:::

### Иконки

Иконка стоит перед подписью, после неё или с двух сторон; порядок задаёт HTML.
Её размер следует за размером кнопки. Декоративной иконке задавайте
`aria-hidden="true"`.

:::example {id="components/buttons/icons" label="Иконки в кнопке"}
:::

### Плотность

Плотность меняет вертикальные отступы, не меняя размер текста. Без класса
отступы обычные; `spacing-compact` подходит плотным таблицам и панелям,
`spacing-comfortable` и `spacing-spacious` — крупным одиночным действиям.
Ставьте на кнопку один класс плотности.

:::example {id="components/buttons/tightness" label="Плотность кнопки"}
:::

Имена `tightness-low`, `tightness-high` и `tightness-highest` работают так же,
как `spacing-compact`, `spacing-comfortable` и `spacing-spacious`, но читаются
наоборот: «low» в них значит «мало места». В разметке пишите `spacing-*`.

### Радиус

Кнопка берёт смысловой радиус контрола (`radius-ui`). `radius-square` убирает
скругление, `radius-rounded` делает края полностью круглыми; `radius-default`
даёт совместимое значение `--sf-radius-default` — постоянные 4 px, не связанные
с ролью `--sf-radius--ui`. Другие классы `radius-*` на кнопку не действуют.
Переменная `--sf-button-radius` из раздела «Переменные» не действует на кнопки
с иконкой `sf-icon-button`: квадратную кнопку с иконкой задаёт класс
`radius-square` на каждой кнопке.

:::example {id="components/buttons/radius" label="Радиус кнопки"}
:::

### Сегменты

`segment-start`, `segment-middle` и `segment-end` соединяют соседние кнопки в
один составной элемент: внутренние углы становятся прямыми, общие границы
рисуются один раз. Выбранный сегмент обычно `outline`, остальные — `link`.
Группе нужна семантика: `role="group"` и общее доступное имя.

:::example {id="components/buttons/segments" label="Сегментированные кнопки"}
:::

## Состояния

Наведение и нажатие кнопка показывает сама. Остальные состояния задаёт
разметка; классы показывают состояние, но не управляют запросом: приложение
ставит их перед операцией, снимает после неё и сообщает результат.

### Фокус

При переходе клавишей Tab кнопка получает кольцо фокуса по `:focus-visible`;
щелчок мышью кольца не показывает. В примере фокус показан классом
`focus-visible`, который CSS компонента читает наравне с `:focus-visible`.

:::example {id="components/buttons/state-focus" label="Кнопки в фокусе"}
:::

### Нажатая

Класс `active` вместе с `aria-pressed="true"` оставляет кнопку-переключатель
нажатой. Доступное имя при переключении не меняется: состояние сообщает
`aria-pressed`.

:::example {id="components/buttons/state-active" label="Кнопки-переключатели"}
:::

### Недоступная

Нативный `disabled` даёт любому виду серый вид недоступной кнопки: она не
получает фокус и не запускает действие. Класс `disabled` только отключает
эффекты наведения, нажатия и фокуса; вид недоступной он даёт лишь варианту
`sf-button--surface`. Атрибут `aria-disabled="true"` стилей не меняет и
действие не блокирует.

:::example {id="components/buttons/state-disabled" label="Недоступные кнопки"}
:::

### Загрузка

Класс `loading` вместе с `disabled` и `aria-busy="true"` блокирует повторный
запуск и выводит поверх кнопки бегущие полоски. Кнопка в загрузке одновременно
недоступна, поэтому любой вид выглядит как недоступная кнопка; полоски — ступень
нейтральной шкалы, одинаковая для всех видов и обеих тем. При системной
настройке уменьшения движения полоски не движутся.

Модификатор `sf-button--loading` из списка классов — не состояние загрузки:
он только снимает заливку у сочетаний `sf-button--default` с
`sf-button--primary` и с `sf-button--error` и полосок не рисует. Загрузку
задаёт класс `loading`.

:::example {id="components/buttons/state-loading" label="Кнопки в загрузке"}
:::

## Доступность

- Подпись описывает результат действия: «Сохранить», а не «Да».
- Кнопка без видимого текста получает доступное имя через `aria-label`; для
  неё есть [кнопка с иконкой](/ru/components/actions/icon-buttons/).
- Для переключателя используйте `aria-pressed`, для перехода — ссылку `<a>`.
- Недоступность задавайте нативным `disabled`, а не цветом или классом.
- На время загрузки ставьте `aria-busy="true"` и сохраняйте подпись: анимация не
  должна быть единственным признаком работы.
- После асинхронного действия сообщите результат рядом с кнопкой или через
  область статуса.
- Логические отступы и края сегментов зеркалятся при письме справа налево
  (`dir="rtl"`). Перенос и растягивание кнопок на узком экране задают утилиты
  контейнера: у самого компонента нет модификаторов ширины экрана.

## JavaScript

Компонент регистрирует класс `Buttons`, который собирает кнопку из параметров.
`SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('Buttons', callback)` передаёт класс сразу, если он уже
зарегистрирован, иначе после регистрации.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Buttons', (Buttons) => {
  const button = new Buttons({
    param: {text: 'Сохранить', type: 'default', scheme: 'primary', size: '1', icon: 'save'},
    attrs: {type: 'submit'},
  });
  document.querySelector('#actions').append(button.render());
}));
```

| Параметр `param` | По умолчанию | Назначение |
|:---|:---|:---|
| `text` | пусто | подпись |
| `type` | `default` | вид: `default`, `tonal`, `outline`, `surface`, `link` |
| `scheme` | `primary` | схема |
| `size` | `1` | размер |
| `icon`, `iconPosition` | —, `start` | иконка и её место: `start` или `end` |
| `iconLeft`, `iconRight` | — | иконки до и после подписи явно |
| `spacing` | — | плотность: `compact`, `normal`, `comfortable`, `spacious`; при заданном `spacing` параметр `tightness` не учитывается |
| `radius` | — | добавляет класс `radius-{значение}` |
| `loading` | `false` | ставит `loading`, `aria-busy="true"` и `disabled` |
| `disabled` | `false` | ставит нативный `disabled` |

`attrs` переносятся на `<button>` как атрибуты; без `type` в `attrs` кнопка
получает `type="button"`.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-button` |
| Части | `sf-button-text-container` |
| Модификаторы | `sf-button--default`, `sf-button--error`, `sf-button--link`, `sf-button--loading`, `sf-button--on-surface`, `sf-button--outline`, `sf-button--primary`, `sf-button--secondary`, `sf-button--surface`, `sf-button--tonal` |
| Размеры | `sf-button--size-1`, `sf-button--size-1/2`, `sf-button--size-1/3`, `sf-button--size-2`, `sf-button--size-3` |
| Устаревшие | `sf-button--ghost` → `sf-button--link` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-button`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-button-background-color` | Заливка в спокойном состоянии; у наведения, нажатия и недоступности своя. | `var(--sf-primary)`; зависит от вида, схемы |
| `--sf-button-color` | Цвет подписи в спокойном состоянии. | `var(--sf-on-primary)`; зависит от вида, схемы |
| `--sf-button-border-color` | Цвет рамки в спокойном состоянии; виден при ненулевой ширине рамки. | `transparent`; зависит от вида, схемы |
| `--sf-button-border-width` | Ширина рамки со всех сторон (у вида outline — var(--sf-px)). | `0`; зависит от вида |
| `--sf-button-radius` | Скругление углов. | `var(--sf-radius--ui)` |
| `--sf-button-padding-inline` | Отступ до и после содержимого по строчной оси. | `var(--sf-ui-1--space-x)`; зависит от размера |
| `--sf-button-padding-block` | Отступ над и под содержимым. | `var(--sf-ui-1--space-y-tightness-default)`; зависит от размера, spacing |

```css
.sf-button {
  --sf-button-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-button`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-button--background-color` | не задана; задают модификаторы, например `.sf-button.sf-button--default.sf-button--primary`: `var(--sf-button-background-color, var(--sf-primary))` | `background-color` |
| `--sf-button--border-bottom-left-radius` | не задана; задают модификаторы, например `.sf-button.segment-middle`: `var(--sf-radius-square)` | `border-end-start-radius` |
| `--sf-button--border-bottom-right-radius` | не задана; задают модификаторы, например `.sf-button.segment-start`: `var(--sf-radius-square)` | `border-end-end-radius` |
| `--sf-button--border-bottom-width` | не задана; задают модификаторы, например `.sf-button--outline`: `var(--sf-button-border-width, var(--sf-px))` | `padding-bottom`, `border-bottom-width` |
| `--sf-button--border-color` | не задана; задают модификаторы, например `.sf-button.sf-button--outline.sf-button--primary`: `var(--sf-button-border-color, var(--sf-outline))` | `border-color` |
| `--sf-button--border-inline-end-width` | не задана; задают модификаторы, например `.sf-button--outline`: `var(--sf-button-border-width, var(--sf-px))` | `padding-inline-end`, `border-inline-end-width` |
| `--sf-button--border-inline-start-width` | не задана; задают модификаторы, например `.sf-button--outline`: `var(--sf-button-border-width, var(--sf-px))` | `padding-inline-start`, `border-inline-start-width` |
| `--sf-button--border-style` | не задана; задают модификаторы, например `.sf-button--outline`: `solid` | `border-style` |
| `--sf-button--border-top-left-radius` | не задана; задают модификаторы, например `.sf-button.segment-middle`: `var(--sf-radius-square)` | `border-start-start-radius` |
| `--sf-button--border-top-right-radius` | не задана; задают модификаторы, например `.sf-button.segment-start`: `var(--sf-radius-square)` | `border-start-end-radius` |
| `--sf-button--border-top-width` | не задана; задают модификаторы, например `.sf-button--outline`: `var(--sf-button-border-width, var(--sf-px))` | `padding-top`, `border-top-width` |
| `--sf-button--border-width` | не задана; задают модификаторы, например `.sf-button--outline`: `var(--sf-px)` | `border-width` |
| `--sf-button--focus-ink` | не задана; задают модификаторы, например `.sf-button.sf-button--default.sf-button--primary`: `var(--sf-on-primary)` | `--sf-button--focus-inset` |
| `--sf-button--focus-inset` | не задана; задают модификаторы, например `.sf-button:not(:disabled):not(.disabled).focus-visible`: `inset 0 0 0 var(--sf-focus--offset) var(--sf-button--focus-ink, transparent)` | `box-shadow` |
| `--sf-button--padding-bottom` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-block, var(--sf-ui-1--space-y-tightness-default))` | `padding-bottom` |
| `--sf-button--padding-inline-end` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-inline, var(--sf-ui-1--space-x))` | `padding-inline-end` |
| `--sf-button--padding-inline-start` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-inline, var(--sf-ui-1--space-x))` | `padding-inline-start` |
| `--sf-button--padding-top` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-block, var(--sf-ui-1--space-y-tightness-default))` | `padding-top` |
| `--sf-button--radius` | `var(--sf-button-radius, var(--sf-radius--ui))` | `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-button-loading-stripe` | `var(--sf-alpha-8)` | `background-image` |
| `--sf-button-text-container--background-color` | не задана; задают модификаторы, например `.sf-button .sf-button-text-container`: `transparent` | `background-color` |
| `--sf-button-text-container--color` | не задана; задают модификаторы, например `.sf-button.sf-button--default.sf-button--primary .sf-button-text-container`: `var(--sf-button-color, var(--sf-on-primary))` | `color` |
| `--sf-button-text-container--font-family` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--tonal.sf-button--secondary .sf-button-text-container`: `var(--sf-text--family)` | `font-family` |
| `--sf-button-text-container--font-size` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--tonal.sf-button--secondary .sf-button-text-container`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-button-text-container--font-weight` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--tonal.sf-button--secondary .sf-button-text-container`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-button-text-container--line-height` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--tonal.sf-button--secondary .sf-button-text-container`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-button-text-container--padding-inline-end` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1 .sf-button-text-container`: `var(--sf-ui-1--text-space-x)` | `padding-inline-end` |
| `--sf-button-text-container--padding-inline-start` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1 .sf-button-text-container`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start` |

## См. также

- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
- [Группа кнопок](/ru/components/actions/button-group/)
- [Buttons — Smart-компонент](/ru/smart-components/actions/buttons/)
