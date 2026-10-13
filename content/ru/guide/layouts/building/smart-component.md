---
title: "Smart-компонент в макете"
description: "Smart-компоненты попадают в макет как типы узлов через декларативный контракт."
---

# Smart-компонент в макете

Эта глава описывает, как Smart-компонент становится узлом макета и во что он
превращается при отрисовке.

## Smart-компоненты и составные компоненты в макете

Smart-компоненты попадают в макет как типы узлов через декларативный
контракт. Эта глава описывает, как это устроено; поведение Smart-компонентов,
их события, состояния и порты хоста описаны в части о Smart-компонентах (см. [Составные компоненты](/ru/guide/smart-components/composite/) и [Связь с приложением: порты хоста и намерения](/ru/guide/smart-components/host-ports/)).

Наличие компонента в справочнике само по себе не значит, что его можно
вставить в слот макета: нужен опубликованный и проверенный декларативный
контракт.

## Декларативный контракт

Smart-компонент можно вставить в макет, только если он **публикует
декларативный контракт**: в его манифесте есть раздел
`composition.declarative` с именем типа, допустимыми настройками, слотами,
рендерером и ресурсами. Framework строит из этого раздела манифест типа
композиции (`compositionTypeFromSmartManifest`).

Раздел обязательно содержит `standard`, `type`, `mode`, `profiles`, `props`,
`slots`, `renderer` и `assets`; необязательно — `presentation`, `data`,
`events`, `persistence` и `host_port` (стык с приложением, см. [Порты и наборы проверок](/ru/guide/standards/ports/)).

Правила контракта:

- в `props` попадают только настройки, перечисленные в
  `composition.declarative.props`; каждая из них объявлена в разделе `inputs`
  манифеста компонента. Любая другая настройка, даже существующая у
  компонента в разметке, отклоняется с кодом `schema_additional_property`;
- данные, которые приходят от приложения (например, строки и колонки
  таблицы), описываются собственными контрактами данных компонента, а не
  атрибутами;
- события перечисляются явно и берутся из раздела `events` манифеста.

В поставке Framework декларативный контракт публикует кнопка
(`smart.buttons`). Компоненты пакета продукта публикуют свои контракты в своих
манифестах: например, таблица пакета `larena` — тип `smart.data-view` с
данными `columns` и `rows`. Актуальный перечень — раздел
`composition.declarative` в манифестах (`distr/smart/<папка>/smart.manifest.json`
в поставке `ui`, `src/smart/<папка>/smart.manifest.json` в пакете).

Настройки, которые узел `smart.buttons` принимает в документе: `template`,
`size`, `appearance`, `spacing`, `scheme`, `status`, `text`, `icon`,
`icon-position`, `loading`, `disabled`, `native-type`, `aria-label`. Значения
у них те же, что у атрибутов кнопки ([Кнопки](/ru/smart-components/actions/buttons/)). Вид кнопки задаёт
`appearance`; прежнее имя `type` узел тоже принимает ради совместимости, в
новых документах его не пишут.

## Как Smart-узел превращается в HTML

Пример ниже показывает узел кнопки:

```json
{
  "id": "contact",
  "type": "smart.buttons",
  "props": {"text": "Связаться", "native-type": "button"}
}
```

Рендерер такого типа — пользовательский элемент (`custom-element`): узел
становится тегом `<sf-button native-type="button" text="Связаться">`, а
настройки — его атрибутами с экранированными значениями.
`render()` добавляет объявленный ресурс (`smart/buttons`) в список ресурсов и
запись в список `hydration` — какие узлы нужно оживить в браузере. Оживляет
их Loader, как любой Smart-компонент на странице.

Тип `smart.buttons` не входит во встроенные типы: его добавляют в реестр.
Реестр, в котором есть встроенные типы и тип кнопки, собирает
`extendRegistry`. Манифест кнопки лежит в поставке рядом с её кодом:

```js
const buttonManifest = await fetch(window.sfPath + 'smart/buttons/smart.manifest.json')
  .then((response) => response.json());
const registry = SF.Composition.extendRegistry([
  SF.Composition.compositionTypeFromSmartManifest(buttonManifest),
]);
const result = await SF.Composition.render(doc, { registry });
```

Документ `doc` в этом примере — секция с заголовком и двумя колонками: в
первой абзац, во второй узел кнопки из примера выше.

```json
{
  "schema": "simai.composition.document.v1",
  "id": "about-page",
  "profile": "ui-layout",
  "locale": "ru",
  "root": {"id": "page", "type": "layout.page", "slots": {"default": [
    {"id": "intro", "type": "layout.section", "slots": {"default": [
      {"id": "title", "type": "content.heading",
       "data": {"level": 1, "content": [{"type": "text", "value": "О компании"}]}},
      {"id": "grid", "type": "layout.columns", "props": {"columns": 2}, "slots": {"columns": [
        {"id": "col-left", "type": "content.paragraph",
         "data": {"content": [{"type": "text", "value": "Мы делаем интерфейсы."}]}},
        {"id": "contact", "type": "smart.buttons",
         "props": {"text": "Связаться", "native-type": "button"}}
      ]}}
    ]}}
  ]}}
}
```

Для этого документа `result.html` такой:

```html
<main data-sf-composition-id="page"><section data-sf-composition-id="intro"><h1 data-sf-composition-id="title">О компании</h1><div class="sf-composition-columns" data-sf-composition-id="grid" data-composition-columns="2"><div class="sf-composition-column"><p data-sf-composition-id="col-left">Мы делаем интерфейсы.</p></div><div class="sf-composition-column"><sf-button native-type="button" text="Связаться"></sf-button></div></div></section></main>
```

Атрибуты Smart-узла выводятся в алфавитном порядке: свойства узла
приводятся к канонической форме с упорядоченными ключами, поэтому
`native-type` стоит перед `text`, в каком бы порядке их ни записали.

`result.assets` — `["composition/layout", "smart/buttons"]`,
`result.hydration` — `[{"id": "contact", "type": "smart.buttons", "element": "sf-button"}]`.

После вставки `result.html` на страницу Loader находит `<sf-button>` и
загружает кнопку. Кнопка в документе композиции — всегда Smart-узел: среди
встроенных типов нет кнопки на классах, поэтому странице с таким документом
нужен Loader. Кнопку на классах (`<button class="sf-button …">`) выводит
только рендерер собственного типа (см. [Собственный тип](/ru/guide/layouts/reference/custom-type/)). Код, которому нужен готовый элемент, ждёт его через
`SF.whenDefined('sf-button')` или `customElements.whenDefined('sf-button')`
(см. [События загрузчика](/ru/guide/connection/loader/#события-загрузчика)).

Что важно заметить: `createRegistry(список)` берёт список как реестр целиком.
Реестр из одного типа кнопки не знает `layout.page`, и документ отклоняется с
`type_unknown`. Чтобы добавить свой тип к встроенным, используйте
`extendRegistry`.

Документ не содержит обработчиков JavaScript. Компонент сообщает о действии
событием, проект решает, что делать (см. [Граница ответственности](/ru/guide/smart-components/introduction/#граница-ответственности)).

## Смотрите также

- [Составные компоненты](/ru/guide/smart-components/composite/) и [Связь с приложением: порты хоста и намерения](/ru/guide/smart-components/host-ports/) — составные компоненты, маршруты и порты хоста.
- [Встроенные типы](/ru/guide/layouts/introduction/levels/#встроенные-типы) — `layout.scope` среди встроенных типов.
- [Где взять спецификацию](/ru/guide/layouts/reference/specification/) — комплект Composition Routing.
