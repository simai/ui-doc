// The bar stores nothing: the page hears what the person did and keeps it.
// The example log under the frame shows each event; the page here only
// cancels the link, so the example stays on the page.
document.addEventListener('sf-alert-bar-navigate', (event) => event.preventDefault());
