document.querySelectorAll('[data-button-group-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-button-group-result]');
  demo.addEventListener('change', (event) => {
    if (event.target.localName !== 'sf-button-group') return;
    result.textContent = `Выбран вид: ${event.detail.value}`;
  });
});
