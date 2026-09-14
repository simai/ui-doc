---
title: "API сборки и рендеринга"
description: "SF.Composition собирает Recipe, проверяет Document и превращает готовое дерево в HTML."
---

# API сборки и рендеринга

Браузерный API доступен как `SF.Composition`. `resolveRecipe(recipe, context)` собирает готовый Document. Действующие операции `validate(document)`, `normalize(document)` и `render(document, context)` проверяют, нормализуют и показывают готовое дерево. Исходные ESM-функции имеют тот же смысл.

## Когда применять

Используйте API в редакторе, серверной сборке и перед публикацией. `context.ports` реализует продукт: он читает входы и точные версии шаблонов после проверки доступа. Renderer не должен повторно получать данные.

## Пример

```js
const assembled = await SF.Composition.resolveRecipe(recipe, {
  scope: 'site-17',
  ports,
  registry,
  executionContract
});
if (!assembled.document) throw new Error(assembled.diagnostics[0].message);

const checked = SF.Composition.validate(assembled.document);
if (!checked.valid) throw new Error(checked.diagnostics[0].message);
const normalized = await SF.Composition.normalize(assembled.document);
const result = await SF.Composition.render(normalized.document, context);
```

`resolveRecipe()` возвращает `document`, `dependencyReceipt`, трассировку и диагностику. При блокирующей ошибке `document` и перечень зависимостей равны `null`. `render()` возвращает HTML, ресурсы, сведения для подключения поведения, digest и диагностику.

Далее: [ошибки и диагностика](/ru/guide/layouts/reference/diagnostics/).
