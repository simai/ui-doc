---
title: "Шаги"
description: "Показывает этапы линейного процесса и место пользователя в нём."
profile: reference
---

# Шаги

Шаги показывают этапы линейного процесса — оформления заказа, публикации,
настройки — и отмечают завершённые, текущий и будущие. Берите их для трёх и
более этапов с постоянным порядком; для разделов без порядка подходят
[вкладки](/ru/components/navigation/tabs/).

## Пример

:::example {id="components/step/overview" label="Шаги оформления заказа"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`sf-steps` → `sf-steps-container` → шаги `sf-step` и разделители между ними.

- Корень `sf-steps` с размером `sf-steps--size-{размер}` и утилитами
  `flex flex-col`; CSS блоков не задаёт `display`, раскладку дают утилиты.
- `sf-steps-container` с утилитами `flex items-center` выстраивает шаги в
  строку и задаёт расстояние между ними; это список (`role="list"` и
  `aria-label` с названием процесса).
- Шаг `sf-step` с размером `sf-step--size-{размер}`, этапом
  `sf-step--stage-{этап}` и утилитами `flex items-center justify-center`.
  Подпись — в `sf-step-container`, иконка этапа `sf-icon` стоит перед ней.
- Разделитель — иконка `sf-icon` с классом `sf-steps-separator--directional`
  и `aria-hidden="true"`, прямой потомок контейнера: класс разворачивает
  стрелку при письме справа налево.
- Скрипта у компонента нет: состояние шагов задаёт приложение.

## Варианты

### Этап

Этап задаёт цвет иконки шага: `sf-step--stage-default` — этап без отметки,
`sf-step--stage-completed` — завершённый, иконка цветом успеха,
`sf-step--stage-error` — этап с ошибкой, иконка цветом ошибки. Иконку
(`check_circle`, `error`) добавляет автор; подпись у всех трёх одного цвета.

:::example {id="components/step/stages" label="Три этапа"}
:::

### Размер

Две ступени: `sf-step--size-1` для обычного интерфейса и `sf-step--size-1/2`
для узкой панели или плотного экрана. Размер ставят и корню
(`sf-steps--size-…`: расстояние и разделители), и каждому шагу (подпись,
отступы, иконка).

:::example {id="components/step/sizes" label="Размеры 1/2 и 1"}
:::

## Состояния

### Текущий

Класс `selected` выделяет текущий шаг рамкой основного цвета и тёмной
подписью. Добавьте ему `aria-current="step"`, чтобы состояние слышал и
экранный диктор.

:::example {id="components/step/state-current" label="Обычный и текущий шаг"}
:::

### Недоступен

Класс `disabled` приглушает рамку, подпись и иконку любого этапа. Шагу-кнопке
ставьте и класс, и атрибут `disabled`: один атрибут приглушает только рамку.
Шагу-не-кнопке добавьте `aria-disabled="true"`.

:::example {id="components/step/state-disabled" label="Недоступные шаги"}
:::

### Фокус

Шаг-кнопка `button.sf-step` или ссылка `a.sf-step` подсвечивается при
наведении и получает кольцо фокуса по `:focus-visible`. В примере фокус
показан классом `focus-visible`, который CSS компонента читает наравне с
псевдоклассом.

:::example {id="components/step/state-focus" label="Шаг-кнопка в фокусе"}
:::

## Доступность

- Шаги размечайте списком с `aria-label`, текущий шаг — `aria-current="step"`.
- Завершение, ошибку и недоступность повторяйте текстом в `sr-only` внутри
  подписи: цвет иконки и сама иконка их не сообщают.
- Иконки и разделители скрывайте через `aria-hidden="true"`.
- Шаги дополняют, а не заменяют заголовок экрана и кнопки «Назад» и «Далее».
- Для перехода по шагам делайте их нативными кнопками или ссылками; тогда
  они получают фокус и срабатывают по Enter. Выбор шага с клавиатуры и
  событие `sf-step-change` даёт Smart-компонент `sf-steps`.

## Классы

**`sf-steps`**

| Что | Классы |
|:---|:---|
| Блок | `sf-steps` |
| Части | `sf-steps-container`, `sf-steps-separator--directional` |
| Размеры | `sf-steps--size-1`, `sf-steps--size-1/2` |

**`sf-step`**

| Что | Классы |
|:---|:---|
| Блок | `sf-step` |
| Части | `sf-step-container` |
| Модификаторы | `sf-step--stage-completed`, `sf-step--stage-default`, `sf-step--stage-error` |
| Размеры | `sf-step--size-1`, `sf-step--size-1/2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид Smart-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-steps`, `.sf-step`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-steps-container--background-color` | не задана; задают модификаторы, например `.sf-steps .sf-steps-container`: `transparent` | `background-color` |
| `--sf-steps-container--gap` | не задана; задают модификаторы, например `.sf-steps.sf-steps--size-1 .sf-steps-container`: `var(--sf-space-1/4)` | `gap` |
| `--sf-step--background-color` | `transparent` | `background-color` |
| `--sf-step--border-color` | `var(--sf-outline-variant)` | `border-color` |
| `--sf-step--box-shadow` | не задана; задают модификаторы, например `.sf-step:not(:disabled):not(.disabled):not([aria-disabled=true]).focus-visible`: `none` | `box-shadow` |
| `--sf-step--color` | `var(--sf-on-surface-variant)` | `color` |
| `--sf-step--font-size` | не задана; задают модификаторы, например `.sf-step--size-1`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-step--line-height` | не задана; задают модификаторы, например `.sf-step--size-1`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-step--padding-bottom` | не задана; задают модификаторы, например `.sf-step--size-1`: `var(--sf-space-1/4)` | `padding-bottom` |
| `--sf-step--padding-top` | не задана; задают модификаторы, например `.sf-step--size-1`: `var(--sf-space-1/4)` | `padding-top` |
| `--sf-step-container--background-color` | не задана; задают модификаторы, например `.sf-step .sf-step-container`: `transparent` | `background-color` |
| `--sf-step-container--color` | не задана; задают модификаторы, например `.sf-step.sf-step--stage-default .sf-step-container`: `var(--sf-on-surface-variant)` | `color` |
| `--sf-step-container--font-size` | не задана; задают модификаторы, например `.sf-step.sf-step--size-1 .sf-step-container`: `var(--sf-text-size-1)` | `font-size` |
| `--sf-step-container--line-height` | не задана; задают модификаторы, например `.sf-step.sf-step--size-1 .sf-step-container`: `var(--sf-text-height-1)` | `line-height` |
| `--sf-steps-container--background-color` | не задана; задают модификаторы, например `.sf-steps .sf-steps-container`: `transparent` | `background-color` |
| `--sf-steps-container--gap` | не задана; задают модификаторы, например `.sf-steps.sf-steps--size-1 .sf-steps-container`: `var(--sf-space-1/4)` | `gap` |

## См. также

- [Вкладки](/ru/components/navigation/tabs/)
- [Steps — Smart-компонент](/ru/smart-components/navigation/steps/)
