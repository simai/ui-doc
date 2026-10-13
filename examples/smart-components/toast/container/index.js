// The container is on the page from the first load and is the live region:
// a toast put into it is read out, so the toast itself needs no role. The
// container decides the corner, the order and the gap; each toast removes
// itself when closed or when its time is up.
const initializeToastContainer = () => {
  const trigger = document.getElementById('toast-container-trigger');
  const container = document.getElementById('toast-container-demo');
  if (!trigger || !container || trigger.dataset.exampleReady === 'true') return;
  trigger.dataset.exampleReady = 'true';

  trigger.addEventListener('click', () => {
    const toast = document.createElement('sf-toast');
    toast.setAttribute('status', 'success');
    toast.setAttribute('icon', 'check_circle');
    toast.setAttribute('title', 'Черновик сохранён');
    toast.setAttribute('duration', '5000');
    toast.setAttribute('close-label', 'Закрыть сообщение');
    container.append(toast);
  });
};

initializeToastContainer();
