document.querySelectorAll('[data-download-file-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-download-file-result]');
  demo.addEventListener('sf-download-file:click', (event) => {
    result.textContent = `Приложение готовит файл «${event.detail.fileName}».`;
  });
});
