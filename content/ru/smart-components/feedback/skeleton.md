---
title: "Skeleton"
description: "Атрибуты, события и примеры Smart-компонента skeleton."
---

# Skeleton

Идентификатор: `smart.skeleton`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-skeleton>`.

Loader-статус: `registered`. Loader-правило: `cl-skeleton`.

Поставляемые ассеты:
- `simai/ui-smart@004424a4b2e92b9cf09347b205637b475e1d8ba3:smart/skeleton/js/skeleton.js`
- `simai/ui-smart@004424a4b2e92b9cf09347b205637b475e1d8ba3:smart/skeleton/template/default.js`

## Зависимости

- `component.skeleton`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `—` |
| `width` | `width` | `String` | `'100%'` | `—` |
| `height` | `height` | `String` | `''` | `—` |
| `count` | `count` | `Number` | `1` | `—` |
| `animation` | `animation` | `String` | `'pulse'` | `—` |
| `variant` | `variant` | `String` | `'text'` | `—` |
| `type` | `type` | `String` | `''` | `—` |
| `items` | `items` | `String` | `''` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get animation()`, `get count()`, `get height()`, `get items()`, `get size()`, `get state()`, `get type()`, `get variant()`, `get width()`, `setState()`.

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
<sf-skeleton></sf-skeleton>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@004424a4b2e92b9cf09347b205637b475e1d8ba3:smart/skeleton`
- `simai/ui@d81ccde2bdd5230f20ca0811c0812d2eff1f6064:distr/rule/rule.json#name=cl-skeleton`
