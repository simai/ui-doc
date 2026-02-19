---
extends: _core._layouts.documentation
section: content
title: "Длина строки (text-max-width)"
description: "Длина строки (text-max-width)"
---

# Длина строки (text-max-width)


С помощью модификаторов можно задать максимальную длину строки текста.

## Таблица классов

| Класс           | Значение                                     |
|:----------------|:---------------------------------------------|
| .measure        | max-width: var(`--sf-text--measure`);        |
| .measure-wide   | max-width: var(`--sf-text--measure-wide`);   |
| .measure-narrow | max-width: var(`--sf-text--measure-narrow`); |
{.table}

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `measure` – длина строки равна примерно 65 символам.
    - `measure-wide` – длина строки равна примерно 80 символам.
    - `measure-narrow` – длина строки равна примерно 45 символам.

## Пример использования

```html
<p class="measure">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<p class="measure-wide">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

<p class="measure-narrow">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

## Адаптивность

Для изменения длины строки, начиная с определённого размера экрана, добавьте префикс контрольной точки (`sm:`, `md:`,
`lg:`, `xl:`):

```html
<p class="md:measure">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

## Переменные

| Переменная                  | Значение |
|:----------------------------|:---------|
| `--sf-text--measure`        | 65ch;    |
| `--sf-text--measure-wide`   | 80ch;    |
| `--sf-text--measure-narrow` | 45ch;    |
{.table}
