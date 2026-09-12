# Verification summary

Статус ограниченного батча: `PASS_WITH_SOURCE_DEFECTS`.

- Untouched lock-consistent build: `build_components_reference_base_20260912`, 917 страниц, exit 0, `memory_limit=2G`.
- Static verification выполнена только для untouched base build: 1804 HTML, 376747 локальных ссылок, 0 broken, exit 0. Повторная проверка после создания overlay также вернула 0 broken, что подтверждает неизменность base build.
- Exact-candidate browser overlay: `build_components_reference_overlay_20260912_correction`, создан как отдельная copy-on-write копия base build. Он намеренно отличается от lock projection; `verify-static` для него не запускался и lock-consistency не заявляется.
- Example quality audit: 502 shared examples, 0 blockers, exit 0; два advisories относятся к `datepicker/text-states` и `gallery/delegated`, вне этого батча.
- Component reference audit: 4 выбранных компонента, 26 существующих примеров, 63 registry components, 59 остальных классифицированы, 0 blockers, exit 0.
- Browser smoke exact candidate выполнен только на отдельном overlay: четыре страницы открываются без console errors; Modal проходит open/Escape/focus return; checkbox имеет `indeterminate=true`; mobile 390×844, RTL и dark не создают горизонтальное переполнение.
- Russian content audit остаётся красным из-за 72 ранее существовавших escaped-inline-code находок в разделе utilities; в четырёх изменённых component pages таких находок нет.

Подробные source defects и minimal repro находятся в `source-defects.md`. Lock, generated contracts и owner source не изменялись.

## Correction receipt

- Primary user outcome: отделить доказательство целостности lock-сборки от браузерной проверки exact candidate.
- Reuse/ideality: использованы штатный полный build, штатный `verify-static` и copy-on-write копия; новый build-механизм не добавлялся.
- Changed surface: только эти два evidence-файла; страницы, примеры, source, lock и owner packages не изменялись.
- Removal review: прежнее двусмысленное утверждение об одной общей сборке удалено.
- Primary scenario: untouched base проходит static verification; отдельный overlay проходит browser smoke.
- Protected complexity: lock projection и exact candidate остаются разными проверочными контурами и не подменяют друг друга.
- Verdict: `PASS_WITH_SOURCE_DEFECTS`; два ранее зафиксированных source defects остаются неизменными и не блокируют документационный батч.
