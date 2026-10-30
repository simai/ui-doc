// A value off the subset is cleaned on load: handlers, scripts, unsafe links
// and unknown elements do not survive, their text does.
const initialize = async () => {
  await customElements.whenDefined('sf-rich-text');
  const field = document.querySelector('#rich-text-cleaned');
  const output = document.querySelector('#rich-text-cleaned-value');
  if (!field || field.dataset.exampleReady === 'true') return;
  field.dataset.exampleReady = 'true';
  field.value = '<p onclick="steal()">Привет, <script>alert(1)</script><a href="javascript:alert(1)">мир</a> <span style="font-weight:700">полужирный</span></p><div>Второй блок</div><img src=x onerror=alert(1)>';
  if (output) output.textContent = field.value;
};

initialize();
