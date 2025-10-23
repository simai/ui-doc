---
extends: _core._layouts.documentation
section: content
title: Соотношение сторон (Aspect Ratio)
description: Соотношение сторон (Aspect Ratio)
---

# Соотношение сторон (Aspect Ratio)

[https://dev.ru.simai.io/ru/ui/utility/layout/aspect-ratio.php](https://dev.ru.simai.io/ru/ui/utility/layout/aspect-ratio.php)

## Описание

Модификатор `aspect-{width}x{height}` задаёт соотношение сторон для элемента. Это полезно при создании элементов,
которые должны сохранять определённые пропорции, например, контейнеров для видео или изображений.

## Классы

| Класс        | Значение             |
|:-------------|:---------------------|
| .aspect-1x1  | aspect-ratio: 1 / 1  |
| .aspect-1x2  | aspect-ratio: 1 / 2  |
| .aspect-2x1  | aspect-ratio: 2 / 1  |
| .aspect-2x3  | aspect-ratio: 2 / 3  |
| .aspect-3x1  | aspect-ratio: 3 / 1  |
| .aspect-3x2  | aspect-ratio: 3 / 2  |
| .aspect-3x4  | aspect-ratio: 3 / 4  |
| .aspect-4x1  | aspect-ratio: 4 / 1  |
| .aspect-4x3  | aspect-ratio: 4 / 3  |
| .aspect-16x9 | aspect-ratio: 16 / 9 |
| .aspect-9x16 | aspect-ratio: 9 / 16 |
{.table}

## Использование

Для применения модификатора просто добавьте соответствующий класс к элементу:

```html
<div class="aspect-1x1"></div>
<div class="aspect-16x9"></div>
<div class="aspect-3x4"></div>
```

Эти классы обеспечат, что контейнеры будут иметь заданное соотношение сторон, независимо от их ширины.

## Адаптивность

Вы можете использовать контрольные точки (breakpoints), чтобы изменять соотношение сторон в зависимости от размера
экрана. Для этого добавьте префикс контрольной точки (например, sm:, md:, lg:, xl:) перед модификатором. Это позволит
включить модификатор при достижении соответствующего размера экрана.

Пример: md:aspect-3x4 будет применять соотношение сторон 3x4 для экранов размером Medium и больше:

```html
<div class="md:aspect-3x4"></div>
```
