// setValue and setAll write values without events; show opens the popup
// down to one setting; reset puts the declared values back and sends changed
// for each one that moved. Each answers with its outcome.

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const settings = document.querySelector('#settings-api');
  const values = document.querySelector('#settings-api-values');
  const print = () => { values.textContent = JSON.stringify(settings.values); };
  settings.addEventListener('sf-settings-changed', print);
  print();
  const calls = {
    setValue: () => ['setValue("theme", "dark")', settings.setValue('theme', 'dark')],
    setAll: () => ['setAll({font: "l", sound: false})', settings.setAll({font: 'l', sound: false})],
    show: async () => ['show("lang")', await settings.show('lang')],
    reset: () => ['reset()', settings.reset()],
    missing: () => ['setValue("zoom", 2)', settings.setValue('zoom', 2)],
  };
  // sf-button hands data-* to its inner button, so the press is read from
  // whichever of the two carries data-call.
  document.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-call]');
    if (!button) return;
    event.stopPropagation();
    const [name, result] = await calls[button.dataset.call]();
    docara.example.log(name, result);
    print();
  });
};

initialize();
