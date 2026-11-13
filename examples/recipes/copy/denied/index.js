// The refusal is simulated: for this press the frame withholds the clipboard
// and the fallback, as a page in a frame without clipboard access would.
const button = document.querySelector('sf-button-copy');
button.addEventListener('click', () => {
  const clipboard = navigator.clipboard;
  const writeText = clipboard?.writeText;
  const execCommand = document.execCommand;
  if (clipboard) clipboard.writeText = () => Promise.reject(new DOMException('Write permission denied.', 'NotAllowedError'));
  document.execCommand = () => false;
  setTimeout(() => {
    if (clipboard) delete clipboard.writeText;
    if (clipboard && clipboard.writeText !== writeText) clipboard.writeText = writeText;
    document.execCommand = execCommand;
  }, 1000);
}, true);

// The button has selected the key and shows which keys copy it above itself;
// the page only says what is on the clipboard.
button.addEventListener('sf-button-copy-copy-failed', (event) => {
  document.querySelector('[data-buffer]').textContent = `ничего — браузер отказал (${event.detail.code})`;
});
