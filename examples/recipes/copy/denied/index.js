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

// The button has selected the key; the page shows the hint next to it for as
// long as the result stays.
const mac = /Mac|iPhone|iPad/.test(navigator.platform);
button.addEventListener('sf-button-copy-copy-failed', (event) => {
  document.querySelector('[data-buffer]').textContent = `ничего — браузер отказал (${event.detail.code})`;
  if (event.detail.code !== 'denied') return;
  const hint = document.querySelector('[data-copy-hint]');
  hint.textContent = `Выделено — нажмите ${mac ? '⌘C' : 'Ctrl+C'}`;
  hint.hidden = false;
  clearTimeout(hint.timer);
  hint.timer = setTimeout(() => { hint.hidden = true; }, Number(button.getAttribute('duration')) || 2000);
});
