// The heading allows italics alone and no links; the page keeps the model.
const initializeInlineOptions = async () => {
  await customElements.whenDefined('sf-editor-inline');
  const canvas = document.querySelector('#inline-options-canvas');
  const status = document.querySelector('#inline-options-status');
  const editor = document.querySelector('#inline-options-editor');
  if (!canvas || canvas.dataset.exampleReady === 'true') return;
  canvas.dataset.exampleReady = 'true';
  let content = [
    {type: 'text', value: 'Распродажа '},
    {type: 'text', value: 'зимней', marks: ['em']},
    {type: 'text', value: ' обуви'},
  ];
  canvas.addEventListener('dblclick', (event) => {
    const element = event.target.closest('[data-sf-composition-id="title"]');
    if (!element || element.hasAttribute('data-sf-inline-editing')) return;
    event.preventDefault();
    editor.edit({element, options: {content, nodeId: 'title', label: 'Заголовок', marks: ['em'], links: false}});
  });
  canvas.addEventListener('sf-editor-inline-change', (event) => {
    content = event.detail.content;
    canvas.querySelector('[data-sf-composition-id="title"]').replaceChildren(SF.InlineEditor.renderInlineDom(document, content));
    status.textContent = 'Заголовок сохранён.';
  });
  canvas.addEventListener('sf-editor-inline-cancel', () => { status.textContent = 'Правка отменена.'; });
};

initializeInlineOptions();
