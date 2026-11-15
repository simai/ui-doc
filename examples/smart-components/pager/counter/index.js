// A record card walks the whole list (total), not one page of it: at the edge
// of the loaded page the request carries the next index and an empty id, and
// the page loads the next page of the list into items.
const PAGE = 20;
const record = (index) => ({id: String(1040 + index), title: `Заявка № ${1040 + index}`});
const page = (number) => Array.from({length: PAGE}, (_, offset) => record(number * PAGE + offset));

const initialize = async () => {
  await customElements.whenDefined('sf-pager');
  const pager = document.querySelector('#pager-counter');
  if (!pager || pager.dataset.exampleReady === 'true') return;
  pager.dataset.exampleReady = 'true';
  const status = document.querySelector('#pager-counter-status');
  let loaded = 1;
  pager.items = page(0);
  pager.addEventListener('sf-pager-navigate', ({detail}) => {
    if (detail.index != null && detail.index >= pager.items.length) {
      const wanted = Math.floor(detail.index / PAGE);
      const more = [];
      for (let number = loaded; number <= wanted; number += 1) more.push(...page(number));
      loaded = wanted + 1;
      pager.items = [...pager.items, ...more];
      status.textContent = `Загружена страница ${loaded} списка.`;
    }
  });
  pager.addEventListener('sf-pager-change', ({detail}) => {
    status.textContent = `Открыта ${detail.item?.title ?? 'заявка'}. Загружено страниц списка: ${loaded}.`;
  });
};

initialize();
