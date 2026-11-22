const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['form']);
  // apply="instant": every change acts at once, one event per field.
  document.querySelector('#form-block').addEventListener('sf-form-change', (event) => {
    console.log(`Поле ${event.detail.key}:`, event.detail.value);
  });
};

start();
