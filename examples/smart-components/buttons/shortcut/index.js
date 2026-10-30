// shortcut-listen presses the button as a click does, so sf-button-press follows.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  const button = document.querySelector('sf-button[shortcut-listen][shortcut="alt+k"]');
  const status = document.querySelector('#buttons-shortcut-status');
  if (!button || button.dataset.exampleReady === 'true') return;
  button.dataset.exampleReady = 'true';
  let presses = 0;
  button.addEventListener('sf-button-press', () => {
    presses += 1;
    if (status) status.textContent = `Кнопка поиска нажата: ${presses}.`;
  });
};

initialize();
