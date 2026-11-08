---
title: "Слайдер диапазона"
description: "Выбирает одно значение или две границы перетаскиванием ручки по шкале с известными пределами."
---

# Слайдер диапазона

:badge[sf-slider-range]{variant=tonal scheme=primary size=1/2} :badge[1.3.0]{variant=outline scheme=on-surface size=1/2}

Слайдер диапазона — шкала с одной или двумя ручками для приблизительной
настройки: цены, громкости, расстояния. Когда важно точное число, добавьте
рядом [поле ввода](/ru/smart/forms/inputs/).

То же на классах — [Слайдер диапазона](/ru/components/forms/range-slider/):
`<sf-slider-range>` собирает его из атрибутов.

## Пример

:::example {id="smart-components/range-slider/overview" label="Результат"}
:::

## Разметка

Слайдеру нужны доступное имя и значение:

```html
<sf-slider-range aria-label="Громкость" value="30"></sf-slider-range>
```

`aria-label` или `aria-labelledby` на `<sf-slider-range>` переходит на ручку.
`min` и `max` задают пределы шкалы, по умолчанию 0 и 100. `value` — текущее
значение; для двух ручек это два числа через запятую. Значение вне пределов
прижимается к ближайшему пределу.

## Варианты

### Одно значение или диапазон

Два числа в `value` или атрибут `multiple` дают две ручки — нижнюю и верхнюю
границу. `margin` задаёт наименьшее расстояние между ними. У каждой ручки
своё доступное имя: `lower-label` и `upper-label`.

:::example {id="smart-components/range-slider/handles" label="Одна ручка и две ручки"}
:::

### Подпись значения

`label` выбирает, как ручка показывает значение: `none` (по умолчанию) — без
подписи, `text` — постоянной подписью, `tooltip` — подсказкой. `prefix-text`
и `suffix` добавляют единицы; `prefix` — прежнее имя `prefix-text`.

:::example {id="smart-components/range-slider/labels" label="Без подписи, подпись текстом и подсказкой"}
:::

### Положение подписи

`text-position` и `tooltip-position` ставят подпись над (`top`) или под
(`bottom`) ручкой; `label-position` задаёт положение для обоих видов.

:::example {id="smart-components/range-slider/label-position" label="Подпись над ручкой и под ней"}
:::

### Заполнение шкалы

`connect` задаёт заполненный отрезок: у одной ручки по умолчанию `lower` — от
минимума до ручки, `upper` — от ручки до максимума, для настроек вида «не
меньше». У двух ручек заполнен отрезок между ними; `connect="false"` убирает
заполнение.

:::example {id="smart-components/range-slider/connect" label="Заполнение от минимума, до максимума и без заполнения"}
:::

### Шаг и точность

`step` — шаг; без него значение меняется непрерывно. `decimals` меняет только
видимое число знаков, без него точность берётся из `step`.

:::example {id="smart-components/range-slider/step" label="Шаг 5, шаг 0,5 и два знака после запятой"}
:::

## Состояния

### Недоступен

`disabled` выключает слайдер; из кода то же делает `setDisabled()`.

:::example {id="smart-components/range-slider/state-disabled" label="Недоступный слайдер"}
:::

## Поведение

### Значение и событие `change`

Когда пользователь отпускает ручку, щёлкает по шкале или двигает ручку
клавишей, элемент отправляет всплывающее событие `change`. Его
`event.detail`:

| Поле | Содержимое |
|:---|:---|
| `value` | число; у двух ручек — массив из двух чисел |
| `values` | массив значений всех ручек |
| `handleCount` | число ручек: 1 или 2 |
| `handle` | номер ручки, которую двигали, с нуля |

Значение, заданное из кода, событием `change` не считается. Во время
перетаскивания значение меняется непрерывно; `onUpdateValue(handler)`
вызывает обработчик на каждом шаге с текущим значением первым аргументом.

:::example {id="smart-components/range-slider/range" label="Диапазон цены и значение из события"}
:::

### Значение из кода и в форме

Свойство `value` возвращает текущее значение строкой, у двух ручек — через
запятую; присваивание или `setValue()` принимает строку, число или массив.
Атрибут `value` следует за ручками.

Своего поля формы у слайдера нет, поэтому в `FormData` значение не попадает:
перенесите его в скрытое поле или в запрос в обработчике `change`.

```js
const price = document.querySelector('sf-slider-range');
const hidden = document.querySelector('input[name="price"]');
price.addEventListener('change', (event) => {
  hidden.value = event.detail.values.join('-');
});
price.setValue([10000, 30000]);
```

### Управление с клавиатуры

Стрелки двигают ручку на шаг, `Home` и `End` — к крайним значениям, которые
ей доступны. `keyboard="false"` отключает управление с клавиатуры —
оставляйте его включённым, если у значения нет другого способа ввода.

## Доступность

- Задайте доступное имя: `aria-label` или `aria-labelledby` на
  `<sf-slider-range>` переходит на ручку. Двум ручкам нужны отдельные имена в
  `lower-label` и `upper-label`.
- Каждая ручка — отдельная остановка `Tab` с ролью `slider`; она сообщает
  текущее значение с `prefix-text` и `suffix` и допустимые пределы с учётом
  второй ручки.
- Стрелки двигают ручку на шаг, `Home` и `End` — к крайним значениям, которые
  ей доступны. `keyboard="false"` отключает управление с
  клавиатуры — оставляйте его включённым, если у значения нет другого способа
  ввода.
- При письме справа налево минимум стоит справа.

