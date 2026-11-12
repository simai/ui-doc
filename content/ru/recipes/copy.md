---
title: "Копирование"
description: "Как дать скопировать ключ, команду, номер или ссылку: кнопка копирует значение целиком, имя говорит, что копируется, а при отказе браузера текст выделяется."
---

# Копирование

Ключ, команду, номер заказа или ссылку человек переносит в другое место.
Кнопка копирования стоит рядом со значением и кладёт в буфер обмена его
целиком, а не ту часть, что видна. Имя кнопки говорит, что она копирует.
Если браузер не дал доступ к буферу, кнопка выделяет текст и сама
показывает, что нажать.

## Пример

### Поле с ключом

Ключ длиннее поля. Нажмите кнопку в конце поля: в буфер попадёт весь ключ —
он показан под полем.

:::example {id="recipes/copy/key" label="API-ключ" preview=sandbox log="sf-button-copy-copied" log_console=true log_open=false}
:::

### Блок кода

Кнопка «Копировать» стоит над блоком и копирует его текст целиком. Номера
строк, если они у блока включены, в буфер не попадают.

:::example {id="recipes/copy/code" label="Команды" preview=sandbox log="sf-button-copy-copied" log_console=true log_open=false}
:::

### Строка таблицы

Номер и ссылка копируются отдельными кнопками рядом со значением; в имени
каждой — номер заказа.

:::example {id="recipes/copy/rows" label="Заказы" preview=sandbox log="sf-button-copy-copied" log_console=true log_open=false}
:::

### Несколько кнопок рядом

Под примером — имена кнопок, которые слышит экранный диктор: каждое своё.

:::example {id="recipes/copy/group" label="Вебхук" preview=sandbox log="sf-button-copy-copied" log_console=true log_open=false}
:::

### Обычная кнопка с атрибутом

Кнопка уже есть в ряду действий или в строке таблицы и должна выглядеть как
соседние. Атрибут `data-sf-copy` с текстом или `data-sf-copy-target` с
элементом делает её кнопкой копирования: отклик тот же, отдельного класса не
нужно.

:::example {id="smart-components/copy-button/attribute" label="Кнопки с атрибутом" preview=sandbox log_console=true log_open=false}
:::

### Браузер не дал доступ к буферу

Так бывает во встроенном фрейме или по политике сайта; здесь отказ
смоделирован. Нажмите кнопку: ключ выделится, и над кнопкой появится, что
нажать.

:::example {id="recipes/copy/denied" label="Отказ" preview=sandbox log="sf-button-copy-copy-failed" log_console=true log_open=false}
:::

## Когда брать

| Что копируют | Как дать |
|:---|:---|
| Ключ, токен, длинный идентификатор в поле | Кнопка в конце поля, источник — поле: `target="#id"` |
| Команда, отрывок кода | Блок кода со своей шапкой ставит кнопку «Копировать код» сам; без шапки (`data-chrome="none"`) — кнопка над блоком с `target` |
| Номер или ссылка в строке таблицы | Маленькая кнопка рядом со значением, источник — `value` с самим значением |
| Несколько значений в одной карточке | Кнопка у каждого, у каждой своё имя |
| Действие в ряду кнопок или значок в строке | Своя кнопка (`sf-button`, `sf-button-icon`, `<button>`) с `data-sf-copy="текст"` или `data-sf-copy-target="#id"` |
| Код в тексте абзаца | Не кнопка, а копирование по нажатию — [Копирование кода в тексте](/ru/guide/functions/actions/code-copy/) |

Короткое значение в тексте — число, имя, слово — кнопкой не снабжают: его
легко выделить.

## Из чего собрано

| Часть | Компонент | Как задано |
|:---|:---|:---|
| Кнопка у значения | [Кнопка копирования](/ru/smart/actions/copy-button/) | `target="#id"` — значение поля или текст элемента; `value` — сам текст |
| Имя кнопки | [Кнопка копирования](/ru/smart/actions/copy-button/) | `label` называет, что копируется: «Скопировать API-ключ», «Скопировать номер заказа ORD-2026-0042» |
| Значок | [Кнопка копирования](/ru/smart/actions/copy-button/) | `icon="link"` у ссылки, `icon="key"` у ключа; по умолчанию `content_copy` |
| Поле с ключом | [Текстовые поля](/ru/components/forms/inputs/) | `input readonly`, кнопка внутри `sf-input-field` после поля |
| Блок кода | [Подсветка кода](/ru/components/content/highlight/) | `<pre><code data-lang="bash" data-lines>`; со своей шапкой — кнопка «Копировать код» в ней, с `data-chrome="none"` — `sf-button-copy target` над блоком |
| Таблица | [Таблицы](/ru/utilities/tables/tables-default-parameters/) | `table` с `text-1/2`; кнопка `size="1/2"` в ячейке рядом со значением — одна ступень с текстом строки |
| Обычная кнопка | [Кнопки](/ru/smart/actions/buttons/), [Кнопки со значком](/ru/smart/actions/icon-buttons/) | `data-sf-copy="текст"` или `data-sf-copy-target="#id"`; результат — события `sf:copy-success` и `sf:copy-error` |
| Подсказка при отказе | [Кнопка копирования](/ru/smart/actions/copy-button/) | кнопка сама пишет над собой «Выделено — нажмите Ctrl+C» (⌘C на Mac), пока держится результат |

