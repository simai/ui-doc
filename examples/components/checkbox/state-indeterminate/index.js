// The component script moves data-indeterminate into the input property and
// draws the dash. Where the preview runs without the component script, the
// demo does the same so the state stays visible.
document.querySelectorAll('input[data-indeterminate]').forEach((input) => {
  if (window.SF?.Checkbox?.setState) {
    window.SF.Checkbox.setState(input, {checked: false, indeterminate: true});
    return;
  }
  input.indeterminate = true;
  const icon = input.parentElement?.querySelector('.sf-icon');
  if (icon && icon.textContent === '') icon.textContent = 'remove';
});
