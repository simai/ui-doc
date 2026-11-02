:::hero {layout=split padding=2xl media=none effect="assembly" effect_theme=auto effect_settings='{"intensity": 55, "shapes": "interface", "interactive": false}'}
# Интерфейс из готовых деталей

Компоненты и смарт-компоненты с CDN — без npm и сборки.

[Начать за 5 минут](/ru/guide/introduction/quick-start/)

[Компоненты](/ru/components/)
:::

## Что можно собрать

### Админка

Меню разделов, список с поиском и фильтром, карточка записи. Откройте запись,
отфильтруйте список, поменяйте ширину колонок.

:::internal_preview {size=tall title="Административный интерфейс"}
[Открыть демонстрацию](/demos/home/admin/)
:::

[Открыть на отдельной странице](/demos/home/admin/)

### Чат

Список разговоров, лента сообщений и поле ввода с вложениями.

:::example {id="smart-components/chat-window/embedded" label="Чат" preview=sandbox}
:::

[Подробнее о чате](/ru/pro/chat/)

### Редактор

Страница из блоков: текст, заголовки, списки и заметки. Попробуйте писать прямо в примере.

:::example {id="home/editor" label="Редактор"}
:::

[Подробнее о редакторе](/ru/pro/editor/content-editor/)

Админка, чат и редактор — компоненты [SIMAI Pro](/ru/pro/) с отдельной
лицензией; остальное в SIMAI Framework открыто под Apache-2.0.

## Три шага

1. Подключите стили и скрипт с CDN.
2. Напишите классы или тег компонента.
3. Откройте страницу — загрузчик сам подгрузит то, что на ней есть.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261102.1106/distr/core/css/core.min.css">
<script>window.sfPath = 'https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261102.1106/distr/';</script>
<script src="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261102.1106/distr/core/js/core.min.js"></script>

<sf-button text="Сохранить"></sf-button>
```

[Быстрый старт: полная страница и проверка подключения](/ru/guide/introduction/quick-start/)

## Найдите свою задачу

:::features
- **[Подключение](/ru/guide/connection/project-setup/)** С CDN или из своих файлов.
- **[Компоненты](/ru/components/)** Кнопки, поля, карточки на классах.
- **[Смарт-компоненты](/ru/smart/)** Теги с поведением: таблица, меню, формы.
- **[Макеты](/ru/guide/layouts/)** Страница из секций и блоков.
:::

:::features
- **[Темы](/ru/guide/colour/themes/)** Светлая, тёмная и своя тема из одного цвета.
- **[Обновление](/ru/guide/connection/updating/)** Закреплённый выпуск и журнал изменений.
- **[Фоновые эффекты](https://effects.simai.io/)** Живые фоны для первых экранов.
- **[Работа с ИИ](/ru/guide/standards/ai/)** Индекс `ai.json` и текстовая версия каждой страницы.
:::

---

**SIMAI Framework** · выпуск `ui-2d39b617a719` ·
[GitHub](https://github.com/simai/ui-source) ·
[Сообщить о проблеме](https://github.com/simai/ui-source/issues) ·
[Версии](/ru/guide/connection/versions/) ·
[Apache-2.0](https://github.com/simai/ui-source/blob/main/LICENSE)
