---
title: "Код подтверждения"
description: "Принимает одноразовый код в одно поле и показывает его по ячейкам."
profile: reference
---

# Код подтверждения

:badge[sf-verification]{variant=outline scheme=on-surface size=1/2} :badge[1.9.0]{variant=outline scheme=on-surface size=1/2}

Код подтверждения принимает одноразовый код из сообщения или приложения и
показывает его по отдельным ячейкам. Под ячейками лежит одно нативное поле,
поэтому вставка, автозаполнение кода из сообщения, менеджеры паролей и
экранные дикторы работают с кодом целиком.

## Пример

:::example {id="components/verification/overview" label="Шестизначный код" preview=sandbox log="verification:complete" log_console=true log_open=false}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`div.sf-verification-form` → подпись `label.sf-verification-form-label`,
`sf-verification` с `input.sf-verification-input` и подсказка
`sf-verification-form-hint`.

- Оболочка `sf-verification-form` с классом размера несёт настройки:
  `data-length` — число символов (по умолчанию 6, не больше 12),
  `data-mode` — какие символы принимает поле. Скрипт компонента находит коды
  по `.sf-verification-form`.
- `sf-verification` с тем же классом размера — рамка ячеек. Скрипт сам
  добавляет в неё ячейки `sf-verification-cell` и скрывает их от
  вспомогательных технологий.
- Одно `input.sf-verification-input` с `type="text"` хранит код целиком. Оно
  прозрачное и лежит поверх ячеек. Скрипт ставит ему `maxlength` по длине кода,
  `autocomplete="one-time-code"`, а для цифрового кода — `inputmode="numeric"`,
  если их нет.
- Подпись — `label` с `for`, указывающим на `id` поля. Подсказка лежит рядом
  с подписью, а не внутри неё, и связана с полем через `aria-describedby`:
  так диктор называет поле только подписью, а подсказку читает как описание.
- Подпись и подсказка необязательны, но без подписи полю нужен `aria-label`.
- `sf-verification-separator` — короткая черта между группами ячеек, а
  `sf-verification-form-wrap` — прежняя разметка с отдельным полем на каждую
  ячейку; CSS пока рисует её, новой разметке они не нужны.

## Варианты

### Вид

