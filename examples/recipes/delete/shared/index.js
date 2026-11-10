// A shared file is asked about in its own row: other people lose it too.
// The bin turns the row into the question; «Удалить» is the red answer,
// «Отмена» puts the row back and returns focus to the bin. «Вернуть файлы»
// only resets the example once a file has gone.
const initialize = async () => {
  // sf-confirm is created on demand; the loader defines it when it appears.
  const body = document.querySelector('#shared-files');
  const reset = document.querySelector('#shared-reset');
  if (!body || body.dataset.exampleReady === 'true') return;
  body.dataset.exampleReady = 'true';
  const rows = body.innerHTML;

  const ask = (row) => {
    const saved = row.innerHTML;
    const cell = document.createElement('td');
    cell.colSpan = 3;
    const confirm = document.createElement('sf-confirm');
    confirm.setAttribute('question', `Удалить «${row.dataset.name}»? Файл пропадёт у всех участников проекта.`);
    confirm.setAttribute('confirm-id', row.dataset.file);
    confirm.setAttribute('accept-text', 'Удалить');
    confirm.setAttribute('status', 'danger');
    confirm.setAttribute('size', '1/2');
    cell.append(confirm);
    row.replaceChildren(cell);
    confirm.addEventListener('sf-confirm-answer', (event) => {
      if (!event.detail.accepted) {
        row.innerHTML = saved;
        row.querySelector('sf-button-icon')?.focus();
        return;
      }
      setTimeout(() => {
        confirm.state = 'accepted';
        setTimeout(() => { row.remove(); reset.hidden = false; }, 1200);
      }, 600);
    });
  };

  body.addEventListener('click', (event) => {
    const row = event.target.closest('sf-button-icon')?.closest('tr[data-file]');
    if (row) ask(row);
  });
  reset.addEventListener('click', () => {
    body.innerHTML = rows;
    reset.hidden = true;
  });
};

initialize();
