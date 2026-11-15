// The example shows the failed state without a real request: the frame has
// no origin, so a request to the documentation site would end in a CORS
// error in the console. The answer here is a plain 404.
const realFetch = window.fetch.bind(window);
window.fetch = (input, init) => String(input).includes('/parts/missing/')
  ? Promise.resolve(new Response('', { status: 404, statusText: 'Not Found' }))
  : realFetch(input, init);
document.getElementById('part-missing').setAttribute('src', '/ru/parts/missing/');
