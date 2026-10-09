---
title: "Обновление и наследие"
description: "Как Framework выводит старые имена из употребления и как обновить продукт по журналу изменений, в том числе с помощью ИИ."
---

# Обновление и наследие

У Framework одна линия версий, и она живёт долго. Поэтому старое уходит не с
номером версии, а **по календарю**: у каждого устаревшего имени есть дата, когда
оно перестанет работать, и эту дату видно заранее.

## Два этапа

1. **Совместимость.** Старое имя ещё работает, но в журнале изменений записано,
   что писать вместо него и когда его уберут. Страница, которая его использует,
   отмечает это в `SF.deprecations.list()`.
2. **Удалено.** Кода больше нет. Запись в журнале остаётся навсегда, чтобы
   продукт на любой старой паре можно было обновить, прочитав её.

Устаревшее имя убирается в ближайшую **чистку** — 1-го числа месяца, не раньше
чем через 30 дней после того, как оно устарело. Если продукт ещё зависит от
имени, запись продлевают один раз, не больше чем на 30 дней, с причиной и датой
перехода — и всегда до срока, а не после.

## Что устарело на вашей странице

Откройте консоль браузера и выполните `SF.deprecations.list()`. Список
покажет каждое старое имя, которое страница использовала, и что писать вместо
него. Чтобы видеть предупреждения в консоли сразу, добавьте
`data-sf-deprecations="warn"` к элементу `html`. По умолчанию консоль молчит.

## Как обновить продукт

В репозитории Framework есть инструмент, который читает журнал и находит
старые имена в коде продукта: HTML, Blade, Twig, Vue, JS, CSS, Markdown и JSON.
Запуск: `node scripts/sf-upgrade.mjs ../my-product`.

Механические замены (атрибут, значение, событие, класс, токен, утилита) он
делает сам с ключом `--apply`. Остальное выводит списком: где, что и как
заменить, с примером «было — стало».

### С помощью ИИ

ИИ получает три вещи: отчёт `sf-upgrade --json`, записи журнала, на которые он
ссылается, и проверки продукта. Правило одно: сначала механические замены
через `--apply`, затем каждое ручное место — по инструкции и примеру из его
записи, без собственных догадок о соответствиях. Обновление закончено, когда
`sf-upgrade` ничего не находит, проверки продукта проходят, а
`SF.deprecations.list()` пуст на затронутых страницах.

## Журнал изменений

Машиночитаемый журнал лежит в репозитории Framework:
`contracts/changes/journal.json`. Правила — в стандарте
`simai.change-lifecycle` и в `contracts/lifecycle-policy.json`. Ниже — его
текущее состояние.

