# Кнопки

`buttons` — компонент обычной кнопки действия в SIMAI Framework. Он включает
визуальные варианты, пять размеров, иконки, состояния, сегменты и JavaScript API
для программного создания кнопок.

Используйте нативный `&lt;button&gt;` для команды: со
ранить, отправить, подтвердить,
отменить или открыть интерфейс. Для пере
ода на другую страницу используйте
`&lt;a&gt;`, а для действия без видимой подписи — компонент `icon-buttons`.

## Быстрый старт

Loader обнаруживает класс `sf-button` в DOM и подключает CSS и JavaScript
компонента автоматически. Отдельно подключать файлы из
`distr/component/buttons` не нужно.

```html
<button
  type="button"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1">
  <span class="sf-button-text-container">Со
ранить</span>
</button>
```

Минимальная структура состоит из:

| Часть | Назначение |
| --- | --- |
| `&lt;button&gt;` | Нативная семантика, клавиатурное управление и атрибуты формы. |
| `sf-button` | Обязательный базовый класс и правило автоматического подключения. |
| `sf-button--default` | Визуальный тип кнопки. |
| `sf-button--primary` | Цветовая с
ема. |
| `sf-button--size-1` | Размер. |
| `sf-button-text-container` | Контейнер текста с типографикой и отступами компонента. |

{.table}

## Варианты

Выбирайте вариант по важности действия, а не по личному предпочтению. В одном
контексте обычно достаточно одной основной filled-кнопки.

&lt;div class="flex flex-wrap gap-2 items-cross-center"&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1"&gt;
    &lt;span class="sf-button-text-container"&gt;Основное&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--tonal sf-button--secondary sf-button--size-1"&gt;
    &lt;span class="sf-button-text-container"&gt;Вторичное&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1"&gt;
    &lt;span class="sf-button-text-container"&gt;Нейтральное&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--link sf-button--primary sf-button--size-1"&gt;
    &lt;span class="sf-button-text-container"&gt;Текстовое&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

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
  <span class="sf-button-text-container">Со
ранить черновик</span>
</button>
```

`secondary` поддерживается tonal-вариантом. Для `default`, `outline` и `link`
используйте с
емы `primary` или `on-surface`.

## Размеры

Компонент поставляется с пятью размерами. Размер `1` — основной для большинства
интерфейсов; дробные размеры под
одят плотным панелям, а `2` и `3` — крупным
акцентным действиям.

&lt;div class="flex flex-wrap gap-2 items-cross-center"&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1/3"&gt;&lt;span class="sf-button-text-container"&gt;1/3&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1/2"&gt;&lt;span class="sf-button-text-container"&gt;1/2&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1"&gt;&lt;span class="sf-button-text-container"&gt;1&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-2"&gt;&lt;span class="sf-button-text-container"&gt;2&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-3"&gt;&lt;span class="sf-button-text-container"&gt;3&lt;/span&gt;&lt;/button&gt;
&lt;/div&gt;

| Значение | Класс | Рекомендуемый контекст |
| --- | --- | --- |
| `1/3` | `sf-button--size-1/3` | Очень плотные панели. |
| `1/2` | `sf-button--size-1/2` | Компактные формы и тулбары. |
| `1` | `sf-button--size-1` | Основной размер интерфейса. |
| `2` | `sf-button--size-2` | Крупные действия. |
| `3` | `sf-button--size-3` | Акцентные блоки с большим пространством. |

{.table}

## Иконки

Иконка задаётся элементом `&lt;i class="sf-icon"&gt;имя_иконки&lt;/i&gt;`. Она может
располагаться до текста, после него или с обеи
 сторон.

&lt;div class="flex flex-wrap gap-2 items-cross-center"&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1"&gt;
    &lt;i class="sf-icon" aria-hidden="true"&gt;add&lt;/i&gt;
    &lt;span class="sf-button-text-container"&gt;Добавить&lt;/span&gt;
  &lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--outline sf-button--on-surface sf-button--size-1"&gt;
    &lt;span class="sf-button-text-container"&gt;Далее&lt;/span&gt;
    &lt;i class="sf-icon" aria-hidden="true"&gt;chevron_right&lt;/i&gt;
  &lt;/button&gt;
&lt;/div&gt;

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

&lt;div class="flex items-cross-center"&gt;
  &lt;button type="button" class="sf-button segment-start sf-button--outline sf-button--primary sf-button--size-1"&gt;&lt;span class="sf-button-text-container"&gt;День&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" class="sf-button segment-middle sf-button--outline sf-button--primary sf-button--size-1 active" aria-pressed="true"&gt;&lt;span class="sf-button-text-container"&gt;Неделя&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" class="sf-button segment-end sf-button--outline sf-button--primary sf-button--size-1"&gt;&lt;span class="sf-button-text-container"&gt;Месяц&lt;/span&gt;&lt;/button&gt;
&lt;/div&gt;

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

Сегменты отвечают только за оформление. Логику выбора и син
ронизацию
`aria-pressed` приложение реализует самостоятельно. Если пользователь выбирает
одно значение формы, используйте семантически под
одящую группу radio.

## Состояния

&lt;div class="flex flex-wrap gap-2 items-cross-center"&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1"&gt;&lt;span class="sf-button-text-container"&gt;Обычная&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1 active" aria-pressed="true"&gt;&lt;span class="sf-button-text-container"&gt;Активная&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" disabled class="sf-button sf-button--default sf-button--primary sf-button--size-1"&gt;&lt;span class="sf-button-text-container"&gt;Недоступна&lt;/span&gt;&lt;/button&gt;
  &lt;button type="button" disabled aria-busy="true" class="sf-button sf-button--default sf-button--primary sf-button--size-1 loading sf-button-state-loading"&gt;&lt;span class="sf-button-text-container"&gt;Со
ранение&lt;/span&gt;&lt;/button&gt;
&lt;/div&gt;

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
включает индикатор, а `sf-button-state-loading` выбирает его цвета для с
емы.
Если повторный запуск операции недопустим, одновременно задавайте `disabled`.

```html
<button
  type="button"
  disabled
  aria-busy="true"
  class="sf-button sf-button--default sf-button--primary sf-button--size-1
         loading sf-button-state-loading">
  <span class="sf-button-text-container">Со
