// The page counts the share and the words; the bar compares it with its
// thresholds (warning-at 80, error-at 95) and takes the colour itself. The
// slider only plays the storage filling up.

const LIMIT = 10;
const gb = (n) => n.toLocaleString('ru-RU', {maximumFractionDigits: 1});

const show = (used) => {
  const percent = Math.round((used / LIMIT) * 100);
  const left = Math.max(0, LIMIT - used);
  const valueText = `${percent} %, ${gb(used)} из ${LIMIT} ГБ`;
  const help = left > 0 ? `${gb(used)} из ${LIMIT} ГБ · свободно ${gb(left)} ГБ` : 'Места нет: новые файлы не сохраняются';
  for (const id of ['#quota-disk', '#quota-row']) {
    const bar = document.querySelector(id);
    bar.setAttribute('value', String(percent));
    bar.setAttribute('value-text', valueText);
  }
  document.querySelector('#quota-disk-help').textContent = help;
  document.querySelector('#quota-row-help').textContent = `${gb(used)} из ${LIMIT} ГБ`;
};

document.addEventListener('change', (event) => {
  if (event.target.id === 'quota-used') show(Number(event.detail?.value ?? event.target.value));
});
