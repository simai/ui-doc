// The editor keeps nothing: the page gives it a Document and keeps every
// new one the change event brings. Here "keeping" is a counter of versions.
const text = (value) => [{type: 'text', value}];

const initializePageEditor = async () => {
  await customElements.whenDefined('sf-editor');
  const editor = document.querySelector('#page-editor-example');
  if (!editor || editor.dataset.exampleReady === 'true') return;
  editor.dataset.exampleReady = 'true';
  editor.document = {
    schema: 'simai.composition.document',
    schema_version: 1,
    id: 'delivery',
    profile: 'ui-layout',
    root: {id: 'root', type: 'layout.page', slots: {default: [
      {id: 's1', type: 'layout.section', props: {width: 'normal'}, slots: {default: [
        {id: 'a1', type: 'layout.area', slots: {default: [
          {id: 'h1', type: 'content.heading', data: {level: 2, content: text('Доставка и оплата')}},
          {id: 'p1', type: 'content.paragraph', data: {content: text('Привезём заказ в течение двух дней. По городу — бесплатно от 3 000 ₽.')}},
          {id: 'p2', type: 'content.paragraph', data: {content: text('Оплатить можно картой на сайте или при получении.')}},
        ]}},
      ]}},
    ]}},
  };
  editor.addEventListener('change', (event) => {
    console.log('change', event.detail.scope, event.detail.document.root.slots.default.length);
  });
};

initializePageEditor();
