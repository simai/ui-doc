// No rows: the list shows sf-empty-state with empty-text as its heading.
const initialize = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-empty');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setItems({items: [], options: {hasMore: false}});
};

initialize();
