const initializeMixedCheckbox = () => {
  const input = document.querySelector('input[name="mixed"]');
  if (!input) return false;

  // Native state is set before the component runtime arrives, so its initial
  // scan renders the correct icon even in an asynchronously hydrated preview.
  input.indeterminate = true;

  if (!window.SF?.Checkbox?.setState) return false;

  window.SF.Checkbox.setState(input, {
    checked: false,
    indeterminate: true,
  });
  return true;
};

if (!initializeMixedCheckbox()) {
  window.addEventListener('Checkbox:ready', () => {
    window.setTimeout(initializeMixedCheckbox, 0);
  }, { once: true });
}
