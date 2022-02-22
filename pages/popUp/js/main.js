(function () {
  "use strict";
  var vh = require("vh");

  var IMGS = [
    "/pages/popUp/assets/20220221_배송안내.png",
    "/pages/popUp/assets/20220221_배송안내.png",
    "/pages/popUp/assets/20220221_배송안내.png",
  ];
  var indexManager = (function () {
    var currentIndex = 0;

    var getCurrentIndex = function () {
      return currentIndex;
    };

    var setCurrentIndex = function (nextIndex) {
      if (nextIndex < 0 || nextIndex > IMGS.length - 1) return;
      currentIndex = nextIndex;
      popupImageRender();
      indexViewerRender();
    };

    return {
      get: getCurrentIndex,
      set: setCurrentIndex,
    };
  })();

  var $slideWrapper = $(".popup-slide__wrapper");

  function popupImageRender() {
    $slideWrapper.find("ul").animate({
      right: $slideWrapper.find("img").width() * indexManager.get(),
    });
  }

  function indexViewerRender() {
    var $circles = $(".popup-slide__index-viewer > span");
    $circles.removeClass("bgc-red");
    $circles.addClass("bgc-grey");

    $circles.eq(indexManager.get()).addClass("bgc-red");
  }

  $(window).on("load", function () {
    $slideWrapper.find("img").css({
      height: 100 * vh - $(".popup__footer").height() - 5,
    });

    $("[class*=popup-slide__btn]").on("click", function () {
      if (this.getAttribute("class").indexOf("next") !== -1) {
        indexManager.set(indexManager.get() + 1);
      } else {
        indexManager.set(indexManager.get() - 1);
      }
    });
  });
})();
