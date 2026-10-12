// Shows what the select event carries: the chosen items, each with its File.
const output = document.querySelector('output');
document.querySelectorAll('.sf-file-upload').forEach((upload) => {
  upload.addEventListener('sf-file-upload:select', (event) => {
    const names = event.detail.files.map((item) => item.file.name).join(', ');
    output.value = `Выбрано: ${names}`;
  });
});
