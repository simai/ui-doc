# Кнопки

`buttons` — компонент обычной кнопки действия в SIMAI Framework. Он включает
визуальные варианты, пять размеров, иконки, состояния, сегменты и JavaScript API
для программного создания кнопок.

Используйте нативный `<button>` для команды: сохранить, отправить, подтвердить,
отменить или открыть интерфейс. Для перехода на другую страницу используйте
`<a>`, а для действия без видимой подписи — компонент `icon-buttons`.

## Быстрый старт

Loader обнаруживает класс `sf-button` в DOM и подключает CSS и JavaScript
компонента автоматически. Отдельно подключать файлы из
`distr/component/buttons` не нужно.

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <span class="sf-button-text-container">Сохранить</span>
</button>
```

Минимальная структура состоит из:

| Часть | Назначение |
| --- | --- |
| `<button>` | Нативная семантика, клавиатурное управление и атрибуты формы. |
| `sf-button` | Обязательный базовый класс и правило автоматического подключения. |
| `sf-button--default` | Визуальный тип кнопки. |
| `sf-button--primary` | Цветовая схема. |
| `sf-button--size-1` | Размер. |
| `sf-button-text-container` | Контейнер текста с типографикой и отступами компонента. |

{.table}

## Варианты

Выбирайте вариант по важности действия, а не по личному предпочтению. В одном
контексте обычно достаточно одной основной filled-кнопки.

<div class="flex flex-wrap gap-2 items-cross-center">
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1">
    <span class="sf-button-text-container">Основное</span>
  </button>
  <button type="button" class="sf-button sf-button--tonal sf-button--secondary sf-button--size-1">
    <span class="sf-button-text-container">Вторичное</span>
  </button>
  <button type="button" class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1">
    <span class="sf-button-text-container">Нейтральное</span>
  </button>
  <button type="button" class="sf-button sf-button--link sf-button--primary sf-button--size-1">
    <span class="sf-button-text-container">Текстовое</span>
  </button>
</div>

| Вариант | Классы | Когда использовать |
| --- | --- | --- |
| Filled | `sf-button--default sf-button--primary` | Главное действие текущего экрана или блока. |
| Filled neutral | `sf-button--default sf-button--on-surface` | Сильное нейтральное действие. |
| Tonal | `sf-button--tonal sf-button--secondary` | Заметное вторичное действие. |
| Tonal neutral | `sf-button--tonal sf-button--on-surface` | Вторичное действие без цветового акцента. |
| Outline | `sf-button--outline sf-button--primary` или `sf-button--outline sf-button--on-surface` | Действие средней важности, например отмена. |
| Link | `sf-button--link sf-button--primary` или `sf-button--link sf-button--on-surface` | Компактное действие с минимальным визуальным весом. |

{.table}

```html
<button type="button"
  class="sf-button sf-button--tonal sf-button--secondary sf-button--size-1">
  <span class="sf-button-text-container">Сохранить черновик</span>
</button>
```

`secondary` поддерживается tonal-вариантом. Для `default`, `outline` и `link`
используйте схемы `primary` или `on-surface`.

## Размеры

Компонент поставляется с пятью размерами. Размер `1` — основной для большинства
интерфейсов; дробные размеры подходят плотным панелям, а `2` и `3` — крупным
акцентным действиям.

<div class="flex flex-wrap gap-2 items-cross-center">
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1/3"><span class="sf-button-text-container">1/3</span></button>
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1/2"><span class="sf-button-text-container">1/2</span></button>
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1"><span class="sf-button-text-container">1</span></button>
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-2"><span class="sf-button-text-container">2</span></button>
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-3"><span class="sf-button-text-container">3</span></button>
</div>

| Значение | Класс | Рекомендуемый контекст |
| --- | --- | --- |
| `1/3` | `sf-button--size-1/3` | Очень плотные панели. |
| `1/2` | `sf-button--size-1/2` | Компактные формы и тулбары. |
| `1` | `sf-button--size-1` | Основной размер интерфейса. |
| `2` | `sf-button--size-2` | Крупные действия. |
| `3` | `sf-button--size-3` | Акцентные блоки с большим пространством. |

{.table}

## Иконки

Иконка задаётся элементом `<i class="sf-icon">имя_иконки</i>`. Она может
располагаться до текста, после него или с обеих сторон.

<div class="flex flex-wrap gap-2 items-cross-center">
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1">
    <i class="sf-icon" aria-hidden="true">add</i>
    <span class="sf-button-text-container">Добавить</span>
  </button>
  <button type="button" class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1">
    <span class="sf-button-text-container">Далее</span>
    <i class="sf-icon" aria-hidden="true">chevron_right</i>
  </button>
</div>

```html
<button type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <i class="sf-icon" aria-hidden="true">add</i>
  <span class="sf-button-text-container">Добавить</span>
