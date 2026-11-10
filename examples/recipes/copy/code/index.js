// The code block puts its own copy button in its head and reports the copied
// text with sf:copy-success; the line numbers stay out of it.
document.addEventListener('sf:copy-success', (event) => {
  const buffer = document.querySelector('[data-buffer]');
  const code = document.createElement('pre');
  code.className = 'm-0';
  code.textContent = event.detail.text;
  buffer.replaceChildren(code);
});
