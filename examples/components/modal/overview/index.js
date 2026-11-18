const startModalExample = (Modal) => {
  if (Modal.registry.has('modal-example')) return;

  const text = document.createElement('p');
  text.className = 'm-0';
  text.textContent = 'Новая версия станет доступна участникам проекта.';

  const button = (label, look) => {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = `sf-button ${look} sf-button--size-1`;
    node.dataset.sfModalClose = 'modal-example';
    node.innerHTML = `<span class="sf-button-text-container">${label}</span>`;
    return node;
  };

  // The answers go to the footer: the main one first, at the row start,
  // «Отмена» quiet beside it.
  new Modal({
    id: 'modal-example',
    param: {
      container: '#modal-example-box',
      title: 'Опубликовать изменения?',
      size: 'question',
      contentNodes: [text],
      footerNodes: [
        button('Опубликовать', 'sf-button--default sf-button--primary'),
        button('Отмена', 'sf-button--ghost sf-button--on-surface'),
      ],
    },
  });
};

if (window.SF?.Loader) {
  window.SF.Loader.ready('Modal', startModalExample);
} else {
  window.addEventListener('sf-loader-init', () => window.SF.Loader.ready('Modal', startModalExample), {once: true});
}