</button>
```

Декоративную иконку скрывайте от скринридера через `aria-hidden="true"`.
Кнопке только с иконкой требуется доступное имя через `aria-label`, но для
такого сценария предпочтителен специализированный `icon-buttons`.

## Плотность и радиус

Плотность меняет внутренние вертикальные отступы без смены смыслового размера:
`tightness-low`, `tightness-high` и `tightness-highest`. Без модификатора
используется стандартная плотность.

Радиус можно изменить классами `radius-default`, `radius-square` и
`radius-rounded`. Не переопределяйте радиус без требования дизайн-системы.

```html
<button type="button"
  class="sf-button sf-button--outline sf-button--primary sf-button--size-1
         tightness-high radius-rounded">
  <span class="sf-button-text-container">Компактная кнопка</span>
</button>
```

## Сегментированные кнопки

Для визуально связанной группы используйте `segment-start`, `segment-middle` и
`segment-end`. Модификаторы учитывают направление `ltr` и `rtl`; менять порядок
скруглений вручную не нужно.

<div class="flex items-cross-center">
  <button type="button" class="sf-button segment-start sf-button--outline sf-button--primary sf-button--size-1"><span class="sf-button-text-container">День</span></button>
  <button type="button" class="sf-button segment-middle sf-button--outline sf-button--primary sf-button--size-1 active" aria-pressed="true"><span class="sf-button-text-container">Неделя</span></button>
  <button type="button" class="sf-button segment-end sf-button--outline sf-button--primary sf-button--size-1"><span class="sf-button-text-container">Месяц</span></button>
</div>

```html
<div class="flex items-cross-center" role="group" aria-label="Период отчёта">
  <button type="button"
    class="sf-button segment-start sf-button--outline sf-button--primary sf-button--size-1">
    <span class="sf-button-text-container">День</span>
  </button>
  <button type="button" aria-pressed="true"
    class="sf-button segment-middle sf-button--outline sf-button--primary sf-button--size-1 active">
    <span class="sf-button-text-container">Неделя</span>
  </button>
  <button type="button"
    class="sf-button segment-end sf-button--outline sf-button--primary sf-button--size-1">
    <span class="sf-button-text-container">Месяц</span>
  </button>
</div>
```

Сегменты отвечают только за оформление. Логику выбора и синхронизацию
`aria-pressed` приложение реализует самостоятельно. Если пользователь выбирает
одно значение формы, используйте семантически подходящую группу radio.

## Состояния

<div class="flex flex-wrap gap-2 items-cross-center">
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1"><span class="sf-button-text-container">Обычная</span></button>
  <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1 active" aria-pressed="true"><span class="sf-button-text-container">Активная</span></button>
  <button type="button" disabled class="sf-button sf-button--default sf-button--primary sf-button--size-1"><span class="sf-button-text-container">Недоступна</span></button>
  <button type="button" disabled aria-busy="true" class="sf-button sf-button--default sf-button--primary sf-button--size-1 loading sf-button-state-loading"><span class="sf-button-text-container">Сохранение</span></button>
</div>

| Состояние | Как задаётся | Примечание |
| --- | --- | --- |
| Hover | `:hover` | Возникает при наведении поддерживаемого устройства. |
| Focus | `:focus` | Использует системный фокус `--sf-ui-focus`; не скрывайте его. |
| Pressed | `:active` | Действует во время нажатия. |
| Persistent active | класс `active` | Визуальное активное состояние; семантику задайте отдельно, например `aria-pressed`. |
| Disabled | нативный атрибут `disabled` | Отключает взаимодействие и применяет disabled-оформление. |
| Loading | классы `loading sf-button-state-loading` и `aria-busy="true"` | Показывает выполнение операции. |

{.table}

При ручной разметке состояния загрузки добавляйте оба класса. `loading`
включает индикатор, а `sf-button-state-loading` выбирает его цвета для схемы.
Если повторный запуск операции недопустим, одновременно задавайте `disabled`.

```html
<button
  type="button"
  disabled
  aria-busy="true"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1
         loading sf-button-state-loading">
  <span class="sf-button-text-container">Сохранение</span>
