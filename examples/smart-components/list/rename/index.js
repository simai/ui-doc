// Rename in place; the page refuses an empty name and puts the old one back.
const initializeRenameExample = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-rename');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  const folders = [
    {id: 'd1', text: 'Договоры', icon: 'folder'},
    {id: 'd2', text: 'Счета', icon: 'folder'},
    {id: 'd3', text: 'Фото товаров', icon: 'folder'},
  ];
  list.setItems({items: folders, options: {hasMore: false}});
  list.addEventListener('sf-list-rename', (event) => {
    const folder = folders.find((item) => item.id === event.detail.id);
    if (!event.detail.text.trim()) {
      event.preventDefault();
      return;
    }
    if (folder) folder.text = event.detail.text;
  });
};

initializeRenameExample();
