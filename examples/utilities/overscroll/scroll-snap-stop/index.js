function findClosestSnapStopItem(scroller) {
  var items = scroller.querySelectorAll('[data-item]');
  if (!items.length) return '-';

  var scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
  var best = null;
  var bestDistance = Infinity;

  items.forEach(function (item) {
    var itemCenter = item.offsetLeft + item.clientWidth / 2;
    var distance = Math.abs(itemCenter - scrollerCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = item;
    }
  });

  return best ? best.getAttribute('data-item') || '-' : '-';
}

function updateSnapStopLabel(scroller) {
  var label = document.getElementById(scroller.id + '-active');
  if (!label) return;
  label.textContent = findClosestSnapStopItem(scroller);
}

function settleAndUpdateSnapStop(scroller) {
  var stable = 0;
  var lastLeft = scroller.scrollLeft;

  function tick() {
    var current = scroller.scrollLeft;
    if (Math.abs(current - lastLeft) < 0.5) stable += 1;
    else stable = 0;
    lastLeft = current;

    if (stable >= 3) {
      updateSnapStopLabel(scroller);
      return;
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function getItemByIndex(scroller, index) {
  var items = scroller.querySelectorAll('[data-item]');
  if (!items.length) return null;
  var clamped = Math.max(0, Math.min(index, items.length - 1));
  return items[clamped];
}

function scrollToItemCenter(scroller, item) {
  if (!item) return;
  var targetLeft = item.offsetLeft - (scroller.clientWidth - item.clientWidth) / 2;
  var maxLeft = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  var clamped = Math.max(0, Math.min(targetLeft, maxLeft));
  scroller.scrollTo({ left: clamped, behavior: 'smooth' });
  settleAndUpdateSnapStop(scroller);
}

function initScrollSnapStopDemo() {
  var scrollers = document.querySelectorAll('#snap-stop-normal, #snap-stop-always');
  scrollers.forEach(function (scroller) {
    scroller.addEventListener(
      'scroll',
      function () {
        updateSnapStopLabel(scroller);
      },
      { passive: true }
    );
    updateSnapStopLabel(scroller);
  });

  var buttons = document.querySelectorAll('.js-snap-stop-action');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var scrollerId = button.getAttribute('data-scroller-id');
      var mode = button.getAttribute('data-mode') || 'jump';
      if (!scrollerId) return;
      var scroller = document.getElementById(scrollerId);
      if (!scroller) return;

      if (mode === 'reset') {
        scroller.scrollTo({ left: 0, behavior: 'smooth' });
        settleAndUpdateSnapStop(scroller);
        return;
      }

      var current = findClosestSnapStopItem(scroller);
      var currentIndex = Math.max(0, Number(current || 1) - 1);
      var nextItem = getItemByIndex(scroller, currentIndex + 4);
      scrollToItemCenter(scroller, nextItem);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollSnapStopDemo);
} else {
  initScrollSnapStopDemo();
}
