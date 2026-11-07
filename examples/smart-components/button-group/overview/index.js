// The group sends change on every new choice; the log shows the value.
const initialize = async () => {
  await customElements.whenDefined('sf-button-group');
  const group = document.querySelector('sf-button-group');
  if (!group || group.dataset.exampleReady === 'true') return;
  group.dataset.exampleReady = 'true';
  group.addEventListener('change', (event) => {
    docara.example.log('change', `value: ${event.detail.value}`);
  });
};

initialize();
