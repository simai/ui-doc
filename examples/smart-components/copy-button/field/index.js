// «В буфере» shows what the press put on the clipboard: the whole value, not
// the part the field has room for.
document.addEventListener('sf-button-copy-copied', (event) => {
  const code = document.createElement('code');
  code.textContent = event.detail.text;
  document.querySelector('[data-buffer]').replaceChildren(code);
});
