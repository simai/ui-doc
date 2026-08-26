---
title: "Checkbox"
description: "Runtime-контракт компонента checkbox в SIMAI Framework 5.4.0 candidate."
---

# Checkbox

Идентификатор: `component.checkbox`. Компонент готов к использованию; жизненный цикл — стабильный.

## Подключение

Loader-правило: `checkbox`.

Корень ассетов: `distr/component/checkbox`. Поставка объявляет CSS: **да**, JavaScript: **да**.

## Подтверждённый DOM/CSS-контракт

Публично наблюдаемые селекторы в поставляемом CSS: `.sf-checkbox`, `.sf-checkbox--size-1`, `.sf-checkbox-box`, `.sf-checkbox-container`, `.sf-checkbox-description`, `.sf-checkbox-label`, `.sf-checkbox-top`, `.sf-icon`.

Настраиваемые CSS-переменные, найденные в ассетах: `--sf-a1`, `--sf-checkbox--background-color`, `--sf-checkbox--gap`, `--sf-checkbox-box--background-color`, `--sf-checkbox-box--border`, `--sf-checkbox-box--border-color`, `--sf-checkbox-box--border-end-end-radius`, `--sf-checkbox-box--border-end-start-radius`, `--sf-checkbox-box--border-start-end-radius`, `--sf-checkbox-box--border-start-start-radius`, `--sf-checkbox-box--box-shadow`, `--sf-checkbox-box--height`, `--sf-checkbox-box--width`, `--sf-checkbox-container--background-color`, `--sf-checkbox-description--color`, `--sf-checkbox-description--font-family`, `--sf-checkbox-description--font-size`, `--sf-checkbox-description--font-weight`, `--sf-checkbox-description--line-height`, `--sf-checkbox-label--background-color`, `--sf-checkbox-label--color`, `--sf-checkbox-label--font-family`, `--sf-checkbox-label--font-size`, `--sf-checkbox-label--font-weight`, `--sf-checkbox-label--line-height`, `--sf-checkbox-top--background-color`, `--sf-checkbox-top--gap`, `--sf-disable`, `--sf-error`, `--sf-font-weight-medium`, `--sf-font-weight-regular`, `--sf-icon--color`, `--sf-icon--font-size`, `--sf-icon--height`, `--sf-icon--width`, `--sf-icon-size-3`, `--sf-on-primary`, `--sf-on-surface`, `--sf-on-surface-variant`, `--sf-outline`, `--sf-outline-disable`, `--sf-primary`, `--sf-primary-hover`, `--sf-radius-default`, `--sf-space-1`, `--sf-surface-0`, `--sf-text--family`, `--sf-text-height-1`, `--sf-text-size-1`, `--sf-ui-focus`.

## Проверенный пример

- `simai/ui-play@0a393e85f0c6a137ae024f442dd52cc34d5f0508:examples/components/checkbox/all/index.html`

## Доступность

Проверяйте семантику конкретной разметки, видимый `:focus`, управление клавиатурой и объявление состояния assistive technology. Наличие CSS/JS ассета само по себе не подтверждает доступность пользовательского сценария.

## Источник

- `simai/ui@2742ed22730b3f37cd26ab72c03621637a464ee0:distr/rule/rule.json#name=checkbox`
