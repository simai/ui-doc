function initScrollSnapAlignDemo() {
  var buttons = document.querySelectorAll('.js-snap-scroll');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var scrollerId = button.getAttribute('data-scroller-id');
      var targetId = button.getAttribute('data-target-id');
      var align = button.getAttribute('data-align') || 'start';
      if (!scrollerId || !targetId) return;

      var scroller = document.getElementById(scrollerId);
      var target = document.getElementById(targetId);
      if (!scroller || !target) return;

      var left = target.offsetLeft;
      if (align === 'center') {
        left =
          target.offsetLeft -
          (scroller.clientWidth - target.clientWidth) / 2;
      }

      var maxLeft = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      var clampedLeft = Math.max(0, Math.min(left, maxLeft));

      scroller.scrollTo({
        left: clampedLeft,
        behavior: 'smooth',
      });

      requestAnimationFrame(function () {
        scroller.scrollTo({
          left: clampedLeft,
          behavior: 'smooth',
        });
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollSnapAlignDemo);
} else {
  initScrollSnapAlignDemo();
}
