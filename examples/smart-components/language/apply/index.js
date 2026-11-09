// apply="page" (the default) inside this example's frame: the choice calls
// SF.language.use and sets lang and dir on the frame's <html>, so the
// pagination below answers in the chosen language. The documentation page
// around the frame keeps its own language.

const initialize = async () => {
  await customElements.whenDefined('sf-language');
  const picker = document.querySelector('#language-apply');
  const root = document.querySelector('#language-apply-root');
  if (!picker || !root || picker.dataset.exampleReady === 'true') return;
  picker.dataset.exampleReady = 'true';
  const html = document.documentElement;
  const show = () => {
    root.textContent = `<html lang="${html.getAttribute('lang') ?? ''}" dir="${html.getAttribute('dir') ?? 'ltr'}">`;
  };
  new MutationObserver(show).observe(html, {attributes: true, attributeFilter: ['lang', 'dir']});
  show();
};

initialize();
