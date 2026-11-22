const chosen = new Set();
const rows = [...document.querySelectorAll('#tags-filter-list li')];
const state = document.querySelector('#tags-filter-state');

const applyFilter = (topic, active) => {
  if (active) chosen.add(topic); else chosen.delete(topic);
  let shown = 0;
  rows.forEach((row) => {
    row.hidden = chosen.size > 0 && !chosen.has(row.dataset.topic);
    if (!row.hidden) shown += 1;
  });
  state.textContent = chosen.size ? `Темы: ${[...chosen].join(', ')}; статей: ${shown}` : `Показаны все статьи: ${shown}`;
};

// One listener for the whole row: each tag reports its new state.
document.querySelector('.filters').addEventListener('change', (event) => {
  if (event.target.localName !== 'sf-tag') return;
  applyFilter(event.target.getAttribute('text'), event.detail.active);
});
