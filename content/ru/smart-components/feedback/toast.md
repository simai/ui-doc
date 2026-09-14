---
title: "Toast"
description: "Атрибуты, события и примеры Smart-компонента toast."
---

# Toast

Идентификатор: `smart.toast`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-toast>`.

Loader-статус: `registered`. Loader-правило: `cl-toast`.

Поставляемые ассеты:
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/toast/js/toast.js`
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/toast/template/default.js`

## Зависимости

- `component.buttons`
- `component.close`
- `component.icon-buttons`
- `component.icons`
- `component.toast`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `type` | `type` | `String` | `'default'` | `—` |
| `icon` | `icon` | `String` | `''` | `—` |
| `title` | `title` | `String` | `''` | `—` |
| `supporting-text` | `supportingText` | `String` | `''` | `—` |
| `action-text` | `actionText` | `String` | `''` | `—` |
| `action` | `action` | `String` | `'action'` | `—` |
| `closable` | `closable` | `Boolean` | `true` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`addToastListeners()`, `close()`, `dismiss()`, `get action()`, `get actionText()`, `get closable()`, `get icon()`, `get state()`, `get supportingText()`, `get title()`, `get type()`, `onAction()`, `onClose()`, `removeToastListeners()`, `setState()`.

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
<sf-toast></sf-toast>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/toast`
- `simai/ui@aa74f029c1b4aa7fbbed61844866ba0172bef0a6:distr/rule/rule.json#name=cl-toast`
