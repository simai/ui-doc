document.querySelectorAll('[data-download-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-download-result]');
  demo.addEventListener('sf-download-file:click', (event) => {
    const {href, fileName} = event.detail;
    result.textContent = href
      ? `Браузер скачивает «${fileName}».`
      : `Приложение готовит файл «${fileName}».`;
  });
});
