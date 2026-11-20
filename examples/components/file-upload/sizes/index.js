// The rows are the component's: setItems draws each one as the script does.
const ready = (run) => (window.SF?.FileUpload?.setItems ? run() : requestAnimationFrame(() => ready(run)));

ready(() => {
  document.querySelectorAll('.sf-file-upload').forEach((upload) => {
    SF.FileUpload.setItems(upload, [{name: 'presentation.pdf', fileSize: '2,4 МБ', progress: 65, state: 'process'}]);
  });
});
