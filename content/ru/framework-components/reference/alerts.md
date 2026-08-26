---
title: "Alerts"
description: "Runtime-контракт компонента alerts в SIMAI Framework 5.4.0 candidate."
---

# Alerts

Идентификатор: `component.alerts`. Компонент доступен, но ещё не прошёл полную продуктовую приёмку; жизненный цикл — стабильный.

## Подключение

Loader-правило: `alerts`.

Корень ассетов: `distr/component/alerts`. Поставка объявляет CSS: **да**, JavaScript: **да**.

## Подтверждённый DOM/CSS-контракт

Публично наблюдаемые селекторы в поставляемом CSS: `.sf-alert`, `.sf-alert--clear`, `.sf-alert--danger`, `.sf-alert--default`, `.sf-alert--flat`, `.sf-alert--info`, `.sf-alert--outlined`, `.sf-alert--success`, `.sf-alert--warning`, `.sf-alert-buttons`, `.sf-alert-content`, `.sf-alert-supporting-text`, `.sf-alert-text`, `.sf-alert-wrap`, `.sf-close`, `.sf-close-icon`, `.sf-icon`, `.sf-icon-button`, `.sf-icon-button--close`, `.sf-icon-button--link`.

Настраиваемые CSS-переменные, найденные в ассетах: `--sf-alert--background-color`, `--sf-alert--border-bottom-left-radius`, `--sf-alert--border-bottom-right-radius`, `--sf-alert--border-bottom-width`, `--sf-alert--border-color`, `--sf-alert--border-left-width`, `--sf-alert--border-right-width`, `--sf-alert--border-style`, `--sf-alert--border-top-left-radius`, `--sf-alert--border-top-right-radius`, `--sf-alert--border-top-width`, `--sf-alert--border-width`, `--sf-alert--gap`, `--sf-alert--padding-bottom`, `--sf-alert--padding-left`, `--sf-alert--padding-right`, `--sf-alert--padding-top`, `--sf-alert-buttons--background-color`, `--sf-alert-buttons--gap`, `--sf-alert-content--background-color`, `--sf-alert-content--gap`, `--sf-alert-supporting-text--color`, `--sf-alert-supporting-text--font-family`, `--sf-alert-supporting-text--font-size`, `--sf-alert-supporting-text--font-weight`, `--sf-alert-supporting-text--line-height`, `--sf-alert-text--color`, `--sf-alert-text--font-family`, `--sf-alert-text--font-size`, `--sf-alert-text--font-weight`, `--sf-alert-text--line-height`, `--sf-alert-wrap--background-color`, `--sf-alert-wrap--gap`, `--sf-close-icon--background-color`, `--sf-close-icon--border-color`, `--sf-error`, `--sf-error-container`, `--sf-font-weight-regular`, `--sf-icon--color`, `--sf-icon--fill`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width`, `--sf-info`, `--sf-info-container`, `--sf-on-surface`, `--sf-on-surface-variant`, `--sf-outline`, `--sf-outline-error`, `--sf-outline-info`, `--sf-outline-primary`, `--sf-outline-success`, `--sf-outline-warning`, `--sf-radius-2`, `--sf-space-1`, `--sf-success-container`, `--sf-surface-container`, `--sf-text--family`, `--sf-text-height-1`, `--sf-text-size-1`.

## Пример и поведенческий API

Для этой ревизии в реестре ещё не закреплён проверенный пример. Не считайте внутренние функции JavaScript стабильным API без отдельного контракта и browser-теста.

## Доступность

Проверяйте семантику конкретной разметки, видимый `:focus`, управление клавиатурой и объявление состояния assistive technology. Наличие CSS/JS ассета само по себе не подтверждает доступность пользовательского сценария.

## Источник

- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=alerts`
