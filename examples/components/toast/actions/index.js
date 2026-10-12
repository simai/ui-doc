document.querySelectorAll('[data-toast-demo]').forEach((demo) => {
  const slot = demo.querySelector('[data-toast-demo-slot]');
  const template = demo.querySelector('[data-toast-demo-template]');
  const result = demo.querySelector('[data-toast-demo-result]');
  const restore = demo.querySelector('[data-toast-demo-restore]');

  demo.addEventListener('sf-toast-action', (event) => {
    result.textContent = `Выбрано действие «${event.detail.action}». Сообщение осталось на странице.`;
  });

  demo.addEventListener('sf-toast-close', () => {
    result.textContent = 'Сообщение закрыто.';
    restore.hidden = false;
  });

  restore.addEventListener('click', () => {
    slot.replaceChildren(template.content.cloneNode(true));
    result.textContent = '';
    restore.hidden = true;
    slot.querySelector('[data-action]')?.focus();
  });
});
