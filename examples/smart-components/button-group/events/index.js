// change carries previous, value and item; select() and clear()
// send the same event.
const initialize = async () => {
  await customElements.whenDefined('sf-segmented');
  const group = document.querySelector('sf-segmented');
  if (!group || group.dataset.exampleReady === 'true') return;
  group.dataset.exampleReady = 'true';
  group.addEventListener('change', (event) => {
    const {previous, value, item} = event.detail;
    docara.example.log('change', {
      previous,
      value,
      item: item ? {value: item.value, label: item.label} : null,
    });
  });
  document.querySelector('[data-action="select"]').addEventListener('click', () => group.select('month'));
  document.querySelector('[data-action="clear"]').addEventListener('click', () => group.clear());
};

initialize();
