---
title: "Avatars"
description: "Атрибуты, события и примеры Smart-компонента avatars."
---

# Avatars

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-d34117c9f3f0` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-avatars>` |
| Назначение | Smart-компонент Avatars из SIMAI Framework. |
| Контракт | `smart.avatars`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-d34117c9f3f0` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`, `user`, `group`, `label`, `profile`.
- `data` — `string`, по умолчанию пусто.
- `property` — `string`, по умолчанию пусто.
- `image-url` — `string`, по умолчанию пусто.
- `avatar-url` — `string`, по умолчанию пусто.
- `avatar-size` — `string`, по умолчанию пусто.
- `active` — `boolean`, по умолчанию `false`.
- `check` — `boolean`, по умолчанию `false`.
- `name` — `string`, по умолчанию пусто.
- `source` — `string`, по умолчанию пусто.
- `label-text` — `string`, по умолчанию пусто.
- `label-second-text` — `string`, по умолчанию пусто.
- `avatars` — `array`, по умолчанию `[]`.
- `avatars-more` — `string`, по умолчанию пусто.
- `round-size` — `string`, по умолчанию пусто.
- `label-size` — `string`, по умолчанию пусто.
- `profile-size` — `string`, по умолчанию пусто.
- `root-class` — `string`, по умолчанию пусто.

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

- `simai/ui@d34117c9f3f00c677fb294ae77eef1a05422ee4c:distr/smart/avatars`
- `simai/ui@d34117c9f3f00c677fb294ae77eef1a05422ee4c:distr/rule/rule.json#name=cl-avatars`
