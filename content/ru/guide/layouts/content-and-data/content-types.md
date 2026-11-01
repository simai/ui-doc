---
title: "Блоки содержимого"
description: "Страница со статьёй — документ профиля structured-content: виды блоков, чем Framework их рисует и где страница встаёт в макет."
---

# Блоки содержимого

Текст страницы — статья, инструкция, новость — хранится тем же документом,
что и макет, но с профилем `structured-content`. У него та же схема Document
v1, те же id, проверка, канонический вид и отпечаток. Виды блоков добавлены в
реестр типов Framework, каждый новый — в версии 1.0.0; контракт Recipe и его отпечаток
не изменились.

```json
{
  "schema": "simai.composition.document",
  "schema_version": 1,
  "id": "guide",
  "profile": "structured-content",
  "root": {
    "id": "root",
    "type": "content.document",
    "data": {"title": "Как начать"},
    "slots": {"default": [
      {"id": "a", "type": "content.alert", "props": {"status": "warning"},
       "data": {"title": [{"type": "text", "value": "Перед началом"}]},
       "slots": {"default": [{"id": "a1", "type": "content.paragraph",
         "data": {"content": [{"type": "text", "value": "Сохраните работу."}]}}]}}
    ]}
  }
}
```

Блок — это вызов: в `data` — содержимое, в `props` — параметры, и параметр
записывается, только если отличается от значения по умолчанию. Где у
компонента SIMAI Framework есть слово для параметра, блок берёт его; в
остальных случаях действуют имена Docara.

Набирать такие страницы удобно в
[редакторе содержимого](/ru/smart-components/composite/content-editor/).

## Виды блоков

| Тип | Содержимое (`data`) | Параметры (`props`) | Области | Чем рисуется |
|:---|:---|:---|:---|:---|
| `content.document` | `title` | | `default` | `article`, заголовок — `h1` |
| `content.paragraph`, `content.heading` | `content` (текст), у заголовка `level` (1–6) | | | `p`, `h1`–`h6` |
| `content.list` | | `ordered`, `start` | `items`: `content.list-item` | `ul` / `ol` |
| `content.list-item` | `content` (текст) | | `default`: вложенные блоки | `li` |
| `content.quote` | | | `default` | `blockquote` |
| `content.code` | `code` | `lang`, `title`, `numbers` | | компонент `highlight` |
| `content.divider` | | | | компонент [разделитель](/ru/components/content/content-divider/) |
| `content.table` | `rows` (ячейки — текст), `caption` | `header` (row, column, both, none), `align` | | утилита `table-frame` |
| `content.figure` | `src`, `alt`, `width`, `height`, `caption` | `ratio` (auto, 1/1, 4/3, 3/2, 16/9, 21/9), `fit` (cover, contain) | | компонент [рисунок](/ru/components/content/figure/) |
| `content.alert` | `title` (текст) | `status` (neutral, info, success, warning, error), `appearance` (default, outlined, flat) | `default` | классы `sf-alert` |
| `content.details` | `summary` (текст) | `open`, `layout` (surface, lines) | `default` | `details`: раскрывается без скрипта |
| `content.tabs` | `label` | | `tabs`: `content.tab` | компонент `tabs` |
| `content.tab` | `label` | | `default` | панель вкладки |
| `content.steps` | | `current`, `layout` (timeline, list) | `steps`: `content.step` | компонент [шаги инструкции](/ru/components/content/procedure/) |
| `content.step` | `title` (текст) | | `default` | шаг процедуры |
| `content.grid` | | `columns` (1–4), `gap` (0–4) | `default` | утилиты `grid`, на телефоне одна колонка |
| `content.card` | | `variant` (default, plain) | `default` | компонент [карточка](/ru/components/content/card/) |
| `content.media` | `src`, `alt`, `width`, `height` | `side` (left, right), `ratio` | `default` | утилиты `grid` и компонент `figure` |
| `content.html` | `markup` | | | подмножество html@1 |
| `content.diagram` | `source` | `engine` (mermaid), `title` | | рендерер, который регистрирует хост |
| `content.math` | `source` (TeX) | `label` | | рендерер, который регистрирует хост |
| `content.outlet` | | | | место, где макет рисует страницу |

Текстовые поля (`content`, `title`, `summary`, `caption`, ячейки таблицы)
устроены как [структурированный текст](/ru/guide/layouts/content-and-data/structured-text/).
Каждая ссылка и каждый адрес картинки подчиняются правилу адресов документа;
остальное отклоняется с кодом `unsafe_url`.

## Правила сверх схемы типа

- `content.list-item`, `content.tab` и `content.step` стоят только в своём
  родителе, иначе — `content_parent_invalid`.
- В макете не больше одного `content.outlet` (`outlet_duplicate`); этот тип
  разрешён только в макете.
- `content.html` — явный выход для готовой разметки. При выводе её чистит
  одно правило html@1, общее с `sf-rich-text`: `p h2 h3 h4 strong em a[href]
  ul ol li blockquote br` и никаких атрибутов, кроме безопасного `href`.
  Ключ — `markup`: ключ `html` в документе запрещён везде. Конвертер сам
  такой блок не создаёт — только по прямой просьбе автора.

## Диаграммы и формулы

Движок диаграмм и набор формул Framework с собой не несёт, поэтому
`content.diagram` и `content.math` — регистрируемые типы: рендерер
предоставляет хост и сам загружает для него файлы (в списке `assets`
результата появятся `composition/diagram` и `composition/math`).

```js
const registry = SF.Composition.extendRegistry([], {
  'content.diagram': ({ node }) => drawDiagram(node.data.source, node.props),
  'content.math': ({ node }) => typeset(node.data.source, node.props),
});
const { html } = await SF.Composition.render(document, { registry });
```

Без рендерера `render` сообщает `renderer_unavailable` и на месте блока
ничего не рисует.

## Страница внутри макета

`layout.region` — область макета с его собственными блоками. Страница,
которая приходит извне, встаёт в `content.outlet`: один макет служит многим
страницам, и автор страницы макет не меняет.

```js
const { html } = await SF.Composition.render(layout, { content: pageDocument });
```

Документ страницы должен иметь профиль `structured-content`, иначе —
`outlet_content_invalid`. Он проверяется и рисуется тем же реестром, его
замечания приходят под `$.content`, а его файлы добавляются к файлам макета.
Неверная страница в месте вывода ничего не рисует.

## Параметры в редакторе

У каждого типа с параметрами есть манифест редактора: по полю на параметр с
`key`, `choices`, `default` и условием видимости, и каждое поле — один из
опубликованных видов (выбор, целое число, текст, переключатель). Из него
редактор содержимого строит форму параметров блока.
