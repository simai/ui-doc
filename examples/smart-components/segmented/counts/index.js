// The option's count arrives in event.detail.item together with its label.
const initialize = async () => {
  await customElements.whenDefined('sf-segmented');
  const group = document.querySelector('sf-segmented');
  if (!group || group.dataset.exampleReady === 'true') return;
  group.dataset.exampleReady = 'true';
  group.addEventListener('change', (event) => {
    const {item} = event.detail;
    docara.example.log('change', {value: event.detail.value, label: item?.label, count: item?.count});
  });
};

initialize();
