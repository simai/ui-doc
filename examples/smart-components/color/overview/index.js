// Two colours, so the difference between «chosen» and «inherited» can be seen
// side by side: the first carries a value, the second carries none and shows
// the colour that applies while it stays empty.
const initializeColourExample = async () => {
  const status = document.getElementById('colour-status');
  if (!status || status.dataset.exampleReady === 'true') return;
  status.dataset.exampleReady = 'true';

  await customElements.whenDefined('sf-color');
  for (const colour of document.querySelectorAll('#brand-colour, #accent-colour')) {
    colour.addEventListener('change', (event) => {
      // An empty value means the inherited colour applies again, which is not
      // the same as that colour written out: only the first follows the theme.
      const {name, value} = event.detail;
      status.textContent = value ? `${name}: ${value}` : `${name}: наследуется`;
    });
  }
};

initializeColourExample();
