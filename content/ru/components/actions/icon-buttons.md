---
title: "Кнопки с иконкой"
description: "Запускает компактное действие, которое показывает только иконка."
profile: reference
---

# Кнопки с иконкой

Кнопка с иконкой запускает действие без видимой подписи: редактировать,
удалить, открыть настройки. Берите её, когда иконка общепринята и места мало;
если действие нельзя однозначно узнать по иконке, нужна
[кнопка](/ru/components/actions/buttons/) с текстом.

## Пример

:::example {id="components/icon-buttons/overview" label="Кнопка с иконкой"}
:::

## Разметка

Минимальную разметку показывает пример выше: нативный
`<button type="button">` с классами блока `sf-icon-button`, содержимого
(`sf-icon-button--icon`), вида (`sf-icon-button--default`), схемы
(`sf-icon-button--primary`) и размера (`sf-icon-button--size-1`), внутри —
иконка `<i class="sf-icon" aria-hidden="true">`.

- `aria-label` обязателен: это единственное доступное имя кнопки.
- Цвета вида и схемы действуют только вместе с классом содержимого
  `sf-icon-button--icon` или `sf-icon-button--close`.
- Размер иконки следует за размером кнопки: класс размера на иконку не
  нужен.

## Варианты

Кнопку описывают независимые оси: вид, схема, содержимое, размер,
плотность, радиус и сегменты. На каждой оси кнопка берёт одно значение.

### Вид

Вид задаёт вес действия классом `sf-icon-button--{вид}`, как у
[кнопки](/ru/components/actions/buttons/): `default` — главное действие,
`tonal` — важное, но не главное, `outline` — второстепенное, `link` — самое
лёгкое, в строке таблицы или панели инструментов. `surface` нужен на цветном
фоне или поверх изображения: его заливка и граница — полупрозрачные ступени
[нейтральной шкалы](/ru/guide/colour/palettes/), а иконка
сохраняет цвет схемы. Класс `sf-icon-button--ghost` работает так же, как
`link`; в разметке пишите `link`.

:::example {id="components/icon-buttons/variants" label="Виды кнопки с иконкой"}
:::

### Схема

Схема задаёт цвет классом `sf-icon-button--{схема}`: `primary` — акцентное
действие, `on-surface` — нейтральное, `error` — необратимое, например
«Удалить». `secondary` есть только у вида `tonal`, `error` нет у вида
`surface`; прочерк в примере — сочетание, которого нет.

:::example {id="components/icon-buttons/schemes" label="Сочетания вида и схемы"}
:::

### Содержимое

`sf-icon-button--icon` — кнопка с иконкой из шрифта `sf-icon`.
`sf-icon-button--close` — кнопка со [знаком закрытия](/ru/components/actions/close/)
`sf-close`: класс окрашивает знак цветом схемы.

:::example {id="components/icon-buttons/content" label="Иконка и знак закрытия"}
:::

### Размер

Размеры `1/3`, `1/2`, `1`, `2` и `3` согласованно меняют область кнопки и
иконку. Размер кнопки совпадает с размером полей и кнопок той же строки.

:::example {id="components/icon-buttons/sizes" label="Размеры кнопки с иконкой"}
:::

### Плотность

Плотность меняет внутренние отступы выбранного размера. Без класса отступы
обычные; `spacing-compact` подходит плотным таблицам и панелям,
`spacing-comfortable` и `spacing-spacious` — крупным одиночным действиям.
Имена `tightness-low`, `tightness-high` и `tightness-highest` работают так же,
как `spacing-compact`, `spacing-comfortable` и `spacing-spacious`; в разметке
пишите `spacing-*`.

:::example {id="components/icon-buttons/tightness" label="Плотность кнопки с иконкой"}
:::

### Радиус

Кнопка берёт смысловой радиус контрола (`radius-ui`). `radius-square`
убирает скругление, `radius-rounded` делает кнопку круглой; `radius-default`
даёт радиус крупных поверхностей и для кнопки не нужен.

:::example {id="components/icon-buttons/radius" label="Радиус кнопки с иконкой"}
:::

### Сегменты

`segment-start`, `segment-middle` и `segment-end` соединяют соседние кнопки в
один составной элемент: внутренние углы становятся прямыми, общие границы
рисуются один раз. Выбранный сегмент обычно `outline`, остальные — `link`.
Группе нужна семантика: `role="group"` и общее доступное имя.

:::example {id="components/icon-buttons/segments" label="Сегментированные кнопки с иконкой"}
:::

## Состояния

Наведение и нажатие кнопка показывает сама.

### Нажатая

Класс `active` вместе с `aria-pressed="true"` оставляет кнопку-переключатель
нажатой. Доступное имя при переключении не меняется: состояние сообщает
`aria-pressed`.

:::example {id="components/icon-buttons/state-active" label="Кнопки-переключатели с иконкой"}
:::

### Недоступная

Нативный `disabled` приглушает кнопку любого вида: она не получает фокус и
не срабатывает. Класс `disabled` только отключает эффекты наведения, нажатия
и фокуса; вид недоступной он даёт лишь варианту `sf-icon-button--surface`.
Своего состояния загрузки у кнопки с иконкой нет: на время операции ставьте
`disabled` и `aria-busy="true"` и сообщайте результат текстом.

