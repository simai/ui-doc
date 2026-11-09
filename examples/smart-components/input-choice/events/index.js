// input, then change, once per press; detail carries the new value, the list
// of values, the option pressed and whether it is chosen now.
const initialize = async () => {
  await customElements.whenDefined('sf-input-choice');
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const field = document.querySelector('#choice-events');
  for (const type of ['input', 'change']) {
    field.addEventListener(type, (event) => {
      const {value, values, item, checked} = event.detail ?? {};
      docara.example.log(type, {value, values, item: item?.value, checked});
    });
  }
};

initialize();
