document.querySelectorAll('.sf-tag--removable > .sf-icon-button').forEach((button) => {
  button.addEventListener('click', () => button.closest('.sf-tag--removable')?.remove());
});
