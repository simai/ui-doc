// remember keeps the values as a preference (SF.Preferences key
// sf-settings/docs-example). "Нарисовать заново" puts a new element with the
// declared values in place of the old one, and it shows the values kept.

const initialize = async () => {
  await customElements.whenDefined('sf-settings');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const place = document.querySelector('#settings-remember-place');
  const template = document.querySelector('#settings-remember-template');
  const stamp = async () => {
    place.replaceChildren(template.content.cloneNode(true));
    const fresh = place.querySelector('sf-settings');
    await fresh.whenRendered?.();
    return fresh;
  };
  await stamp();
  // sf-button hands data-* to its inner button: the press is read by delegation.
  document.addEventListener('click', async (event) => {
    if (!event.target.closest('[data-redraw]')) return;
    const fresh = await stamp();
    docara.example.log('новый элемент, values', fresh.values);
  });
};

initialize();
