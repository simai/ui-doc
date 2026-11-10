const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// SF.sanitizeHtml turns untrusted HTML into a fragment of allowed elements.
const start = async () => {
  const SF = await window.SF.ready;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  const output = document.getElementById('sanitize-output');
  document.getElementById('sanitize-run').addEventListener('click', () => {
    const html = document.getElementById('sanitize-source').value;
    output.replaceChildren(SF.sanitizeHtml(html));
    log('SF.sanitizeHtml', {html: output.innerHTML});
    log('SF.safeHref', {'javascript:alert(4)': SF.safeHref('javascript:alert(4)'), 'https://simai.io/': SF.safeHref('https://simai.io/')});
  });
};

start();
