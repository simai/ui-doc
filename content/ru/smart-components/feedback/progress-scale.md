---
title: "Progress Scale"
description: "Атрибуты, события и примеры Smart-компонента progress-scale."
---

# Progress Scale

Идентификатор: `smart.progress-scale`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-progress-scale>`.

Loader-статус: `registered`. Loader-правило: `cl-progress-scale`.

Поставляемые ассеты:
- `simai/ui-smart@6c5d313aca4dbc429765a5bc1176c66b2ef7d654:smart/progress-scale/js/progress-scale.js`
- `simai/ui-smart@6c5d313aca4dbc429765a5bc1176c66b2ef7d654:smart/progress-scale/template/default.js`

## Зависимости

- `component.progress-scale`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `size` | `size` | `String` | `'1'` | `—` |
| `value` | `value` | `String` | `'0'` | `—` |
| `show-text` | `showText` | `Boolean` | `true` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get showText()`, `get size()`, `get state()`, `get templateName()`, `get value()`, `getProgress()`, `set showText()`, `set value()`, `setProgress()`, `updateDom()`.

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
<sf-progress-scale></sf-progress-scale>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@6c5d313aca4dbc429765a5bc1176c66b2ef7d654:smart/progress-scale`
- `simai/ui@1f1c9d42d964321ba97c3bdfbea66048946886f7:distr/rule/rule.json#name=cl-progress-scale`
