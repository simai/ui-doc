---
extends: _core._layouts.documentation
section: content
title: Высота строки
description: Высота строки
---

# Высота строки

В новой версии высота строки рассчитывается отдельно для основного текста и для заголовков, с учётом кратности 0.25rem (
4px). Это помогает поддерживать единообразие в дизайне.

**Общие правила:**

* **Основной текст:**  
  Высота строки ≈ 1.5 размера шрифта. Если результат не кратен 0.25rem, его уменьшают до ближайшего подходящего
  значения.
* **Заголовки:**  
  Высота строки ≈ 1.2 размера шрифта. Минимальная высота заголовка не меньше 1\.  
  Если результат не кратен 0.25rem, значение также округляется до ближайшего меньшего подходящего значения.

Если итоговое число не попадает в ряд доступных значений, используйте ближайшее меньшее значение.

## Таблица высоты строки для **основного текста**:

| Переменная              | Значение (mobile) |      | Значение (desktop) |       |
|:------------------------|-------------------|:-----|--------------------|:------|
| `--sf-text--height-1/4` | `--sf-b2`         | 12px | `--sf-b2`          | 12px  |
| `--sf-text--height-1/3` | `--sf-b6`         | 16px | `--sf-b6`          | 16px  |
| `--sf-text--height-1/2` | `--sf-b6`         | 16px | `--sf-c0`          | 20px  |
| `--sf-text--height-1`   | `--sf-c0`         | 20px | `--sf-c2`          | 24px  |
| `--sf-text--height-2`   | `--sf-c2`         | 24px | `--sf-c4`          | 28px  |
| `--sf-text--height-3`   | `--sf-c2`         | 24px | `--sf-c8`          | 36px  |
| `--sf-text--height-4`   | `--sf-c4`         | 28px | `--sf-d0`          | 40px  |
| `--sf-text--height-5`   | `--sf-c6`         | 32px | `--sf-d2`          | 48px  |
| `--sf-text--height-6`   | `--sf-c8`         | 36px | `--sf-d3`          | 52px  |
| `--sf-text--height-7`   | `--sf-d0`         | 40px | `--sf-d5`          | 60px  |
| `--sf-text--height-8`   | `--sf-d2`         | 48px | `--sf-d8`          | 72px  |
| `--sf-text--height-9`   | `--sf-d3`         | 52px | `--sf-e0`          | 80px  |
| `--sf-text--height-10`  | `--sf-d5`         | 60px | `--sf-e2`          | 96px  |
| `--sf-text--height-11`  | `--sf-d6`         | 64px | `--sf-e3`          | 104px |
| `--sf-text--height-12`  | `--sf-d8`         | 72px | `--sf-e5`          | 120px |
{.table}

## Таблица высоты строки для **заголовков**

Для заголовков используется префикс \`title\` в названиях переменных. Это упрощает различие от базового текста и учёт
обратного порядка размеров (заголовок 1 соответствует высоте 6).

| Переменная              | Значение (mobile) |      | Значение (desktop) |      |
|:------------------------|-------------------|:-----|--------------------|:-----|
| `--sf-title--height-1`  | `--sf-b6`         | 16px | `--sf-b6`          | 16px |
| `--sf-title--height-2`  | `--sf-b6`         | 16px | `--sf-c2`          | 24px |
| `--sf-title--height-3`  | `--sf-c0`         | 20px | `--sf-c4`          | 28px |
| `--sf-title--height-4`  | `--sf-c2`         | 24px | `--sf-c6`          | 32px |
| `--sf-title--height-5`  | `--sf-c2`         | 24px | `--sf-c8`          | 36px |
| `--sf-title--height-6`  | `--sf-c4`         | 28px | `--sf-d0`          | 40px |
| `--sf-title--height-7`  | `--sf-c6`         | 32px | `--sf-d2`          | 48px |
| `--sf-title--height-8`  | `--sf-c8`         | 36px | `--sf-d4`          | 56px |
| `--sf-title--height-9`  | `--sf-d0`         | 40px | `--sf-d6`          | 64px |
| `--sf-title--height-10` | `--sf-d2`         | 48px | `--sf-d9`          | 76px |
| `--sf-title--height-11` | `--sf-d3`         | 52px | `--sf-e0`          | 80px |
| `--sf-title--height-12` | `--sf-d4`         | 56px | `--sf-e2`          | 96px |
{.table}

## Применение модификатора heading

Чтобы переключить высоту текста с обычной на заголовочную, используйте модификатор `.heading`. Он заменяет высоту строки
обычного текста на высоту строки заголовка. Подключайте стили после определения высоты для основного текста.

Пример:

```css
.text-1.heading {
  --sf-text--height-1: var(--sf-heading--height-1);
}
```

Для роли **label** используются переменные высоты текста:

| Переменная                  | Значение                |
|:----------------------------|:------------------------|
| `--sf-label-small--height`  | `--sf-text--height-1/4` |
| `--sf-label-medium--height` | `--sf-text--height-1/3` |
| `--sf-label-large--height`  | `--sf-text--height-1/2` |
{.table}

Для роли **body-text** используются переменные высоты текста:

| Переменная                 | Значение                |
|:---------------------------|:------------------------|
| `--sf-text-small--height`  | `--sf-text--height-1/2` |
| `--sf-text-medium--height` | `--sf-text--height-1`   |
| `--sf-text-large--height`  | `--sf-text--height-2`   |
{.table}

Для роли **heading** используются переменные высоты текста:

| Переменная               | Значение               |
|:-------------------------|:-----------------------|
| `--sf-heading-1--height` | `--sf-title--height-6` |
| `--sf-heading-2--height` | `--sf-title--height-5` |
| `--sf-heading-3--height` | `--sf-title--height-4` |
| `--sf-heading-4--height` | `--sf-title--height-3` |
| `--sf-heading-5--height` | `--sf-title--height-2` |
| `--sf-heading-6--height` | `--sf-title--height-1` |
{.table}

Для роли **display** используются переменные высоты текста:

| Переменная               | Значение                |
|:-------------------------|:------------------------|
| `--sf-display-1--height` | `--sf-title--height-12` |
| `--sf-display-2--height` | `--sf-title--height-11` |
| `--sf-display-3--height` | `--sf-title--height-10` |
| `--sf-display-4--height` | `--sf-title--height-9`  |
| `--sf-display-5--height` | `--sf-title--height-8`  |
| `--sf-display-6--height` | `--sf-title--height-7`  |
{.table}
