// The handle is built by the component script, so the focus ring is shown by
// putting the focus-visible class on it once it exists.
const show = () => {
  const handle = document.querySelector('.sf-range-slider-handle');
  if (handle) handle.classList.add('focus-visible');
  else requestAnimationFrame(show);
};
show();
