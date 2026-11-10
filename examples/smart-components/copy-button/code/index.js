// The numbered block is copied without its line numbers.
document.addEventListener('sf-button-copy-copied', (event) => {
  const text = document.createElement('pre');
  text.className = 'm-0';
  text.textContent = event.detail.text;
  document.querySelector('[data-buffer]').replaceChildren(text);
});
