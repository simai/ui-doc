(async () => {
  await customElements.whenDefined('sf-steps');
  document.querySelector('#request-steps').items = [
    {label: 'Подана', text: '10 ноября'},
    {label: 'Согласована руководителем', text: '11 ноября'},
    {label: 'Кадры', text: 'на рассмотрении'},
    {label: 'Решение'},
  ];
})();
