---
title: "Alert"
description: "Атрибуты, события и примеры Smart-компонента alert."
---

# Alert

Идентификатор: `smart.alert`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-alert>`.

Loader-статус: `registered`. Loader-правило: `cl-alert`.

Поставляемые ассеты:
Не поставляется в текущем пакете: `smart/alert/css/alert.css`.
- `simai/ui-smart@6f2ee779feb8979d1eb3f7a19cec8263e8f18887:smart/alert/js/alert.js`
- `simai/ui-smart@6f2ee779feb8979d1eb3f7a19cec8263e8f18887:smart/alert/template/default.js`

## Зависимости

- `component.alerts`
- `component.buttons`
- `component.icon-buttons`
- `component.icons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `status` | `status` | `String` | `'neutral'` | `neutral`, `info`, `success`, `warning`, `error` |
| `appearance` | `appearance` | `String` | `'default'` | `default`, `outlined`, `flat` |
| `icon` | `icon` | `String` | `''` | `—` |
| `title` | `title` | `String` | `''` | `—` |
| `supporting-text` | `supportingText` | `String` | `''` | `—` |
| `action-text` | `actionText` | `String` | `''` | `—` |
| `action` | `action` | `String` | `'action'` | `—` |
| `secondary-action-text` | `secondaryActionText` | `String` | `''` | `—` |
| `secondary-action` | `secondaryAction` | `String` | `'secondary'` | `—` |
| `closable` | `closable` | `Boolean` | `false` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Прежние имена продолжают работать и считаются устаревшими: `type` — как `status`, `variant` — как `appearance`. В новой разметке берите имена осей.

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`addAlertListeners()`, `close()`, `dismiss()`, `get action()`, `get actionText()`, `get closable()`, `get icon()`, `get secondaryAction()`, `get secondaryActionText()`, `get supportingText()`, `get title()`, `get type()`, `get variant()`, `onAction()`, `onClose()`, `removeAlertListeners()`.

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
<sf-alert></sf-alert>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@6f2ee779feb8979d1eb3f7a19cec8263e8f18887:smart/alert`
- `simai/ui@c3ceb10e8459209232474b770bae87efa738cc3d:distr/rule/rule.json#name=cl-alert`
