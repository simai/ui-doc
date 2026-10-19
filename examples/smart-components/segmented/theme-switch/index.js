// Переключатель сам вызывает SF.Loader.setTheme; событие change приходит,
// когда тема уже сменилась.
const names = {system: 'как в системе', light: 'светлая', dark: 'тёмная'};
document.querySelectorAll('[data-theme-demo]').forEach((demo) => {
  const result = demo.querySelector('[data-theme-result]');
  demo.addEventListener('change', (event) => {
    if (event.target.localName !== 'sf-button-group') return;
    result.textContent = `Выбор темы: ${names[event.detail.value] ?? event.detail.value}`;
  });
});
