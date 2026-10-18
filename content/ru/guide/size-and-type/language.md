---
title: "Язык интерфейса"
description: "Компоненты Framework сами подставляют часть слов: доступные имена кнопок, подписи по умолчанию, сообщения."
---

# Язык интерфейса

Компоненты Framework сами подставляют часть слов: доступные имена кнопок,
подписи по умолчанию, сообщения. Эта глава описывает, как компонент выбирает
язык этих слов по разметке страницы.

## Правило

Компоненты Framework говорят **по-английски по умолчанию** и **по-русски на
русской странице**. Речь об их собственных словах: доступных именах кнопок,
подписях по умолчанию, подсказках для клавиатуры, сообщениях.

Язык определяется одним правилом для всех компонентов. Компонент смотрит на
ближайший к себе атрибут `lang` — поиск проходит и через границы shadow DOM,
к элементам, внутри которых компонент собран. Если такого атрибута нет,
компонент смотрит на `lang` документа, а если нет и его, выбирает английский. `ru` и `ru-RU` — русский.

```html
<html lang="ru">
  …
  <sf-tag closable text="Отчёт"></sf-tag>
  <!-- кнопка удаления называется «Удалить» -->
</html>
```

У `sf-tag` по умолчанию `kind="checkbox"`; атрибут `closable` добавляет такому
тегу кнопку удаления.

Язык можно задать и для части страницы:

```html
<section lang="en">
  <sf-country-code></sf-country-code>
  <!-- поле и названия стран — по-английски -->
</section>
```

## Откуда берётся слово

Каждое слово компонент ищет в таком порядке и берёт первое найденное:

1. атрибут компонента — если подпись передана, она показывается как есть, на
   любом языке;
