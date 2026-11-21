const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['form']);
  const form = document.querySelector('#form-contact');
  // «Изменить» opens the fields; a submit that is not cancelled returns to view.
  form.addEventListener('sf-form-submit', (event) => {
    console.log('Сохранить на сервере:', event.detail.value);
  });
};

start();

// Only for this example: the documentation frame may not send forms, and the
// browser then does not even report the submit. The press of a submit button
// hands the form its submit, as the browser does on a site. A site does not
// need this part.
document.addEventListener('click', (event) => {
  const button = event.target.closest?.('sf-form [type="submit"]');
  if (!button) return;
  event.preventDefault();
  button.form?.dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}));
}, true);
