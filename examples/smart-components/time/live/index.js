// No now: the element counts from the reader's clock and draws itself again
// each minute while the moment is relative.
const time = document.querySelector('#time-live');
if (time && !time.getAttribute('datetime')) time.setAttribute('datetime', new Date().toISOString());
