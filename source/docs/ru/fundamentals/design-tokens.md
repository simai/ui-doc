---
extends: _core._layouts.documentation
section: content
title: Дизайн-токены
description: "Справочник семантических токенов интервалов, радиусов, иконок, контейнеров, прозрачности, теней и слоёв SIMAI Framework."
---

# Дизайн-токены

Дизайн-токены связывают базовые [размерные примитивы](/ru/fundamentals/sizes/size-scale/)
с назначением в интерфейсе. Их можно переопределять на уровне проекта, не
изменяя классы утилит.

## Интервалы

Шкала `--sf-space-*` адаптивна: начиная с `960px` часть значений становится
крупнее.

| Токен | До 960px | От 960px |
|:---|---:|---:|
| `--sf-space-0` | 0 | 0 |
| `--sf-space-1/4` | 4px | 4px |
| `--sf-space-1/3` | 8px | 8px |
| `--sf-space-1/2` | 8px | 12px |
| `--sf-space-1` | 12px | 16px |
| `--sf-space-2` | 16px | 20px |
| `--sf-space-3` | 16px | 24px |
| `--sf-space-4` | 24px | 32px |
| `--sf-space-5` | 32px | 40px |
| `--sf-space-6` | 32px | 48px |
| `--sf-space-7` | 40px | 64px |
| `--sf-space-8` | 48px | 80px |
{.table}

Для интервалов между текстом, самостоятельными блоками и разделами используйте
не номера шкалы напрямую, а [семантические токены вертикального ритма](/ru/fundamentals/content-spacing/).

## Радиусы

| Токен | До 960px | От 960px |
|:---|---:|---:|
| `--sf-radius-1/2` | 4px | 4px |
| `--sf-radius-1` | 8px | 8px |
| `--sf-radius-2` | 10px | 12px |
| `--sf-radius-3` | 20px | 24px |
| `--sf-radius-4` | 36px | 48px |
| `--sf-radius-circle` | 1000px | 1000px |
| `--sf-radius-square` | 0 | 0 |
| `--sf-radius-rounded` | 1000px | 1000px |
{.table}

## Размеры иконок

| Токен | Размер | Токен | Размер |
|:---|---:|:---|---:|
| `--sf-icon-size-1/4` | 10px | `--sf-icon-size-1` | 16px |
| `--sf-icon-size-1/3` | 12px | `--sf-icon-size-2` | 20px |
| `--sf-icon-size-1/2` | 14px | `--sf-icon-size-3` | 24px |
| | | `--sf-icon-size-4` | 28px |
| | | `--sf-icon-size-5` | 32px |
| | | `--sf-icon-size-6` | 36px |
| | | `--sf-icon-size-7` | 40px |
{.table}

## Максимальная ширина контейнеров

Токены контейнеров задаются от контрольной точки `lg` (`960px`).

| Токен | Значение |
|:---|---:|
| `--sf-container-1--size-max` | 960px |
| `--sf-container-2--size-max` | 1024px |
| `--sf-container-3--size-max` | 1152px |
| `--sf-container-4--size-max` | 1280px |
| `--sf-container-5--size-max` | 1408px |
| `--sf-container-6--size-max` | 1536px |
| `--sf-container-7--size-max` | 1664px |
| `--sf-container-8--size-max` | 1792px |
{.table}

## Прозрачность и слои

- `--sf-opacity-10` — `--sf-opacity-90`: прозрачность от 10% до 90% с шагом 10%.
- `--sf-z-index--1`: `-1`.
- `--sf-z-index-0`: `0`.
- `--sf-z-index-1` — `--sf-z-index-9`: уровни от `10` до `90` с шагом `10`.

Уровни `z-index` задают относительный порядок, а не назначение. В проекте
полезно связать их с ролями, например `--project-layer-modal:
var(--sf-z-index-8)`.

## Тени и фокус

Доступны уровни `--sf-ui-shadow-1` — `--sf-ui-shadow-5`, верхняя тень
`--sf-ui-shadow-top` и фокусное кольцо `--sf-ui-focus`. Цвета теней и фокуса
берутся из текущей темы, поэтому эти токены работают и на светлой, и на тёмной
поверхности.

```css
.project-dialog {
    border-radius: var(--sf-radius-2);
    box-shadow: var(--sf-ui-shadow-4);
    padding: var(--sf-space-4);
    z-index: var(--sf-z-index-8);
}
```

## Где переопределять

Глобальные токены проекта задавайте после CSS ядра, в области `:root` или
темы. Локальные токены компонента задавайте на его корневом селекторе и
ссылайтесь в них на глобальные значения.
