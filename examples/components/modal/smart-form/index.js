// The modal shows a copy of the slot form, so the handler listens on document.
document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!form.matches('[data-modal-form="feedback"]')) return;
  event.preventDefault();
  const email = new FormData(form).get('email');
  document.querySelector('#smart-modal-form-result').textContent = `Отзыв отправлен с адреса ${email}`;
  document.querySelector('sf-modal[modal-id="smart-modal-form"]').close();
});
