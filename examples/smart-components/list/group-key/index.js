// group-by="key" groups by each row's group, in the order of groups.
const initialize = async () => {
  await customElements.whenDefined('sf-list');
  const list = document.querySelector('#list-group-key');
  if (!list || list.dataset.exampleReady === 'true') return;
  list.dataset.exampleReady = 'true';
  list.groups = [{key: 'docs', text: 'Документы'}, {key: 'images', text: 'Изображения'}];
  list.setItems([
    {id: 'f1', text: 'Отчёт.pdf', supporting: '1,2 МБ', icon: 'description', group: 'docs'},
    {id: 'f2', text: 'Логотип.svg', supporting: '14 КБ', icon: 'image', group: 'images'},
    {id: 'f3', text: 'Договор.docx', supporting: '86 КБ', icon: 'description', group: 'docs'},
  ], {hasMore: false});
};

initialize();
