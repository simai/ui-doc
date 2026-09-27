// The inline editor returns the content model, never HTML. Here the page keeps
// the model and redraws the paragraph from it after each commit.
const initializeInlineExample = async () => {
  await customElements.whenDefined('sf-inline-editor');
  const canvas = document.querySelector('#inline-example-canvas');
  const status = document.querySelector('#inline-example-status');
  if (!canvas || canvas.dataset.exampleReady === 'true') return;
  canvas.dataset.exampleReady = 'true';
  const editor = document.querySelector('sf-inline-editor');
  let content = [
    { type: 'text', value: 'Доставка по городу — ' },
    { type: 'text', value: 'бесплатно', marks: ['strong'] },
    { type: 'text', value: ' при заказе от 3000 ₽.' },
  ];
  canvas.addEventListener('dblclick', (event) => {
    const element = event.target.closest('[data-sf-composition-id="note"]');
    if (!element || element.hasAttribute('data-sf-inline-editing')) return;
    event.preventDefault();
    editor.edit(element, { content, nodeId: 'note', label: 'Условия доставки' });
  });
  canvas.addEventListener('sf-inline-edit-commit', (event) => {
    content = event.detail.content;
    const paragraph = canvas.querySelector('[data-sf-composition-id="note"]');
    paragraph.replaceChildren(SF.InlineEditor.renderInlineDom(document, content));
    status.textContent = `Сохранено: ${JSON.stringify(content)}`;
  });
  canvas.addEventListener('sf-inline-edit-cancel', () => { status.textContent = 'Правка отменена.'; });
};

initializeInlineExample();
