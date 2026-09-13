---
title: "Подключение Smart-компонентов"
description: "Как подключить Smart-компоненты к странице через общий Loader."
---

# Подключение Smart-компонентов

Smart-компоненты поставляются отдельно от основной части Framework. Укажите путь к ним до подключения Core, а Loader найдёт нужный элемент на странице и загрузит его файлы.

## Когда применять

Добавьте этот путь один раз в шаблон проекта, если на страницах используются теги вида `<sf-button>`. Вручную подключать файлы каждого такого элемента не нужно.

## Пример

```html
<link rel="stylesheet" href="/assets/simai-framework/ui/distr/core/css/core.css">
<script>
  window.sfPath = '/assets/simai-framework/ui/distr';
  window.sfSmartPath = '/assets/simai-framework/ui-smart';
</script>
<script src="/assets/simai-framework/ui/distr/core/js/core.js"></script>

<sf-button text="Сохранить" scheme="primary"></sf-button>
```

Увидев `<sf-button>`, Loader подключит Smart-кнопку и обычный компонент кнопки, от которого зависит её оформление.

## Что дальше

Разберите [загрузку и готовность](/ru/guide/smart-components/lifecycle/). Точный тег конкретного элемента указан в [справочнике](/ru/smart-components/reference/).
