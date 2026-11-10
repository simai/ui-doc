// The record page: the header carries the path, one link out and «⋯» for the
// rest; the facts card edits as one section; the history sits beside it on a
// wide screen and below it on a narrow one.
const initialize = async () => {
  await Promise.all(['sf-menu-context', 'sf-button-icon'].map((tag) => customElements.whenDefined(tag)));
  const anchor = document.querySelector('#record-more');
  const menu = document.querySelector('#record-menu');
  if (!menu || menu.dataset.exampleReady === 'true') return;
  menu.dataset.exampleReady = 'true';
  menu.entries = [
    {id: 'copy', text: 'Копировать адрес', icon: 'content_copy'},
    {id: 'stop', text: 'Остановить', icon: 'pause_circle'},
    {type: 'separator'},
    {id: 'delete', text: 'Удалить сайт', icon: 'delete', danger: true},
  ];
  anchor.addEventListener('click', () => menu.toggleFor({anchor}));
  menu.addEventListener('sf-menu-context-select', (event) => {
    docara.example.log('sf-menu-context-select', {id: event.detail.id});
  });
};

initialize();
