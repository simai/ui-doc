---
title: "Context Menu"
description: "Атрибуты, события и примеры Smart-компонента context-menu."
---

# Context Menu

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-ec56cef08625` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-context-menu>` |
| Назначение | Презентационная поверхность меню действий с логическими позициями в конце и нативной работой с пунктами с клавиатуры. |
| Контракт | `smart.context-menu`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-ec56cef08625` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `position` — `string`, по умолчанию пусто, значения: пусто, `inline-start`, `inline-start-top`, `inline-start-bottom`, `inline-end`, `inline-end-top`, `inline-end-bottom`, `top`, `top-inline-start`, `top-inline-end`, `bottom`, `bottom-inline-start`, `bottom-inline-end`, `start`, `end`, `top-start`, `top-end`, `bottom-start`, `bottom-end`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left-start`, `left-end`, `right-start`, `right-end`, `inline-start-start`, `inline-start-end`, `inline-end-start`, `inline-end-end`.
- `tooltip` — `boolean`, по умолчанию `true`.
- `text` — `string`, по умолчанию пусто.
- `aria-label` — `string`, по умолчанию пусто.
- `items` — `array` из `object`, по умолчанию `[]`.
- `role` — `string`, по умолчанию `menu`.
- `content-class` — `string`, по умолчанию пусто.
- `root-class` — `string`, по умолчанию пусто.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `position="inline-start"` | `position="start"` | работает и предупреждает | 2026-12-01 |
| `position="inline-end"` | `position="end"` | работает и предупреждает | 2026-12-01 |
| `position="top-inline-start"` | `position="top-start"` | работает и предупреждает | 2026-12-01 |
| `position="top-inline-end"` | `position="top-end"` | работает и предупреждает | 2026-12-01 |
| `position="bottom-inline-start"` | `position="bottom-start"` | работает и предупреждает | 2026-12-01 |
| `position="bottom-inline-end"` | `position="bottom-end"` | работает и предупреждает | 2026-12-01 |
| `position="left-top"` | `position="left-start"` | работает и предупреждает | 2026-12-01 |
| `position="left-bottom"` | `position="left-end"` | работает и предупреждает | 2026-12-01 |
| `position="right-top"` | `position="right-start"` | работает и предупреждает | 2026-12-01 |
| `position="right-bottom"` | `position="right-end"` | работает и предупреждает | 2026-12-01 |
| `position="inline-start-top"` | `position="inline-start-start"` | работает и предупреждает | 2026-12-01 |
| `position="inline-start-bottom"` | `position="inline-start-end"` | работает и предупреждает | 2026-12-01 |
| `position="inline-end-top"` | `position="inline-end-start"` | работает и предупреждает | 2026-12-01 |
| `position="inline-end-bottom"` | `position="inline-end-end"` | работает и предупреждает | 2026-12-01 |

### Методы

- `focus(options?: object)` — возвращает `null`. Переносит фокус на текущий доступный нативный пункт в отрисованном меню по умолчанию. Вызывающий код должен дождаться отрисовки и сам управляет открытием и закрытием.

### События

Своих событий нет; общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

### Доступность

- Роль: меню (`menu`).
- Доступное имя: обязательно.
- Клавиши: `ArrowDown`, `ArrowUp`, `Home`, `End`, `Enter`, `Space`, `Tab`.
- Фокус: Меню по умолчанию: прямые нативные кнопки и ссылки, а также нативные элементы управления прямых дочерних `sf-button` получают роль `menuitem` и одну перемещаемую точку табуляции. Нативно отключённые и скрытые/инертные пункты пропускаются. Фокусом при открытии, закрытием по Escape/Tab и возвратом фокуса управляет хост. Произвольные виджеты и шаблоны, не являющиеся меню или пользовательские, не обрабатываются.

### Минимальная разметка

```html
<sf-context-menu aria-label="Действия с документом"><sf-button slot="content" type="link" scheme="on-surface" text="Переименовать"></sf-button><sf-button slot="content" type="link" scheme="on-surface" text="Создать копию"></sf-button></sf-context-menu>
```

### Источник

- `simai/ui@ec56cef08625058eaffe2050e1d79f8cbdd5c4f1:distr/smart/context-menu`
- `simai/ui@ec56cef08625058eaffe2050e1d79f8cbdd5c4f1:distr/rule/rule.json#name=cl-context-menu`
