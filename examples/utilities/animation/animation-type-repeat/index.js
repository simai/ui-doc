function initAnimationReplay() {
  document.querySelectorAll('.js-animation-replay').forEach(function (button) {
    button.addEventListener('click', function () {
      button.parentElement.querySelectorAll('.js-animation-sample').forEach(function (sample) {
        sample.classList.remove('animation');
        void sample.offsetWidth;
        sample.classList.add('animation');
      });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimationReplay);
} else {
  initAnimationReplay();
}
