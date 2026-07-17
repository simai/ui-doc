---
extends: _core._layouts.documentation
section: content
title: Начало работы
description: Начало работы с SIMAI Framework
---

# Установка и версия

Перед подключением получите approved compatibility lock. В нём должны быть
зафиксированы точные ref Core и Smart Components, профиль поставки и дата
проверки. Эта страница не подставляет вместо lock `main`, `latest` или
случайный commit.

## CDN после утверждения lock

Замените `<approved-core-ref>` на ref из approved lock. Этот шаблон намеренно
не является готовой командой до публикации lock.

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/simai/ui@<approved-core-ref>/distr/core/css/core.css">

<script>
  window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@<approved-core-ref>/distr';
</script>
<script src="https://cdn.jsdelivr.net/gh/simai/ui@<approved-core-ref>/distr/core/js/core.js"></script>
```

Если используются Smart Components, их ref и путь должны быть указаны в том
же lock. Не выводите совместимость из названия ветки, каталога или версии
README.

## Локальные static assets

Разместите каталог `distr` из той же утверждённой поставки под URL вашего
проекта и укажите этот URL до загрузки Core:

```html
<link rel="stylesheet" href="/assets/simai-framework/distr/core/css/core.css">

<script>
  window.sfPath = '/assets/simai-framework/distr';
</script>
<script src="/assets/simai-framework/distr/core/js/core.js"></script>
```

Путь должен вести на копию ровно того release-артефакта, который записан в
lock; не смешивайте локальные файлы с CDN из другой версии.

## Минимальная проверка

1. Откройте страницу в новом профиле браузера.
2. Убедитесь, что CSS и JavaScript загружены без 404 и ошибок Console.
3. Проверьте, что Network показывает тот же immutable ref, который указан в
   lock.
4. Если проект использует Smart Components, повторите проверку на странице с
   одним approved example.

Для baseline `5.4.0` окончательные refs и runnable snippets появятся только
после owner-approved release lock.
