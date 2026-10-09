// Two colours, so the difference between «chosen» and «inherited» can be seen
// side by side: the first carries a value, the second carries none and reports
// the colour that applies while it stays empty.
const initializeColourExample = async () => {
  await customElements.whenDefined('sf-color');

  for (const colour of document.querySelectorAll('#brand-colour, #accent-colour')) {
    if (colour.dataset.exampleReady === 'true') continue;
    colour.dataset.exampleReady = 'true';
    colour.addEventListener('change', (event) => {
      // A host stores the value it is given. An empty one means the inherited
      // colour applies again, which is a different thing from the same colour
      // written out: only one of them follows the theme when the theme changes.
      const chosen = event.detail?.value;
      colour.setAttribute('aria-description', chosen ? `выбран ${chosen}` : 'наследуется');
    });
  }
};

initializeColourExample();