</button>
```

После завершения операции удалите `loading`, `sf-button-state-loading`,
`aria-busy` и, если действие снова доступно, `disabled`.

## Кнопка, ссылка и форма

- Команда выполняется через `<button>`; переход — через `<a href="…">`.
- У кнопки вне отправки формы задавайте `type="button"`.
- Для отправки используйте `type="submit"`; для сброса — `type="reset"`.
- Не имитируйте disabled-состояние только классом `disabled`: используйте
  нативный атрибут `disabled`.
- Текст кнопки должен описывать результат: «Сохранить изменения», а не «Да».

JavaScript-конструктор безопасно задаёт `type="button"`, если `type` не передан
через `attrs`. В ручной HTML-разметке это нужно сделать самостоятельно.

## Программное создание

Компонент регистрирует класс `Buttons` в `SF.Loader.ComponentRegistry`. Для
явного подключения добавьте `sf-asset="buttons"`, дождитесь класса через
`SF.Loader.ready()` и вставьте результат `render()` в DOM.

```html
<div sf-asset="buttons"></div>
<div id="save-button"></div>

<script>
  SF.Loader.ready('Buttons', (Buttons) => {
    const component = new Buttons({
      id: 'save-action',
      param: {
        text: 'Сохранить',
        icon: 'save',
        iconPosition: 'start',
        size: '1',
        type: 'default',
        scheme: 'primary'
      },
      attrs: {
        type: 'button',
        'aria-label': 'Сохранить изменения'
      }
    });

    document.querySelector('#save-button').append(component.render());
  });
