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
- `simai/ui-smart@41fd1892b345287f6a75f55080a4a3552b865037:smart/skeleton/js/skeleton.js`
- `simai/ui-smart@41fd1892b345287f6a75f55080a4a3552b865037:smart/skeleton/template/default.js`

## Зависимости

- `component.skeleton`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1'` | `1/7`, `1/6`, `1/5`, `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7` |
| `width` | `width` | `String` | `'100%'` | `—` |
| `height` | `height` | `String` | `''` | `—` |
| `count` | `count` | `Number` | `1` | `—` |
| `animation` | `animation` | `String` | `'pulse'` | `—` |
| `kind` | `kind` | `String` | `'text'` | `text`, `circle`, `square`, `rounded` |
| `items` | `items` | `String` | `''` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Прежнее имя продолжает работать и считается устаревшим: `variant` — как `kind`. В новой разметке берите имена осей.

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

- `simai/ui-smart@41fd1892b345287f6a75f55080a4a3552b865037:smart/skeleton`
- `simai/ui@09fb1716e7077b17ac0be1c322916188de77c508:distr/rule/rule.json#name=cl-skeleton`
