document.querySelectorAll('[data-alert-demo]').forEach((demo) => {
  const slot = demo.querySelector('[data-alert-demo-slot]');
  const template = demo.querySelector('[data-alert-demo-template]');
  const closedResult = demo.querySelector('[data-alert-demo-result]');
  const restoreButton = demo.querySelector('[data-alert-demo-restore]');
  const actionResult = demo.querySelector('[data-alert-demo-action-result]');

  demo.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-action], [data-close]');
    const alert = trigger?.closest('.sf-alert');

    if (!trigger || !alert) return;

    if (trigger.matches('[data-close]')) {
      event.preventDefault();
      alert.dispatchEvent(new CustomEvent('sf-alert-close', {
        bubbles: true,
        detail: {alert, trigger},
      }));
      alert.remove();
      return;
    }

    alert.dispatchEvent(new CustomEvent('sf-alert-action', {
      bubbles: true,
      detail: {action: trigger.dataset.action, alert, trigger},
    }));
  });

  demo.addEventListener('sf-alert-action', (event) => {
    if (event.detail?.action !== 'download') return;

    actionResult.textContent = 'Выбрано действие «Скачать». Уведомление осталось на странице.';
    actionResult.hidden = false;
  });

  demo.addEventListener('sf-alert-close', () => {
    actionResult.hidden = true;
    closedResult.hidden = false;
  });

  restoreButton.addEventListener('click', () => {
    slot.replaceChildren(template.content.cloneNode(true));
    closedResult.hidden = true;
    actionResult.hidden = true;

    requestAnimationFrame(() => {
      slot.querySelector('[data-action]')?.focus();
    });
  });
});