| Запись | Где | Было → стало | Устарело | Удаляется | Этап |
|:---|:---|:---|:---|:---|:---|
| `attribute-type-to-appearance` | sf-badge, sf-button, sf-dropdown, sf-icon-button | `type` → `appearance` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-variant-to-appearance` | sf-alert | `variant` → `appearance` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-type-to-status` | sf-alert, sf-toast | `type` → `status` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-tone-to-status` | sf-progress-bar, sf-progress-scale | `tone` → `status` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-type-to-kind` | sf-file-preview, sf-list-item, sf-tree-item, sf-toggle | `type` → `kind` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-variant-to-kind` | sf-icon-button, sf-skeleton, sf-spinner | `variant` → `kind` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-tag-type-split` | sf-tag | `type` → `kind`; `type` → `status` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-badge-scheme-to-status` | sf-badge | `scheme` → `status` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-input-size-to-size` | sf-datepicker | `input-size` → `size` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-icon-left-right-to-start-end` | sf-button, sf-badge | `icon-left` → `icon-start`; `icon-right` → `icon-end` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-tightness-to-spacing` | sf-button, sf-icon-button, sf-button-group | `tightness` → `spacing` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-file-preview-size-to-file-size` | sf-file-preview | `size` → `file-size` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-gallery-class-to-lightbox-class` | sf-gallery | `root-class` → `lightbox-class` | 2026-10-09 | 2026-12-01 | совместимость |
| `attribute-scrollbar-data-mode` | scrollbar | `data-sf-scrollbar` → `data-mode` | 2026-10-09 | 2026-12-01 | совместимость |
| `value-status-danger-critical-to-error` | sf-alert, sf-badge | `danger` → `error`; `critical` → `error` | 2026-10-09 | 2026-12-01 | совместимость |
| `value-status-neutral-names` | sf-alert, sf-progress-bar, sf-progress-scale, sf-toast | `clear` → `neutral`; `primary` → `neutral`; `default` → `neutral`; `primary` → `info` | 2026-10-09 | 2026-12-01 | совместимость |
| `value-file-preview-kind-default-to-auto` | sf-file-preview | `default` → `auto` | 2026-10-09 | 2026-12-01 | совместимость |
| `value-tag-quantity-to-default` | sf-tag | `quantity` → `default` | 2026-10-09 | 2026-12-01 | совместимость |
| `value-drawer-size-words-to-ladder` | sf-drawer | `small` → `1/2`; `medium` → `1`; `large` → `2` | 2026-10-09 | 2026-12-01 | совместимость |
| `value-drawer-placement-physical` | sf-drawer | `left` → `inline-start`; `right` → `inline-end` | 2026-10-09 | 2026-12-01 | совместимость |
| `value-context-menu-positions` | sf-context-menu | `start` → `inline-start`; `end` → `inline-end`; `top-start` → `top-inline-start`; `top-end` → `top-inline-end`; и ещё 10 | 2026-10-09 | 2026-12-01 | совместимость |
| `value-field-size-1-3-and-3` | sf-input, sf-textarea, sf-dropdown, sf-datepicker | `1/3` → `1/2`; `3` → `2` | 2026-10-09 | 2026-12-01 | совместимость |
| `event-change-aliases` | sf-button-group, sf-datepicker, sf-dropdown, sf-range-slider | `sf-button-group-change` → `change`; `sf-datepicker-change` → `change`; `sf-change` → `change`; `sf-dropdown:change` → `change`; и ещё 2 | 2026-10-09 | 2026-12-01 | совместимость |
| `event-modal-window-names` | modal | `SFModalBeforeOpenWindow` → `modal:before-open`; `SFModalBeforeCloseWindow` → `modal:before-close` | 2026-10-09 | 2026-12-01 | совместимость |
| `option-loader-modal-callbacks` | loader | `onModalReady` → `modal:ready`; `onModalUpdate` → `modal:update`; `onBeforeOpen` → `modal:before-open`; `onAfterOpen` → `modal:after-open`; и ещё 10 | 2026-10-09 | 2026-12-01 | совместимость |
| `option-loader-standalone` | loader | `standAlone` → — | 2026-10-09 | 2026-12-01 | совместимость |
| `class-button-ghost-to-link` | sf-button | `sf-button--ghost` → `sf-button--link` | 2026-10-09 | 2026-12-01 | совместимость |
| `class-scrollbar-bare` | scrollbar | `scrollbar` → `sf-scrollbar` | 2026-10-09 | 2026-12-01 | совместимость |
| `class-hide-show-legacy` | hide-show | `hidden>block` → —; `block>hidden` → — | 2026-10-09 | 2026-12-01 | совместимость |
| `utility-physical-sides` | utilities | `m-left-*` → `m-inline-start-*`; `m-right-*` → `m-inline-end-*`; `p-left-*` → `p-inline-start-*`; `p-right-*` → `p-inline-end-*`; и ещё 4 | 2026-10-09 | 2026-12-01 | совместимость |
| `utility-column-gap-modules` | loader | `column-gap/default` → `gap/default`; `column-gap/sm` → `gap/sm`; `column-gap/md` → `gap/md`; `column-gap/lg` → `gap/lg`; и ещё 2 | 2026-10-09 | 2026-12-01 | совместимость |
| `utility-font-size-ext` | utilities | `text-a0 … text-i9` → `text-1/2, text-1, text-2 …` | 2026-09-30 | 2026-11-01 | совместимость |
| `token-radius-round` | — | `--sf-radius-round` → `--sf-radius-rounded`; `radius-round` → `radius-rounded` | 2026-09-30 | 2026-11-01 | совместимость |
| `token-radius-default` | — | `--sf-radius-default` → `--sf-radius--ui`; `radius-default` → `radius-ui` | 2026-09-30 | 2026-11-01 | совместимость |
| `component-toggle-to-switch` | — | `sf-toggle` → `sf-switch`; `sf-toggle--size-1` → `sf-switch--size-1` | 2026-09-30 | 2026-11-01 | совместимость |
| `property-legacy-getters` | — | `el.type` → `el.appearance, el.kind or el.status (as the attribute)`; `el.variant` → `el.appearance or el.kind`; `el.tone` → `el.status` | 2026-10-09 | 2026-12-01 | совместимость |
| `option-field-renderers-control-names` | field-renderers | `filter.control` → `propertyType`; `field.type` → `propertyType`; `field.dataType` → `propertyType` | 2026-10-09 | 2026-12-01 | совместимость |
