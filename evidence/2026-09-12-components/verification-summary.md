# Verification summary

Статус ограниченного батча: `PASS_WITH_SOURCE_DEFECTS`.

- Docara build: 917 страниц, exit 0, `memory_limit=2G`.
- Static verification: 1804 HTML, 376747 локальных ссылок, 0 broken, exit 0.
- Example quality audit: 502 shared examples, 0 blockers, exit 0; два advisories относятся к `datepicker/text-states` и `gallery/delegated`, вне этого батча.
- Component reference audit: 4 выбранных компонента, 26 существующих примеров, 63 registry components, 59 остальных классифицированы, 0 blockers, exit 0.
- Browser smoke exact candidate: четыре страницы открываются без console errors; Modal проходит open/Escape/focus return; checkbox имеет `indeterminate=true`; mobile 390×844, RTL и dark не создают горизонтальное переполнение.
- Russian content audit остаётся красным из-за 72 ранее существовавших escaped-inline-code находок в разделе utilities; в четырёх изменённых component pages таких находок нет.

Подробные source defects и minimal repro находятся в `source-defects.md`. Lock, generated contracts и owner source не изменялись.
