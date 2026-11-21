const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['bulk-actions']);
  const bar = document.querySelector('#bulk-all');
  const said = document.querySelector('#bulk-all-said');

  // scope says what the action goes to: the rows on screen or all under the filter.
  bar.addEventListener('sf-bulk-actions-action', (event) => {
    const {id, scope, count} = event.detail;
    said.textContent = `Действие ${id}: ${scope === 'all' ? 'все по фильтру' : 'выбранные на странице'}, ${count}.`;
    bar.result({id, ok: count, failed: []});
  });
  bar.addEventListener('sf-bulk-actions-clear', () => {
    bar.count = 12; // the example keeps its page selected
  });
};

start();
