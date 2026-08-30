const demo = document.querySelector('[data-layout-demo]');
const project = demo.querySelector('[data-project]');
const summary = demo.querySelector('[data-summary]');
const items = demo.querySelector('[data-items]');
const cards = [...demo.querySelectorAll('[data-item]')];
const values = [...demo.querySelectorAll('[data-value]')];
const recipe = demo.querySelector('[data-recipe]');
const buttons = [...demo.querySelectorAll('[data-layout]')].filter((item) => item.tagName === 'BUTTON');

const modes = {
  list: {
    project: 'grid gap-2',
    summary: 'flex flex-wrap items-cross-center content-main-between gap-1 p-2 radius-1 bg-primary-container color-on-primary-container',
    items: 'flex flex-col gap-1',
    card: 'grid grid-col-2 items-cross-center gap-1 p-2 radius-1 border border-outline-variant bg-surface-0',
    value: 'color-primary text-2 bold',
    recipe: 'flex flex-col gap-1'
  },
  cards: {
    project: 'grid gap-2',
    summary: 'flex flex-wrap items-cross-center content-main-between gap-1 p-2 radius-1 bg-primary-container color-on-primary-container',
    items: 'grid grid-col-1 sm:grid-col-3 gap-2',
    card: 'flex flex-col content-main-between gap-2 p-2 radius-1 border border-outline-variant bg-surface-0',
    value: 'color-primary text-3 bold',
    recipe: 'grid grid-col-1 sm:grid-col-3 gap-2'
  },
  focus: {
    project: 'grid grid-col-1 md:grid-col-3 gap-2',
    summary: 'flex flex-col content-main-between gap-2 p-2 radius-1 bg-primary-container color-on-primary-container md:col-span-1',
    items: 'grid grid-col-1 sm:grid-col-2 gap-1 md:col-span-2',
    card: 'grid grid-col-2 items-cross-center gap-1 p-2 radius-1 border border-outline-variant bg-surface-0',
    value: 'color-primary text-2 bold',
    recipe: 'grid grid-col-1 md:grid-col-3 gap-2'
  }
};

function select(layout) {
  const mode = modes[layout];
  project.className = mode.project;
  summary.className = mode.summary;
  items.className = mode.items;
  cards.forEach((card) => card.className = mode.card);
  values.forEach((value) => value.className = mode.value);
  recipe.textContent = mode.recipe;
  buttons.forEach((button) => {
    const active = button.dataset.layout === layout;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

buttons.forEach((button) => button.addEventListener('click', () => select(button.dataset.layout)));
select('list');
