---
extends: _core._layouts.documentation
section: content
title: "Максимальная ширина контейнера (max-container)"
description: "Ограничение ширины стандартного контейнера через токены системы размеров SIMAI Framework."
---

# Максимальная ширина контейнера

!rtags[max-container]

`max-container-*` задаёт максимальную ширину вложенного `.container`. Модификатор
ставится на родительский элемент, а сам контейнер остаётся стандартным и
сохраняет адаптивные отступы.

```html
<div class="max-container-7">
  <div class="container m-inline-auto">
    ...контент...
  </div>
</div>
```

До `desktop` вложенный контейнер занимает доступную ширину и не выходит за
границы viewport. Начиная с `desktop`, его максимум определяется переменной
`--sf-container-N--size-max`. Центрирование выполняет `m-inline-auto`.

## Значения

| Класс | Переменная контейнера | Токен системы размеров |
|:---|:---|:---|
| `max-container-1` | `--sf-container-1--size-max` | `--sf-h5` |
| `max-container-2` | `--sf-container-2--size-max` | `--sf-h6` |
| `max-container-3` | `--sf-container-3--size-max` | `--sf-h8` |
| `max-container-4` | `--sf-container-4--size-max` | `--sf-i0` |
| `max-container-5` | `--sf-container-5--size-max` | `--sf-i1` |
| `max-container-6` | `--sf-container-6--size-max` | `--sf-i2` |
| `max-container-7` | `--sf-container-7--size-max` | `--sf-i3` |
| `max-container-8` | `--sf-container-8--size-max` | `--sf-i4` |
{.table}

Размеры не дублируются в пикселях или `rem`: источником истины остаётся система
размеров Framework. Если значение соответствующего токена изменится, контейнер
автоматически получит новое значение.

## Полноширинный фон и выровненный контент

Родитель может занимать всю ширину экрана, а его содержимое — совпадать с общей
сеткой страницы:

```html
<section class="bg-surface-1 max-container-7">
  <div class="container m-inline-auto">
    ...контент секции...
  </div>
</section>
```

## Playground

<div class="sf-playground overflow-hidden">
<iframe title="Все значения max-container" loading="lazy" src="https://play.simai.io/embed.html?component=layout&group=max-container"></iframe>
</div>
