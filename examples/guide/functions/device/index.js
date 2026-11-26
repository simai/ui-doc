const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
const sfReady = () => (window.SF?.ready ? Promise.resolve(window.SF.ready) : new Promise((resolve) => window.addEventListener('sf-loader-init', () => resolve(window.SF), {once: true})));
// SF.device: the layout of a place (a size container) and the page's pointer.
const start = async () => {
  await sfReady();
  const {device} = window.SF;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const place = document.getElementById('device-place');
  const item = document.getElementById('device-item');
  const draw = () => {
    document.getElementById('device-layout').textContent = `${device.layoutOf(item)} (${Math.round(place.getBoundingClientRect().width)} px)`;
    document.getElementById('device-pointer').textContent = device.pointer();
  };
  for (const button of document.querySelectorAll('[data-device-width]')) {
    button.addEventListener('click', () => {
      place.style.inlineSize = `${button.dataset.deviceWidth}px`;
      draw();
    });
  }
  place.style.inlineSize = '720px';
  draw();
  log('SF.device', {layout: device.layoutOf(item), pointer: device.pointer(), phoneBelow: device.PHONE_BELOW});
  device.watchLayout(item, (layout) => log('watchLayout', layout));
  device.watchPointer((pointer) => {
    draw();
    log('watchPointer', pointer);
  });
};

start();