:::example {id="components/icon-buttons/state-disabled" label="Недоступные кнопки с иконкой"}
:::

### Фокус

При переходе клавишей Tab кнопка получает кольцо фокуса по `:focus-visible`;
щелчок мышью кольца не показывает. В примере фокус показан классом
`focus-visible`, который CSS читает наравне с `:focus-visible`.

:::example {id="components/icon-buttons/state-focus" label="Кнопки с иконкой в фокусе"}
:::

## Доступность

- `aria-label` называет действие и объект: «Удалить строку», а не «Корзина».
- Иконка декоративная: `aria-hidden="true"`.
- Подсказка `title` не заменяет `aria-label`: её не видят с клавиатуры и на
  сенсорном экране.
- Для переключателя используйте `aria-pressed`; состояние не передавайте
  только цветом.
- Недоступность задавайте нативным `disabled`.
- Логические отступы и края сегментов зеркалятся при письме справа налево.

## JavaScript

Разметка `sf-icon-button` работает без скрипта. Компонент регистрирует класс
`IconButtons`, который собирает кнопку из параметров: `icon`, `size`, `type`
(вид), `scheme`, `spacing` (`compact`, `comfortable`, `spacious`), `radius`,
`disabled`; `attrs` переносятся на кнопку. Событий компонент не отправляет.
`SF.Loader` появляется к событию `sf-loader-init` на `window`;
`SF.Loader.ready('IconButtons', callback)` передаёт класс, когда он
зарегистрирован.

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('IconButtons', (IconButtons) => {
  const button = new IconButtons({
    param: {icon: 'edit', type: 'link', scheme: 'on-surface', size: '1'},
    attrs: {'aria-label': 'Редактировать строку'},
  });
  document.querySelector('#row-actions').append(button.render());
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-icon-button` |
| Модификаторы | `sf-icon-button--close`, `sf-icon-button--default`, `sf-icon-button--error`, `sf-icon-button--ghost`, `sf-icon-button--icon`, `sf-icon-button--link`, `sf-icon-button--on-surface`, `sf-icon-button--outline`, `sf-icon-button--primary`, `sf-icon-button--secondary`, `sf-icon-button--surface`, `sf-icon-button--tonal` |
| Размеры | `sf-icon-button--size-1`, `sf-icon-button--size-1/2`, `sf-icon-button--size-1/3`, `sf-icon-button--size-2`, `sf-icon-button--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-icon-button`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-icon-button--background-color` | не задана; задают модификаторы, например `.sf-icon-button.sf-icon-button--default.sf-icon-button--primary.sf-icon-button--icon`: `var(--sf-primary)` | `background-color` |
| `--sf-icon-button--border-bottom-left-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-middle`: `var(--sf-radius-square)` | `border-end-start-radius` |
| `--sf-icon-button--border-bottom-right-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-start`: `var(--sf-radius-square)` | `border-end-end-radius` |
| `--sf-icon-button--border-bottom-width` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `var(--sf-px)` | `padding-bottom`, `border-bottom-width` |
| `--sf-icon-button--border-color` | не задана; задают модификаторы, например `.sf-icon-button.sf-icon-button--outline.sf-icon-button--primary.sf-icon-button--icon`: `var(--sf-outline)` | `border-color` |
| `--sf-icon-button--border-inline-end-width` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `var(--sf-px)` | `padding-inline-end`, `border-inline-end-width` |
| `--sf-icon-button--border-inline-start-width` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `var(--sf-px)` | `padding-inline-start`, `border-inline-start-width` |
| `--sf-icon-button--border-style` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `solid` | `border-style` |
| `--sf-icon-button--border-top-left-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-middle`: `var(--sf-radius-square)` | `border-start-start-radius` |
| `--sf-icon-button--border-top-right-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-start`: `var(--sf-radius-square)` | `border-start-end-radius` |
| `--sf-icon-button--border-top-width` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `var(--sf-px)` | `padding-top`, `border-top-width` |
| `--sf-icon-button--border-width` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `var(--sf-px)` | `border-width` |
| `--sf-icon-button--focus-ink` | не задана; задают модификаторы, например `.sf-icon-button.sf-icon-button--default.sf-icon-button--primary`: `var(--sf-on-primary)` | `--sf-icon-button--focus-inset` |
| `--sf-icon-button--focus-inset` | не задана; задают модификаторы, например `.sf-icon-button:not(:disabled):not(.disabled).focus-visible`: `inset 0 0 0 var(--sf-focus--offset) var(--sf-icon-button--focus-ink, transparent)` | `box-shadow` |
| `--sf-icon-button--padding-bottom` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-bottom` |
| `--sf-icon-button--padding-inline-end` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-inline-end` |
| `--sf-icon-button--padding-inline-start` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-inline-start` |
| `--sf-icon-button--padding-top` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-ui-1--space-y-tightness-default)` | `padding-top` |
| `--sf-icon-button--radius` | `var(--sf-radius--ui)` | `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-icon-button-loading-stripe` | `var(--sf-alpha-8)` | `background-image` |

## См. также

- [Кнопки](/ru/components/actions/buttons/)
- [Закрытие](/ru/components/actions/close/)
- [Группа кнопок](/ru/components/actions/button-group/)
- [Icon Buttons — Smart-компонент](/ru/smart-components/actions/icon-buttons/)
