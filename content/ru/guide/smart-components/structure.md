---
title: "Устройство компонента"
description: "Глава описывает, из чего состоит Smart-компонент, где живёт его разметка и как регистрируется тег."
---

# Устройство компонента

Глава описывает, из чего состоит Smart-компонент, где живёт его разметка и как
регистрируется тег. Она нужна, чтобы написать минимальный собственный
компонент — библиотечный или локальный компонент проекта.

## Из чего состоит

Smart-компонент — это класс JavaScript, связанный с HTML-тегом. Класс
наследуется от `SfBaseElement` — базового класса Framework, который сам
наследуется от стандартного `HTMLElement`. Разметку строит Lit — небольшая
библиотека шаблонов, которая обновляет DOM по результату `html`.

Библиотечный компонент живёт в исходниках Framework в своей папке:

| Файл | Назначение |
|:---|:---|
| `index.js` | Класс компонента и регистрация тега |
| `js/` | Шаблоны и вспомогательные модули |
| `rule.js` | Правило Loader: по какому тегу подключать и от чего зависит |
| `smart.manifest.json` | Машинное описание компонента (см. [Манифест](/ru/guide/smart-components/manifest/)) |
| `meta.mjs` | Метаданные компонента, если есть; согласованы с манифестом |
| `docs/docs.md` | Заметки для разработчика, если есть |

Пример показывает точку входа `index.js` кнопки Framework: класс импортирует
базовый класс и функцию шаблона из `js/templates/default.js` и регистрирует
тег.

```js
import SfBaseElement from '../../core/js/smart-base';
import { renderButtonTemplate } from './js/templates/default';

class SfButton extends SfBaseElement {
  static get props() {
    return { text: { default: '' } /* … */ };
  }
  template() {
    return renderButtonTemplate(this.templateContext());
  }
}
SfButton.define('sf-button');
```

Что важно заметить:

- `smart-base` экспортирует `SfBaseElement` **по умолчанию**:
  `import SfBaseElement from '../../core/js/smart-base'`. Вспомогательные
  функции этого модуля и модуля языка страницы — именованные экспорты:
  `import { pageText } from '../../core/js/page-language'`; `html` и `nothing`
  берут из `lit`. Именованный импорт `{ SfBaseElement }` даёт `undefined`.
- Функция шаблона — обычная функция, которая получает контекст и возвращает
  разметку `html` (см. [Шаблоны](/ru/guide/smart-components/templates/)).

