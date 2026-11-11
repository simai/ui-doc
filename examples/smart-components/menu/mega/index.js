// «Каталог» has region: "catalog": it opens an area as wide as the header,
// a column per subsection. Without <template slot="region-catalog"> inside
// the menu, the area is drawn from the item's children. To show it without a
// click, the example opens it from code; the row closes it when it moves
// sections in or out of «Ещё», and the example opens it again until the
// reader opens or closes a branch.
const showOpen = async () => {
  await customElements.whenDefined('sf-menu');
  const menu = document.getElementById('row-region');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  let touched = false;
  const open = async () => {
    if (touched) return;
    for (const id of ['catalog']) await menu.open(id);
  };
  menu.addEventListener('sf-menu-toggle', (event) => {
    if (event.detail.source === 'user') touched = true;
  });
  menu.addEventListener('sf-menu-overflow', open);
  await menu.updateComplete;
  await open();
};

showOpen();
