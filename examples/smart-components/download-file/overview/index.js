// Two files lie at an address: links the browser downloads. The third one
// the application builds when it is asked: the press sends the event, the
// page makes the file and hands it to the browser.
const saveFile = (text, name, type) => {
  const url = URL.createObjectURL(new Blob([text], {type}));
  const link = Object.assign(document.createElement('a'), {href: url, download: name});
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const initialize = async () => {
  await customElements.whenDefined('sf-file-download');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const act = document.querySelector('#download-file-act');
  const status = document.querySelector('#download-file-act-status');
  document.addEventListener('sf-file-download-download', (event) => {
    docara.example.log('sf-file-download-download', event.detail);
    if (event.detail.href || event.target.closest('sf-file-download') !== act) return;
    act.setAttribute('disabled', '');
    status.textContent = 'Готовим акт сверки…';
    setTimeout(() => {
      saveFile('Дата;Документ;Сумма, ₽\n01.11.2026;Счёт 1042;440000\n05.11.2026;Оплата;440000\n', 'Акт сверки.csv', 'text/csv;charset=utf-8');
      act.removeAttribute('disabled');
      status.textContent = 'Акт сверки скачан.';
    }, 1200);
  });
};

initialize();
