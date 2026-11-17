// The page checks the code, as an application would: the field only says the
// code is whole. A wrong code marks the field invalid, a new edit clears it.
const initializeVerifyExample = async () => {
  await customElements.whenDefined('sf-input-code');
  const code = document.getElementById('verify-code');
  const status = document.getElementById('verify-status');
  if (!code || code.dataset.exampleReady === 'true') return;
  code.dataset.exampleReady = 'true';
  code.addEventListener('input', () => {
    if (code.hasAttribute('invalid')) {
      code.removeAttribute('invalid');
      code.removeAttribute('error-message');
    }
  });
  code.addEventListener('sf-input-code-completed', (event) => {
    status.textContent = 'Проверяем код…';
    setTimeout(() => {
      const ok = event.detail.value === '246810';
      code.toggleAttribute('invalid', !ok);
      if (ok) {
        code.removeAttribute('error-message');
        status.textContent = 'Код подошёл, вход выполнен.';
      } else {
        code.setAttribute('error-message', 'Код не подошёл. Проверьте сообщение и введите ещё раз.');
        status.textContent = 'Код не подошёл.';
      }
    }, 600);
  });
};

initializeVerifyExample();
