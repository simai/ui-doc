---
extends: _core._layouts.documentation
section: content
title: SIMAI Framework
description: Русская документация SIMAI Framework
---

# SIMAI Framework

SIMAI Framework помогает собирать интерфейсы из трёх разных слоёв: утилит,
обычных компонентов и Smart Components. У каждого слоя своя задача и свой
публичный контракт — не заменяйте один слой другим только по похожему имени
каталога или CSS-класса.

## Основные разделы

- [Старт](/ru/start/) — порядок подключения, проверка версии и первая
  диагностика.
- [Основы](/ru/fundamentals/) — модель модификаторов, условий, тем и значений.
- [Утилиты](/ru/utilities/) — каталог CSS-утилит и их ограничений.
- [Компоненты](/ru/components/) — границы ordinary-компонентов, источник
  контрактов и примеры.
- [Smart Components](/ru/smart-components/) — custom elements, lifecycle,
  assets и source-backed каталог.

## Версия и совместимость

Подключайте Core, Components и Smart Components только по утверждённому
immutable compatibility lock: он должен назвать точные теги или commits,
профиль поставки и проверенную пару артефактов. Не используйте `main` или
`latest` как production-зависимость и не смешивайте Core и Smart из разных
lock.

Для baseline `5.4.0` в исходниках этой документации пока нет утверждённого
release lock. Поэтому страницы ниже объясняют модель и безопасный порядок
работы, но не подменяют lock выдуманными CDN-адресами, хэшами или API.
Смотрите [правила совместимости и обновления](/ru/start/compatibility/).

## Интерактивный пример

Playground помогает посмотреть отдельный пример, но не является доказательством
совместимости конкретного релиза. Сверяйте пример с lock перед переносом в
проект.

<a href="https://play.simai.io/embed.html?component=buttons&amp;group=tightness" target="_blank" rel="noopener noreferrer">Открыть пример кнопок в Playground</a>

```html

<div class="sm-txt-center md-bg-primary lg-p-4">
    <p>Интерактивный пример SIMAI Framework</p>
</div>
```
