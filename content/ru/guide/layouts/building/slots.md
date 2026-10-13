---
title: "Слоты и порядок"
description: "Слоты определяют, куда внутри узла можно поместить дочерние узлы и в каком порядке они выводятся."
---

# Слоты и порядок

Слоты определяют, куда внутри узла можно поместить дочерние узлы и в каком
порядке они выводятся. Эта глава описывает правила слотов и области страницы.

## Что такое слот

**Слот** — именованное место внутри узла, куда разрешено помещать дочерние
узлы. Список слотов задаёт манифест типа, а не автор документа: имя слота
нельзя придумать по виду HTML.

Пример ниже показывает колонки с двумя дочерними абзацами:

```json
{
  "id": "grid",
  "type": "layout.columns",
  "props": {"columns": 2},
  "slots": {"columns": [
    {"id": "left", "type": "content.paragraph",
     "data": {"content": [{"type": "text", "value": "Фильтры"}]}},
    {"id": "right", "type": "content.paragraph",
     "data": {"content": [{"type": "text", "value": "Товары"}]}}
  ]}
}
```

Для простого контейнера обычно достаточно `default`; колонки `layout.columns`
используют область `columns`. Один ребёнок этой области — одна колонка.

## Порядок

**Порядок элементов равен порядку в массиве слота.** Отдельного поля
сортировки нет. Этот же порядок становится порядком в DOM, порядком чтения и
порядком перехода с клавиатуры.

## Правила слота

Манифест описывает каждый слот:

- `min` и `max` — сколько детей допустимо;
- `types` — какие типы разрешены (например, в `layout.regions` — только
  `layout.region`);
- `categories` — какие категории типов разрешены: `layout`, `content`,
  `component`, `smart`.

Тип вида `leaf` (лист) слотов не имеет вовсе: заголовок и абзац не содержат
вложенных узлов. Тип вида `composite` (составной) объявляет слоты.

Нарушения дают точные коды:

| Код | Причина |
|:---|:---|
| `slot_unknown` | слота нет в манифесте |
| `slot_cardinality` | неверное число детей |
| `slot_required` | обязательный слот отсутствует |
| `slot_child_type_forbidden` | недопустимый тип ребёнка |
| `slot_child_category_forbidden` | недопустимая категория ребёнка |
| `leaf_slots_forbidden` | слоты у листа |

## Области страницы

Когда у страницы несколько постоянных зон — шапка, основная часть, боковая
колонка, подвал, — их описывают типами `layout.regions` и `layout.region`.

```json
{
  "id": "shell",
  "type": "layout.regions",
  "slots": {"regions": [
    {"id": "top", "type": "layout.region",
     "props": {"name": "header", "landmark": "banner", "sticky": true}, "slots": {"default": []}},
    {"id": "body", "type": "layout.region",
     "props": {"name": "main", "landmark": "main", "placement": "center"}, "slots": {"default": []}},
    {"id": "side", "type": "layout.region",
     "props": {"name": "aside", "landmark": "complementary", "placement": "end", "label": "Связанное"},
     "slots": {"default": []}},
    {"id": "bottom", "type": "layout.region",
     "props": {"name": "footer", "landmark": "contentinfo"}, "slots": {"default": []}}
  ]}
}
```

Главное в этом устройстве:

- **Имя области выбирает автор.** `header`, `main`, `aside` — обычные
  значения, а не словарь Framework. **Смысл задаёт `landmark`**: `banner`
  становится `<header>`, `navigation` — `<nav>`, `main` — `<main>`,
  `complementary` — `<aside>`, `contentinfo` — `<footer>`, `region` —
  `<section>`, `none` — `<div>`.
- **Расположение — `placement`.** `start`, `center` и `end` в достаточно
  широком контейнере встают рядом; `block` занимает всю строку. Колонки
  логические и отражаются в письме справа налево.
- **Область может сузить содержимое:** `accepts` ограничивает категории,
  `min_items` и `max_items` — число элементов.
- **Доступность проверяется:** в документе не больше одной основной области;
  повторяющиеся ориентиры одного вида обязаны иметь разные подписи;
  `banner`, `main` и `contentinfo` допустимы только вне `layout.page` и вне
  другого ориентира; область с `landmark: "region"` требует подписи `label`.

`SF.Composition.describeRegions()` возвращает для каждой области отпечаток её
поддерева. Продукт может пересобирать только то, что зависит от изменившейся
области.

## Смотрите также

- [Встроенные типы](/ru/guide/layouts/introduction/levels/#встроенные-типы) — встроенные типы и их слоты.
- [Правила вставки](/ru/guide/layouts/building/recipe-templates-and-variants/#правила-вставки) — правила вставки в места шаблона.
- [Где взять спецификацию](/ru/guide/layouts/reference/specification/) — комплект Composition Regions.
