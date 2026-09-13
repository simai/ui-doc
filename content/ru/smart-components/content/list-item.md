---
title: "List Item"
description: "Декларативное описание пункта Dropdown и его runtime-контракт."
---

# List Item

Идентификатор: `smart.list-item`. Компонент описывает option для Dropdown и
использует те же стили строки, что обычная разметка Framework.

## Применение

`sf-list-item` предназначен для прямого вложения в `sf-dropdown`. Родитель
считывает его параметры до отрисовки и становится единственным владельцем
`listbox`, `option`, фокуса, выбора, формы и событий. Самостоятельно размещённый
List Item остаётся статическим визуальным представлением без `role="button"`,
Tab-фокуса и ложного click-поведения.

Все пять вариантов — text, icon, checkbox, avatar и color — показаны в рабочем
[примере типов пунктов Dropdown](/ru/components/navigation/dropdown/#типы-пунктов). Ниже
показаны их статические представления без ложного интерактивного поведения.

:::example {id="components/list-item/overview" label="Результат"}
:::

## Теги и подключение

Custom Elements: `<sf-list-item>`.

Loader-статус: `registered`. Loader-правило: `cl-list-item`.

Поставляемые ассеты:
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/list-item/js/list-item.js`
- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/list-item/template/default.js`

## Зависимости

- `component.avatars`
- `component.checkbox`
- `component.dropdown`
- `component.icons`
- `component.tags`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `value` | `itemValue` | `String` | `''` | `—` |
| `type` | `type` | `String` | `'text'` | `['text', 'icon', 'checkbox', 'avatar', 'color']` |
| `size` | `size` | `String` | `'1'` | `['1/3', '1/2', '1', '2', '3']` |
| `text` | `text` | `String` | `''` | `—` |
| `icon` | `icon` | `String` | `'person'` | `—` |
| `checked` | `checked` | `Boolean` | `false` | `—` |
| `selected` | `selected` | `Boolean` | `false` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `color-class` | `colorClass` | `String` | `'bg-tertiary'` | `—` |
| `avatar-image-url` | `avatarImageUrl` | `String` | `''` | `—` |
| `avatar-title` | `avatarTitle` | `String` | `''` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`get ariaLabel()`, `get avatarImageUrl()`, `get avatarTitle()`, `get checked()`, `get colorClass()`, `get componentName()`, `get disabled()`, `get icon()`, `get itemValue()`, `get selected()`, `get size()`, `get sizeGroup()`, `get templateName()`, `get text()`, `get type()`, `get value()`, `set value()`, `updateDom()`.

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
<sf-dropdown label="Статус" name="status" placeholder="Выберите статус">
  <sf-list-item value="open" text="Открыт"></sf-list-item>
  <sf-list-item value="done" text="Готов"></sf-list-item>
</sf-dropdown>
```

## Доступность

Внутри Dropdown общий renderer добавляет `role="option"`, `aria-selected`,
`aria-disabled` и машинное значение. Видимый текст становится доступным именем,
если `aria-label` явно его не переопределяет. Arrow Up/Down, Home, End, Enter,
Space и Escape принадлежат родительскому Dropdown.

Иконки, изображение аватара, цветовой образец и checkbox-индикатор декоративны:
они не создают ещё одну Tab-цель внутри option. Не помещайте в option независимые
ссылки, кнопки или поля; для такой коллекции нужен компонент с другим составным
контрактом.

## Источник

- `simai/ui-smart@77feccf8867a5676bad2cd78fbb3497d25816fac:smart/list-item`
- `simai/ui@1e886550a147bf63d7c3a4440af5e5855aaee485:distr/rule/rule.json#name=cl-list-item`