2. слово, которое проект зарегистрировал для этого языка (см. [Свой язык и явный выбор языка](#свой-язык-и-явный-выбор-языка));
3. слово, которое поставляет сам компонент;
4. шаги 2–3 для языка без региона: для `pt-BR` — `pt`;
5. шаги 2–3 для английского;
6. сам ключ слова — пропуск в переводе виден, а не превращается в пустое место.

Поэтому слово, которое проект не перевёл, показывается по-английски, а не на
случайном языке страницы.

## Свой язык и явный выбор языка

Компоненты поставляют английские и русские слова. Любой другой язык проект
добавляет сам, без изменения Framework:

```js
SF.language.registerAll('tr', {
  'sf-pagination': { showMoreText: 'Daha fazla göster' },
});
SF.language.use('tr');   // явно выбрать язык для всей страницы
SF.language.use(null);   // снять явный выбор и снова следовать атрибуту lang
```

- `SF.language.register(component, code, words)` добавляет слова одного
  компонента, `registerAll(code, byComponent)` — сразу нескольких. Слова
  дополняют уже зарегистрированные, а `words = null` убирает их для этого языка.
- `SF.language.use(code)` переключает язык сразу, без перезагрузки страницы:
  Smart-компоненты перерисовываются сами. Первую отрисовку определяет атрибут
  `lang`. Явный выбор задаёт и язык форматирования: компоненты, которые сами
  называют месяцы и дни недели через `Intl` (календарь `sf-datepicker`), берут
  выбранный язык вместе с регионом (`use('ar-EG')`). Регион выбирает и
  цифры: по данным `Intl` браузера `ar` пишет год латинскими цифрами, а
  `ar-EG` — арабско-индийскими. Код без региона (`use('ru')`, `lang="ru"`)
  `Intl` дополняет регионом по своему правилу для языка: `ru` форматирует как
  `ru-RU`, `en` — как `en-US`. Собственный атрибут `locale` компонента
  сильнее явного выбора.
- `SF.language.use(null)` снимает явный выбор: язык снова определяет
  ближайший атрибут `lang`, и компоненты перерисовываются.
- `SF.language.current(node)` возвращает действующий язык узла вместе с
  регионом (`ru-ru`; без аргумента — язык документа), `known(component)` —
  языки, для которых проект зарегистрировал слова компонента, `components()` —
  компоненты, для которых зарегистрированы слова, `onChange(listener)` —
  подписка на смену языка и зарегистрированных слов; возвращает функцию
  отписки.
- `SF.language.forget()` удаляет все зарегистрированные слова и снимает явный
  выбор языка.

Для своих элементов проект использует то же правило: `SF.pageLanguage(node)`
возвращает язык узла без региона (`ru`), `SF.pageText(dictionary, key, node, component?)` —
слово из словаря на этом языке. Словарь устроен как
`{ en: { key: '…' }, ru: { key: '…' } }`. Если слова нет на языке узла,
`pageText` берёт язык без региона, затем `en`, а если нет и его — возвращает
сам ключ. Слова, зарегистрированные через `SF.language`, `pageText` находит по
имени тега узла; четвёртый аргумент `component` задаёт имя явно.

Переключатель языка на странице делает две вещи: выбирает язык для
компонентов и сам ставит `lang` и `dir` документу. Явный выбор сильнее
атрибута, поэтому порядок вызовов не важен, а `lang` нужен вспомогательным
технологиям и стилям по `:lang()`:

```js
function switchLanguage(code, direction = 'ltr') {
  SF.language.use(code);                      // слова и форматы компонентов
  document.documentElement.lang = code;       // язык документа
  document.documentElement.dir = direction;   // направление письма
}

switchLanguage('ar', 'rtl');
```

Framework не запоминает выбранный язык: ни cookie, ни записи в браузере, как
у темы (`sf-theme`), у языка нет. Храните выбор сами и восстанавливайте его до
`core.js` встроенным скриптом: он ставит `lang` и `dir` на `<html>`, и
компоненты сразу рисуются на этом языке.

```html
<script>
  try {
    const saved = JSON.parse(localStorage.getItem('project-language') || 'null');
    if (saved) {
      document.documentElement.lang = saved.code;
      document.documentElement.dir = saved.dir;
    }
  } catch {}
</script>
```

Переключатель сохраняет выбор той же записью:
`localStorage.setItem('project-language', JSON.stringify({code, dir: direction}))`.
`SF.language.use()` после восстановления нужен, только если выбран язык с
регионом, который нужен календарю и числам; `SF.language` есть сразу после
`core.js`.

Подпись, переданная атрибутом, сильнее словаря (шаг 1 в
[Откуда берётся слово](#откуда-берётся-слово)), поэтому при смене языка
`aria-label` и другие подписи из атрибутов страница переставляет сама.

### Пример переключателя

Переключатель выбирает русский, английский или арабский. Арабских слов
компоненты не поставляют: пример регистрирует их для пагинации и тега, а для
арабского ставит странице `dir="rtl"`. Подписи, которые пример не перевёл,
остаются английскими. Строка внизу показывает действующий язык и подпись
кнопки удаления тега, которую видят вспомогательные технологии.

:::example {id="guide/language-switch" label="Русский, английский и арабский"}
:::

Что важно заметить:

- **`SF.language`, `SF.pageLanguage` и `SF.pageText` приходят с `core.js`**
  и есть сразу после его выполнения, в том числе на странице без
  Smart-элементов (см. [Когда доступен каждый `SF.*`](/ru/guide/connection/loader/#события-загрузчика)).
  Регистрировать слова можно и после первой отрисовки: компоненты
  перерисуются сами.
- **Перерисовку по языку получает каждый Smart-элемент,** в том числе
  компонент проекта на `SF.smart.SfBaseElement`: базовый класс подписывает
  его на `SF.language.onChange`.
- **`use()` не меняет атрибут `lang`,** а изменение `lang` после загрузки
  компоненты не отслеживают. Чтобы сменить язык без перезагрузки, вызывайте
  `SF.language.use()`; `SF.pageLanguage()` и `SF.pageText()` учитывают
  явный выбор.
- **Направление письма язык не задаёт:** `dir` ставится отдельно (см. [Начало и конец вместо левого и правого](/ru/guide/size-and-type/directions/#начало-и-конец-вместо-левого-и-правого)).
- **Ключ слова — не имя атрибута.** Подпись кнопки удаления у `sf-tag`
  задаёт атрибут `close-label`, а в словаре это слово `remove`. Ключ, которого
  у компонента нет, ничего не меняет: компонент показывает своё слово по
  порядку из [Откуда берётся слово](#откуда-берётся-слово).

**Ключи словарей компонентов.** Слова регистрируются под именем тега:

| Компонент | Ключ | Слово `en` | Слово `ru` |
|:---|:---|:---|:---|
| `sf-alert` | `closeLabel` | Close alert | Закрыть сообщение |
| `sf-avatar` | `ariaLabel` | Avatar | Аватар |
| `sf-breadcrumbs` | `ariaLabel` | Breadcrumb | Хлебные крошки |
| `sf-breadcrumbs` | `expandLabel` | Show hidden breadcrumbs | Показать скрытые крошки |
| `sf-color` | `choose` | Choose a colour | Выбрать цвет |
| `sf-color` | `clear` | Use the inherited colour | Вернуть унаследованный |
| `sf-color` | `inherited` | inherited | наследуется |
| `sf-color` | `custom` | Custom | Свой |
| `sf-datepicker` | `previousMonth` | Previous month | Предыдущий месяц |
| `sf-datepicker` | `nextMonth` | Next month | Следующий месяц |
| `sf-datepicker` | `previousYears` | Previous years | Предыдущие годы |
| `sf-datepicker` | `nextYears` | Next years | Следующие годы |
| `sf-datepicker` | `chooseMonth` | Choose a month | Выберите месяц |
| `sf-datepicker` | `chooseYear` | Choose a year | Выберите год |
| `sf-datepicker` | `presets` | Quick ranges | Быстрый выбор |
| `sf-datepicker` | `customRange` | Custom range | Свой период |
| `sf-datepicker` | `preset_today` | Today | Сегодня |
| `sf-datepicker` | `preset_yesterday` | Yesterday | Вчера |
| `sf-datepicker` | `preset_last7Days` | Last 7 days | Последние 7 дней |
| `sf-datepicker` | `preset_last30Days` | Last 30 days | Последние 30 дней |
| `sf-datepicker` | `preset_thisWeek` | This week | Эта неделя |
| `sf-datepicker` | `preset_thisMonth` | This month | Этот месяц |
| `sf-datepicker` | `preset_lastMonth` | Last month | Прошлый месяц |
| `sf-drawer` | `closeLabel` | Close drawer | Закрыть панель |
| `sf-dropdown` | `search` | Search | Поиск |
| `sf-file-preview` | `ariaLabel` | File | Файл |
| `sf-file-preview` | `downloadLabel` | Download file | Скачать файл |
| `sf-file-preview` | `removeLabel` | Remove file | Удалить файл |
| `sf-file-upload` | `linkText` | Click to upload | Выберите файл |
| `sf-file-upload` | `text` | or drag and drop | или перетащите его сюда |
| `sf-file-upload` | `retry` | Try again | Повторить |
| `sf-modal` | `close` | Close | Закрыть |
| `sf-modal` | `minimize` | Minimize | Свернуть |
| `sf-modal` | `title` | Dialog | Окно |
| `sf-page-header` | `star` | Add to favourites | В избранное |
| `sf-page-header` | `unstar` | Remove from favourites | Убрать из избранного |
| `sf-page-header` | `allSites` | for all sites | для всех сайтов |
| `sf-pagination` | `ariaLabel` | Result pages | Страницы результатов |
| `sf-pagination` | `pagesLabel` | Pages: | Страницы: |
| `sf-pagination` | `pageLabel` | Page | Страница |
| `sf-pagination` | `previousLabel` | Previous page | Предыдущая страница |
| `sf-pagination` | `nextLabel` | Next page | Следующая страница |
| `sf-pagination` | `lastLabel` | Last | Последняя |
| `sf-pagination` | `totalLabel` | Total: | Всего: |
| `sf-pagination` | `selectedLabel` | Selected: | Отмечено: |
| `sf-pagination` | `showMoreText` | Show more | Показать ещё |
| `sf-pagination` | `pageSizeLabel` | Per page: | На странице: |
| `sf-pagination` | `actionApplyText` | Apply | Применить |
| `sf-pagination` | `actionForAllLabel` | For all | Для всех |
| `sf-pagination` | `actionsLabel` | Action for the selected records | Действие с выбранными элементами |
| `sf-pagination` | `actionChooseLabel` | Choose an action | Выберите действие |
| `sf-pagination` | `actionsRegionLabel` | Actions for the selected | Действия с отмеченными |
| `sf-pagination` | `clearSelectionLabel` | Clear the selection | Снять выделение |
| `sf-pagination` | `showCountLabel` | Show the number | Показать количество |
| `sf-pagination` | `countingLabel` | Counting | Считаем |
| `sf-pagination` | `firstLabel` | First | В начало |
| `sf-pagination` | `pageFieldLabel` | Page: | Страница: |
| `sf-spinner` | `label` | Loading... | Загрузка… |
| `sf-steps` | `ariaLabel` | Steps | Шаги |
| `sf-steps` | `completedLabel` | Completed | Завершено |
| `sf-steps` | `errorLabel` | Error | Ошибка |
| `sf-tag` | `remove` | Remove | Удалить |
| `sf-toast` | `closeLabel` | Close message | Закрыть сообщение |
| `sf-tree-item` | `openLabel` | Open item | Развернуть |
| `sf-tree-item` | `closeLabel` | Close item | Свернуть |

Таблица собрана из словарей компонентов выпуска и полна: других встроенных
слов, которые заменяются через `SF.language`, у компонентов нет.

Пример добавляет арабский язык к тегу и пагинации:

```js
SF.language.registerAll('ar', {
  'sf-tag': { remove: 'إزالة' },
  'sf-pagination': { previousLabel: 'الصفحة السابقة', nextLabel: 'الصفحة التالية' },
});
```

## Что остаётся за проектом

Framework переводит только собственные слова компонентов. Проект сам отвечает
за:

- данные: названия записей, разделов, вариантов выбора;
- форматы чисел и дат — их приложение передаёт уже отформатированными.
  Исключение — компоненты, которые сами показывают своё значение: календарь
  `sf-datepicker` пишет дату по маске `format` (цифры латинские, например
  `DD.MM.YYYY`), а названия месяцев и дней недели берёт из `Intl` на языке
  страницы;
- формы множественного числа.

## Правила для нового компонента

- Свои слова компонент берёт через `pageText`; английское слово лежит в
  словаре, в записи `en`.
- Атрибут с подписью всегда важнее словаря. Слово читается так:
  `this.getAttribute('close-label') || SF.pageText(TEXT, 'remove', this)`.
  Не берите слово из значения свойства по умолчанию: со значением `'Remove'`
  компонент не отличит «атрибут не задан» от «задано английское слово» и на
  русской странице покажет английское. Значение по умолчанию у такого
  свойства — пустая строка.
- Компонент не читает язык браузера и не откатывается к русскому, если
  страница не назвала язык.
- Язык для форматирования дат и чисел внутри компонента берётся из того же
  правила, вместе с регионом (`ru-RU`), и учитывает явный выбор
  `SF.language.use()`.

## Смотрите также

- [Направление текста](/ru/guide/size-and-type/directions/) — направление текста.
- [Языки](/ru/guide/size-and-type/languages/) — краткая памятка по языкам и добавлению своего.
- [Smart-компоненты](/ru/smart-components/) — языковое поведение каждого компонента.
