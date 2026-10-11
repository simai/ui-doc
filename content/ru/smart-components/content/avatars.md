---
title: "Avatars"
description: "Атрибуты, события и примеры Smart-компонента avatars."
---

# Avatars

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-avatars>` |
| Назначение | Smart-компонент Avatars из SIMAI Framework. |
| Контракт | `smart.avatars`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default`, `user`, `group`, `label`, `profile` | — |
| `data` | `string` | пусто | — | — |
| `property` | `string` | пусто | — | — |
| `image-url` | `string` | пусто | — | — |
| `avatar-url` | `string` | пусто | — | — |
| `avatar-size` | `string` | пусто | — | — |
| `active` | `boolean` | `false` | — | — |
| `check` | `boolean` | `false` | — | — |
| `name` | `string` | пусто | — | — |
| `source` | `string` | пусто | — | — |
| `label-text` | `string` | пусто | — | — |
| `label-second-text` | `string` | пусто | — | — |
| `avatars` | `array` | `[]` | — | — |
| `avatars-more` | `string` | пусто | — | — |
| `round-size` | `string` | пусто | — | — |
| `label-size` | `string` | пусто | — | — |
| `profile-size` | `string` | пусто | — | — |
| `root-class` | `string` | пусто | — | — |

### Методы

Публичных методов нет.

### События

Своих событий нет; общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

### Доступность

- Доступное имя: рекомендуется.
- Клавиши: `Tab`.
- Фокус: Сохраняет видимый фокус на активном элементе управления.

### Минимальная разметка

```html
<sf-avatars></sf-avatars>
```

### Источник

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/avatars`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-avatars`
