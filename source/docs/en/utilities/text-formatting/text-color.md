---
extends: _core._layouts.documentation
section: content
title: Цвет текста
description: Цвет текста
---

# Цвет текста

[https://dev.ru.simai.io/ru/ui/utility/text-decoration/text-color.php](https://dev.ru.simai.io/ru/ui/utility/text-decoration/text-color.php)

С помощью модификаторов цвета текста можно управлять цветом текста для различных состояний и тем.

## Таблица классов (новая версия)

| Класс                                 | Значение                       |
|:--------------------------------------|:---------------------------------------------------|
| .color-inherit                        | color: inherit;                                    |
| .color-on-surface                     | color: var(`--sf-on-surface`);                     |
| .hover:color-on-surface               | color: var(`--sf-on-surface-hover`);               |
| .active:color-on-surface              | color: var(`--sf-on-surface-active`);              |
| .color-on-surface-fixed               | color: var(`--sf-on-surface-fixed`);               |
| .color-on-surface-variant             | color: var(`--sf-on-surface-variant`);             |
| .color-on-surface-inverse             | color: var(`--sf-on-surface-inverse`);             |
| .color-on-surface-inverse-fixed       | color: var(`--sf-on-surface-inverse-fixed`);       |
| .color-disable                        | color: var(`--sf-disable`);                        |
| .color-on-disable                     | color: var(`--sf-on-disable`);                     |
| .color-primary                        | color: var(`--sf-primary`);                        |
| .hover:color-primary                  | color: var(`--sf-primary-hover`);                  |
| .active:color-primary                 | color: var(`--sf-primary-active`);                 |
| .color-on-primary                     | color: var(`--sf-on-primary`);                     |
| .color-on-primary-container           | color: var(`--sf-on-primary-container`);           |
| .color-on-primary-container-graphic   | color: var(`--sf-on-primary-container-graphic`);   |
| .color-secondary                      | color: var(`--sf-secondary`);                      |
| .hover:color-secondary                | color: var(`--sf-secondary-hover`);                |
| .active:color-secondary               | color: var(`--sf-secondary-active`);               |
| .color-on-secondary                   | color: var(`--sf-on-secondary`);                   |
| .color-on-secondary-container         | color: var(`--sf-on-secondary-container`);         |
| .color-on-secondary-container-graphic | color: var(`--sf-on-secondary-container-graphic`); |
| .color-tertiary                       | color: var(`--sf-tertiary`);                       |
| .hover:color-tertiary                 | color: var(`--sf-tertiary-hover`);                 |
| .active:color-tertiary                | color: var(`--sf-tertiary-active`);                |
| .color-on-tertiary                    | color: var(`--sf-on-tertiary`);                    |
| .color-on-tertiary-container          | color: var(`--sf-on-tertiary-container`);          |
| .color-on-tertiary-container-graphic  | color: var(`--sf-on-tertiary-container-graphic`);  |
| .color-error                          | color: var(`--sf-error`);                          |
| .hover:color-error                    | color: var(`--sf-error-hover`);                    |
| .active:color-error                   | color: var(`--sf-error-active`);                   |
| .color-on-error                       | color: var(`--sf-on-error`);                       |
| .color-on-error-container             | color: var(`--sf-on-error-container`);             |
| .color-on-error-container-graphic     | color: var(`--sf-on-error-container-graphic`);     |
| .color-warning                        | color: var(`--sf-warning`);                        |
| .hover:color-warning                  | color: var(`--sf-warning-hover`);                  |
| .active:color-warning                 | color: var(`--sf-warning-active`);                 |
| .color-on-warning                     | color: var(`--sf-on-warning`);                     |
| .color-on-warning-container           | color: var(`--sf-on-warning-container`);           |
| .color-on-warning-container-graphic   | color: var(`--sf-on-warning-container-graphic`);   |
| .color-success                        | color: var(`--sf-success`);                        |
| .hover:color-success                  | color: var(`--sf-success-hover`);                  |
| .active:color-success                 | color: var(`--sf-success-active`);                 |
| .color-on-success                     | color: var(`--sf-on-success`);                     |
| .color-on-success-container           | color: var(`--sf-on-success-container`);           |
| .color-on-success-container-graphic   | color: var(`--sf-on-success-container-graphic`);   |
{.table}

## Описание

Модификаторы цвета текста позволяют задать различные цвета для текста в зависимости от контекста, состояния и темы.
Можно назначать цвета для состояний `hover` и `active`.

## Пример

```html
<p class="color-on-surface">Основной текст на фоне поверхности</p>
<p class="hover:color-primary">Текст при наведении будет в основном цвете</p>
<p class="active:color-error">При нажатии текст будет цветом ошибки</p>
```
