---
title: "Editor"
description: "API и runtime-контракт Smart-компонента editor в SIMAI Framework 5.4.0 candidate."
---

# Editor

Идентификатор: `smart.editor`. Smart-компонент заблокирован; жизненный цикл — экспериментальный.

## Блокирующее ограничение

Компонент нельзя рекомендовать для нового проекта: `loader_rule_missing`. До появления Loader-правила подключение не считается публичным контрактом.

## Теги и подключение

Публичный Custom Element в текущем манифесте не подтверждён.

Loader-статус: `unregistered`.

Поставляемые ассеты:
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/editor/css/editor.css`
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/editor/js/editor.js`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `"default"` | `—` |
| `size` | `size` | `String` | `"1"` | `—` |
| `type` | `type` | `String` | `"bordered"` | `—` |
| `label` | `label` | `String` | `""` | `—` |
| `required` | `required` | `Boolean` | `!1` | `—` |
| `placeholder` | `placeholder` | `String` | `""` | `—` |
| `hint` | `hint` | `String` | `""` | `—` |
| `value` | `value` | `String` | `""` | `—` |
| `name` | `name` | `String` | `""` | `—` |
| `rows` | `rows` | `Number` | `4` | `—` |
| `default-value` | `defaultValue` | `String` | `""` | `—` |
| `disabled` | `disabled` | `Boolean` | `!1` | `—` |
| `readonly` | `readonly` | `Boolean` | `!1` | `—` |
| `error` | `error` | `Boolean` | `!1` | `—` |
| `toolbar` | `toolbar` | `String` | `"basic"` | `—` |
| `actions` | `actions` | `String` | `""` | `—` |
| `root-class` | `rootClass` | `String` | `""` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

Отдельный публичный метод в source-классе не подтверждён; используйте атрибуты и DOM events.

## События

Все события всплывают (`bubbles`) и проходят границу Shadow DOM (`composed`).

| Событие | Когда возникает |
|:---|:---|
| `sf-connected` | Элемент подключён к DOM |
| `sf-disconnected` | Элемент отключён от DOM |
| `sf-before-render` | Начало цикла отрисовки |
| `sf-after-render` | Цикл отрисовки завершён |
| `sf-updated` | Свойства или разметка обновлены |
| `sf-props-change` | Изменились наблюдаемые свойства |

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/editor`
