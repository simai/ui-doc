// The overview answers «is anything wrong?» first, then «how are we doing?».
// Problems come first and leave when fixed; each tile opens its own report.
const initialize = async () => {
  await Promise.all(['sf-list-attention', 'sf-tile-metric'].map((tag) => customElements.whenDefined(tag)));
  const root = document.querySelector('#overview-root');
  if (!root || root.dataset.exampleReady === 'true') return;
  root.dataset.exampleReady = 'true';
  const attention = document.querySelector('#overview-attention');
  attention.addEventListener('sf-list-attention-navigate', (event) => {
    event.preventDefault();
    docara.example.log('sf-list-attention-navigate', event.detail);
  });
  attention.addEventListener('sf-list-attention-apply', (event) => {
    docara.example.log('sf-list-attention-apply', event.detail);
    if (event.detail.action === 'renew') attention.items = attention.items.filter((item) => item.id !== event.detail.id);
  });
  root.addEventListener('click', (event) => {
    const tile = event.target.closest('sf-tile-metric[href]');
    if (!tile) return;
    event.preventDefault();
    docara.example.log('open', {href: tile.getAttribute('href')});
  });
};

initialize();
