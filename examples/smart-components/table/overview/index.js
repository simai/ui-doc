const initializeProjectsDataView = async () => {
  await customElements.whenDefined('sf-table');

  const table = document.querySelector('#projects-data-view');
  if (!table || table.dataset.exampleReady === 'true') return;

  table.dataset.exampleReady = 'true';
  table.setColumns([
    { key: 'name', label: 'Проект' },
    { key: 'type', label: 'Тип' },
    { key: 'status', label: 'Состояние' },
  ]);
  table.setRows([
    { id: 'framework', name: 'SIMAI Framework', type: 'Frontend', status: 'Развивается' },
    { id: 'docara', name: 'Docara', type: 'Документация', status: 'Готова' },
    { id: 'larena', name: 'Larena', type: 'Backend', status: 'Развивается' },
  ]);
};

initializeProjectsDataView();
