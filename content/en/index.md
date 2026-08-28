:::hero {variant=compact padding=xl}
# SIMAI Framework — from utilities to smart components

Build responsive, maintainable web interfaces in one system: from design
tokens and CSS utilities to ready-made components and Smart Components with
behavior and state.

[Get started](/en/start/introduction/)
:::

## One interface language — four levels

:::features
- :icon[foundation]{size=2 container=circle variant=tonal scheme=primary} **Core.** Base styles, design tokens, themes, and the Loader provide a shared project foundation.
- :icon[tune]{size=2 container=circle variant=tonal scheme=secondary} **Utilities.** Compact classes control layout, spacing, sizing, color, typography, and states directly in markup.
- :icon[widgets]{size=2 container=circle variant=tonal scheme=tertiary} **Components.** Ready-made interface elements provide reusable structure, styles, and loading rules.
- :icon[smart_toy]{size=2 container=circle variant=tonal scheme=info} **Smart Components.** Web components add behavior, state, events, and a programmatic API when markup alone is not enough.
:::

## Start with simple markup

Utilities share common scales and semantic tokens. Responsive conditions and
states use prefixes, so the path from a first block to a complete interface
stays consistent.

:::example {label="Result"}
```html
<style>
@import url('/en/_docara/vendor/simai-framework/typography/5.4.0/core.css');
@import url('/en/_docara/vendor/simai-framework/typography/5.4.0/utility.full.css');

:root { color-scheme: light dark; --demo-surface: #fff; --demo-container: #f1f3f6; --demo-low: #f8f9fb; --demo-text: #1b1b1f; --demo-muted: #5f6368; --demo-outline: #d4d7dc; --demo-primary: #075fce; --demo-on-primary: #fff; --demo-primary-container: #d8e7ff; --demo-tertiary-container: #f2dcff; }
@media (prefers-color-scheme: dark) { :root { --demo-surface: #111318; --demo-container: #1d2026; --demo-low: #17191f; --demo-text: #e4e2e8; --demo-muted: #c3c6cf; --demo-outline: #454850; --demo-primary: #a8c8ff; --demo-on-primary: #003064; --demo-primary-container: #164778; --demo-tertiary-container: #50395d; } }
body { margin: 0; padding: 1.25rem; color: var(--sf-on-surface,var(--demo-text)); background: var(--sf-surface-0,var(--demo-surface)); }
.adaptive-demo { display: grid; gap: .875rem; }
.adaptive-demo__toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .75rem; }
.adaptive-demo__eyebrow { display: block; margin-bottom: .2rem; color: var(--sf-primary,var(--demo-primary)); font-size: .7rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.adaptive-demo__toolbar strong { font-size: .95rem; }
.adaptive-demo__switches { display: inline-flex; gap: .25rem; padding: .25rem; border: 1px solid var(--sf-outline-variant,var(--demo-outline)); border-radius: var(--sf-radius-1,.75rem); background: var(--sf-surface-container,var(--demo-container)); }
.adaptive-demo__switches button { appearance: none; min-height: 2.5rem; padding: .5rem .875rem; border: 0; border-radius: var(--sf-radius-1\/2,.5rem); color: var(--sf-on-surface-variant,var(--demo-muted)); background: transparent; font: inherit; font-weight: 600; cursor: pointer; }
.adaptive-demo__switches button[aria-pressed="true"] { color: var(--sf-on-primary,var(--demo-on-primary)); background: var(--sf-primary,var(--demo-primary)); box-shadow: var(--sf-shadow-1,0 1px 3px rgb(0 0 0 / 20%)); }
.adaptive-demo__workbench { display: grid; grid-template-columns: minmax(16rem,.75fr) minmax(0,1.25fr); min-height: 21rem; overflow: hidden; border: 1px solid var(--sf-outline-variant,var(--demo-outline)); border-radius: var(--sf-radius-2,1rem); background: var(--sf-surface-container-low,var(--demo-low)); }
.adaptive-demo__editor { min-width: 0; padding: 1rem; color: #eef4ff; background: #111722; }
.adaptive-demo__editor-head { display: flex; align-items: center; justify-content: space-between; gap: .75rem; margin-bottom: 1rem; color: #aab6c8; font-size: .72rem; }
.adaptive-demo__editor-head span:last-child { padding: .2rem .5rem; border: 1px solid #344156; border-radius: 999px; }
.adaptive-demo__source { display: grid; gap: .45rem; margin: 0; font: 600 .76rem/1.55 ui-monospace,SFMono-Regular,Menlo,monospace; white-space: pre-wrap; }
.adaptive-demo__source-line { display: block; margin-inline: -.5rem; padding: .25rem .5rem; border-left: 2px solid transparent; border-radius: .35rem; color: #8c9aae; opacity: .38; transition: opacity 220ms ease,background-color 220ms ease,border-color 220ms ease; }
.adaptive-demo__source-line.is-active { color: #dce7f7; opacity: .72; }
.adaptive-demo__source-line.is-current { border-left-color: #63d4ff; color: #fff; background: rgb(69 183 255 / 13%); opacity: 1; }
.adaptive-demo__prefix { color: #63d4ff; }
.adaptive-demo__stage-wrap { display: grid; place-items: center; min-width: 0; padding: 1rem; }
.adaptive-demo__stage { box-sizing: border-box; width: 15rem; max-width: 100%; overflow: hidden; border: 1px solid var(--sf-outline-variant,var(--demo-outline)); border-radius: var(--sf-radius-2,1rem); background: var(--sf-surface-container-low,var(--demo-low)); box-shadow: 0 12px 32px rgb(0 0 0 / 10%); transition: width 420ms ease; }
.adaptive-demo__stage[data-size="tablet"] { width: 27rem; }
.adaptive-demo__stage[data-size="desktop"] { width: 100%; }
.adaptive-demo__browser { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .5rem .75rem; border-bottom: 1px solid var(--sf-outline-variant,var(--demo-outline)); color: var(--sf-on-surface-variant,var(--demo-muted)); background: var(--sf-surface-0,var(--demo-surface)); font-size: .75rem; }
.adaptive-demo__dots { display: flex; gap: .25rem; }
.adaptive-demo__dots span { width: .5rem; height: .5rem; border-radius: 50%; background: var(--sf-outline,var(--demo-outline)); }
.adaptive-demo__canvas { padding: .75rem; }
.adaptive-demo__card { transition: padding 420ms ease, border-radius 420ms ease, background-color 420ms ease, color 420ms ease, box-shadow 420ms ease; }
.adaptive-demo__visual { min-height: 6.5rem; border-radius: var(--sf-radius-1,.75rem); background: radial-gradient(circle at 28% 25%,rgb(255 255 255 / 55%),transparent 24%),linear-gradient(135deg,var(--sf-primary-container,var(--demo-primary-container)),var(--sf-tertiary-container,var(--demo-tertiary-container))); display: grid; place-items: center; color: var(--sf-on-primary-container,var(--demo-text)); font-size: 1.6rem; font-weight: 800; }
.adaptive-demo__stage[data-size="desktop"] .adaptive-demo__visual { width: 8rem; flex: 0 0 8rem; }
.adaptive-demo__meta { display: flex; flex-wrap: wrap; gap: .375rem; }
.adaptive-demo__meta span { padding: .25rem .5rem; border-radius: 999px; background: color-mix(in srgb,currentColor 10%,transparent); font-size: .75rem; }
.adaptive-demo__status { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; color: var(--sf-on-surface-variant,var(--demo-muted)); font-size: .78rem; }
.adaptive-demo__status code { padding: .25rem .5rem; border-radius: .4rem; color: var(--sf-primary,var(--demo-primary)); background: var(--sf-primary-container,var(--demo-primary-container)); font-weight: 700; }
@media (max-width: 52rem) { .adaptive-demo__workbench { grid-template-columns: 1fr; } .adaptive-demo__editor { min-height: 12rem; } }
@media (max-width: 36rem) { body { padding: 1rem; } .adaptive-demo__toolbar { align-items: stretch; } .adaptive-demo__switches { display: grid; grid-template-columns: repeat(3,1fr); width: 100%; } .adaptive-demo__switches button { padding-inline: .5rem; } .adaptive-demo__stage-wrap { padding: .75rem; } }
@media (prefers-reduced-motion: reduce) { .adaptive-demo__stage,.adaptive-demo__card { transition: none; } }
</style>

<div class="adaptive-demo" data-adaptive-demo>
    <header class="adaptive-demo__toolbar">
        <div><span class="adaptive-demo__eyebrow">Live markup</span><strong>Choose a viewport — see the active modifiers</strong></div>
        <div class="adaptive-demo__switches" role="group" aria-label="Demo viewport size">
            <button type="button" data-mode="0">Phone</button>
            <button type="button" data-mode="1">Tablet</button>
            <button type="button" data-mode="2">Desktop</button>
        </div>
    </header>
    <section class="adaptive-demo__workbench">
        <div class="adaptive-demo__editor" aria-label="Responsive class example">
            <div class="adaptive-demo__editor-head"><span>interface-card.html</span><span>HTML</span></div>
            <code class="adaptive-demo__source"><span>&lt;article class="</span><span class="adaptive-demo__source-line" data-variant="0">  p-1 flex flex-col gap-1</span><span class="adaptive-demo__source-line" data-variant="1">  <b class="adaptive-demo__prefix">md:</b>p-2 <b class="adaptive-demo__prefix">md:</b>grid <b class="adaptive-demo__prefix">md:</b>grid-col-2</span><span class="adaptive-demo__source-line" data-variant="2">  <b class="adaptive-demo__prefix">lg:</b>p-3 <b class="adaptive-demo__prefix">lg:</b>flex <b class="adaptive-demo__prefix">lg:</b>flex-row</span><span>"&gt; … &lt;/article&gt;</span></code>
        </div>
        <div class="adaptive-demo__stage-wrap">
            <div class="adaptive-demo__stage" data-stage data-size="mobile">
                <div class="adaptive-demo__browser"><span class="adaptive-demo__dots"><span></span><span></span><span></span></span><span data-width>360 px</span></div>
                <div class="adaptive-demo__canvas">
                    <article data-card>
                        <div class="adaptive-demo__visual">SF</div>
                        <div><p class="label-medium m-0 m-bottom-1/2">Interface block</p><h2 class="sf-h-3 m-0 m-bottom-1">One markup for every screen</h2><p class="sf-body-medium m-0 m-bottom-1">Layout changes while the meaning stays the same.</p><div class="adaptive-demo__meta"><span>Tokens</span><span>Utilities</span></div></div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <footer class="adaptive-demo__status"><code data-condition aria-live="polite"></code><span data-explanation></span></footer>
</div>

<script>
const demo = document.querySelector('[data-adaptive-demo]');
const stage = demo.querySelector('[data-stage]');
const card = demo.querySelector('[data-card]');
const width = demo.querySelector('[data-width]');
const condition = demo.querySelector('[data-condition]');
const explanation = demo.querySelector('[data-explanation]');
const sourceLines = [...demo.querySelectorAll('[data-variant]')];
const buttons = [...demo.querySelectorAll('[data-mode]')];
const modes = [
    { size: 'mobile', width: '360 px', condition: 'no prefix', explanation: 'Base classes apply at every width.', classes: 'adaptive-demo__card p-1 flex flex-col gap-1 radius-2 bg-surface-0 shadow-1' },
    { size: 'tablet', width: '768 px', condition: 'md: from 720 px', explanation: 'The tablet gets more space and two columns.', classes: 'adaptive-demo__card p-2 grid grid-col-2 gap-2 radius-2 bg-surface-0 shadow-2' },
    { size: 'desktop', width: '1200 px', condition: 'lg: from 960 px', explanation: 'On desktop the card becomes horizontal and more prominent.', classes: 'adaptive-demo__card p-3 flex flex-row items-center gap-3 radius-3 bg-primary-container color-on-primary-container shadow-3' }
];
function show(index) {
    stage.dataset.size = modes[index].size;
    width.textContent = modes[index].width;
    card.className = modes[index].classes;
    condition.textContent = modes[index].condition;
    explanation.textContent = modes[index].explanation;
    buttons.forEach((button, buttonIndex) => button.setAttribute('aria-pressed', buttonIndex === index ? 'true' : 'false'));
    sourceLines.forEach((line, lineIndex) => { line.classList.toggle('is-active', lineIndex <= index); line.classList.toggle('is-current', lineIndex === index); });
}
buttons.forEach((button, index) => button.addEventListener('click', () => show(index)));
show(0);
</script>
```
:::

