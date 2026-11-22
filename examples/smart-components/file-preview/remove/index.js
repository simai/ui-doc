// The "server" answers after a pause; the row goes only when it confirmed.
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const api = {
  deleteAttachment: async () => { await pause(500); return true; },
  downloadAttachment: (value) => `${value.fileName}, ${value.fileSize}`,
};

const initialize = async () => {
  await customElements.whenDefined('sf-file-preview');
  const state = document.querySelector('#file-preview-remove-state');
  document.querySelectorAll('#file-preview-remove-list sf-file-preview').forEach((file) => {
    file.onRemove(async (event) => {
      state.textContent = `Удаляем «${event.detail.value.fileName}»…`;
      if (await api.deleteAttachment(event.detail.value.href)) {
        file.remove();
        state.textContent = `Файл «${event.detail.value.fileName}» удалён.`;
      }
    });
    // In this example the download goes nowhere: the page says what it would fetch.
    file.onDownload((event) => {
      event.preventDefault();
      state.textContent = `Скачали бы: ${api.downloadAttachment(event.detail.value)}`;
    });
  });
};

initialize();
