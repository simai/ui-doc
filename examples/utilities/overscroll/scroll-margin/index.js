function initScrollMarginDemo() {
  var buttons = document.querySelectorAll('.js-scroll-target');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-target');
      var block = button.getAttribute('data-block') || 'start';
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({
        behavior: 'smooth',
        block: block,
        inline: 'nearest',
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollMarginDemo);
} else {
  initScrollMarginDemo();
}
