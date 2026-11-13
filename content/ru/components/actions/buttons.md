---
title: "Кнопки"
description: "Запускает действие на странице: сохраняет, отправляет форму, подтверждает выбор."
profile: reference
---

# Кнопки

:badge[sf-button]{variant=tonal scheme=primary size=1/2} :badge[1.10.1]{variant=outline scheme=on-surface size=1/2}

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
второстепенное, например «Отмена»; `ghost` — самое лёгкое, в строке таблицы или
рядом с текстом. `surface` нужен на цветном фоне или поверх изображения: его
заливка и граница — полупрозрачные ступени
[нейтральной шкалы](/ru/guide/colour/palettes/), поэтому одна
запись верна в обеих темах и на любом фоне.

:::example {id="components/buttons/variants" label="Виды кнопки"}
:::

### Схема

Схема задаёт цвет классом `sf-button--{схема}`: `primary` — акцентное действие,
`on-surface` — нейтральное, `danger` — необратимое или опасное, например
«Удалить»; оно рисуется красным цветом ошибки. `secondary` есть только у
вида `tonal`; прочерк в таблице — сочетание, которого нет.

:::example {id="components/buttons/schemes" label="Сочетания вида и схемы"}
:::

Тихой кнопке рядом с полем или в шапке панели ставят два класса:
`sf-button--on-surface sf-button--on-surface-variant`. Заливка, край и
состояния у неё от `on-surface`, а текст и иконка окрашены
`--sf-on-surface-variant`. У вида `default` цвет остаётся обратным.

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

### Высота

Высота меняет только высоту кнопки, а размер текста и значков остаётся тем,
что задал класс размера. Берите её, когда кнопка должна встать вровень с
соседями другой высоты или выделиться без крупного текста. Класс высоты
ставят рядом с классом размера `sf-button--size-*`; без класса кнопка
стандартной высоты своего размера.

:::example {id="components/buttons/height" label="Высота кнопки"}
:::

| Класс | Высота при `sf-button--size-1` | Когда брать |
|:---|:---|:---|
| `sf-button--height-low` | 32 | плотные таблицы и панели |
| без класса | 40 | почти везде |
| `sf-button--height-high` | 48 | крупное одиночное действие |
| `sf-button--height-highest` | 56 | самое крупное одиночное действие |

Каждая ступень — ступень [линейки высот](/ru/guide/size-and-type/size-ladder/)
размера кнопки. Боковые поля растут вместе с высотой, поэтому расстояние от
края до значка не меняется. В компактной области (`data-sf-density="compact"`)
все ступени сдвигаются на одну вниз. Переменные `--sf-button-padding-block` и
`--sf-button-padding-inline` сильнее класса высоты.

### Радиус

Кнопка берёт смысловой радиус контрола (`radius-ui`). `radius-square` убирает
скругление, `radius-rounded` делает края полностью круглыми; `radius-default`
оставлен для совместимости и даёт тот же радиус контрола `--sf-radius--ui`. Другие классы `radius-*` на кнопку не действуют.
Переменная `--sf-button-radius` из раздела «Переменные» не действует на кнопки
с иконкой `sf-icon-button`: квадратную кнопку с иконкой задаёт класс
`radius-square` на каждой кнопке.

:::example {id="components/buttons/radius" label="Радиус кнопки"}
:::

### Сегменты

`segment-start`, `segment-middle` и `segment-end` соединяют соседние кнопки в
один составной элемент: внутренние углы становятся прямыми, общие границы
рисуются один раз. Выбранный сегмент обычно `outline`, остальные — `ghost`.
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

Классы `loading sf-button-state-loading` вместе с нативным `disabled` и
`aria-busy="true"` блокируют повторный запуск. Кнопка в загрузке недоступна,
поэтому любой вид выглядит как недоступная кнопка, и показывает
[спиннер](/ru/components/feedback/spinner/) размером со свою иконку:

- у кнопки с иконкой спиннер встаёт на место иконки — начальной, а если её
  нет, конечной;
- у кнопки без иконки спиннер лежит поверх подписи. Подпись остаётся на месте
  и становится прозрачной, поэтому ширина кнопки не меняется;
- у кнопки с одной иконкой ([кнопка с иконкой](/ru/components/actions/icon-buttons/))
  спиннер встаёт на место иконки.

