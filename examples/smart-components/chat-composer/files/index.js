// The host uploads the files and hands the chips back: ready, uploading and
// refused by the server.
const initialize = async () => {
  await customElements.whenDefined('sf-chat-composer');
  const composer = document.querySelector('#chat-composer-files');
  if (!composer || composer.dataset.exampleReady === 'true') return;
  composer.dataset.exampleReady = 'true';
  composer.files = [
    {id: 'att_1', localId: 'f1', name: 'Договор.pdf', bytes: 48213, progress: null, error: ''},
    {localId: 'f2', name: 'Регламент.docx', bytes: 1572864, progress: 0.4, error: ''},
    {localId: 'f3', name: 'Скан.pdf', bytes: 2048, progress: null, error: 'не похоже на документ'},
  ];
};

initialize();
