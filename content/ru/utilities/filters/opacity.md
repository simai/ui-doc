---
title: "Прозрачность"
description: "Делает весь элемент вместе с содержимым полупрозрачным."
---

# Прозрачность

Классы `opacity-*` задают прозрачность всего элемента: фона, текста, границы
и дочерних элементов. Берите их для приглушённых элементов и для появления
при наведении.

## Пример

### Шкала

Номер ступени — десятки процентов непрозрачности: `opacity-3` — 30%, `opacity-full` — 100%.

:::example {id="utilities/filters/opacity" label="Ступени прозрачности"}
:::

### При наведении

Наведите указатель на кнопку: она становится непрозрачной.

:::example {id="utilities/filters/opacity-hover" label="hover:opacity-full"}
:::

## Классы

| Класс | CSS | Значения |
|:---|:---|:---|
| `opacity-1` | `opacity: 0.1; opacity: var(--sf-opacity-10, 0.1)` | — |
| `opacity-2` | `opacity: 0.2; opacity: var(--sf-opacity-20, 0.2)` | — |
| `opacity-3` | `opacity: 0.3; opacity: var(--sf-opacity-30, 0.3)` | — |
| `opacity-4` | `opacity: 0.4; opacity: var(--sf-opacity-40, 0.4)` | — |
| `opacity-5` | `opacity: 0.5; opacity: var(--sf-opacity-50, 0.5)` | — |
| `opacity-6` | `opacity: 0.6; opacity: var(--sf-opacity-60, 0.6)` | — |
| `opacity-7` | `opacity: 0.7; opacity: var(--sf-opacity-70, 0.7)` | — |
| `opacity-8` | `opacity: 0.8; opacity: var(--sf-opacity-80, 0.8)` | — |
| `opacity-9` | `opacity: 0.9; opacity: var(--sf-opacity-90, 0.9)` | — |
| `opacity-full` | `opacity: 1` | — |
| `opacity-0` | `opacity: 0` | — |

Условия ([что это](/ru/guide/utilities/conditions/)): ширина экрана — нет; состояния — `hover:`. Например: `hover:opacity-1`.

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Классы читают эти токены темы. Изменённый токен меняет все места, где он используется, — классы, компоненты и тему; задайте его в теме проекта, а не на отдельном элементе. Все токены — на странице [Все токены](/ru/guide/colour/all-tokens/).

| Переменная | Значение по умолчанию |
|:---|:---|
| `--sf-opacity-10` | `10%` |
| `--sf-opacity-20` | `20%` |
| `--sf-opacity-30` | `30%` |
| `--sf-opacity-40` | `40%` |
| `--sf-opacity-50` | `50%` |
| `--sf-opacity-60` | `60%` |
| `--sf-opacity-70` | `70%` |
| `--sf-opacity-80` | `80%` |
| `--sf-opacity-90` | `90%` |

## Применение

### Шкала

| Класс | Токен | Непрозрачность |
| :--- | :--- | ---: |
| `opacity-0` | — | 0 |
| `opacity-1` … `opacity-9` | `--sf-opacity-10` … `--sf-opacity-90` | 10% … 90% |
| `opacity-full` | — | 1 |

### Прозрачность элемента или цвета

`opacity-*` делает прозрачным всё содержимое сразу, в том числе текст. Если
полупрозрачным должен быть только фон, берите полупрозрачную роль фона
(`bg-*-transparent-*`), а текст оставьте непрозрачным — так он сохраняет
контраст.

```html
<button class="opacity-6 hover:opacity-full transition" type="button">Подробнее</button>
```

## Ограничения

- Прозрачный элемент, даже `opacity-0`, занимает место, принимает щелчки и
  фокус и читается экранным диктором. Чтобы элемент не принимал щелчки,
  добавьте [`pointer-events-none`](/ru/utilities/forms/pointer-events/);
  чтобы скрыть его полностью, уберите его из потока и из дерева доступности.
- Текст на полупрозрачном элементе теряет контраст: проверьте его в светлой и
  тёмной теме.
- Значение меньше `1` создаёт у элемента новый контекст наложения.

## См. также

- [Прозрачность элемента](/ru/utilities/filters/filter-opacity/)
- [Прозрачность](/ru/guide/colour/transparency/)
- [Смешивание цветов](/ru/utilities/filters/mix-blend-mode/)
