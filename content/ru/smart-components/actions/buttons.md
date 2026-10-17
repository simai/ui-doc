---
title: "Buttons"
description: "Запускает действие кнопкой с подписью, иконкой и состоянием загрузки."
---

# Buttons

`<sf-button>` рисует нативную кнопку с оформлением обычной
[кнопки](/ru/components/actions/buttons/): вид, цвет, размер, иконки и
состояние загрузки задаются атрибутами. Берите его там, где кнопку создаёт
шаблон или код, а состояние меняется во время работы; в статической разметке
хватает классов `sf-button`.

## Пример

:::example {id="smart-components/buttons/overview" label="Результат"}
:::

## Применение

### Вид и цвет

`appearance` задаёт вес кнопки: `default` — залитая основная, `tonal` —
приглушённая заливка, `outline` — контур, `link` — текст без рамки,
`surface` — нейтральная кнопка панелей инструментов. `ghost` — прежнее
имя вида `link`: значение совместимости, которое манифест и журнал изменений
объявляют до 2026-12-01; в разметке пишите `link`. На одном
участке экрана оставляйте одну кнопку вида `default`.

`scheme` выбирает цветовое семейство: `primary`, `secondary` или
`on-surface`. `status="error"` отмечает действие, которое удаляет данные или
необратимо: такая кнопка окрашивается цветом ошибки поверх `scheme`.

`size` берёт ступень общей шкалы элементов управления: `1/3`, `1/2`, `1`,
`2`, `3`. `spacing` меняет внутренние отступы (`compact`, `normal`,
`comfortable`, `spacious`), `radius` — скругление (`default`, `square`,
`rounded`).

### Подпись и иконки

Подпись задаёт `text` или дочерний элемент со `slot="text"`. `icon-start` и
`icon-end` ставят иконку в начало и в конец строки; `icon` — короткая запись
одной иконки, её сторону выбирает `icon-position`. Пустой `icon-start=""`
убирает иконку с этой стороны, даже если задан `icon`. Свою разметку иконки
передают слоты `icon-start` и `icon-end`.

### Состояния

`loading` показывает загрузку: кнопка недоступна и сообщает
`aria-busy="true"`. `disabled` отключает кнопку.

:::example {id="smart-components/buttons/icons-states" label="Результат"}
:::

### Кнопка в форме и обработчики

`native-type` задаёт нативный `type` внутренней кнопки: `button` по
умолчанию, `submit` или `reset` для формы. Кнопка рисуется в обычном DOM,
поэтому `submit` отправляет форму, в которой стоит `<sf-button>`. Остальные
атрибуты, которых нет в справочнике (`name`, `value`, `form`, `data-*`),
переходят на внутреннюю кнопку.

Нажатие приходит обычным событием `click`. `onClick(handler)`, `onFocus`,
`onBlur`, `onMouseEnter` и `onMouseLeave` подписывают обработчик и
возвращают сам элемент; `setDisabled(true)` и `setDisabled(false)`
переключают доступность. Свойство `value` у `<sf-button>` возвращает объект
с текущими настройками, а не значение для формы.

```html
<form action="/profile" method="post">
  <sf-button native-type="submit" name="intent" value="save" text="Сохранить"></sf-button>
</form>
```

```js
const button = await SF.createAsync('button', {
  text: 'Экспортировать',
  iconStart: 'download',
  appearance: 'outline',
});
document.querySelector('#toolbar').append(button);

button.onClick(async () => {
  button.setAttribute('loading', '');
  await exportReport();
  button.removeAttribute('loading');
});
```

## Доступность

- Доступное имя кнопки — её подпись. Кнопке только с иконкой задайте
  `aria-label` или берите [Icon Buttons](/ru/smart-components/actions/icon-buttons/).
- Фокус получает внутренняя нативная кнопка: `Tab` останавливается на ней,
  `Enter` и `Space` нажимают её. Иконки декоративны и скрыты от
  вспомогательных технологий.
- Недоступная кнопка выпадает из порядка `Tab`. Если пользователю нужно
  понять, почему действие недоступно, объясните это текстом рядом.
- Цвет ошибки при `status="error"` не заменяет подпись: из неё должно быть
  ясно, что действие удаляет данные.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-1aa66c4385cf` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-button>` |
