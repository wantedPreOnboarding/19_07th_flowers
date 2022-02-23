(function () {
  "use strict";

  function headerMobileGroup() {
    $(".header--logo").addClass("header--logo__mobile");
    $(".header--nav").addClass("mobile");
    $(".header--icons").addClass("header--t50");
    $(".header--icons__user").css("display", "none");
    $(".header--wrap").addClass("header--wrap__mobile");
    $(".header--icons__cart").addClass("header--icons__cart__mobile");
    $(".header--shadow").addClass("header--shadow__mobile");
    $(".header--divide").removeAttr("style");
  }

  function headerDesktopGroup() {
    $(".header--logo").removeClass("header--logo__mobile");
    $(".header--nav").removeClass("mobile");
    $(".header--icons").removeClass("header--t50");
    $(".header--icons__user").removeAttr("style");
    $(".header--wrap").removeClass("header--wrap__mobile");
    $(".header--icons__cart").removeClass("header--icons__cart__mobile");
    $(".header--shadow").removeClass("header--shadow__mobile");
    $(".header--divide").css("display", "none");
  }

  var breakpoints = require("breakpoints");

  $(window).resize(function () {
    if ($(window).width() < breakpoints.tablet) {
      headerMobileGroup();
    } else {
      headerDesktopGroup();
    }
  });

  //이동 애니메이션
  $("a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 90,
      },
      500
    );
    return false;
  });
})();
