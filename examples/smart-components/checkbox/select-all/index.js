// The «all» box summarises the boxes below it: checked when every one is,
// mixed when some are, empty when none are. Clicking it sets them all.
const initializeSelectAll = async () => {
  const group = document.getElementById('export-columns');
  if (!group || group.dataset.exampleReady === 'true') return;
  group.dataset.exampleReady = 'true';

  await customElements.whenDefined('sf-checkbox');
  const all = group.querySelector('[data-role="all"]');
  const items = [...group.querySelectorAll('[data-role="item"]')];
  await Promise.all([all, ...items].map((box) => box.whenRendered()));

  const summarise = () => {
    const checked = items.filter((box) => box.isChecked()).length;
    all.setChecked(checked === items.length);
    all.setIndeterminate(checked > 0 && checked < items.length);
  };

  group.addEventListener('change', (event) => {
    if (all.contains(event.target)) {
      const next = all.isChecked();
      items.forEach((box) => box.setChecked(next));
    }
    summarise();
  });
  summarise();
};

initializeSelectAll();
