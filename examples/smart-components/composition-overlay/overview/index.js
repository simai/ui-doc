// The canvas holds HTML produced by SF.Composition.render for this Document.
// The overlay draws editor chrome over it and never changes it.
const initializeOverlayExample = async () => {
  await customElements.whenDefined('sf-composition-overlay');
  const overlay = document.querySelector('#overlay-example');
  const status = document.querySelector('#overlay-example-status');
  if (!overlay || overlay.dataset.exampleReady === 'true') return;
  overlay.dataset.exampleReady = 'true';
  const text = (value) => [{ type: 'text', value }];
  const model = {
    schema: 'simai.composition.document.v1',
    id: 'overlay-example',
    profile: 'ui-layout',
    root: { id: 'page', type: 'layout.section', slots: { default: [
      { id: 'title', type: 'content.heading', data: { level: 3, content: text('О компании') } },
      { id: 'about', type: 'content.paragraph', data: { content: text('Мы делаем инструменты для сайтов.') } },
    ] } },
  };
  const names = { 'layout.section': 'Секция', 'content.heading': 'Заголовок', 'content.paragraph': 'Абзац' };
  overlay.attach(document.querySelector('#overlay-example-canvas'));
  overlay.setDocument(model, { describe: (node) => ({ label: names[node.type] || node.type }) });
  overlay.setActions([{ id: 'duplicate', label: 'Дублировать' }, { id: 'remove', label: 'Удалить' }]);
  overlay.addEventListener('sf-composition-overlay-select', (event) => { status.textContent = event.detail.node_id ? `Выбран узел ${event.detail.node_id}.` : 'Выбор снят.'; });
  overlay.addEventListener('sf-composition-overlay-action', (event) => { status.textContent = `Действие ${event.detail.action_id} для узла ${event.detail.node_id}. Изменение выполняет приложение.`; });
  overlay.addEventListener('sf-composition-overlay-insert', (event) => { status.textContent = `Вставка в «${event.detail.slot}», позиция ${event.detail.index + 1}.`; });
};

initializeOverlayExample();
