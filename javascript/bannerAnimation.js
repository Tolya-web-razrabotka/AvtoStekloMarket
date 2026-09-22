(function () {
  var wrapper = document.getElementById('mainBannerBgImg');
  var calloutsContainer = document.getElementById('mainBannerCallouts');
  if (!wrapper || !calloutsContainer || !calloutsContainer.dataset.src) return;

  var CAR_DURATION = 800;
  var START_DELAY = 100;
  var STAGGER_STEP = 150;

  fetch(calloutsContainer.dataset.src)
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to load banner callouts svg');
      return res.text();
    })
    .then(function (svgMarkup) {
      calloutsContainer.innerHTML = svgMarkup;

      var callouts = calloutsContainer.querySelectorAll('#callouts > *');
      callouts.forEach(function (el, i) {
        el.style.transitionDelay = (CAR_DURATION + START_DELAY + i * STAGGER_STEP) + 'ms';
      });

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          wrapper.classList.add('isAnimated');
        });
      });
    })
    .catch(function () {
      // Выноски не подгрузились — фото машины всё равно плавно появится по CSS.
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          wrapper.classList.add('isAnimated');
        });
      });
    });
})();
