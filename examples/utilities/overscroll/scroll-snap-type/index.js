function findClosestSnapItem(scroller) {
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

function updateSnapTypeLabel(scroller) {
  var labelId = scroller.id + '-active';
  var label = document.getElementById(labelId);
  if (!label) return;
  label.textContent = findClosestSnapItem(scroller);
}

function settleAndUpdate(scroller) {
  var stable = 0;
  var lastLeft = scroller.scrollLeft;

  function tick() {
    var current = scroller.scrollLeft;
    if (Math.abs(current - lastLeft) < 0.5) stable += 1;
    else stable = 0;
    lastLeft = current;

    if (stable >= 3) {
      updateSnapTypeLabel(scroller);
      return;
    }
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initScrollSnapTypeDemo() {
  var scrollers = document.querySelectorAll('#snap-type-mandatory, #snap-type-proximity');
  scrollers.forEach(function (scroller) {
    scroller.addEventListener('scroll', function () {
      updateSnapTypeLabel(scroller);
    }, { passive: true });
    updateSnapTypeLabel(scroller);
  });

  var buttons = document.querySelectorAll('.js-snap-type-action');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var scrollerId = button.getAttribute('data-scroller-id');
      var mode = button.getAttribute('data-mode') || 'mid-gap';
      if (!scrollerId) return;
      var scroller = document.getElementById(scrollerId);
      if (!scroller) return;

      var items = scroller.querySelectorAll('[data-item]');
      if (items.length < 5) return;

      var targetLeft = 0;
      if (mode === 'reset') {
        targetLeft = 0;
      } else {
        var second = items[1];
        var third = items[2];
        var fourth = items[3];
        var fifth = items[4];

        var gapA = ((second.offsetLeft + second.clientWidth) + third.offsetLeft) / 2 - scroller.clientWidth / 2;
        var gapB = ((fourth.offsetLeft + fourth.clientWidth) + fifth.offsetLeft) / 2 - scroller.clientWidth / 2;

        var current = scroller.scrollLeft;
        targetLeft = Math.abs(gapA - current) > Math.abs(gapB - current) ? gapA : gapB;
      }

      var maxLeft = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      var clamped = Math.max(0, Math.min(targetLeft, maxLeft));

      scroller.scrollTo({ left: clamped, behavior: 'smooth' });
      settleAndUpdate(scroller);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollSnapTypeDemo);
} else {
  initScrollSnapTypeDemo();
}
