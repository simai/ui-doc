// «В буфере» shows what the press put on the clipboard: the commands without
// line numbers.
document.addEventListener('sf-button-copy-copied', (event) => {
  const text = document.createElement('pre');
  text.className = 'm-0';
  text.textContent = event.detail.text;
  document.querySelector('[data-buffer]').replaceChildren(text);
});
