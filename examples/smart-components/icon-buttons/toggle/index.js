// sf-button-icon does not flip pressed by itself: the page flips it on click,
// and the button draws the new state and aria-pressed.
const initialize = async () => {
  await customElements.whenDefined('sf-button-icon');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  for (const button of document.querySelectorAll('sf-button-icon[pressed]')) {
    button.onClick(() => {
      button.pressed = !button.pressed;
      docara.example.log('click', `${button.getAttribute('aria-label')} → pressed: ${button.pressed}`);
    });
  }
};

initialize();
