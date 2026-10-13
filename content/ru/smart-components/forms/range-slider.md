---
title: "Range Slider"
description: "Выбирает одно значение или две границы перетаскиванием ручки по шкале с известными пределами."
---

# Range Slider

`<sf-range-slider>` — шкала с одной или двумя ручками для приблизительной
настройки: цены, громкости, расстояния. Он собирает
[слайдер диапазона](/ru/components/forms/range-slider/) из атрибутов. Когда
важно точное число, добавьте рядом [поле ввода](/ru/smart-components/forms/inputs/).

## Пример

:::example {id="smart-components/range-slider/overview" label="Результат"}
:::

## Применение

### Пределы, шаг и значение

`min` и `max` задают пределы шкалы, по умолчанию 0 и 100. `step` — шаг; без
него значение меняется непрерывно. `value` — текущее значение; для двух ручек
это два числа через запятую. Значение вне пределов прижимается к ближайшему
пределу.

### Две ручки

Два числа в `value` или атрибут `multiple` дают две ручки — нижнюю и верхнюю
границу. `margin` задаёт наименьшее расстояние между ними. У каждой ручки
своё доступное имя: `lower-label` и `upper-label`.

### Подпись значения

`label` выбирает, как ручка показывает значение: `none` — без подписи, `text`
— постоянной подписью, `tooltip` — подсказкой. `prefix` и `suffix` добавляют
единицы. `text-position` и `tooltip-position` ставят подпись над (`top`) или
под (`bottom`) ручкой; `label-position` задаёт положение для обоих видов.
`decimals` меняет только видимое число знаков, без него точность берётся из
`step`.

### Заполнение шкалы

`connect` задаёт заполненный отрезок: у одной ручки по умолчанию `lower` — от
минимума до ручки, `upper` — от ручки до максимума, для настроек вида «не
меньше». У двух ручек заполнен отрезок между ними; `connect="false"` убирает
заполнение.

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

:::example {id="smart-components/range-slider/range" label="Результат"}
:::

### Значение из кода и в форме

Свойство `value` возвращает текущее значение строкой, у двух ручек — через
запятую; присваивание или `setValue()` принимает строку, число или массив.
Атрибут `value` следует за ручками. `setDisabled()` выключает слайдер.

Своего поля формы у слайдера нет, поэтому в `FormData` значение не попадает:
перенесите его в скрытое поле или в запрос в обработчике `change`.

```js
const price = document.querySelector('sf-range-slider');
const hidden = document.querySelector('input[name="price"]');
price.addEventListener('change', (event) => {
  hidden.value = event.detail.values.join('-');
});
price.setValue([10000, 30000]);
```

## Доступность

- Задайте доступное имя: `aria-label` или `aria-labelledby` на
  `<sf-range-slider>` переходит на ручку. Двум ручкам нужны отдельные имена в
  `lower-label` и `upper-label`.
- Каждая ручка — отдельная остановка `Tab` с ролью `slider`; она сообщает
  текущее значение с `prefix` и `suffix` и допустимые пределы с учётом второй
  ручки.
- Стрелки двигают ручку на шаг, `Home` и `End` — к крайним значениям, которые
  ей доступны. `keyboard="false"` отключает управление с
  клавиатуры — оставляйте его включённым, если у значения нет другого способа
  ввода.
- При письме справа налево минимум стоит справа.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-82fc0ba882ba` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-range-slider>` |
| Назначение | Слайдер для одного числа или диапазона из двух на дорожке: перетаскивание, щелчок или клавиши сдвигают ручку на step, заливка показывает выбранную часть, а значение можно показать текстом или подсказкой у каждой ручки. |
| Контракт | `smart.range-slider`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-82fc0ba882ba` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`.
- `min` — `string`, по умолчанию `0`.
- `max` — `string`, по умолчанию `100`.
- `start` — `string`, по умолчанию пусто.
- `value` — `string`, по умолчанию пусто.
- `multiple` — `boolean`, по умолчанию `false`.
- `step` — `string`, по умолчанию пусто.
- `margin` — `string`, по умолчанию пусто.
- `connect` — `string`, по умолчанию пусто.
- `keyboard` — `boolean`, по умолчанию `true`.
- `label` — `string`, по умолчанию `none`, значения: `none`, `text`, `tooltip`. Как каждая ручка показывает своё значение: никак, текстом рядом с ней или подсказкой.
- `prefix` — `string`, по умолчанию пусто.
- `suffix` — `string`, по умолчанию пусто.
- `lower-label` — `string`, по умолчанию пусто.
- `upper-label` — `string`, по умолчанию пусто.
- `decimals` — `string`, по умолчанию пусто.
- `tooltip-position` — `string`, по умолчанию пусто.
- `text-position` — `string`, по умолчанию пусто.
- `label-position` — `string`, по умолчанию пусто.
- `disabled` — `boolean`, по умолчанию `false`.
- `root-class` — `string`, по умолчанию пусто.