## Как делать

:::example {id="recipes/copy/do-dont" label="Как делать"}
:::

- **Имя говорит, что копируется.** Три кнопки «Копировать» подряд экранный
  диктор читает одинаково, и не понять, какая что скопирует. В строке
  таблицы в имени — значение строки: «Скопировать номер заказа
  ORD-2026-0042».
- **Копируется значение целиком.** Источник кнопки — поле или полный
  текст, а не сокращённая строка с экрана: «sk_test_51Hq…TqA2» в чужой
  системе не сработает.
- **Код — без номеров строк.** Номера помогают читать, но в буфер не
  попадают: и кнопка блока кода, и кнопка копирования с `target` на блок
  берут только текст кода.
- **Отказ браузера — не тупик.** Кнопка выделяет текст и показывает над
  собой, что нажать; ту же фразу вежливо слышит экранный диктор.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Копирование», выпуск ui-7f1d29b02919.
Правила:
1. Кнопка копирования — sf-button-copy рядом со значением; источник — target="#id" (значение поля или текст элемента) или value (сам текст), не оба сразу.
2. Копируется значение целиком: источник — поле или полный текст, не сокращённая строка с экрана.
3. label называет, что копируется: «Скопировать API-ключ»; в строке таблицы — со значением строки: «Скопировать номер заказа ORD-2026-0042». Никогда несколько кнопок «Копировать» подряд.
4. Ключ в поле: input readonly, sf-button-copy target="#id" внутри sf-input-field после поля.
5. Команды и код — <pre><code data-lang="…" data-lines>: в шапке блока кнопку «Копировать код» ставит сам блок, своей рядом не ставьте; без шапки (data-chrome="none") — sf-button-copy target="#id блока" над ним. Номера строк в буфер не попадают.
6. В таблице — sf-button-copy в ячейке рядом со значением, на ступени текста строки: table text-1/2 → size="1/2"; icon="link" у ссылки. Подпись, значение и кнопка в одной строке — одна ступень: текст 1/2 → size="1/2", текст 1 → size="1".
7. Своя кнопка копирует с атрибутом: data-sf-copy="текст" или data-sf-copy-target="#id" у <button>, sf-button или sf-button-icon; отклик тот же, события sf:copy-success {text, method} и sf:copy-error {code}.
8. Отказ браузера (code "denied"): кнопка сама выделяет текст и пишет над собой «Выделено — нажмите Ctrl+C» (⌘C на Mac); своей подсказки рядом не ставьте. -->
<div data-sf-density="compact">
  <section class="sf-card max-w-g8" aria-labelledby="key-heading">
    <h2 id="key-heading" class="m-0 text-1 weight-6">Ключ доступа к API</h2>
    <label class="sf-input sf-input--size-1 sf-input--bordered flex flex-col max-w-sm">
      <span class="sf-input-label flex"><span class="sf-input-text">API-ключ</span></span>
      <span class="sf-input-field items-cross-center transition flex">
        <input id="api-key" name="api-key" readonly value="demo-test-key-51Hq7Lr9Xc4Vb1Nm8Pz3TqA2xY6wE0rT8uI3oP5aS7dF">
        <sf-button-copy target="#api-key" label="Скопировать API-ключ"></sf-button-copy>
      </span>
    </label>
    <div class="flex flex-wrap items-cross-center gap-1/2">
      <code id="webhook-secret">whsec_Zq41Lk0P</code>
      <sf-button-copy target="#webhook-secret" icon="key" label="Скопировать секрет вебхука"></sf-button-copy>
    </div>
    <div class="flex flex-wrap items-cross-center gap-1/2">
      <code id="order-id">ORD-2026-0042</code>
      <sf-button-icon icon="content_copy" appearance="ghost" scheme="on-surface-variant" label="Скопировать номер заказа ORD-2026-0042" data-sf-copy-target="#order-id"></sf-button-icon>
    </div>
  </section>
</div>
```

## См. также

- [Кнопка копирования](/ru/smart/actions/copy-button/) — все настройки кнопки
- [Копирование текста](/ru/guide/functions/actions/copy-text/) — копирование из своего кода
- [Карточка записи](/ru/recipes/record-card/) — путь и ключ с кнопкой копирования
