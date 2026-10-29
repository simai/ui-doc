---
title: "Акцентная иконка"
description: "Выделяет тему карточки, статуса или пустого состояния иконкой на цветной подложке."
profile: reference
---

# Акцентная иконка

Акцентная иконка ставит [иконку](/ru/components/content/icons/) на цветную
подложку и выделяет тему карточки, раздела, статуса или пустого состояния.
Берите её, когда иконка открывает блок содержимого; иконка внутри строки
текста или кнопки подложки не требует.

## Пример

:::example {id="components/featured-icon/overview" label="Акцентная иконка у заголовка карточки"}
:::

## Разметка

Минимальную разметку показывает пример выше: `<span class="sf-featured-icon">`
с иконкой `<i class="sf-icon">` внутри.

- Без модификаторов подложка круглая, мягкого тона, основного цвета и
  размера `1`; модификаторы меняют каждую ось отдельно.
- Размер и цвет иконки задаёт подложка: классы размера на `sf-icon` не
  нужны.

## Варианты

### Интенсивность

`sf-featured-icon--soft` — мягкий тон по умолчанию, для большинства карточек;
`sf-featured-icon--medium` — тон насыщеннее; `sf-featured-icon--solid` —
полная заливка цветом роли, для одного главного акцента;
`sf-featured-icon--elevated` — нейтральная подложка с тенью и иконкой цвета
роли. Имена `light`, `mid`, `dark` и `modern` работают так же, как `soft`,
`medium`, `solid` и `elevated`; в разметке пишите вторые.

:::example {id="components/featured-icon/tones" label="Интенсивность акцентной иконки"}
:::

### Цвет

Цвет задаёт роль: `primary` — тема продукта, `neutral` — нейтральный
раздел, `info`, `success`, `warning` и `error` — статусы. Имя `clear`
работает так же, как `neutral`.

:::example {id="components/featured-icon/colors" label="Цвета акцентной иконки"}
:::

### Форма

`sf-featured-icon--circle` — круг, форма по умолчанию.
`sf-featured-icon--square` скругляет углы радиусом, согласованным с
размером, и подходит карточкам с прямыми углами.

:::example {id="components/featured-icon/shapes" label="Круглая и квадратная подложка"}
:::

### Размер

Размеры `1/3`, `1/2`, `1`, `2` и `3` согласованно меняют отступ подложки,
иконку и радиус квадратной формы. Берите ступень заголовка, рядом с которым
стоит иконка.

:::example {id="components/featured-icon/sizes" label="Размеры акцентной иконки"}
:::

## Доступность

- Если смысл передаёт соседний текст, скройте подложку целиком:
  `aria-hidden="true"`.
- Самостоятельная значимая иконка получает `role="img"` и короткое имя
  через `aria-label`; сама `sf-icon` внутри остаётся скрытой.
- Статус не передавайте только цветом: подпись или текст рядом обязательны.
- В режиме высокой контрастности подложка становится системным фоном с
  рамкой цвета текста.

:::example {id="components/featured-icon/accessibility" label="Декоративная и значимая акцентная иконка"}
:::

## Классы

| Что | Классы |
|:---|:---|
| Блок | `sf-featured-icon` |
| Модификаторы | `sf-featured-icon--circle`, `sf-featured-icon--clear`, `sf-featured-icon--dark`, `sf-featured-icon--elevated`, `sf-featured-icon--error`, `sf-featured-icon--info`, `sf-featured-icon--light`, `sf-featured-icon--medium`, `sf-featured-icon--mid`, `sf-featured-icon--modern`, `sf-featured-icon--neutral`, `sf-featured-icon--primary`, `sf-featured-icon--soft`, `sf-featured-icon--solid`, `sf-featured-icon--square`, `sf-featured-icon--success`, `sf-featured-icon--warning` |
| Размеры | `sf-featured-icon--size-1`, `sf-featured-icon--size-1/2`, `sf-featured-icon--size-1/3`, `sf-featured-icon--size-2`, `sf-featured-icon--size-3` |

Классы и переменные собраны из CSS выпуска и обновляются вместе с ним.

## Переменные

Компонент читает свои переменные, а модификаторы задают им значения; таблица показывает, из чего складывается вид. Переменные компонента — его внутренняя проводка, а не поверхность настройки: их имена и устройство могут меняться. Вид проекта меняют общие токены, а глубокий вид смарт-компонента — его шаблон (см. [Переменные компонента](/ru/guide/components/what-is/#переменные-компонента)). Значение по умолчанию — из базового правила блока (`.sf-featured-icon`); переменную без него задают только модификаторы.

| Переменная | По умолчанию | Задаёт |
|:---|:---|:---|
| `--sf-featured-icon--background-color` | `var(--sf-featured-icon--container)` | `background-color` |
| `--sf-featured-icon--box-shadow` | `none` | `box-shadow` |
| `--sf-featured-icon--container` | `var(--sf-primary-container)` | `--sf-featured-icon--background-color`, `border` |
| `--sf-featured-icon--container-strong` | `var(--sf-primary-container-hover)` | `--sf-featured-icon--background-color` |
| `--sf-featured-icon--foreground-color` | `var(--sf-featured-icon--on-container)` | `--sf-icon--color` |
| `--sf-featured-icon--icon-size` | `var(--sf-text-height-1)` | `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width` |
| `--sf-featured-icon--on-container` | `var(--sf-on-primary-container)` | `--sf-featured-icon--foreground-color` |
| `--sf-featured-icon--on-tone` | `var(--sf-on-primary)` | `--sf-featured-icon--foreground-color` |
| `--sf-featured-icon--padding` | `var(--sf-ui-1--space-y-tightness-default)` | `padding` |
| `--sf-featured-icon--radius` | `var(--sf-radius-circle)` | `border-radius` |
| `--sf-featured-icon--square-radius` | `var(--sf-radius-1)` | `--sf-featured-icon--radius` |
| `--sf-featured-icon--tone` | `var(--sf-primary)` | `--sf-featured-icon--background-color`, `--sf-featured-icon--foreground-color` |

## См. также

- [Иконки](/ru/components/content/icons/)
