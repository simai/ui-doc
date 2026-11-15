const word = (n) => n % 10 === 1 && n % 100 !== 11 ? 'ночь' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 'ночи' : 'ночей');
customElements.whenDefined('sf-input-date').then(() => {
  const checkIn = document.getElementById('check-in');
  const checkOut = document.getElementById('check-out');
  const nights = document.getElementById('nights');
  const count = () => {
    const a = checkIn.value, b = checkOut.value;
    if (!a || !b) { nights.textContent = ''; return; }
    const n = Math.round((new Date(b) - new Date(a)) / 864e5);
    nights.textContent = n > 0 ? `${n} ${word(n)}` : 'Выезд должен быть позже заезда';
  };
  checkIn.addEventListener('sf-input-date-change', () => {
    if (!checkIn.value) return;
    const next = new Date(checkIn.value); next.setDate(next.getDate() + 1);
    checkOut.setAttribute('min-date', next.toISOString().slice(0, 10));
    count();
  });
  checkOut.addEventListener('sf-input-date-change', count);
});