## Why the system is easier to work with

:::columns
### Responsive behavior is part of the language

Breakpoint and state conditions compose with utilities. The same approach
covers screen sizes, `hover`, `focus`, and other scenarios.

[Learn the fundamentals](/en/fundamentals/)

---

### Design stays consistent

Sizes, colors, radii, shadows, and typography build on shared primitives and
semantic tokens. Themes can change without rewriting the purpose of every
element.

[Explore fundamentals](/en/fundamentals/)

---

### Abstraction grows with the task

Start with one utility, move to a ready-made component, and add a Smart
Component only when the interface needs behavior and state.

[Compare the layers](/en/start/introduction/)

---

### Delivery is pinned precisely

The documentation project records exact Framework revisions and verifies the
generated static result, helping a team reproduce the same build.

[Read the setup guide](/en/start/project-setup/)
:::

## From first look to working interface

:::steps
1. **Load the foundation.** Include Core and only the Framework layers the project needs.
2. **Build the first block.** Use utilities and semantic tokens directly in markup.
3. **Reuse stable patterns.** Choose components for repeated interface scenarios.
4. **Add behavior.** Bring in Smart Components when state and events are required.
:::

## Documentation for your task

:::features
- **[Start](/en/start/introduction/).** Installation, setup, and the first page.
- **[Fundamentals](/en/fundamentals/).** Modifier language, scales, themes, and typography.
- **[Utility catalog](/en/utilities/).** CSS utilities grouped by purpose.
- **[Components](/en/framework-components/introduction/).** Architecture and loading guidance.
- **[Smart Components](/en/smart-components/introduction/).** Architecture, lifecycle, and integration.
:::
