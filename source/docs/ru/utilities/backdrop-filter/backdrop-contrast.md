---
extends: _core._layouts.documentation
section: content
title: "Контрастность фона элемента (backdrop-contrast)"
description: "Контрастность фона элемента (backdrop-contrast)"
---

# Контрастность фона элемента (backdrop-contrast)

!rtags[backdrop-contrast]



Данный модификатор позволяет управлять контрастностью фона элемента.

## Классы и их значения:

| Класс                  | Значение                        |
|:-----------------------|:--------------------------------|
| .backdrop-contrast-0   | backdrop-filter: contrast(0)    |
| .backdrop-contrast-1/4 | backdrop-filter: contrast(0.8)  |
| .backdrop-contrast-1/3 | backdrop-filter: contrast(0.9)  |
| .backdrop-contrast-1/2 | backdrop-filter: contrast(0.95) |
| .backdrop-contrast-1   | backdrop-filter: contrast(1)    |
| .backdrop-contrast-2   | backdrop-filter: contrast(1.05) |
| .backdrop-contrast-3   | backdrop-filter: contrast(1.1)  |
| .backdrop-contrast-4   | backdrop-filter: contrast(1.2)  |
{.table}

## Описание

- `backdrop-contrast-0` — минимальная контрастность (почти невидимо).
- `backdrop-contrast-1` — нормальная контрастность.
- Значения от 1/4 до 1/2 — немного уменьшают контраст.
- Значения выше 1 — слегка увеличивают контраст.

Вы можете использовать `hover:` для изменения контрастности при наведении, например: `hover:backdrop-contrast-1/2`.

## Синтаксис:

- `{модификатор}`: `backdrop-contrast-{0|1/4|1/3|1/2|1|2|3|4}`
- Нет адаптивности, но есть поддержка `hover:`.

## Пример использования:

```html
<!-- При наведении контраст фона слегка уменьшится до 0.95 -->
<div class="backdrop-contrast-1 hover:backdrop-contrast-1/2 p-4 bg-primary color-on-surface-inverse transition">
  Наведи, чтобы немного уменьшить контраст
</div>
```

## Замена с предыдущей версии:

| Старый класс         | Новый класс            |
|:---------------------|:-----------------------|
| .backdrop-contrast-1 | .backdrop-contrast-1/4 |
| .backdrop-contrast-2 | .backdrop-contrast-1/3 |
| .backdrop-contrast-3 | .backdrop-contrast-1   |
| .backdrop-contrast-4 | .backdrop-contrast-2   |
| .backdrop-contrast-5 | .backdrop-contrast-3   |
| .backdrop-contrast-6 | .backdrop-contrast-4   |
{.table}
## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=backdrop-filter&group=backdrop-contrast"></iframe>
</div>
