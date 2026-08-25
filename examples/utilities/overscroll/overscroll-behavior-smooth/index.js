function demoScroll(boxId, labelId, ratio) {
  var box = document.getElementById(boxId);
  var label = document.getElementById(labelId);
  if (!box || !label) return;

  var target = Math.max(0, (box.scrollHeight - box.clientHeight) * ratio);
  var start = performance.now();
  var stableFrames = 0;

  box.scrollTo({ top: target });

  function track() {
    var delta = Math.abs(box.scrollTop - target);
    if (delta <= 1) stableFrames += 1;
    else stableFrames = 0;

    if (stableFrames >= 2) {
      label.textContent = 'Duration: ' + Math.round(performance.now() - start) + ' ms';
      return;
    }

    requestAnimationFrame(track);
  }

  requestAnimationFrame(track);
}

function initOverscrollBehaviorSmoothDemo() {
  var buttons = document.querySelectorAll('.js-demo-scroll');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var boxId = button.getAttribute('data-box-id');
      var labelId = button.getAttribute('data-label-id');
      var ratioAttr = button.getAttribute('data-ratio');
      var ratio = ratioAttr == null ? 0 : Number(ratioAttr);
      if (!boxId || !labelId || Number.isNaN(ratio)) return;
      demoScroll(boxId, labelId, ratio);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOverscrollBehaviorSmoothDemo);
} else {
  initOverscrollBehaviorSmoothDemo();
}
