// shortcut-listen presses the button as a click does, so sf-button-press follows.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  const button = document.querySelector('sf-button[shortcut-listen][shortcut="alt+k"]');
  if (!button || button.dataset.exampleReady === 'true') return;
  button.dataset.exampleReady = 'true';
  button.addEventListener('sf-button-press', () => docara.example.log('sf-button-press', 'Поиск'));
};

initialize();
