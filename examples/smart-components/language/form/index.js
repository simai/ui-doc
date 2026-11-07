// The picker is a form field: submit sends its code under its name, reset
// brings back the value it was written with. The example keeps the form on
// the page and lists what it would send.

const initialize = async () => {
  await customElements.whenDefined('sf-language');
  const form = document.querySelector('#language-form');
  if (!form || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  // The example frame is sandboxed without allow-forms, so the browser never
  // fires submit here: the example reads the press of the submit button and
  // prints what the form would send. On a page, listen for submit itself.
  form.addEventListener('click', (event) => {
    if (!event.target.closest('button[type="submit"]')) return;
    event.preventDefault();
    docara.example.log('submit', `language=${new FormData(form).get('language')}`);
  });
  form.addEventListener('reset', () => docara.example.log('reset', 'значение снова de'));
};

initialize();
