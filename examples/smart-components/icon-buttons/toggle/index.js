// sf-button-icon does not flip pressed by itself: the page flips it on click,
// and the button draws the new state and aria-pressed. A button with
// label-pressed says the state in its name instead.
const initialize = async () => {
  await customElements.whenDefined('sf-button-icon');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  for (const button of document.querySelectorAll('sf-button-icon[pressed]')) {
    button.onClick(() => {
      button.pressed = !button.pressed;
      const name = button.pressed && button.hasAttribute('label-pressed') ? button.getAttribute('label-pressed') : button.getAttribute('aria-label');
      docara.example.log('click', `${name} → pressed: ${button.pressed}`);
    });
  }
};

initialize();
