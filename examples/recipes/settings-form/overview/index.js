// A settings form: sections are cards, the answers sit under the last card.
// Saving checks the one required field first; an empty name keeps the form
// and puts the cursor into the field, a filled one reports the save in a
// toast in the corner. «Отмена» puts the starting values back.
const initialize = async () => {
  await Promise.all(['sf-input', 'sf-button'].map((tag) => customElements.whenDefined(tag)));
  const form = document.querySelector('#settings-form');
  const name = document.querySelector('#settings-name');
  const toasts = document.querySelector('#settings-toasts');
  if (!form || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';

  name.addEventListener('input', () => {
    if (String(name.value ?? '').trim()) name.removeAttribute('invalid');
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!String(name.value ?? '').trim()) {
      name.setAttribute('invalid', '');
      name.focus();
      docara.example.log('invalid', {field: 'name'});
      return;
    }
    const toast = document.createElement('sf-toast');
    toast.setAttribute('status', 'success');
    toast.setAttribute('icon', 'check_circle');
    toast.setAttribute('title', 'Настройки сохранены');
    toast.setAttribute('duration', '5000');
    toasts.append(toast);
    docara.example.log('submit', Object.fromEntries(new FormData(form)));
  });
  form.addEventListener('reset', () => {
    name.removeAttribute('invalid');
    docara.example.log('reset', {});
  });
};

initialize();
