// The page saves first: it cancels change, waits for the server (a timer
// here) and answers with setValue. Push is refused, so its switch stays.

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const settings = document.querySelector('#settings-server');
  const save = (id) => new Promise((resolve) => setTimeout(() => resolve(id !== 'push'), 600));
  settings.addEventListener('sf-settings-change', async (event) => {
    event.preventDefault();
    const {id, value} = event.detail;
    docara.example.log('сохраняем…', `${id}: ${JSON.stringify(value)}`);
    if (await save(id)) {
      docara.example.log(`setValue("${id}", ${JSON.stringify(value)})`, settings.setValue(id, value));
    } else {
      docara.example.log('сервер отказал', id);
    }
  });
};

initialize();
