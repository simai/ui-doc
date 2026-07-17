---
extends: _core._layouts.documentation
section: content
title: "1.7 Поддержка Smart-компонентов"
description: "1.7 Поддержка Smart-компонентов"
---

# 1.7 Поддержка Smart-компонентов

Smart-компоненты в SF5 — это пользовательские HTML-элементы вида **`<sf-*>`**, которые загружаются через
`SFLoaderPlugin`, регистрируются через browser API `customElements.define()` и рендерятся на базе общего класса
**`SfBaseElement`**. Внутренний рендеринг построен на **Lit**: шаблоны возвращают Lit-разметку, а базовый класс управляет
её обновлением в light DOM.

Пример использования:

```html
<sf-button text="Сохранить" scheme="primary"></sf-button>
<sf-tooltip text="Подсказка" type="dark"></sf-tooltip>
```

Smart-компонент является отдельным DOM-тегом, но его ресурсы подключаются лениво: loader загружает JS только тогда, когда
находит соответствующий `sf-*` тег на странице.

## Основная схема

Smart-компонент состоит из нескольких частей:

- правило загрузки в `src/smart/<name>/rule.js`;
- класс компонента в `src/smart/<name>/index.js`;
- шаблон или набор шаблонов в `src/smart/<name>/js/templates/*`;
- зависимости через `relation`, если компонент опирается на обычный component-модуль.

Типичная цепочка:

1. В DOM появляется тег, например `<sf-tooltip>`.
2. `SFLoaderPlugin` ищет тег по правилам `SF.RuleLoader[*].tags`.
3. Loader находит smart-правило, например `cl-tooltip`.
4. Loader добавляет зависимости из `relation`.
5. Загружается JS smart-компонента.
6. JS вызывает `SfTooltip.define('sf-tooltip')`.
7. Браузер обновляет уже существующие `<sf-tooltip>` элементы.
8. `SfBaseElement.connectedCallback()` запускает подготовку props, slots и рендеринг.

## Правило загрузки

Smart-компоненты описываются в `SF.RuleLoader` как модули типа `smart`. Ключ обычно имеет префикс `cl-`, а публичный DOM
тег указывается в поле **`tags`**:

```js
SF.RuleLoader['cl-tooltip'] = {
  tags: ['sf-tooltip'],
  type: 'smart',
  mode: 'smart',
  js: true,
  relation: [{ name: 'tooltip' }],
};
```

Поля:

- **`tags`** — список DOM-тегов, по которым loader обнаруживает компонент;
- **`type: 'smart'`** — смысловой тип модуля;
- **`mode: 'smart'`** — режим построения пути загрузки;
- **`js: true`** — компонент требует JS-файл;
- **`relation`** — связанные модули, которые нужно загрузить вместе с компонентом.

`relation` часто связывает smart-компонент с обычным component-модулем. Например, `cl-tooltip` загружает smart-обёртку
`sf-tooltip`, а зависимость `tooltip` предоставляет базовые стили или поведение обычного UI-компонента.

## Базовый класс `SfBaseElement`

Все текущие Smart-компоненты наследуются от **`SfBaseElement`**:

```js
import SfBaseElement from '../../cl/classes/template/sfBaseElement';
import { renderTooltipTemplate } from './js/templates/default';

class SfTooltip extends SfBaseElement {
  static get props() {
    return {
      templateName: { attribute: 'template', default: 'default' },
      type: { type: String, default: 'light' },
      text: { default: '' },
    };
  }

  templateContext() {
    return this.createTemplateContext({
      component: this,
      ...this.getPropsContext(),
    });
  }

  template() {
    return renderTooltipTemplate(this.templateContext());
  }
}

SfTooltip.define('sf-tooltip');
```

`SfBaseElement` отвечает за:

- преобразование `props` в `observedAttributes`;
- чтение и приведение атрибутов к нужным типам;
- обновление компонента при изменении атрибутов;
- рендеринг Lit-шаблонов через light DOM;
- работу со слотами;
- внешние шаблоны и template context;
- события жизненного цикла компонента.

## Props и атрибуты

Публичные параметры компонента описываются в `static get props()`:

```js
static get props() {
  return {
    text: { default: '' },
    disabled: { type: Boolean, default: false },
    count: { type: Number, default: 0 },
    templateName: { attribute: 'template', default: 'default' },
  };
}
```

Для каждого prop можно указать:

- **`default`** — значение по умолчанию;
- **`type`** — тип значения: `String`, `Boolean`, `Number`, `Object`, `Array`;
- **`attribute`** — имя HTML-атрибута, если оно отличается от имени prop;
- **`parser`** или **`parse`** — собственный парсер;
- **`values`** — допустимые enum-значения.

Имена props автоматически переводятся в kebab-case атрибуты. Например, `rootClass` соответствует `root-class`.

```html
<sf-button text="Сохранить" root-class="w-full" disabled></sf-button>
```

