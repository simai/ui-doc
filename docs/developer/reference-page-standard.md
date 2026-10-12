# Reference page standard

One structure per catalogue page type — utility, component, Smart component —
so a reader finds the same thing in the same place on every page, and so the
parts that restate the release are generated from it instead of copied by
hand. It replaces `utility-page-reference.md` and
`component-page-reference.md`; pages did not follow those, because nothing
checked them.

`scripts/audit-reference-pages.mjs` enforces it (part of `docs:check`) for
every page enrolled in `config/reference-pages.json`; migrated pages are
enrolled and the list only grows. `scripts/build-reference-sections.mjs`
writes the generated sections of enrolled utility and component pages.

Model: MDN and Tailwind for utilities, Vue and MDN for components. A
catalogue page is reference, not a lesson: it answers «what is it, what does
it look like, what exactly can I write». Lessons stay in the guide and link
here.

## Every page

- Front matter: `title` (the Russian name), `description` (one sentence: what
  it does for the reader). No badges in the body: the generated sections
  carry the facts badges repeated.
- `# <title>`, then one or two sentences: what it does and when to choose
  it. No «Модификатор …», no CSS property lists here — that is the classes
  section.
- `## Пример` with one live `:::example`, right after the introduction.
- Section names are exactly the ones below, in that order. Optional sections
  may be left out; nothing else may be added at H2. Detail goes into H3
  inside the sections listed.
- Language rules of the guide: Russian, present tense, plain; no history
  («раньше», «теперь», «было», «стало», «в новой версии», «с версии»), no
  plans («будет», «появится»), no versions in prose.
- Every class in an example or code block exists in the release
  (`docs:example-classes:check`); every fact is read from the pinned release.

## Utility page — `content/ru/utilities/**`

| # | Section | Required | Written by |
|:--|:---|:---|:---|
| 1 | `## Пример` | yes | hand (`:::example`) |
| 2 | `## Классы` | yes | generated from `distr/utility/<family>/default/css` |
| 3 | `## Адаптивность и состояния` | when the family has variants | generated from the family's variant folders |
| 4 | `## Применение` | yes | hand: how to choose, common combinations, short snippets |
| 5 | `## Ограничения` | no | hand: what does not work, direction (LTR/RTL), accessibility |
| 6 | `## См. также` | no | hand: links |

`## Классы` is a table `| Класс | CSS |`, one row per class of the family's
default variant, in the order the release declares them.
`## Адаптивность и состояния` lists each variant prefix the family ships
(`sm:` … `xxl:` with their widths, `hover:`, `focus:` …) and one example
class. The families a page documents are named in its
`config/reference-pages.json` entry.

## Component page — `content/ru/components/**`

| # | Section | Required | Written by |
|:--|:---|:---|:---|
| 1 | `## Пример` | yes | hand |
| 2 | `## Разметка` | yes | hand: the minimal correct markup and which parts are required |
| 3 | `## Варианты` | when the component has them | hand: one H3 per axis (вид, статус, размер …) with a snippet |
| 4 | `## Состояния` | when it has them | hand: disabled, loading, active … |
| 5 | `## Доступность` | yes | hand |
| 6 | `## JavaScript` | when it has a public runtime API | hand now; generated from `public-js-api.json` once the release ships it |
| 7 | `## Классы` | yes | generated from `distr/component/<name>/css` |
| 8 | `## См. также` | no | hand |

`## Классы` groups the component's public classes: the block, its parts
(`sf-x-…`) and modifiers (`sf-x--…`), sizes apart, and the modifiers the
change journal keeps only for compatibility with their replacement.

## Smart component page — `content/ru/smart-components/**`

| # | Section | Required | Written by |
|:--|:---|:---|:---|
| 1 | `## Пример` | yes | hand |
| 2 | `## Применение` | yes | hand: when to use it, the decisions a reader makes; one H3 per topic |
| 3 | `## Доступность` | yes | hand: the scenario (labels, focus, keys in context) |
| 4 | `## Справочник API` | yes | generated (`scripts/build-smart-reference.mjs`) |
| 5 | `## См. также` | no | hand |

A page for a component the release does not ship is removed and its address
redirected; a catalogue does not describe what a reader cannot load.

## Generated sections

A generated section is rewritten whole by its generator and checked by
`--check`; editing it by hand fails the check. To change its content, change
the release (manifest, CSS) or the generator.
