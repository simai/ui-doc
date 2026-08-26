---
title: "File Upload"
description: "API и runtime-контракт Smart-компонента file-upload в SIMAI Framework 5.4.0 candidate."
---

# File Upload

Идентификатор: `smart.file-upload`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-file-upload>`.

Loader-статус: `registered`. Loader-правило: `cl-file-upload`.

Поставляемые ассеты:
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/file-upload/js/file-upload.js`
- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/file-upload/template/default.js`

## Зависимости

- `component.featured-icon`
- `component.file-upload`
- `component.icon-buttons`
- `smart.progress-bar`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `size` | `size` | `String` | `'1'` | `['1/3', '1/2', '1', '2', '3']` |
| `icon` | `icon` | `String` | `'error'` | `—` |
| `link-text` | `linkText` | `String` | `'Click to upload'` | `—` |
| `text` | `text` | `String` | `'or drag and drop'` | `—` |
| `formats` | `formats` | `String` | `''` | `—` |
| `supporting-text` | `supportingText` | `String` | `''` | `—` |
| `accept` | `accept` | `String` | `''` | `—` |
| `multiple` | `multiple` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`beforeRender()`, `clear()`, `get accept()`, `get ariaLabel()`, `get componentName()`, `get disabled()`, `get formats()`, `get icon()`, `get items()`, `get linkText()`, `get multiple()`, `get size()`, `get state()`, `get supportingText()`, `get templateName()`, `get text()`, `getItems()`, `onComplete()`, `onFileAdd()`, `onFileComplete()`, `onFileError()`, `onFileRemove()`, `onFileRetry()`, `removeItem()`, `set items()`, `setItems()`, `setState()`, `syncRuntimeItems()`, `teardownRuntime()`.

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
<sf-file-upload></sf-file-upload>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@b57afb30c9b790212afcf451e16ae6e27a5ab6af:smart/file-upload`
- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=cl-file-upload`
