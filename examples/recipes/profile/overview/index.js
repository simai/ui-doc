// A profile: the data is saved with «Сохранить» (the form holds it while the
// save runs and says «Сохранено в HH:MM»); the look applies at once
// (apply instant, C176); the password and the sessions are actions of their
// own, the sign-out asks in its row (C166 (4)).
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['form', 'confirm']);
  const form = document.querySelector('#profile-form');
  const look = document.querySelector('#profile-look-form');
  const lookState = document.querySelector('#profile-look-state');

  form.addEventListener('sf-form-submit', async (event) => {
    event.preventDefault();
    form.busy = true;
    await sleep(600);
    form.saved();
    docara.example.log('saved', event.detail.value);
  });
  look.addEventListener('sf-form-change', (event) => {
    lookState.textContent = 'Применено.';
    docara.example.log('look', event.detail);
  });
  document.querySelector('#profile-password').addEventListener('click', () => docara.example.log('password', {}));
  const out = document.querySelector('#profile-sign-out');
  out.addEventListener('click', () => {
    const row = document.querySelector('#profile-sessions-row');
    if (row.querySelector('sf-confirm')) return;
    const ask = document.createElement('sf-confirm');
    ask.setAttribute('appearance', 'inline');
    ask.setAttribute('status', 'danger');
    ask.setAttribute('question', 'Выйти на двух других устройствах? Там придётся войти заново.');
    ask.setAttribute('accept-text', 'Выйти');
    ask.setAttribute('decline-text', 'Отмена');
    row.append(ask);
    ask.addEventListener('sf-confirm-answer', (answer) => {
      docara.example.log('sign-out', {accepted: Boolean(answer.detail?.accepted)});
      setTimeout(() => ask.remove(), 300);
    });
  });
};

start();
