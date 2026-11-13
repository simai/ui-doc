// A button that is not sf-button-copy copies through the attribute route:
// data-sf-copy holds the text, data-sf-copy-target names the element to copy.
// The feedback is the same; the button says what happened with sf:copy-success
// {text, method} or sf:copy-error {code}.
if (!document.body.dataset.exampleReady) {
  document.body.dataset.exampleReady = 'true';
  document.addEventListener('sf:copy-success', (event) => docara.example.log('sf:copy-success', event.detail));
  document.addEventListener('sf:copy-error', (event) => docara.example.log('sf:copy-error', event.detail));
}
