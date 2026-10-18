---
title: "Icon Buttons"
description: "Запускает действие компактной кнопкой с одной иконкой и доступным именем."
---

# Icon Buttons

`<sf-icon-button>` — кнопка с одной иконкой вместо подписи: изменить,
поделиться, закрыть, открыть меню. Она рисует нативную кнопку с оформлением
обычной [кнопки-иконки](/ru/components/actions/icon-buttons/). Берите её в
панелях инструментов и строках таблиц, где подпись не помещается, а смысл
иконки понятен; если сомневаетесь, берите
[кнопку с подписью](/ru/smart-components/actions/buttons/).

## Пример

:::example {id="smart-components/icon-buttons/overview" label="Результат"}
:::

## Применение

### Иконка и назначение

`icon` — имя иконки Material Symbols, по умолчанию `add`. `filled` берёт
залитый вариант той же иконки — например, для отмеченного избранного. Свою
разметку иконки передаёт слот `icon`.

`kind="close"` делает кнопку закрытия: вместо иконки она рисует знак
[Close](/ru/smart-components/actions/close/) того же размера.

### Вид, цвет и размер

`appearance`, `scheme` и `status` работают как у
[Buttons](/ru/smart-components/actions/buttons/): `default`, `tonal`,
`outline`, `link`, `surface`, `ghost`; цветовое семейство `primary`,
`secondary` или `on-surface`; `status="error"` для действия, которое удаляет
данные. Для второстепенных действий в строке берите `ghost` или `link` со
схемой `on-surface`, чтобы ряд кнопок не спорил с основным действием.

`size` — ступень шкалы `1/3`, `1/2`, `1`, `2`, `3`; `spacing` и `radius`
меняют отступы и скругление.

### Состояния

`loading` показывает загрузку и делает кнопку недоступной, `disabled`
отключает её.

:::example {id="smart-components/icon-buttons/sizes-states" label="Результат"}
:::

### В группе и в коде

`segment` (`start`, `middle`, `end`) ставит кнопку в объединённую группу
элементов управления; обычно его задаёт сама группа. `native-type` задаёт
нативный `type`: `button`, `submit` или `reset`.

Нажатие приходит событием `click`. `onClick(handler)` и другие помощники
подписывают обработчик и возвращают элемент, `setDisabled(true)` отключает
кнопку.

```js
const remove = await SF.createAsync('icon-button', {
  icon: 'delete',
  appearance: 'ghost',
  scheme: 'on-surface',
  ariaLabel: 'Удалить строку',
});
row.querySelector('.row-actions').append(remove);
remove.onClick(() => deleteRow(row));
```

## Доступность

- Каждой кнопке нужно доступное имя в `aria-label`: иконка его не даёт.
  Называйте действие и, если кнопок несколько, его объект: «Удалить строку»,
  а не «Корзина».
- Если кнопка переключает состояние, например избранное, имя говорит о
  действии, которое произойдёт, или кнопке нужен `aria-pressed`: он
  переходит на внутреннюю кнопку.
- Фокус получает внутренняя нативная кнопка: `Tab` останавливается на ней,
  `Enter` и `Space` нажимают её. Кольцо фокуса видно при работе с
  клавиатурой и не появляется при нажатии мышью.
