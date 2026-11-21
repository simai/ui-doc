const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['tag-group', 'tag']);
  const chosen = document.querySelector('#tag-group-chosen');
  const show = document.querySelector('#tag-group-show');
  const status = document.querySelector('#tag-group-status');
  const say = () => {
    const many = status.selectedIds ?? [];
    chosen.textContent = `Показать: ${show.selected || 'ничего'}. Статус: ${many.length ? many.join(', ') : 'любой'}.`;
  };

  // The group reports the whole choice: ids, the tag pressed and whether it is chosen now.
  for (const group of [show, status]) {
    group.addEventListener('sf-tag-group-select', say);
  }
  say();
};

start();
