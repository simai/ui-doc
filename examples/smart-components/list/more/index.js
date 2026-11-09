// A host that lives on this page answers the request for the next page.
const versions = (from, count) => Array.from({length: count}, (_, index) => {
  const number = from - index;
  return {id: `v${number}`, text: `Версия ${number}`, supporting: number % 2 ? 'Опубликована' : 'Черновик'};
});

const initialize = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-more');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setItems({items: versions(12, 4), options: {hasMore: true}});
  let next = 8;
  list.addEventListener('sf-list-load-more', () => {
    setTimeout(() => {
      list.appendItems({items: versions(next, 4), options: {hasMore: next > 4}});
      next -= 4;
    }, 500);
  });
};

initialize();
