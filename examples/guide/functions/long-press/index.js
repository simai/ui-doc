const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.longPress: a held touch opens the menu, a short press opens the card, the click after a press is swallowed.
const start = async () => {
  await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const card = document.getElementById('long-press-card');
  const status = document.getElementById('long-press-status');
  const watch = window.SF.longPress.watch(card, {
    press: () => {
      status.textContent = 'Долгое нажатие: открыто меню «⋯».';
      log('press', {ms: window.SF.longPress.ms});
    },
  });
  card.addEventListener('click', () => {
    if (watch.swallowed()) {
      log('click', 'swallowed');
      return;
    }
    status.textContent = 'Короткое нажатие: карточка открыта.';
    log('click', 'open');
  });
};

start();
