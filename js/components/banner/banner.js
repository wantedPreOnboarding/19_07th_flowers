(function () {
  "use strict";
  $(window).resize(function () {
    if ($(window).width() < 1024) {
      $('.banner').addClass('mobile')
      $('.banner--brand').addClass('mobile')
      $('.banner--offline').addClass('mobile')
      $('.banner--mobile').css('display', 'block');
    } else {
      $('.banner').removeClass('mobile')
      $('.banner--mobile').css('display', 'none');
      $('.banner--brand').removeClass('mobile')
      $('.banner--offline').removeClass('mobile')
    }
  });
})();