// No entries: the empty slot is shown instead of the column.
const initialize = async () => {
  await customElements.whenDefined('sf-list-feed');
  const feed = document.querySelector('#list-feed-empty');
  if (!feed || feed.dataset.exampleReady === 'true') return;
  feed.dataset.exampleReady = 'true';
  feed.setItems([], {hasMore: false});
};

initialize();
