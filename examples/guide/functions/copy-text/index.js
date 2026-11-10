const log = (name, data) => (window.docara?.example?.log ? window.docara.example.log(name, data) : console.log(name, data));
// SF.copyText says how it copied, or why it could not.
const start = async () => {
  const SF = await window.SF.ready;
  if (document.body.dataset.exampleReady === 'true') return;
  document.body.dataset.exampleReady = 'true';
  document.getElementById('copy-text-run').addEventListener('click', async () => {
    const text = document.getElementById('copy-text-value').textContent;
    try {
      log('SF.copyText', {text, how: await SF.copyText(text)});
    } catch (error) {
      log('SF.copyText', {text, error: error.name === 'Error' ? error.message : error.name});
    }
  });
};

start();
