---
extends: _core._layouts.documentation
section: content
title: Цвет границы
description: Цвет границы
---

# Цвет границы


С помощью модификаторов цвета границы в SIMAI Framework вы можете задать  
цвет границы для элемента, используя предустановленные цветовые роли.

## Таблица классов

| Класс                   | Значение                 |
|:------------------------|:---------------------------------------------|
| .border-transparent     | border-color: var(`--sf-transparent`);       |
| .border-current         | border-color: currentColor                   |
| .border-outline         | border-color: var(`--sf-outline`);           |
| .border-outline-variant | border-color: var(`--sf-outline-variant`);   |
| .border-primary         | border-color: var(`--sf-outline-primary`);   |
| .border-secondary       | border-color: var(`--sf-outline-secondary`); |
| .border-tertiary        | border-color: var(`--sf-outline-tertiary`);  |
| .border-error           | border-color: var(`--sf-outline-error`);     |
| .border-warning         | border-color: var(`--sf-outline-warning`);   |
| .border-success         | border-color: var(`--sf-outline-success`);   |
{.table}

## Описание

Модификаторы цвета границы позволяют быстро изменить цвет границы элемента,  
выбирая из набора предустановленных цветовых ролей. Вы можете установить цвет  
границы с помощью одного класса, соответствующего нужному цвету.

## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (sm, md, lg, xl).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:  
  Любой класс из таблицы выше, например `border-primary`.

## Примеры использования

```html
<div class="border-2 border-outline">Граница outline</div>
<div class="border-2 border-primary">Граница primary</div>
<div class="border-2 border-success">Граница success</div>
```

## Переход с предыдущей версии

Ниже приводится таблица замены классов при переходе со старых значений на новые,  
основанные на ролях. Если вы использовали старые классы, подберите для них новые:

| Старый класс                               | Новый класс                |
|:---------------------------------------------------------------|:---------------------------|
| .border-white                                                  | .border-surface-0          |
| .border-black                                                  | .border-surface-inverse    |
| .border-gray-1, .border-gray-2, .border-gray-3                 | .border-surface-container  |
| .border-gray-6, .border-gray-7, .border-gray-8, .border-gray-9 | .border-surface-inverse    |
| .border-red-1, .border-red-2, .border-red-3                    | .border-error-container    |
| .border-red-4 ... .border-red-9                                | .border-error              |
| .border-orange-1, .border-orange-2, .border-orange-3           | .border-warning-container  |
| .border-orange-4 ... .border-orange-9                          | .border-warning            |
| .border-yellow-1, .border-yellow-2, .border-yellow-3           | .border-warning-container  |
| .border-yellow-4 ... .border-yellow-9                          | .border-warning            |
| .border-green-1, .border-green-2, .border-green-3              | .border-success-container  |
| .border-green-4 ... .border-green-9                            | .border-success            |
| .border-blue-1, .border-blue-2, .border-blue-3                 | .border-primary-container  |
| .border-blue-4 ... .border-blue-9                              | .border-primary            |
| .border-purple-1, .border-purple-2, .border-purple-3           | .border-tertiary-container |
| .border-purple-4 ... .border-purple-9                          | .border-tertiary           |
| .border-pink-1, .border-pink-2, .border-pink-3                 | .border-tertiary-container |
| .border-pink-4 ... .border-pink-9                              | .border-tertiary           |
{.table}
