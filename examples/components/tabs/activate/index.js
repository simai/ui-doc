const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Tabs', () => {
  // A link elsewhere on the page opens the third tab by its number.
  document.querySelector('#tabs-open-history').addEventListener('click', () => {
    SF.Tabs.activate(document.querySelector('#project-tabs'), 2);
  });
}));
