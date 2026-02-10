---
extends: _core._layouts.documentation
section: content
title: Параметры по умолчанию для таблиц
description: Параметры по умолчанию для таблиц
---

# Параметры по умолчанию для таблиц

Базовый класс `.table` задаёт стандартный внешний вид таблицы и использует токены темы:
- `--sf-outline-variant` для границ,
- `--sf-surface-transparent-select` для полос,
- `--sf-primary-transparent-hover` для hover,
- `--sf-primary-transparent-select` для active.

## Пример

```html
<table class="table">
  ...
</table>
```
## Playground

<div class="sf-playground">
<iframe src="https://play.simai.io/embed.html?component=tables&group=tables-default-parameters"></iframe>
</div>