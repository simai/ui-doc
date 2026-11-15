(async () => {
  await customElements.whenDefined('sf-file-upload');
  document.querySelectorAll('[data-demo="density-upload"]').forEach((upload) => {
    upload.items = [
      {id: 'a', name: 'приказ-о-распродаже.pdf', fileSize: '420 КБ', state: 'process', progress: 30},
      {id: 'b', name: 'баннер-1920x600.jpg', fileSize: '1,8 МБ', state: 'process', progress: 70},
      {id: 'c', name: 'цены-ноябрь.xlsx', fileSize: '96 КБ', state: 'done', progress: 100},
    ];
  });
})();
