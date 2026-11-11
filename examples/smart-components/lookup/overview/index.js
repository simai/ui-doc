// input, then change, once per pick or removal; detail says what happened.
const initialize = async () => {
  await customElements.whenDefined('sf-input-lookup');
  const lookup = document.querySelector('sf-input-lookup[name="members"]');
  if (!lookup || lookup.dataset.exampleReady === 'true') return;
  lookup.dataset.exampleReady = 'true';
  lookup.addEventListener('change', (event) => docara.example.log('change', {action: event.detail.action, value: event.detail.value}));
};

initialize();
