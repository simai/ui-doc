const log = document.querySelector('#copy-button-log');
document.addEventListener('sf-copy-button-copied', (event) => { log.textContent = `Событие sf-copy-button-copied: «${event.detail.text}»`; });
document.addEventListener('sf-copy-button-copy-failed', (event) => { log.textContent = `Событие sf-copy-button-copy-failed: ${event.detail.code}`; });
