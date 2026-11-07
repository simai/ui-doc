// sf-button does not flip pressed by itself: the page flips it on
// sf-button-press, and the button draws the new state and aria-pressed.
const initialize = async () => {
  await customElements.whenDefined('sf-button');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  for (const button of document.querySelectorAll('sf-button[pressed]')) {
    button.addEventListener('sf-button-press', () => {
      button.pressed = !button.pressed;
      docara.example.log('sf-button-press', `${button.getAttribute('text')} → pressed: ${button.pressed}`);
    });
  }
};

initialize();
