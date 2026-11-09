// A file row asks before it deletes. The bin replaces the row with the
// question; «Удалить» waits while the "server" removes the file, shows the
// outcome and takes the row away; «Отмена» puts the row back. «Вернуть
// файлы» starts the example again.
const initialize = async () => {
  await customElements.whenDefined('sf-confirm');
  const body = document.querySelector('#confirm-files');
  const reset = document.querySelector('#confirm-files-reset');
  if (!body || body.dataset.exampleReady === 'true') return;
  body.dataset.exampleReady = 'true';
  const rows = body.innerHTML;

  const ask = (row) => {
    const saved = row.innerHTML;
    const cell = document.createElement('td');
    cell.colSpan = 3;
    const confirm = document.createElement('sf-confirm');
    confirm.setAttribute('question', `Удалить файл «${row.dataset.name}»? Его не будет у всех участников.`);
    confirm.setAttribute('confirm-id', row.dataset.file);
    confirm.setAttribute('accept-text', 'Удалить');
    confirm.setAttribute('destructive', '');
    cell.append(confirm);
    row.replaceChildren(cell);
    confirm.addEventListener('sf-confirm-answer', (event) => {
      docara.example.log('sf-confirm-answer', event.detail);
      if (!event.detail.accepted) {
        confirm.state = 'declined';
        setTimeout(() => {
          row.innerHTML = saved;
          row.querySelector('sf-button-icon')?.focus();
        }, 1200);
        return;
      }
      // The page removes the file; the question waits meanwhile.
      setTimeout(() => {
        confirm.state = 'accepted';
        docara.example.log('state', 'accepted');
        setTimeout(() => row.remove(), 1500);
      }, 1200);
    });
  };

  body.addEventListener('click', (event) => {
    const bin = event.target.closest('sf-button-icon');
    const row = bin?.closest('tr[data-file]');
    if (row) ask(row);
  });
  reset?.addEventListener('click', () => {
    body.innerHTML = rows;
    docara.example.log('example', 'files restored');
  });
};

initialize();
