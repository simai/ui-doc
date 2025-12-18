---
extends: _core._layouts.documentation
section: content
title: Контекст наложения (isolation)
description: Контекст наложения (isolation)
---

# Контекст наложения (isolation)

[https://dev.ru.simai.io/ru/ui/utility/layout/isolation.php](https://dev.ru.simai.io/ru/ui/utility/layout/isolation.php)

Модификатор `isolation` предназначен для управления контекстом наложения элемента. Он определяет, будет ли элемент и его
потомки создавать новый контекст наложения, что особенно полезно при использовании эффектов наложения или смешивания
цветов.

## Синтаксис

Использование: `{модификатор}`

- Модификатор (обязательный параметр):
    - `isolate` — создаёт новый контекст наложения для элемента. Это означает, что эффект смешивания (blend) или
      наложения применённый к элементам внутри этого блока не будет влиять на элементы снаружи.
    - `isolation-auto` — автоматически создаёт новый контекст наложения, если это необходимо. Если ни одно из свойств не
      требует отдельного контекста, он не будет создан.

## Примеры

### `isolate`  
С помощью модификатора `isolate` можно создать новый контекст наложения:

```html
<div class="bg-success-tonal ...">
    <div class="isolate ...">
        <div class="mix-blend-multiply bg-warning-tonal ..."></div>
    </div>
</div>
```

### `isolation-auto`  
С помощью модификатора `isolation-auto` новый контекст наложения создаётся по необходимости:

```html
<div class="bg-success-tonal ...">
    <div class="isolation-auto ...">
        <div class="mix-blend-multiply bg-warning-tonal ..."></div>
    </div>
</div>
```
