// A tag does not remove itself: its cross only sends `close`. The page that
// owns the values takes the tag away and moves focus to a neighbour, so the
// keyboard is not dropped at the top of the page.
const initializeTagRemoval = () => {
  const values = document.getElementById('tag-values');
  if (!values || values.dataset.exampleReady === 'true') return;
  values.dataset.exampleReady = 'true';

  values.addEventListener('close', (event) => {
    const tag = event.detail?.component;
    if (!tag || tag.localName !== 'sf-tag' || !values.contains(tag)) return;

    // The nearest tag that still has a button: the next one, else the
    // previous one. A static tag cannot take focus.
    const tags = [...values.querySelectorAll('sf-tag')];
    const index = tags.indexOf(tag);
    const target = [...tags.slice(index + 1), ...tags.slice(0, index).reverse()]
      .map((item) => item.querySelector('button'))
      .find(Boolean);
    tag.remove();
    target?.focus();
  });
};

initializeTagRemoval();
