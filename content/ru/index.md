:::hero {layout=split padding=2xl media=none effect="assembly" effect_theme=auto effect_settings='{"intensity": 55, "shapes": "interface", "interactive": false}'}
# Интерфейс из готовых деталей

Компоненты и смарт-компоненты с CDN — без npm и сборки.

[Начать за 5 минут](/ru/guide/introduction/quick-start/)

[Компоненты](/ru/components/)
:::

## Что можно собрать

Админка, чат и редактор — живые, в них можно нажимать и печатать. Вкладка
загружается, когда вы её открываете.

:::internal_preview {size=tall title="Админка, чат и редактор"}
[Открыть демонстрацию](/demos/home/showcase/)
:::

[Админка на отдельной странице](/demos/home/admin/). Админка, чат и
редактор — это наборы компонентов под лицензией Pro, они перечислены ниже;
SIMAI Framework открыт под Apache-2.0.

## Три шага

1. Подключите стили и скрипт с CDN.
2. Напишите классы или тег компонента.
3. Откройте страницу — загрузчик сам подгрузит то, что на ней есть.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261109.559/distr/core/css/core.min.css">
<script>window.sfPath = 'https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261109.559/distr/';</script>
<script src="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261109.559/distr/core/js/core.min.js"></script>

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
- **[Наборы компонентов](/ru/guide/sets/)** Что такое набор, подключение, версии и лицензия.
- **[Работа с ИИ](/ru/guide/standards/ai/)** Индекс `ai.json` и текстовая версия каждой страницы.
:::

## Наборы компонентов

Набор — готовые смарт-компоненты одной задачи поверх SIMAI Framework.
У каждого набора свой сайт; пока его нет, документация набора здесь.

:::features
- **[Админка — admin](/ru/pro/admin/)** Меню, рабочие экраны, настройки. Pro · готовится свой сайт.
- **[Данные — view](/ru/pro/admin/table/)** Таблица с сортировкой и фильтрами, свойства записи, канбан. Pro · готовится.
- **[Чат — chat](/ru/pro/chat/)** Лента сообщений, поле ввода, список диалогов. Pro · готовится свой сайт.
- **[Письма — mail](/ru/pro/mail/)** Конструктор и просмотр писем. Pro · готовится свой сайт.
:::

:::features
- **[Редактор — editor](/ru/pro/editor/editor/)** Редактор страниц и текста. Pro · готовится свой сайт.
- **Графики — chart** Графики и диаграммы. Pro · готовится.
- **[Эффекты — effects](https://effects.simai.io/)** Фоновые эффекты и анимации. Бесплатно · выпущен.
- **[Как устроены наборы](/ru/guide/sets/)** Подключение одной строкой, версии, лицензия.
:::

---

**SIMAI Framework** · выпуск `ui-cb287da78ab1` ·
[GitHub](https://github.com/simai/ui-source) ·
[Сообщить о проблеме](https://github.com/simai/ui-source/issues) ·
[Версии](/ru/guide/connection/versions/) ·
[Apache-2.0](https://github.com/simai/ui-source/blob/main/LICENSE)
