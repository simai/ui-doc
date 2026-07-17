# Кнопки

Компонент `buttons` задаёт базовое оформление кнопок действий. Он объединяет семантический HTML-элемент `<button>`, визуальные варианты, размеры, иконки и стандартные состояния интерфейса.

Используйте кнопку для действий, которые пользователь выполняет явно: сохранить, отправить, открыть, подтвердить, отменить или перейти к следующему шагу.

## Когда использовать

- Для основного или вторичного действия на странице.
- Для команд в формах, карточках, тулбарах и модальных окнах.
- Когда действие должно иметь управляемые состояния `disabled`, `loading` или `focus`.
- Когда рядом с текстом нужна иконка, уточняющая смысл действия.

## Когда не использовать

- Для обычной навигационной ссылки, если действие не запускает команду.
- Для выбора одного варианта из набора. В таких случаях используйте `radio-button`, `toggle` или `switch`.
- Для компактного действия без текста, если достаточно `icon-buttons`.

## Подключение

Минимальная кнопка строится на классе `sf-button`. Для предсказуемого поведения внутри форм указывайте `type="button"`, если кнопка не должна отправлять форму.

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <span class="sf-button-text-container">Сохранить</span>
</button>
```

Кнопка с иконками:

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <i class="sf-icon">chevron_left</i>
  <span class="sf-button-text-container">Назад</span>
</button>
```

## Варианты

### Filled

Используйте filled-кнопки для главного действия в текущем контексте. Обычно это сохранение, подтверждение или переход к следующему шагу.

Классы: `sf-button--default sf-button--primary` или `sf-button--default sf-button--on-surface`.

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <span class="sf-button-text-container">Сохранить</span>
</button>
```

### Tonal

Tonal-вариант подходит для вторичных действий, которые должны быть заметны, но не конкурировать с главным CTA.

Классы: `sf-button--tonal sf-button--secondary` или `sf-button--tonal sf-button--on-surface`.

```html
<button
  type="button"
  class="sf-button sf-button--tonal sf-button--secondary sf-button--size-1">
  <span class="sf-button-text-container">Черновик</span>
</button>
```

### Outline

Outline-вариант используйте для действий средней важности: отмена, дополнительный переход, открытие настроек.

Классы: `sf-button--outline sf-button--primary` или `sf-button--outline sf-button--on-surface`.

```html
<button
  type="button"
  class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1">
  <span class="sf-button-text-container">Отмена</span>
</button>
```

### Link

Link-вариант выглядит как текстовое действие. Он полезен в плотных интерфейсах, где обычная кнопка визуально слишком тяжёлая.

Классы: `sf-button--link sf-button--primary` или `sf-button--link sf-button--on-surface`.

```html
<button
  type="button"
  class="sf-button sf-button--link sf-button--primary sf-button--size-1">
  <span class="sf-button-text-container">Подробнее</span>
