---
title: "Close"
description: "Атрибуты, события и примеры Smart-компонента close."
---

# Close

Идентификатор: `smart.close`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-close>`.

Loader-статус: `registered`. Loader-правило: `cl-close`.

Поставляемые ассеты:
- `simai/ui-smart@a077e58b7402a6ccfa1001fe1b821c137055d97e:smart/close/js/close.js`
- `simai/ui-smart@a077e58b7402a6ccfa1001fe1b821c137055d97e:smart/close/template/default.js`

## Зависимости

- `component.close`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `size` | `size` | `String` | `'1/3'` | `1/4`, `1/3`, `1/2`, `1`, `2`, `3`, `4`, `5`, `6`, `7` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get size()`.

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
<sf-close></sf-close>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@a077e58b7402a6ccfa1001fe1b821c137055d97e:smart/close`
- `simai/ui@5c75c13d79b8604238e05223c7fd61f35e969bf4:distr/rule/rule.json#name=cl-close`
