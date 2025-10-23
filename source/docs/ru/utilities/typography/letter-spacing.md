---
extends: _core._layouts.documentation
section: content
title: "Трекинг текста (letter-spacing)"
description: "Трекинг текста (letter-spacing)"
---

# Трекинг текста (letter-spacing)

[https://dev.ru.simai.io/ru/ui/utility/typography/letter-spacing.php](https://dev.ru.simai.io/ru/ui/utility/typography/letter-spacing.php)

С помощью модификаторов можно регулировать межбуквенные интервалы (трекинг).

## Таблица классов

| Класс                 | Значение                            |
|:----------------------|:--------------------------------------------------------|
| .tracking-tighter     | letter-spacing: var(`--sf-text--tracking-tighter`);     |
| .tracking-tight       | letter-spacing: var(`--sf-text--tracking-tight`);       |
| .tracking-no-tracking | letter-spacing: var(`--sf-text--tracking-no-tracking`); |
| .tracking-wide        | letter-spacing: var(`--sf-text--tracking-wide`);        |
| .tracking-wider       | letter-spacing: var(`--sf-text--tracking-wider`);       |
| .tracking-widest      | letter-spacing: var(`--sf-text--tracking-widest`);      |
{.table}
## Синтаксис

Использование: `{контрольная точка}:{модификатор}` или просто `{модификатор}`

- Контрольная точка *(необязательный параметр)*:  
  Применяет модификатор начиная с определенного размера экрана (`sm`, `md`, `lg`, `xl`).  
  Если не указана, модификатор применяется для всех размеров.

- Модификатор *(обязательный параметр)*:

    - `tracking-tighter` – более плотный текст
    - `tracking-tight` – сжатый текст
    - `tracking-no-tracking` – нормальный текст (без изменения)
    - `tracking-wide` – чуть более свободный текст
    - `tracking-wider` – ещё более просторный текст
    - `tracking-widest` – максимально разреженный текст

## Пример использования

```html
<p class="tracking-tighter">Очень плотный трекинг</p>
<p class="tracking-tight">Чуть сжатый трекинг</p>
<p class="tracking-no-tracking">Нормальный трекинг</p>
<p class="tracking-wide">Чуть разреженный трекинг</p>
<p class="tracking-wider">Более разреженный трекинг</p>
<p class="tracking-widest">Максимально разреженный трекинг</p>
```

## Переменные

| Переменная                        | Значение |
|:----------------------------------|:---------|
| `--sf-text--tracking-tighter`     | -0.05    |
| `--sf-text--tracking-tight`       | -0.025   |
| `--sf-text--tracking-no-tracking` | 0        |
| `--sf-text--tracking-wide`        | 0.025    |
| `--sf-text--tracking-wider`       | 0.05     |
| `--sf-text--tracking-widest`      | 0.1      |
{.table}

## Адаптивность

Для изменения трекинга начиная с определённого размера экрана, добавьте префикс контрольной точки. Например:

```html
<p class="md:tracking-wide">Начиная с размера md, трекинг станет шире.</p>
```
