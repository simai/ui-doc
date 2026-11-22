const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Modal', (Modal) => {
  if (Modal.registry.has('edit-profile')) return;
  let savedName = 'Анна Смирнова';

  const form = document.createElement('div');
  form.className = 'flex flex-col gap-2';
  form.innerHTML = `
    <label class="sf-input sf-input--size-1 sf-input--bordered flex flex-col"><span class="sf-input-label flex"><span class="sf-input-text">Имя</span></span><span class="sf-input-field items-cross-center transition flex"><input type="text" name="name" autocomplete="name"></span></label>
    <p class="m-0 color-error" role="status"></p>`;
  const input = form.querySelector('input');
  const warning = form.querySelector('[role="status"]');
  input.value = savedName;

  const button = (label, look) => {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = `sf-button ${look} sf-button--size-1`;
    node.innerHTML = `<span class="sf-button-text-container">${label}</span>`;
    return node;
  };
  const save = button('Сохранить', 'sf-button--default sf-button--primary');
  const discard = button('Не сохранять', 'sf-button--ghost sf-button--on-surface');

  const modal = new Modal({
    id: 'edit-profile',
    param: {container: '#modal-unsaved-box', title: 'Профиль', size: 'form', contentNodes: [form], footerNodes: [save, discard]},
  });

  const formHasChanges = () => input.value !== savedName;

  // Every close request asks first: the cross, Escape, the backdrop, close().
  document.addEventListener('modal:before-close', (event) => {
    if (event.detail.id === 'edit-profile' && formHasChanges()) {
      event.preventDefault();
      warning.textContent = 'Есть несохранённые правки: сохраните их или нажмите «Не сохранять».';
    }
  });
  document.addEventListener('modal:after-open', (event) => {
    if (event.detail.id === 'edit-profile') warning.textContent = '';
  });

  save.addEventListener('click', () => {
    savedName = input.value;
    document.querySelector('#modal-unsaved-name').textContent = `Имя в профиле: ${savedName}`;
    modal.close();
  });
  discard.addEventListener('click', () => {
    input.value = savedName;
    modal.close();
  });
}));
