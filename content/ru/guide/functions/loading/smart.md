---
title: "Свой смарт-компонент"
description: "SF.smart, SF.SfBaseElement, SF.html, SF.render и SF.nothing — основа, на которой проект пишет свой смарт-компонент."
---

# Свой смарт-компонент

Проект может написать свой смарт-компонент на той же основе, что и
компоненты Framework: он получит те же настройки из атрибутов, язык страницы
и отрисовку шаблоном. `SF.smart` отдаёт базовый класс и помощники; тот же
класс и функции шаблона лежат и прямо на `SF`.

## Вызов

```js
await SF.loadSmartBase();
const {SfBaseElement, html} = SF.smart;

class ProjectGreeting extends SfBaseElement {
  static get props() { return {name: {type: String, default: 'гость'}}; }
  template() { return html`<p>Здравствуйте, ${this.getProp('name')}!</p>`; }
}
ProjectGreeting.define('project-greeting');
```

| Имя | Что это |
|:---|:---|
| `SF.smart.SfBaseElement`, `SF.SfBaseElement` | Базовый класс смарт-элемента. Наследник объявляет настройки в `static get props()`, рисует в `template()` и регистрирует тег через `define(tag)`. |
| `SF.smart.html`, `SF.html` | Тег шаблона, которым рисуют смарт-элементы (Lit). |
| `SF.smart.render`, `SF.render` | Рисует шаблон в узел: `render(шаблон, узел)`. |
| `SF.smart.nothing`, `SF.nothing` | Пустое место в шаблоне: ничего не рисует. |
| `toBoolean`, `toNumber`, `normalizeEnum`, `parseJsonAttribute`, `toAttributeName` | Чтение значений атрибутов: да или нет, число, одно из допустимых значений, JSON, имя атрибута из имени свойства. |

## Когда доступно

Основа смарт-компонентов: после первого смарт-элемента на странице или после
[`await SF.loadSmartBase()`](/ru/guide/functions/loading/smart-base/). На
странице без смарт-элементов и без этого вызова `SF.smart` нет.

## Пример

Компонент проекта `project-greeting` берёт имя из атрибута и рисует
приветствие. Кнопка меняет атрибут — компонент рисуется заново, журнал
показывает новое имя.

:::example {id="guide/functions/smart" label="Свой смарт-компонент" preview=sandbox log_console=true}
:::

## Особые случаи

- Тег проекта начинается со своего префикса, а не с `sf-`: этот префикс
  носят компоненты Framework.
- Loader не загружает файлы проекта: скрипт компонента проект подключает
  сам. Чтобы Loader загружал компонент по тегу, проект оформляет его пакетом
  (см. [Пакеты компонентов](/ru/guide/connection/loader/#пакеты-компонентов)).

## См. также

- [Модель компонента](/ru/guide/smart-components/model/) — из чего состоит смарт-компонент.
- [Подключение к проекту](/ru/guide/connection/project-setup/) — где граница между Framework и компонентами проекта.
