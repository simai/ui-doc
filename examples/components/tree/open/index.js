const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Tree', () => {
  const tree = document.querySelector('#tree-open-files');
  const docs = tree.querySelector('[data-value="docs"]');
  const result = document.querySelector('#tree-open-result');

  // Enter on a file: the page opens it.
  tree.addEventListener('sf-tree-open', (event) => {
    result.textContent = `Открыт файл: ${event.detail.value}`;
  });

  // A branch from code, as a link elsewhere on the page would do.
  document.querySelector('#tree-open-docs').addEventListener('click', () => SF.Tree.open(docs));
  document.querySelector('#tree-close-docs').addEventListener('click', () => SF.Tree.close(docs));
}));
