---
title: "Dropdown"
description: "Атрибуты, события и примеры Smart-компонента dropdown."
---

# Dropdown

Идентификатор: `smart.dropdown`. Smart-компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Теги и подключение

Custom Elements: `<sf-dropdown>`.

Loader-статус: `registered`. Loader-правило: `cl-dropdown`.

Поставляемые ассеты:
- `simai/ui-smart@9aacd94f40beda9df4ce0717b36e3adc2f6deb17:smart/dropdown/js/dropdown.js`
- `simai/ui-smart@9aacd94f40beda9df4ce0717b36e3adc2f6deb17:smart/dropdown/template/default.js`

## Зависимости

- `component.dropdown`
- `component.icon-buttons`
- `component.inputs`

## Атрибуты и свойства

| Атрибут | Свойство | Тип | По умолчанию | Допустимые значения |
|:---|:---|:---|:---|:---|
| `template` | `templateName` | `String` | `'default'` | `—` |
| `size` | `size` | `String` | `'1'` | `1/3`, `1/2`, `1`, `2`, `3` |
| `appearance` | `appearance` | `String` | `'filled'` | `filled`, `outlined` |
| `mode` | `mode` | `String` | `'select'` | `['tag', 'select']` |
| `multiple` | `multiple` | `Boolean` | `false` | `—` |
| `portal` | `portal` | `Boolean` | `true` | `—` |
| `value` | `value` | `String` | `''` | `—` |
| `name` | `name` | `String` | `''` | `—` |
| `label` | `label` | `String` | `''` | `—` |
| `required` | `required` | `Boolean` | `false` | `—` |
| `placeholder` | `placeholder` | `String` | `''` | `—` |
| `search-placeholder` | `searchPlaceholder` | `String` | `'Placeholder'` | `—` |
| `search` | `search` | `Boolean` | `true` | `—` |
| `disabled` | `disabled` | `Boolean` | `false` | `—` |
| `aria-label` | `ariaLabel` | `String` | `''` | `—` |

Прежнее имя продолжает работать и считается устаревшим: `type` — как `appearance`. В новой разметке берите имена осей.

Общие атрибуты базового Smart-элемента:

| Атрибут | Тип | Назначение |
|:---|:---|:---|
| `root-class` | `String` | Классы корневого элемента шаблона |
| `root-style` | `String` | Inline-стили корневого элемента шаблона |
| `style` | `String` | Стили host-элемента |

## Методы

`beforeRender()`, `captureOptions()`, `closeDropdown()`, `connectedCallback()`, `dispatchDropdownChange()`, `get ariaLabel()`, `get componentName()`, `get disabled()`, `get hiddenValue()`, `get label()`, `get mode()`, `get multiple()`, `get name()`, `get options()`, `get placeholder()`, `get portal()`, `get required()`, `get search()`, `get searchPlaceholder()`, `get selectedOptions()`, `get selectedValue()`, `get selectedValues()`, `get size()`, `get templateName()`, `get triggerText()`, `get type()`, `get value()`, `get visibleOptions()`, `handleDocumentClick()`, `handleOptionClick()`, `handleOptionKeydown()`, `handleSearchInput()`, `handleTriggerClick()`, `openDropdown()`, `positionPortalList()`, `removeDocumentListeners()`, `removePortalListeners()`, `removeSelectedValue()`, `selectValue()`, `set value()`, `syncDocumentListeners()`, `syncPortalListeners()`, `toggleDropdown()`.

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
<sf-dropdown></sf-dropdown>
```

## Имя, подпись и пояснение

`name` — машинное имя отправляемого значения, а `label` — видимая подпись
поля. Они не дублируют друг друга. `placeholder` показывает приглашение к
выбору, но не заменяет подпись. `search-placeholder` относится только к поиску
внутри раскрытого списка.

Для обычной формы передавайте видимый `label`. В текущем контракте Dropdown
также принимает `aria-label`; задавайте ему тот же локализованный смысл, если
адаптеру требуется отдельное доступное имя корневого элемента.

```html
<sf-dropdown
  name="view"
  label="Представление"
  aria-label="Представление"
  placeholder="Выберите представление">
  <sf-list-item value="all" text="Все элементы"></sf-list-item>
  <sf-list-item value="active" text="Активные"></sf-list-item>
</sf-dropdown>
```

В компактной панели инструментов подпись можно скрыть только визуально,
сохранив её для вспомогательных технологий. Это решается композицией панели и
не вводит другой вариант вызова Dropdown.

## Доступность

Сохраняйте доступное имя, порядок фокуса, управление клавиатурой и объявление
состояний. Не используйте один `placeholder` вместо `label`. Сгенерированная
API-страница подтверждает source-контракт, но не заменяет сценарную проверку
доступности.

## Источник

- `simai/ui-smart@9aacd94f40beda9df4ce0717b36e3adc2f6deb17:smart/dropdown`
- `simai/ui@60ad90091c15f031aa0026c1ac03a4d025ed1345:distr/rule/rule.json#name=cl-dropdown`
