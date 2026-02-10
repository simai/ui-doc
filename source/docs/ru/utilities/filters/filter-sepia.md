---
extends: _core._layouts.documentation
section: content
title: "Сепия элемента (filter-sepia)"
description: "Сепия элемента (filter-sepia)"
---

# Сепия элемента (filter-sepia)

[https://dev.ru.simai.io/ru/ui/utility/filter/filter-sepia.php](https://dev.ru.simai.io/ru/ui/utility/filter/filter-sepia.php)

Данный модификатор позволяет отображать элемент с эффектом сепии, придавая ему теплый, коричневатый оттенок.

## Классы и их значения

| Класс       | Значение         |
|:------------|:-----------------|
| .sepia-none | filter: sepia(0) |
| .sepia      | filter: sepia(1) |
{.table}

## Описание

Модификатор `sepia` управляет отображением элемента с эффектом сепии.

- `sepia-none` — без эффекта сепии,
- `sepia` — элемент становится сепийным.

Можно использовать `hover:sepia` для изменения состояния при наведении.

## Синтаксис

- `sepia-none` — без сепии,
- `sepia` — добавить сепию,
- Можно использовать `hover:sepia` для сепии при наведении.

## Пример использования

```html
<!-- Без сепии -->
<div class="sepia-none p-4 bg-primary color-on-surface-inverse">
  Без сепии
</div>
```

```html
<!-- Сепия при наведении -->
<div class="sepia-none hover:sepia p-4 bg-secondary transition">
  Наведи для сепии
</div>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=filters&group=filter-sepia"></iframe>
</div>