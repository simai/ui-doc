// «Имена кнопок» lists what a screen reader reads for each button;
// «В буфере» shows what the press put on the clipboard.
const showNames = async () => {
  await customElements.whenDefined('sf-button-copy');
  requestAnimationFrame(() => {
    const names = [...document.querySelectorAll('sf-button-copy')].map((host) => host.querySelector('button')?.getAttribute('aria-label') || host.getAttribute('label') || 'Копировать');
    document.querySelector('[data-names]').textContent = names.map((name) => `«${name}»`).join(', ');
  });
};

document.addEventListener('sf-button-copy-copied', (event) => {
  const buffer = document.querySelector('[data-buffer]');
  const code = document.createElement('code');
  code.textContent = event.detail.text;
  buffer.replaceChildren(code);
});

showNames();
