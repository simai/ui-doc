---
extends: _core._layouts.documentation
section: content
title: Подключение компонентов
description: Автоматическая загрузка обычных компонентов SIMAI Framework.
---

# Подключение компонентов

Обычные компоненты находятся в `distr/component`. Подключать их CSS и
JavaScript по одному обычно не нужно: Core обнаруживает селекторы и атрибуты в
DOM, находит Loader-правило и загружает объявленные ассеты с зависимостями.

```html
<link rel="stylesheet" href="/assets/simai-framework/ui/distr/core/css/core.css">
<script>
  window.sfPath = '/assets/simai-framework/ui/distr';
</script>
<script src="/assets/simai-framework/ui/distr/core/js/core.js"></script>

<button class="sf-button sf-button--primary">Сохранить</button>
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
— в [справочнике](/ru/components/reference/).
