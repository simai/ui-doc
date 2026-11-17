(async () => {
  await Promise.all(['sf-file-upload', 'sf-progress-run'].map((tag) => customElements.whenDefined(tag)));
  document.querySelector('#phone-upload').items = [
    {id: 'p1', name: 'IMG_2291.jpg', fileSize: '3,1 МБ', state: 'process', progress: 40},
    {id: 'p2', name: 'IMG_2292.jpg', fileSize: '2,9 МБ', state: 'done', progress: 100},
  ];
  const batch = document.querySelector('#phone-batch');
  batch.setAttribute('total', '48');
  batch.setAttribute('value', '30');
})();
