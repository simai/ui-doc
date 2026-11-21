// Each button opens its panel with open(): the four panels come from the same
// edge, so their widths compare side by side. The example draws at a desktop
// width (1280): in a frame narrower than 44rem every side panel is the whole
// screen, as on a phone, and the four sizes would look the same.
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));

const start = async () => {
  const SF = await sfReady();
  await SF.whenDefined(['drawer']);
  for (const button of document.querySelectorAll('[data-size-panel]')) {
    const drawer = document.getElementById(button.dataset.sizePanel);
    button.addEventListener('click', () => {
      // One panel at a time: the one open before closes first.
      for (const other of document.querySelectorAll('sf-drawer[open]')) if (other !== drawer) other.close();
      drawer.toggle();
    });
  }
};

start();
