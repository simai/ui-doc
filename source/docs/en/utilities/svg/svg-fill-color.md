---
extends: _core._layouts.documentation
section: content
title: Цвет заливки
description: Цвет заливки
---

# Цвет заливки

[https://dev.ru.simai.io/ru/ui/utility/svg/fill.php](https://dev.ru.simai.io/ru/ui/utility/svg/fill.php)

С помощью модификаторов цвета заливки вы можете задать цвет заливки для  
SVG-элементов, используя роли вместо исходных цветовых переменных.

## Таблица классов (новые классы)

| Класс                               | Значение                     |
|:------------------------------------|:-------------------------------------------------|
| .fill-transparent                   | fill: var(`--sf-transparent`);                   |
| .fill-current                       | fill: currentColor;                              |
| .fill-surface-0                     | fill: var(`--sf-surface-0`);                     |
| .fill-surface-1                     | fill: var(`--sf-surface-1`);                     |
| .fill-surface-2                     | fill: var(`--sf-surface-2`);                     |
| .fill-surface-3                     | fill: var(`--sf-surface-3`);                     |
| .fill-surface-4                     | fill: var(`--sf-surface-4`);                     |
| .fill-surface                       | fill: var(`--sf-surface-1`);                     |
| .fill-surface-inverse               | fill: var(`--sf-surface-inverse`);               |
| .fill-surface-inverse-fixed         | fill: var(`--sf-surface-inverse-fixed`);         |
| .fill-surface-container             | fill: var(`--sf-surface-container`);             |
| .hover:fill-surface-container       | fill: var(`--sf-surface-container-hover`);       |
| .fill-on-surface                    | fill: var(`--sf-on-surface`);                    |
| .hover:fill-on-surface              | fill: var(`--sf-on-surface-hover`);              |
| .fill-on-surface-variant            | fill: var(`--sf-on-surface-variant`);            |
| .hover:fill-surface-transparent     | fill: var(`--sf-surface-transparent-hover`);     |
| .fill-surface-transparent-select    | fill: var(`--sf-surface-transparent-select`);    |
| .fill-surface-transparent-overlay   | fill: var(`--sf-surface-transparent-overlay`);   |
| .fill-disable                       | fill: var(`--sf-disable`);                       |
| .fill-primary                       | fill: var(`--sf-primary`);                       |
| .hover:fill-primary                 | fill: var(`--sf-primary-hover`);                 |
| .fill-primary-container             | fill: var(`--sf-primary-container`);             |
| .hover:fill-primary-container       | fill: var(`--sf-primary-container-hover`);       |
| .hover:fill-primary-transparent     | fill: var(`--sf-primary-transparent-hover`);     |
| .fill-primary-transparent-select    | fill: var(`--sf-primary-transparent-select`);    |
| .fill-primary-transparent-overlay   | fill: var(`--sf-primary-transparent-overlay`);   |
| .fill-secondary                     | fill: var(`--sf-secondary`);                     |
| .hover:fill-secondary               | fill: var(`--sf-secondary-hover`);               |
| .fill-secondary-container           | fill: var(`--sf-secondary-container`);           |
| .hover:fill-secondary-container     | fill: var(`--sf-secondary-container-hover`);     |
| .hover:fill-secondary-transparent   | fill: var(`--sf-secondary-transparent-hover`);   |
| .fill-secondary-transparent-select  | fill: var(`--sf-secondary-transparent-select`);  |
| .fill-secondary-transparent-overlay | fill: var(`--sf-secondary-transparent-overlay`); |
| .fill-tertiary                      | fill: var(`--sf-tertiary`);                      |
| .hover:fill-tertiary                | fill: var(`--sf-tertiary-hover`);                |
| .fill-tertiary-container            | fill: var(`--sf-tertiary-container`);            |
| .hover:fill-tertiary-container      | fill: var(`--sf-tertiary-container-hover`);      |
| .hover:fill-tertiary-transparent    | fill: var(`--sf-tertiary-transparent-hover`);    |
| .fill-tertiary-transparent-select   | fill: var(`--sf-tertiary-transparent-select`);   |
| .fill-tertiary-transparent-overlay  | fill: var(`--sf-tertiary-transparent-overlay`);  |
| .fill-error                         | fill: var(`--sf-error`);                         |
| .hover:fill-error                   | fill: var(`--sf-error-hover`);                   |
| .fill-error-container               | fill: var(`--sf-error-container`);               |
| .hover:fill-error-container         | fill: var(`--sf-error-container-hover`);         |
| .hover:fill-error-transparent       | fill: var(`--sf-error-transparent-hover`);       |
| .fill-error-transparent-select      | fill: var(`--sf-error-transparent-select`);      |
| .fill-error-transparent-overlay     | fill: var(`--sf-error-transparent-overlay`);     |
| .fill-warning                       | fill: var(`--sf-warning`);                       |
| .hover:fill-warning                 | fill: var(`--sf-warning-hover`);                 |
| .fill-warning-container             | fill: var(`--sf-warning-container`);             |
| .hover:fill-warning-container       | fill: var(`--sf-warning-container-hover`);       |
| .hover:fill-warning-transparent     | fill: var(`--sf-warning-transparent-hover`);     |
| .fill-warning-transparent-select    | fill: var(`--sf-warning-transparent-select`);    |
| .fill-warning-transparent-overlay   | fill: var(`--sf-warning-transparent-overlay`);   |
| .fill-success                       | fill: var(`--sf-success`);                       |
| .hover:fill-success                 | fill: var(`--sf-success-hover`);                 |
| .fill-success-container             | fill: var(`--sf-success-container`);             |
| .hover:fill-success-container       | fill: var(`--sf-success-container-hover`);       |
| .hover:fill-success-transparent     | fill: var(`--sf-success-transparent-hover`);     |
| .fill-success-transparent-select    | fill: var(`--sf-success-transparent-select`);    |
| .fill-success-transparent-overlay   | fill: var(`--sf-success-transparent-overlay`);   |
{.table}

## Описание

Использование модификатора: `{состояние}:{модификатор}` или просто `{модификатор}`

- Состояние *(обязательный параметр при использовании состояний)*:

    - `hover` — применяет модификатор при наведении курсора.
- Модификатор *(обязательный параметр)*:  
  Один из классов выше, например `fill-primary`, `fill-error`, `fill-success`, и т.д.

## Пример использования

```html
<svg class="fill-error-default">
    <!-- Ваше содержимое SVG -->
</svg>

<svg class="hover:fill-warning">
    <!-- При наведении заливка будет warning -->
</svg>
```

## Переход со старой версии

Используйте данную таблицу замен, чтобы перейти с предыдущей версии на новую:

| Старый класс                       | Новый класс              |
|:-------------------------------------------------------|:-------------------------|
| .fill-white                                            | .fill-surface-0          |
| .fill-black                                            | .fill-surface-inverse    |
| .fill-gray-1, .fill-gray-2, .fill-gray-3               | .fill-surface-container  |
| .fill-gray-6, .fill-gray-7, .fill-gray-8, .fill-gray-9 | .fill-surface-inverse    |
| .fill-red-1, .fill-red-2, .fill-red-3                  | .fill-error-container    |
| .fill-red-4 ... .fill-red-9                            | .fill-error              |
| .fill-orange-1, .fill-orange-2, .fill-orange-3         | .fill-warning-container  |
| .fill-orange-4 ... .fill-orange-9                      | .fill-warning            |
| .fill-yellow-1, .fill-yellow-2, .fill-yellow-3         | .fill-warning-container  |
| .fill-yellow-4 ... .fill-yellow-9                      | .fill-warning            |
| .fill-green-1, .fill-green-2, .fill-green-3            | .fill-success-container  |
| .fill-green-4 ... .fill-green-9                        | .fill-success            |
| .fill-blue-1, .fill-blue-2, .fill-blue-3               | .fill-primary-container  |
| .fill-blue-4 ... .fill-blue-9                          | .fill-primary            |
| .fill-purple-1, .fill-purple-2, .fill-purple-3         | .fill-tertiary-container |
| .fill-purple-4 ... .fill-purple-9                      | .fill-tertiary           |
| .fill-pink-1, .fill-pink-2, .fill-pink-3               | .fill-tertiary-container |
| .fill-pink-4 ... .fill-pink-9                          | .fill-tertiary           |
{.table}

## Адаптивность

Данный раздел не подразумевает адаптивность по контрольным точкам. Если нужно  
адаптировать цвет заливки в зависимости от размера экрана, вы можете добавить  
префикс контрольной точки (`sm`, `md`, `lg`, `xl`) перед модификатором.

Например:  
`md:fill-primary` — применит цвет заливки primary для экранов от md и выше.
