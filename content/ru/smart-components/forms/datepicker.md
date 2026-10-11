---
title: "Datepicker"
description: "Атрибуты, события и примеры Smart-компонента datepicker."
---

# Datepicker

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-datepicker>` |
| Назначение | Доступный выбор даты и диапазона дат во всплывающем и встроенном режимах, с навигацией по календарю и значениями, которыми управляет элемент. |
| Контракт | `smart.datepicker`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | принят в продукт |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `value` | `string` | пусто | — | — |
| `date` | `string` | пусто | — | — |
| `start-value` | `string` | пусто | — | — |
| `end-value` | `string` | пусто | — | — |
| `max-date` | `string` | пусто | — | — |
| `min-date` | `string` | пусто | — | — |
| `range` | `boolean` | `false` | — | — |
| `month` | `number` | `null` | — | — |
| `year` | `number` | `null` | — | — |
| `context` | `string` | пусто | — | — |
| `week-start` | `number` | `1` | — | — |
| `locale` | `string` | пусто | — | — |
| `format` | `string` | `DD.MM.YYYY` | — | — |
| `root-class` | `string` | пусто | — | — |
| `close-on-select` | `boolean` | `true` | — | — |
| `input` | `boolean` | `true` | — | — |
| `open` | `boolean` | `false` | — | — |
| `portal` | `boolean` | `true` | — | — |
| `input-type` | `string` | `bordered` | — | — |
| `size` | `string` | `1` | `1/2`, `1`, `2` | Размер поля формы. |
| `input-name` | `string` | пусто | — | — |
| `placeholder` | `string` | пусто | — | — |
| `label` | `string` | пусто | — | — |
| `disabled` | `boolean` | `false` | — | — |
| `required` | `boolean` | `false` | — | — |
| `icon-start` | `string` | `calendar_today` | — | — |
| `left-icon` | `string` | `calendar_today` | — | — |
| `input-root-class` | `string` | пусто | — | — |
| `mask` | `boolean` | `false` | — | — |
| `mask-pattern` | `string` | `00.00.0000` | — | Маска ввода; если не задана, выводится из `format`, поэтому формат по умолчанию `DD.MM.YYYY` даёт `00.00.0000`. |
| `mask-lazy` | `string` | `false` | — | — |
| `mask-placeholder-char` | `string` | `_` | — | — |
| `mask-options` | `string` | пусто | — | — |

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `size` | `input-size` | работает и предупреждает | 2026-12-01 |
| `size="1/2"` | `size="1/3"` | работает и предупреждает | 2026-12-01 |
| `size="2"` | `size="3"` | работает и предупреждает | 2026-12-01 |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `setContext()` | `context: string` | `object` | Открывает контекст календаря: день, месяц или год. |
| `openPanel()` | `options: object` | `object` | Открывает всплывающее окно; при необходимости переносит фокус в календарь. |
| `closePanel()` | `options: object` | `object` | Закрывает всплывающее окно; при необходимости возвращает фокус в поле. |
| `togglePanel()` | — | `object` | Открывает или закрывает всплывающий список, не меняя выбранное значение. |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `change` | `{ value: string\|array, range: boolean, format: string, formattedValue?: string }` | Выбрана дата или граница диапазона; событие отправляется на элементе. Имя для привязки. |
| `sf-datepicker-change` | `{ value: string\|array, range: boolean, format: string, formattedValue?: string }` | Прежнее имя `change`: приходит с тем же `detail`, подписывайтесь на `change` |
| `sf-change` | не описан | Прежнее имя `change`: приходит с тем же `detail`, подписывайтесь на `change` |

### Доступность

- Роль: `dialog` в режиме popup; `group` в режиме inline.
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`, `Home`, `End`, `PageUp`, `PageDown`.
- Фокус: ArrowDown открывает всплывающее окно и переносит фокус на активный день. В порядке табуляции находится только один день. Escape закрывает всплывающее окно и возвращает фокус в поле. В RTL физические горизонтальные стрелки меняются местами, а хронологическое перемещение сохраняется.

### Минимальная разметка

```html
<sf-datepicker label="Дата" value="2026-09-03"></sf-datepicker>
```

### Источник

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/datepicker`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-datepicker`
