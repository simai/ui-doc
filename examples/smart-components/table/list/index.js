const initializeProjectsList = async () => {
  await customElements.whenDefined('sf-table');

  const table = document.querySelector('#projects-list-view');
  if (!table || table.dataset.exampleReady === 'true') return;

  table.dataset.exampleReady = 'true';
  table.setColumns([
    { key: 'name', label: 'Проект', role: 'title' },
    { key: 'owner', label: 'Ответственный', priority: 3 },
    { key: 'type', label: 'Тип', priority: 2 },
    { key: 'status', label: 'Состояние', priority: 1 },
  ]);
  table.setRows([
    { id: 'framework', name: 'SIMAI Framework', owner: 'Команда интерфейсов', type: 'Frontend', status: 'Развивается' },
    { id: 'docara', name: 'Docara', owner: 'Команда документации', type: 'Документация', status: 'Готова' },
    { id: 'larena', name: 'Larena', owner: 'Команда платформы', type: 'Backend', status: 'Развивается' },
  ]);
};

initializeProjectsList();
