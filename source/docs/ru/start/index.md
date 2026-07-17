---
extends: _core._layouts.documentation
section: content
title: Старт
description: Начните работу с SIMAI Framework безопасно и с проверяемой версией.
---

# Старт

Этот раздел помогает выбрать путь подключения и не смешать несовместимые
артефакты. Сначала проверьте release lock, затем подключите assets и только
после этого переносите пример в проект.

## Маршрут

1. Прочитайте [установку и правила версии](/ru/start/installation/).
2. Убедитесь, что для поставки есть [approved compatibility lock](/ru/start/compatibility/).
3. Пройдите [быстрый старт](/ru/start/quickstart/) после появления approved
   lock.
4. Подготовьте свой проект по [нейтральной схеме](/ru/start/project-setup/).
5. Сверьте [интеграцию в веб-проект](/ru/start/integration-patterns/) с
   инфраструктурой своего приложения.
6. Используйте [Playground](/ru/start/playground/) только как пример разметки,
   а не как источник release-совместимости.
7. Затем перейдите к [Основам](/ru/fundamentals/) и нужному каталогу.

## Что нужно до первого подключения

- точная пара Core и Smart Components, если проект их использует;
- immutable tag или commit для каждого артефакта;
- выбранный профиль поставки: CDN или локальные static assets;
- проверка Network и Console на чистой странице.

Если lock ещё не опубликован, не подставляйте `main`, `latest` или случайный
commit вместо него.
