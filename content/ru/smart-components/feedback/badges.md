---
title: "Badges"
description: "Атрибуты, события и примеры Smart-компонента badges."
---

# Badges

Идентификатор: `smart.badges`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-badge>`.

Loader-статус: `registered`. Loader-правило: `cl-badges`.

Поставляемые ассеты:
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/badges/js/badges.js`
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/badges/template/default.js`

## Зависимости

- `component.badges`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `size` | `size` | `String` | `'1/3'` | `—` |
| `type` | `type` | `String` | `'main'` | `—` |
| `scheme` | `scheme` | `String` | `'neutral'` | `—` |
| `text` | `text` | `String` | `''` | `—` |
| `icon` | `icon` | `String` | `''` | `—` |
| `icon-start` | `iconStart` | `String` | `''` | `—` |
| `icon-end` | `iconEnd` | `String` | `''` | `—` |
| `icon-position` | `iconPosition` | `String` | `'start'` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get ariaLabel()`, `get icon()`, `get iconStart()`, `get iconPosition()`, `get iconEnd()`, `get scheme()`, `get size()`, `get templateName()`, `get text()`, `get type()`, `get value()`, `set value()`, `updateDom()`.

Логические имена `icon-start` и `icon-end` автоматически учитывают LTR и RTL.
Прежние `icon-left` и `icon-right` остаются совместимыми псевдонимами.

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
<sf-badge></sf-badge>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/badges`
- `simai/ui@aa74f029c1b4aa7fbbed61844866ba0172bef0a6:distr/rule/rule.json#name=cl-badges`
