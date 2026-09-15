const modeSelect = document.querySelector('#recipe-mode');
const status = document.querySelector('#recipe-status');
const preview = document.querySelector('#recipe-preview');
const documentOutput = document.querySelector('#recipe-document');
const htmlOutput = document.querySelector('#recipe-html');

let fixture;
const stable = (value) => JSON.stringify(value, (_, entry) =>
  entry && !Array.isArray(entry) && typeof entry === 'object'
    ? Object.fromEntries(Object.keys(entry).sort().map((key) => [key, entry[key]]))
    : entry);

async function show() {
  const mode = modeSelect.value;
  status.textContent = 'Собираем страницу…';
  preview.replaceChildren();
  documentOutput.textContent = '';
  htmlOutput.textContent = '';
  try {
    const expected = fixture.expected[mode];
    const result = await SF.Composition.resolveRecipe(fixture.recipe, {
      trustedContext: fixture.trustedContext,
      inputs: fixture.inputs[mode],
      executionContract: expected.dependencyReceipt.executionContract,
      ports: {
        readReference: async (reference) => ({
          source: fixture.sources[reference.ref],
          revision: reference.revision,
        }),
      },
    });
    if (result.diagnostics.length) throw new Error(result.diagnostics.map(({ code }) => code).join(', '));
    if (stable(result.document) !== stable(expected.document)) {
      throw new Error('Собранный Document отличается от проверяемого результата');
    }
    const rendered = await SF.Composition.render(result.document, {
      resolveBinding: async (binding) => ({ status: 'demo-only', binding }),
    });
    if (rendered.diagnostics.length) throw new Error(rendered.diagnostics.map(({ code }) => code).join(', '));
    documentOutput.textContent = JSON.stringify(result.document, null, 2);
    htmlOutput.textContent = rendered.html;
    const frame = document.createElement('iframe');
    frame.title = 'Собранная статья';
    frame.setAttribute('sandbox', '');
    frame.style.cssText = 'width:100%;height:220px;border:1px solid #888;box-sizing:border-box';
    frame.srcdoc = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'"><style>body{font:16px/1.5 system-ui;padding:16px;margin:0;color:#202124;background:#fff;overflow-wrap:anywhere}</style></head><body>${rendered.html}</body></html>`;
    preview.append(frame);
    status.textContent = 'Страница собрана из проверяемого Recipe.';
  } catch (error) {
    status.textContent = `Пример не собран: ${error.message}`;
  }
}

modeSelect.addEventListener('change', show);
fetch('./header-switch.json').then((response) => {
  if (!response.ok) throw new Error('Проверяемый пример не загружен');
  return response.json();
}).then((value) => {
  fixture = value;
  return show();
}).catch((error) => {
  status.textContent = `Пример не собран: ${error.message}`;
});
