document.querySelectorAll('[data-toast-lifetime-demo]').forEach((demo) => {
  const slot = demo.querySelector('[data-toast-lifetime-slot]');
  const template = demo.querySelector('[data-toast-lifetime-template]');
  const restore = demo.querySelector('[data-toast-lifetime-restore]');

  slot.addEventListener('sf-toast-close', () => {
    restore.hidden = false;
  });

  restore.addEventListener('click', () => {
    slot.replaceChildren(template.content.cloneNode(true));
    restore.hidden = true;
  });
});
