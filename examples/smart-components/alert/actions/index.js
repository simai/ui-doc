// The message stays where it is: the page does the action. Closing is
// remembered in memory here; a site would keep it for the person.
const dismissed = new Set();
const saveDismissed = (key) => dismissed.add(key);

const initialize = async () => {
  await customElements.whenDefined('sf-alert');
  const alert = document.querySelector('#alert-actions');
  const state = document.querySelector('#alert-actions-state');
  if (!alert || alert.dataset.exampleReady === 'true') return;
  alert.dataset.exampleReady = 'true';

  const openAddressForm = () => { state.textContent = 'Страница открыла бы форму адреса.'; };
  alert.onAction((action) => {
    if (action === 'edit-address') openAddressForm();
  });
  alert.onClose(() => {
    saveDismissed('delivery-warning');
    state.textContent = `Сообщение закрыто; запомнено: ${[...dismissed].join(', ')}`;
  });
};

initialize();
