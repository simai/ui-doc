---
title: "Tree Item"
description: "Атрибуты, события и примеры Smart-компонента tree-item."
---

# Tree Item

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-tree-item>` |
| Назначение | Один доступный узел иерархии Smart Tree. |
| Контракт | `smart.tree-item`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `label` | `string` | пусто | — | — |
| `text` | `string` | пусто | — | — |
| `href` | `string` | пусто | — | — |
| `target` | `string` | пусто | — | — |
| `rel` | `string` | пусто | — | — |
| `kind` | `string` | `folder` | `folder`, `file` | Тип элемента дерева: папка или файл. |
| `value` | `string` | пусто | — | — |
| `open` | `boolean` | `false` | — | — |
| `selected` | `boolean` | `false` | — | — |
| `active` | `boolean` | `false` | — | — |
| `disabled` | `boolean` | `false` | — | — |
| `items-data` | `array` | `[]` | — | — |
| `open-icon` | `string` | `folder_open` | — | — |
| `closed-icon` | `string` | `folder` | — | — |
| `icon` | `boolean` | `true` | — | — |
| `chevron-open-icon` | `string` | `keyboard_arrow_down` | — | — |
| `chevron-closed-icon` | `string` | `chevron_right` | — | — |
| `open-label` | `string` | `Open item` | — | — |
| `close-label` | `string` | `Close item` | — | — |
| `root-class` | `string` | пусто | — | — |
| `item-class` | `string` | пусто | — | — |
| `container-class` | `string` | пусто | — | — |
| `name-class` | `string` | пусто | — | — |

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает и предупреждает | 2026-12-01 |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `setOpen()` | — | не описано | — |
| `open()` | — | не описано | — |
| `close()` | — | не описано | — |
| `focusItem()` | — | `object` | Переносит фокус DOM на этот элемент дерева. |
| `activate()` | — | `object` | Активирует ссылку элемента или генерирует событие щелчка по элементу. |
| `toggle()` | — | не описано | — |
| `onToggle()` | — | не описано | — |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `sf-tree-item-click` | не описан | — |
| `sf-tree-item-toggle` | не описан | — |

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

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/tree-item`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-tree-item`
