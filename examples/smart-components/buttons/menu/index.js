// A menu button: no main action, the press opens the menu.
const initializeMenuButton = async () => {
  await customElements.whenDefined('sf-button');
  const button = document.querySelector('#button-menu-export');
  if (!button || button.dataset.exampleReady === 'true') return;
  button.dataset.exampleReady = 'true';
  button.menu = [
    {id: 'xlsx', text: 'Таблица Excel', icon: 'table_view', caption: '.xlsx'},
    {id: 'csv', text: 'Текст с разделителями', icon: 'description', caption: '.csv'},
    {id: 'pdf', text: 'Документ PDF', icon: 'picture_as_pdf', caption: '.pdf'},
  ];
};

initializeMenuButton();
