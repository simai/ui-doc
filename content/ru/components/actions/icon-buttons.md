---
title: "Кнопки с иконкой"
description: "Запускает компактное действие, которое показывает только иконка."
profile: reference
---

# Кнопки с иконкой

:badge[sf-icon-button]{variant=tonal scheme=primary size=1/2} :badge[1.4.1]{variant=outline scheme=on-surface size=1/2}

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

`sf-icon-button--default`, `sf-icon-button--tonal`, `sf-icon-button--outline`, `sf-icon-button--ghost` • [справочник](#классы)

Вид задаёт вес действия, как у [кнопки](/ru/components/actions/buttons/):
`default` — главное действие, `tonal` — важное, но не главное, `outline` —
второстепенное, `ghost` — самое лёгкое, без подложки: заливка появляется
только при наведении.

:::example {id="components/icon-buttons/variants" label="Виды кнопки с иконкой"}
:::

### Схема

`sf-icon-button--primary`, `sf-icon-button--on-surface`, `sf-icon-button--on-surface-variant`, `sf-icon-button--danger` • [справочник](#классы)

Схема задаёт цвет: `primary` — акцентное действие, `on-surface` —
нейтральное, `on-surface-variant` — то же нейтральное на ступень тише,
`danger` — опасное, которое удаляет или необратимо, например «Удалить».
Опасное действие кнопка только начинает: спросите подтверждение в
[модальном окне](/ru/smart/overlays/modal/) и выполните действие
после ответа. На время самого действия кнопке ставят класс `loading`, а не
`disabled` (см. [Недоступная](#недоступная)): так окно возвращает фокус на
кнопку.

:::example {id="components/icon-buttons/schemes" label="Сочетания вида и схемы"}
:::

`on-surface-variant` даёт заливку и границу как у `on-surface`, а иконку —
цветом `--sf-on-surface-variant`; при наведении она темнеет до `on-surface`.
Класс ставят вместе с `sf-icon-button--on-surface`. У вида `default` иконка
остаётся как у `on-surface`: на тёмной заливке тише некуда.

| Место | Вид и схема |
|:---|:---|
| Панель редактора, панель инструментов | `ghost` + `on-surface` |
| Строка таблицы, шапка окна, очистка поля | `ghost` + `on-surface-variant` |
| «Добавить» в шапке списка | `default` + `primary` |
| Удаление записи | `ghost` или `outline` + `danger`, затем подтверждение |

### Содержимое

`sf-icon-button--icon`, `sf-icon-button--close` • [справочник](#классы)

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

:::example {id="components/icon-buttons/tightness" label="Плотность кнопки с иконкой"}
:::

### Радиус

Кнопка берёт смысловой радиус контрола (`radius-ui`). `radius-square`
убирает скругление, `radius-rounded` делает кнопку круглой. Общей переменной радиуса, как
`--sf-button-radius` у кнопок, у кнопок с иконкой нет: радиус задаёт класс на
каждой кнопке.

:::example {id="components/icon-buttons/radius" label="Радиус кнопки с иконкой"}
:::

### Сегменты

`segment-start`, `segment-middle` и `segment-end` соединяют соседние кнопки в
один составной элемент: внутренние углы становятся прямыми, общие границы
рисуются один раз. Выбранный сегмент обычно `outline`, остальные — `ghost`.
Группе нужна семантика: `role="group"` и общее доступное имя.

:::example {id="components/icon-buttons/segments" label="Сегменты"}
:::

## Состояния

Наведение и нажатие кнопка показывает сама.

### Нажатая

Класс `active` вместе с `aria-pressed="true"` оставляет кнопку-переключатель
нажатой. Доступное имя при переключении не меняется: состояние сообщает
`aria-pressed`.

:::example {id="components/icon-buttons/state-active" label="Нажатая"}
:::

### Недоступная

Нативный `disabled` приглушает кнопку любого вида: она не получает фокус и
не срабатывает. Класс `disabled` только отключает эффекты наведения, нажатия
и фокуса.
На время операции ставьте кнопке класс `loading`, `aria-busy="true"` и
`aria-disabled="true"`, а результат сообщайте текстом. `loading` показывает
спиннер на месте иконки и не пропускает указатель, но фокус остаётся на кнопке, и `Enter` её
по-прежнему нажимает, поэтому обработчик пропускает нажатие, пока стоит
`aria-busy`. Нативный `disabled` здесь не подходит: он снимает фокус с кнопки,
фокус уходит на `body`, и окно подтверждения, закрывшись, тоже возвращает его
в никуда.

:::example {id="components/icon-buttons/state-disabled" label="Недоступные кнопки с иконкой"}
:::

### Фокус

При переходе клавишей Tab кнопка получает кольцо фокуса по `:focus-visible`;
щелчок мышью кольца не показывает. В примере фокус показан классом
`focus-visible`, который CSS читает наравне с `:focus-visible`.

:::example {id="components/icon-buttons/state-focus" label="Кнопки с иконкой в фокусе"}
:::

### Загрузка

Классы `loading sf-icon-button-state-loading` показывают
[спиннер](/ru/components/feedback/spinner/) на месте иконки, ровно её
размера на каждой ступени, и не пропускают указатель. Конструктор рисует
спиннер сам; в своей разметке поставьте блок спиннера вместо иконки.
Доступное имя из `aria-label` остаётся, `aria-busy="true"` сообщает о работе.
С нативным `disabled` спиннер окрашен цветом недоступной кнопки; другой цвет
задаёт `--sf-loader--color`. Вид спиннера — [вид страницы](/ru/components/feedback/spinner/#вид-страницы); при
уменьшении движения спиннер показывает неподвижный кадр этого вида.

:::example {id="components/icon-buttons/state-loading" label="Загрузка"}
:::

```html
<button type="button" class="sf-icon-button sf-icon-button--icon sf-icon-button--tonal sf-icon-button--primary sf-icon-button--size-1 loading sf-icon-button-state-loading" disabled aria-busy="true" aria-label="Обновить">
  <span class="sf-loader-container sf-loader--infinite sf-icon-button-spinner" data-infinite="true" aria-hidden="true"></span>
</button>
```

Загрузка на всех размерах рядом с обычными кнопками — в разделе
[Загрузка](/ru/components/actions/buttons/#загрузка) кнопок.

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
`disabled`, `loading` (спиннер на месте иконки, `aria-busy` и `disabled`);
`attrs` переносятся на кнопку. Событий компонент не отправляет.
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
| Части | `sf-icon-button-spinner`, `sf-icon-button-state-loading` |
| Модификаторы | `sf-icon-button--close`, `sf-icon-button--default`, `sf-icon-button--error`, `sf-icon-button--ghost`, `sf-icon-button--icon`, `sf-icon-button--link`, `sf-icon-button--on-surface`, `sf-icon-button--on-surface-variant`, `sf-icon-button--outline`, `sf-icon-button--pressed`, `sf-icon-button--primary`, `sf-icon-button--secondary`, `sf-icon-button--surface`, `sf-icon-button--tonal` |
| Размеры | `sf-icon-button--size-1`, `sf-icon-button--size-1/2`, `sf-icon-button--size-1/3`, `sf-icon-button--size-2`, `sf-icon-button--size-3` |
| Устаревшие | `sf-icon-button--danger` → `sf-icon-button--error` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-icon-button`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-icon-button-background-color` | Заливка в покое; у наведения, нажатия, фокуса и недоступности — своя. | `var(--sf-primary)`; зависит от вида, схемы |
| `--sf-icon-button-color` | Цвет значка и крестика в покое; у недоступной — свой. | `var(--sf-on-surface-variant)`; зависит от вида, схемы |
| `--sf-icon-button-border-color` | Цвет рамки в спокойном состоянии; виден при ненулевой ширине рамки. | `transparent`; зависит от вида |
| `--sf-icon-button-border-width` | Толщина рамки со всех сторон (у видов `outline` и `surface` — `var(--sf-px)`). | `0`; зависит от вида |
| `--sf-icon-button-radius` | Скругление углов. | `var(--sf-radius--ui)` |
| `--sf-icon-button-padding-inline` | Отступ до и после значка. | `var(--sf-ui-1--space-y-tightness-default)`; зависит от размера, spacing |
| `--sf-icon-button-padding-block` | Отступ сверху и снизу от значка. | `var(--sf-ui-1--space-y-tightness-default)`; зависит от размера, spacing |
| `--sf-icon-button-pressed-background-color` | Заливка включённой кнопки-переключателя (`pressed`, `aria-pressed="true"`); наведение, нажатие и отключённое состояние рисуются поверх своими цветами. | `var(--sf-primary-container)` |
| `--sf-icon-button-pressed-color` | Цвет иконки включённой кнопки-переключателя. | `var(--sf-on-primary-container)` |

```css
.sf-icon-button {
  --sf-icon-button-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-icon-button`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-icon-button--anchor-radius` | не задана; задают модификаторы, например `.sf-icon-button.radius-default`: `var(--sf-radius--ui)` | — |
| `--sf-icon-button--background-color` | не задана; задают модификаторы, например `.sf-icon-button.sf-icon-button--default.sf-icon-button--primary.sf-icon-button--icon`: `var(--sf-icon-button-background-color, var(--sf-primary))` | `background-color` |
| `--sf-icon-button--border-bottom-left-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-middle`: `var(--sf-radius-square)` | `border-end-start-radius` |
| `--sf-icon-button--border-bottom-right-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-start`: `var(--sf-radius-square)` | `border-end-end-radius` |
| `--sf-icon-button--border-bottom-width` | `var(--sf-icon-button-border-width, 0)` | `padding-bottom`, `border-bottom-width` |
| `--sf-icon-button--border-color` | не задана; задают модификаторы, например `.sf-icon-button.sf-icon-button--outline.sf-icon-button--primary.sf-icon-button--icon`: `var(--sf-icon-button-border-color, var(--sf-outline))` | `border-color` |
| `--sf-icon-button--border-inline-end-width` | `var(--sf-icon-button-border-width, 0)` | `padding-inline-end`, `border-inline-end-width` |
| `--sf-icon-button--border-inline-start-width` | `var(--sf-icon-button-border-width, 0)` | `padding-inline-start`, `border-inline-start-width` |
| `--sf-icon-button--border-style` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `solid` | `border-style` |
| `--sf-icon-button--border-top-left-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-middle`: `var(--sf-radius-square)` | `border-start-start-radius` |
| `--sf-icon-button--border-top-right-radius` | не задана; задают модификаторы, например `.sf-icon-button.segment-start`: `var(--sf-radius-square)` | `border-start-end-radius` |
| `--sf-icon-button--border-top-width` | `var(--sf-icon-button-border-width, 0)` | `padding-top`, `border-top-width` |
| `--sf-icon-button--border-width` | не задана; задают модификаторы, например `.sf-icon-button--outline`: `var(--sf-icon-button-border-width, var(--sf-px))` | `border-width` |
| `--sf-icon-button--focus-ink` | не задана; задают модификаторы, например `.sf-icon-button.sf-icon-button--default.sf-icon-button--primary`: `var(--sf-on-primary)` | `--sf-icon-button--focus-inset` |
| `--sf-icon-button--focus-inset` | не задана; задают модификаторы, например `.sf-icon-button:not(:disabled):not(.disabled).focus-visible`: `inset 0 0 0 var(--sf-focus--offset) var(--sf-icon-button--focus-ink, transparent)` | `box-shadow` |
| `--sf-icon-button--padding-bottom` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-icon-button-padding-block, var(--sf-ui-1--space-y-tightness-default))` | `padding-bottom` |
| `--sf-icon-button--padding-inline-end` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-icon-button-padding-inline, var(--sf-ui-1--space-y-tightness-default))` | `padding-inline-end` |
| `--sf-icon-button--padding-inline-start` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-icon-button-padding-inline, var(--sf-ui-1--space-y-tightness-default))` | `padding-inline-start` |
| `--sf-icon-button--padding-top` | не задана; задают модификаторы, например `.sf-icon-button--size-1`: `var(--sf-icon-button-padding-block, var(--sf-ui-1--space-y-tightness-default))` | `padding-top` |
| `--sf-icon-button--radius` | `var(--sf-icon-button-radius, var(--sf-radius--ui))` | `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`, `border-start-start-radius` |
| `--sf-icon-button-spinner--size` | `var(--sf-icon-size-3)` | `--sf-loader-svg-width`, `--sf-loader-svg-height`, `width`, `inline-size`, `height`, `block-size` |

## См. также

- [Кнопки](/ru/components/actions/buttons/)
- [Кнопка закрытия](/ru/components/actions/close/)
- [Группа кнопок](/ru/components/actions/button-group/)
- [Кнопки с иконкой — смарт-компонент](/ru/smart/actions/icon-buttons/)