</button>
```

## Параметры

### Базовый класс

Тип: класс  
Имя: `sf-button`

Обязательный класс для всех кнопок. Без него не применяются базовые размеры, отступы, цвета и состояния.

### Размер

Тип: класс  
Имя: `sf-button--size-*`  
Значения: `1/3`, `1/2`, `1`, `2`, `3`

Размер управляет отступами, высотой текста и размером иконок. Для большинства интерфейсов используйте `sf-button--size-1`; меньшие размеры подходят для плотных панелей, большие — для акцентных действий.

### Тип

Тип: класс  
Имена: `sf-button--default`, `sf-button--tonal`, `sf-button--outline`, `sf-button--link`

Тип определяет визуальную форму кнопки: заливка, мягкий фон, контур или текстовое действие.

### Схема

Тип: класс  
Имена: `sf-button--primary`, `sf-button--secondary`, `sf-button--on-surface`

Схема задаёт цветовую роль. `primary` используйте для ключевых действий, `secondary` — для вспомогательных, `on-surface` — для нейтральных действий на поверхности.

### Плотность

Тип: класс  
Имя: `tightness-*`  
Значения: `low`, `high`, `highest`

Плотность меняет вертикальные отступы без изменения смыслового размера кнопки. Используйте её локально, когда кнопку нужно вписать в более плотный или более свободный блок.

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="http://localhost:5173/embed.html?component=buttons&group=tightness"></iframe>
</div>

### Радиус

Тип: класс  
Имя: `radius-*`

Радиус переопределяет скругление кнопки через общие utility-классы радиуса. Используйте его только если локальный UI-паттерн требует отличаться от стандартного радиуса компонента.

### Отключение

Тип: атрибут  
Имя: `disabled`

Нативно отключает кнопку, убирает её из активного взаимодействия и включает disabled-оформление.

```html
<button
  type="button"
  disabled
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <span class="sf-button-text-container">Недоступно</span>
</button>
```

### Загрузка

Тип: класс  
Имя: `loading`

Показывает, что действие выполняется. Для доступности добавляйте `aria-busy="true"`. Если повторный запуск недопустим, дополнительно используйте `disabled`.

### Иконка

Тип: элемент с классом  
Имя: `sf-icon`

Иконку можно поставить до или после текста. Не используйте иконку как единственный доступный текст; для кнопок без видимой подписи нужен `aria-label`.

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <i class="sf-icon">add</i>
  <span class="sf-button-text-container">Добавить</span>
</button>
```

### Текст

Тип: элемент с классом  
Имя: `sf-button-text-container`

Контейнер текста нужен для корректных отступов, типографики и цвета текста внутри кнопки.

## CSS-переменные

| Переменная                                                              | Назначение                 |
| :---------------------------------------------------------------------- | :------------------------- |
| `--sf-button--background-color`                                         | Цвет фона кнопки.          |
| `--sf-button--border-color`                                             | Цвет границы.              |
| `--sf-button--border-width`                                             | Толщина границы.           |
| `--sf-button--border-style`                                             | Стиль границы.             |
| `--sf-button--box-shadow`                                               | Тень и фокусное кольцо.    |
| `--sf-button--padding-top` / `--sf-button--padding-bottom`              | Вертикальные отступы.      |
| `--sf-button--padding-inline-start` / `--sf-button--padding-inline-end` | Горизонтальные отступы.    |
| `--sf-button-text-container--color`                                     | Цвет текста.               |
| `--sf-button-text-container--font-size`                                 | Размер текста.             |
| `--sf-button-text-container--line-height`                               | Высота строки.             |
| `--sf-icon--color`                                                      | Цвет иконки внутри кнопки. |
| `--sf-icon--font-size`                                                  | Размер иконки.             |

{.table}

## Состояния

- `focus` добавляет стандартный фокус через `--sf-ui-focus`.
- `disabled` отключает кнопку и переводит текст и иконки в disabled-цвета.
- `loading` используется для визуального состояния выполнения действия.
- `hover` и активные состояния наследуют визуальную схему выбранного варианта.

Для состояния загрузки в программном создании также используется `aria-busy="true"`. Если вы пишете HTML вручную, добавляйте `aria-busy="true"` при длительном действии.

## Примеры

Основное действие:

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <span class="sf-button-text-container">Сохранить</span>
</button>
```

Вторичное действие:

```html
<button
  type="button"
  class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1">
  <span class="sf-button-text-container">Отмена</span>
</button>
```

Состояние загрузки:

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1 loading"
  aria-busy="true">
  <span class="sf-button-text-container">Сохранение</span>
</button>
```

## Playground

<div class="sf-playground overflow-hidden border border-surface-overlay">
<iframe src="https://play.simai.io/embed.html?component=buttons&group=buttons"></iframe>
</div>

## Доступность

- Используйте нативный `<button>` для действий, а `<a>` для переходов.
- Всегда задавайте понятный текст действия.
- Не убирайте видимый фокус.
- Для кнопок с одной иконкой используйте текстовую подпись через `aria-label`.
- Для длительных операций добавляйте `aria-busy="true"` и блокируйте повторное нажатие через `disabled`, если повторный запуск недопустим.

## Связанные компоненты

- `icon-buttons`
- `dropdown`
- `modal`
- `toggle`
