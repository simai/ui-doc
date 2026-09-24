---
title: "Download File"
description: "Атрибуты, события и примеры Smart-компонента download-file."
---

# Download File

Идентификатор: `smart.download-file`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-download-file>`.

Loader-статус: `registered`. Loader-правило: `cl-download-file`.

Поставляемые ассеты:
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/download-file/js/download-file.js`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/download-file/template/default.js`

## Зависимости

- `component.download-file`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `size` | `size` | `String` | `'1'` | `—` |
| `file-name` | `fileName` | `String` | `'File.pdf'` | `—` |
| `file-size` | `fileSize` | `String` | `''` | `—` |
| `icon` | `icon` | `String` | `'download'` | `—` |
| `href` | `href` | `String` | `''` | `—` |
| `download` | `download` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `target` | `target` | `String` | `'_blank'` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get ariaLabel()`, `get disabled()`, `get download()`, `get fileName()`, `get fileSize()`, `get href()`, `get icon()`, `get size()`, `get target()`, `get templateName()`.

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
<sf-download-file></sf-download-file>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/download-file`
- `simai/ui@cb1cda3016487e6b2be8c36b60bba0eea062d6a1:distr/rule/rule.json#name=cl-download-file`
