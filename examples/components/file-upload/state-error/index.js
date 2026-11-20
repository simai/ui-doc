// The row is the component's: setItems draws it as the script does.
const ready = (run) => (window.SF?.FileUpload?.setItems ? run() : requestAnimationFrame(() => ready(run)));

ready(() => {
  SF.FileUpload.setItems(document.querySelector('.sf-file-upload'), [{name: 'report.pdf', fileSize: '1,7 МБ', state: 'error', errorMessage: 'сервер не ответил'}]);
});
