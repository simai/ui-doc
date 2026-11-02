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

### Admin

A section menu, a list with search and filters, a record card. Open a record,
filter the list, change a column's width. The demo data is in Russian.

:::internal_preview {size=tall title="Admin interface"}
[Open the demo](/demos/home/admin/)
:::

[Open on its own page](/demos/home/admin/)

### Chat

A list of conversations, the message feed and a composer with attachments.

:::example {id="smart-components/chat-window/embedded" label="Chat" preview=sandbox}
:::

[About the chat](/ru/pro/chat/) (in Russian)

### Editor

A page of blocks: text, headings, lists and notes. Try typing right in the example.

:::example {id="home/editor" label="Editor"}
:::

[About the editor](/ru/pro/editor/content-editor/) (in Russian)

The admin, chat and editor are [SIMAI Pro](/ru/pro/) components under their
own licence; the rest of SIMAI Framework is open under Apache-2.0.

## Three steps

1. Connect the stylesheet and the script from the CDN.
2. Write the classes or the component's tag.
3. Open the page — the loader fetches what the page uses.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261102.1106/distr/core/css/core.min.css">
<script>window.sfPath = 'https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261102.1106/distr/';</script>
<script src="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261102.1106/distr/core/js/core.min.js"></script>

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
- **[Background effects](https://effects.simai.io/)** Live backgrounds for first screens.
- **[Working with AI](/ru/guide/standards/ai/)** The `ai.json` index and a text version of every page.
:::

---

**SIMAI Framework** · release `ui-2d39b617a719` ·
[GitHub](https://github.com/simai/ui-source) ·
[Report a problem](https://github.com/simai/ui-source/issues) ·
[Versions](/ru/guide/connection/versions/) ·
[Apache-2.0](https://github.com/simai/ui-source/blob/main/LICENSE)
