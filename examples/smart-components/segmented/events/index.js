// change: previous, value, item и component. select() и clear() отправляют то же событие.
document.querySelectorAll('[data-events-demo]').forEach((demo) => {
  const group = demo.querySelector('sf-button-group');
  const log = demo.querySelector('[data-events-log]');
  group.addEventListener('change', (event) => {
    const {previous, value, item, component} = event.detail;
    log.textContent = [
      `previous: "${previous}"`,
      `value: "${value}"`,
      `item: ${item ? `{value: "${item.value}", label: "${item.label}"}` : 'null'}`,
      `component: <${component.localName}>`,
    ].join('\n');
  });
  demo.querySelector('[data-action="select"]').addEventListener('click', () => group.select('m'));
  demo.querySelector('[data-action="clear"]').addEventListener('click', () => group.clear());
});
