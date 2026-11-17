// A pretend server: the uploader reports progress for two seconds and
// answers with a stored id; "Отменить" aborts it through the signal.
const pretendUpload = (file, {signal, onProgress}) => new Promise((resolve, reject) => {
  let done = 0;
  const timer = setInterval(() => {
    done = Math.min(file.size, done + Math.ceil(file.size / 10));
    onProgress(done, file.size);
    if (done >= file.size) {
      clearInterval(timer);
      resolve({value: `img-${Date.now()}`, href: URL.createObjectURL(file)});
    }
  }, 200);
  signal.addEventListener('abort', () => {
    clearInterval(timer);
    reject(new DOMException('Передача отменена', 'AbortError'));
  });
});

const initializeUploadExample = async () => {
  await customElements.whenDefined('sf-input-image');
  const field = document.getElementById('image-upload');
  if (!field || field.dataset.exampleReady === 'true') return;
  field.dataset.exampleReady = 'true';
  field.uploader = pretendUpload;
};

initializeUploadExample();
