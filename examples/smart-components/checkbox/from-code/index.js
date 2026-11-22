const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  const form = document.querySelector('#checkbox-from-code-form');
  const submit = document.querySelector('#checkbox-from-code-submit');
  if (form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';

  // A person's tick sends change: the button follows it.
  const terms = await SF.createAsync('checkbox', {
    name: 'terms',
    value: 'accepted',
    label: 'Принимаю условия',
    onChange: (event) => submit.toggleAttribute('disabled', !event.target.checked),
  });
  form.prepend(terms);
  await terms.whenRendered();

  // setChecked() sends no change, so the page updates the button itself.
  document.querySelector('#checkbox-from-code-reset').addEventListener('click', () => {
    terms.setChecked(false);
    submit.toggleAttribute('disabled', true);
  });
};

start();
