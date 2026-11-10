// The first screen of an empty section: why it is empty and the one thing to
// do. The action does it at once here — the first product appears, the
// header gets its count and its own «Добавить» — and «Начать сначала» goes
// back to the empty screen.
const initialize = async () => {
  await Promise.all(['sf-empty-state', 'sf-list', 'sf-header-page', 'sf-button'].map((tag) => customElements.whenDefined(tag)));
  const header = document.querySelector('#first-header');
  const empty = document.querySelector('#first-empty');
  const state = document.querySelector('#first-state');
  const list = document.querySelector('#first-list');
  const reset = document.querySelector('#first-reset');
  if (!header || header.dataset.exampleReady === 'true') return;
  header.dataset.exampleReady = 'true';

  // The header takes its slots when it starts, so its «Добавить» is in the
  // markup from the start and only shown once there is a first product.
  const add = document.querySelector('#first-add');

  state.addEventListener('click', (event) => {
    if (!event.target.closest('sf-button')) return;
    list.setItems({items: [{id: 'p1', text: 'Термокружка «Северный ветер»', supporting: '1 290 ₽ · Черновик', icon: 'inventory_2'}], options: {hasMore: false}});
    empty.hidden = true;
    list.hidden = false;
    reset.hidden = false;
    header.setAttribute('count', '1');
    add.hidden = false;
    docara.example.log('add', {first: true});
  });
  reset.addEventListener('click', () => {
    empty.hidden = false;
    list.hidden = true;
    reset.hidden = true;
    header.removeAttribute('count');
    add.hidden = true;
    state.querySelector('sf-button')?.focus();
  });
};

initialize();
