---
title: "Avatars"
description: "Атрибуты, события и примеры Smart-компонента avatars."
---

# Avatars

Идентификатор: `smart.avatars`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-avatars>`.

Loader-статус: `registered`. Loader-правило: `cl-avatars`.

Поставляемые ассеты:
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/css/avatars.css`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/js/avatars.js`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/template/default/index.html`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/template/default.js`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/template/group/index.html`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/template/label/index.html`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/template/profile/index.html`
- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars/template/user/index.html`

## Зависимости

- `component.avatars`
- `component.icons`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `data` | `data` | `String` | `''` | `—` |
| `property` | `property` | `String` | `''` | `—` |
| `image-url` | `imageUrl` | `String` | `''` | `—` |
| `avatar-url` | `avatarUrl` | `String` | `''` | `—` |
| `avatar-size` | `avatarSize` | `String` | `''` | `—` |
| `active` | `active` | `Boolean` | `false` | `—` |
| `check` | `check` | `Boolean` | `false` | `—` |
| `name` | `name` | `String` | `''` | `—` |
| `source` | `source` | `String` | `''` | `—` |
| `label-text` | `labelText` | `String` | `''` | `—` |
| `label-second-text` | `labelSecondText` | `String` | `''` | `—` |
| `avatars` | `avatars` | `Array` | `[]` | `—` |
| `avatars-more` | `avatarsMore` | `String` | `''` | `—` |
| `round-size` | `roundSize` | `String` | `''` | `—` |
| `label-size` | `labelSize` | `String` | `''` | `—` |
| `profile-size` | `profileSize` | `String` | `''` | `—` |
| `root-class` | `rootClass` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get active()`, `get avatarSize()`, `get avatarUrl()`, `get avatars()`, `get avatarsMore()`, `get check()`, `get dataValue()`, `get imageUrl()`, `get labelSecondText()`, `get labelSize()`, `get labelText()`, `get name()`, `get profileSize()`, `get propertyValue()`, `get rootClass()`, `get roundSize()`, `get source()`, `get templateName()`, `get value()`, `hasBuiltInTemplate()`, `set value()`.

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
<sf-avatars></sf-avatars>
```

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Источник

- `simai/ui-smart@81741eac168dad74db23beffe66342c5c5924af5:smart/avatars`
- `simai/ui@cb1cda3016487e6b2be8c36b60bba0eea062d6a1:distr/rule/rule.json#name=cl-avatars`