</script>
```

Вызывайте этот код после инициализации Core. Если код выполняется раньше,
сначала дождитесь события `sf-loader-init`.

### Параметры `param`

| Параметр | По умолчанию | Допустимые значения / назначение |
| --- | --- | --- |
| `text` | `''` | Видимая подпись. |
| `size` | `'1'` | `'1/3'`, `'1/2'`, `'1'`, `'2'`, `'3'`. |
| `type` | `'default'` | `'default'`, `'tonal'`, `'outline'`, `'link'`. |
| `scheme` | `'primary'` | `'primary'`, `'secondary'`, `'on-surface'` с учётом поддерживаемых сочетаний. |
| `icon` | — | Имя одной иконки; позиция задаётся `iconPosition`. |
| `iconPosition` | `'start'` | `'start'` / `'left'` или `'end'` / `'right'`. |
| `iconLeft` | — | Иконка в начале; имеет приоритет над `icon`. |
| `iconRight` | — | Иконка в конце; имеет приоритет над `icon`. |
| `tightness` | — | `'low'`, `'high'`, `'highest'`. |
| `radius` | — | `'default'`, `'square'`, `'rounded'`. |
| `loading` | `false` | Добавляет оба loading-класса и `aria-busy="true"`. |
| `disabled` | `false` | Устанавливает нативное свойство `disabled`. |
| `utilities` | `{}` | Дополнительные utility-классы. |

{.table}

`attrs` передаёт атрибуты на `<button>`. `class` и `className` добавляют классы,
остальные ключи становятся HTML-атрибутами. `id` верхнего уровня становится
`id` кнопки.

`utilities` принимает строку, массив классов или объект с областями `button`,
`icon` и `textContainer`:

```js
param: {
  text: 'Сохранить',
  utilities: {
    button: ['w-full'],
    icon: ['shrink-0'],
    textContainer: ['text-center']
  }
}
```

Используйте только существующие utility-классы SIMAI Framework. Базовые flex-
классы для кнопки, иконки и текста компонент применяет сам.

### Жизненный цикл и события

| Событие | Момент | `event.detail` |
| --- | --- | --- |
| `Buttons:beforeRender` | Создание экземпляра до завершения разметки. | Экземпляр компонента. |
| `Buttons:render` | После вызова `render()`. | Экземпляр компонента. |
| `Buttons:destroy` | После вызова `destroy()`. | Экземпляр компонента. |

{.table}

`destroy()` удаляет созданный элемент из DOM и очищает внутренние ссылки.

```js
window.addEventListener('Buttons:render', (event) => {
  event.detail.html.addEventListener('click', saveChanges);
});
```

## CSS-переменные

Переопределяйте переменные на локальном контейнере или модификаторе, чтобы не
изменять все кнопки приложения.

| Группа | Переменные |
| --- | --- |
| Фон и граница | `--sf-button--background-color`, `--sf-button--border-color`, `--sf-button--border-width`, `--sf-button--border-style` |
| Форма | `--sf-button--border-top-left-radius`, `--sf-button--border-top-right-radius`, `--sf-button--border-bottom-left-radius`, `--sf-button--border-bottom-right-radius` |
| Отступы | `--sf-button--padding-top`, `--sf-button--padding-bottom`, `--sf-button--padding-inline-start`, `--sf-button--padding-inline-end` |
| Текст | `--sf-button-text-container--color`, `--sf-button-text-container--font-family`, `--sf-button-text-container--font-size`, `--sf-button-text-container--font-weight`, `--sf-button-text-container--line-height` |
| Иконка | `--sf-icon--color`, `--sf-icon--font-size` |
| Эффекты | `--sf-button--box-shadow`, `--sf-button-loading-stripe-1`, `--sf-button-loading-stripe-2` |

{.table}

```css
.checkout-action {
  --sf-button--padding-inline-start: var(--sf-space-3);
  --sf-button--padding-inline-end: var(--sf-space-3);
}
```

Цветовые роли и состояния уже определены темой. Не фиксируйте hex-цвета внутри
компонента, если нужный результат можно получить выбором типа и схемы.

## Доступность

- Сохраняйте нативный `<button>` и доступное имя.
- Не удаляйте видимый фокус и проверяйте управление клавишами `Tab`, `Enter` и
  `Space`.
- Декоративным иконкам задавайте `aria-hidden="true"`.
- Для переключаемого действия синхронизируйте `aria-pressed` с состоянием.
- При загрузке используйте `aria-busy="true"`; важный результат операции
  сообщайте отдельно через live region приложения.
- Проверяйте контраст всех используемых сочетаний на реальном фоне.
- Не используйте один цвет как единственный способ различить действия.

## Что проверить перед выпуском

1. Кнопка выполняет именно одно понятное действие.
2. В форме явно указан корректный `type`.
3. Есть состояния hover, focus, active, disabled и loading, если они нужны
   сценарию.
4. Повторное нажатие во время необратимой операции предотвращено.
5. Текст не обрезается при локализации и масштабировании до 200%.
6. Порядок и скругления сегментов корректны в `ltr` и `rtl`.
7. Кнопка доступна с клавиатуры и имеет понятное доступное имя.

## Дополнительные материалы

- [Подключение компонентов](/ru/components/connection/)
- [Сгенерированный runtime-справочник кнопок](/ru/components/reference/buttons/)
- [Loader](/ru/start/loader/)
- [Runtime-справочник Icon Buttons](/ru/components/reference/icon-buttons/)
- <a href="https://play.simai.io/embed.html?component=buttons&amp;group=buttons" target="_blank" rel="noopener noreferrer">Кнопки в Playground</a>
- <a href="https://play.simai.io/embed.html?component=buttons&amp;group=tightness" target="_blank" rel="noopener noreferrer">Плотность в Playground</a>
