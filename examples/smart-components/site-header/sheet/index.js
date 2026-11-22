// The sheet is filled when the panel has opened, not with the page: a long
// documentation tree costs nothing until someone asks for it.
const buildDocumentationTree = () => {
  const menu = document.createElement('sf-menu');
  menu.setAttribute('label', 'Документация');
  menu.setAttribute('items', JSON.stringify([
    {id: 'start', label: 'Начало работы', href: '#start'},
    {id: 'forms', label: 'Формы', href: '#forms'},
    {id: 'navigation', label: 'Навигация', href: '#navigation'},
    {id: 'overlays', label: 'Окна и панели', href: '#overlays'},
  ]));
  return menu;
};

const initialize = async () => {
  await customElements.whenDefined('sf-header-site');
  const header = document.querySelector('#site-header-sheet');
  const state = document.querySelector('#site-header-sheet-state');
  if (!header || header.dataset.exampleReady === 'true') return;
  header.dataset.exampleReady = 'true';
  let opened = 0;

  header.addEventListener('sf-header-site-opened', () => {
    opened += 1;
    const sheet = header.querySelector('[slot="sheet"]');
    if (!sheet.childElementCount) sheet.replaceChildren(buildDocumentationTree());
    state.textContent = `Панель открыта ${opened} раз; дерево построено при первом открытии.`;
  });
};

initialize();
