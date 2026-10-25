---
title: "Группа кнопок"
description: "Объединяет связанные кнопки в один элемент с общим внешним контуром."
profile: reference
---

# Группа кнопок

Группа объединяет несколько связанных кнопок в один компактный элемент: соседние
границы сливаются, внешние углы сохраняют радиус кнопок. Берите её для близких
по смыслу действий над одним объектом; для выбора одного значения из нескольких
есть [Smart-компонент Группа кнопок](/ru/smart-components/actions/button-group/),
а в виде утопленной дорожки с плашкой — [сегментный переключатель](/ru/smart-components/actions/segmented/).

## Пример

:::example {id="components/button-group/overview" label="Группа кнопок"}
:::

## Разметка

Минимальную разметку показывает пример выше: контейнер
`<div class="sf-button-group">` и прямые дочерние
[кнопки](/ru/components/actions/buttons/) `sf-button`.

- Кнопки лежат прямыми потомками контейнера: группа соединяет только их.
- Контейнеру нужно доступное имя — `aria-label` или `aria-labelledby`.
  Роль `group` скрипт компонента ставит сам, если роли нет.
- Скрипт расставляет кнопкам классы сегментов `segment-start`,
  `segment-middle` и `segment-end` по их порядку и обновляет их при
  добавлении и удалении кнопок. Писать эти классы вручную не нужно.
- Все кнопки группы берут один размер и одну схему; вид может отличаться,
  например у выбранного действия.
- Группа не переносится на новую строку: если кнопки не помещаются по ширине,
  она прокручивается по горизонтали.

## Варианты

### Ориентация

По умолчанию кнопки стоят в строку. Атрибут `data-orientation="vertical"` на
контейнере ставит их в столбец: кнопки занимают общую ширину группы и
сохраняют один внешний контур. Вертикальная группа подходит узкой боковой
панели. Атрибут `aria-orientation="vertical"` скрипт понимает так же, но
сам переносит значение в `data-orientation`.

:::example {id="components/button-group/orientation" label="Горизонтальная и вертикальная группа"}
:::

## Состояния

### Нажатая кнопка

Кнопка с `aria-pressed="true"` или классом `active` поднимается над соседями:
её граница рисуется поверх общих границ группы. `aria-pressed` ставьте
только настоящей кнопке-переключателю, которая включает и выключает свой
параметр независимо от остальных. Исключение — группа выбора темы из кнопок
`sf-theme-button` с `data-theme`: `aria-pressed` в ней ставит сам Framework,
нажата кнопка выбранного режима (см. [Тема](/ru/components/tools/theme/)).

:::example {id="components/button-group/state-pressed" label="Группа кнопок-переключателей"}
:::

### Фокус

При переходе клавишей Tab кольцо фокуса рисуется внутри текущей кнопки и
поверх общих границ, поэтому соседние сегменты его не обрезают. Щелчок мышью
кольца не показывает. В примере фокус показан классом `focus-visible`, который
CSS читает наравне с `:focus-visible`.

:::example {id="components/button-group/state-focus" label="Кнопка группы в фокусе"}
:::

## Доступность

- Контейнер с ролью `group` и доступным именем сообщает, что кнопки связаны.
- Каждая кнопка остаётся отдельной точкой Tab и сохраняет своё нативное
  действие: группа не перехватывает нажатия.
- Для выбора одного значения из нескольких не собирайте radio-семантику
  вручную: Smart Button Group создаёт `radiogroup` и управляет одной точкой
  Tab. Роль `toolbar` ставьте только настоящей панели инструментов с полной
  клавиатурной моделью стрелок.
- `aria-orientation` скрипт оставляет только ролям, которые его
  поддерживают (`toolbar`, `radiogroup`, `tablist`, `menu`, `listbox`,
  `tree`); у роли `group` он его снимает.
- Внешние углы и границы сегментов зеркалятся при письме справа налево.

## JavaScript

Скрипт компонента находит группы `.sf-button-group` при загрузке страницы,
расставляет роль, ориентацию и классы сегментов и следит за изменением
состава группы. Для разметки, вставленной позже, он даёт две функции:

- `SF.ButtonGroup.init(target)` — подключает все группы внутри `target`
  (по умолчанию `document`) и сам `target`, если это группа;
- `SF.ButtonGroup.sync(group)` — один раз пересчитывает роль, ориентацию и
  сегменты одной группы.

