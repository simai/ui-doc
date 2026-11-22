const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['bulk-actions']);
  const bar = document.querySelector('#bulk-run');

  bar.addEventListener('sf-bulk-actions-action', async (event) => {
    const {id, count} = event.detail;
    // A short run shows its progress in the bar.
    for (let done = 1; done <= count; done += 1) {
      bar.progress({done, total: count});
      await wait(150);
    }
    // Failed items stay selected; the bar offers «Подробнее» and «Повторить».
    bar.result({id, ok: count - 2, failed: [
      {id: 'p3', text: 'Склад', reason: 'Нет главной страницы'},
      {id: 'p5', text: 'Блог', reason: 'Нет прав на раздел'},
    ]});
    bar.count = 2;
  });
  bar.addEventListener('sf-bulk-actions-clear', () => {
    bar.count = 12; // the example keeps its rows selected
  });
};

start();
