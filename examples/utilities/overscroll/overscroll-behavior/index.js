function bindScrollIndicator(scrollerId, valueId) {
  var scroller = document.getElementById(scrollerId);
  var value = document.getElementById(valueId);
  if (!scroller || !value) return;

  function update() {
    value.textContent = String(Math.round(scroller.scrollTop));
  }

  scroller.addEventListener('scroll', update, { passive: true });
  update();
}

function setChildToBottom(childId) {
  var child = document.getElementById(childId);
  if (!child) return;
  child.scrollTop = child.scrollHeight;
}

function initOverscrollDemo() {
  var buttons = document.querySelectorAll('.js-set-child-bottom');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var target = button.getAttribute('data-target');
      if (!target) return;
      setChildToBottom(target);
    });
  });

  bindScrollIndicator('auto-parent', 'auto-parent-value');
  bindScrollIndicator('contain-parent', 'contain-parent-value');
  bindScrollIndicator('none-parent', 'none-parent-value');
  bindScrollIndicator('auto-child', 'auto-child-value');
  bindScrollIndicator('contain-child', 'contain-child-value');
  bindScrollIndicator('none-child', 'none-child-value');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOverscrollDemo);
} else {
  initOverscrollDemo();
}
