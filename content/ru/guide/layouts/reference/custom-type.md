---
title: "Создание собственного типа"
description: "Manifest собственного типа использует формат `simai.composition.type-manifest.v1`. Собственный тип нужен для повторяемой структуры, которой нет среди встроенных типов."
---

# Создание собственного типа

Собственный тип нужен для повторяемой структуры, которой нет среди встроенных типов. Начните со смысла элемента, затем опишите допустимые данные, свойства, слоты и функцию рендеринга в manifest. После этого добавьте рабочий и ошибочный контрольные примеры.

## Когда применять

Создавайте тип в owner-репозитории Framework для общего компонента или в контролируемом расширении проекта для предметного блока. Не помещайте renderer и произвольный код внутрь документа.

## Пример

Для `project.product-grid` можно разрешить слот `items`, пресет `cards` и ресурс `project/product-grid`. Renderer получает уже проверенный узел и возвращает HTML. Контрольный пример доказывает порядок карточек, а отрицательный — что неизвестный слот и опасная ссылка отклоняются.

1. Опишите `project.product-grid` в manifest.
2. Зарегистрируйте renderer с тем же именем.
3. Добавьте допустимый fixture с двумя карточками.
4. Добавьте fixture с неизвестным слотом и убедитесь, что проверка его отклоняет.
5. Подключите пример к документации из проверяемого fixture.

## Регистрация типа

Тип регистрируется в реестре вместе с renderer. `SF.Composition.extendRegistry(manifests, renderers)` создаёт реестр из встроенных типов (`layout.page`, `layout.columns`, `content.paragraph` и других) и ваших. Ключ в `renderers` — имя из `renderer.name` в manifest.

```js
const registry = SF.Composition.extendRegistry(
  [productGridManifest],
  {
    'project.product-grid': ({node, slots}) =>
      `<div class="project-product-grid">${slots.items}</div>`,
  },
);

const {html, diagnostics} = await SF.Composition.render(compositionDocument, {registry});
```

Renderer получает проверенный узел `node`, готовый HTML слотов в `slots` (строкой по имени слота и массивом в `slots.<имя>List`) и `manifest` типа. Ошибки документа приходят в `diagnostics`, а не исключением.

`SF.Composition.createRegistry(manifests, renderers)` берёт список как весь реестр: встроенных типов в нём нет. Он подходит для теста одного типа. Список встроенных типов доступен как `SF.Composition.BUILTIN_TYPE_MANIFESTS`.
