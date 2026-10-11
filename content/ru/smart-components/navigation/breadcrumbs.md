---
title: "Breadcrumbs"
description: "Атрибуты, события и примеры Smart-компонента breadcrumbs."
---

# Breadcrumbs

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-breadcrumbs>` |
| Назначение | Smart-компонент Breadcrumbs из SIMAI Framework. |
| Контракт | `smart.breadcrumbs`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `items` | `string` | `[]` | — | — |
| `separator-icon` | `string` | `chevron_right` | — | — |
| `home-icon` | `string` | `home` | — | — |
| `home-label` | `string` | пусто | — | — |
| `root-class` | `string` | пусто | — | — |
| `item-class` | `string` | пусто | — | — |
| `link-class` | `string` | пусто | — | — |
| `current-class` | `string` | пусто | — | — |
| `separator-class` | `string` | пусто | — | — |
| `container-class` | `string` | пусто | — | — |
| `aria-label` | `string` | `Breadcrumb` | — | — |
| `expand-label` | `string` | `Show hidden breadcrumbs` | — | — |
| `expand-on-ellipsis` | `boolean` | `true` | — | — |
| `max-items` | `number` | `4` | — | — |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `getCapturedItems()` | — | не описано | — |
| `getDisplayItems()` | — | не описано | — |
| `setState()` | — | не описано | — |
| `onItemClick()` | — | не описано | — |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `sf-breadcrumb-click` | не описан | — |

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

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/breadcrumbs`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-breadcrumbs`
