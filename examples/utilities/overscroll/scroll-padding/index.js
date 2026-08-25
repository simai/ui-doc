function initScrollPaddingDemo() {
  var buttons = document.querySelectorAll('.js-scroll-padding-target');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-target');
      var block = button.getAttribute('data-block') || 'start';
      var inline = button.getAttribute('data-inline') || 'nearest';
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (!target) return;

      target.scrollIntoView({
        behavior: 'smooth',
        block: block,
        inline: inline,
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollPaddingDemo);
} else {
  initScrollPaddingDemo();
}
