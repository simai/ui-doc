---
title: "Fab"
description: "API и runtime-контракт Smart-компонента fab в SIMAI Framework 5.4.0 candidate."
---

# Fab

Идентификатор: `smart.fab`. Smart-компонент заблокирован; жизненный цикл — экспериментальный.

## Блокирующее ограничение

Компонент нельзя рекомендовать для нового проекта: `loader_rule_missing`. До появления Loader-правила подключение не считается публичным контрактом.

## Теги и подключение

Публичный Custom Element в текущем манифесте не подтверждён.

Loader-статус: `unregistered`.

Поставляемые ассеты:
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/fab/js/fab.js`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `"default"` | `—` |
| `size` | `size` | `String` | `"1"` | `—` |
| `type` | `type` | `String` | `"default"` | `—` |
| `scheme` | `scheme` | `String` | `"primary"` | `—` |
| `icon` | `icon` | `String` | `"chevron_left"` | `—` |
| `action` | `action` | `String` | `""` | `—` |
| `visible` | `visible` | `Boolean` | `!0` | `—` |
| `rotate` | `rotate` | `String` | `"90"` | `["none","0","45","90","180"]` |
| `position` | `position` | `String` | `"fixed"` | `["fixed","absolute","relative","static","sticky"]` |
| `placement-class` | `placementClass` | `String` | `"block-end-b6 inline-end-b6 md:block-end-c5 md:inline-end-c5"` | `—` |
| `root-class` | `rootClass` | `String` | `""` | `—` |
| `disabled` | `disabled` | `Boolean` | `!1` | `—` |
| `native-type` | `nativeType` | `String` | `"button"` | `—` |
| `aria-label` | `ariaLabel` | `String` | `""` | `—` |

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

- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/fab`