`sf-verification--filled` • [справочник](#классы)

Без модификатора ячейки отделены границей. `sf-verification--filled` на
`sf-verification` отделяет их тональной заливкой; пока фокус в поле, ячейки
получают фон поверхности и границу. Ячейка, в которую попадёт следующий символ,
выделена основным цветом в обоих видах.

:::example {id="components/verification/styles" label="Ячейки с границей и с заливкой"}
:::

### Размер

`sf-verification--size-1/3`, `sf-verification--size-1/2`, `sf-verification--size-1`, `sf-verification--size-2`, `sf-verification--size-3` • [справочник](#классы)

Пять ступеней — от `sf-verification--size-1/3` до `sf-verification--size-3`
на рамке и такие же `sf-verification-form--size-*` на оболочке. Ячейка равна
по высоте кнопке и полю той же ступени: 28, 32, 40, 48 и 56 px, на телефоне
24, 28, 36, 44 и 52 px. Размер меняет ячейки и текст в них; берите ступень
полей той же формы.

:::example {id="components/verification/sizes" label="Размеры кода"}
:::

### Символы

`data-mode="numeric"` (по умолчанию) оставляет только цифры,
`data-mode="alphanumeric"` — латинские буквы и цифры, любое другое значение —
все символы, кроме пробелов. Лишнее скрипт убирает при вводе и вставке.

Свой алфавит без похожих знаков (без 0, O, 1 и I), перевод букв в заглавные
и разделитель групп «3 + 3» есть у
[смарт-поля кода](/ru/smart/forms/code-input/): атрибуты `charset`,
`uppercase` и `groups`.

:::example {id="components/verification/modes" label="Символы"}
:::

### Длина

`data-length` задаёт число ячеек и предел ввода. Без него длина берётся из
`maxlength` поля, а без обоих — шесть символов.

:::example {id="components/verification/length" label="Код из четырёх и из шести символов"}
:::

## Состояния

Недоступность и фокус задаёт нативное поле, ошибку — класс на оболочке.
Наведение компонент показывает сам.

### Ошибка

Класс `error` на оболочке окрашивает ячейки и подсказку цветом ошибки.
Подсказку с текстом ошибки свяжите с полем через `aria-describedby`, поле
получает `aria-invalid="true"`. Как только человек начинает вводить код
заново, скрипт снимает и класс, и `aria-invalid`.

:::example {id="components/verification/state-error" label="Неверный код"}
:::

### Недоступно

Нативный `disabled` на поле приглушает ячейки; поле не получает фокус и не
отправляется с формой.

:::example {id="components/verification/state-disabled" label="Недоступный код"}
:::

### Фокус

Фокус показывает текущая ячейка — та, в которую попадёт следующий символ.
Он одинаковый после нажатия мышью и после клавиши Tab, как у текстовых полей:
рамка ячейки становится цветом фокуса и толщиной 2 px внутрь, снаружи кольца
нет, размер ячейки не меняется. Нажмите в поле примера или перейдите в него
клавишей Tab.

:::example {id="components/verification/state-focus" label="Код в фокусе"}
:::

## Доступность

- Код вводится в одно поле: экранный диктор читает его целиком, а не по
  ячейкам. Ячейки скрыты от вспомогательных технологий.
- `autocomplete="one-time-code"` позволяет телефону подставить код из
  сообщения; вставка из буфера тоже кладёт код целиком.
- Цифры кода всегда идут слева направо, в том числе при письме справа налево.
- Подсказка говорит, сколько символов ввести и где взять код; ошибку
  сообщайте текстом.
- В режиме принудительных цветов ячейки и рамка фокуса рисуются системными
  цветами.

## JavaScript

Когда введён последний символ, на оболочке возникает всплывающее событие
`verification:complete`; `detail.value` — введённый код. Форму компонент не
отправляет: это решает приложение.

:::example {id="components/verification/complete" label="Проверка кода" preview=sandbox log="verification:complete" log_open=true}
:::

`SF.Verification` даёт три функции; `target` — оболочка или любой элемент
внутри неё:

| Функция | Что делает |
|:---|:---|
| `SF.Verification.getValue(target)` | возвращает введённый код, очищенный по `data-mode` |
| `SF.Verification.setValue(target, value)` | записывает код, перерисовывает ячейки и возвращает `true`; на полный код создаёт `verification:complete` |
| `SF.Verification.initAll(root)` | подключает коды внутри `root`; новые коды на странице скрипт подключает сам |

## Классы

**`sf-verification`**

| Что | Классы |
|:---|:---|
| Блок | `sf-verification` |
| Части | `sf-verification-cell`, `sf-verification-cells`, `sf-verification-input`, `sf-verification-separator` |
| Модификаторы | `sf-verification--filled` |
| Размеры | `sf-verification--size-1`, `sf-verification--size-1/2`, `sf-verification--size-1/3`, `sf-verification--size-2`, `sf-verification--size-3` |

**`sf-verification-form`**

| Что | Классы |
|:---|:---|
| Блок | `sf-verification-form` |
| Части | `sf-verification-form-hint`, `sf-verification-form-label`, `sf-verification-form-wrap` |
| Модификаторы | `sf-verification-form--filled` |
| Размеры | `sf-verification-form--size-1`, `sf-verification-form--size-1/2`, `sf-verification-form--size-1/3`, `sf-verification-form--size-2`, `sf-verification-form--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

### Настройка

Эти переменные — поверхность настройки компонента. Их имена стабильны: переименовать или убрать такую переменную можно только через журнал изменений, с предупреждением, как атрибут. Framework их не задаёт, поэтому значение можно поставить на сам компонент (`.sf-verification`) или на любого предка. Переменные действуют на спокойный вид; наведение, фокус, нажатие, недоступность и ошибка рисуются поверх, поэтому состояния остаются видны.

| Переменная | Что задаёт | По умолчанию |
|:---|:---|:---|
| `--sf-verification-background-color` | Заливка ячейки в покое: поверхность в виде bordered, тоновая заливка в виде filled; у кода filled в фокусе, ошибки и недоступного поля своя. | `var(--sf-transparent)`; зависит от вида |
| `--sf-verification-border-color` | Рамка ячейки в покое; у наведения, текущей ячейки, ошибки и недоступного поля своя, у кода filled её нет. | `var(--sf-outline)` |
| `--sf-verification-border-width` | Толщина рамки ячейки. | `var(--sf-px)` |
| `--sf-verification-radius` | Скругление углов ячейки и кольца фокуса вокруг ячеек. | `var(--sf-radius--ui)` |
| `--sf-verification-color` | Цвет символов в ячейках; у ошибки и недоступного поля свой. | `var(--sf-on-surface)` |
| `--sf-verification-cell-size` | Ширина и высота ячейки; если задана — одинаковая на всех размерах. | `var(--sf-ui-1--control-height)`; зависит от размера |
| `--sf-verification-gap` | Расстояние между ячейками. | `var(--sf-space-1/3)` |
| `--sf-verification-invalid-border-color` | Рамка ячейки при ошибке в коде. | `var(--sf-error)` |

```css
.sf-verification {
  --sf-verification-radius: 0;
}
```

### Устройство

Остальные переменные — внутренняя проводка компонента: модификаторы задают им значения, а части их читают. Их имена и устройство могут меняться в любом выпуске, поэтому проект их не задаёт. Значение по умолчанию — из базового правила блока (`.sf-verification`, `.sf-verification-form`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-verification--border-width` | `var(--sf-verification-border-width, var(--sf-px))` | `border-width` |
| `--sf-verification--cell-size` | `var(--sf-verification-cell-size, var(--sf-ui-1--control-height))` | `flex`, `min-width`, `min-inline-size`, `width`, `inline-size`, `height`, `block-size` |
| `--sf-verification--font-size` | не задана; задают модификаторы, например `.sf-verification--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-verification--gap` | `var(--sf-verification-gap, var(--sf-space-1/3))` | `gap` |
| `--sf-verification--line-height` | не задана; задают модификаторы, например `.sf-verification--size-1/2`: `var(--sf-text-height-1/2)` | `line-height`, `height`, `block-size` |
| `--sf-verification--radius` | `var(--sf-verification-radius, var(--sf-radius--ui))` | `border-radius` |

## См. также

- [Текстовые поля](/ru/components/forms/inputs/)
