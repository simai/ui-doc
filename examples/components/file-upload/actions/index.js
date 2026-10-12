// The list is the application's: it hands the items over with setItems and
// answers the remove and retry events with its own requests.
const ready = (run) => (window.SF?.FileUpload?.setItems ? run() : requestAnimationFrame(() => ready(run)));

ready(() => {
  const upload = document.querySelector('.sf-file-upload');
  const output = document.querySelector('output');
  SF.FileUpload.setItems(upload, [
    {name: 'presentation.pdf', fileSize: '2,4 МБ', progress: 65, state: 'process'},
    {name: 'report.pdf', fileSize: '1,7 МБ', state: 'error', errorMessage: 'Повторить'},
  ]);
  upload.addEventListener('sf-file-upload:retry', (event) => {
    output.value = `Повтор передачи: ${event.detail.item.name}`;
  });
  upload.addEventListener('sf-file-upload:remove', (event) => {
    output.value = `Удалён из списка: ${event.detail.item.name}`;
  });
});