- Иконка скрыта от вспомогательных технологий.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-99fd4f0bea6f` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-icon-button>` |
| Назначение | Нативная кнопка-иконка с геометрией из токенов, доступным именем и общей семантикой загрузки. |
| Контракт | `smart.icon-buttons`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-99fd4f0bea6f` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |
| Заготовка до прихода кода | нет: атрибут `data-sf-skeleton` не пишется; своего скелетона при загрузке данных нет ([Заготовка до прихода кода](/ru/guide/smart-components/states-and-loading/#заготовка-до-прихода-кода)) |

### Атрибуты

- `template` — `string`, по умолчанию `default`. Имя варианта шаблона для внешних шаблонов SfBaseElement.
- `kind` — `string`, по умолчанию `icon`, значения: `icon`, `close`. Тип кнопки-иконки: обычное действие с иконкой или элемент закрытия.
- `size` — `string`, по умолчанию `1`, значения: `1/3`, `1/2`, `1`, `2`, `3`. Токен размера кнопки-иконки.
- `appearance` — `string`, по умолчанию `default`, значения: `default`, `tonal`, `outline`, `link`, `surface`, `ghost`. Вид кнопки-иконки. `surface` и `ghost` используют нейтральную шкалу прозрачности: `surface` сохраняет лёгкую заливку и рамку, `ghost` не имеет ничего, пока на него не наведут курсор или фокус.
- `scheme` — `string`, по умолчанию `primary`, значения: `primary`, `secondary`, `on-surface`. Цветовое семейство элемента управления. Назначение элемента задаёт ось статуса; заданный там статус имеет приоритет.
- `status` — `string`, по умолчанию пусто, значения: пусто, `error`. Назначение элемента управления в общем словаре статусов. Элемент управления окрашивает только `error` — деструктивный статус: элемент, который удаляет, отбрасывает или выполняет необратимое действие.
- `segment` — `string`, по умолчанию пусто, значения: пусто, `start`, `middle`, `end`. Позиция в объединённой группе элементов управления, которой управляет композиция Button Group.
- `icon` — `string`, по умолчанию `add`. Имя иконки Material.
- `filled` — `boolean`, по умолчанию `false`. Использует ось filled шрифта иконок для стандартного варианта иконки.
- `spacing` — `string`, по умолчанию `normal`, значения: `compact`, `normal`, `comfortable`, `spacious`. Семантический профиль внутренних отступов.
- `radius` — `string`, по умолчанию пусто, значения: пусто, `default`, `square`, `rounded`. Модификатор скругления углов.
- `root-class` — `string`, по умолчанию пусто. Дополнительные классы внутреннего элемента кнопки-иконки.
- `loading` — `boolean`, по умолчанию `false`. Флаг состояния загрузки.
- `disabled` — `boolean`, по умолчанию `false`. Флаг отключённого состояния.
- `native-type` — `string`, по умолчанию `button`, значения: `button`, `submit`, `reset`. Нативный атрибут `type` кнопки.
- `aria-label` — `string`, по умолчанию пусто. Доступная подпись.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `appearance` | `type` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `kind` | `variant` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing` | `tightness` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="compact"` | `tightness="low"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="comfortable"` | `tightness="high"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `spacing="spacious"` | `tightness="highest"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="danger"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |
| `status="error"` | `status="critical"` | работает, отмечается в `SF.deprecations` | 2026-12-01 |

### Методы

- `setButtonAttributes(attributes?: object)` — возвращает `object`. Передаёт объект в setState() как buttonAttributes; встроенный шаблон его не читает, поэтому он доходит только до внешнего шаблона проекта. Возвращает элемент.
- `onClick(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик click на хост-элементе. Возвращает элемент.
- `onFocus(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик focusin на хост-элементе. Возвращает элемент.
- `onBlur(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик focusout на хост-элементе. Возвращает элемент.
- `onMouseEnter(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик mouseenter на хост-элементе. Возвращает элемент.
- `onMouseLeave(handler: function, options?: object|boolean)` — возвращает `object`. Добавляет обработчик mouseleave на хост-элементе. Возвращает элемент.
- `setDisabled(nextValue?: boolean)` — возвращает `object`. Устанавливает атрибут disabled, если nextValue истинно, и удаляет его в противном случае. Возвращает элемент.

### События

Своих событий нет; общие события базового элемента перечислены в главе [Жизненный цикл → Этапы](/ru/guide/smart-components/lifecycle/#этапы).

### Доступность

- Роль: кнопка (`button`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter`, `Space`.
- Фокус: Внутренняя нативная кнопка — единственный владелец фокуса. При активации указателем кольцо не отображается; фокус с клавиатуры использует focus-visible, а в объединённых элементах управления кольцо рисуется внутри.

### Минимальная разметка

```html
<sf-icon-button icon="add" aria-label="Add item"></sf-icon-button>
```

### Источник

- `simai/ui@99fd4f0bea6f7d2b1fbb38bca00d80102f0a62bb:distr/smart/icon-buttons`
- `simai/ui@99fd4f0bea6f7d2b1fbb38bca00d80102f0a62bb:distr/rule/rule.json#name=cl-icon-buttons`

## См. также

- [Buttons](/ru/smart-components/actions/buttons/) — кнопка с подписью.
- [Close](/ru/smart-components/actions/close/) — знак закрытия внутри своей кнопки.
