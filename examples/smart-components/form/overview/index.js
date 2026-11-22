const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['form']);
  const form = document.querySelector('#form-button');
  const saved = document.querySelector('#form-button-saved');

  // «Сохранить» found every field right: value is what the form would send.
  form.addEventListener('sf-form-submit', (event) => {
    saved.textContent = `Сохранено: ${JSON.stringify(event.detail.value)}`;
  });
  form.addEventListener('sf-form-invalid', (event) => {
    saved.textContent = `Исправьте поля: ${event.detail.fields.join(', ')}.`;
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