## Рендеринг

Smart-компоненты рендерятся через **Lit**. Метод **`template()`** обычно вызывает функцию шаблона из
`js/templates/default.js`, а та возвращает Lit-разметку:

```js
template() {
  return renderButtonTemplate(this.templateContext());
}
```

Пример шаблона:

```js
import { html } from 'lit';

export function renderButtonTemplate(context) {
  return html`
    <button class="sf-button ${context.rootClass}">
      ${context.text}
    </button>
  `;
}
```

Данные для шаблона собираются в **`templateContext()`**:

```js
templateContext() {
  return this.createTemplateContext({
    component: this,
    ...this.getPropsContext(),
  });
}
```

`templateContext()` должен содержать всё, что нужно шаблону: props, вычисленные значения, ссылки на компонент и
вспомогательные данные.

## Light DOM

`SfBaseElement` использует Lit-рендеринг, но рендерит содержимое в light DOM, а не в shadow DOM. Сам host получает
`display: contents`, поэтому визуальная оболочка обычно находится внутри отрендеренного шаблона, а не на самом `<sf-*>`
элементе.

Это важно для CSS и для вложенных компонентов:

- стили проекта видят внутреннюю разметку компонента;
- loader может находить вложенные `sf-*` элементы в light DOM;
- классы визуальной оболочки нужно передавать в специальные props, например `root-class`, а не всегда в `class` host-а.

## Slots

Дочерние элементы со `slot` захватываются как шаблоны:

```html
<sf-modal title="Удаление">
  <div slot="footer">
    <sf-button text="Отмена"></sf-button>
    <sf-button text="Удалить" scheme="error"></sf-button>
  </div>
</sf-modal>
```

`SfBaseElement` клонирует slot-узлы и удаляет их из исходного места. Шаблон компонента получает содержимое через
`getSlotContent(name)`.

Если один и тот же slot нужно вывести в нескольких местах, узлы должны клонироваться. Один DOM-узел нельзя физически
разместить сразу в двух местах.

## Обновление состояния

При изменении наблюдаемого атрибута компонент планирует обновление. Для публичного изменения состояния используется
**`setState()`**:

```js
button.setState({
  text: 'Готово',
  disabled: true,
});
```

`setState()` переводит camelCase ключи в kebab-case атрибуты и удаляет пустые значения. Например:

```js
button.setState({ rootClass: 'w-full', loading: false });
```

эквивалентно обновлению атрибутов `root-class` и `loading`.

## Программное создание

Для создания Smart-компонентов из JS используется **`SF.create()`**:

```js
const button = SF.create('button', {
  text: 'Сохранить',
  scheme: 'primary',
  rootClass: 'w-full',
});

document.body.append(button);
```

`SF.create('button')` и `SF.create('sf-button')` эквивалентны. Имена атрибутов нормализуются автоматически:

```js
SF.create('icon-button', {
  icon: 'delete',
  ariaLabel: 'Удалить',
});
```

создаст:

```html
<sf-icon-button icon="delete" aria-label="Удалить"></sf-icon-button>
```

Если нужно дождаться регистрации custom element, используйте **`SF.createAsync()`**:

```js
const button = await SF.createAsync('button', { text: 'Готово' });
```

Для ожидания уже существующих тегов:

```js
await SF.whenDefined(['sf-button', 'sf-modal']);
```

## Внешние шаблоны

`SfBaseElement` поддерживает внешние шаблоны проекта. Базовый путь:

```text
/local/smart/templates
```

Например, проект может переопределить шаблон компонента через:

```text
/local/smart/templates/button/custom/index.js
/local/smart/templates/button/custom/index.css
```

После этого компонент можно вызвать с нужным вариантом:

```html
<sf-button template="custom" text="Отправить"></sf-button>
```

Внешние шаблоны нужны для проектных вариантов без изменения базового smart-компонента.

## События готовности

Базовый smart runtime может быть загружен отдельно. Когда `SfBaseElement` становится доступен, loader отправляет:

```js
window.dispatchEvent(new CustomEvent('sf-smart-base-ready', { detail: { ... } }));
```

Для конкретных custom elements можно использовать стандартный browser API:

```js
await customElements.whenDefined('sf-tooltip');
```

или обёртку SF:

```js
await SF.whenDefined('sf-tooltip');
```

## Особенности

- Smart-компонент обнаруживается по живому DOM-тегу из `RuleLoader.tags`.
- Компонент должен вызвать `SfComponent.define('sf-name')`.
- Рендеринг построен на Lit и выполняется в light DOM.
- Host элемента имеет `display: contents`.
- Props должны быть явно описаны в `static get props()`.
- Для визуальных классов внутренней оболочки используйте props вроде `root-class`.
- Вложенные `sf-*` элементы должны оставаться в light DOM, чтобы loader мог их обнаружить.
- Зависимости component-модулей подключаются через `relation`.