Подпись остаётся в разметке и остаётся доступным именем кнопки, а
`aria-busy="true"` сообщает о работе. Спиннер окрашен цветом подписи
недоступной кнопки; другой цвет задаёт `--sf-loader--color` на кнопке или
предке. Вид спиннера — [вид страницы](/ru/components/feedback/spinner/#вид-страницы), заданный
`data-sf-spinner`; при системной настройке уменьшения движения спиннер
показывает неподвижный кадр этого вида.

:::example {id="components/buttons/state-loading" label="Кнопки в загрузке"}
:::

Загрузка на каждой ступени размера: кнопка с иконкой, кнопка без иконки
рядом с такой же кнопкой в покое (ширина у них одна) и кнопка с одной
иконкой.

:::example {id="components/buttons/loading-sizes" label="Загрузка на всех размерах"}
:::

Конструктор `Buttons` рисует спиннер сам. В своей разметке поставьте блок
спиннера на место иконки, а у кнопки без иконки — перед подписью с классом
`sf-button-spinner--overlay`:

```html
<button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1 loading sf-button-state-loading" disabled aria-busy="true">
  <span class="sf-loader-container sf-loader--infinite sf-button-spinner sf-button-spinner--overlay" data-infinite="true" aria-hidden="true"></span>
  <span class="sf-button-text-container">Сохранить</span>
</button>
```

Модификатор `sf-button--loading` из списка классов — не состояние загрузки:
он только снимает заливку у сочетаний `sf-button--default` с
`sf-button--primary` и с `sf-button--danger` и спиннера не рисует. Загрузку
задают классы `loading sf-button-state-loading`.

Переменная `--sf-button-loading-stripe` устарела: Framework её не задаёт,
а страница, которая задаёт её сама, до 2026-12-01 получает неподвижные полосы
поверх кнопки в загрузке. Удалите её; цвет спиннера задаёт `--sf-loader--color`.

## Доступность

- Подпись описывает результат действия: «Сохранить», а не «Да».
- Кнопка без видимого текста получает доступное имя через `aria-label`; для
  неё есть [кнопка с иконкой](/ru/components/actions/icon-buttons/).
- Для переключателя используйте `aria-pressed`, для перехода — ссылку `<a>`.
- Недоступность задавайте нативным `disabled`, а не цветом или классом.
- На время загрузки ставьте `aria-busy="true"` и сохраняйте подпись: спиннер
  не должен быть единственным признаком работы. Подпись под спиннером остаётся
  доступным именем кнопки.
- После асинхронного действия сообщите результат рядом с кнопкой или через
  область статуса.
- В режиме высокой контрастности Windows система закрашивает все кнопки
  одинаково, поэтому залитая и тональная кнопки рисуют рамку в 1 px и
  отличаются от контурной. Рамка помещается в высоту кнопки.
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
| `type` | `default` | вид: `default`, `tonal`, `outline`, `surface`, `ghost` |
| `scheme` | `primary` | схема |
| `size` | `1` | размер |
| `icon`, `iconPosition` | —, `start` | иконка и её место: `start` или `end` |
| `iconLeft`, `iconRight` | — | иконки до и после подписи явно |
| `height` | `default` | высота: `low`, `default`, `high`, `highest`; ставит класс `sf-button--height-{значение}` |
| `radius` | — | добавляет класс `radius-{значение}` |
| `loading` | `false` | ставит `loading`, `aria-busy="true"` и `disabled` и рисует спиннер |
| `disabled` | `false` | ставит нативный `disabled` |

`attrs` переносятся на `<button>` как атрибуты; без `type` в `attrs` кнопка
получает `type="button"`.

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-button` |
| Части | `sf-button-shortcut`, `sf-button-spinner`, `sf-button-spinner--overlay`, `sf-button-state-loading`, `sf-button-text-container` |
| Модификаторы | `sf-button--danger`, `sf-button--default`, `sf-button--full-width`, `sf-button--height-high`, `sf-button--height-highest`, `sf-button--height-low`, `sf-button--loading`, `sf-button--on-surface`, `sf-button--on-surface-variant`, `sf-button--outline`, `sf-button--pressed`, `sf-button--primary`, `sf-button--secondary`, `sf-button--surface`, `sf-button--tonal` |
| Размеры | `sf-button--size-1`, `sf-button--size-1/2`, `sf-button--size-1/3`, `sf-button--size-2`, `sf-button--size-3` |
| Устаревшие | `sf-button--error` → `sf-button--danger`, `sf-button--ghost` → `sf-button--link`, `sf-button--link` → `sf-button--ghost` |

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
| `--sf-button-pressed-background-color` | Заливка включённой кнопки-переключателя (`pressed`, `aria-pressed="true"`); наведение, нажатие и отключённое состояние рисуются поверх своими цветами. | `var(--sf-primary-container)` |
| `--sf-button-pressed-color` | Цвет подписи и иконки включённой кнопки-переключателя. | `var(--sf-on-primary-container)` |

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
| `--sf-button--border-bottom-width` | `var(--sf-button-border-width, 0)` | `padding-bottom`, `border-bottom-width` |
| `--sf-button--border-color` | не задана; задают модификаторы, например `.sf-button.sf-button--outline.sf-button--on-surface`: `var(--sf-button-border-color, var(--sf-outline))` | `border-color` |
| `--sf-button--border-inline-end-width` | `var(--sf-button-border-width, 0)` | `padding-inline-end`, `border-inline-end-width` |
| `--sf-button--border-inline-start-width` | `var(--sf-button-border-width, 0)` | `padding-inline-start`, `border-inline-start-width` |
| `--sf-button--border-style` | не задана; задают модификаторы, например `.sf-button--outline`: `solid` | `border-style` |
| `--sf-button--border-top-left-radius` | не задана; задают модификаторы, например `.sf-button.segment-middle`: `var(--sf-radius-square)` | `border-start-start-radius` |
| `--sf-button--border-top-right-radius` | не задана; задают модификаторы, например `.sf-button.segment-start`: `var(--sf-radius-square)` | `border-start-end-radius` |
| `--sf-button--border-top-width` | `var(--sf-button-border-width, 0)` | `padding-top`, `border-top-width` |
| `--sf-button--border-width` | не задана; задают модификаторы, например `.sf-button--outline`: `var(--sf-px)` | `border-width` |
| `--sf-button--focus-ink` | не задана; задают модификаторы, например `.sf-button.sf-button--default.sf-button--primary`: `var(--sf-on-primary)` | `--sf-button--focus-inset` |
| `--sf-button--focus-inset` | не задана; задают модификаторы, например `.sf-button:not(:disabled):not(.disabled).focus-visible`: `inset 0 0 0 var(--sf-focus--offset) var(--sf-button--focus-ink, transparent)` | `box-shadow` |
| `--sf-button--padding-bottom` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-block, var(--sf-ui-1--space-y-tightness-default))` | `padding-bottom` |
| `--sf-button--padding-inline-end` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-inline, var(--sf-ui-1--space-x))` | `padding-inline-end` |
| `--sf-button--padding-inline-start` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-inline, var(--sf-ui-1--space-x))` | `padding-inline-start` |
| `--sf-button--padding-top` | не задана; задают модификаторы, например `.sf-button--size-1`: `var(--sf-button-padding-block, var(--sf-ui-1--space-y-tightness-default))` | `padding-top` |
| `--sf-button--radius` | `var(--sf-button-radius, var(--sf-radius--ui))` | `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-button-spinner--size` | `var(--sf-icon-size-3)` | `--sf-loader-svg-width`, `--sf-loader-svg-height`, `width`, `inline-size`, `height`, `block-size` |
| `--sf-button-text-container--background-color` | не задана; задают модификаторы, например `.sf-button .sf-button-text-container`: `transparent` | `background-color` |
| `--sf-button-text-container--color` | не задана; задают модификаторы, например `.sf-button.sf-button--default.sf-button--primary .sf-button-text-container`: `var(--sf-button-color, var(--sf-on-primary))` | `color` |
| `--sf-button-text-container--font-family` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--tonal.sf-button--secondary .sf-button-text-container`: `var(--sf-text--family)` | `font-family` |
| `--sf-button-text-container--font-size` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--default.sf-button--primary .sf-button-text-container`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-button-text-container--font-weight` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--tonal.sf-button--secondary .sf-button-text-container`: `var(--sf-font-weight-medium)` | `font-weight` |
| `--sf-button-text-container--line-height` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1.sf-button--default.sf-button--primary .sf-button-text-container`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-button-text-container--padding-inline-end` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1 .sf-button-text-container`: `var(--sf-ui-1--text-space-x)` | `padding-inline-end` |
| `--sf-button-text-container--padding-inline-start` | не задана; задают модификаторы, например `.sf-button.sf-button--size-1 .sf-button-text-container`: `var(--sf-ui-1--text-space-x)` | `padding-inline-start` |

## См. также

- [Кнопки с иконкой](/ru/components/actions/icon-buttons/)
- [Группа кнопок](/ru/components/actions/button-group/)
- [Кнопки — смарт-компонент](/ru/smart/actions/buttons/)
