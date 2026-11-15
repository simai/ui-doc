// The page owns the library: when the field asks for it, the page "opens"
// its picker and answers with the chosen picture through setValue().
const initializeSourcesExample = async () => {
  await customElements.whenDefined('sf-input-image');
  const field = document.getElementById('image-sources');
  if (!field || field.dataset.exampleReady === 'true') return;
  field.dataset.exampleReady = 'true';
  field.addEventListener('sf-input-image-library', () => {
    field.setValue({value: '18', label: 'library-photo.jpg', mime: 'image/jpeg', size: 192870, href: 'assets/photo.jpg'});
  });
};

initializeSourcesExample();
