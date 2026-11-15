// A paragraph with a key and a badge inside: each is one caret position.
const initializeInlineComponents = async () => {
  await customElements.whenDefined('sf-editor-inline');
  const canvas = document.querySelector('#inline-components-canvas');
  const status = document.querySelector('#inline-components-status');
  const editor = document.querySelector('#inline-components-editor');
  if (!canvas || canvas.dataset.exampleReady === 'true') return;
  canvas.dataset.exampleReady = 'true';
  const paragraph = canvas.querySelector('[data-sf-composition-id="hint"]');
  let content = [
    {type: 'text', value: 'Нажмите '},
    {type: 'component', name: 'kbd', props: {text: 'Ctrl+S'}},
    {type: 'text', value: ', чтобы сохранить черновик. Раздел '},
    {type: 'component', name: 'badge', props: {text: 'Новое', scheme: 'primary', size: '1/2'}},
    {type: 'text', value: ' появится в меню завтра.'},
  ];
  paragraph.replaceChildren(SF.InlineEditor.renderInlineDom(document, content));
  canvas.addEventListener('dblclick', (event) => {
    if (!event.target.closest('[data-sf-composition-id="hint"]') || paragraph.hasAttribute('data-sf-inline-editing')) return;
    event.preventDefault();
    editor.edit({element: paragraph, options: {content, nodeId: 'hint', label: 'Подсказка'}});
  });
  canvas.addEventListener('sf-editor-inline-change', (event) => {
    content = event.detail.content;
    paragraph.replaceChildren(SF.InlineEditor.renderInlineDom(document, content));
    status.textContent = `Компонентов в тексте: ${content.filter((part) => part.type === 'component').length}.`;
  });
};

initializeInlineComponents();
