// What cannot be brought back is asked in a window: the consequences on a
// quiet plate, the deciding phrase on its own line, the name typed to
// confirm. The red answer is always filled; pressed too early it puts the
// cursor into the field and says why. The window shows a copy of its slot
// form, so the listeners sit on document and read the shown copy.
const NAME = 'shop-example';

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || !form.matches('[data-final-form]')) return;
  event.preventDefault();
  const field = form.querySelector('sf-input[name="confirm"]');
  if (String(field.value ?? '').trim() !== NAME) {
    field.setAttribute('invalid', '');
    field.focus();
    docara.example.log('invalid', {typed: String(field.value ?? '')});
    return;
  }
  document.querySelector('sf-modal[modal-id="final-modal"]').close();
  document.querySelector('#final-result').textContent = `Сайт ${NAME} удалён.`;
  docara.example.log('deleted', {site: NAME});
});

document.addEventListener('input', (event) => {
  const field = event.target.closest?.('sf-input[name="confirm"]');
  if (field && String(field.value ?? '').trim() === NAME) field.removeAttribute('invalid');
});
