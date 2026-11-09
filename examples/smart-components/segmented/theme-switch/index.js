// The switch calls SF.Loader.setTheme itself; change arrives when the theme
// has already changed.
const initialize = async () => {
  await customElements.whenDefined('sf-segmented');
  const group = document.querySelector('sf-segmented[theme-switch]');
  if (!group || group.dataset.exampleReady === 'true') return;
  group.dataset.exampleReady = 'true';
  group.addEventListener('change', (event) => {
    docara.example.log('change', `value: ${event.detail.value}`);
  });
};

initialize();
