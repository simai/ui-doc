// «В буфере» shows what the press put on the clipboard: the event carries the text.
document.addEventListener('sf-button-copy-copied', (event) => {
  const buffer = document.querySelector('[data-buffer]');
  const code = document.createElement('code');
  code.textContent = event.detail.text;
  buffer.replaceChildren(code);
});
