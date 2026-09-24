---
title: "File Preview"
description: "Атрибуты, события и примеры Smart-компонента file-preview."
---

# File Preview

Идентификатор: `smart.file-preview`. Smart-компонент заблокирован; жизненный цикл — экспериментальный.

## Блокирующее ограничение

Компонент нельзя рекомендовать для нового проекта: `loader_rule_missing`. До появления Loader-правила подключение не считается публичным контрактом.

## Теги и подключение

Публичный Custom Element в текущем манифесте не подтверждён.

Loader-статус: `unregistered`.

Поставляемые ассеты:
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/file-preview/js/file-preview.js`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `"default"` | `—` |
| `name` | `name` | `String` | `""` | `—` |
| `file-name` | `fileName` | `String` | `""` | `—` |
| `size` | `size` | `String` | `""` | `—` |
| `file-size` | `fileSize` | `String` | `""` | `—` |
| `icon` | `icon` | `String` | `"save"` | `—` |
| `href` | `href` | `String` | `""` | `—` |
| `type` | `type` | `String` | `"default"` | `—` |
| `mime-type` | `mimeType` | `String` | `""` | `—` |
| `image-url` | `imageUrl` | `String` | `""` | `—` |
| `avatar-size` | `avatarSize` | `String` | `"3"` | `—` |
| `open` | `open` | `Boolean` | `!1` | `—` |
| `download` | `download` | `Boolean` | `!0` | `—` |
| `target` | `target` | `String` | `"_blank"` | `—` |
| `actions` | `actions` | `Boolean` | `!0` | `—` |
| `download-action` | `downloadAction` | `Boolean` | `!0` | `—` |
| `remove-action` | `removeAction` | `Boolean` | `!0` | `—` |
| `disabled` | `disabled` | `Boolean` | `!1` | `—` |
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

- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/file-preview`
