// A branch of the row opens from the arrow beside the section name. To show
// the panels without a click, the example opens the path to the current page
// from code: «Каталог» below the row, «Насосное оборудование» beside it. The row
// closes its panels when it moves sections in or out of «Ещё»; until the
// reader opens or closes a branch, the example opens the path again then.
const showOpen = async () => {
  await customElements.whenDefined('sf-menu');
  const menu = document.getElementById('row-panels');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  let touched = false;
  const open = async () => {
    if (touched) return;
    for (const id of ['catalog', 'pumps']) await menu.open(id);
  };
  menu.addEventListener('sf-menu-toggle', (event) => {
    if (event.detail.source === 'user') touched = true;
  });
  menu.addEventListener('sf-menu-overflow', open);
  await menu.updateComplete;
  await open();
};

showOpen();
