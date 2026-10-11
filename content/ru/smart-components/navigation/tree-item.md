---
title: "Tree Item"
description: "Атрибуты, события и примеры Smart-компонента tree-item."
---

# Tree Item

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-ec56cef08625` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-tree-item>` |
| Назначение | Один доступный узел иерархии Smart Tree. |
| Контракт | `smart.tree-item`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-ec56cef08625` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `label` — `string`, по умолчанию пусто.
- `text` — `string`, по умолчанию пусто.
- `href` — `string`, по умолчанию пусто.
- `target` — `string`, по умолчанию пусто.
- `rel` — `string`, по умолчанию пусто.
- `kind` — `string`, по умолчанию `folder`, значения: `folder`, `file`. Тип элемента дерева: папка или файл.
- `value` — `string`, по умолчанию пусто.
- `open` — `boolean`, по умолчанию `false`.
- `selected` — `boolean`, по умолчанию `false`.
- `active` — `boolean`, по умолчанию `false`.
- `disabled` — `boolean`, по умолчанию `false`.
- `items-data` — `array`, по умолчанию `[]`.
- `open-icon` — `string`, по умолчанию `folder_open`.
- `closed-icon` — `string`, по умолчанию `folder`.
- `icon` — `boolean`, по умолчанию `true`.
- `chevron-open-icon` — `string`, по умолчанию `keyboard_arrow_down`.
- `chevron-closed-icon` — `string`, по умолчанию `chevron_right`.
- `open-label` — `string`, по умолчанию `Open item`.
- `close-label` — `string`, по умолчанию `Close item`.
- `root-class` — `string`, по умолчанию пусто.
- `item-class` — `string`, по умолчанию пусто.
- `container-class` — `string`, по умолчанию пусто.
- `name-class` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает и предупреждает | 2026-12-01 |

### Методы

- `setOpen()`
- `open()`
- `close()`
- `focusItem()` — возвращает `object`. Переносит фокус DOM на этот элемент дерева.
- `activate()` — возвращает `object`. Активирует ссылку элемента или генерирует событие щелчка по элементу.
- `toggle()`
- `onToggle()`

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `sf-tree-item-click` — `detail` не описан.
- `sf-tree-item-toggle` — `detail` не описан.

### Доступность

- Роль: элемент дерева (`treeitem`).
- Доступное имя: обязательно.
- Клавиши: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `Enter`, `Space`.
- Фокус: Дерево управляет перемещаемым фокусом (roving focus); раскрытие, фокус и выбор независимы.

### Минимальная разметка

```html
<sf-tree-item></sf-tree-item>
```

### Источник

- `simai/ui@ec56cef08625058eaffe2050e1d79f8cbdd5c4f1:distr/smart/tree-item`
- `simai/ui@ec56cef08625058eaffe2050e1d79f8cbdd5c4f1:distr/rule/rule.json#name=cl-tree-item`
