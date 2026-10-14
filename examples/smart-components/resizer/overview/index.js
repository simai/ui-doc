const log = document.querySelector('#resizer-log');
document.querySelector('sf-resizer').addEventListener('sf-resize', (event) => {
  const {width, phase} = event.detail;
  if (phase !== 'move') log.textContent = `${phase === 'reset' ? 'Ширина возвращена' : 'Новая ширина'}: ${Math.round(width)} px`;
});
