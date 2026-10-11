---
title: "Подключение Smart-компонентов"
description: "Как подключить Smart-компоненты к странице через общий Loader."
---

# Подключение Smart-компонентов

Smart-компоненты входят в тот же выпуск Framework, что и Core: они лежат в `distr/smart/` рядом с `distr/core/`. Достаточно указать путь к `distr/` до подключения Core, а Loader найдёт нужный элемент на странице и загрузит его файлы из `distr/smart/`.

## Когда применять

Добавьте этот путь один раз в шаблон проекта, если на страницах используются теги вида `<sf-button>`. Вручную подключать файлы каждого такого элемента не нужно.

## Пример

```html
<link rel="stylesheet" href="/assets/simai-framework/ui/distr/core/css/core.css">
<script>
  window.sfPath = '/assets/simai-framework/ui/distr/';
</script>
<script src="/assets/simai-framework/ui/distr/core/js/core.js"></script>

<sf-button text="Сохранить" scheme="primary"></sf-button>
```

Увидев `<sf-button>`, Loader подключит Smart-кнопку и обычный компонент кнопки, от которого зависит её оформление. Отдельный `window.sfSmartPath` не нужен: без него Smart-компоненты загружаются из `<sfPath>/smart`.

## Компоненты продуктов

`<sf-table>`, `<sf-data-view>`, `<sf-property-view>` и `<sf-admin-menu>` — компоненты Larena. Они живут в репозитории `simai/larena-ui` (папка `components/`, лицензия Apache-2.0), а не в выпуске Framework, и подключаются как пакет компонентов Loader с именем `larena`. Отдельного выпуска у пакета нет: продукт собирает его с помощью ui-builder из точной ревизии исходников Framework и поставляет в своей поставке. Квитанция сборки называет выпуск Framework `ui-…`, с которым пакет собран, поэтому подключайте их вместе.

Объявите пакет до подключения Core: укажите, где лежит каталог `smart/` собранного пакета. Файл правил `smart/rule.js` Loader загрузит сам, отдельный `<script>` для него не нужен.

```html
<script>
  window.sfPath = '/assets/simai-framework/ui/distr/';
  window.SF_BOOT_CONFIG = {
    packages: {
      larena: {base: '/assets/larena-ui/smart'},
    },
  };
</script>
<script src="/assets/simai-framework/ui/distr/core/js/core.js"></script>

<sf-table aria-label="Проекты" table-settings-key="projects"></sf-table>
```

Если пакет не объявлен, Loader не загрузит компонент пакета и сообщит в консоли, какой тег и почему не загружен.
