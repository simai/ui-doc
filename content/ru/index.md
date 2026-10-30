:::hero {variant=compact padding=2xl media=none effect="neon-horizon" effect_theme=auto effect_settings='{"intensity": 30}'}
# Интерфейс без сборки: один CSS и один скрипт

SIMAI Framework — CSS-утилиты, готовые компоненты и смарт-компоненты для
сайтов, порталов и административных интерфейсов. Подключается с CDN, без npm
и бандлера: загрузчик берёт только то, что есть на странице.

[Начать за 5 минут](/ru/guide/introduction/quick-start/)

[GitHub](https://github.com/simai/ui-source)
:::

## Административный интерфейс

Меню разделов, список с поиском, фильтром и сортировкой, карточка записи — всё
собрано из смарт-компонентов на демонстрационных данных. Откройте запись,
отфильтруйте список, поменяйте ширину колонок.

:::internal_preview {size=tall title="Административный интерфейс"}
[Открыть демонстрацию](/demos/home/admin/)
:::

[Открыть на отдельной странице](/demos/home/admin/)

## Код за 30 секунд

Сохраните страницу как `index.html` и откройте её в браузере. Это тот же
пример, что в быстром старте: стили, утилиты и кнопка подключаются с CDN.

```html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Первая страница на SIMAI Framework</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261030.1224/distr/core/css/core.min.css">
</head>
<body>
  <main class="p-4">
    <article class="p-4 bg-surface-container radius-2">
      <h1 class="sf-h-2 m-bottom-2">SIMAI Framework подключён</h1>
      <p class="sf-body-medium color-on-surface">
        Стили, токены и утилиты работают.
      </p>
      <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1">
        <span class="sf-button-text-container">Кнопка на классах</span>
      </button>
    </article>
  </main>

  <script>
    window.sfPath = 'https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261030.1224/distr/';
    window.SF_BOOT_CONFIG = {preloader: {enabled: false}};
  </script>
  <script src="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261030.1224/distr/core/js/core.min.js"></script>
</body>
</html>
```

[Быстрый старт: запуск и проверка подключения](/ru/guide/introduction/quick-start/)

## Найдите свою задачу

:::features
- **[Подключение](/ru/guide/connection/project-setup/)** С CDN или из своих файлов, порядок подключения.
- **[Макеты](/ru/guide/layouts/)** Страница из секций и блоков.
- **[Компоненты](/ru/components/)** Кнопки, поля, карточки и другие элементы на классах.
- **[Смарт-компоненты](/ru/smart-components/)** Теги с поведением: таблица, меню, формы.
:::

:::features
- **[Темы](/ru/guide/colour/themes/)** Светлая, тёмная и своя тема из одного цвета.
- **[JavaScript API](/ru/guide/connection/js-api/)** Объекты и события для своих скриптов.
- **[Работа с ИИ](/ru/guide/standards/ai/)** Как дать помощнику документацию.
- **[Обновление](/ru/guide/connection/updating/)** Переход между выпусками и журнал изменений.
:::

## Почему SIMAI Framework

:::features
- **[Без сборки](/ru/guide/introduction/quick-start/)** Классы и теги в разметке подключают нужные модули сами. Грузится только то, что есть на странице.
- **[Готовые административные экраны](/ru/smart-components/)** Таблица, фильтры, карточка записи и меню уже собраны в смарт-компоненты.
- **[Предсказуемые обновления](/ru/guide/connection/versions/)** Проект закрепляет выпуск, а журнал изменений показывает, что поправить при переходе.
- **[Открытый код](https://github.com/simai/ui-source/blob/main/LICENSE)** Лицензия Apache-2.0, в том числе для коммерческих проектов.
:::

## Посмотрите в работе

### Карточка по ширине контейнера

Карточка перестраивается по ширине своей панели, а не окна: классы `cq-sm:` и
`cq-md:` срабатывают от ширины контейнера. Потяните правый край панели.

:::example {id="home/container" label="Контейнерный запрос"}
:::

### Тема из одного цвета

Выберите основной цвет — генератор построит палитры и переменные темы.

:::example {id="smart-components/theme-generator/overview" label="Генератор темы"}
:::

Для первых экранов и карточек есть
[каталог фоновых эффектов](https://effects.simai.io/) — отдельный
сайт с живыми примерами.

## Для ИИ-помощников

Дайте помощнику адрес документации. Индекс `ai.json` перечисляет все страницы,
у каждой есть текстовая версия. Подробнее — в разделе
[Работа с ИИ](/ru/guide/standards/ai/).

```text
Документация SIMAI Framework: https://ui.simai.io/ (индекс для ИИ — /ai.json).
Правила: https://ui.simai.io/ru/guide/standards/ai/ai.md
```

---

**SIMAI Framework** · выпуск `ui-d6292bd6fc34` ·
[GitHub](https://github.com/simai/ui-source) ·
[Сообщить о проблеме](https://github.com/simai/ui-source/issues) ·
[Версии](/ru/guide/connection/versions/) ·
[Apache-2.0](https://github.com/simai/ui-source/blob/main/LICENSE)
