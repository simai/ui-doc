---
title: "Breadcrumbs"
description: "Атрибуты, события и примеры Smart-компонента breadcrumbs."
---

# Breadcrumbs

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-d34117c9f3f0` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-breadcrumbs>` |
| Назначение | Smart-компонент Breadcrumbs из SIMAI Framework. |
| Контракт | `smart.breadcrumbs`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-d34117c9f3f0` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `items` — `string`, по умолчанию `[]`.
- `separator-icon` — `string`, по умолчанию `chevron_right`.
- `home-icon` — `string`, по умолчанию `home`.
- `home-label` — `string`, по умолчанию пусто.
- `root-class` — `string`, по умолчанию пусто.
- `item-class` — `string`, по умолчанию пусто.
- `link-class` — `string`, по умолчанию пусто.
- `current-class` — `string`, по умолчанию пусто.
- `separator-class` — `string`, по умолчанию пусто.
- `container-class` — `string`, по умолчанию пусто.
- `aria-label` — `string`, по умолчанию `Breadcrumb`.
- `expand-label` — `string`, по умолчанию `Show hidden breadcrumbs`.
- `expand-on-ellipsis` — `boolean`, по умолчанию `true`.
- `max-items` — `number`, по умолчанию `4`.

### Методы

- `getCapturedItems()`
- `getDisplayItems()`
- `setState()`
- `onItemClick()`

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

- `sf-breadcrumb-click` — `detail` не описан.

### Доступность

- Роль: навигация (`navigation`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter on links`, `Enter or Space on the ellipsis button`.
- Фокус: Нативные ссылки и кнопка с многоточием используют `focus-visible` только для клавиатуры; текущая страница не входит в порядок табуляции.

### Минимальная разметка

```html
<sf-breadcrumbs></sf-breadcrumbs>
```

### Источник

- `simai/ui@d34117c9f3f00c677fb294ae77eef1a05422ee4c:distr/smart/breadcrumbs`
- `simai/ui@d34117c9f3f00c677fb294ae77eef1a05422ee4c:distr/rule/rule.json#name=cl-breadcrumbs`
