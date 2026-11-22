const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['tag-group', 'tag']);
  const group = document.querySelector('#tag-group-cities');
  const left = document.querySelector('#tag-group-cities-left');

  // The cross and Delete only ask: the page removes the tag itself.
  group.addEventListener('sf-tag-close', (event) => {
    event.target.remove();
    // Only the group's own tags: the copies in «+N» belong to its popup.
    const count = group.querySelectorAll(':scope > sf-tag').length;
    left.textContent = count ? `Выбрано городов: ${count}.` : 'Ни одного города не выбрано.';
  });
};

start();
