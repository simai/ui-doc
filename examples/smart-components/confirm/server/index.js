// The same question with two server answers. On success the page sets
// state="accepted"; on failure it puts the question back with state="open"
// and says why in a status line, so the person can try again.
const initialize = async () => {
  await customElements.whenDefined('sf-confirm');
  const questions = [...document.querySelectorAll('sf-confirm[data-server]')];
  const status = document.querySelector('#confirm-server-status');
  const reset = document.querySelector('#confirm-server-reset');
  if (!questions.length || questions[0].dataset.exampleReady === 'true') return;
  questions[0].dataset.exampleReady = 'true';

  for (const confirm of questions) {
    confirm.addEventListener('sf-confirm-answer', (event) => {
      docara.example.log('sf-confirm-answer', event.detail);
      if (!event.detail.accepted) {
        confirm.state = 'declined';
        return;
      }
      if (status && confirm.dataset.server === 'fail') status.textContent = '';
      setTimeout(() => {
        if (confirm.dataset.server === 'ok') {
          confirm.state = 'accepted';
          docara.example.log('state', 'accepted');
          return;
        }
        confirm.state = 'open';
        docara.example.log('state', 'open');
        if (status) status.textContent = 'Не удалось удалить: файл открыт у другого участника. Попробуйте ещё раз.';
      }, 1200);
    });
  }
  reset?.addEventListener('click', () => {
    for (const confirm of questions) confirm.state = 'open';
    if (status) status.textContent = '';
    docara.example.log('example', 'restarted');
  });
};

initialize();
