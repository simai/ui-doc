// The container is the live region; each toast removes itself when closed.
// The page keeps the deleted file until the toast is gone, so «Вернуть»
// can put it back.
const list = document.querySelector('#toast-undo-files');
const container = document.querySelector('#toast-undo-container');
const button = document.querySelector('#toast-undo-delete');

button.addEventListener('click', async () => {
  const file = list.firstElementChild;
  if (!file) return;
  file.remove();
  await customElements.whenDefined('sf-toast');
  const toast = document.createElement('sf-toast');
  toast.setAttribute('status', 'info');
  toast.setAttribute('icon', 'delete');
  toast.setAttribute('heading', `${file.textContent} в корзине`);
  toast.setAttribute('action-text', 'Вернуть');
  toast.setAttribute('action', 'undo');
  toast.setAttribute('duration', '8000');
  toast.setAttribute('close-label', 'Закрыть сообщение');
  container.append(toast);

  const restoreFile = () => {
    list.prepend(file);
    toast.close();
  };
  toast.onAction((action) => {
    if (action === 'undo') restoreFile();
  });
  toast.onClose(() => console.log('Сообщение закрыто'));
});