Опубликованная поставка (`distr/smart/` в `ui`) **генерируется** из
исходников. Править её вручную нельзя: правка теряется при следующей сборке и
ломает совпадение с исходником. Папка компонентов пакета продукта устроена
так же и тоже публикуется только сборкой (см. [Пакеты компонентов продуктов](/ru/guide/introduction/structure/#пакеты-компонентов-продуктов)).

## Где живёт разметка

Компоненты строят разметку **внутри самого элемента, в обычном DOM** (light DOM).
Поэтому на них действуют утилиты и токены страницы, а стили компонента — общие
CSS-слои Framework. Shadow DOM компоненты Framework не используют.

## Регистрация тега

Скрипт Smart-компонента собран без своей копии Lit и базового класса: их даёт
общая среда Smart-компонентов (`core/js/smart-base.js`, см. [Подключение к странице](/ru/guide/smart-components/connection/#подключение-к-странице)).
Поэтому тег библиотечного компонента регистрируется не в момент загрузки его
скрипта, а когда пришла общая среда. Код проекта ждёт регистрации через
`SF.whenDefined()` или `customElements.whenDefined()`.

Тег регистрируется один раз. Повторный `customElements.define()` для того же
имени Framework не выполняет: базовый класс защищает от двойной регистрации.
Для нового поведения создайте новый тег или обновите исходный класс до загрузки
страницы.

**Префикс.** Компоненты Framework используют `sf-`. Компоненты пакета —
префикс владельца, например `shop-catalog` (см. [Пакеты компонентов](/ru/guide/connection/loader/#пакеты-компонентов)); компонент,
перенесённый из Framework в пакет, сохраняет имя с `sf-`. Локальные
компоненты проекта — свой префикс, например `project-counter`, чтобы не
пересечься ни с теми, ни с другими.

## Минимальный компонент

Пример показывает счётчик: объявленное свойство, шаблон, действие и событие
`change`. Работающий вариант того же счётчика — ниже, в разделе
[Работающий пример](#работающий-пример).

```js
function whenLoaderReady() {
  if (window.SF?.loadSmartBase) return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener('sf-loader-init', () => resolve(), { once: true });
  });
}

await whenLoaderReady();
await SF.loadSmartBase();
const { SfBaseElement, html } = SF.smart;
const TEXT = {
  en: { count: 'Count', add: 'Add' },
  ru: { count: 'Количество', add: 'Добавить' },
};

class ProjectCounter extends SfBaseElement {
  static get props() {
    return { count: { type: Number, default: 0 }, addLabel: { default: '' } };
  }
  templateContext() {
    return this.createPropsTemplateContext({
      countText: SF.pageText(TEXT, 'count', this),
      addText: this.getProp('addLabel') || SF.pageText(TEXT, 'add', this),
    });
  }
  template() {
    const { count, countText, addText } = this.templateContext();
    return html`
      <output aria-live="polite">${countText}: ${count}</output>
      <button type="button"
              class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1/2"
              @click=${() => this.increment()}>
        <span class="sf-button-text-container">${addText}</span>
      </button>`;
  }
  increment() {
    const value = this.getProp('count') + 1;
    this.setAttribute('count', String(value));
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true, composed: true, detail: { value },
    }));
  }
}
ProjectCounter.define('project-counter');
```

Что важно заметить:

- Core запускает Loader асинхронно: `SF.loadSmartBase` появляется вместе с
  событием `sf-loader-init`. Функция `whenLoaderReady()` ждёт его и работает
  в любой момент — до события и после (см. [События загрузчика](/ru/guide/connection/loader/#события-загрузчика)).
- `await SF.loadSmartBase()` загружает общую среду Smart-компонентов
  (`core/js/smart-base.js`), если её ещё нет на странице, и возвращает
  `SF.smart`. После этого доступны `SF.smart.SfBaseElement` и `SF.smart.html`.
- Скрипт использует `await` на верхнем уровне, поэтому подключается как
  модуль: `<script type="module">` (см. [Локальные компоненты проекта](#локальные-компоненты-проекта)).
- `SF.smart.html` — функция шаблонов Lit, поэтому в шаблоне работают все
  привязки Lit: `${…}` — текст или значение атрибута, `?disabled=${…}` —
  булев атрибут (есть при `true`, нет при `false`), `.value=${…}` — свойство
  элемента, `@click=${…}` — обработчик события.
- `SF.smart` даёт также `nothing` — пустое значение Lit для атрибута, который
  не нужно выводить: `aria-label=${label || nothing}`.
- Свои слова компонент держит в словаре `TEXT`: английское — в записи `en`,
  русское — в `ru`; `SF.pageText(TEXT, key, this)` выбирает слово по языку
  страницы, а подпись из атрибута `add-label` сильнее словаря (см. [Язык](/ru/guide/smart-components/quality/#язык)).
- `templateContext()` строится через `this.createPropsTemplateContext({…})`:
  так контекст сохраняет `component`, `rootClass`, `rootStyle` и все
  объявленные свойства (см. [Шаблон и templateContext](/ru/guide/smart-components/templates/#шаблон-и-templatecontext)).
- Сам тег блока не образует: базовый класс ставит ему встроенный
  `style="display: contents"`, и правило CSS вроде `project-greeting { display: block }`
  на него не действует. Раскладку и стиль тега (`rootStyle`) шаблон переносит
  на свой корневой элемент.
- В исходниках Framework и пакета те же сущности импортируются из `smart-base`
  и `lit` (см. [Из чего состоит](#из-чего-состоит)); в проекте достаточно
  загруженной браузерной поставки, сборщик не нужен.

### Работающий пример

Тот же счётчик в другой записи: функция ожидания встроена в `start()`, а
скрипт подключается обычным `<script>`, потому что `await` стоит внутри
функции, а не на верхнем уровне. Обе записи рабочие. Нажмите «Добавить» и
сравните число с данными события под примером.

:::internal_preview {size="tall" title="Работающий пример"}
[Открыть демонстрацию](/demos/guide/smart-counter/)
:::

:::code {src="../../../../examples/guide/smart-counter/index.html" lang="html" title="index.html"}
:::

:::code {src="../../../../examples/guide/smart-counter/index.js" lang="javascript" title="index.js"}
:::

`props` объявляет число `count` и подпись `addLabel`, `templateContext()`
готовит значения и слова, `template()` возвращает разметку,
`increment()` изменяет значение и отправляет событие, `define()` регистрирует
тег.

## Локальные компоненты проекта

Локальный компонент хранится в проекте и не входит в библиотеку. Он использует
тот же базовый класс, но собственное имя и собственное подключение:

```html
<script type="module" src="/assets/project/counter.js"></script>
<project-counter count="1"></project-counter>
```

Так удобно сделать карточку товара, панель конкретного сервиса или внутренний
редактор, который не нужен другим проектам.

Правила:

- Loader загружает только теги, которые называют его правила, и не выводит
  путь к файлу из имени тега: путь `/assets/project/counter.js` он из
  `project-counter` не получит. Чтобы Loader сам загружал компоненты проекта по
  тегу, оформите их пакетом: правило пакета перечисляет теги (см. [Пакеты компонентов](/ru/guide/connection/loader/#пакеты-компонентов)).
  В правила самого Framework записи не добавляют.
- Проектный скрипт подключается после Core. Скрипт с `await` на верхнем
  уровне (как в [Минимальный компонент](#минимальный-компонент)) подключается с `type="module"`; обычный `<script>`
  такой код не выполнит.
- Локальному компоненту манифест не нужен: Loader и базовый класс манифест не
  читают. Манифест обязателен компоненту пакета (см. [Манифест](/ru/guide/smart-components/manifest/)).
- Классы дочерних локальных компонентов регистрируются до использования.
- Библиотечные `sf-*` элементы внутри локального компонента загружает Loader
  по пути поставки, как на любой странице (см. [Подключение к странице](/ru/guide/smart-components/connection/#подключение-к-странице)).
- Классовые компоненты в разметке локального компонента (`sf-button`,
  `sf-icon-button` и другие) Loader находит так же, как в любой разметке
  страницы, в том числе нарисованной после загрузки, и подключает их стили:
  отдельно подключать CSS компонента не нужно.
- Проектный скрипт загружается один раз; его версия фиксируется вместе с
  проектом.

## Смотрите также

- [Атрибуты, свойства и состояние](/ru/guide/smart-components/properties/) — объявление свойств.
- [Шаблоны](/ru/guide/smart-components/templates/) — шаблоны.
- [Манифест](/ru/guide/smart-components/manifest/) — манифест.
- [Как работает Loader](/ru/guide/connection/loader/) — Loader.
