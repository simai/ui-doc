---
title: "Подключение компонентов"
---

# Подключение компонентов

Обычные компоненты на
одятся в `distr/component`. Подключать и
 CSS и
JavaScript по одному обычно не нужно: Core обнаруживает селекторы и атрибуты в
DOM, на
одит Loader-правило и загружает объявленные ассеты с зависимостями.

```html
<link rel="stylesheet" href="/assets/simai-framework/ui/distr/core/css/core.css">
<script>
  window.sfPath = '/assets/simai-framework/ui/distr';
</script>
<script src="/assets/simai-framework/ui/distr/core/js/core.js"></script>

<button class="sf-button sf-button--primary">Со
ранить</button>
```

Для явной загрузки используйте имя правила из справочника:

```html
<div sf-asset="buttons"></div>
```

Loader добавит файлы из `distr/component/buttons` и объявленные зависимости.
Точный набор CSS и JavaScript различается между компонентами, поэтому не
копируйте отдельные файлы вручную.

После подключения проверьте отсутствие `404` и ошибок Console, визуальный
результат, клавиатурное управление, фокус и доступное имя. Общие правила
описаны в [разделе о Loader](/ru/start/loader/), а координаты каждого компонента
— в [справочнике](/ru/framework-components/reference/).
