(function () {
  "use strict";
  var vh = require("vh");
  var slideIndexManager = require("slideIndexManager");

  $(window).on("load", function () {
    $(".popup-slide__wrapper")
      .find("img")
      .css({
        height: 100 * vh - $(".popup__footer").height() - 5,
      });

    $("[class*=popup-slide__btn]").on("click", function () {
      if (this.getAttribute("class").indexOf("next") !== -1) {
        slideIndexManager.set(slideIndexManager.get() + 1);
      } else {
        slideIndexManager.set(slideIndexManager.get() - 1);
      }
    });

    $(".popup-slide__index-viewer").on("click", function (event) {
      if (event.target.tagName !== "BUTTON") return;

      var selectedIndex = $(event.currentTarget)
        .find("button")
        .index($(event.target));

      slideIndexManager.set(selectedIndex);
    });

    $(".popup__close").on("click", function () {
      window.close();
    });
  });

  $(window).on("beforeunload", function () {
    var DAY = 1000 * 60 * 60 * 24; // 1000(ms - 1초) * 60(s - 1분) * 60(h - 1시간) * 24(d - 24시간)
    var opener = window.opener;

    if (!opener) return;

    opener.localStorage.setItem(
      "popUpNoOpenUntil",
      $("#popup__close--option-check").is(":checked") ? Date.now() + DAY : null
    );
  });
})();
