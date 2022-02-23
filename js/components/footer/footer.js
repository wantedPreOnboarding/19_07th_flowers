(function () {
  "use strict";
  $(window).resize(function () {
    if ($(window).width() < 1024) {
      $('.service-btn').addClass('mobile')
      $('.footer--about dt').css('display', 'none');
      $('.footer--service--contents').addClass('mobile')
      $('.footer--terms').addClass('mobile')
    } else {
      $('.service-btn').removeClass('mobile')
      $('.footer--about dt').css('display', 'block');
      $('.footer--service--contents').removeClass('mobile')
      $('.footer--terms').removeClass('mobile')
    }
  });
})();