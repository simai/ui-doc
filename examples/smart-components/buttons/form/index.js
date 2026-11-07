// A submit button sends its name and value with the form; onClick returns the
// element, and loading keeps the button's width while the work runs.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  const form = document.querySelector('#buttons-form');
  const exporter = document.querySelector('#buttons-form-export');
  if (!form || !exporter || form.dataset.exampleReady === 'true') return;
  form.dataset.exampleReady = 'true';
  // The example frame is sandboxed without allow-forms, so the browser never
  // fires submit here: the example reads the press of a submit button and
  // prints what the form would send. On a page, listen for submit itself.
  form.addEventListener('click', (event) => {
    const submitter = event.target.closest('button[type="submit"]');
    if (!submitter) return;
    event.preventDefault();
    const data = new FormData(form, submitter);
    docara.example.log('submit', `intent=${data.get('intent')}`);
  });
  form.addEventListener('reset', () => docara.example.log('reset', 'форма очищена'));
  exporter.onClick(() => {
    if (exporter.hasAttribute('loading')) return;
    docara.example.log('click', 'Экспортировать — loading');
    exporter.setAttribute('loading', '');
    setTimeout(() => {
      exporter.removeAttribute('loading');
      docara.example.log('готово', 'loading снят');
    }, 1500);
  });
};

initialize();
