// The end of the list is sf-pagination appearance="more" after it; a host that
// lives on this page answers its request with the next portion.
const versions = (from, count) => Array.from({length: count}, (_, index) => {
  const number = from - index;
  return {id: `v${number}`, text: `Версия ${number}`, supporting: number % 2 ? 'Опубликована' : 'Черновик'};
});

const initialize = async () => {
  await Promise.all([customElements.whenDefined('sf-list'), customElements.whenDefined('sf-pagination')]);
  const list = document.querySelector('#list-more');
  const end = document.querySelector('#list-more-end');
  if (!list || !end || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.setItems({items: versions(12, 4)});
  let shown = 1;
  end.addEventListener('sf-pagination-load-more', () => {
    end.setAttribute('show-more-busy', '');
    setTimeout(() => {
      list.appendItems({items: versions(12 - shown * 4, 4)});
      shown += 1;
      end.setAttribute('current', String(shown));
      end.removeAttribute('show-more-busy');
    }, 500);
  });
};

initialize();
