---
title: "Reference Link"
description: "Атрибуты, события и примеры Smart-компонента reference-link."
---

# Reference Link

Идентификатор: `smart.reference-link`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-reference-link>`.

Loader-статус: `registered`. Loader-правило: `cl-reference-link`.

Поставляемые ассеты:
- `simai/ui-smart@d448fb5563ccaf472d2724bff24ff24460e5862c:smart/reference-link/js/reference-link.js`
- `simai/ui-smart@d448fb5563ccaf472d2724bff24ff24460e5862c:smart/reference-link/template/default.js`

## Зависимости

- `component.icons`
- `component.reference-link`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `icon` | `icon` | `String` | `'arrow_forward'` | `—` |
| `label` | `label` | `String` | `''` | `—` |
| `text` | `text` | `String` | `''` | `—` |
| `href` | `href` | `String` | `''` | `—` |
| `target` | `target` | `String` | `'_self'` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get ariaLabel()`, `get disabled()`, `get href()`, `get icon()`, `get label()`, `get target()`, `get templateName()`, `get text()`, `onClick()`.

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
<sf-reference-link></sf-reference-link>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@d448fb5563ccaf472d2724bff24ff24460e5862c:smart/reference-link`
- `simai/ui@d81ccde2bdd5230f20ca0811c0812d2eff1f6064:distr/rule/rule.json#name=cl-reference-link`
