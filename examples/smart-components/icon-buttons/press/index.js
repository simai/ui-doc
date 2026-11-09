// The press arrives as click. A submit icon button sends its form like any
// submit button.
const initialize = async () => {
  await customElements.whenDefined('sf-button-icon');
  const form = document.querySelector('#icon-buttons-search');
  if (!form || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  for (const button of document.querySelectorAll('sf-button-icon[data-action]')) {
    button.onClick(() => docara.example.log('click', button.getAttribute('aria-label')));
  }
  // The example frame is sandboxed without allow-forms, so the browser never
  // fires submit here: the example reads the press of the submit button and
  // prints what the form would send. On a page, listen for submit itself.
  form.addEventListener('click', (event) => {
    if (!event.target.closest('button[type="submit"]')) return;
    event.preventDefault();
    docara.example.log('submit', `${form.getAttribute('action')}, q=${form.querySelector('sf-input').value}`);
  });
};

initialize();
