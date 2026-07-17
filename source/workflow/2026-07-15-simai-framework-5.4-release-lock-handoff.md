# Handoff: immutable release lock для SIMAI Framework 5.4.0

Статус: внешний blocker для публикации release-достоверной документации.
Дата: 2026-07-15.
Владелец следующего действия: owners Core и Smart Components.

## Что уже сделано в `ui-doc`

- Русские разделы переведены на модель release-gated документации.
- Убраны известные маршруты на `main` и `latest` из reader journey и добавлена
  проверка, которая находит неприкреплённый runtime.
- Документация не публикует выдуманные теги, commits, CDN URLs или перечень API
  для `5.4.0`.

## Почему нельзя завершить release-достоверную публикацию

В проверенных источниках нет owner-approved immutable pair для `5.4.0`:
Core, Smart Components, дистрибутивы, release catalog и примеры не имеют
единого production-ready provenance. Историческая пара `5.3.x` не является
заменой baseline `5.4.0`: её bounded registry прямо отмечает неполную
совместимость и неготовность для production.

## Что должны передать owners

1. Immutable tag и commit Core release candidate / release.
2. Immutable tag и commit Smart Components release candidate / release.
3. Проверенные пути к `distr` и hashes поставляемых архивов или эквивалентный
   механизм проверки артефактов.
4. Approved compatibility lock с полями Core ref, Smart ref, profile,
   catalog revision, example revision, status, known limitations и датой
   browser smoke.
5. Release catalog с contract ID, статусом и assets каждого публичного
   utility/component/Smart Component.
6. Обновлённый `ui-play`, закреплённый на той же pair, и evidence его asset,
   integration и browser checks.

## Требования к принятию lock

- Не использовать ветки, `main`, `latest` или локальные рабочие commits.
- Не называть lock production-ready, если есть непокрытые missing assets,
  несовпадение gzip/plain delivery или непроверенные contract rows.
- Разрешить несоответствие номеров Core и Smart, только если оно явно записано
  как совместимая pair с доказательством.
- Обновить release notes и README так, чтобы они ссылались на тот же lock.

## После получения lock: безопасный batch в `ui-doc`

1. Добавить в `source/docs/ru` source-backed страницу release/schema и
   точные installation snippets.
2. Заменить fallback runtime в `source/_core/_layouts/core.blade.php` на
   immutable ref из lock.
3. Заполнить каталоги Components и Smart Components только approved rows.
4. Запустить `bin/check-docs-integrity.php`, Docara production build,
   rendered-link smoke и browser QA на `390 px` и desktop.
5. Зафиксировать result и rollback point перед публикацией локальной preview
   или внешнего сайта.

## Stop condition

До выполнения этого handoff документация может быть полезной и честной, но не
должна быть объявлена как release-достоверная `5.4.0` и не должна деплоиться
как такой релиз.
