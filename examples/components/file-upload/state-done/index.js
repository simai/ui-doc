// The row is the component's: setItems draws it as the script does.
const ready = (run) => (window.SF?.FileUpload?.setItems ? run() : requestAnimationFrame(() => ready(run)));

ready(() => {
  SF.FileUpload.setItems(document.querySelector('.sf-file-upload'), [{name: 'logo.svg', fileSize: '84 КБ', state: 'done'}]);
});
