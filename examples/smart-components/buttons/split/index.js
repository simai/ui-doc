// Split buttons: the label part does the frequent action (press), the arrow
// opens the rarer ones; the main action is not repeated in the menu.
const initializeSplitButtons = async () => {
  await customElements.whenDefined('sf-button');
  const add = document.querySelector('#button-split-add');
  const save = document.querySelector('#button-split-save');
  if (!add || add.dataset.exampleReady === 'true') return;
  add.dataset.exampleReady = 'true';
  add.menu = [
    {id: 'section', text: 'Добавить раздел', icon: 'create_new_folder'},
    {id: 'import', text: 'Загрузить из файла', icon: 'upload_file'},
  ];
  save.menu = [
    {id: 'save-copy', text: 'Сохранить как копию', icon: 'file_copy'},
    {id: 'save-draft', text: 'Сохранить черновик', icon: 'draft'},
  ];
};

initializeSplitButtons();
