---
title: "Шаги"
description: "Показывает этапы линейного процесса и место пользователя в нём."
profile: reference
---

# Шаги

:badge[sf-steps]{variant=tonal scheme=primary size=1/2} :badge[1.3.1]{variant=outline scheme=on-surface size=1/2}

Шаги показывают, где человек находится в процессе, который проходит сам, —
оформлении заказа, публикации, настройке, — и отмечают пройденные, текущий и
будущие этапы. Берите их для трёх и
более этапов с постоянным порядком; для разделов без порядка подходят
[вкладки](/ru/components/navigation/tabs/).

## Пример

:::example {id="components/step/overview" label="Шаги оформления заказа"}
:::

## Разметка

Шаги рисует смарт-компонент [`sf-steps`](/ru/smart/navigation/steps/); на
классах ту же разметку пишет сервер. Части вложены так: `sf-steps` →
список `ol.sf-steps-container` → шаги `li.sf-step` → `sf-step-body` →
метка `sf-step-marker` и `sf-step-content` с подписью `sf-step-container`.

- Корень `sf-steps` несёт вид метки (`sf-steps--marker-number` или
  `sf-steps--marker-dot`) и раскладку (`sf-steps--layout-row`,
  `-column` или `-count`).
- Список — `ol` с `role="list"` и `aria-label` с названием процесса.
- Шаг несёт своё состояние `sf-step--state-<слово>`; шаг до текущего — ещё
  `sf-step--passed`: линия после него рисуется цветом хода. Текущему шагу —
  `aria-current="step"`.
- Линию между шагами рисует сам шаг, отдельных разделителей нет.
- Метка декоративная (`aria-hidden="true"`), слово состояния повторяется в
  `sr-only` внутри подписи.

## Варианты

### Состояние шага

