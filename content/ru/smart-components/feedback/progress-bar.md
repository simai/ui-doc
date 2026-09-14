---
title: "Progress Bar"
description: "Атрибуты, события и примеры Smart-компонента progress-bar."
---

# Progress Bar

Идентификатор: `smart.progress-bar`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-progress-bar>`.

Loader-статус: `registered`. Loader-правило: `cl-progress-bar`.

Поставляемые ассеты:
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/progress-bar/js/progress-bar.js`
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/progress-bar/template/default.js`

## Зависимости

- `component.progress-bar`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `size` | `size` | `String` | `'1'` | `—` |
| `value` | `value` | `String` | `'0'` | `—` |
| `text-position` | `textPosition` | `String` | `'none'` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get size()`, `get state()`, `get templateName()`, `get textPosition()`, `get value()`, `getProgress()`, `set textPosition()`, `set value()`, `setProgress()`, `setTextPosition()`, `updateDom()`.

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
<sf-progress-bar></sf-progress-bar>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/progress-bar`
- `simai/ui@aa74f029c1b4aa7fbbed61844866ba0172bef0a6:distr/rule/rule.json#name=cl-progress-bar`
