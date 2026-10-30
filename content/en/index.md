:::hero {variant=compact padding=2xl media=none effect="neon-horizon" effect_theme=auto effect_settings='{"intensity": 30}'}
# An interface with no build step: one CSS file and one script

SIMAI Framework is CSS utilities, ready components and Smart Components for
websites, portals and admin interfaces. It loads from a CDN, with no npm and
no bundler: the loader fetches only what the page uses.

[Start in 5 minutes](/ru/guide/introduction/quick-start/)
[GitHub](https://github.com/simai/ui-source)
:::

The full documentation is written in Russian; the guide and catalogue links
on this page open the Russian pages. Components follow the page language:
their own words (calendar months, button labels, hints) appear in English on
an English page.

## Admin interface

A section menu, a list with search, filters and sorting, and a record card,
all built from Smart Components over demo data. Open a record, filter the
list, change a column's width. The demo data is in Russian.

:::internal_preview {size=tall title="Admin interface"}
[Open the demo](/demos/home/admin/)
:::

[Open on its own page](/demos/home/admin/)

## Code in 30 seconds

Save the page as `index.html` and open it in a browser. Styles, utilities and
a button load from the CDN.

```html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Первая страница на SIMAI Framework</title>
  <link rel="icon" href="data:,">
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261030.1224/distr/core/css/core.min.css">
</head>
<body>
  <main class="p-4">
    <article class="p-4 bg-surface-container radius-2">
      <h1 class="sf-h-2 m-bottom-2">SIMAI Framework подключён</h1>
      <p class="sf-body-medium color-on-surface">
        Стили, токены и утилиты работают.
      </p>
      <button type="button" class="sf-button sf-button--default sf-button--primary sf-button--size-1">
        <span class="sf-button-text-container">Кнопка на классах</span>
      </button>
    </article>
  </main>

  <script>
    window.sfPath = 'https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261030.1224/distr/';
    window.SF_BOOT_CONFIG = {preloader: {enabled: false}};
  </script>
  <script src="https://cdn.jsdelivr.net/npm/@simai-studio/ui@5.20261030.1224/distr/core/js/core.min.js"></script>
</body>
</html>
```

[Quick start: running it and checking the connection](/ru/guide/introduction/quick-start/) (in Russian)

## Find your task

:::features
- **[Connecting](/ru/guide/connection/project-setup/)** From the CDN or from your own files, and the order to connect them.
- **[Layouts](/ru/guide/layouts/)** A page made of sections and blocks.
- **[Components](/ru/components/)** Buttons, fields, cards and other elements made of classes.
- **[Smart Components](/ru/smart-components/)** Tags with behaviour: a table, a menu, forms.
:::

:::features
- **[Themes](/ru/guide/colour/themes/)** Light, dark and your own theme from one colour.
- **[JavaScript API](/ru/guide/connection/js-api/)** Objects and events for your own scripts.
- **[Working with AI](/ru/guide/standards/ai/)** How to give an assistant the documentation.
- **[Updating](/ru/guide/connection/updating/)** Moving between releases and the change journal.
:::

## Why SIMAI Framework

:::features
- **[No build step](/ru/guide/introduction/quick-start/)** Classes and tags in the markup load the modules they need. Only what the page uses is fetched.
- **[Ready admin screens](/ru/smart-components/)** A table, filters, a record card and a menu are already Smart Components.
- **[Predictable updates](/ru/guide/connection/versions/)** A project pins a release, and the change journal says what to adjust when moving on.
- **[Open source](https://github.com/simai/ui-source/blob/main/LICENSE)** Apache-2.0 licence, commercial projects included.
:::

## See it work

### A card that follows its container

The card rearranges itself by the width of its panel, not of the window: the
`cq-sm:` and `cq-md:` classes respond to the container's width. Drag the
panel's right edge.

:::example {id="home/container" label="Container query"}
:::

### A theme from one colour

Pick a primary colour, and the generator builds the palettes and the theme
variables.

:::example {id="smart-components/theme-generator/overview" label="Theme generator"}
:::

For first screens and cards there is a
[catalogue of background effects](https://effects.simai.io/), a separate
site with live examples.

## For AI assistants

Give the assistant the documentation's address. The `ai.json` index lists
every page, and every page has a text version. More in
[Working with AI](/ru/guide/standards/ai/) (in Russian).

```text
Документация SIMAI Framework: https://ui.simai.io/ (индекс для ИИ — /ai.json).
Правила: https://ui.simai.io/ru/guide/standards/ai/ai.md
```

---

**SIMAI Framework** · release `ui-d6292bd6fc34` ·
[GitHub](https://github.com/simai/ui-source) ·
[Report a problem](https://github.com/simai/ui-source/issues) ·
[Versions](/ru/guide/connection/versions/) ·
[Apache-2.0](https://github.com/simai/ui-source/blob/main/LICENSE)
