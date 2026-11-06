// The bar stores nothing: the page hears what the person did and keeps it.
// Here the events are only written under the bar.
const initialize = async () => {
  await customElements.whenDefined('sf-alert-bar');
  const bar = document.querySelector('#alert-bar-overview');
  const output = document.querySelector('#alert-bar-overview-output');
  if (!bar || !output || bar.dataset.exampleReady === 'true') return;
  bar.dataset.exampleReady = 'true';
  const say = (text) => { output.value = text; };
  bar.addEventListener('sf-alert-bar-navigate', (event) => {
    event.preventDefault();
    say(`Переход: ${event.detail.href} (${event.detail.id})`);
  });
  bar.addEventListener('sf-alert-bar-acknowledge', (event) => say(`Отмечено, что видели: ${event.detail.id}`));
  bar.addEventListener('sf-alert-bar-close', (event) => say(`Скрыто: ${event.detail.id}, hide=${event.detail.hide}`));
  bar.addEventListener('sf-alert-bar-minimize', (event) => say(event.detail.minimized ? 'Плашка свёрнута' : 'Плашка развёрнута'));
};

initialize();
