const log = document.querySelector('#resizer-fold-log');
document.querySelector('#resizer-fold').addEventListener('sf-resizer-resize', (event) => {
  const {width, phase} = event.detail;
  if (phase === 'move') return;
  log.textContent = width === 0 ? 'Меню свёрнуто' : `Ширина меню: ${Math.round(width)} px`;
});
