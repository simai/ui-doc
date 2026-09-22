---
title: "Context Menu"
description: "Атрибуты, события и примеры Smart-компонента context-menu."
---

# Context Menu

Идентификатор: `smart.context-menu`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-context-menu>`.

Loader-статус: `registered`. Loader-правило: `cl-context-menu`.

Поставляемые ассеты:
- `simai/ui-smart@89e4e531ea81bf9c5f03bed0b774ff3edeff29bb:smart/context-menu/js/context-menu.js`
- `simai/ui-smart@89e4e531ea81bf9c5f03bed0b774ff3edeff29bb:smart/context-menu/template/default.js`

## Зависимости

- `component.context-menu`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `"default"` | `—` |
| `position` | `position` | `String` | `""` | `—` |
| `tooltip` | `tooltip` | `Boolean` | `true` | `—` |
| `text` | `text` | `String` | `""` | `—` |
| `aria-label` | `ariaLabel` | `String` | `""` | `—` |
| `items` | `items` | `Array` | `[]` | `—` |
| `role` | `role` | `String` | `"menu"` | `—` |
| `content-class` | `contentClass` | `String` | `""` | `—` |
| `root-class` | `rootClass` | `String` | `""` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get ariaLabel()`, `get contentClass()`, `get position()`, `get role()`, `get templateName()`, `get text()`, `get tooltip()`.

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

## Минимальная разметка

```html
<sf-context-menu></sf-context-menu>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@89e4e531ea81bf9c5f03bed0b774ff3edeff29bb:smart/context-menu`
- `simai/ui@5b4289bda9a9969ca2b28879883d794740d08ef6:distr/rule/rule.json#name=cl-context-menu`
