const whenLoader = (run) => (window.SF?.Loader ? run() : window.addEventListener('sf-loader-init', run, {once: true}));

whenLoader(() => SF.Loader.ready('Fab', (Fab) => {
  if (document.querySelector('.sf-fab')) return;
  const fab = new Fab({attrs: {'aria-label': 'Наверх'}});
  document.body.append(fab.render());
}));

// Only for this example: the documentation frame does not scroll by itself
// (it is as tall as the block above and clips the rest), so the text is let
// out of the frame's body and the wheel and a finger scroll the frame's own
// page, as a browser scrolls a real page. On a site this part is not needed.
window.addEventListener('load', () => { document.body.style.overflow = 'visible'; });
const scrollPage = (delta) => {
  const before = window.scrollY;
  window.scrollBy(0, delta);
  return window.scrollY !== before;
};
window.addEventListener('wheel', (event) => {
  if (scrollPage(event.deltaY)) event.preventDefault();
}, {passive: false});
let touchY = null;
window.addEventListener('touchstart', (event) => { touchY = event.touches[0].clientY; }, {passive: true});
window.addEventListener('touchmove', (event) => {
  const y = event.touches[0].clientY;
  if (touchY !== null && scrollPage(touchY - y)) event.preventDefault();
  touchY = y;
}, {passive: false});
