---
title: "Tree"
description: "Атрибуты, события и примеры Smart-компонента tree."
---

# Tree

Идентификатор: `smart.tree`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-tree>`.

Loader-статус: `registered`. Loader-правило: `cl-tree`.

Поставляемые ассеты:
- `simai/ui-smart@b100a5faf6a2979018db0a1dbc59e97eea48a411:smart/tree/css/tree.css`
- `simai/ui-smart@b100a5faf6a2979018db0a1dbc59e97eea48a411:smart/tree/js/tree.js`
- `simai/ui-smart@b100a5faf6a2979018db0a1dbc59e97eea48a411:smart/tree/template/default.css`
- `simai/ui-smart@b100a5faf6a2979018db0a1dbc59e97eea48a411:smart/tree/template/default.js`

## Зависимости

- `component.tree`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |
| `role` | `role` | `String` | `'tree'` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`captureInitialItems()`, `connectedCallback()`, `disconnectItemObserver()`, `disconnectedCallback()`, `get items()`, `observeItemChildren()`, `onToggle()`.

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
<sf-tree></sf-tree>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@b100a5faf6a2979018db0a1dbc59e97eea48a411:smart/tree`
- `simai/ui@d81ccde2bdd5230f20ca0811c0812d2eff1f6064:distr/rule/rule.json#name=cl-tree`
