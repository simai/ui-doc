const log = document.querySelector('#copy-button-log');
document.addEventListener('sf-copy', (event) => { log.textContent = `Событие sf-copy: «${event.detail.text}»`; });
document.addEventListener('sf-copy-error', (event) => { log.textContent = `Событие sf-copy-error: ${event.detail.code}`; });
