(async () => {
  await customElements.whenDefined('sf-progress-run');
  document.querySelectorAll('[data-demo="density-job"]').forEach((run) => {
    run.steps = [
      {id: 'read', title: 'Чтение файла', state: 'done', duration: 8200},
      {id: 'write', title: 'Запись товаров', state: 'running'},
      {id: 'images', title: 'Картинки', state: 'waiting'},
    ];
  });
})();
