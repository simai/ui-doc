---
title: "List Item"
description: "Декларативное описание пункта Dropdown и его runtime-контракт."
---

# List Item

Компонент описывает option для Dropdown и
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

## Справочник API

Раздел собран из манифеста компонента выпуска `ui-257f66def2b8` и обновляется вместе с выпуском. Чтобы исправить описание, исправьте манифест.

Каждому атрибуту соответствует свойство элемента с тем же именем в camelCase: `search-placeholder` — `searchPlaceholder`. Свойство атрибута `template` называется `templateName`.

| | |
|:---|:---|
| Тег | `<sf-list-item>` |
| Назначение | Декларативное описание варианта и визуальная строка, которыми владеет Dropdown. |
| Контракт | `smart.list-item`, версия `1.0.0` |
| Поставка | выпуск Framework `ui-257f66def2b8` |
| Жизненный цикл | экспериментальный: API может меняться между выпусками |
| Готовность | принят в продукт |

### Атрибуты

- `template` — `string`, по умолчанию `default`, значения: `default`.
- `value` — `string`, по умолчанию пусто.
- `kind` — `string`, по умолчанию `text`, значения: `text`, `icon`, `checkbox`, `avatar`, `color`. Содержимое элемента списка: простой текст, иконка, флажок, аватар или цвет.
- `size` — `string`, по умолчанию `1`, значения: `1/3`, `1/2`, `1`, `2`, `3`.
- `text` — `string`, по умолчанию пусто.
- `icon` — `string`, по умолчанию `person`.
- `checked` — `boolean`, по умолчанию `false`.
- `selected` — `boolean`, по умолчанию `false`.
- `disabled` — `boolean`, по умолчанию `false`.
- `color-class` — `string`, по умолчанию `bg-tertiary`.
- `avatar-image-url` — `string`, по умолчанию пусто.
- `avatar-title` — `string`, по умолчанию пусто.
- `aria-label` — `string`, по умолчанию пусто.

Свойство атрибута `value` называется `itemValue`.

Прежние имена:

| Имя | Прежнее имя | Состояние | Убирается после |
|:---|:---|:---|:---|
| `kind` | `type` | работает и предупреждает | 2026-12-01 |

### Методы

Публичных методов нет.

### События

Своих событий нет; общие события базового элемента описаны в разделе [Загрузка и готовность](/ru/guide/smart-components/lifecycle/).

### Доступность

- Роль: `option` при отображении внутри Dropdown; нет в автономном превью.
- Доступное имя: обязательно.
- Клавиши: `ArrowDown`, `ArrowUp`, `Home`, `End`, `Enter`, `Space`, `Escape`.
- Фокус: Принадлежит родительскому составному компоненту Dropdown; отдельный предпросмотр не фокусируется.

### Минимальная разметка

```html
<sf-dropdown label="Статус"><sf-list-item value="open" text="Открыт"></sf-list-item><sf-list-item value="done" text="Готов"></sf-list-item></sf-dropdown>
```

### Источник

- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/smart/list-item`
- `simai/ui@257f66def2b88e315931db8b4e887979ea284b3e:distr/rule/rule.json#name=cl-list-item`
