---
title: "Datepicker"
description: "Атрибуты, события и примеры Smart-компонента datepicker."
---

# Datepicker

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-d34117c9f3f0` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-datepicker>` |
| Назначение | Доступный выбор даты и диапазона дат во всплывающем и встроенном режимах, с навигацией по календарю и значениями, которыми управляет элемент. |
| Контракт | `smart.datepicker`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-d34117c9f3f0` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | принят в продукт |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `value` — `string`, по умолчанию пусто.
- `date` — `string`, по умолчанию пусто.
- `start-value` — `string`, по умолчанию пусто.
- `end-value` — `string`, по умолчанию пусто.
- `max-date` — `string`, по умолчанию пусто.
- `min-date` — `string`, по умолчанию пусто.
- `range` — `boolean`, по умолчанию `false`.
- `month` — `number`, по умолчанию `null`.
- `year` — `number`, по умолчанию `null`.
- `context` — `string`, по умолчанию пусто.
- `week-start` — `number`, по умолчанию `1`.
- `locale` — `string`, по умолчанию пусто.
- `format` — `string`, по умолчанию `DD.MM.YYYY`.
- `root-class` — `string`, по умолчанию пусто.
- `close-on-select` — `boolean`, по умолчанию `true`.
- `input` — `boolean`, по умолчанию `true`.
- `open` — `boolean`, по умолчанию `false`.
- `portal` — `boolean`, по умолчанию `true`.
- `input-type` — `string`, по умолчанию `bordered`.
- `size` — `string`, по умолчанию `1`, значения: `1/2`, `1`, `2`. Размер поля формы.
- `input-name` — `string`, по умолчанию пусто.
- `placeholder` — `string`, по умолчанию пусто.
- `label` — `string`, по умолчанию пусто.
- `disabled` — `boolean`, по умолчанию `false`.
- `required` — `boolean`, по умолчанию `false`.
- `icon-start` — `string`, по умолчанию `calendar_today`.
- `left-icon` — `string`, по умолчанию `calendar_today`.
- `input-root-class` — `string`, по умолчанию пусто.
- `mask` — `boolean`, по умолчанию `false`.
- `mask-pattern` — `string`, по умолчанию `00.00.0000`. Маска ввода; если не задана, выводится из `format`, поэтому формат по умолчанию `DD.MM.YYYY` даёт `00.00.0000`.
- `mask-lazy` — `string`, по умолчанию `false`.
- `mask-placeholder-char` — `string`, по умолчанию `_`.
- `mask-options` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `size` | `input-size` | работает и предупреждает | 2026-12-01 |
| `size="1/2"` | `size="1/3"` | работает и предупреждает | 2026-12-01 |
| `size="2"` | `size="3"` | работает и предупреждает | 2026-12-01 |

### Методы

- `setContext(context: string)` — возвращает `object`. Открывает контекст календаря: день, месяц или год.
- `openPanel(options: object)` — возвращает `object`. Открывает всплывающее окно; при необходимости переносит фокус в календарь.
- `closePanel(options: object)` — возвращает `object`. Закрывает всплывающее окно; при необходимости возвращает фокус в поле.
- `togglePanel()` — возвращает `object`. Открывает или закрывает всплывающий список, не меняя выбранное значение.

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `change` — `detail`: `{ value: string|array, range: boolean, format: string, formattedValue?: string }`. Выбрана дата или граница диапазона; событие отправляется на элементе. Имя для привязки.
- `sf-datepicker-change` — устаревший псевдоним события `change`: приходит с тем же `detail`, подписывайтесь на `change`.
- `sf-change` — устаревший псевдоним события `change`: приходит с тем же `detail`, подписывайтесь на `change`.

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

- `simai/ui@d34117c9f3f00c677fb294ae77eef1a05422ee4c:distr/smart/datepicker`
- `simai/ui@d34117c9f3f00c677fb294ae77eef1a05422ee4c:distr/rule/rule.json#name=cl-datepicker`
