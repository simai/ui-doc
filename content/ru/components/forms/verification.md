---
title: "Код подтверждения"
description: "Принимает одноразовый код в одно поле и показывает его по ячейкам."
profile: reference
---

# Код подтверждения

Код подтверждения принимает одноразовый код из сообщения или приложения и
показывает его по отдельным ячейкам. Под ячейками лежит одно нативное поле,
поэтому вставка, автозаполнение кода из сообщения, менеджеры паролей и
экранные дикторы работают с кодом целиком.

## Пример

:::example {id="components/verification/overview" label="Шестизначный код из сообщения"}
:::

## Разметка

Минимальную разметку показывает пример выше. Части вложены так:
`label.sf-verification-form` → подпись `sf-verification-form-label`,
`sf-verification` с `input.sf-verification-input` и подсказка
`sf-verification-form-hint`.

- Оболочка `sf-verification-form` с классом размера несёт настройки:
  `data-length` — число символов (по умолчанию 6, не больше 12),
  `data-mode` — какие символы принимает поле. Скрипт компонента находит коды
  по `.sf-verification-form`.
- `sf-verification` с тем же классом размера — рамка ячеек. Скрипт сам
  добавляет в неё ячейки `sf-verification-cell` и скрывает их от
  вспомогательных технологий.
- Одно `input.sf-verification-input` с `type="text"` хранит код целиком. Оно
  прозрачное и лежит поверх ячеек. Скрипт ставит ему `maxlength` по длине кода,
  `autocomplete="one-time-code"`, а для цифрового кода — `inputmode="numeric"`,
  если их нет.
- Подпись и подсказка необязательны, но без подписи полю нужен `aria-label`.

## Варианты

### Вид

Без модификатора ячейки отделены границей. `sf-verification--filled` на
`sf-verification` отделяет их тональной заливкой; пока фокус в поле, ячейки
получают фон поверхности и границу. Ячейка, в которую попадёт следующий символ,
выделена основным цветом в обоих видах.

:::example {id="components/verification/styles" label="Ячейки с границей и с заливкой"}
:::

### Размер

Три ступени — `sf-verification--size-1/2`, `sf-verification--size-1` и
`sf-verification--size-2` на рамке и такие же
`sf-verification-form--size-*` на оболочке. Размер меняет ячейки и текст в
них; берите ступень полей той же формы.

:::example {id="components/verification/sizes" label="Размеры кода"}
:::

### Символы

`data-mode="numeric"` (по умолчанию) оставляет только цифры,
`data-mode="alphanumeric"` — латинские буквы и цифры, любое другое значение —
все символы, кроме пробелов. Лишнее скрипт убирает при вводе и вставке.

:::example {id="components/verification/modes" label="Цифры, буквы и цифры, любые символы"}
:::

### Длина

`data-length` задаёт число ячеек и предел ввода. Без него длина берётся из
`maxlength` поля, а без обоих — шесть символов.

:::example {id="components/verification/length" label="Код из четырёх и из шести символов"}
:::

## Состояния

Недоступность и фокус задаёт нативное поле, ошибку — класс на оболочке.
Наведение компонент показывает сам.

### Ошибка

Класс `error` на оболочке окрашивает ячейки и подсказку цветом ошибки.
Подсказку с текстом ошибки свяжите с полем через `aria-describedby`, поле
получает `aria-invalid="true"`. Как только человек начинает вводить код
заново, скрипт снимает и класс, и `aria-invalid`.

:::example {id="components/verification/state-error" label="Неверный код"}
:::

### Недоступно

Нативный `disabled` на поле приглушает ячейки; поле не получает фокус и не
отправляется с формой.

:::example {id="components/verification/state-disabled" label="Недоступный код"}
:::

### Фокус

Когда поле в фокусе, рамка ячеек получает кольцо фокуса. В примере фокус
показан классом `focus-visible` на поле, который CSS компонента читает наравне
с `:focus-visible`.

:::example {id="components/verification/state-focus" label="Код в фокусе"}
:::

## Доступность

- Код вводится в одно поле: экранный диктор читает его целиком, а не по
  ячейкам. Ячейки скрыты от вспомогательных технологий.
- `autocomplete="one-time-code"` позволяет телефону подставить код из
  сообщения; вставка из буфера тоже кладёт код целиком.
- Цифры кода всегда идут слева направо, в том числе при письме справа налево.
- Подсказка говорит, сколько символов ввести и где взять код; ошибку
  сообщайте текстом.
- В режиме принудительных цветов ячейки и кольцо фокуса рисуются системными
  цветами.

## JavaScript

Когда введён последний символ, на оболочке возникает всплывающее событие
`verification:complete`; `detail.value` — введённый код. Форму компонент не
отправляет: это решает приложение.

```js
document.addEventListener('verification:complete', (event) => {
  checkCode(event.detail.value);
});
```

`SF.Verification` даёт три функции; `target` — оболочка или любой элемент
внутри неё:

| Функция | Что делает |
|:---|:---|
| `SF.Verification.getValue(target)` | возвращает введённый код, очищенный по `data-mode` |
| `SF.Verification.setValue(target, value)` | записывает код, перерисовывает ячейки и возвращает `true`; на полный код создаёт `verification:complete` |
| `SF.Verification.initAll(root)` | подключает коды внутри `root`; новые коды на странице скрипт подключает сам |

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-verification` |
| Части | `sf-verification-cell`, `sf-verification-cells`, `sf-verification-form`, `sf-verification-form--filled`, `sf-verification-form--size-1`, `sf-verification-form--size-1/2`, `sf-verification-form--size-2`, `sf-verification-form-hint`, `sf-verification-form-label`, `sf-verification-form-wrap`, `sf-verification-input` |
| Модификаторы | `sf-verification--filled` |
| Размеры | `sf-verification--size-1`, `sf-verification--size-1/2`, `sf-verification--size-2` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения. Чтобы изменить вид, задайте переменную на элементе или в своём слое для всего проекта — CSS компонента менять не нужно. Значение по умолчанию — из базового правила блока (`.sf-verification`); переменную без него задают только модификаторы. Какие переменные публичный контракт, а какие служебные, Framework ещё уточняет.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-verification--border-width` | `var(--sf-px)` | `border` |
| `--sf-verification--cell-size` | `var(--sf-title-height-6)` | `width`, `inline-size`, `height`, `block-size` |
| `--sf-verification--font-size` | не задана; задают модификаторы, например `.sf-verification--size-1/2`: `var(--sf-text-size-1/2)` | `font-size` |
| `--sf-verification--gap` | `var(--sf-space-1/3)` | `gap` |
| `--sf-verification--line-height` | не задана; задают модификаторы, например `.sf-verification--size-1/2`: `var(--sf-text-height-1/2)` | `line-height` |
| `--sf-verification--radius` | `var(--sf-radius--ui)` | `border-radius` |

## См. также

- [Текстовые поля](/ru/components/forms/inputs/)
