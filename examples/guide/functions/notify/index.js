const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.notify with three statuses; every message is announced with sf-notification first.
const start = async () => {
  const SF = await sfReady();
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('sf-notification', (event) => log('sf-notification', event.detail));
  document.getElementById('notify-success').addEventListener('click', () => {
    SF.notify({status: 'success', title: 'Изменения сохранены', text: 'Их уже видят все участники.', source: 'example'});
  });
  document.getElementById('notify-error').addEventListener('click', () => {
    SF.notify({status: 'error', title: 'Не удалось отправить', text: 'Проверьте подключение и попробуйте ещё раз.', source: 'example'});
  });
  document.getElementById('notify-action').addEventListener('click', () => {
    SF.notify({
      status: 'info',
      title: 'Запись перенесена в архив',
      action: {label: 'Вернуть', onSelect: (record) => log('action', {id: record.id, label: 'Вернуть'})},
      duration: 0,
      source: 'example',
    });
  });
};

start();
