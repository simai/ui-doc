// The host sends the message and clears the field only when it was accepted;
// here "sending" is a short pause. Files are "uploaded" the same way.
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initialize = async () => {
  await customElements.whenDefined('sf-chat-composer');
  const composer = document.querySelector('#chat-composer-send');
  const sent = document.querySelector('#chat-composer-sent');
  if (!composer || composer.dataset.exampleReady === 'true') return;
  composer.dataset.exampleReady = 'true';
  let files = [];
  let count = 0;

  const send = async (text, ids) => {
    await pause(400);
    // The message element is not on the page yet: ask the loader for it.
    await window.SF.Loader.ensure(['sf-chat-message']);
    await customElements.whenDefined('sf-chat-message');
    const message = document.createElement('sf-chat-message');
    message.setAttribute('template', 'person');
    count += 1;
    message.message = {id: count, body: text, authorName: 'Вы', files: files.filter((file) => ids.includes(file.id)).map((file) => ({id: file.id, name: file.name, size: file.bytes, state: 'ready'}))};
    message.display = {own: true, first: true, last: true};
    sent.append(message);
    return true;
  };

  composer.addEventListener('sf-chat-composer-submit', async (event) => {
    event.preventDefault();
    if (await send(event.detail.text, event.detail['attachment-ids'])) {
      files = [];
      composer.clear();
    }
  });
  composer.addEventListener('sf-chat-composer-attach', async (event) => {
    const added = event.detail.files.map((file, index) => ({localId: `f${count}-${index}-${file.name}`, name: file.name, bytes: file.size, progress: 0.3, error: ''}));
    files = [...files, ...added];
    composer.files = files;
    await pause(600);
    files = files.map((file) => (added.includes(file) ? {...file, id: `att_${file.localId}`, progress: null} : file));
    composer.files = files;
  });
  composer.addEventListener('sf-chat-composer-detach', (event) => {
    files = files.filter((file) => file.id !== event.detail.id);
    composer.files = files;
  });
};

initialize();

// Only for this example: the documentation frame may not send forms, and the
// browser then does not even report the submit, so the send button would not
// reach the composer (Enter sends without the form). The button's press asks
// the form for the submit, as the browser does on a site. On a site this part
// is not needed.
const composerForSubmit = document.querySelector('#chat-composer-send');
if (composerForSubmit && composerForSubmit.dataset.submitShim !== 'true') {
  composerForSubmit.dataset.submitShim = 'true';
  composerForSubmit.addEventListener('click', (event) => {
    if (!event.target.closest('button[type="submit"]')) return;
    event.preventDefault();
    composerForSubmit.querySelector('form')?.dispatchEvent(new Event('submit', {cancelable: true}));
  }, true);
}