| Назначение | Нативная кнопка с оформлением Framework: размер, вид, цветовая роль или статус, необязательные иконки в начале и в конце, отступы и скругление. loading устанавливает aria-busy и отключает кнопку от повторной активации. |
| Контракт | `smart.buttons`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-1aa66c4385cf` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |
| Заготовка до прихода кода | нет: атрибут `data-sf-skeleton` не пишется; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `size` — `string`, по умолчанию `1`, значения: `1/3`, `1/2`, `1`, `2`, `3`. Токен размера кнопки.
- `appearance` — `string`, по умолчанию `default`, значения: `default`, `tonal`, `outline`, `link`, `surface`, `ghost`. Вид кнопки. `surface` использует нейтральную шкалу прозрачности: лёгкая заливка и рамка. `ghost` — прежнее имя вида `link`, работает до 2026-12-01.
- `scheme` — `string`, по умолчанию `primary`, значения: `primary`, `secondary`, `on-surface`. Цветовое семейство элемента управления. Назначение элемента задаёт ось статуса; заданный там статус имеет приоритет.
- `status` — `string`, по умолчанию пусто, значения: пусто, `error`. Назначение элемента управления в общем словаре статусов. Элемент управления окрашивает только `error` — деструктивный статус: элемент, который удаляет, отбрасывает или выполняет необратимое действие.
- `text-position` — `string`, по умолчанию `center`.
- `text` — `string`, по умолчанию пусто. Видимый текст кнопки, если слот text не передан.
- `segment` — `string`, по умолчанию пусто.
- `icon` — `string`, по умолчанию пусто, например `home`, `settings`, `search`, `edit`, `check`, `close`. Сокращение для имени одной иконки.
- `icon-start` — `string`, по умолчанию пусто, например `home`, `settings`, `search`, `edit`, `check`, `close`. Имя иконки в логическом начале.
- `icon-end` — `string`, по умолчанию пусто, например `home`, `settings`, `search`, `edit`, `check`, `close`. Имя иконки в логическом конце.
- `icon-position` — `string`, по умолчанию `start`, значения: `start`, `end`. Расположение единственной иконки-ярлыка.
- `spacing` — `string`, по умолчанию `normal`, значения: `compact`, `normal`, `comfortable`, `spacious`. Семантический профиль внутренних отступов.
- `radius` — `string`, по умолчанию пусто, значения: пусто, `default`, `square`, `rounded`. Модификатор скругления углов.
- `root-class` — `string`, по умолчанию пусто. Дополнительные классы внутреннего элемента кнопки.
- `loading` — `boolean`, по умолчанию `false`. Флаг состояния загрузки.
- `disabled` — `boolean`, по умолчанию `false`. Флаг отключённого состояния.
- `native-type` — `string`, по умолчанию `button`, значения: `button`, `submit`, `reset`. Нативный атрибут `type` кнопки.
- `aria-label` — `string`, по умолчанию пусто. Доступная подпись для кнопок только с иконкой или пользовательских кнопок.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `icon-start` | `icon-left` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `icon-end` | `icon-right` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing` | `tightness` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="compact"` | `tightness="low"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="comfortable"` | `tightness="high"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="spacious"` | `tightness="highest"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `appearance="link"` | `appearance="ghost"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

### Свойства в документе макета

Узел типа `smart.buttons` в [документе макета](/ru/guide/layouts/building/smart-component/) (`simai.composition.document.v1`) принимает:

- свойства: `template`, `size`, `appearance`, `spacing`, `scheme`, `status`, `text`, `icon`, `icon-position`, `loading`, `disabled`, `native-type`, `aria-label`.

Значения свойств те же, что у одноимённых атрибутов.

### Методы

- `onClick(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик click на хост-элементе. Возвращает элемент.
- `onFocus(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик focusin на хост-элементе. Возвращает элемент.
- `onBlur(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик focusout на хост-элементе. Возвращает элемент.
- `onMouseEnter(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик mouseenter на хост-элементе. Возвращает элемент.
- `onMouseLeave(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик mouseleave на хост-элементе. Возвращает элемент.
- `setDisabled(nextValue?: boolean)` — возвращает `object`. Устанавливает атрибут disabled, если nextValue истинно, и удаляет его в противном случае. Возвращает элемент.

### События

Своих событий нет; общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-button></sf-button>
```

### Источник

- `simai/ui@1aa66c4385cf0128549d4ccfc8d6c82f22b50aa8:distr/smart/buttons`
- `simai/ui@1aa66c4385cf0128549d4ccfc8d6c82f22b50aa8:distr/rule/rule.json#name=cl-buttons`

## См. также

- [Icon Buttons](/ru/smart-components/actions/icon-buttons/) — кнопка только с иконкой.
- [Button Group](/ru/smart-components/actions/button-group/) — выбор одного варианта из кнопок.
