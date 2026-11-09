// sf-button does not flip pressed by itself: the page flips it on
// sf-button-press, and the button draws the new state and aria-pressed. A
// button with text-pressed says the state in its label instead.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  for (const button of document.querySelectorAll('sf-button[pressed]')) {
    button.addEventListener('sf-button-press', () => {
      button.pressed = !button.pressed;
      const label = button.pressed && button.hasAttribute('text-pressed') ? button.getAttribute('text-pressed') : button.getAttribute('text');
      docara.example.log('sf-button-press', `${label} → pressed: ${button.pressed}`);
    });
  }
};

initialize();
