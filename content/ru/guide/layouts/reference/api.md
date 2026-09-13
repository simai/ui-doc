---
title: "API проверки и рендеринга"
description: "Браузерный API доступен как `SF."
---

# API проверки и рендеринга

Браузерный API доступен как `SF.Composition`. Он состоит из трёх операций: `validate(document)`, `normalize(document)` и `render(document, context)`. Исходные ESM-функции имеют тот же смысл.

## Когда применять

Используйте API в редакторе, серверной сборке и перед публикацией. Не пропускайте проверку и не вставляйте возвращённый HTML в привилегированный контекст, если проект добавил собственный небезопасный renderer.

## Пример

```js
const checked = SF.Composition.validate(document);
if (!checked.valid) throw new Error(checked.diagnostics[0].message);
const normalized = await SF.Composition.normalize(document);
const result = await SF.Composition.render(normalized.document, context);
```
`render()` возвращает HTML, ресурсы, сведения для подключения поведения, digest и диагностику. Неизвестный тип или отсутствующий renderer дают ошибку.

## Что дальше

[Научитесь читать диагностику](/ru/guide/layouts/reference/diagnostics/).
