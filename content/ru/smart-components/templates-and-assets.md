---
title: "Шаблоны и ассеты Smart Components"
description: "Встроенные и внешние шаблоны Smart Components SIMAI Framework."
---

# Шаблоны и ассеты Smart Components

Обычный Smart-компонент поставляется с JavaScript и встроенным шаблоном
`smart/<name>/template/default.js`. Наличие собственного CSS и дополнительных
файлов определяется Loader-правилом конкретной записи.

## Внешний шаблон

Базовый Smart-класс поддерживает внешний каталог шаблонов. По умолчанию это
`/local/smart/templates`; путь можно изменить до создания элементов:

```html
<script>
  window.SF_SMART_TEMPLATE_PATH = '/assets/project/smart-templates';
</script>
```

Поддерживается и совместимый вариант `window.SFSmartTemplatePath`. Для
компонента и выбранного имени шаблона запрашиваются файлы вида
`<base>/<component>/<template>/index.js` и связанный CSS, если он предусмотрен
реализацией.

Не предполагается, что каждый компонент имеет отдельный CSS или одинаковые
параметры шаблона. Фактические ассеты перечислены на странице компонента в
[справочнике](/ru/smart-components/reference/).
