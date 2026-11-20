// The question window: «Отмена», Escape, the cross and the backdrop answer
// «нет» and close the window themselves. On «Удалить меню» the page closes
// the window; opening it again asks the question again.
const initialize = async () => {
  await customElements.whenDefined('sf-confirm');
  const confirm = document.querySelector('#confirm-window');
  const modal = document.querySelector('sf-modal[modal-id="confirm-window-menu"]');
  if (!confirm || confirm.dataset.exampleReady === 'true') return;
  confirm.dataset.exampleReady = 'true';
  confirm.addEventListener('sf-confirm-answer', (event) => {
    docara.example.log('sf-confirm-answer', event.detail);
    if (!event.detail.accepted) return;
    modal?.close?.();
    confirm.setAttribute('state', 'open');
  });
};

initialize();
