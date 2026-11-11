// «Имена кнопок» lists what a screen reader reads for each button.
const showNames = async () => {
  await customElements.whenDefined('sf-button-copy');
  requestAnimationFrame(() => {
    const names = [...document.querySelectorAll('sf-button-copy')].map((host) => host.querySelector('button')?.getAttribute('aria-label') || host.getAttribute('label') || 'Копировать');
    document.querySelector('[data-names]').textContent = names.map((name) => `«${name}»`).join(', ');
  });
};

showNames();
