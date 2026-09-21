// A minimal page editor: the host owns the Document, Framework components only
// report intent. Every change is validated before the canvas is redrawn.
const status = document.querySelector('#editor-status');
const canvas = document.querySelector('#editor-canvas');
const overlay = document.querySelector('#editor-overlay');
const output = document.querySelector('#editor-document');
const text = (value) => [{ type: 'text', value }];
let created = 0;
let model = {
  schema: 'simai.composition.document.v1',
  id: 'editor-demo',
  profile: 'ui-layout',
  root: { id: 'page', type: 'layout.section', slots: { default: [
    { id: 'title', type: 'content.heading', data: { level: 2, content: text('Весенняя распродажа') } },
    { id: 'intro', type: 'content.paragraph', data: { content: text('Дважды щёлкните по тексту, чтобы изменить его.') } },
    { id: 'terms', type: 'content.paragraph', data: { content: text('Перетащите блок за подпись рамки или выберите его в дереве и нажмите Пробел.') } },
  ] } },
};
const names = { 'layout.section': 'Секция', 'content.heading': 'Заголовок', 'content.paragraph': 'Абзац' };
const find = (node, id) => (node.id === id ? node : Object.values(node.slots || {}).flat().map((child) => find(child, id)).find(Boolean));
const detach = (node, target) => {
  for (const children of Object.values(node.slots || {})) {
    const index = children.indexOf(target);
    if (index >= 0) children.splice(index, 1);
    children.forEach((child) => detach(child, target));
  }
};
const newNode = (type) => {
  created += 1;
  return type === 'content.heading'
    ? { id: `heading-${created}`, type, data: { level: 2, content: text('Новый заголовок') } }
    : { id: `paragraph-${created}`, type: 'content.paragraph', data: { content: text('Новый абзац') } };
};

async function draw() {
  const result = await SF.Composition.render(model);
  canvas.innerHTML = result.html;
  overlay.setDocument(model, { describe: (node) => ({ label: `${names[node.type] || node.type} · ${node.id}` }) });
  output.textContent = JSON.stringify(model, null, 2);
}

// The host applies a change to a copy and keeps it only if the Document stays valid.
async function change(message, apply) {
  const next = structuredClone(model);
  apply(next);
  if (!SF.Composition.validate(next).valid) {
    status.textContent = 'Изменение отклонено: Document не прошёл проверку.';
    return;
  }
  model = next;
  await draw();
  status.textContent = message;
}

overlay.addEventListener('sf-composition-overlay-insert', (event) => {
  const { parent_id: parent, slot, index, item } = event.detail;
  change('Блок добавлен.', (next) => find(next.root, parent).slots[slot].splice(index, 0, newNode(item || 'content.paragraph')));
});
overlay.addEventListener('sf-composition-overlay-move', (event) => {
  const { node_id: id, parent_id: parent, slot, index } = event.detail;
  change('Блок перемещён.', (next) => {
    const node = find(next.root, id);
    detach(next.root, node);
    find(next.root, parent).slots[slot].splice(index, 0, node);
  });
});
overlay.addEventListener('sf-composition-overlay-action', (event) => {
  const { node_id: id } = event.detail;
  if (id === model.root.id) {
    status.textContent = 'Корневую секцию удалить нельзя.';
    return;
  }
  change('Блок удалён.', (next) => detach(next.root, find(next.root, id)));
});
canvas.addEventListener('click', (event) => { if (event.target.closest('a')) event.preventDefault(); });
canvas.addEventListener('dblclick', (event) => {
  const element = event.target.closest('[data-sf-composition-id]');
  const node = element && find(model.root, element.getAttribute('data-sf-composition-id'));
  if (!node?.data?.content || element.hasAttribute('data-sf-inline-editing')) return;
  event.preventDefault();
  SF.Composition.startInlineEdit(element, { content: node.data.content, nodeId: node.id, label: names[node.type] });
});
canvas.addEventListener('sf-inline-edit-commit', (event) => {
  const { node_id: id, content } = event.detail;
  change('Текст сохранён.', (next) => { find(next.root, id).data.content = content; });
});

(async () => {
  // The editor surfaces are Smart components: the loader fetches them because
  // their tags are on this page.
  await Promise.all(['sf-sortable', 'sf-composition-overlay', 'sf-inline-editor'].map((tag) => customElements.whenDefined(tag)));
  overlay.attach(canvas);
  overlay.setActions([{ id: 'remove', label: 'Удалить' }]);
  overlay.setDropFilter((place) => place.parent_id === 'page');
  await draw();
  status.textContent = 'Редактор готов. Выберите блок, перетащите блок из библиотеки или дважды щёлкните по тексту.';
})().catch((error) => { status.textContent = `Редактор не загрузился: ${error.message}`; });
