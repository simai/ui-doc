---
title: "File Preview"
description: "Атрибуты, события и примеры Smart-компонента file-preview."
---

# File Preview

## Доступность

Перед использованием проверьте доступное имя, порядок фокуса, управление клавиатурой и объявление состояний. Сгенерированная API-страница подтверждает source-контракт, но не заменяет сценарный accessibility smoke.

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-9fb0297bb5c2` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-file-preview>` |
| Назначение | Доступная Smart-проекция обычной строки File Preview. |
| Контракт | `smart.file-preview`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-9fb0297bb5c2` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | описан: манифест и сценарий есть, продуктовой приёмки нет |

### Атрибуты

| Атрибут | Тип | По умолчанию | Значения | Назначение |
|:---|:---|:---|:---|:---|
| `template` | `string` | `default` | `default` | — |
| `name` | `string` | `File` | — | — |
| `file-name` | `string` | `File` | — | — |
| `file-size` | `string` | пусто | — | Размер файла в виде текста, например 12 KB. |
| `icon` | `string` | `description` | — | — |
| `href` | `string` | пусто | — | — |
| `kind` | `string` | `auto` | `auto`, `icon`, `image` | Что показывает превью: иконку, само изображение или то, что подходит файлу. |
| `mime-type` | `string` | пусто | — | — |
| `image-url` | `string` | пусто | — | — |
| `avatar-size` | `string` | пусто | — | — |
| `open` | `boolean` | `false` | — | — |
| `surface` | `boolean` | `false` | — | — |
| `download` | `boolean` | `true` | — | — |
| `target` | `string` | `_blank` | — | — |
| `actions` | `boolean` | `true` | — | — |
| `download-action` | `boolean` | `true` | — | — |
| `remove-action` | `boolean` | `true` | — | — |
| `disabled` | `boolean` | `false` | — | — |
| `aria-label` | `string` | `File` | — | — |
| `download-label` | `string` | `Download file` | — | — |
| `remove-label` | `string` | `Remove file` | — | — |

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает и предупреждает | 2026-12-01 |
| `file-size` | `size` | работает и предупреждает | 2026-12-01 |
| `kind="auto"` | `kind="default"` | работает и предупреждает | 2026-12-01 |

### Методы

| Метод | Аргументы | Возвращает | Назначение |
|:---|:---|:---|:---|
| `getValue()` | — | `object` | Возвращает текущий идентификатор файла и значение для отображения. |
| `setOpen()` | — | `object` | Сеттер для совместимости; действия остаются видимыми. |
| `toggleOpen()` | — | `object` | Переключатель для совместимости; действия остаются видимыми. |
| `onDownload()` | — | `object` | Регистрирует обработчик события скачивания. |
| `onRemove()` | — | `object` | Регистрирует обработчик события удаления. |

### События

Все события приходят на сам элемент, всплывают и проходят границу Shadow DOM. Общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

| Событие | `detail` | Когда |
|:---|:---|:---|
| `sf-file-preview:download` | не описан | Запрошено действие скачивания. |
| `sf-file-preview:remove` | не описан | Запрошено действие удаления. |

### Доступность

- Роль: группа (`group`).
- Доступное имя: обязательно.
- Клавиши: `Tab`, `Enter`, `Space`.
- Фокус: Нативные действия с файлами сами отвечают за отображение `focus-visible`.

### Минимальная разметка

```html
<sf-file-preview file-name="File.pdf"></sf-file-preview>
```

### Источник

- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/smart/file-preview`
- `simai/ui@9fb0297bb5c21827f6cdfc5588ff9dfd6ccbb6fa:distr/rule/rule.json#name=cl-file-preview`