Событий компонент не отправляет. Объект `SF.ButtonGroup` появляется вместе со
скриптом компонента; Loader подключает его, когда находит `.sf-button-group`.
`SF.Loader` появляется к событию `sf-loader-init` на `window`, а
`SF.Loader.ready('ButtonGroup', callback)` вызывает функцию, когда компонент
зарегистрирован:

```js
const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('ButtonGroup', () => {
  SF.ButtonGroup.init(document.querySelector('#toolbar-area'));
}));
```

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-button-group` |
| Части | `sf-button-group-count`, `sf-button-group-icon-only`, `sf-button-group-label--hidden`, `sf-button-group-segment` |
| Модификаторы | `sf-button-group--full-width`, `sf-button-group--on-surface`, `sf-button-group--plate-raised`, `sf-button-group--primary`, `sf-button-group--radius-default`, `sf-button-group--radius-rounded`, `sf-button-group--radius-square`, `sf-button-group--secondary`, `sf-button-group--segmented` |
| Размеры | `sf-button-group--size-1/2`, `sf-button-group--size-1/3`, `sf-button-group--size-2`, `sf-button-group--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-button-group`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-button-group-background-color` | Заливка дорожки сегментированного вида в спокойном состоянии. | `var(--sf-surface-container)`; зависит от вида |
| `--sf-button-group-padding` | Внутренний отступ дорожки сегментированного вида со всех сторон, он же промежуток между сегментами; скругление плашки остаётся концентричным. | `var(--sf-a4)`; зависит от вида, размера |
| `--sf-button-group-radius` | Скругление сегмента и плашки под выбранным — элемента размером с кнопку; дорожка получает его плюс отступ, поэтому углы остаются концентричными. Атрибут `radius`, если задан, важнее. | `var(--sf-button-radius, var(--sf-radius--ui))`; зависит от вида, размера |
| `--sf-button-group-color` | Цвет подписи и иконки невыбранного сегмента в спокойном состоянии; наведение, нажатие и недоступность сохраняют свои цвета. | `var(--sf-on-surface-container--variant)`; зависит от вида |
| `--sf-button-group-plate-background-color` | Заливка плашки под выбранным сегментом; недоступность сохраняет свою. | `var(--sf-primary)`; зависит от вида, схемы |
| `--sf-button-group-plate-color` | Цвет подписи, иконки и числа на плашке выбранного сегмента. | `var(--sf-on-primary)`; зависит от вида, схемы |
| `--sf-button-group-count-color` | Цвет числа в невыбранном сегменте; выбранный берёт цвет содержимого плашки. | `currentColor`; зависит от вида |

```css
.sf-button-group {
  --sf-button-group-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-button-group`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-button-group--count-gap` | не задана; задают модификаторы, например `.sf-button-group.sf-button-group--segmented`: `var(--sf-ui-1--text-space-x)` | `margin-inline-start` |
| `--sf-button-group--padding` | не задана; задают модификаторы, например `.sf-button-group.sf-button-group--segmented`: `var(--sf-button-group-padding, calc(var(--sf-ui-1--space-y-tightness-default) - var(--sf-ui-1--space-y-tightness-low)))` | `--sf-button-group--radius`, `gap`, `padding`, `--sf-button-group--segment-padding-block` |
| `--sf-button-group--plate-radius` | не задана; задают модификаторы, например `.sf-button-group.sf-button-group--segmented`: `var(--sf-button-group-radius, var(--sf-button-radius, var(--sf-radius--ui)))` | `--sf-button-group--radius`, `border-radius` |
| `--sf-button-group--radius` | не задана; задают модификаторы, например `.sf-button-group.sf-button-group--segmented`: `calc(var(--sf-button-group--plate-radius) + var(--sf-button-group--padding))` | `border-radius` |
| `--sf-button-group--segment-padding-block` | не задана; задают модификаторы, например `.sf-button-group--segmented > .sf-button-group-segment`: `max(calc(var(--sf-px) * 0), calc(var(--sf-button--padding-top) - var(--sf-button-group--padding)))` | `padding-top`, `padding-bottom`, `padding-block`, `padding-left`, `padding-right`, `padding-inline` |
| `--sf-button-group--text-height` | не задана; задают модификаторы, например `.sf-button-group.sf-button-group--segmented`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-button-group--text-size` | не задана; задают модификаторы, например `.sf-button-group.sf-button-group--segmented`: `var(--sf-text-size-1)` | `font-size` |

## См. также

- [Кнопки](/ru/components/actions/buttons/)
- [Группа кнопок — Smart-компонент](/ru/smart-components/actions/button-group/)
