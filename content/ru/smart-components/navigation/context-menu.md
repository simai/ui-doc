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
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/context-menu/js/context-menu.js`
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/context-menu/template/default.js`

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

- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/context-menu`
- `simai/ui@aa74f029c1b4aa7fbbed61844866ba0172bef0a6:distr/rule/rule.json#name=cl-context-menu`
