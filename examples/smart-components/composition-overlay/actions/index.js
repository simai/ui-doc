// The application owns the Document: an action changes the list of blocks,
// the page draws the canvas again and hands the Document back to the overlay.
const initializeOverlayActions = async () => {
  await customElements.whenDefined('sf-editor-overlay');
  const overlay = document.querySelector('#overlay-actions');
  const canvas = document.querySelector('#overlay-actions-canvas');
  if (!overlay || overlay.dataset.exampleReady === 'true') return;
  overlay.dataset.exampleReady = 'true';
  let counter = 3;
  let blocks = [
    {id: 'b1', type: 'content.heading', text: 'Скидка 20 % до воскресенья'},
    {id: 'b2', type: 'content.paragraph', text: 'Все кухонные товары — дешевле на пятую часть.'},
    {id: 'b3', type: 'content.paragraph', text: 'Доставим бесплатно от 3 000 ₽.'},
  ];
  const names = {'content.heading': 'Заголовок', 'content.paragraph': 'Абзац'};
  const text = (value) => [{type: 'text', value}];
  const model = () => ({
    schema: 'simai.composition.document', schema_version: 1, id: 'overlay-actions', profile: 'ui-layout',
    root: {id: 'page', type: 'layout.section', slots: {default: blocks.map((block) => ({
      id: block.id, type: block.type, data: block.type === 'content.heading' ? {level: 3, content: text(block.text)} : {content: text(block.text)},
    }))}},
  });
  const draw = () => {
    canvas.innerHTML = `<section data-sf-composition-id="page" class="flex flex-col gap-2">${blocks.map((block) => block.type === 'content.heading'
      ? `<h3 class="m-0" data-sf-composition-id="${block.id}">${block.text}</h3>`
      : `<p class="m-0" data-sf-composition-id="${block.id}">${block.text}</p>`).join('')}</section>`;
    overlay.setDocument({document: model(), options: {describe: (node) => ({label: names[node.type] || 'Письмо'})}});
  };
  const actionsFor = (id) => {
    const index = blocks.findIndex((block) => block.id === id);
    return [
      {id: 'move-up', label: 'Выше', icon: 'arrow_upward', shortcut: '⌥↑', disabled: index <= 0},
      {id: 'move-down', label: 'Ниже', icon: 'arrow_downward', shortcut: '⌥↓', disabled: index < 0 || index === blocks.length - 1},
      {id: 'duplicate', label: 'Дублировать', icon: 'content_copy', shortcut: '⌘D'},
      {id: 'remove', label: 'Удалить', icon: 'delete', shortcut: '⌫', tone: 'danger', disabled: blocks.length <= 1},
    ];
  };
  overlay.attach({canvas});
  draw();
  overlay.setActions({actions: actionsFor(null)});
  overlay.addEventListener('sf-editor-overlay-select', (event) => {
    overlay.setActions({actions: actionsFor(event.detail.node_id)});
  });
  overlay.addEventListener('sf-editor-overlay-apply', (event) => {
    const id = event.detail.ids[0];
    const index = blocks.findIndex((block) => block.id === id);
    if (index < 0) return;
    let selected = id;
    if (event.detail.action === 'move-up' && index > 0) blocks.splice(index - 1, 0, blocks.splice(index, 1)[0]);
    if (event.detail.action === 'move-down' && index < blocks.length - 1) blocks.splice(index + 1, 0, blocks.splice(index, 1)[0]);
    if (event.detail.action === 'duplicate') {
      counter += 1;
      selected = `b${counter}`;
      blocks.splice(index + 1, 0, {...blocks[index], id: selected});
    }
    if (event.detail.action === 'remove' && blocks.length > 1) {
      blocks.splice(index, 1);
      selected = blocks[Math.min(index, blocks.length - 1)].id;
    }
    draw();
    overlay.select({id: selected, options: {emit: false}});
    overlay.setActions({actions: actionsFor(selected)});
  });
};

initializeOverlayActions();
