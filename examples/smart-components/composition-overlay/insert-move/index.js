// Insert places and dragging: the overlay reports the place, the application
// changes its list of blocks and hands the new Document back.
const initializeOverlayInsertMove = async () => {
  await customElements.whenDefined('sf-editor-overlay');
  const overlay = document.querySelector('#overlay-insert-move');
  const canvas = document.querySelector('#overlay-insert-move-canvas');
  if (!overlay || overlay.dataset.exampleReady === 'true') return;
  overlay.dataset.exampleReady = 'true';
  let counter = 3;
  let blocks = [
    {id: 'p1', text: 'Привет! Мы открыли второй склад.'},
    {id: 'p2', text: 'Теперь заказы до 14:00 приедут в тот же день.'},
    {id: 'p3', text: 'Спасибо, что выбираете нас.'},
  ];
  const text = (value) => [{type: 'text', value}];
  const model = () => ({
    schema: 'simai.composition.document', schema_version: 1, id: 'overlay-insert-move', profile: 'ui-layout',
    root: {id: 'page', type: 'layout.section', slots: {default: blocks.map((block) => ({id: block.id, type: 'content.paragraph', data: {content: text(block.text)}}))}},
  });
  const draw = () => {
    canvas.innerHTML = `<section data-sf-composition-id="page" class="flex flex-col gap-2">${blocks.map((block) => `<p class="m-0" data-sf-composition-id="${block.id}">${block.text}</p>`).join('')}</section>`;
    overlay.setDocument({document: model(), options: {describe: (node) => ({label: node.type === 'layout.section' ? 'Письмо' : 'Абзац'})}});
  };
  overlay.attach({canvas});
  draw();
  overlay.setActions({actions: [{id: 'move', label: 'Перенести', icon: 'drag_indicator'}]});
  overlay.addEventListener('sf-editor-overlay-insert', (event) => {
    counter += 1;
    const id = `p${counter}`;
    blocks.splice(event.detail.index, 0, {id, text: `Новый абзац ${counter - 3}`});
    draw();
    overlay.select({id, options: {emit: false}});
  });
  overlay.addEventListener('sf-editor-overlay-move', (event) => {
    const from = blocks.findIndex((block) => block.id === event.detail.id);
    if (from < 0) return;
    const [block] = blocks.splice(from, 1);
    blocks.splice(event.detail.position, 0, block);
    draw();
    overlay.select({id: block.id, options: {emit: false}});
  });
};

initializeOverlayInsertMove();