## Справочник

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `min` | число | `0` | — | — |
| `max` | число | `100` | — | — |
| `start` | строка | пусто | — | — |
| `multiple` | да/нет | нет | — | — |
| `step` | число | — | — | — |
| `margin` | строка | пусто | — | — |
| `connect` | строка | пусто | — | — |
| `keyboard` | да/нет | да | — | — |
| `label` | строка | `none` | `none`, `text`, `tooltip` | Как каждая ручка показывает своё значение: никак, текстом рядом с ней или подсказкой. |
| `prefix-text` | строка | пусто | — | — |
| `suffix` | строка | пусто | — | — |
| `lower-label` | строка | пусто | — | — |
| `upper-label` | строка | пусто | — | — |
| `decimals` | строка | пусто | — | — |
| `tooltip-position` | строка | пусто | — | — |
| `text-position` | строка | пусто | — | — |
| `label-position` | строка | пусто | — | — |
| `disabled` | да/нет | нет | — | — |
| `value` | строка | пусто | — | — |
| `aria-label` | строка | пусто | — | — |

#### Общие для всех компонентов

| Атрибут | Тип | По умолчанию | Значения | Что делает |
|:---|:---|:---|:---|:---|
| `template` | строка | `default` | — | Имя шаблона отрисовки; `default` — встроенный. |
| `root-class` | строка | пусто | — | Свои CSS-классы для нарисованного элемента. |
| `root-style` | строка | пусто | — | Свои стили для нарисованного элемента, например `max-width: 20rem`. |

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `icon-start` — `iconStart`. Свойство атрибута `template` называется `templateName`.

### Методы

| Метод | Возвращает | Что делает |
|:---|:---|:---|
| `getSliderRoot()` | объект или пусто | Возвращает внутренний корень слайдера (.sf-range-slider) или null до отрисовки. |
| `getValue()` | число или список или пусто | Возвращает текущее значение слайдера: число при одной ручке, массив из двух чисел при двух; null до создания слайдера. |
| `setValue(nextValue: number\|string\|array)` | объект | Устанавливает значение из кода (число, строка через запятую или массив). Число ручек следует за значением, если multiple не задан явно; значение, допустимое с учётом range, step и margin, отражается в атрибуте value. Не отправляет change. |
| `setDisabled(nextValue?: boolean)` | объект | Устанавливает или удаляет атрибут disabled и перерисовывает. |
| `setState(nextState: object)` | объект | Применяет ключи: value — через setValue, multiple явно задаёт число ручек, disabled — через setDisabled; любой другой ключ записывается как атрибут в kebab-case (false, null, undefined или пустое значение удаляет его, true устанавливает пустым). |
| `onUpdateValue(handler: function, options?: object\|boolean)` | объект | Добавляет обработчик sf-range-slider-update; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется. |
| `onSliderUpdate(handler: function, options?: object\|boolean)` | объект | То же, что onUpdateValue. |
| `onChange(handler: function, options?: object)` | — | Подписывается на change — зафиксированное значение: handler(value, detail, event). Возвращает тег. |
| `onSliderChange(handler: function, options?: object\|boolean)` | объект | То же, что onChange: подписывается на change — каноническое имя. |
| `onSet(handler: function, options?: object\|boolean)` | объект | Добавляет обработчик sf-range-slider-set; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется. |
| `onSliderSet(handler: function, options?: object\|boolean)` | объект | То же, что onSet. |
| `onStart(handler: function, options?: object\|boolean)` | объект | Добавляет обработчик sf-range-slider-start; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется. |
| `onSliderStart(handler: function, options?: object\|boolean)` | объект | То же, что onStart. |
| `onEnd(handler: function, options?: object\|boolean)` | объект | Добавляет обработчик sf-range-slider-end; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется. |
| `onSliderEnd(handler: function, options?: object\|boolean)` | объект | То же, что onEnd. |

### События

События приходят на сам элемент и всплывают; глаголы в именах — из [общего словаря](/ru/guide/smart-components/names/). Общие события базового элемента — в главе [Модель компонента](/ru/guide/smart-components/model/#базовый-интерфейс).

| Событие | `detail` | Когда приходит |
|:---|:---|:---|
| `change` | `{ values: array, value: object, handleCount: number, handle: number }` | Человек выбрал значение: отпустил ползунок, щёлкнул или нажал клавишу; в `detail` — `values`, `value`, `handleCount` и `handle`. Значение, заданное из кода, событие не присылает. На это событие и подписывайтесь. |

### О компоненте

| | |
|:---|:---|
| Тег | `<sf-slider-range>`, контракт `smart.slider-range` версии `1.3.0` |
| Поставка | выпуск Framework `ui-0c23f6a0af12` |
| [Готовность](/ru/guide/smart-components/quality/#готовность-компонента-к-использованию) | Пробный: может измениться в следующих выпусках; описан и проверен своим сценарием, в продуктах ещё не проверен. |
| До прихода кода | Пока грузится код, на месте компонента видна заготовка «блок» (сервер пишет `data-sf-skeleton="block"`). Подробнее — [Коробка до кода](/ru/guide/smart-components/first-paint/#коробка-до-кода). |
| Доступность | Читается как ползунок; нужна подпись или `aria-label`; с клавиатуры: `Tab`, `←`, `→`, `↑`, `↓`, `Home`, `End`. |
| Источник | `simai/ui@0c23f6a0af12ddc32846ff868aab4d9849dabd75:distr/smart/slider-range` |
| Правило классов | `simai/ui@0c23f6a0af12ddc32846ff868aab4d9849dabd75:distr/rule/rule.json#name=cl-slider-range` |

## См. также

- [Количество](/ru/smart/forms/quantity/) — точное число с кнопками «−» и «+».
- [Текстовые поля](/ru/smart/forms/inputs/) — ввод точного числа рядом со шкалой.
- [Слайдер диапазона на классах](/ru/components/forms/range-slider/) — тот же слайдер в статической разметке.