`sf-step--state-done`, `-current`, `-ahead`, `-error`, `-skipped`, `-running` • [справочник](#классы)

Состояние видно по форме метки, а не только по цвету: пройденный — заливка
с галочкой, текущий — заливка с кольцом через зазор, впереди — пустой
контур, ошибка — цвет ошибки и «!», пропущенный — пунктир. Шаг, который
выполняется, показывает в метке индикатор загрузки — его рисует смарт-компонент.
Линия — 2 px основного цвета до текущего шага и тонкая линия после него.

:::example {id="components/step/stages" label="Пройден, пропущен, ошибка, текущий, впереди"}
:::

### Метка

`sf-steps--marker-number`, `sf-steps--marker-dot` • [справочник](#классы)

По умолчанию шаги пронумерованы. Точка — для простого статуса и плотных
карточек; формы те же: залитая, залитая с кольцом, пустая.

:::example {id="components/step/markers" label="Номер и точка"}
:::

### Раскладка

`sf-steps--layout-row`, `sf-steps--layout-column`, `sf-steps--layout-count` • [справочник](#классы)

Строка — для трёх–шести коротких шагов. Колонка показывает под подписью
вторую строку `sf-step-text`: дату, время, причину ошибки. Раскладка «счёт» —
строка «Шаг 2 из 5 · Доставка» над полосой хода для узкого места;
смарт-компонент сам выбирает раскладку по ширине (`layout="auto"`).

:::example {id="components/step/state-current" label="Колонка со второй строкой"}
:::

### Размер

`sf-steps--size-1/2`, `sf-step--size-1/2` • [справочник](#классы)

Размер 1 — по умолчанию, метка 24 px. `1/2` — для узкой панели или плотного
экрана: метка 20 px и мелкий текст. Класс ставят и корню, и каждому шагу.

:::example {id="components/step/sizes" label="Размеры 1/2 и 1"}
:::

## Состояния

### Недоступен

`sf-step--disabled` приглушает шаг; добавьте `aria-disabled="true"`.

:::example {id="components/step/state-disabled" label="Недоступные шаги"}
:::

### Переход к шагу

Шаг, на который можно вернуться, — нативная кнопка
`button.sf-step-body.sf-step-control`: она подсвечивается при наведении и
получает кольцо фокуса с клавиатуры. Текущий шаг кнопкой не бывает.

:::example {id="components/step/state-focus" label="Пройденный шаг — кнопка"}
:::

## Доступность

- Шаги — упорядоченный список `ol` с `aria-label`; текущий шаг —
  `aria-current="step"`.
- Состояние повторяйте словом в `sr-only` внутри подписи: форма метки его
  не сообщает.
- Шаги дополняют, а не заменяют заголовок экрана и кнопки «Назад» и «Далее».
- Выбор шага с клавиатуры и событие `sf-steps-change` даёт смарт-компонент
  `sf-steps`.

## Классы

**`sf-steps`**

| Что | Классы |
|:---|:---|
| Блок | `sf-steps` |
| Части | `sf-steps-container`, `sf-steps-count`, `sf-steps-count-label`, `sf-steps-count-line`, `sf-steps-count-position` |
| Модификаторы | `sf-steps--auto`, `sf-steps--layout-column`, `sf-steps--layout-count`, `sf-steps--layout-row`, `sf-steps--marker-dot`, `sf-steps--marker-number` |
| Размеры | `sf-steps--size-1/2` |

**`sf-step`**

| Что | Классы |
|:---|:---|
| Блок | `sf-step` |
| Части | `sf-step-body`, `sf-step-container`, `sf-step-content`, `sf-step-control`, `sf-step-marker`, `sf-step-text` |
| Модификаторы | `sf-step--disabled`, `sf-step--passed`, `sf-step--state-ahead`, `sf-step--state-current`, `sf-step--state-done`, `sf-step--state-error`, `sf-step--state-running`, `sf-step--state-skipped` |
| Размеры | `sf-step--size-1/2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-steps`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-steps-gap` | Промежуток между двумя шагами в строке. | `var(--sf-space-1\/2)` |
| `--sf-steps-separator-color` | Линия между двумя шагами после текущего. | `var(--sf-outline-variant)` |
| `--sf-steps-step-color` | Подпись и номер шага впереди или пропущенного. | `var(--sf-on-surface-variant)` |
| `--sf-steps-step-border-color` | Контур пустой отметки (шаг впереди или пропущенный). | `var(--sf-outline)` |
| `--sf-steps-step-radius` | Радиус углов отметки шага. | `var(--sf-radius-circle)` |
| `--sf-steps-current-border-color` | Кольцо отметки текущего шага (2 px через зазор 2 px). | `var(--sf-steps-completed-icon-color, var(--sf-primary))` |
| `--sf-steps-completed-icon-color` | Цвет хода: отметки пройденных и текущего шагов и линия до текущего шага. | `var(--sf-primary)` |

```css
.sf-steps {
  --sf-steps-step-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-steps`, `.sf-step`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-step--dot` | `var(--sf-a8)` | `width`, `inline-size`, `height`, `block-size`, `--sf-step--marker-reach` |
| `--sf-step--font-size` | `var(--sf-text-size-1)` | `font-size` |
| `--sf-step--icon` | `var(--sf-text-height-1/2)` | `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width` |
| `--sf-step--line-height` | `var(--sf-text-height-1)` | `line-height`, `height`, `block-size`, `margin-top`, `margin-bottom`, `margin-block`, `top`, `inset-block-start`, `bottom`, `inset-block-end` |
| `--sf-step--marker` | `var(--sf-text-height-1)` | `width`, `inline-size`, `height`, `block-size`, `grid-template-columns`, `margin-top`, `margin-bottom`, `margin-block`, `top`, `inset-block-start`, `bottom`, `inset-block-end`, `inset-inline-start`, `--sf-step--marker-reach` |
| `--sf-step--marker-reach` | не задана; задают модификаторы, например `.sf-steps--marker-number .sf-step`: `var(--sf-step--marker)` | `top`, `inset-block-start`, `bottom`, `inset-block-end` |
| `--sf-step--progress` | `var(--sf-steps-completed-icon-color, var(--sf-primary))` | `border-color`, `background-color`, `outline`, `color` |
| `--sf-step--ring` | `calc(var(--sf-px) * 2)` | `outline`, `outline-offset`, `border`, `padding-top`, `padding-bottom`, `padding-block`, `--sf-step--marker-reach` |
| `--sf-step--small-height` | `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-step--small-size` | `var(--sf-text-size-1/2)` | `font-size` |

## См. также

- [Вкладки](/ru/components/navigation/tabs/)
- [Шаги — смарт-компонент](/ru/smart/navigation/steps/)
