// The page creates the tag, as a server would: after a moment it answers
// with the new item, which the field chooses; an empty name is refused.
const initializeCreateExample = async () => {
  await customElements.whenDefined('sf-input-lookup');
  const field = document.getElementById('lookup-create');
  if (!field || field.dataset.exampleReady === 'true') return;
  field.dataset.exampleReady = 'true';
  field.addEventListener('create', (event) => {
    const {text, respond} = event.detail;
    respond(new Promise((resolve) => {
      setTimeout(() => resolve(text.length < 2
        ? {error: 'Название метки — от двух букв'}
        : {value: `tag-${Date.now()}`, label: text, icon: 'sell'}), 500);
    }));
  });
};

initializeCreateExample();
