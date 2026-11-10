const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// SF.Mask.create on a phone field and an amount field; the unmasked value on every input.
const start = async () => {
  const SF = await window.SF.ready;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const phoneField = document.getElementById('mask-phone');
  const amountField = document.getElementById('mask-amount');
  const phone = await SF.Mask.create(phoneField, {mask: '+{7} (000) 000-00-00', lazy: false});
  const amount = await SF.Mask.create(amountField, {mask: 'Number', thousandsSeparator: ' ', scale: 2, min: 0});
  phoneField.addEventListener('input', () => log('телефон', {value: phone.value, unmaskedValue: phone.unmaskedValue}));
  amountField.addEventListener('input', () => log('сумма', {value: amount.value, typedValue: amount.typedValue}));
  log('SF.Mask.pipe', {phone: await SF.Mask.pipe('9161234567', '+{7} (000) 000-00-00')});
};

start();
