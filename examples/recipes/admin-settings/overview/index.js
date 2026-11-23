// An admin settings page: one section of the site's settings in one sf-form.
// The form draws the origin line under a field (its own value or closed
// above, «Вернуть общее»), holds «Сохранить» while the save runs, says
// «Сохранено в HH:MM» and asks «Уйти без сохранения?» before a link leaves
// with changes (guard). The page keeps only its own part: the danger question
// before a save, the server's answer and the publish item of the bar.
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// A dangerous value asks before the save, with what it does (C159 (1), (4)).
const askDanger = async () => {
  const box = document.createElement('div');
  box.innerHTML = `<sf-modal size="question" heading="Сохранить опасное изменение?"><div slot="content">
    <sf-confirm appearance="window" status="danger" question="Сохранить опасное изменение?"
      consequence="Режим обслуживания включится: посетители увидят «Идут работы»." accept-text="Сохранить" decline-text="Отмена"></sf-confirm></div></sf-modal>`;
  document.body.append(box);
  const modal = box.firstElementChild;
  await window.SF.whenDefined(['modal', 'confirm']);
  modal.open();
  const accepted = await new Promise((resolve) => {
    modal.querySelector('sf-confirm').addEventListener('sf-confirm-answer', (event) => resolve(Boolean(event.detail?.accepted)), {once: true});
    modal.addEventListener('sf-modal-close', () => resolve(false), {once: true});
  });
  modal.close();
  setTimeout(() => box.remove(), 400);
  return accepted;
};

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['form', 'alert-bar', 'modal', 'confirm-change']);
  const form = document.querySelector('#admin-settings-form');
  const bar = document.querySelector('#admin-settings-bar');
  const publish = document.querySelector('#admin-settings-publish');
  const change = document.querySelector('#admin-settings-change');

  // «Сохранить»: the page takes the save over, the form is busy until the answer.
  form.addEventListener('sf-form-submit', async (event) => {
    event.preventDefault();
    const value = event.detail.value;
    if (value.maint === true && !(await askDanger())) return;
    form.busy = true;
    await sleep(700);
    form.saved();
    docara.example.log('saved', {value, inherited: event.detail.inherited});
  });
  form.addEventListener('sf-form-reset-field', (event) => docara.example.log('reset-field', event.detail));
  form.addEventListener('sf-form-leave', (event) => docara.example.log('leave', event.detail));

  // The publish item: «Посмотреть» opens «было → станет», «Опубликовать» publishes.
  const done = () => { bar.items = []; docara.example.log('published', {}); };
  bar.addEventListener('sf-alert-bar-navigate', (event) => {
    if (event.detail?.id !== 'publish') return;
    event.preventDefault();
    publish.open();
  });
  bar.addEventListener('sf-alert-bar-acknowledge', (event) => {
    if (event.detail?.id === 'publish') done();
  });
  change.addEventListener('sf-confirm-change-answer', async (event) => {
    if (!event.detail?.accepted) { publish.close(); return; }
    await sleep(500);
    change.setAttribute('state', 'accepted');
    publish.close();
    done();
  });
};

start();