### Методы

- `getSliderRoot()` — возвращает `object` | `null`. Возвращает внутренний корень слайдера (.sf-range-slider) или null до отрисовки.
- `getValue()` — возвращает `number` | `array` | `null`. Возвращает текущее значение слайдера: число при одной ручке, массив из двух чисел при двух; null до создания слайдера.
- `setValue(nextValue: number|string|array)` — возвращает `object`. Устанавливает значение из кода (число, строка через запятую или массив). Число ручек следует за значением, если multiple не задан явно; значение, допустимое с учётом range, step и margin, отражается в атрибуте value. Не отправляет change.
- `setDisabled(nextValue?: boolean)` — возвращает `object`. Устанавливает или удаляет атрибут disabled и перерисовывает.
- `setState(nextState: object)` — возвращает `object`. Применяет ключи: value — через setValue, multiple явно задаёт число ручек, disabled — через setDisabled; любой другой ключ записывается как атрибут в kebab-case (false, null, undefined или пустое значение удаляет его, true устанавливает пустым).
- `onUpdateValue(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-range-slider-update; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется.
- `onSliderUpdate(handler: function, options?: object|boolean)` — возвращает `object`. То же, что onUpdateValue.
- `onChange(handler: function, options?: object)` — Подписывается на change — зафиксированное значение: handler(value, detail, event). Возвращает элемент.
- `onSliderChange(handler: function, options?: object|boolean)` — возвращает `object`. То же, что onChange: подписывается на change — каноническое имя.
- `onSet(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-range-slider-set; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется.
- `onSliderSet(handler: function, options?: object|boolean)` — возвращает `object`. То же, что onSet.
- `onStart(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-range-slider-start; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется.
- `onSliderStart(handler: function, options?: object|boolean)` — возвращает `object`. То же, что onStart.
- `onEnd(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик sf-range-slider-end; обработчик вызывается с (value, detail, event). Обработчик, не являющийся функцией, игнорируется.
- `onSliderEnd(handler: function, options?: object|boolean)` — возвращает `object`. То же, что onEnd.

### События

Все события приходят на сам элемент и всплывают. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `change` — `detail`: `{ component: object, values: array, value: number|array, handleCount: number, handle: number }`. Пользователь зафиксировал значение (конец перетаскивания, щелчок, клавиша); всплывает от корня слайдера с `values`, `value`, `handleCount` и `handle`. Значение, установленное из кода, не является изменением. Имя для привязки.
- `sf-range-slider-change` — устаревший псевдоним события `change`: приходит с тем же `detail`, подписывайтесь на `change`.
- `onSliderChange` — устаревший псевдоним события `change`: приходит с тем же `detail`, подписывайтесь на `change`.

### Доступность

- Роль: slider.
- Доступное имя: обязательно.
- Клавиши: `Tab`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`, `Home`, `End`.
- Фокус: aria-label или aria-labelledby на хост-элементе передаётся каждой ручке; при двух ручках lower-label и upper-label называют каждую. Каждая ручка — остановка Tab с видимым кольцом фокуса. Стрелки сдвигают на step (зеркально в RTL), Home и End переводят к границам ручки; keyboard=false отключает клавиши.

### Минимальная разметка

```html
<sf-range-slider aria-label="Price" min="0" max="100" value="20"></sf-range-slider>
```

### Источник

- `simai/ui@82fc0ba882baae72ae3d83d7370decbcebe366d7:distr/smart/range-slider`
- `simai/ui@82fc0ba882baae72ae3d83d7370decbcebe366d7:distr/rule/rule.json#name=cl-range-slider`
