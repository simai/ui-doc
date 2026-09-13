const input = document.querySelector('#layout-json');
const status = document.querySelector('#layout-diagnostics');
let preview = document.querySelector('#layout-preview');
async function show() {
  preview.srcdoc = ''; document.querySelector('#layout-html').textContent = '';
  try {
    const doc = JSON.parse(input.value);
    const checked = SF.Composition.validate(doc);
    if (!checked.valid) { status.textContent = JSON.stringify(checked.diagnostics, null, 2); return; }
    const normalized = await SF.Composition.normalize(doc);
    const result = await SF.Composition.render(normalized.document, {
      resolveBinding: async binding => ({ status: 'demo-only', binding })
    });
    status.textContent = JSON.stringify({ digest: normalized.digest, resources: result.assets, diagnostics: result.diagnostics, bindings: normalized.dependencies.bindings }, null, 2);
    document.querySelector('#layout-html').textContent = result.html;
    const nextPreview = preview.cloneNode(false);
    nextPreview.srcdoc = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'"><style>body{font:16px/1.5 system-ui;padding:16px;color:#202124;background:white;overflow-wrap:anywhere}.sf-composition-columns{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px}.sf-composition-column{border:1px solid #888;padding:12px}h1,h2{line-height:1.2}</style></head><body>${result.html}</body></html>`;
    preview.replaceWith(nextPreview);
    preview = nextPreview;
  } catch (error) { status.textContent = error.message; }
}
document.querySelector('#layout-render').addEventListener('click', show);
function loadSample() { return fetch('./assets/' + document.querySelector('#layout-sample').value + '.json').then(response => { if (!response.ok) throw Error('Не загружен пример'); return response.json(); }).then(doc => { input.value = JSON.stringify(doc, null, 2); return show(); }).catch(error => { status.textContent = error.message; });

}
document.querySelector("#layout-sample").addEventListener("change", loadSample);
loadSample();
