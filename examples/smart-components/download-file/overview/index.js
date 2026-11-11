// Two files lie at an address: links the browser downloads. The third one
// the application builds when it is asked: it sets state="preparing", then
// the size, the href and state="ready", and the element fetches the file once.
const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const act = document.querySelector('#download-file-act');
  document.addEventListener('sf-file-download-download', (event) => {
    docara.example.log('sf-file-download-download', event.detail);
    if (event.target.closest('sf-file-download') !== act || act.getAttribute('href')) return;
    event.preventDefault();
    act.setAttribute('state', 'preparing');
    setTimeout(() => {
      const text = 'Дата;Документ;Сумма, ₽\n01.11.2026;Счёт 1042;440000\n05.11.2026;Оплата;440000\n';
      const file = new Blob([text], {type: 'text/csv;charset=utf-8'});
      // The application knows the size of what it built: with file-size set
      // the element does not ask the address for it.
      act.setAttribute('file-size', `${file.size} Б`);
      act.setAttribute('href', URL.createObjectURL(file));
      act.setAttribute('state', 'ready');
    }, 1200);
  });
};

initialize();
