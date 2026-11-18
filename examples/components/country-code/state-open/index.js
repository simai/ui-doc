// The list opens as a person opens it: the script answers a press on the flag.
const root = document.querySelector('.sf-country-code');
const open = () => {
  const toggle = root.querySelector('.sf-country-code-left[role="button"]');
  if (!toggle) { requestAnimationFrame(open); return; }
  if (!root.classList.contains('open')) toggle.click();
};
open();
