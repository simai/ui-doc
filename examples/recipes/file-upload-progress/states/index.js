(async () => {
  await Promise.all(['sf-file-upload', 'sf-progress-run'].map((tag) => customElements.whenDefined(tag)));
  document.querySelector('#state-unknown').items = [{id: 'x', name: 'архив-фото.zip', fileSize: '84 МБ', state: 'process'}];
  document.querySelector('#state-error').items = [
    {id: 'y', name: 'баннер-1920x600.jpg', fileSize: '1,8 МБ', state: 'error', progress: 62, errorMessage: 'связь прервалась на 62 %', retryText: 'Повторить'},
    {id: 'z', name: 'приказ.pdf', fileSize: '420 КБ', state: 'done', progress: 100},
  ];
  const many = document.querySelector('#state-many');
  many.setAttribute('total', '48');
  many.setAttribute('value', '18');
  many.setAttribute('remaining', '24');
  const partial = document.querySelector('#state-partial');
  partial.setAttribute('total', '48');
  partial.setAttribute('value', '48');
  partial.setAttribute('run-state', 'partial');
  partial.setAttribute('result-text', 'Загружено 46 из 48. Два файла не загрузились.');
  partial.errors = [{text: 'IMG_2291.HEIC: такие файлы нельзя'}, {text: 'IMG_2307.jpg: связь прервалась'}];
})();
