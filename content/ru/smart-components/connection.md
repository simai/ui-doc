---
title: "Подключение Smart Components"
description: "Фактические пути и автоматическая загрузка Smart Components SIMAI Framework."
---

# Подключение Smart Components

Core и Smart-ассеты публикуются двумя каталогами. `window.sfSmartPath` указывает
на директорию, внутри которой расположен `smart/`:

```html
<link rel="stylesheet" href="/assets/simai-framework/ui/distr/core/css/core.css">
<script>
  window.sfPath = '/assets/simai-framework/ui/distr';
  window.sfSmartPath = '/assets/simai-framework/ui-smart';
</script>
<script src="/assets/simai-framework/ui/distr/core/js/core.js"></script>

<sf-button text="Со
ранить" scheme="primary"></sf-button>
```

Loader распознаёт тег `&lt;sf-button&gt;`, применяет правило `cl-buttons`, подключает
`ui-smart/smart/buttons/js/buttons.js` и зависимый обычный компонент `buttons`.
Для другого элемента используйте тег и правило с его reference-страницы.

Элементы со статусом «заблокирован» не имеют Loader-правила и не считаются
штатно подключаемыми. Не об
одите этот статус ручным подключением в production:
сначала правило и зависимости должны появиться в согласованной поставке.

После загрузки проверьте Network и Console, регистрацию custom element,
клавиатуру, фокус, доступное имя и повторное добавление элемента в DOM.
