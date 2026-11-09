// The waiting state is shown the way a press makes it: the pressed answer
// carries the button's spinner. The specimen answers «Удалить» for the
// person and nobody applies the answer, so it keeps waiting.
const initialize = async () => {
  await customElements.whenDefined('sf-confirm');
  const confirm = document.querySelector('sf-confirm[data-specimen="pending"]');
  if (!confirm || confirm.dataset.exampleReady === 'true') return;
  confirm.dataset.exampleReady = 'true';
  confirm.confirm();
};

initialize();
