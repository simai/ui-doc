---
title: "Копирование"
description: "Как дать скопировать ключ, команду, номер или ссылку: кнопка копирует значение целиком, имя говорит, что копируется, а при отказе браузера текст выделяется."
---

# Копирование

Ключ, команду, номер заказа или ссылку человек переносит в другое место.
Кнопка копирования стоит рядом со значением и кладёт в буфер обмена его
целиком, а не ту часть, что видна. Имя кнопки говорит, что она копирует.
Если браузер не дал доступ к буферу, кнопка выделяет текст, и рядом видно,
что нажать.

<!-- TODO(C48): когда выйдет выпуск Framework с атрибутами data-sf-copy и
data-sf-copy-target, добавить сцену «обычная кнопка с атрибутом копирования»
и строку о них в «Из чего собрано» и «Копию для ИИ». -->

## Пример

### Поле с ключом

Ключ длиннее поля. Нажмите кнопку в конце поля: в буфер попадёт весь ключ —
он показан под полем.

:::example {id="recipes/copy/key" label="API-ключ" preview=sandbox log="sf-button-copy-copied" log_console=true log_open=false}
:::

### Блок кода

Кнопку в шапке ставит сам блок кода. Нажмите её и вставьте в любое поле:
номеров строк в тексте нет.

:::example {id="recipes/copy/code" label="Команды"}
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

### Браузер не дал доступ к буферу

Так бывает во встроенном фрейме или по политике сайта; здесь отказ
смоделирован. Нажмите кнопку: ключ выделится, и рядом появится, что нажать.

:::example {id="recipes/copy/denied" label="Отказ" preview=sandbox log="sf-button-copy-copy-failed" log_console=true log_open=false}
:::

## Когда брать

| Что копируют | Как дать |
|:---|:---|
| Ключ, токен, длинный идентификатор в поле | Кнопка в конце поля, источник — поле: `target="#id"` |
| Команда, отрывок кода | Блок кода: кнопку в шапке он ставит сам |
| Номер или ссылка в строке таблицы | Маленькая кнопка рядом со значением, источник — `value` с самим значением |
| Несколько значений в одной карточке | Кнопка у каждого, у каждой своё имя |
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
| Блок кода | [Подсветка кода](/ru/components/content/highlight/) | `<pre><code data-lang="bash" data-lines>`; кнопка «Копировать код» в шапке блока |
| Таблица | [Таблицы](/ru/utilities/tables/tables-default-parameters/) | `table`; кнопка `size="1/3"` в ячейке рядом со значением |
| Подсказка при отказе | строка страницы | по событию `sf-button-copy-copy-failed` с `code: "denied"`: «Выделено — нажмите Ctrl+C» (⌘C на Mac), пока держится результат |

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
  попадают; блок кода делает это сам.
- **Отказ браузера — не тупик.** Кнопка выделяет текст и сообщает экранному
  диктору, что нажать; страница показывает ту же фразу рядом с кнопкой,
  чтобы её видел и зрячий человек.

## Копия для ИИ

```html
<!-- Рецепт SIMAI Framework «Копирование», выпуск ui-b4a77681f0a7.
Правила:
1. Кнопка копирования — sf-button-copy рядом со значением; источник — target="#id" (значение поля или текст элемента) или value (сам текст), не оба сразу.
2. Копируется значение целиком: источник — поле или полный текст, не сокращённая строка с экрана.
3. label называет, что копируется: «Скопировать API-ключ»; в строке таблицы — со значением строки: «Скопировать номер заказа ORD-2026-0042». Никогда несколько кнопок «Копировать» подряд.
4. Ключ в поле: input readonly, sf-button-copy target="#id" внутри sf-input-field после поля.
5. Команды и код — <pre><code data-lang="…" data-lines>: кнопку в шапке ставит блок кода, номера строк в буфер не попадают. Своей кнопки рядом не ставьте.
6. В таблице — sf-button-copy size="1/3" в ячейке рядом со значением; icon="link" у ссылки.
7. Отказ браузера (sf-button-copy-copy-failed, code "denied"): кнопка уже выделила текст; покажите рядом «Выделено — нажмите Ctrl+C» (⌘C на Mac) на duration миллисекунд. -->
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
      <span class="text-1/2 color-on-surface-variant" data-copy-hint hidden></span>
    </div>
  </section>
</div>
<script type="module">
  const mac = /Mac|iPhone|iPad/.test(navigator.platform);
  document.addEventListener('sf-button-copy-copy-failed', (event) => {
    const hint = event.target.parentElement.querySelector('[data-copy-hint]');
    if (event.detail.code !== 'denied' || !hint) return;
    hint.textContent = `Выделено — нажмите ${mac ? '⌘C' : 'Ctrl+C'}`;
    hint.hidden = false;
    setTimeout(() => { hint.hidden = true; }, Number(event.target.getAttribute('duration')) || 2000);
  });
</script>
```

> **Что ещё в пути.** Копирование любой кнопкой с атрибутом и тот же отклик,
> что у кнопки копирования; подсказка «Выделено — нажмите Ctrl+C» и
> «Скопировано» видны у самой кнопки; имя кнопки — в подсказке Framework при
> наведении и с клавиатуры. Всё это приходит с ближайшими выпусками
> Framework; пока подсказку при отказе показывает страница. Как это будет
> выглядеть, показывает [прототип копирования](/proto/copy-anatomy.html).

## См. также

- [Кнопка копирования](/ru/smart/actions/copy-button/) — все настройки кнопки
- [Копирование текста](/ru/guide/functions/actions/copy-text/) — копирование из своего кода
- [Карточка записи](/ru/recipes/record-card/) — путь и ключ с кнопкой копирования
