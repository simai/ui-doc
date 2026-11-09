:::hero {layout=split padding=2xl media=none effect="assembly" effect_theme=auto effect_settings='{"intensity": 55, "shapes": "interface", "interactive": false}'}
# An interface from ready parts

Components and Smart Components from a CDN — no npm, no build step.

[Start in 5 minutes](/ru/guide/introduction/quick-start/)

[Components](/ru/components/)
:::

The full documentation is written in Russian; the guide and catalogue links
on this page open the Russian pages. Components follow the page language:
their own words (calendar months, button labels, hints) appear in English on
an English page.

## What you can build

The admin, the chat and the editor are live: click and type in them. A tab
loads when you open it.

:::internal_preview {size=tall title="Admin, chat and editor"}
[Open the demo](/demos/home/showcase/)
:::

[The admin on its own page](/demos/home/admin/). The admin, the chat and
the editor are component sets under the Pro licence, listed below; SIMAI
Framework is open under Apache-2.0.

## Three steps

1. Connect the stylesheet and the script from the CDN.
2. Write the classes or the component's tag.
3. Open the page — the loader fetches what the page uses.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261108.2127/distr/core/css/core.min.css">
<script>window.sfPath = 'https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261108.2127/distr/';</script>
<script src="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261108.2127/distr/core/js/core.min.js"></script>

<sf-button text="Save"></sf-button>
```

[Quick start: a full page and checking the connection](/ru/guide/introduction/quick-start/) (in Russian)

## Find your task

:::features
- **[Connecting](/ru/guide/connection/project-setup/)** From the CDN or from your own files.
- **[Components](/ru/components/)** Buttons, fields, cards made of classes.
- **[Smart Components](/ru/smart/)** Tags with behaviour: a table, a menu, forms.
- **[Layouts](/ru/guide/layouts/)** A page made of sections and blocks.
:::

:::features
- **[Themes](/ru/guide/colour/themes/)** Light, dark and your own theme from one colour.
- **[Updating](/ru/guide/connection/updating/)** A pinned release and the change journal.
- **[Component sets](/ru/guide/sets/)** What a set is, connecting, versions and the licence.
- **[Working with AI](/ru/guide/standards/ai/)** The `ai.json` index and a text version of every page.
:::

## Component sets

A set is ready Smart Components for one task on top of SIMAI Framework.
Each set has its own site; until it does, the set is documented here (in
Russian).

:::features
- **[Admin — admin](/ru/pro/admin/)** Menu, work screens, settings. Pro · own site coming.
- **[Data — view](/ru/pro/admin/table/)** A table with sorting and filters, record properties, kanban. Pro · coming.
- **[Chat — chat](/ru/pro/chat/)** Message feed, composer, thread list. Pro · own site coming.
- **[Mail — mail](/ru/pro/mail/)** Letter builder and viewer. Pro · own site coming.
:::

:::features
- **[Editor — editor](/ru/pro/editor/editor/)** Page and text editor. Pro · own site coming.
- **Charts — chart** Charts and diagrams. Pro · coming.
- **[Effects — effects](https://effects.simai.io/)** Background effects and animations. Free · released.
- **[How sets work](/ru/guide/sets/)** Connecting in one line, versions, licence.
:::

---

**SIMAI Framework** · release `ui-d6f01121baca` ·
[GitHub](https://github.com/simai/ui-source) ·
[Report a problem](https://github.com/simai/ui-source/issues) ·
[Versions](/ru/guide/connection/versions/) ·
[Apache-2.0](https://github.com/simai/ui-source/blob/main/LICENSE)
