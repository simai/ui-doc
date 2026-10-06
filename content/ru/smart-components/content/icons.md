---
title: "Icons"
description: "Атрибуты, события и примеры Smart-компонента icons."
---

# Icons

Идентификатор: `smart.icons`. Smart-компонент готов к использованию; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-icon>`.

Loader-статус: `registered`. Loader-правило: `cl-icons`.

Поставляемые ассеты:
- `simai/ui-smart@fa27e7961a593ae8d5ae28f94693a84c649bf3b8:smart/icons/js/icons.js`
- `simai/ui-smart@fa27e7961a593ae8d5ae28f94693a84c649bf3b8:smart/icons/template/default.js`

## Зависимости

- `component.icons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `icon` | `icon` | `String` | `""` | `—` |
| `loaded` | `loaded` | `Boolean` | `false` | `—` |
| `filled` | `filled` | `Boolean` | `false` | `—` |
| `weight` | `weight` | `Number` | `400` | `—` |
| `size` | `size` | `String` | `""` | пусто, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`attributeChangedCallback()`, `connectedCallback()`, `disconnectedCallback()`, `get iconType()`, `get templateData()`, `get weightClass()`, `requestIconLoad()`, `syncLoadedState()`.

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
<sf-icon></sf-icon>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@fa27e7961a593ae8d5ae28f94693a84c649bf3b8:smart/icons`
- `simai/ui@781c13930394a6ac4b57fec307f83037f15b11e1:distr/rule/rule.json#name=cl-icons`