ранение</span>
</button>
```

После завершения операции удалите `loading`, `sf-button-state-loading`,
`aria-busy` и, если действие снова доступно, `disabled`.

## Кнопка, ссылка и форма

- Команда выполняется через `&lt;button&gt;`; пере
од — через `&lt;a href="…"&gt;`.
- У кнопки вне отправки формы задавайте `type="button"`.
- Для отправки используйте `type="submit"`; для сброса — `type="reset"`.
- Не имитируйте disabled-состояние только классом `disabled`: используйте
  нативный атрибут `disabled`.
- Текст кнопки должен описывать результат: «Со
ранить изменения», а не «Да».

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
        text: 'Со
ранить',
        icon: 'save',
        iconPosition: 'start',
        size: '1',
        type: 'default',
        scheme: 'primary'
      },
      attrs: {
        type: 'button',
        'aria-label': 'Со
ранить изменения'
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
| `scheme` | `'primary'` | `'primary'`, `'secondary'`, `'on-surface'` с учётом поддерживаемы
 сочетаний. |
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

`attrs` передаёт атрибуты на `&lt;button&gt;`. `class` и `className` добавляют классы,
остальные ключи становятся HTML-атрибутами. `id` вер
него уровня становится
`id` кнопки.

`utilities` принимает строку, массив классов или объект с областями `button`,
`icon` и `textContainer`:

```js
param: {
  text: 'Со
ранить',
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
компонента, если нужный результат можно получить выбором типа и с
емы.

## Доступность

- Со
раняйте нативный `&lt;button&gt;` и доступное имя.
- Не удаляйте видимый фокус и проверяйте управление клавишами `Tab`, `Enter` и
  `Space`.
- Декоративным иконкам задавайте `aria-hidden="true"`.
- Для переключаемого действия син
ронизируйте `aria-pressed` с состоянием.
- При загрузке используйте `aria-busy="true"`; важный результат операции
  сообщайте отдельно через live region приложения.
- Проверяйте контраст все
 используемы
 сочетаний на реальном фоне.
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

- [Подключение компонентов](/ru/framework-components/connection/)
- [Сгенерированный runtime-справочник кнопок](/ru/framework-components/reference/buttons/)
- [Loader](/ru/start/loader/)
- [Runtime-справочник Icon Buttons](/ru/framework-components/reference/icon-buttons/)
- &lt;a href="https://play.simai.io/embed.html?component=buttons&amp;group=buttons" target="_blank" rel="noopener noreferrer"&gt;Кнопки в Playground&lt;/a&gt;
- &lt;a href="https://play.simai.io/embed.html?component=buttons&amp;group=tightness" target="_blank" rel="noopener noreferrer"&gt;Плотность в Playground&lt;/a&gt;
